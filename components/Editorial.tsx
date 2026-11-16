import Image from 'next/image';
import type { ReactNode } from 'react';

type DocumentaryHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  image: string;
  alt: string;
  credit: string;
  source: string;
  tone?: 'home' | 'blog' | 'research';
  children?: ReactNode;
};

export function DocumentaryHero({ eyebrow, title, lede, image, alt, credit, source, tone = 'home', children }: DocumentaryHeroProps) {
  return (
    <header className={`documentary-hero documentary-hero-${tone}`}>
      <div className="documentary-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-body">{lede}</p>
        {children}
      </div>
      <figure className="documentary-media">
        <Image src={image} alt={alt} fill priority sizes="(max-width: 950px) 90vw, 52vw" />
        <figcaption>Photo by <a href={source} rel="noopener noreferrer">{credit}</a> on Pexels.</figcaption>
      </figure>
    </header>
  );
}

export function EditorialEmptyState({ kind }: { kind: 'guides' | 'briefs' }) {
  return (
    <div className="editorial-empty" role="status">
      <p className="eyebrow">No matching {kind}</p>
      <h3>Choose another topic to continue.</h3>
      <p>The full library remains available from the All topics filter.</p>
    </div>
  );
}
