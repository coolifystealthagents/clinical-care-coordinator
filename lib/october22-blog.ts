import type { BlogPost } from './types';

export const october22BlogPosts: BlogPost[] = [
  {
    "slug": "referral-intake-tracking",
    "title": "Track Referral Intake Without Losing Ownership",
    "description": "A queue for referral source, urgency, required records, and owner.",
    "category": "Care coordination",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/referral-intake-tracking.webp",
    "indexable": true,
    "keyTakeaway": "Track Referral Intake Without Losing Ownership works when the record, owner, and decision boundary are visible before the queue grows.",
    "sections": [
      {
        "heading": "Set the referral intake scope",
        "paragraphs": [
          "Track Referral Intake Without Losing Ownership starts with a written boundary. Name the patient or population, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine coordination separate from clinical judgment.",
          "The main risk is that a referral can wait without an owner or a complete record. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes referral, source, received time, patient, urgency, missing records, owner, and status. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Care coordination lead confirms the decision or exception. The coordination role can log the referral, check completeness, and route clinical questions, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about eligibility, clinical appropriateness, and scheduling priority remain with the authorized clinical or operational owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable coordinator should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review age, missing records, and unassigned referrals. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a referral arrives without the required clinical summary. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one referral source. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for referral intake?",
        "a": "Decisions about eligibility, clinical appropriateness, and scheduling priority and any exception outside the written rule stay with the authorized clinical or operational owner."
      },
      {
        "q": "What should the coordination role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including referral, source, received time, patient, urgency, missing records, owner, and status."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that age, missing records, and unassigned referrals are visible and reproducible."
      }
    ],
    "conclusion": "Use one bounded workflow to test whether the record, owner, and escalation path are clear before expanding referral intake.",
    "sourceContext": "Public guidance provides context for record design and review. It does not replace clinical, legal, or compliance review.",
    "internalService": "/services/referral-coordination",
    "internalSibling": "/blog/care-plan-task-register",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "care-plan-task-register",
    "title": "Keep a Care Plan Task Register",
    "description": "A register for tasks, owners, due dates, and completion evidence.",
    "category": "Care coordination",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/care-plan-task-register.webp",
    "indexable": true,
    "keyTakeaway": "Keep a Care Plan Task Register works when the record, owner, and decision boundary are visible before the queue grows.",
    "sections": [
      {
        "heading": "Set the care plan tasks scope",
        "paragraphs": [
          "Keep a Care Plan Task Register starts with a written boundary. Name the patient or population, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine coordination separate from clinical judgment.",
          "The main risk is that a task can be discussed and then lost without an owner or due date. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes patient, task, source, owner, due date, status, and completion evidence. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Care coordinator confirms the decision or exception. The coordination role can maintain the register, send approved reminders, and route changes, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about clinical plan changes and priority decisions remain with the authorized clinical or operational owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable coordinator should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review open tasks, overdue items, and tasks without owners. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a follow-up task is completed but not documented. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one care plan type. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for care plan tasks?",
        "a": "Decisions about clinical plan changes and priority decisions and any exception outside the written rule stay with the authorized clinical or operational owner."
      },
      {
        "q": "What should the coordination role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including patient, task, source, owner, due date, status, and completion evidence."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that open tasks, overdue items, and tasks without owners are visible and reproducible."
      }
    ],
    "conclusion": "Use one bounded workflow to test whether the record, owner, and escalation path are clear before expanding care plan tasks.",
    "sourceContext": "Public guidance provides context for record design and review. It does not replace clinical, legal, or compliance review.",
    "internalService": "/services/care-plan-support",
    "internalSibling": "/blog/referral-intake-tracking",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "appointment-follow-up-queue",
    "title": "Run an Appointment Follow-Up Queue",
    "description": "A queue for reminders, no-shows, rescheduling, and next steps.",
    "category": "Patient support",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/appointment-follow-up-queue.webp",
    "indexable": true,
    "keyTakeaway": "Run an Appointment Follow-Up Queue works when the record, owner, and decision boundary are visible before the queue grows.",
    "sections": [
      {
        "heading": "Set the appointment follow-up scope",
        "paragraphs": [
          "Run an Appointment Follow-Up Queue starts with a written boundary. Name the patient or population, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine coordination separate from clinical judgment.",
          "The main risk is that a missed appointment can go unnoticed without a follow-up owner. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes patient, appointment, date, outcome, follow-up action, owner, and status. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Patient support lead confirms the decision or exception. The coordination role can send approved reminders, record outcomes, and route clinical questions, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about clinical urgency and scheduling exceptions remain with the authorized clinical or operational owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable coordinator should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review no-show follow-up, reschedule time, and unanswered outreach. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a patient misses a follow-up visit and does not respond. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one appointment type. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for appointment follow-up?",
        "a": "Decisions about clinical urgency and scheduling exceptions and any exception outside the written rule stay with the authorized clinical or operational owner."
      },
      {
        "q": "What should the coordination role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including patient, appointment, date, outcome, follow-up action, owner, and status."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that no-show follow-up, reschedule time, and unanswered outreach are visible and reproducible."
      }
    ],
    "conclusion": "Use one bounded workflow to test whether the record, owner, and escalation path are clear before expanding appointment follow-up.",
    "sourceContext": "Public guidance provides context for record design and review. It does not replace clinical, legal, or compliance review.",
    "internalService": "/services/appointment-support",
    "internalSibling": "/blog/care-plan-task-register",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "patient-outreach-consent",
    "title": "Record Patient Outreach Consent",
    "description": "A record for consent, channel, preferences, and opt-out.",
    "category": "Patient support",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/patient-outreach-consent.webp",
    "indexable": true,
    "keyTakeaway": "Record Patient Outreach Consent works when the record, owner, and decision boundary are visible before the queue grows.",
    "sections": [
      {
        "heading": "Set the patient outreach consent scope",
        "paragraphs": [
          "Record Patient Outreach Consent starts with a written boundary. Name the patient or population, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine coordination separate from clinical judgment.",
          "The main risk is that an outreach can continue after a patient opts out or changes channel. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes patient, consent status, channel, date, source, preference, and owner. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Patient support lead confirms the decision or exception. The coordination role can check the consent record, use the approved channel, and record opt-out, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about clinical communication and consent interpretation remain with the authorized clinical or operational owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable coordinator should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review consent gaps, opt-outs, and failed contact attempts. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a patient asks to stop text reminders. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one outreach channel. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for patient outreach consent?",
        "a": "Decisions about clinical communication and consent interpretation and any exception outside the written rule stay with the authorized clinical or operational owner."
      },
      {
        "q": "What should the coordination role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including patient, consent status, channel, date, source, preference, and owner."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that consent gaps, opt-outs, and failed contact attempts are visible and reproducible."
      }
    ],
    "conclusion": "Use one bounded workflow to test whether the record, owner, and escalation path are clear before expanding patient outreach consent.",
    "sourceContext": "Public guidance provides context for record design and review. It does not replace clinical, legal, or compliance review.",
    "internalService": "/services/patient-outreach",
    "internalSibling": "/blog/care-plan-task-register",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "care-transition-handoff",
    "title": "Hand Off Care Transitions Safely",
    "description": "A handoff record for discharge, transfer, and next care owner.",
    "category": "Care coordination",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/care-transition-handoff.webp",
    "indexable": true,
    "keyTakeaway": "Hand Off Care Transitions Safely works when the record, owner, and decision boundary are visible before the queue grows.",
    "sections": [
      {
        "heading": "Set the care transitions scope",
        "paragraphs": [
          "Hand Off Care Transitions Safely starts with a written boundary. Name the patient or population, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine coordination separate from clinical judgment.",
          "The main risk is that a transition can lose medication, appointment, or ownership context. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes patient, transition date, sending and receiving owners, records, appointments, and open questions. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Care transition lead confirms the decision or exception. The coordination role can assemble the approved handoff and confirm receipt, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about clinical decisions and discharge readiness remain with the authorized clinical or operational owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable coordinator should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review handoff completeness, acceptance, and follow-up. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a patient is discharged before the follow-up appointment is confirmed. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one transition type. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for care transitions?",
        "a": "Decisions about clinical decisions and discharge readiness and any exception outside the written rule stay with the authorized clinical or operational owner."
      },
      {
        "q": "What should the coordination role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including patient, transition date, sending and receiving owners, records, appointments, and open questions."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that handoff completeness, acceptance, and follow-up are visible and reproducible."
      }
    ],
    "conclusion": "Use one bounded workflow to test whether the record, owner, and escalation path are clear before expanding care transitions.",
    "sourceContext": "Public guidance provides context for record design and review. It does not replace clinical, legal, or compliance review.",
    "internalService": "/services/transition-coordination",
    "internalSibling": "/blog/care-plan-task-register",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "community-resource-directory",
    "title": "Maintain a Community Resource Directory",
    "description": "A review process for resource contacts, eligibility, hours, and referrals.",
    "category": "Care coordination",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/community-resource-directory.webp",
    "indexable": true,
    "keyTakeaway": "Maintain a Community Resource Directory works when the record, owner, and decision boundary are visible before the queue grows.",
    "sections": [
      {
        "heading": "Set the community resources scope",
        "paragraphs": [
          "Maintain a Community Resource Directory starts with a written boundary. Name the patient or population, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine coordination separate from clinical judgment.",
          "The main risk is that an outdated resource can send a patient to the wrong service. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes resource, contact, eligibility, hours, source, review date, and owner. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Resource coordinator confirms the decision or exception. The coordination role can verify approved details and record changes, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about eligibility and clinical appropriateness remain with the authorized clinical or operational owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable coordinator should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review outdated entries, failed referrals, and review age. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a food resource changes its intake hours. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one resource category. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for community resources?",
        "a": "Decisions about eligibility and clinical appropriateness and any exception outside the written rule stay with the authorized clinical or operational owner."
      },
      {
        "q": "What should the coordination role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including resource, contact, eligibility, hours, source, review date, and owner."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that outdated entries, failed referrals, and review age are visible and reproducible."
      }
    ],
    "conclusion": "Use one bounded workflow to test whether the record, owner, and escalation path are clear before expanding community resources.",
    "sourceContext": "Public guidance provides context for record design and review. It does not replace clinical, legal, or compliance review.",
    "internalService": "/services/community-resources",
    "internalSibling": "/blog/care-plan-task-register",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "medication-reconciliation-admin",
    "title": "Support Medication Reconciliation Administration",
    "description": "An administrative boundary for medication lists, sources, and clinical review.",
    "category": "Care coordination",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/medication-reconciliation-admin.webp",
    "indexable": true,
    "keyTakeaway": "Support Medication Reconciliation Administration works when the record, owner, and decision boundary are visible before the queue grows.",
    "sections": [
      {
        "heading": "Set the medication reconciliation administration scope",
        "paragraphs": [
          "Support Medication Reconciliation Administration starts with a written boundary. Name the patient or population, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine coordination separate from clinical judgment.",
          "The main risk is that an administrative update can be mistaken for a clinical medication decision. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes patient, medication list source, date, discrepancy, reviewer, and status. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Clinical owner confirms the decision or exception. The coordination role can collect approved lists, flag discrepancies, and route clinical questions, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about medication changes and clinical appropriateness remain with the authorized clinical or operational owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable coordinator should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review missing lists, discrepancies, and review time. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, two medication lists disagree after a discharge. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one transition type. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for medication reconciliation administration?",
        "a": "Decisions about medication changes and clinical appropriateness and any exception outside the written rule stay with the authorized clinical or operational owner."
      },
      {
        "q": "What should the coordination role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including patient, medication list source, date, discrepancy, reviewer, and status."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that missing lists, discrepancies, and review time are visible and reproducible."
      }
    ],
    "conclusion": "Use one bounded workflow to test whether the record, owner, and escalation path are clear before expanding medication reconciliation administration.",
    "sourceContext": "Public guidance provides context for record design and review. It does not replace clinical, legal, or compliance review.",
    "internalService": "/services/medication-support",
    "internalSibling": "/blog/care-plan-task-register",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "insurance-authorization-tracking",
    "title": "Track Insurance Authorizations",
    "description": "A record for authorization requests, status, dates, and denials.",
    "category": "Care coordination",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/insurance-authorization-tracking.webp",
    "indexable": true,
    "keyTakeaway": "Track Insurance Authorizations works when the record, owner, and decision boundary are visible before the queue grows.",
    "sections": [
      {
        "heading": "Set the insurance authorization scope",
        "paragraphs": [
          "Track Insurance Authorizations starts with a written boundary. Name the patient or population, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine coordination separate from clinical judgment.",
          "The main risk is that an authorization can expire or be denied without a follow-up owner. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes patient, payer, service, request date, authorization number, status, expiry, and owner. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Authorization lead confirms the decision or exception. The coordination role can check status, record dates, and route denial questions, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about coverage and clinical necessity remain with the authorized clinical or operational owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable coordinator should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review pending authorizations, expirations, and denials. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, an authorization expires before the scheduled service. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one payer. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for insurance authorization?",
        "a": "Decisions about coverage and clinical necessity and any exception outside the written rule stay with the authorized clinical or operational owner."
      },
      {
        "q": "What should the coordination role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including patient, payer, service, request date, authorization number, status, expiry, and owner."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that pending authorizations, expirations, and denials are visible and reproducible."
      }
    ],
    "conclusion": "Use one bounded workflow to test whether the record, owner, and escalation path are clear before expanding insurance authorization.",
    "sourceContext": "Public guidance provides context for record design and review. It does not replace clinical, legal, or compliance review.",
    "internalService": "/services/authorization-support",
    "internalSibling": "/blog/care-plan-task-register",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "patient-document-request",
    "title": "Track Patient Document Requests",
    "description": "A workflow for requested records, consent, delivery, and retention.",
    "category": "Patient records",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/patient-document-request.webp",
    "indexable": true,
    "keyTakeaway": "Track Patient Document Requests works when the record, owner, and decision boundary are visible before the queue grows.",
    "sections": [
      {
        "heading": "Set the patient document requests scope",
        "paragraphs": [
          "Track Patient Document Requests starts with a written boundary. Name the patient or population, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine coordination separate from clinical judgment.",
          "The main risk is that a record can be released without consent or to the wrong recipient. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes patient, document, request date, consent, recipient, delivery method, and status. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Records lead confirms the decision or exception. The coordination role can check the request, confirm consent, and prepare the approved release, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about release approval and legal exceptions remain with the authorized clinical or operational owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable coordinator should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review request age, missing consent, and delivery failures. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a family member requests records without authorization. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one document type. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for patient document requests?",
        "a": "Decisions about release approval and legal exceptions and any exception outside the written rule stay with the authorized clinical or operational owner."
      },
      {
        "q": "What should the coordination role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including patient, document, request date, consent, recipient, delivery method, and status."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that request age, missing consent, and delivery failures are visible and reproducible."
      }
    ],
    "conclusion": "Use one bounded workflow to test whether the record, owner, and escalation path are clear before expanding patient document requests.",
    "sourceContext": "Public guidance provides context for record design and review. It does not replace clinical, legal, or compliance review.",
    "internalService": "/services/patient-records",
    "internalSibling": "/blog/care-plan-task-register",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "care-team-meeting-notes",
    "title": "Keep Care Team Meeting Notes",
    "description": "A record for attendees, decisions, actions, and follow-up.",
    "category": "Care coordination",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/care-team-meeting-notes.webp",
    "indexable": true,
    "keyTakeaway": "Keep Care Team Meeting Notes works when the record, owner, and decision boundary are visible before the queue grows.",
    "sections": [
      {
        "heading": "Set the care team meetings scope",
        "paragraphs": [
          "Keep Care Team Meeting Notes starts with a written boundary. Name the patient or population, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine coordination separate from clinical judgment.",
          "The main risk is that a decision can be lost when the note has no owner or action. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes meeting, attendees, decision, action, owner, due date, and status. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Care coordination lead confirms the decision or exception. The coordination role can capture approved notes, format actions, and send reminders, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about clinical decisions and care plan changes remain with the authorized clinical or operational owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable coordinator should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review open actions, decisions without owners, and follow-up. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a meeting ends with three actions and no owners. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one recurring meeting. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for care team meetings?",
        "a": "Decisions about clinical decisions and care plan changes and any exception outside the written rule stay with the authorized clinical or operational owner."
      },
      {
        "q": "What should the coordination role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including meeting, attendees, decision, action, owner, due date, and status."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that open actions, decisions without owners, and follow-up are visible and reproducible."
      }
    ],
    "conclusion": "Use one bounded workflow to test whether the record, owner, and escalation path are clear before expanding care team meetings.",
    "sourceContext": "Public guidance provides context for record design and review. It does not replace clinical, legal, or compliance review.",
    "internalService": "/services/care-plan-support",
    "internalSibling": "/blog/care-plan-task-register",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "discharge-follow-up-checklist",
    "title": "Build a Discharge Follow-Up Checklist",
    "description": "A checklist for appointments, medications, resources, and contact.",
    "category": "Care coordination",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/discharge-follow-up-checklist.webp",
    "indexable": true,
    "keyTakeaway": "Build a Discharge Follow-Up Checklist works when the record, owner, and decision boundary are visible before the queue grows.",
    "sections": [
      {
        "heading": "Set the discharge follow-up scope",
        "paragraphs": [
          "Build a Discharge Follow-Up Checklist starts with a written boundary. Name the patient or population, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine coordination separate from clinical judgment.",
          "The main risk is that a patient can leave without a confirmed follow-up or contact path. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes patient, discharge date, appointment, medication list, resource referral, contact, and owner. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Transition lead confirms the decision or exception. The coordination role can check the approved items and route missing clinical information, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about discharge readiness and clinical decisions remain with the authorized clinical or operational owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable coordinator should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review missing appointments, contact failures, and readmissions follow-up. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a discharge summary arrives after the patient leaves. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one discharge type. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for discharge follow-up?",
        "a": "Decisions about discharge readiness and clinical decisions and any exception outside the written rule stay with the authorized clinical or operational owner."
      },
      {
        "q": "What should the coordination role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including patient, discharge date, appointment, medication list, resource referral, contact, and owner."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that missing appointments, contact failures, and readmissions follow-up are visible and reproducible."
      }
    ],
    "conclusion": "Use one bounded workflow to test whether the record, owner, and escalation path are clear before expanding discharge follow-up.",
    "sourceContext": "Public guidance provides context for record design and review. It does not replace clinical, legal, or compliance review.",
    "internalService": "/services/transition-coordination",
    "internalSibling": "/blog/care-plan-task-register",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "care-gap-outreach-list",
    "title": "Review a Care Gap Outreach List",
    "description": "A controlled list for preventive care gaps, outreach, and exclusions.",
    "category": "Population health",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/care-gap-outreach-list.webp",
    "indexable": true,
    "keyTakeaway": "Review a Care Gap Outreach List works when the record, owner, and decision boundary are visible before the queue grows.",
    "sections": [
      {
        "heading": "Set the care gap outreach scope",
        "paragraphs": [
          "Review a Care Gap Outreach List starts with a written boundary. Name the patient or population, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine coordination separate from clinical judgment.",
          "The main risk is that an outreach list can include the wrong patients or ignore exclusions. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes patient, gap, source, last contact, exclusion, owner, and status. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Population health lead confirms the decision or exception. The coordination role can validate the list, send approved outreach, and record responses, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about clinical eligibility and outreach exceptions remain with the authorized clinical or operational owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable coordinator should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review list accuracy, contact rate, and exclusions. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a patient is on the list but has already completed the screening. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one care gap. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for care gap outreach?",
        "a": "Decisions about clinical eligibility and outreach exceptions and any exception outside the written rule stay with the authorized clinical or operational owner."
      },
      {
        "q": "What should the coordination role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including patient, gap, source, last contact, exclusion, owner, and status."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that list accuracy, contact rate, and exclusions are visible and reproducible."
      }
    ],
    "conclusion": "Use one bounded workflow to test whether the record, owner, and escalation path are clear before expanding care gap outreach.",
    "sourceContext": "Public guidance provides context for record design and review. It does not replace clinical, legal, or compliance review.",
    "internalService": "/services/population-health",
    "internalSibling": "/blog/care-plan-task-register",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  }
];
