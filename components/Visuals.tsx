import Image from 'next/image';
import reviews from '@/app/data/review-provenance.json';

const labels: Record<string, string[]> = {
  calendar: ['Request', 'Rules checked', 'Time held', 'Confirm'],
  referral: ['Received', 'Documents', 'Destination', 'Acknowledge'],
  outreach: ['Eligible queue', 'Approved script', 'Response', 'Route'],
  records: ['Authorize', 'Request', 'Reconcile', 'Close'],
  message: ['Original note', 'Classify', 'Transfer', 'Acknowledge'],
  team: ['Agenda', 'Decision', 'Owner', 'Action'],
  home: ['Intake', 'Prepare', 'Verify', 'Handoff', 'Escalate', 'Close'],
};

export function WorkflowArt({ variant = 'home', title }: { variant?: string; title: string }) {
  const items = labels[variant] || labels.home;
  return (
    <figure className={`workflow-art art-${variant}`} aria-label={title}>
      <figcaption>{title}</figcaption>
      <div className="ledger-head"><span>Status ledger</span><span>Owner and evidence</span></div>
      <div className="workflow-line" aria-hidden="true">
        {items.map((item, index) => (
          <div className="workflow-node" key={item}>
            <span className="node-dot" />
            <strong>{item}</strong>
            <small>{index === items.length - 2 ? 'Licensed review when needed' : 'Recorded next action'}</small>
          </div>
        ))}
      </div>
      <div className="ledger-note"><span>Boundary</span><strong>Administrative preparation never replaces clinical judgment.</strong></div>
    </figure>
  );
}

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
