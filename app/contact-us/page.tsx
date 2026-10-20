import type { Metadata } from 'next';
import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';
import { WorkflowArt } from '@/components/Visuals';
import { site } from '@/lib/site';
import './contact.css';

export const metadata: Metadata = {
  title: 'Contact our care coordination staffing team',
  description: 'Describe one administrative care workflow and discuss a focused remote support role. Do not submit patient or protected health information.',
  alternates: { canonical: '/contact-us' },
};

const steps = [
  ['Workflow discovery', 'Map the administrative queue, current owner, approved systems, handoffs, and recurring exceptions.'],
  ['Role and boundary design', 'Define tasks, access, outputs, clinical limits, reviewer, and transfer rules.'],
  ['Candidate matching', 'Consider remote professionals whose strengths align with the documented administrative work.'],
  ['Controlled launch', 'Begin with a limited scope, sample the output, and adjust the procedure before expansion.'],
];
const faqs = [
  ['What should I put in the form?', 'Describe the organization, administrative workflow, current challenge, and role you want to explore. Do not include patient names, dates of birth, diagnoses, appointment details, record contents, or other protected health information.'],
  ['What can a remote coordinator support?', 'A coordinator can support approved administrative work such as scheduling, referral status, outreach queues, records requests, routine message routing, and care team administration.'],
  ['Can a coordinator give clinical advice?', 'No. Assessment, diagnosis, triage, treatment, prescribing, care plans, clinical interpretation, and emergency decisions stay with licensed professionals and your approved local procedures.'],
  ['Does submitting the form guarantee a placement?', 'No. The form starts a conversation. Fit, scope, availability, terms, and any next steps still need to be discussed and agreed.'],
];

export default function ContactPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'ContactPage', name: `Contact ${site.name}`, url: `https://${site.domain}/contact-us`, description: 'Inquiry page for remote administrative care coordination staffing.', breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `https://${site.domain}` }, { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `https://${site.domain}/contact-us` }] } };
  return <main id="main-content" className="contact-page">
    <section className="contact-first-fold"><div className="contact-intro"><p className="eyebrow">Start with one administrative workflow</p><h1>Tell us where the handoff breaks.</h1><p>Describe a scheduling, referral, outreach, records, message, or team administration queue. We will use that context to discuss role fit and a controlled next step.</p><div className="no-phi-callout"><strong>Keep this inquiry free of patient information.</strong><span>Do not include names, diagnoses, dates, appointment details, record contents, or other protected health information.</span></div><div className="contact-art"><WorkflowArt variant="referral" title="From workflow question to scoped role"/></div></div><div className="contact-form-card"><p className="eyebrow">Workflow inquiry</p><h2>Request a conversation</h2><p>Fields marked with an asterisk are required. Submission does not guarantee a match, meeting, or delivery.</p><LeadForm source="contact-page-consultation"/></div></section>

    <section className="contact-section contact-process"><div className="contact-container"><div className="section-heading"><p className="eyebrow">What follows</p><h2>A clear path from inquiry to possible launch.</h2><p>Each stage depends on fit and agreement. No role begins merely because a form was submitted.</p></div><div className="step-grid">{steps.map(([title, copy]) => <article key={title} className="step-card"><span className="model-mark" aria-hidden="true"/><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="contact-section contact-boundaries"><div className="contact-container boundary-columns"><article><p className="eyebrow">Useful preparation</p><h2>Bring operational context.</h2><ul className="check-list"><li>The recurring administrative queue</li><li>Who owns and reviews it today</li><li>Approved systems and likely access</li><li>What a complete record should show</li><li>When the work must transfer</li></ul></article><article className="boundary-block"><p className="eyebrow">Responsibility stays clear</p><h2>Keep licensed work with licensed people.</h2><p>Remote coordinators do not assess symptoms, triage, diagnose, prescribe, create care plans, interpret clinical records, provide medical advice, or make emergency decisions.</p><p>Your organization retains responsibility for supervision, patient safety, emergency response, privacy, security, authorization, records, access, incident response, and regulated decisions.</p></article></div></section>

    <section className="contact-section"><div className="contact-container"><div className="section-heading"><p className="eyebrow">Focused scopes</p><h2>Review a likely starting point.</h2></div><div className="path-grid">{site.services.map((service) => <Link href={`/services/${service.slug}`} key={service.slug}><h3>{service.name}</h3><p>{service.short}</p><span className="text-link">View this scope</span></Link>)}</div></div></section>

    <section className="contact-section faq-section"><div className="contact-container narrow"><div className="section-heading"><p className="eyebrow">Before you submit</p><h2>Contact questions.</h2></div>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
  </main>;
}
