import type { Metadata } from 'next';
import Link from 'next/link';
import { indexableResearchPosts } from '@/lib/content';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Administrative Care Workflow Research',
  description: 'Source led briefs for measuring and reviewing administrative care coordination without overstating clinical meaning.',
  alternates: { canonical: `https://${site.domain}/research` },
};

export default function ResearchPage() {
  const clusters = [...new Set(indexableResearchPosts.map((post) => post.cluster))];
  return <main id="main-content">
    <header className="collection-hero research-collection-hero">
      <div><p className="eyebrow">Research library</p><h1>Measure the workflow without overstating the evidence.</h1><p>Source led briefs for leaders who need reproducible definitions, visible limitations, and protected decision boundaries in administrative care operations.</p></div>
      <div className="research-method-card"><p className="eyebrow">How to read the briefs</p><p><strong>Question:</strong> What administrative process is being examined?</p><p><strong>Evidence:</strong> Which source record supports each state?</p><p><strong>Limit:</strong> What cannot be inferred from the measure?</p></div>
    </header>
    <section className="collection-nav" aria-labelledby="browse-research"><div><p className="eyebrow">Research clusters</p><h2 id="browse-research">Find a method for the operating question.</h2></div><nav>{clusters.map((cluster) => <a key={cluster} href={`#${cluster.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{cluster.replace(' research', '')}</a>)}</nav></section>
    {clusters.map((cluster) => <section className="collection-cluster research-cluster" id={cluster.toLowerCase().replace(/[^a-z0-9]+/g, '-')} key={cluster}>
      <div className="cluster-heading"><p className="eyebrow">{cluster}</p><h2>{cluster.replace(' research', '')}</h2><p>Each brief states its question, operational method, protected boundary, limitations, and public source context.</p></div>
      <div className="content-grid">{indexableResearchPosts.filter((post) => post.cluster === cluster).map((post) => <Link className="content-card" href={`/research/${post.slug}`} key={post.slug}>
        {post.thumbnail && <img className="content-thumbnail" src={post.thumbnail} alt={`${post.title} research illustration`} />}
        <span className="pill">{post.cluster}</span><h3>{post.title}</h3><p>{post.summary}</p><p className="meta">Published <time dateTime={post.publishedAt}>{post.publishedAt}</time></p><p className="research-card-finding"><strong>Focus:</strong> {post.finding}</p><span className="text-link">Read the brief</span>
      </Link>)}</div>
    </section>)}
    <section className="collection-context research-context"><div><p className="eyebrow">Evidence policy</p><h2>Administrative findings stay administrative.</h2></div><p>The library does not present workflow completion, routing, acknowledgment, or elapsed time as proof of clinical quality, safety, urgency, appropriateness, compliance, or patient outcomes. Sources retain their original scope, and qualified owners must assess local applicability.</p></section>
    <section className="collection-conversion"><div><p className="eyebrow">From method to operating routine</p><h2>Build a review process your team can reproduce.</h2><p>Start with one defined population, source inventory, status model, and accountable reviewer.</p></div><Link className="button primary" href="/contact-us">Discuss your workflow</Link></section>
  </main>;
}
