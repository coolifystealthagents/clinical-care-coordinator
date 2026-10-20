import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EditorialArticle } from '@/components/EditorialArticle';
import { researchPosts, researchBySlug } from '@/lib/content';
import { site } from '@/lib/site';

export function generateStaticParams() { return researchPosts.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = researchBySlug(slug);
  if (!post) return {};
  const path = post.indexable ? `/research/${post.slug}` : (post.archiveCanonical || '/research');
  const image = post.indexable && post.thumbnail ? `https://${site.domain}${post.thumbnail}` : undefined;
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `https://${site.domain}${path}` },
    robots: post.indexable ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: { type: 'article', url: `https://${site.domain}/research/${post.slug}`, title: post.title, description: post.summary, ...(image ? { images: [{ url: image, alt: post.title }] } : {}) },
    twitter: { card: image ? 'summary_large_image' : 'summary', title: post.title, description: post.summary, ...(image ? { images: [image] } : {}) },
  };
}

export default async function ResearchPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchBySlug(slug);
  if (!post) notFound();
  return <EditorialArticle
    kind="Research" slug={post.slug} title={post.title} description={post.summary} category={post.cluster}
    publishedAt={post.publishedAt} indexable={post.indexable === true} thumbnail={post.thumbnail}
    keyTakeaway={post.keyTakeaway || post.finding} sections={post.sections || []} faq={post.faq || []}
    conclusion={post.conclusion} methodology={post.methodology} sources={post.sources}
    sourceContext={post.sourceContext} relatedService={post.relatedService} relatedArticles={post.relatedArticles}
    archiveCanonical={post.archiveCanonical}
  />;
}
