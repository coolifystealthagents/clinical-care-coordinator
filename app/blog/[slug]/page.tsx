import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EditorialArticle } from '@/components/EditorialArticle';
import { blogPosts, blogBySlug } from '@/lib/content';
import { site } from '@/lib/site';

export function generateStaticParams() { return blogPosts.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogBySlug(slug);
  if (!post) return {};
  const path = post.indexable ? `/blog/${post.slug}` : (post.archiveCanonical || '/blog');
  const image = post.indexable && post.thumbnail ? `https://${site.domain}${post.thumbnail}` : undefined;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://${site.domain}${path}` },
    robots: post.indexable ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: { type: 'article', url: `https://${site.domain}/blog/${post.slug}`, title: post.title, description: post.description, ...(image ? { images: [{ url: image, alt: post.title }] } : {}) },
    twitter: { card: image ? 'summary_large_image' : 'summary', title: post.title, description: post.description, ...(image ? { images: [image] } : {}) },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogBySlug(slug);
  if (!post) notFound();
  return <EditorialArticle
    kind="Blog" slug={post.slug} title={post.title} description={post.description} category={post.category}
    publishedAt={post.publishedAt} indexable={post.indexable === true} thumbnail={post.thumbnail}
    keyTakeaway={post.keyTakeaway} sections={post.sections} faq={post.faq} conclusion={post.conclusion}
    sources={[post.source]} sourceContext={post.sourceContext} relatedService={post.relatedService || post.internalService}
    relatedArticles={post.relatedArticles} archiveCanonical={post.archiveCanonical}
  />;
}
