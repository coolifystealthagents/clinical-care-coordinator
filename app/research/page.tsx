import type { Metadata } from 'next';
import Link from 'next/link';
import { DocumentaryHero } from '@/components/Editorial';
import { EditorialCollection } from '@/components/EditorialCollection';
import { indexableResearchPosts } from '@/lib/content';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Administrative Care Workflow Research',
  description: 'Source led briefs for measuring and reviewing administrative care coordination without overstating clinical meaning.',
  alternates: { canonical: `https://${site.domain}/research` },
};

export default function ResearchPage() {
  const items = indexableResearchPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    summary: post.summary,
    topic: post.cluster,
    publishedAt: post.publishedAt,
    image: post.thumbnail,
    finding: post.finding,
  }));
  return <main id="main-content">
    <DocumentaryHero
      eyebrow="Research library"
      title="Measure workflows without overstating evidence."
      lede="Source led briefs for leaders who need reproducible definitions, visible limitations, and protected decision boundaries in administrative care operations."
      image="/editorial/clinical-operations-research.webp"
      alt="Operations analyst comparing de-identified charts with a tablet"
      credit="Jakub Zerdzicki"
      source="https://www.pexels.com/photo/20142114/"
      tone="research"
    ><div className="hero-actions"><a className="button primary" href="#research-library-title">Browse research topics</a><Link className="quiet-link" href="/blog">Read implementation guides</Link></div></DocumentaryHero>
    <EditorialCollection kind="research" items={items} />
    <section className="collection-context research-context"><div><p className="eyebrow">Evidence policy</p><h2>Administrative findings stay administrative.</h2></div><p>The library does not present workflow completion, routing, acknowledgment, or elapsed time as proof of clinical quality, safety, urgency, appropriateness, compliance, or patient outcomes. Sources retain their original scope, and qualified owners must assess local applicability.</p></section>
    <section className="collection-conversion"><div><p className="eyebrow">From method to operating routine</p><h2>Build a review process your team can reproduce.</h2><p>Start with one defined population, source inventory, status model, and accountable reviewer.</p></div><Link className="button primary" href="/contact-us">Discuss your workflow</Link></section>
  </main>;
}
