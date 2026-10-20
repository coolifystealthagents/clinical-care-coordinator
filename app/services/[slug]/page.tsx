import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { WorkflowArt } from '@/components/Visuals';
import { site } from '@/lib/site';
import { serviceBySlug } from '@/lib/content';

export function generateStaticParams() { return site.services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} for care teams`,
    description: `${service.short} Review the tasks, inputs, outputs, escalation triggers, launch steps, and licensed boundaries for this remote support role.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

function ListBlock({ title, intro, items, className = '' }: { title: string; intro?: string; items: string[]; className?: string }) {
  return <article className={`service-block ${className}`}><h2>{title}</h2>{intro && <p>{intro}</p>}<ul className="check-list">{items.map((item) => <li key={item}>{item}</li>)}</ul></article>;
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const url = `https://${site.domain}/services/${service.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${site.domain}` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `https://${site.domain}/services` },
        { '@type': 'ListItem', position: 3, name: service.name, item: url },
      ] },
      { '@type': 'Service', name: service.name, description: service.scope, url, serviceType: 'Remote administrative staffing support', provider: { '@id': `https://${site.domain}/#organization` }, areaServed: 'Remote' },
      { '@type': 'FAQPage', mainEntity: service.faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
    ],
  };

  return <main id="main-content">
    <section className={`service-hero service-hero-${service.theme}`}>
      <div className="hero-copy"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/services">Services</Link><span aria-hidden="true">/</span><span>{service.name}</span></nav><p className="eyebrow">Focused administrative role</p><h1>{service.name}</h1><p className="hero-body">{service.scope}</p><div className="hero-actions"><Link className="button primary" href="/contact-us">Discuss this workflow</Link><a className="quiet-link" href="#scope">Inspect the scope</a></div></div>
      <WorkflowArt variant={service.theme} title={`${service.name} handoff map`} />
    </section>

    <section id="scope" className="section service-intro"><div><p className="eyebrow">Role brief</p><h2>One queue, explicit authority, visible evidence.</h2></div><p>{service.short} The role works from your approved procedure and records what happened, what supports the status, and who owns the next action. Scope changes return to your accountable manager for approval.</p></section>

    <section className="section service-layout">
      <ListBlock title="Administrative work in scope" intro="These tasks can be prepared or coordinated when your written rules, access, and review path are in place." items={service.tasks}/>
      <ListBlock title="What stays with licensed or authorized staff" intro="These decisions are not delegated to the remote coordinator." items={service.licensed} className="boundary-block"/>
      <ListBlock title="Inputs the role needs" intro="The queue should not begin until the current sources and instructions are available." items={service.inputs}/>
      <ListBlock title="Outputs your team can inspect" intro="Each completed item should leave useful evidence rather than an unsupported status." items={service.outputs}/>
      <ListBlock title="Escalation triggers" intro="The coordinator pauses the standard path and transfers the original context when any trigger appears." items={service.triggers} className="escalation-block"/>
      <ListBlock title="Quality checks" intro="A reviewer can sample work against these practical acceptance points." items={service.checks}/>
    </section>

    <section className="section launch-detail"><div><p className="eyebrow">Controlled launch</p><h2>Build the first working version.</h2><p>The initial scope should be narrow enough to observe. Your team remains responsible for system configuration, access approval, supervision, and every professional decision.</p></div><div className="launch-list">{service.launch.map((item) => <article key={item}><span className="launch-dot" aria-hidden="true"/><h3>{item}</h3><p>Document the rule, responsible owner, evidence, and transfer point for this part of the launch.</p></article>)}</div></section>

    <section className="section related-reading"><div className="section-heading"><p className="eyebrow">Related reading</p><h2>Go deeper on this workflow.</h2></div><div className="reading-grid">{service.reading.map((item) => <Link key={item.href} href={item.href}><span>Field note</span><h3>{item.label}</h3><span className="text-link">Read the guidance</span></Link>)}</div></section>

    <section className="section faq-section"><div className="section-heading"><p className="eyebrow">Role questions</p><h2>Questions to settle before launch.</h2></div>{service.faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</section>

    <section className="closing"><p className="eyebrow">A practical first conversation</p><h2>Bring the {service.name.toLowerCase()} queue, not patient details.</h2><p>We will discuss its administrative inputs, output, reviewer, and escalation path.</p><Link className="button light" href="/contact-us">Discuss this service</Link></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
  </main>;
}
