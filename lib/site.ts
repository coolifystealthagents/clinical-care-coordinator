import type { SiteConfig } from './types';
export const site: SiteConfig = {
  "name": "Clinical Care Coordinator",
  "domain": "clinicalcarecoordinator.com",
  "siteId": "clinical-care-coordinator",
  "niche": "clinical care teams",
  "audience": "care organizations and clinical operations leaders",
  "design": "clinical",
  "eyebrow": "Care coordination support with thoughtful boundaries",
  "hero": "Keep care handoffs",
  "heroAccent": "clear and human.",
  "heroBody": "Specialist remote coordinators support scheduling, referral records, patient communication, follow up queues, and documentation workflows while clinical judgment stays with licensed professionals.",
  "manifesto": "Continuity improves when every handoff has context, ownership, and a safe escalation path.",
  "primary": "#466b58",
  "secondary": "#cbb8c9",
  "accent": "#d8a58e",
  "canvas": "#f5f2ed",
  "ink": "#26322d",
  "displayFont": "Palatino",
  "bodyFont": "Optima",
  "heroImage": "/hero.png",
  "heroAlt": "Color coded care folders, stethoscope, and calm workflow markers on a bright desk",
  "services": [
    {
      "slug": "patient-scheduling",
      "name": "Patient scheduling support",
      "short": "Coordinate routine scheduling details from approved protocols.",
      "tasks": [
        "Manage approved appointment tasks",
        "Send routine reminders",
        "Document scheduling outcomes",
        "Escalate access barriers"
      ]
    },
    {
      "slug": "referral-coordination",
      "name": "Referral coordination support",
      "short": "Keep referral records, status checks, and handoffs visible.",
      "tasks": [
        "Prepare referral records",
        "Track approved status points",
        "Coordinate document requests",
        "Flag stalled handoffs"
      ]
    },
    {
      "slug": "care-gap-outreach",
      "name": "Care gap outreach support",
      "short": "Prepare and document routine outreach under approved guidance.",
      "tasks": [
        "Maintain outreach queues",
        "Use approved scripts",
        "Record response outcomes",
        "Route clinical questions"
      ]
    },
    {
      "slug": "records-coordination",
      "name": "Records coordination",
      "short": "Organize document requests and receipt status without interpreting clinical content.",
      "tasks": [
        "Prepare request logs",
        "Track authorization status",
        "Record receipt dates",
        "Escalate missing records"
      ]
    },
    {
      "slug": "patient-communication",
      "name": "Patient communication support",
      "short": "Handle routine non-clinical communication with safe escalation rules.",
      "tasks": [
        "Answer approved administrative questions",
        "Document patient context",
        "Route symptom questions",
        "Coordinate approved updates"
      ]
    },
    {
      "slug": "care-team-administration",
      "name": "Care team administration",
      "short": "Prepare meeting, follow up, and work queue records for clinical teams.",
      "tasks": [
        "Prepare coordination summaries",
        "Maintain action logs",
        "Organize meeting materials",
        "Flag overdue items"
      ]
    }
  ],
  "categories": [
    "Care coordination",
    "Referral systems",
    "Patient communication",
    "Role design"
  ],
  "principles": [
    "Top 1 percent selectivity",
    "Clear role boundaries",
    "Reviewable workflows"
  ],
  "sources": [
    {
      "label": "Agency for Healthcare Research and Quality",
      "url": "https://www.ahrq.gov/ncepcr/care/coordination.html"
    }
  ]
};
