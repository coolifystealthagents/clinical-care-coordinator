'use client';

import { KeyboardEvent, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const personalDomains = new Set([
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com',
  'aol.com', 'proton.me', 'protonmail.com',
]);

const companySizes = ['1 to 10', '11 to 50', '51 to 200', '201 to 500', '501+'];
const positionCounts = ['1', '2 to 3', '4 to 10', '11+', 'Not sure yet'];
const referralSources = ['Search engine', 'Referral', 'Healthcare network', 'Social media', 'Stealth Agents', 'Other'];

export function LeadForm({ source = 'contact-page-consultation' }: { source?: string }) {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');

  function validateBusinessEmail(input: HTMLInputElement) {
    const email = input.value.trim().toLowerCase();
    const domain = email.split('@')[1];
    const message = domain && personalDomains.has(domain)
      ? 'Please use your organization email address.'
      : '';
    input.setCustomValidity(message);
    setEmailError(message);
  }

  async function submit(form: HTMLFormElement) {
    if (busy) return;
    const emailInput = emailRef.current;
    if (emailInput) validateBusinessEmail(emailInput);
    if (!form.reportValidity()) return;

    setBusy(true);
    setError('');
    const data = new FormData(form);

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        body: data,
        headers: { 'x-requested-with': 'clinical-care-contact-form' },
      });
      const result = await response.json();
      if (!response.ok || !result.ok || result.status !== 'delivered') {
        setError(result.message || 'We could not deliver your request right now. Your information was not accepted. Please try again later.');
        setBusy(false);
        return;
      }

      const email = String(data.get('email') || '').trim().toLowerCase();
      try {
        window.acrTracker?.trackLead({
          name: `${String(data.get('first_name') || '').trim()} ${String(data.get('last_name') || '').trim()}`.trim(),
          email,
          phone: `${String(data.get('phone_country') || '').trim()} ${String(data.get('phone') || '').trim()}`.trim(),
          business: String(data.get('company') || '').trim(),
          company_size: String(data.get('company_size') || '').trim(),
          positions_to_fill: String(data.get('positions_to_fill') || '').trim(),
          referral_source: String(data.get('referral_source') || '').trim(),
          source,
          formId: 'clinical-care-contact',
        });
        window.acrTracker?.flush();
      } catch {
        // Server delivery succeeded; analytics must not make the visitor resubmit.
      }
      router.push('/thank-you');
    } catch {
      setError('We could not validate your request. Please try again.');
      setBusy(false);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLFormElement>) {
    if (event.key !== 'Enter' || event.target instanceof HTMLTextAreaElement) return;
    event.preventDefault();
    void submit(event.currentTarget);
  }

  return (
    <form id="clinical-care-contact" className="lead-form" onKeyDown={handleKeyDown} noValidate={false}>
      <label>
        First Name <span aria-hidden="true">*</span>
        <input name="first_name" autoComplete="given-name" maxLength={80} required />
      </label>
      <label>
        Last Name <span aria-hidden="true">*</span>
        <input name="last_name" autoComplete="family-name" maxLength={80} required />
      </label>
      <label className="form-wide">
        Business Email <span aria-hidden="true">*</span>
        <input
          ref={emailRef}
          name="email"
          type="email"
          autoComplete="email"
          maxLength={160}
          aria-invalid={Boolean(emailError)}
          aria-describedby="email-help email-error"
          onChange={(event) => validateBusinessEmail(event.currentTarget)}
          required
        />
      </label>
      <p id="email-help" className="form-help form-wide">Use your organization email. Personal email providers are not accepted.</p>
      {emailError && <p id="email-error" className="form-error form-wide" role="alert">{emailError}</p>}
      <label>
        Country code
        <select name="phone_country" defaultValue="+1" aria-label="Phone country code">
          <option value="+1">US/CA +1</option><option value="+44">UK +44</option>
          <option value="+61">AU +61</option><option value="+63">PH +63</option><option value="other">Other</option>
        </select>
      </label>
      <label>
        Phone Number
        <input name="phone" type="tel" autoComplete="tel-national" inputMode="tel" maxLength={32} pattern="[0-9 ()+.-]{5,32}" />
      </label>
      <label>
        Company Name <span aria-hidden="true">*</span>
        <input name="company" autoComplete="organization" maxLength={120} required />
      </label>
      <label>
        Website / URL
        <input name="company_website" type="url" autoComplete="url" maxLength={240} placeholder="https://" />
      </label>
      <label className="form-wide">
        Company Size <span aria-hidden="true">*</span>
        <select name="company_size" defaultValue="" required>
          <option value="" disabled>Select company size</option>
          {companySizes.map((value) => <option key={value}>{value}</option>)}
        </select>
      </label>
      <label className="form-wide">
        How Many Positions to Fill <span aria-hidden="true">*</span>
        <select name="positions_to_fill" defaultValue="" required>
          <option value="" disabled>Select positions</option>
          {positionCounts.map((value) => <option key={value}>{value}</option>)}
        </select>
      </label>
      <label className="form-wide">
        How Did You Hear About Us? <span aria-hidden="true">*</span>
        <select name="referral_source" defaultValue="" required>
          <option value="" disabled>Select a source</option>
          {referralSources.map((value) => <option key={value}>{value}</option>)}
        </select>
      </label>
      <p className="form-warning form-wide">Do not include patient names, diagnoses, appointment details, or other protected health information.</p>
      <label className="form-wide">
        Administrative workflow only
        <textarea name="message" rows={4} maxLength={800} placeholder="Describe the administrative queue, current owner, and handoff challenge." />
      </label>
      <input type="hidden" name="source" value={source} />
      <label className="honeypot" aria-hidden="true">
        Website<input name="website_url" tabIndex={-1} autoComplete="off" />
      </label>
      {error && <p className="form-error form-wide" role="alert">{error}</p>}
      <button className="button primary form-wide" disabled={busy} type="button" onClick={(event) => void submit(event.currentTarget.form!)}>
        {busy ? 'Sending request…' : 'Request a free consultation'}
      </button>
      <p className="form-privacy form-wide">By submitting, you agree that we may contact you about your staffing request. Do not send patient information through this form.</p>
    </form>
  );
}
