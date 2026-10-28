import type { BlogPost } from './types';

export const october28BlogPosts: BlogPost[] = [
  {
    "slug": "weekly-care-queue-review",
    "title": "Run a weekly review of the care coordination queue",
    "description": "A short weekly review that keeps referrals, reminders, records requests, and patient follow-ups moving with visible evidence.",
    "category": "Care coordination",
    "publishedAt": "2026-10-28",
    "indexable": true,
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-28/weekly-care-queue-review.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A useful the care coordination queue routine starts with a written purpose. Keep every open item tied to a source, owner, and next date, then compare the record with that purpose instead of judging the queue by activity alone."
        ]
      },
      {
        "heading": "What to check first",
        "paragraphs": [
          "Begin with one concrete check: compare the queue with the referral and scheduling records. Keep the example that failed, because a named mismatch is stronger evidence than a general complaint about follow-up quality."
        ]
      },
      {
        "heading": "Build the routine",
        "paragraphs": [
          "Build the the care coordination queue review into a short weekly slot. Open the queue, apply the check, and write one decision for each item. Keep, correct, or escalate are all valid outcomes."
        ]
      },
      {
        "heading": "Handle the exceptions",
        "paragraphs": [
          "Give exceptions their own line in the log. Watch for an item that looks closed but has no confirmation, and record why it escaped the normal rule. That detail shows whether the fix belongs in the record, the owner, or the review step."
        ]
      },
      {
        "heading": "Review the evidence",
        "paragraphs": [
          "Keep the evidence small but dated. Store the item, source, owner, and last patient contact beside the item so a later coordinator can reconstruct what was known at the time."
        ]
      },
      {
        "heading": "What to change next",
        "paragraphs": [
          "End the review with one controlled change. Use the evidence to close or escalate one item that has aged without evidence, then set the next review date. If the change does not improve the evidence, reverse it instead of adding more fields."
        ]
      }
    ],
    "faq": [
      {
        "q": "What can a care coordinator VA prepare for the care coordination queue?",
        "a": "The assistant can gather the source, compare records, label exceptions, and prepare a dated next action. Clinical judgment and approval stay with the licensed care lead."
      },
      {
        "q": "What decision stays with the clinical lead?",
        "a": "The clinical lead decides whether the the care coordination queue evidence is sufficient and whether the patient can move to the next step."
      },
      {
        "q": "How should the team review the care coordination queue?",
        "a": "Sample one routine item, one exception, and one corrected item each week. Check the source, owner, next action, and close evidence."
      }
    ],
    "internalService": "/services/referral-coordination",
    "internalSibling": "/blog/care-coordination-work-queue",
    "source": {
      "label": "Centers for Medicare and Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "referral-completeness-check",
    "title": "Check referral completeness before scheduling",
    "description": "A completeness check that catches missing clinical details, insurance information, and contact preferences before a referral moves forward.",
    "category": "Clinical operations",
    "publishedAt": "2026-10-28",
    "indexable": true,
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-28/referral-completeness-check.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A useful referral completeness routine starts with a written purpose. Confirm the required fields and the source of each value, then compare the record with that purpose instead of judging the queue by activity alone."
        ]
      },
      {
        "heading": "What to check first",
        "paragraphs": [
          "Begin with one concrete check: compare the referral packet with the scheduling record. Keep the example that failed, because a named mismatch is stronger evidence than a general complaint about follow-up quality."
        ]
      },
      {
        "heading": "Build the routine",
        "paragraphs": [
          "Build the referral completeness review into a short weekly slot. Open the queue, apply the check, and write one decision for each item. Keep, correct, or escalate are all valid outcomes."
        ]
      },
      {
        "heading": "Handle the exceptions",
        "paragraphs": [
          "Give exceptions their own line in the log. Watch for a referral that arrives with a verbal diagnosis only, and record why it escaped the normal rule. That detail shows whether the fix belongs in the record, the owner, or the review step."
        ]
      },
      {
        "heading": "Review the evidence",
        "paragraphs": [
          "Keep the evidence small but dated. Store the missing field, source, and request date beside the item so a later coordinator can reconstruct what was known at the time."
        ]
      },
      {
        "heading": "What to change next",
        "paragraphs": [
          "End the review with one controlled change. Use the evidence to add one required field after a repeated delay, then set the next review date. If the change does not improve the evidence, reverse it instead of adding more fields."
        ]
      }
    ],
    "faq": [
      {
        "q": "What can a care coordinator VA prepare for referral completeness?",
        "a": "The assistant can gather the source, compare records, label exceptions, and prepare a dated next action. Clinical judgment and approval stay with the licensed care lead."
      },
      {
        "q": "What decision stays with the clinical lead?",
        "a": "The clinical lead decides whether the referral completeness evidence is sufficient and whether the patient can move to the next step."
      },
      {
        "q": "How should the team review referral completeness?",
        "a": "Sample one routine item, one exception, and one corrected item each week. Check the source, owner, next action, and close evidence."
      }
    ],
    "internalService": "/services/referral-coordination",
    "internalSibling": "/blog/clinical-referral-handoff-checklist",
    "source": {
      "label": "Centers for Medicare and Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "appointment-reminder-boundary",
    "title": "Set a reminder boundary that respects patient contact preferences",
    "description": "A practical contact-frequency and channel rule for appointment reminders that reduces confusion without hiding access barriers.",
    "category": "Patient access",
    "publishedAt": "2026-10-28",
    "indexable": true,
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-28/appointment-reminder-boundary.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A useful appointment reminder boundaries routine starts with a written purpose. Record the patient channel, timing, and consent before sending, then compare the record with that purpose instead of judging the queue by activity alone."
        ]
      },
      {
        "heading": "What to check first",
        "paragraphs": [
          "Begin with one concrete check: compare the reminder log with the documented preference. Keep the example that failed, because a named mismatch is stronger evidence than a general complaint about follow-up quality."
        ]
      },
      {
        "heading": "Build the routine",
        "paragraphs": [
          "Build the appointment reminder boundaries review into a short weekly slot. Open the queue, apply the check, and write one decision for each item. Keep, correct, or escalate are all valid outcomes."
        ]
      },
      {
        "heading": "Handle the exceptions",
        "paragraphs": [
          "Give exceptions their own line in the log. Watch for a patient who changes channels after a missed call, and record why it escaped the normal rule. That detail shows whether the fix belongs in the record, the owner, or the review step."
        ]
      },
      {
        "heading": "Review the evidence",
        "paragraphs": [
          "Keep the evidence small but dated. Store the preference, reminder date, and response beside the item so a later coordinator can reconstruct what was known at the time."
        ]
      },
      {
        "heading": "What to change next",
        "paragraphs": [
          "End the review with one controlled change. Use the evidence to remove one reminder rule that creates duplicate contact, then set the next review date. If the change does not improve the evidence, reverse it instead of adding more fields."
        ]
      }
    ],
    "faq": [
      {
        "q": "What can a care coordinator VA prepare for appointment reminder boundaries?",
        "a": "The assistant can gather the source, compare records, label exceptions, and prepare a dated next action. Clinical judgment and approval stay with the licensed care lead."
      },
      {
        "q": "What decision stays with the clinical lead?",
        "a": "The clinical lead decides whether the appointment reminder boundaries evidence is sufficient and whether the patient can move to the next step."
      },
      {
        "q": "How should the team review appointment reminder boundaries?",
        "a": "Sample one routine item, one exception, and one corrected item each week. Check the source, owner, next action, and close evidence."
      }
    ],
    "internalService": "/services/patient-scheduling",
    "internalSibling": "/blog/patient-scheduling-escalation-path",
    "source": {
      "label": "Centers for Medicare and Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "care-gap-outreach-log",
    "title": "Keep an outreach log for every care gap",
    "description": "A structured outreach log that shows who was contacted, which gap was addressed, and what happens next when there is no response.",
    "category": "Care coordination",
    "publishedAt": "2026-10-28",
    "indexable": true,
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-28/care-gap-outreach-log.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A useful care gap outreach routine starts with a written purpose. Record the gap, contact attempt, and next action together, then compare the record with that purpose instead of judging the queue by activity alone."
        ]
      },
      {
        "heading": "What to check first",
        "paragraphs": [
          "Begin with one concrete check: compare the outreach log with the care plan. Keep the example that failed, because a named mismatch is stronger evidence than a general complaint about follow-up quality."
        ]
      },
      {
        "heading": "Build the routine",
        "paragraphs": [
          "Build the care gap outreach review into a short weekly slot. Open the queue, apply the check, and write one decision for each item. Keep, correct, or escalate are all valid outcomes."
        ]
      },
      {
        "heading": "Handle the exceptions",
        "paragraphs": [
          "Give exceptions their own line in the log. Watch for a gap closed without a documented patient response, and record why it escaped the normal rule. That detail shows whether the fix belongs in the record, the owner, or the review step."
        ]
      },
      {
        "heading": "Review the evidence",
        "paragraphs": [
          "Keep the evidence small but dated. Store the gap, attempt, channel, and outcome beside the item so a later coordinator can reconstruct what was known at the time."
        ]
      },
      {
        "heading": "What to change next",
        "paragraphs": [
          "End the review with one controlled change. Use the evidence to add one follow-up rule after a missed closure, then set the next review date. If the change does not improve the evidence, reverse it instead of adding more fields."
        ]
      }
    ],
    "faq": [
      {
        "q": "What can a care coordinator VA prepare for care gap outreach?",
        "a": "The assistant can gather the source, compare records, label exceptions, and prepare a dated next action. Clinical judgment and approval stay with the licensed care lead."
      },
      {
        "q": "What decision stays with the clinical lead?",
        "a": "The clinical lead decides whether the care gap outreach evidence is sufficient and whether the patient can move to the next step."
      },
      {
        "q": "How should the team review care gap outreach?",
        "a": "Sample one routine item, one exception, and one corrected item each week. Check the source, owner, next action, and close evidence."
      }
    ],
    "internalService": "/services/care-gap-outreach",
    "internalSibling": "/blog/care-coordination-work-queue",
    "source": {
      "label": "Centers for Medicare and Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "records-request-timeline",
    "title": "Track a records request from receipt to closure",
    "description": "A timeline that makes the request date, source, follow-up, and release confirmation visible to the next coordinator.",
    "category": "Clinical operations",
    "publishedAt": "2026-10-28",
    "indexable": true,
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-28/records-request-timeline.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A useful records request timelines routine starts with a written purpose. Record the request, the source, and the promised response date, then compare the record with that purpose instead of judging the queue by activity alone."
        ]
      },
      {
        "heading": "What to check first",
        "paragraphs": [
          "Begin with one concrete check: compare the timeline with the release log. Keep the example that failed, because a named mismatch is stronger evidence than a general complaint about follow-up quality."
        ]
      },
      {
        "heading": "Build the routine",
        "paragraphs": [
          "Build the records request timelines review into a short weekly slot. Open the queue, apply the check, and write one decision for each item. Keep, correct, or escalate are all valid outcomes."
        ]
      },
      {
        "heading": "Handle the exceptions",
        "paragraphs": [
          "Give exceptions their own line in the log. Watch for a release confirmed only by a fax cover sheet, and record why it escaped the normal rule. That detail shows whether the fix belongs in the record, the owner, or the review step."
        ]
      },
      {
        "heading": "Review the evidence",
        "paragraphs": [
          "Keep the evidence small but dated. Store the request, source, follow-up, and receipt beside the item so a later coordinator can reconstruct what was known at the time."
        ]
      },
      {
        "heading": "What to change next",
        "paragraphs": [
          "End the review with one controlled change. Use the evidence to tighten one follow-up interval that keeps slipping, then set the next review date. If the change does not improve the evidence, reverse it instead of adding more fields."
        ]
      }
    ],
    "faq": [
      {
        "q": "What can a care coordinator VA prepare for records request timelines?",
        "a": "The assistant can gather the source, compare records, label exceptions, and prepare a dated next action. Clinical judgment and approval stay with the licensed care lead."
      },
      {
        "q": "What decision stays with the clinical lead?",
        "a": "The clinical lead decides whether the records request timelines evidence is sufficient and whether the patient can move to the next step."
      },
      {
        "q": "How should the team review records request timelines?",
        "a": "Sample one routine item, one exception, and one corrected item each week. Check the source, owner, next action, and close evidence."
      }
    ],
    "internalService": "/services/records-coordination",
    "internalSibling": "/blog/records-request-tracking",
    "source": {
      "label": "Centers for Medicare and Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "patient-message-routing",
    "title": "Route patient messages by clinical urgency and owner",
    "description": "A routing rule that sends scheduling questions, medication concerns, records requests, and urgent symptoms to the right queue without delay.",
    "category": "Patient access",
    "publishedAt": "2026-10-28",
    "indexable": true,
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-28/patient-message-routing.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A useful patient message routing routine starts with a written purpose. Classify the message before assigning the owner, then compare the record with that purpose instead of judging the queue by activity alone."
        ]
      },
      {
        "heading": "What to check first",
        "paragraphs": [
          "Begin with one concrete check: read the full message and check the care team record. Keep the example that failed, because a named mismatch is stronger evidence than a general complaint about follow-up quality."
        ]
      },
      {
        "heading": "Build the routine",
        "paragraphs": [
          "Build the patient message routing review into a short weekly slot. Open the queue, apply the check, and write one decision for each item. Keep, correct, or escalate are all valid outcomes."
        ]
      },
      {
        "heading": "Handle the exceptions",
        "paragraphs": [
          "Give exceptions their own line in the log. Watch for a message that mixes a scheduling request with a symptom, and record why it escaped the normal rule. That detail shows whether the fix belongs in the record, the owner, or the review step."
        ]
      },
      {
        "heading": "Review the evidence",
        "paragraphs": [
          "Keep the evidence small but dated. Store the message, intent, owner, and response time beside the item so a later coordinator can reconstruct what was known at the time."
        ]
      },
      {
        "heading": "What to change next",
        "paragraphs": [
          "End the review with one controlled change. Use the evidence to clarify one routing rule that causes delay, then set the next review date. If the change does not improve the evidence, reverse it instead of adding more fields."
        ]
      }
    ],
    "faq": [
      {
        "q": "What can a care coordinator VA prepare for patient message routing?",
        "a": "The assistant can gather the source, compare records, label exceptions, and prepare a dated next action. Clinical judgment and approval stay with the licensed care lead."
      },
      {
        "q": "What decision stays with the clinical lead?",
        "a": "The clinical lead decides whether the patient message routing evidence is sufficient and whether the patient can move to the next step."
      },
      {
        "q": "How should the team review patient message routing?",
        "a": "Sample one routine item, one exception, and one corrected item each week. Check the source, owner, next action, and close evidence."
      }
    ],
    "internalService": "/services/patient-scheduling",
    "internalSibling": "/blog/patient-scheduling-escalation-path",
    "source": {
      "label": "Centers for Medicare and Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "discharge-followup-register",
    "title": "Keep a discharge follow-up register",
    "description": "A register that tracks the discharge date, follow-up window, contact attempts, and escalation owner for every patient.",
    "category": "Care coordination",
    "publishedAt": "2026-10-28",
    "indexable": true,
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-28/discharge-followup-register.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A useful discharge follow-up routine starts with a written purpose. Record the discharge, due date, and responsible owner, then compare the record with that purpose instead of judging the queue by activity alone."
        ]
      },
      {
        "heading": "What to check first",
        "paragraphs": [
          "Begin with one concrete check: compare the register with the scheduling and outreach logs. Keep the example that failed, because a named mismatch is stronger evidence than a general complaint about follow-up quality."
        ]
      },
      {
        "heading": "Build the routine",
        "paragraphs": [
          "Build the discharge follow-up review into a short weekly slot. Open the queue, apply the check, and write one decision for each item. Keep, correct, or escalate are all valid outcomes."
        ]
      },
      {
        "heading": "Handle the exceptions",
        "paragraphs": [
          "Give exceptions their own line in the log. Watch for a follow-up booked outside the written window, and record why it escaped the normal rule. That detail shows whether the fix belongs in the record, the owner, or the review step."
        ]
      },
      {
        "heading": "Review the evidence",
        "paragraphs": [
          "Keep the evidence small but dated. Store the discharge date, due date, and contact outcome beside the item so a later coordinator can reconstruct what was known at the time."
        ]
      },
      {
        "heading": "What to change next",
        "paragraphs": [
          "End the review with one controlled change. Use the evidence to escalate one overdue follow-up earlier, then set the next review date. If the change does not improve the evidence, reverse it instead of adding more fields."
        ]
      }
    ],
    "faq": [
      {
        "q": "What can a care coordinator VA prepare for discharge follow-up?",
        "a": "The assistant can gather the source, compare records, label exceptions, and prepare a dated next action. Clinical judgment and approval stay with the licensed care lead."
      },
      {
        "q": "What decision stays with the clinical lead?",
        "a": "The clinical lead decides whether the discharge follow-up evidence is sufficient and whether the patient can move to the next step."
      },
      {
        "q": "How should the team review discharge follow-up?",
        "a": "Sample one routine item, one exception, and one corrected item each week. Check the source, owner, next action, and close evidence."
      }
    ],
    "internalService": "/services/care-gap-outreach",
    "internalSibling": "/blog/care-coordination-work-queue",
    "source": {
      "label": "Centers for Medicare and Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "insurance-eligibility-handoff",
    "title": "Verify insurance eligibility before the handoff",
    "description": "A handoff check that confirms the plan, eligibility date, and authorization need before a patient is scheduled or referred.",
    "category": "Clinical operations",
    "publishedAt": "2026-10-28",
    "indexable": true,
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-28/insurance-eligibility-handoff.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A useful insurance eligibility handoffs routine starts with a written purpose. Confirm the plan and eligibility date from the source record, then compare the record with that purpose instead of judging the queue by activity alone."
        ]
      },
      {
        "heading": "What to check first",
        "paragraphs": [
          "Begin with one concrete check: compare the eligibility note with the scheduling record. Keep the example that failed, because a named mismatch is stronger evidence than a general complaint about follow-up quality."
        ]
      },
      {
        "heading": "Build the routine",
        "paragraphs": [
          "Build the insurance eligibility handoffs review into a short weekly slot. Open the queue, apply the check, and write one decision for each item. Keep, correct, or escalate are all valid outcomes."
        ]
      },
      {
        "heading": "Handle the exceptions",
        "paragraphs": [
          "Give exceptions their own line in the log. Watch for a plan that changed after the referral was sent, and record why it escaped the normal rule. That detail shows whether the fix belongs in the record, the owner, or the review step."
        ]
      },
      {
        "heading": "Review the evidence",
        "paragraphs": [
          "Keep the evidence small but dated. Store the plan, check date, and authorization status beside the item so a later coordinator can reconstruct what was known at the time."
        ]
      },
      {
        "heading": "What to change next",
        "paragraphs": [
          "End the review with one controlled change. Use the evidence to add one eligibility exception to the handoff brief, then set the next review date. If the change does not improve the evidence, reverse it instead of adding more fields."
        ]
      }
    ],
    "faq": [
      {
        "q": "What can a care coordinator VA prepare for insurance eligibility handoffs?",
        "a": "The assistant can gather the source, compare records, label exceptions, and prepare a dated next action. Clinical judgment and approval stay with the licensed care lead."
      },
      {
        "q": "What decision stays with the clinical lead?",
        "a": "The clinical lead decides whether the insurance eligibility handoffs evidence is sufficient and whether the patient can move to the next step."
      },
      {
        "q": "How should the team review insurance eligibility handoffs?",
        "a": "Sample one routine item, one exception, and one corrected item each week. Check the source, owner, next action, and close evidence."
      }
    ],
    "internalService": "/services/records-coordination",
    "internalSibling": "/blog/records-request-tracking",
    "source": {
      "label": "Centers for Medicare and Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "interpreter-needs-flag",
    "title": "Flag interpreter needs before the first contact",
    "description": "A simple field and workflow that makes language access visible before scheduling, outreach, or a clinical handoff.",
    "category": "Patient access",
    "publishedAt": "2026-10-28",
    "indexable": true,
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-28/interpreter-needs-flag.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A useful interpreter needs routine starts with a written purpose. Record the preferred language and interpreter need at intake, then compare the record with that purpose instead of judging the queue by activity alone."
        ]
      },
      {
        "heading": "What to check first",
        "paragraphs": [
          "Begin with one concrete check: compare the flag with the appointment and outreach records. Keep the example that failed, because a named mismatch is stronger evidence than a general complaint about follow-up quality."
        ]
      },
      {
        "heading": "Build the routine",
        "paragraphs": [
          "Build the interpreter needs review into a short weekly slot. Open the queue, apply the check, and write one decision for each item. Keep, correct, or escalate are all valid outcomes."
        ]
      },
      {
        "heading": "Handle the exceptions",
        "paragraphs": [
          "Give exceptions their own line in the log. Watch for a family member offering to interpret without consent, and record why it escaped the normal rule. That detail shows whether the fix belongs in the record, the owner, or the review step."
        ]
      },
      {
        "heading": "Review the evidence",
        "paragraphs": [
          "Keep the evidence small but dated. Store the preference, source, and appointment date beside the item so a later coordinator can reconstruct what was known at the time."
        ]
      },
      {
        "heading": "What to change next",
        "paragraphs": [
          "End the review with one controlled change. Use the evidence to make the flag mandatory in one intake path, then set the next review date. If the change does not improve the evidence, reverse it instead of adding more fields."
        ]
      }
    ],
    "faq": [
      {
        "q": "What can a care coordinator VA prepare for interpreter needs?",
        "a": "The assistant can gather the source, compare records, label exceptions, and prepare a dated next action. Clinical judgment and approval stay with the licensed care lead."
      },
      {
        "q": "What decision stays with the clinical lead?",
        "a": "The clinical lead decides whether the interpreter needs evidence is sufficient and whether the patient can move to the next step."
      },
      {
        "q": "How should the team review interpreter needs?",
        "a": "Sample one routine item, one exception, and one corrected item each week. Check the source, owner, next action, and close evidence."
      }
    ],
    "internalService": "/services/patient-scheduling",
    "internalSibling": "/blog/patient-scheduling-escalation-path",
    "source": {
      "label": "Centers for Medicare and Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "transport-barrier-screening",
    "title": "Screen transport barriers before a missed appointment",
    "description": "A brief screening step that records transport constraints and offers a next action instead of waiting for a no-show.",
    "category": "Care coordination",
    "publishedAt": "2026-10-28",
    "indexable": true,
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-28/transport-barrier-screening.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A useful transport barriers routine starts with a written purpose. Ask about transport before the appointment date, then compare the record with that purpose instead of judging the queue by activity alone."
        ]
      },
      {
        "heading": "What to check first",
        "paragraphs": [
          "Begin with one concrete check: compare the screening note with the attendance record. Keep the example that failed, because a named mismatch is stronger evidence than a general complaint about follow-up quality."
        ]
      },
      {
        "heading": "Build the routine",
        "paragraphs": [
          "Build the transport barriers review into a short weekly slot. Open the queue, apply the check, and write one decision for each item. Keep, correct, or escalate are all valid outcomes."
        ]
      },
      {
        "heading": "Handle the exceptions",
        "paragraphs": [
          "Give exceptions their own line in the log. Watch for a patient who declines a ride without a follow-up plan, and record why it escaped the normal rule. That detail shows whether the fix belongs in the record, the owner, or the review step."
        ]
      },
      {
        "heading": "Review the evidence",
        "paragraphs": [
          "Keep the evidence small but dated. Store the barrier, response, and offered option beside the item so a later coordinator can reconstruct what was known at the time."
        ]
      },
      {
        "heading": "What to change next",
        "paragraphs": [
          "End the review with one controlled change. Use the evidence to add one transport question to reminder outreach, then set the next review date. If the change does not improve the evidence, reverse it instead of adding more fields."
        ]
      }
    ],
    "faq": [
      {
        "q": "What can a care coordinator VA prepare for transport barriers?",
        "a": "The assistant can gather the source, compare records, label exceptions, and prepare a dated next action. Clinical judgment and approval stay with the licensed care lead."
      },
      {
        "q": "What decision stays with the clinical lead?",
        "a": "The clinical lead decides whether the transport barriers evidence is sufficient and whether the patient can move to the next step."
      },
      {
        "q": "How should the team review transport barriers?",
        "a": "Sample one routine item, one exception, and one corrected item each week. Check the source, owner, next action, and close evidence."
      }
    ],
    "internalService": "/services/care-gap-outreach",
    "internalSibling": "/blog/care-coordination-work-queue",
    "source": {
      "label": "Centers for Medicare and Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "clinical-escalation-stop-rule",
    "title": "Write a clinical escalation stop rule",
    "description": "A clear stop rule for non-clinical coordinators when a patient message suggests urgent symptoms or a safety concern.",
    "category": "Clinical operations",
    "publishedAt": "2026-10-28",
    "indexable": true,
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-28/clinical-escalation-stop-rule.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A useful clinical escalation routine starts with a written purpose. Stop and route immediately when the message meets the rule, then compare the record with that purpose instead of judging the queue by activity alone."
        ]
      },
      {
        "heading": "What to check first",
        "paragraphs": [
          "Begin with one concrete check: test the rule against three real message examples. Keep the example that failed, because a named mismatch is stronger evidence than a general complaint about follow-up quality."
        ]
      },
      {
        "heading": "Build the routine",
        "paragraphs": [
          "Build the clinical escalation review into a short weekly slot. Open the queue, apply the check, and write one decision for each item. Keep, correct, or escalate are all valid outcomes."
        ]
      },
      {
        "heading": "Handle the exceptions",
        "paragraphs": [
          "Give exceptions their own line in the log. Watch for a message that sounds routine but names a red-flag symptom, and record why it escaped the normal rule. That detail shows whether the fix belongs in the record, the owner, or the review step."
        ]
      },
      {
        "heading": "Review the evidence",
        "paragraphs": [
          "Keep the evidence small but dated. Store the message, time, and escalation owner beside the item so a later coordinator can reconstruct what was known at the time."
        ]
      },
      {
        "heading": "What to change next",
        "paragraphs": [
          "End the review with one controlled change. Use the evidence to review the rule after every near miss, then set the next review date. If the change does not improve the evidence, reverse it instead of adding more fields."
        ]
      }
    ],
    "faq": [
      {
        "q": "What can a care coordinator VA prepare for clinical escalation?",
        "a": "The assistant can gather the source, compare records, label exceptions, and prepare a dated next action. Clinical judgment and approval stay with the licensed care lead."
      },
      {
        "q": "What decision stays with the clinical lead?",
        "a": "The clinical lead decides whether the clinical escalation evidence is sufficient and whether the patient can move to the next step."
      },
      {
        "q": "How should the team review clinical escalation?",
        "a": "Sample one routine item, one exception, and one corrected item each week. Check the source, owner, next action, and close evidence."
      }
    ],
    "internalService": "/services/referral-coordination",
    "internalSibling": "/blog/clinical-referral-handoff-checklist",
    "source": {
      "label": "Centers for Medicare and Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "consent-and-contact-preference",
    "title": "Record consent and contact preferences in one place",
    "description": "A practical record that keeps the patient channel, consent status, and privacy preference visible across scheduling and outreach.",
    "category": "Patient access",
    "publishedAt": "2026-10-28",
    "indexable": true,
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-28/consent-and-contact-preference.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A useful consent and contact preferences routine starts with a written purpose. Record the allowed channel and the source of consent, then compare the record with that purpose instead of judging the queue by activity alone."
        ]
      },
      {
        "heading": "What to check first",
        "paragraphs": [
          "Begin with one concrete check: compare the preference with the last contact attempt. Keep the example that failed, because a named mismatch is stronger evidence than a general complaint about follow-up quality."
        ]
      },
      {
        "heading": "Build the routine",
        "paragraphs": [
          "Build the consent and contact preferences review into a short weekly slot. Open the queue, apply the check, and write one decision for each item. Keep, correct, or escalate are all valid outcomes."
        ]
      },
      {
        "heading": "Handle the exceptions",
        "paragraphs": [
          "Give exceptions their own line in the log. Watch for a patient who withdraws consent on one channel only, and record why it escaped the normal rule. That detail shows whether the fix belongs in the record, the owner, or the review step."
        ]
      },
      {
        "heading": "Review the evidence",
        "paragraphs": [
          "Keep the evidence small but dated. Store the preference, source, and effective date beside the item so a later coordinator can reconstruct what was known at the time."
        ]
      },
      {
        "heading": "What to change next",
        "paragraphs": [
          "End the review with one controlled change. Use the evidence to remove one outdated contact path, then set the next review date. If the change does not improve the evidence, reverse it instead of adding more fields."
        ]
      }
    ],
    "faq": [
      {
        "q": "What can a care coordinator VA prepare for consent and contact preferences?",
        "a": "The assistant can gather the source, compare records, label exceptions, and prepare a dated next action. Clinical judgment and approval stay with the licensed care lead."
      },
      {
        "q": "What decision stays with the clinical lead?",
        "a": "The clinical lead decides whether the consent and contact preferences evidence is sufficient and whether the patient can move to the next step."
      },
      {
        "q": "How should the team review consent and contact preferences?",
        "a": "Sample one routine item, one exception, and one corrected item each week. Check the source, owner, next action, and close evidence."
      }
    ],
    "internalService": "/services/patient-scheduling",
    "internalSibling": "/blog/patient-scheduling-escalation-path",
    "source": {
      "label": "Centers for Medicare and Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  }
];
