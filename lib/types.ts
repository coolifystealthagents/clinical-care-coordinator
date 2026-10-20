export type FAQ = { q: string; a: string };
export type Service = {
  slug: string;
  name: string;
  short: string;
  theme: string;
  scope: string;
  tasks: string[];
  licensed: string[];
  inputs: string[];
  outputs: string[];
  triggers: string[];
  launch: string[];
  checks: string[];
  faq: FAQ[];
  reading: { label: string; href: string }[];
};
export type BlogPost = { slug: string; title: string; description: string; category: string; publishedAt: string; readTime: string; thumbnail?: string; sections: { heading: string; paragraphs: string[] }[]; faq: FAQ[]; internalService: string; internalSibling: string; source: { label: string; url: string } };
export type ResearchPost = { slug: string; title: string; summary: string; cluster: string; publishedAt: string; finding: string; thumbnail?: string; methodology?: string; sections?: { heading: string; paragraphs: string[] }[]; faq?: FAQ[]; sources: { label: string; url: string }[] };
export type SiteConfig = {
  name: string; domain: string; siteId: string; niche: string; audience: string; design: string;
  eyebrow: string; hero: string; heroAccent: string; heroBody: string; manifesto: string;
  primary: string; secondary: string; accent: string; canvas: string; ink: string;
  displayFont: string; bodyFont: string; heroImage: string; heroAlt: string;
  services: Service[]; categories: string[]; principles: string[]; sources: { label: string; url: string }[];
};
