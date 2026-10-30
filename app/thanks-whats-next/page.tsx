import type { Metadata } from 'next';
import Link from 'next/link';
import './confirmation.css';

export const metadata: Metadata = {
  title: 'Consultation booked | What happens next',
  description: 'Thank you for booking a Clinical Care Coordinator consultation. Prepare administrative workflow context without sharing patient information.',
  robots: { index: false, follow: false },
};

// This is an informational destination, not proof of a booking. Keep it server
// rendered: page visits, query parameters and reloads must not emit conversions.
export default function NextPage() {
  return <main id="main-content" className="confirmation-page">
    <section className="confirmation-hero" aria-labelledby="confirmation-title">
      <p className="eyebrow">Clinical Care Coordinator</p>
      <h1 id="confirmation-title">Your consultation is booked.</h1>
      <p>Thank you for booking. Prepare a focused conversation about your team&apos;s administrative workflow and support needs.</p>
      <nav className="confirmation-actions" aria-label="Continue exploring">
        <Link className="button primary" href="/services">Review services</Link>
        <Link className="quiet-link" href="/">Return home</Link>
      </nav>
    </section>

    <section className="confirmation-next" aria-labelledby="next-title">
      <div>
        <h2 id="next-title">What happens next</h2>
        <p>Keep your scheduling confirmation handy. Refer to it for your booked time and any instructions for joining or managing the consultation.</p>
        <div className="confirmation-access">
          <h3>Opened this page directly?</h3>
          <p>Opening this page does not create or verify a booking. If you have not completed scheduling, <Link href="/thank-you" prefetch={false}>choose an available time</Link>.</p>
        </div>
      </div>
      <div className="confirmation-preparation">
        <h3>Bring one recurring workflow</h3>
        <p>Describe where work arrives, its usual volume pattern, and the administrative steps that repeat.</p>
        <h3>Identify the owners</h3>
        <p>Name who performs, reviews, approves, and accepts escalations in the current process.</p>
        <h3>Define a complete handoff</h3>
        <p>Explain what a complete record should show and how your team knows the handoff was accepted.</p>
      </div>
    </section>

    <section className="confirmation-safeguards" aria-labelledby="safeguards-title">
      <h2 id="safeguards-title">Discuss the pattern, not a patient.</h2>
      <p>Do not send patient names, dates of birth, diagnoses, appointment details, record contents, or other protected health information through general inquiries or preparation notes.</p>
      <p>Use hypothetical or deidentified workflow examples until authorized systems, access, and handling procedures have been established by the responsible organization.</p>
      <p className="confirmation-boundary">Administrative preparation never replaces clinical judgment.</p>
    </section>
  </main>;
}
