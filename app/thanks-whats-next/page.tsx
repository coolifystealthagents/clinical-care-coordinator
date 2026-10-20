import type { Metadata } from 'next';
import Link from 'next/link';
import { WorkflowArt } from '@/components/Visuals';

export const metadata: Metadata = {
  title: 'Prepare for a workflow conversation',
  description: 'Prepare useful, nonclinical context for a possible care coordination staffing conversation.',
  robots: { index: false, follow: false },
};

export default function NextPage() {
  return <main id="main-content">
    <section className="conversion-hero conversion-prepare"><div><p className="eyebrow">Prepare the context</p><h1>Make a possible conversation useful.</h1><p>A submitted request or visit to this page does not mean a call is booked. If a conversation takes place, bring operational context rather than patient information.</p></div><WorkflowArt variant="team" title="Prepare the queue, owner, evidence, and boundary"/></section>
    <section className="section prep-board"><div className="section-heading"><p className="eyebrow">What to bring</p><h2>A brief for one recurring workflow.</h2></div><div className="model-grid"><article><span className="model-mark" aria-hidden="true"/><h3>The queue</h3><p>Describe where work arrives, its usual volume pattern, and the administrative steps that repeat.</p></article><article><span className="model-mark" aria-hidden="true"/><h3>The ownership</h3><p>Name who performs, reviews, approves, and accepts escalations in the current process.</p></article><article><span className="model-mark" aria-hidden="true"/><h3>The evidence</h3><p>Explain what a complete record should show and how your team knows the handoff was accepted.</p></article></div></section>
    <section className="section boundary-panel"><div><p className="eyebrow">Keep patient data out</p><h2>Discuss the pattern, not a patient.</h2></div><div><p>Do not send patient names, dates of birth, diagnoses, appointment details, record contents, or other protected health information through general inquiries or preparation notes.</p><p>Use hypothetical or deidentified workflow examples until authorized systems, access, and handling procedures have been established by the responsible organization.</p></div></section>
    <section className="conversion-onward"><div><h2>Continue exploring.</h2><p>Compare role boundaries and select the service scope closest to your administrative queue.</p></div><Link className="button primary" href="/services">Review services</Link></section>
  </main>;
}
