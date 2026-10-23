import Link from 'next/link';
import { site } from '@/lib/site';
import type { ArticleSection, FAQ, RelatedArticle } from '@/lib/types';

type Source = { label: string; url: string };
type EditorialArticleProps = {
  kind: 'Blog' | 'Research';
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  indexable: boolean;
  thumbnail?: string;
  keyTakeaway?: string;
  sections: ArticleSection[];
  faq: FAQ[];
  conclusion?: string;
  methodology?: string;
  sources: Source[];
  sourceContext?: string;
  relatedService?: string;
  relatedArticles?: RelatedArticle[];
  archiveCanonical?: string;
};

export function headingId(heading: string) {
  return heading.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function EditorialArticle(props: EditorialArticleProps) {
  const segment = props.kind.toLowerCase();
  const canonicalPath = `/${segment}/${props.slug}`;
  const canonicalUrl = `https://${site.domain}${canonicalPath}`;
  const guide = props.archiveCanonical || (props.kind === 'Blog' ? '/blog/care-coordination-work-queue-ownership' : '/research/care-handoff-completeness-measurement');

  if (!props.indexable) {
    return <main id="main-content" className="archive-page">
      <header className="article-hero archive-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href={`/${segment}`}>{props.kind}</Link><span aria-hidden="true">/</span><span>Archive</span>
        </nav>
        <p className="eyebrow">Archived supporting note</p>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </header>
      <section className="archive-notice" aria-labelledby="archive-status">
        <div>
          <p className="eyebrow">Editorial status</p>
          <h2 id="archive-status">This note has been retained for reference.</h2>
          <p>Its original URL remains available, but the note is not part of the current indexed collection. It may reflect an earlier outline or narrower treatment of the topic.</p>
          <p>Use the reviewed guide below for current scope boundaries, implementation detail, sources, and related reading.</p>
        </div>
        <Link className="button primary" href={guide}>Read the canonical guide</Link>
      </section>
    </main>;
  }

  const toc = [
    ...props.sections.map((section) => ({ id: headingId(section.heading), label: section.heading })),
    ...(props.methodology ? [{ id: 'methodology', label: 'Methodology' }] : []),
    { id: 'common-questions', label: 'Common questions' },
    { id: 'conclusion', label: 'Conclusion' },
    { id: 'sources', label: 'Sources and context' },
  ];
  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article', headline: props.title,
    description: props.description, datePublished: props.publishedAt, dateModified: props.publishedAt,
    mainEntityOfPage: canonicalUrl, author: { '@type': 'Organization', name: `${site.name} Editorial Team` },
    publisher: { '@type': 'Organization', name: site.name },
    ...(props.thumbnail ? { image: `https://${site.domain}${props.thumbnail}` } : {}),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${site.domain}/` },
      { '@type': 'ListItem', position: 2, name: props.kind, item: `https://${site.domain}/${segment}` },
      { '@type': 'ListItem', position: 3, name: props.title, item: canonicalUrl },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: props.faq.map((item) => ({
      '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return <main id="main-content">
    <JsonLd data={articleSchema} /><JsonLd data={breadcrumbSchema} /><JsonLd data={faqSchema} />
    <header className={`article-hero ${props.kind === 'Research' ? 'research-article-hero' : 'blog-article-hero'}`}>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href={`/${segment}`}>{props.kind}</Link><span aria-hidden="true">/</span><span>{props.category}</span>
      </nav>
      <div className="article-hero-grid">
        <div>
          <p className="eyebrow">{props.category}</p>
          <h1>{props.title}</h1>
          <p className="article-deck">{props.description}</p>
          <p className="meta">By {site.name} Editorial Team · <time dateTime={props.publishedAt}>{`Published ${new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${props.publishedAt}T00:00:00Z`))}`}</time></p>
        </div>
        {props.thumbnail && <figure className="topic-image"><img src={props.thumbnail} alt={`${props.title} topic illustration`} /></figure>}
      </div>
    </header>
    <section className="article-shell">
      <article className="article-prose">
        <div className="takeaway"><p className="eyebrow">Key takeaway</p><p>{props.keyTakeaway}</p></div>
        <nav className="mobile-toc" aria-label="Article contents"><strong>In this article</strong>{toc.map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</nav>
        {props.sections.map((section) => <section id={headingId(section.heading)} key={section.heading}>
          <h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>)}
        {props.methodology && <section id="methodology"><h2>Methodology</h2><p>{props.methodology}</p></section>}
        <section id="common-questions" className="article-faq"><h2>Common questions</h2>{props.faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</section>
        <section id="conclusion"><h2>Conclusion</h2><p>{props.conclusion}</p></section>
        <section id="sources" className="source-panel"><h2>Sources and context</h2><p>{props.sourceContext}</p><ul>{props.sources.map((source) => <li key={source.url}><a href={source.url} rel="noopener noreferrer">{source.label}</a></li>)}</ul></section>
        <section className="article-cta"><p className="eyebrow">Apply this to your workflow</p><h2>Define a support role with visible boundaries.</h2><p>Bring one recurring administrative workflow. We will help map the permitted tasks, evidence, review owner, and escalation points.</p><Link className="button primary" href="/contact-us">Book a free consultation</Link></section>
      </article>
      <aside className="article-rail" aria-label="Article resources">
        <nav className="rail-card" aria-label="On this page"><strong>On this page</strong>{toc.map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</nav>
        <div className="rail-card"><p className="eyebrow">Related service</p><Link href={props.relatedService || '/services'}>Explore the related support role</Link></div>
        <div className="rail-card"><p className="eyebrow">Continue reading</p>{props.relatedArticles?.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        <div className="rail-card rail-cta"><p>Need a controlled first workflow?</p><Link className="button secondary" href="/contact-us">Talk with our team</Link></div>
      </aside>
    </section>
  </main>;
}
