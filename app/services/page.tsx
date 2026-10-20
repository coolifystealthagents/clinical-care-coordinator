import type { Metadata } from 'next';
import Link from 'next/link';
import { WorkflowArt } from '@/components/Visuals';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Administrative care coordination services',
  description: 'Compare six focused remote coordination roles for scheduling, referrals, outreach, records, messages, and care team administration.',
  alternates: { canonical: '/services' },
};

const model = [
  ['Define the queue', 'Name the approved source, current owner, completion evidence, and exceptions before work moves.'],
  ['Prepare and coordinate', 'A remote coordinator follows the documented path and keeps status, source, and next action visible.'],
  ['Review and improve', 'Your accountable team samples outputs, resolves escalations, and approves any change in scope.'],
];

export default function ServicesPage() {
  return <main id="main-content">
    <section className="service-index-hero">
      <div><p className="eyebrow">Administrative support scopes</p><h1>Choose the queue. Then design the handoff.</h1><p>Six focused service lines help care teams add administrative continuity without transferring clinical authority. Compare the work, the evidence, and the boundary before choosing a starting point.</p><div className="hero-actions"><Link className="button primary" href="/contact-us">Discuss one workflow</Link><a className="quiet-link" href="#service-collection">Compare service lines</a></div></div>
      <WorkflowArt variant="home" title="A service model built around visible ownership" />
    </section>

    <section id="service-collection" className="section ruled-section">
      <div className="section-heading"><p className="eyebrow">Six focused roles</p><h2>Find the closest operational fit.</h2><p>Each scope starts with administrative work that can be described, checked, and handed back when judgment is required.</p></div>
      <div className="service-grid">{site.services.map((service) => <Link className="service-card" href={`/services/${service.slug}`} key={service.slug}><span className={`service-symbol symbol-${service.theme}`} aria-hidden="true"/><p className="card-kicker">{service.theme === 'message' ? 'Communication queue' : `${service.theme} workflow`}</p><h3>{service.name}</h3><p>{service.short}</p><p className="boundary-line"><strong>Boundary:</strong> {service.licensed[0]} stays with the authorized owner.</p><span className="text-link">Review scope and controls</span></Link>)}</div>
    </section>

    <section className="section operating-model"><div className="section-heading"><p className="eyebrow">Operating model</p><h2>Delegation that leaves a trail.</h2></div><div className="model-grid">{model.map(([title, copy]) => <article key={title}><span className="model-mark" aria-hidden="true"/><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className="section boundary-panel"><div><p className="eyebrow">Licensed boundary</p><h2>The coordinator supports the path, not the clinical decision.</h2></div><div><p>Remote coordinators can prepare records, maintain approved statuses, send approved administrative messages, and route exceptions. They do not assess symptoms, determine urgency, diagnose, prescribe, create care plans, interpret clinical material, or replace licensed staff.</p><p>Your organization defines supervision, access, privacy controls, emergency procedures, and the professionals who accept escalations.</p></div></section>

    <section className="section launch-path"><div className="section-heading"><p className="eyebrow">Controlled launch path</p><h2>Begin with a workflow small enough to inspect.</h2></div><div className="path-line"><article><h3>Bring the current state</h3><p>Share the administrative steps, systems, queue owner, and recurring failure points. Do not send patient information through the inquiry form.</p></article><article><h3>Set acceptance rules</h3><p>Agree on inputs, output evidence, access, response rules, and the exact point where the work transfers.</p></article><article><h3>Test and review</h3><p>Use a limited initial scope, review a sample, and revise the procedure before adding volume or adjacent tasks.</p></article></div></section>

    <section className="closing"><p className="eyebrow">Bring one recurring queue</p><h2>Turn a coordination problem into a reviewable role.</h2><p>We can discuss fit and next steps without collecting patient or clinical details.</p><Link className="button light" href="/contact-us">Start the conversation</Link></section>
  </main>;
}
