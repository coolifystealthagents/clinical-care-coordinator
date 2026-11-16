'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { EditorialEmptyState } from './Editorial';

export type EditorialCollectionItem = {
  slug: string;
  title: string;
  summary: string;
  topic: string;
  publishedAt: string;
  meta?: string;
  image?: string;
  finding?: string;
};

export function EditorialCollection({ kind, items }: { kind: 'blog' | 'research'; items: EditorialCollectionItem[] }) {
  const [topic, setTopic] = useState('All topics');
  const topics = useMemo(() => ['All topics', ...new Set(items.map((item) => item.topic))], [items]);
  const visible = topic === 'All topics' ? items : items.filter((item) => item.topic === topic);
  const label = kind === 'blog' ? 'guides' : 'briefs';

  return (
    <section className="editorial-library" aria-labelledby={`${kind}-library-title`}>
      <div className="editorial-library-heading">
        <div className="editorial-filter-block">
          <p className="eyebrow">Browse by topic</p>
          <div className="topic-filters" aria-label={`Filter ${label} by topic`}>
          {topics.map((item) => (
            <button type="button" aria-pressed={topic === item} onClick={() => setTopic(item)} key={item}>{item.replace(' research', '')}</button>
          ))}
          </div>
        </div>
        <div className="editorial-library-intro">
          <h2 id={`${kind}-library-title`}>{kind === 'blog' ? 'Choose the workflow you need to clarify.' : 'Find a method for the operating question.'}</h2>
          <p>{kind === 'blog' ? 'Practical summaries, scope limits, and implementation steps lead to a complete working destination.' : 'Each brief states its operational question, evidence method, protected boundary, and limits.'}</p>
        </div>
      </div>
      <p className="result-count" aria-live="polite">Showing {visible.length} {visible.length === 1 ? label.slice(0, -1) : label}{topic === 'All topics' ? '' : ` in ${topic.replace(' research', '')}`}</p>
      {visible.length > 0 ? (
        <div className="editorial-grid">
          {visible.map((item) => (
            <Link className="editorial-card" href={`/${kind}/${item.slug}`} key={item.slug}>
              {item.image && <Image src={item.image} alt="" width={1200} height={630} className="editorial-card-image" />}
              <div className="editorial-card-body">
                <span className="pill">{item.topic}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <p className="meta">Published <time dateTime={item.publishedAt}>{item.publishedAt}</time>{item.meta ? ` · ${item.meta}` : ''}</p>
                {item.finding && <p className="research-card-finding"><strong>Focus:</strong> {item.finding}</p>}
                <span className="text-link">Read the {kind === 'blog' ? 'guide' : 'brief'}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : <EditorialEmptyState kind={label} />}
    </section>
  );
}
