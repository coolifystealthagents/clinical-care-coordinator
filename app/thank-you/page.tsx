import type { Metadata } from 'next';
import Link from 'next/link';
import { WorkflowArt } from '@/components/Visuals';

const bookingUrl = 'https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&dt=&em=1&Si=1';

export const metadata: Metadata = {
  title: 'Contact request recorded',
  description: 'Your contact request was recorded through lead attribution. Choose an available consultation time if you would like to continue.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <main id="main-content">
    <section className="conversion-hero conversion-accepted"><div><p className="eyebrow">Contact request recorded</p><h1>Your request reached the next step.</h1><p>Your contact and organization fields were recorded through our lead attribution service. The optional workflow description was not delivered to an external inquiry inbox. This does not guarantee a meeting, match, placement, or service delivery.</p><Link className="quiet-link" href="#prepare">See how to prepare</Link></div><WorkflowArt variant="calendar" title="Move from an inquiry to a prepared conversation"/></section>
    <section className="section booking-section"><div className="section-heading"><p className="eyebrow">Optional scheduling</p><h2>Choose an available time.</h2><p>The scheduling tool below is the only calendar on this site. Any displayed availability and confirmation are managed by the scheduling provider.</p><p><a className="button" href={bookingUrl} target="_blank" rel="noopener noreferrer">Open booking calendar in a new tab</a></p></div><iframe className="booking-frame" title="Choose an available consultation time" src={bookingUrl} loading="lazy"/></section>
    <section className="conversion-onward" id="prepare"><div><h2>Prefer to prepare first?</h2><p>Choose one recurring administrative workflow. Note the queue, owners, and what a complete handoff should show. Use hypothetical or deidentified examples, not patient information.</p></div><Link className="button primary" href="/services">Review services</Link></section>
  </main>;
}
