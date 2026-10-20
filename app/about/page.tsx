import type { Metadata } from 'next';
import Link from 'next/link';
import { WorkflowArt } from '@/components/Visuals';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About our administrative care support model',
  description: 'Learn how Clinical Care Coordinator and parent company Stealth Agents shape, match, and support remote administrative care coordination roles.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return <main id="main-content">
    <section className="about-hero"><div><p className="eyebrow">About {site.name}</p><h1>Staff the coordination. Keep authority where it belongs.</h1><p>We help care organizations define focused remote administrative roles around real queues, named owners, reviewable outputs, and explicit escalation.</p><div className="hero-actions"><Link className="button primary" href="/contact-us">Discuss a role</Link><Link className="quiet-link" href="/services">Explore service scopes</Link></div></div><WorkflowArt variant="team" title="Role design from approved input to accountable handoff"/></section>

    <section className="section split-intro"><div><p className="eyebrow">The staffing relationship</p><h2>A person supports your process inside your controls.</h2></div><div><p>Clinical Care Coordinator is a specialist staffing site powered by Stealth Agents. The service helps define an administrative role and connect your organization with remote support whose strengths fit that role.</p><p>The coordinator works within procedures, systems, access, and supervision your organization approves. Your organization directs the work and remains responsible for privacy, security, professional oversight, and regulated decisions.</p></div></section>

    <section className="section role-boundaries"><div className="section-heading"><p className="eyebrow">Truthful scope</p><h2>Useful support without blurred authority.</h2></div><div className="boundary-columns"><article><h3>Administrative support can include</h3><ul className="check-list"><li>Preparing and updating approved work queues</li><li>Tracking status and source evidence</li><li>Sending approved routine communications</li><li>Routing questions and exceptions to named owners</li><li>Maintaining action and handoff records</li></ul></article><article className="boundary-block"><h3>The role does not include</h3><ul className="check-list"><li>Assessing symptoms or clinical urgency</li><li>Diagnosing, prescribing, or giving medical advice</li><li>Creating or approving a care plan</li><li>Interpreting clinical records or professional judgment</li><li>Replacing licensed clinicians or local emergency processes</li></ul></article></div></section>

    <section className="section parent-proof"><div><p className="eyebrow">Powered by Stealth Agents</p><h2>Specialist framing with an established staffing parent.</h2></div><div><p>Stealth Agents provides the broader remote staffing model behind this site. Clinical Care Coordinator applies that model to administrative care coordination, where a precise role brief, careful matching, and ongoing management matter.</p><p>Parent company experience is not a claim of clinical practice or clinical outcomes. The service is staffing support. Licensed work and organizational accountability remain with the customer.</p><a className="quiet-link" href="https://stealthagents.com/" rel="noopener noreferrer">Visit the Stealth Agents website</a></div></section>

    <section className="section launch-detail"><div><p className="eyebrow">Controlled launch</p><h2>Start where the evidence is easiest to review.</h2><p>A narrower first workflow exposes unclear rules and missing ownership before the role expands.</p></div><div className="launch-list"><article><span className="launch-dot" aria-hidden="true"/><h3>Describe one queue</h3><p>Name the source, current owner, repeated steps, and exceptions without sharing patient information in the inquiry.</p></article><article><span className="launch-dot" aria-hidden="true"/><h3>Set the boundary</h3><p>Document approved tasks, minimum access, required output, reviewer, and immediate transfer triggers.</p></article><article><span className="launch-dot" aria-hidden="true"/><h3>Observe the work</h3><p>Sample records, review escalations, and correct the procedure before adding adjacent responsibilities.</p></article></div></section>

    <section className="closing"><p className="eyebrow">Role clarity comes first</p><h2>Bring the workflow that needs continuity.</h2><p>We can explore an administrative staffing fit without collecting patient details.</p><Link className="button light" href="/contact-us">Contact Us</Link></section>
  </main>;
}
