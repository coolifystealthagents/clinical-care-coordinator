"""Read-only browser regression. Requires Playwright and a Chromium executable.
Usage: python scripts/check-confirmation.py ORIGIN OUTPUT_DIR [--baseline]
Set CHROMIUM_PATH to an existing Chromium binary. All non-GET/HEAD and
third-party traffic is blocked context-wide, including analytics and booking.
"""
import json
import os
import sys
from pathlib import Path
from urllib.parse import urlparse
from playwright.sync_api import sync_playwright

origin, output = sys.argv[1:3]
baseline = '--baseline' in sys.argv
out = Path(output)
out.mkdir(parents=True, exist_ok=True)
results = []
blocked = []
with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH'), headless=True, args=['--no-sandbox', '--disable-dev-shm-usage'])
    for width in [1440, 1024, 951, 950, 768, 600, 390, 320]:
        context = browser.new_context(viewport={'width': width, 'height': 900 if width > 600 else 844}, service_workers='block', reduced_motion='reduce', color_scheme='light')
        def guard(route):
            req = route.request
            if req.method not in ('GET', 'HEAD') or urlparse(req.url).netloc != urlparse(origin).netloc or '/ingest/' in req.url or '/cdn-cgi/' in req.url:
                blocked.append({'method': req.method, 'url': req.url.split('?')[0]})
                route.abort()
            else:
                route.continue_()
        context.route('**/*', guard)
        page = context.new_page()
        errors = []
        page.on('pageerror', lambda error: errors.append(str(error)))
        for route in ['/thanks-whats-next', '/thank-you', '/contact-us']:
            response = page.goto(origin + route, wait_until='networkidle')
            assert response.status == 200, (route, response.status)
            page.evaluate('document.fonts.ready')
            geometry = page.evaluate('''() => ({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,h1:document.querySelector('h1').innerText,main:document.querySelector('main').innerText})''')
            assert geometry['scrollWidth'] <= width, (route, width, 'overflow')
            assert page.locator('h1').count() == 1
            assert not errors, errors
            if route == '/thanks-whats-next' and not baseline:
                assert geometry['h1'] == 'Your consultation is booked.'
                assert 'Opening this page does not create or verify a booking.' in geometry['main']
                assert 'patient names, dates of birth, diagnoses, appointment details' in geometry['main']
                assert page.locator('main iframe, main form').count() == 0
                assert page.locator('main a[href="/services"]').count() == 1
                assert page.locator('main a[href="/"]').count() == 1
                assert page.locator('meta[name="robots"]').get_attribute('content') == 'noindex, nofollow'
                assert not any(d in geometry['main'] for d in ['—', '–'])
                for a in page.locator('main .button').all():
                    box = a.bounding_box()
                    assert box['height'] >= 44
                    if width >= 1024:
                        assert a.evaluate('(a) => {const r=document.createRange();r.selectNodeContents(a);return r.getClientRects().length}') == 1
                if width >= 1024:
                    assert page.locator('main .button').first.bounding_box()['y'] < 900
            if route == '/thank-you':
                assert page.locator('iframe').count() == 1
                assert page.locator('iframe').get_attribute('src') == 'https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&dt=&em=1&Si=1'
                if not baseline:
                    assert page.locator('main a[href="/thanks-whats-next"]').count() == 0
                    assert page.locator('#prepare').count() == 1
            if route == '/contact-us':
                assert page.locator('iframe').count() == 0
                assert page.locator('form').count() == 1
            if width in [1440, 390, 320]:
                page.screenshot(path=str(out / (route.strip('/') + '-' + str(width) + '.png')), full_page=True, animations='disabled')
            results.append({'route': route, 'viewport': width, 'overflow': False, 'pageErrors': errors, 'h1': geometry['h1']})
        context.close()
    # Direct access with a booking-looking query, reload, and dark system preference
    # must not become a booking signal or expose query content in the page.
    context = browser.new_context(viewport={'width': 390, 'height': 844}, service_workers='block', color_scheme='dark', reduced_motion='reduce')
    context.route('**/*', guard)
    page = context.new_page()
    page.goto(origin + '/thanks-whats-next?booked=true&name=PRIVATE_TEST_MARKER', wait_until='networkidle')
    page.reload(wait_until='networkidle')
    assert 'PRIVATE_TEST_MARKER' not in page.locator('main').inner_text()
    if not baseline:
        assert page.locator('h1').inner_text() == 'Your consultation is booked.'
        assert page.evaluate("!window.ACR_TRACKER_CONFIG.funnelSteps.some(s => s.path === location.pathname)")
        assert not [r for r in blocked if r['method'] not in ('GET', 'HEAD')], 'Unexpected side-effect request'
        page.keyboard.press('Tab')
        assert page.evaluate("document.activeElement.textContent.includes('Skip to main content')")
        page.keyboard.press('Enter')
        assert page.evaluate("location.hash === '#main-content'")
        page.keyboard.press('Tab')
        assert page.evaluate("!!document.activeElement.closest('main')")
        page.locator('.menu-toggle').click()
        assert page.locator('#primary-menu').is_visible()
        assert page.locator('.menu-toggle').get_attribute('aria-expanded') == 'true'
        page.locator('.menu-toggle').click()
        for link in page.locator('main a').all():
            href = link.get_attribute('href')
            assert context.request.get(origin + href).status == 200, href
    page.screenshot(path=str(out / 'confirmation-dark-preference.png'), full_page=True)
    context.close()
    browser.close()
(out / 'browser-results.json').write_text(json.dumps({'baseline': baseline, 'cases': results, 'blocked': blocked}, indent=2))
print(json.dumps({'cases': len(results), 'blockedRequests': len(blocked), 'status': 'passed'}))
