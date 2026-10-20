import type { Metadata } from 'next';
import Link from 'next/link';
import { indexableBlogPosts } from '@/lib/content';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Care Coordination Guides',
  description: 'Reviewed implementation guides for administrative care workflows, role boundaries, handoffs, and quality checks.',
  alternates: { canonical: `https://${site.domain}/blog` },
};

export default function BlogPage() {
  const categories = [...new Set(indexableBlogPosts.map((post) => post.category))];
  return <main id="main-content">
    <header className="collection-hero blog-collection-hero">
      <div><p className="eyebrow">Implementation guides</p><h1>Build administrative workflows that show their boundaries.</h1><p>Each reviewed guide turns one recurring care operations problem into a practical role, evidence trail, exception path, and review checklist.</p></div>
      <aside><strong>Use this collection to</strong><ul><li>Define permitted administrative tasks</li><li>Protect licensed and authorized decisions</li><li>Make ownership and exceptions inspectable</li></ul></aside>
    </header>
    <section className="collection-nav" aria-labelledby="browse-guides"><div><p className="eyebrow">Browse by work area</p><h2 id="browse-guides">Choose the workflow you need to clarify.</h2></div><nav>{categories.map((category) => <a key={category} href={`#${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{category}</a>)}</nav></section>
    {categories.map((category) => <section className="collection-cluster" id={category.toLowerCase().replace(/[^a-z0-9]+/g, '-')} key={category}>
      <div className="cluster-heading"><p className="eyebrow">{category}</p><h2>{category} guides</h2><p>Reviewed guidance with implementation steps, scope limits, source context, and questions leaders can use in workflow review.</p></div>
      <div className="article-grid">{indexableBlogPosts.filter((post) => post.category === category).map((post) => <Link className="article-card" href={`/blog/${post.slug}`} key={post.slug}>
        {post.thumbnail && <img className="content-thumbnail" src={post.thumbnail} alt={`${post.title} topic illustration`} />}
        <span className="pill">{post.category}</span><h3>{post.title}</h3><p>{post.description}</p><p className="meta">Published {post.publishedAt} · {post.readTime}</p><span className="text-link">Read the guide</span>
      </Link>)}</div>
    </section>)}
    <section className="collection-context"><div><p className="eyebrow">Editorial approach</p><h2>Practical guidance, not clinical direction.</h2></div><p>These guides address administrative preparation, coordination, documentation, and escalation. They do not replace clinical judgment, legal advice, privacy review, security review, or an organization&apos;s own policies. Every workflow should name the qualified owner for protected decisions.</p></section>
    <section className="collection-conversion"><div><p className="eyebrow">Start with one queue</p><h2>Turn a recurring workflow into a controlled support role.</h2><p>We can help define inputs, permitted actions, outputs, review checks, and escalation points for a specialist coordinator.</p></div><Link className="button primary" href="/contact-us">Book a free consultation</Link></section>
  </main>;
}
