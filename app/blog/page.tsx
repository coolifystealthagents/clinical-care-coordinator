import type { Metadata } from 'next';
import Link from 'next/link';
import { DocumentaryHero } from '@/components/Editorial';
import { EditorialCollection } from '@/components/EditorialCollection';
import { indexableBlogPosts } from '@/lib/content';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Care Coordination Guides',
  description: 'Reviewed implementation guides for administrative care workflows, role boundaries, handoffs, and quality checks.',
  alternates: { canonical: `https://${site.domain}/blog` },
};

export default function BlogPage() {
  const items = indexableBlogPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    summary: post.description,
    topic: post.category,
    publishedAt: post.publishedAt,
    meta: post.readTime,
    image: post.thumbnail,
  }));
  return <main id="main-content">
    <DocumentaryHero
      eyebrow="Implementation guides"
      title="Build administrative workflows that show their boundaries."
      lede="Each reviewed guide turns one recurring care operations problem into a practical role, evidence trail, exception path, and review checklist."
      image="/editorial/clinical-editorial-workflow.webp"
      alt="Two clinical staff members collaborating at a workstation"
      credit="Nadezhda Moryak"
      source="https://www.pexels.com/photo/7800551/"
      tone="blog"
    ><div className="hero-actions"><a className="button primary" href="#blog-library-title">Browse topics</a><Link className="quiet-link" href="/services">Connect guidance to a service</Link></div></DocumentaryHero>
    <EditorialCollection kind="blog" items={items} />
    <section className="collection-context"><div><p className="eyebrow">Editorial approach</p><h2>Practical guidance, not clinical direction.</h2></div><p>These guides address administrative preparation, coordination, documentation, and escalation. They do not replace clinical judgment, legal advice, privacy review, security review, or an organization&apos;s own policies. Every workflow should name the qualified owner for protected decisions.</p></section>
    <section className="collection-conversion"><div><p className="eyebrow">Start with one queue</p><h2>Turn a recurring workflow into a controlled support role.</h2><p>We can help define inputs, permitted actions, outputs, review checks, and escalation points for a specialist coordinator.</p></div><Link className="button primary" href="/contact-us">Book a free consultation</Link></section>
  </main>;
}
