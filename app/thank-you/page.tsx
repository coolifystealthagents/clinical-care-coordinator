import type { Metadata } from 'next';
import Link from 'next/link';
import { WorkflowArt } from '@/components/Visuals';

export const metadata: Metadata = {
  title: 'Request accepted',
  description: 'Your workflow inquiry was accepted. Choose an available consultation time if you would like to continue.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <main id="main-content">
    <section className="conversion-hero conversion-accepted"><div><p className="eyebrow">Request accepted</p><h1>Your inquiry reached the next step.</h1><p>Thank you for sharing your administrative workflow. Acceptance confirms the form was received. It does not guarantee a meeting, match, placement, or service delivery.</p><Link className="quiet-link" href="/thanks-whats-next">See how to prepare</Link></div><WorkflowArt variant="calendar" title="Move from accepted inquiry to a prepared conversation"/></section>
    <section className="section booking-section"><div className="section-heading"><p className="eyebrow">Optional scheduling</p><h2>Choose an available time.</h2><p>The scheduling tool below is the only calendar on this site. Any displayed availability and confirmation are managed by the scheduling provider.</p></div><iframe className="booking-frame" title="Choose an available consultation time" src="https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&dt=&em=1&Si=1" loading="lazy"/></section>
    <section className="conversion-onward"><div><h2>Prefer to prepare first?</h2><p>Review what to bring, what not to send, and how the first conversation may be framed.</p></div><Link className="button primary" href="/thanks-whats-next">Review the next steps</Link></section>
  </main>;
}
