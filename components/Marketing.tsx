import Image from 'next/image';
import Link from 'next/link';
import { indexableBlogPosts } from '@/lib/content';
import { site } from '@/lib/site';
import { ReviewLane, TopicVisual, WorkflowArt } from './Visuals';

export function HomePage() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">{site.eyebrow}</p>
          <h1>{site.hero} <em>{site.heroAccent}</em></h1>
          <p className="hero-body">{site.heroBody}</p>
          <div className="hero-actions">
            <Link id="cta-home-hero-contact" className="button primary" href="/contact-us">Start a workflow conversation</Link>
            <Link className="quiet-link" href="/services">Review support scopes</Link>
          </div>
          <ul className="principle-list">{site.principles.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <WorkflowArt title="A visible path from intake to closure" />
      </section>

      <section className="status-strip" aria-label="Coordination operating model">
        <span>Owner named</span><span>Evidence attached</span><span>Next action visible</span><span>Boundary protected</span>
      </section>

      <section className="section split-intro">
        <div><p className="eyebrow">Clinical Operations Ledger</p><h2>Support the coordination. Protect the decision.</h2></div>
        <div><p>{site.manifesto}</p><p>Remote coordinators work inside your approved procedures and systems. Your organization defines access, supervision, privacy controls, emergency paths, and every licensed decision.</p></div>
      </section>

      <section className="section ruled-section">
        <div className="section-heading"><p className="eyebrow">Focused service lines</p><h2>Choose the queue that needs continuity.</h2></div>
        <div className="service-grid">
          {site.services.map((service) => (
            <Link className="service-card" href={`/services/${service.slug}`} key={service.slug}>
              <span className={`service-symbol symbol-${service.theme}`} aria-hidden="true" />
              <h3>{service.name}</h3><p>{service.short}</p><span className="text-link">Inspect the service scope</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section handoff-section">
        <WorkflowArt variant="referral" title="A handoff that can be checked" />
        <div><p className="eyebrow">A controlled launch</p><h2>Start narrow. Learn from the record.</h2><p>Select one recurring queue. Define accepted inputs, completion evidence, the licensed boundary, and named escalation owners. Review a small sample before the scope grows.</p><dl className="ledger-list"><div><dt>Owner</dt><dd>Who accepts the next action</dd></div><div><dt>Evidence</dt><dd>What supports the current status</dd></div><div><dt>Exception</dt><dd>When work pauses and transfers</dd></div></dl><Link className="button primary" href="/contact-us">Map the first workflow</Link></div>
      </section>

      <ReviewLane />

      <section className="section credibility-section">
        <div className="team-photo"><Image src="/brand/stealth-agents-team-bacolod.webp" alt="Stealth Agents team members in the Bacolod office" fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
        <div><p className="eyebrow">Powered by Stealth Agents</p><h2>People behind the operational support.</h2><p>Clinical Care Coordinator is powered by Stealth Agents. Candidate matching and ongoing support are grounded in role clarity, documented expectations, and accountable management.</p><p>This is a staffing service for administrative coordination. It does not provide medical care or replace licensed personnel.</p><Link className="quiet-link" href="/about">Read how the model works</Link></div>
      </section>

      <section className="section">
        <div className="section-heading"><p className="eyebrow">Operations field notes</p><h2>Guidance built around evidence and boundaries.</h2></div>
        <div className="article-grid">{indexableBlogPosts.slice(0, 3).map((post) => <Link href={`/blog/${post.slug}`} className="article-card" key={post.slug}><TopicVisual title={post.title} src={post.thumbnail} /><span className="pill">{post.category}</span><h3>{post.title}</h3><p>{post.description}</p><span className="text-link">Read the guide</span></Link>)}</div>
      </section>

      <section className="closing"><p className="eyebrow">A practical next action</p><h2>Bring one queue that needs a clearer handoff.</h2><p>We will discuss the role, inputs, outputs, review owner, and escalation boundary without asking for patient information.</p><Link className="button light" href="/contact-us">Contact Us</Link></section>
    </main>
  );
}
