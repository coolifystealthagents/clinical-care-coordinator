import Image from 'next/image';
import reviews from '@/app/data/review-provenance.json';

export function TopicVisual({ title, src }: { title: string; src?: string }) {
  if (src) return <Image className="topic-image" src={src} alt={`Editorial illustration for ${title}`} width={1200} height={630} />;
  return (
    <div className="topic-visual" role="img" aria-label={`Workflow illustration for ${title}`}>
      <span className="topic-mark" />
      <div><small>Care operations note</small><strong>{title}</strong></div>
      <span className="topic-lines" />
    </div>
  );
}

export function ReviewLane() {
  const cards = reviews.records.map((review) => (
    <article className="review-card" key={review.name} tabIndex={0}>
      <p className="stars" aria-label="Five out of five stars">★★★★★</p>
      <h3>{review.headline}</h3><blockquote>“{review.body}”</blockquote>
      <p><strong>{review.name}</strong><br /><span>{review.detail}</span></p>
    </article>
  ));
  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <div className="section-heading"><p className="eyebrow">Parent company client feedback</p><h2 id="reviews-title">What Stealth Agents clients say</h2><p>These reviews concern Stealth Agents services generally. They are not reviews of this clinical site or claims about clinical outcomes.</p></div>
      <div className="review-viewport"><div className="review-track">{cards}<div className="review-copy" aria-hidden="true">{cards}</div></div></div>
      <p className="review-source">Five star reviews reproduced from the <a href={reviews.source} rel="noopener noreferrer">official Stealth Agents homepage</a>. Source verified {reviews.verifiedOn}.</p>
    </section>
  );
}
