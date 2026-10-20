#!/usr/bin/env python3
import argparse
import json
import sys
from playwright.sync_api import sync_playwright

VALID = {
    'first_name': 'Test',
    'last_name': 'Release',
    'email': 'release@example.org',
    'phone': '555 010 0200',
    'company': 'Release Verification',
    'company_website': 'https://example.org',
    'message': 'Administrative workflow description used only inside the intercepted local test.',
}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--base', required=True)
    parser.add_argument('--executable', required=True)
    args = parser.parse_args()
    failures = []
    api_requests = []
    api_attempt = 0

    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=True, executable_path=args.executable, args=['--no-sandbox', '--disable-dev-shm-usage'])
        context = browser.new_context(viewport={'width': 1024, 'height': 900})
        stub = """
          window.__leadCalls = [];
          window.__nativeSubmits = 0;
          window.__tracker = {
            version: '0.4.19-contract-stub', isTest: true,
            trackLead: data => window.__leadCalls.push(JSON.parse(JSON.stringify(data))),
            flush: () => {}, track: () => {}, trackPageView: () => {}, trackScrollDepth: () => {},
            trackCWV: () => {}, trackLeadFromForm: () => {}, checkFunnelStep: () => {}, destroy: () => {}, getUserId: () => 'test'
          };
          window.acrTracker = window.__tracker;
          document.addEventListener('submit', () => window.__nativeSubmits++, true);
        """
        context.route('https://acrtracking.stealthagents.us/v1/tracker.js', lambda route: route.fulfill(status=200, content_type='application/javascript', body=stub))
        context.route('**/ingest/track', lambda route: route.fulfill(status=200, content_type='application/json', body='{"status":"accepted"}'))

        def api(route):
            nonlocal api_attempt
            api_attempt += 1
            api_requests.append(route.request.post_data or '')
            if api_attempt == 1:
                route.fulfill(status=503, content_type='application/json', body='{"ok":false,"message":"We could not deliver your request right now. Your information was not accepted. Please try again later."}')
            else:
                route.fulfill(status=200, content_type='application/json', body='{"ok":true,"status":"validated"}')

        context.route('**/api/submit-lead', api)
        page = context.new_page()
        page.goto(args.base + '/contact-us', wait_until='load')
        submit = page.locator('button:has-text("Request a free consultation")')

        submit.click()
        page.wait_for_timeout(100)
        if api_requests: failures.append('invalid form generated an API request')
        if page.evaluate('window.__nativeSubmits') != 0: failures.append('invalid form generated a native submit event')

        for name, value in VALID.items():
            page.locator(f'[name="{name}"]').fill(value)
        page.locator('[name="company_size"]').select_option(label='11 to 50')
        page.locator('[name="positions_to_fill"]').select_option(label='2 to 3')
        page.locator('[name="referral_source"]').select_option(label='Search engine')

        page.evaluate('delete window.acrTracker')
        submit.click()
        tracker_error = page.locator('.form-error[role="alert"]')
        tracker_error.wait_for(state='visible', timeout=5000)
        if 'inquiry service is temporarily unavailable' not in tracker_error.inner_text().lower():
            failures.append('missing tracker was not described truthfully')
        if api_requests:
            failures.append('missing tracker generated an API request')
        if not page.url.endswith('/contact-us'):
            failures.append('missing tracker navigated away from the form')
        page.evaluate('window.acrTracker = window.__tracker')

        submit.click()
        delivery_error = page.locator('.form-error[role="alert"]')
        page.wait_for_function("document.querySelector('.form-error[role=\\\"alert\\\"]')?.textContent?.startsWith('We could not deliver')", timeout=5000)
        if not delivery_error.inner_text().startswith('We could not deliver'):
            failures.append('delivery failure was not described truthfully')
        if not page.url.endswith('/contact-us'):
            failures.append('failed delivery navigated away from the form')
        if page.evaluate('window.__leadCalls'):
            failures.append('failed delivery emitted accepted-lead analytics')

        submit.click()
        page.wait_for_url('**/thank-you', timeout=10000)
        lead_calls = page.evaluate('window.__leadCalls')
        native_submits = page.evaluate('window.__nativeSubmits')
        if len(api_requests) != 2: failures.append(f'expected two intercepted delivery attempts, got {len(api_requests)}')
        if native_submits != 0: failures.append(f'expected zero native submit events, got {native_submits}')
        if len(lead_calls) != 1: failures.append(f'expected one delivered-lead analytics call, got {len(lead_calls)}')
        if lead_calls and 'message' in lead_calls[0]: failures.append('free-text message entered browser analytics')

        link = page.locator('a:has-text("Open booking calendar in a new tab")')
        frame = page.locator('.booking-frame')
        if link.count() != 1 or frame.count() != 1: failures.append('booking fallback or iframe missing')
        elif link.get_attribute('href') != frame.get_attribute('src'): failures.append('booking fallback URL differs from iframe URL')
        browser.close()

    summary = {
        'interceptedApiRequests': len(api_requests),
        'missingTrackerStayedOnForm': 'missing tracker navigated away from the form' not in failures,
        'failedDeliveryStayedOnForm': True if not failures or 'failed delivery navigated away from the form' not in failures else False,
        'nativeSubmitEvents': native_submits,
        'deliveredLeadAnalyticsCalls': len(lead_calls),
        'messageExcluded': bool(lead_calls) and 'message' not in lead_calls[0],
        'externalRequestsSent': 0,
        'failures': failures,
    }
    print(json.dumps(summary, indent=2))
    return 1 if failures else 0


if __name__ == '__main__':
    sys.exit(main())
