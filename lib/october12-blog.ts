import type { BlogPost } from './types';

export const october12BlogPosts: BlogPost[] = [
  {
    "slug": "referral-document-receipt-reconciliation",
    "title": "Reconcile Referral Document Receipts Across Care Teams",
    "description": "A referral receipt record should show what arrived, where it came from, what remains missing, and who owns professional review.",
    "category": "Referral systems",
    "publishedAt": "2026-10-12",
    "readTime": "11 min read",
    "thumbnail": "/thumbnails/october-12/referral-document-receipt-reconciliation.webp",
    "sections": [
      {
        "heading": "Define the administrative purpose",
        "paragraphs": [
          "For referral receipt reconciliation, a referral receipt record should show what arrived, where it came from, what remains missing, and who owns professional review. The role remains limited to repeatable preparation, coordination, documentation, and escalation under approved rules.",
          "For referral receipt reconciliation, write one purpose statement that names the eligible queue, source of truth, permitted action, evidence of completion, accountable reviewer, and prohibited decisions. In a fax, portal upload, and follow-up message that refer to the same person, those definitions keep uncertainty visible rather than forcing an unsupported status."
        ]
      },
      {
        "heading": "Separate preparation from professional judgment",
        "paragraphs": [
          "For referral receipt reconciliation, an assistant may compare approved fields, organize records, send current templates, maintain stated statuses, and route an exception. The assistant does not assess symptoms, determine clinical priority, select treatment, interpret professional notes, or promise access to care.",
          "For referral receipt reconciliation, when a message includes clinical, medication, safety, legal, privacy, or complaint content, preserve its original meaning and transfer it under the approved procedure. A transfer record shows the handoff activity, not that a qualified person resolved the matter."
        ]
      },
      {
        "heading": "Design the source record",
        "paragraphs": [
          "For referral receipt reconciliation, record a stable identifier, authoritative source, received time, source date, current state, status reason, owner, next review date, and relevant reference number. Use unknown, unavailable, pending, and not applicable as separate values.",
          "For referral receipt reconciliation, corrections should preserve the earlier value, the evidence supporting the change, the person who made it, and the effective time. Silent replacement makes later reconstruction unreliable and can conceal a weak instruction."
        ]
      },
      {
        "heading": "Build the operating sequence",
        "paragraphs": [
          "For referral receipt reconciliation, confirm the current procedure and access role, verify identity using approved fields, capture source facts without inference, apply the permitted administrative action, and route anything outside the rule to its named owner.",
          "For referral receipt reconciliation, at closure, reconcile the record with the primary system and require either supported completion evidence or a handoff with an accountable recipient. Temporary notes should have an expiry, disposition, and deletion or retention instruction."
        ]
      },
      {
        "heading": "Test exception paths",
        "paragraphs": [
          "For referral receipt reconciliation, use realistic cases that include a duplicate record, missing source, conflicting dates, failed channel, unavailable reviewer, sensitive reply, system outage, and request outside scope. Record where the procedure becomes ambiguous.",
          "For referral receipt reconciliation, an exception path needs a trigger, destination, required context, communication channel, fallback owner, acknowledgment state, and stopping rule. It should never ask administrative personnel to fill a clinical decision gap."
        ]
      },
      {
        "heading": "Protect access and minimum necessary information",
        "paragraphs": [
          "For referral receipt reconciliation, provide individual accounts and the least system access required for the assigned queue. Review permissions when staffing, duties, vendors, platforms, or services change, and document offboarding completion.",
          "For referral receipt reconciliation, avoid copying clinical narrative or identifiers into private spreadsheets, email, or chat merely to explain a queue state. The organization should approve systems, exports, retention, and disposal with appropriate professional guidance."
        ]
      },
      {
        "heading": "Review quality with evidence",
        "paragraphs": [
          "For referral receipt reconciliation, select a documented sample that includes ordinary work and known exceptions. Compare each administrative fact with its named source, test the status criteria, and confirm protected decisions remained with accountable professionals.",
          "For referral receipt reconciliation, measure source agreement, required-field completeness, routing accuracy, unresolved ownership, correction traceability, and exception recurrence separately. A single activity count cannot establish record quality or care outcomes."
        ]
      },
      {
        "heading": "Use a practical control table",
        "paragraphs": [
          "For referral receipt reconciliation, a control table should list the step, permitted actor, source, output, exception trigger, and reviewer. Managers can use it during onboarding, sampling, incident review, and change approval instead of relying on unwritten custom.",
          "For referral receipt reconciliation, version the table when systems, statuses, scripts, owners, or service boundaries change. Do not combine results across materially different versions without noting the change and its likely effect on eligibility or classification."
        ]
      },
      {
        "heading": "Close with accountable ownership",
        "paragraphs": [
          "For referral receipt reconciliation, a reliable workflow ends with a named owner and inspectable evidence. Closed should never mean that staff stopped looking; it should mean the written closure condition was satisfied or an authorized person recorded the disposition.",
          "For referral receipt reconciliation, begin with a small representative batch, review discrepancies, revise the procedure, and retest before expanding volume. Controlled learning is more defensible than handing over an entire function with vague expectations."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a coordinator make clinical decisions during referral receipt reconciliation?",
        "a": "No. Clinical assessment, urgency, diagnosis, treatment, and other licensed decisions remain with qualified professionals."
      },
      {
        "q": "What should happen when source systems disagree?",
        "a": "Preserve both values and their provenance, then route the discrepancy to the authorized owner rather than guessing."
      },
      {
        "q": "How should managers review this workflow?",
        "a": "Use a documented sample, compare records with named sources, and assign recurring exceptions to a process owner."
      }
    ],
    "internalService": "/services/referral-coordination",
    "internalSibling": "/blog/patient-scheduling-rule-version-control",
    "source": {
      "label": "Agency for Healthcare Research and Quality Care Coordination",
      "url": "https://www.ahrq.gov/ncepcr/care/coordination.html"
    }
  },
  {
    "slug": "patient-scheduling-rule-version-control",
    "title": "Put Patient Scheduling Rules Under Version Control",
    "description": "Versioned scheduling rules keep appointment types, durations, locations, owners, and exceptions tied to an approved effective date.",
    "category": "Patient communication",
    "publishedAt": "2026-10-12",
    "readTime": "11 min read",
    "thumbnail": "/thumbnails/october-12/patient-scheduling-rule-version-control.webp",
    "sections": [
      {
        "heading": "Define the administrative purpose",
        "paragraphs": [
          "For scheduling rule version control, versioned scheduling rules keep appointment types, durations, locations, owners, and exceptions tied to an approved effective date. The role remains limited to repeatable preparation, coordination, documentation, and escalation under approved rules.",
          "For scheduling rule version control, write one purpose statement that names the eligible queue, source of truth, permitted action, evidence of completion, accountable reviewer, and prohibited decisions. In a clinician changing availability while recurring visits and new requests remain open, those definitions keep uncertainty visible rather than forcing an unsupported status."
        ]
      },
      {
        "heading": "Separate preparation from professional judgment",
        "paragraphs": [
          "For scheduling rule version control, an assistant may compare approved fields, organize records, send current templates, maintain stated statuses, and route an exception. The assistant does not assess symptoms, determine clinical priority, select treatment, interpret professional notes, or promise access to care.",
          "For scheduling rule version control, when a message includes clinical, medication, safety, legal, privacy, or complaint content, preserve its original meaning and transfer it under the approved procedure. A transfer record shows the handoff activity, not that a qualified person resolved the matter."
        ]
      },
      {
        "heading": "Design the source record",
        "paragraphs": [
          "For scheduling rule version control, record a stable identifier, authoritative source, received time, source date, current state, status reason, owner, next review date, and relevant reference number. Use unknown, unavailable, pending, and not applicable as separate values.",
          "For scheduling rule version control, corrections should preserve the earlier value, the evidence supporting the change, the person who made it, and the effective time. Silent replacement makes later reconstruction unreliable and can conceal a weak instruction."
        ]
      },
      {
        "heading": "Build the operating sequence",
        "paragraphs": [
          "For scheduling rule version control, confirm the current procedure and access role, verify identity using approved fields, capture source facts without inference, apply the permitted administrative action, and route anything outside the rule to its named owner.",
          "For scheduling rule version control, at closure, reconcile the record with the primary system and require either supported completion evidence or a handoff with an accountable recipient. Temporary notes should have an expiry, disposition, and deletion or retention instruction."
        ]
      },
      {
        "heading": "Test exception paths",
        "paragraphs": [
          "For scheduling rule version control, use realistic cases that include a duplicate record, missing source, conflicting dates, failed channel, unavailable reviewer, sensitive reply, system outage, and request outside scope. Record where the procedure becomes ambiguous.",
          "For scheduling rule version control, an exception path needs a trigger, destination, required context, communication channel, fallback owner, acknowledgment state, and stopping rule. It should never ask administrative personnel to fill a clinical decision gap."
        ]
      },
      {
        "heading": "Protect access and minimum necessary information",
        "paragraphs": [
          "For scheduling rule version control, provide individual accounts and the least system access required for the assigned queue. Review permissions when staffing, duties, vendors, platforms, or services change, and document offboarding completion.",
          "For scheduling rule version control, avoid copying clinical narrative or identifiers into private spreadsheets, email, or chat merely to explain a queue state. The organization should approve systems, exports, retention, and disposal with appropriate professional guidance."
        ]
      },
      {
        "heading": "Review quality with evidence",
        "paragraphs": [
          "For scheduling rule version control, select a documented sample that includes ordinary work and known exceptions. Compare each administrative fact with its named source, test the status criteria, and confirm protected decisions remained with accountable professionals.",
          "For scheduling rule version control, measure source agreement, required-field completeness, routing accuracy, unresolved ownership, correction traceability, and exception recurrence separately. A single activity count cannot establish record quality or care outcomes."
        ]
      },
      {
        "heading": "Use a practical control table",
        "paragraphs": [
          "For scheduling rule version control, a control table should list the step, permitted actor, source, output, exception trigger, and reviewer. Managers can use it during onboarding, sampling, incident review, and change approval instead of relying on unwritten custom.",
          "For scheduling rule version control, version the table when systems, statuses, scripts, owners, or service boundaries change. Do not combine results across materially different versions without noting the change and its likely effect on eligibility or classification."
        ]
      },
      {
        "heading": "Close with accountable ownership",
        "paragraphs": [
          "For scheduling rule version control, a reliable workflow ends with a named owner and inspectable evidence. Closed should never mean that staff stopped looking; it should mean the written closure condition was satisfied or an authorized person recorded the disposition.",
          "For scheduling rule version control, begin with a small representative batch, review discrepancies, revise the procedure, and retest before expanding volume. Controlled learning is more defensible than handing over an entire function with vague expectations."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a coordinator make clinical decisions during scheduling rule version control?",
        "a": "No. Clinical assessment, urgency, diagnosis, treatment, and other licensed decisions remain with qualified professionals."
      },
      {
        "q": "What should happen when source systems disagree?",
        "a": "Preserve both values and their provenance, then route the discrepancy to the authorized owner rather than guessing."
      },
      {
        "q": "How should managers review this workflow?",
        "a": "Use a documented sample, compare records with named sources, and assign recurring exceptions to a process owner."
      }
    ],
    "internalService": "/services/patient-scheduling",
    "internalSibling": "/blog/care-coordination-work-queue-ownership",
    "source": {
      "label": "Agency for Healthcare Research and Quality Care Coordination",
      "url": "https://www.ahrq.gov/ncepcr/care/coordination.html"
    }
  },
  {
    "slug": "care-coordination-work-queue-ownership",
    "title": "Assign Clear Ownership in Care Coordination Work Queues",
    "description": "A care coordination queue works when every item has a defined state, accountable owner, next action, and transfer record.",
    "category": "Care coordination",
    "publishedAt": "2026-10-12",
    "readTime": "11 min read",
    "thumbnail": "/thumbnails/october-12/care-coordination-work-queue-ownership.webp",
    "sections": [
      {
        "heading": "Define the administrative purpose",
        "paragraphs": [
          "For work queue ownership, a care coordination queue works when every item has a defined state, accountable owner, next action, and transfer record. The role remains limited to repeatable preparation, coordination, documentation, and escalation under approved rules.",
          "For work queue ownership, write one purpose statement that names the eligible queue, source of truth, permitted action, evidence of completion, accountable reviewer, and prohibited decisions. In a follow-up item moving between administrative staff and a licensed professional, those definitions keep uncertainty visible rather than forcing an unsupported status."
        ]
      },
      {
        "heading": "Separate preparation from professional judgment",
        "paragraphs": [
          "For work queue ownership, an assistant may compare approved fields, organize records, send current templates, maintain stated statuses, and route an exception. The assistant does not assess symptoms, determine clinical priority, select treatment, interpret professional notes, or promise access to care.",
          "For work queue ownership, when a message includes clinical, medication, safety, legal, privacy, or complaint content, preserve its original meaning and transfer it under the approved procedure. A transfer record shows the handoff activity, not that a qualified person resolved the matter."
        ]
      },
      {
        "heading": "Design the source record",
        "paragraphs": [
          "For work queue ownership, record a stable identifier, authoritative source, received time, source date, current state, status reason, owner, next review date, and relevant reference number. Use unknown, unavailable, pending, and not applicable as separate values.",
          "For work queue ownership, corrections should preserve the earlier value, the evidence supporting the change, the person who made it, and the effective time. Silent replacement makes later reconstruction unreliable and can conceal a weak instruction."
        ]
      },
      {
        "heading": "Build the operating sequence",
        "paragraphs": [
          "For work queue ownership, confirm the current procedure and access role, verify identity using approved fields, capture source facts without inference, apply the permitted administrative action, and route anything outside the rule to its named owner.",
          "For work queue ownership, at closure, reconcile the record with the primary system and require either supported completion evidence or a handoff with an accountable recipient. Temporary notes should have an expiry, disposition, and deletion or retention instruction."
        ]
      },
      {
        "heading": "Test exception paths",
        "paragraphs": [
          "For work queue ownership, use realistic cases that include a duplicate record, missing source, conflicting dates, failed channel, unavailable reviewer, sensitive reply, system outage, and request outside scope. Record where the procedure becomes ambiguous.",
          "For work queue ownership, an exception path needs a trigger, destination, required context, communication channel, fallback owner, acknowledgment state, and stopping rule. It should never ask administrative personnel to fill a clinical decision gap."
        ]
      },
      {
        "heading": "Protect access and minimum necessary information",
        "paragraphs": [
          "For work queue ownership, provide individual accounts and the least system access required for the assigned queue. Review permissions when staffing, duties, vendors, platforms, or services change, and document offboarding completion.",
          "For work queue ownership, avoid copying clinical narrative or identifiers into private spreadsheets, email, or chat merely to explain a queue state. The organization should approve systems, exports, retention, and disposal with appropriate professional guidance."
        ]
      },
      {
        "heading": "Review quality with evidence",
        "paragraphs": [
          "For work queue ownership, select a documented sample that includes ordinary work and known exceptions. Compare each administrative fact with its named source, test the status criteria, and confirm protected decisions remained with accountable professionals.",
          "For work queue ownership, measure source agreement, required-field completeness, routing accuracy, unresolved ownership, correction traceability, and exception recurrence separately. A single activity count cannot establish record quality or care outcomes."
        ]
      },
      {
        "heading": "Use a practical control table",
        "paragraphs": [
          "For work queue ownership, a control table should list the step, permitted actor, source, output, exception trigger, and reviewer. Managers can use it during onboarding, sampling, incident review, and change approval instead of relying on unwritten custom.",
          "For work queue ownership, version the table when systems, statuses, scripts, owners, or service boundaries change. Do not combine results across materially different versions without noting the change and its likely effect on eligibility or classification."
        ]
      },
      {
        "heading": "Close with accountable ownership",
        "paragraphs": [
          "For work queue ownership, a reliable workflow ends with a named owner and inspectable evidence. Closed should never mean that staff stopped looking; it should mean the written closure condition was satisfied or an authorized person recorded the disposition.",
          "For work queue ownership, begin with a small representative batch, review discrepancies, revise the procedure, and retest before expanding volume. Controlled learning is more defensible than handing over an entire function with vague expectations."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a coordinator make clinical decisions during work queue ownership?",
        "a": "No. Clinical assessment, urgency, diagnosis, treatment, and other licensed decisions remain with qualified professionals."
      },
      {
        "q": "What should happen when source systems disagree?",
        "a": "Preserve both values and their provenance, then route the discrepancy to the authorized owner rather than guessing."
      },
      {
        "q": "How should managers review this workflow?",
        "a": "Use a documented sample, compare records with named sources, and assign recurring exceptions to a process owner."
      }
    ],
    "internalService": "/services/care-team-administration",
    "internalSibling": "/blog/clinical-handoff-acknowledgment-records",
    "source": {
      "label": "Agency for Healthcare Research and Quality Care Coordination",
      "url": "https://www.ahrq.gov/ncepcr/care/coordination.html"
    }
  },
  {
    "slug": "clinical-handoff-acknowledgment-records",
    "title": "Build Acknowledgment Records for Clinical Handoffs",
    "description": "Acknowledgment records distinguish a sent handoff from a received, reviewed, accepted, or returned handoff.",
    "category": "Care coordination",
    "publishedAt": "2026-10-12",
    "readTime": "11 min read",
    "thumbnail": "/thumbnails/october-12/clinical-handoff-acknowledgment-records.webp",
    "sections": [
      {
        "heading": "Define the administrative purpose",
        "paragraphs": [
          "For handoff acknowledgment, acknowledgment records distinguish a sent handoff from a received, reviewed, accepted, or returned handoff. The role remains limited to repeatable preparation, coordination, documentation, and escalation under approved rules.",
          "For handoff acknowledgment, write one purpose statement that names the eligible queue, source of truth, permitted action, evidence of completion, accountable reviewer, and prohibited decisions. In a referral packet sent to a care team without a visible receipt status, those definitions keep uncertainty visible rather than forcing an unsupported status."
        ]
      },
      {
        "heading": "Separate preparation from professional judgment",
        "paragraphs": [
          "For handoff acknowledgment, an assistant may compare approved fields, organize records, send current templates, maintain stated statuses, and route an exception. The assistant does not assess symptoms, determine clinical priority, select treatment, interpret professional notes, or promise access to care.",
          "For handoff acknowledgment, when a message includes clinical, medication, safety, legal, privacy, or complaint content, preserve its original meaning and transfer it under the approved procedure. A transfer record shows the handoff activity, not that a qualified person resolved the matter."
        ]
      },
      {
        "heading": "Design the source record",
        "paragraphs": [
          "For handoff acknowledgment, record a stable identifier, authoritative source, received time, source date, current state, status reason, owner, next review date, and relevant reference number. Use unknown, unavailable, pending, and not applicable as separate values.",
          "For handoff acknowledgment, corrections should preserve the earlier value, the evidence supporting the change, the person who made it, and the effective time. Silent replacement makes later reconstruction unreliable and can conceal a weak instruction."
        ]
      },
      {
        "heading": "Build the operating sequence",
        "paragraphs": [
          "For handoff acknowledgment, confirm the current procedure and access role, verify identity using approved fields, capture source facts without inference, apply the permitted administrative action, and route anything outside the rule to its named owner.",
          "For handoff acknowledgment, at closure, reconcile the record with the primary system and require either supported completion evidence or a handoff with an accountable recipient. Temporary notes should have an expiry, disposition, and deletion or retention instruction."
        ]
      },
      {
        "heading": "Test exception paths",
        "paragraphs": [
          "For handoff acknowledgment, use realistic cases that include a duplicate record, missing source, conflicting dates, failed channel, unavailable reviewer, sensitive reply, system outage, and request outside scope. Record where the procedure becomes ambiguous.",
          "For handoff acknowledgment, an exception path needs a trigger, destination, required context, communication channel, fallback owner, acknowledgment state, and stopping rule. It should never ask administrative personnel to fill a clinical decision gap."
        ]
      },
      {
        "heading": "Protect access and minimum necessary information",
        "paragraphs": [
          "For handoff acknowledgment, provide individual accounts and the least system access required for the assigned queue. Review permissions when staffing, duties, vendors, platforms, or services change, and document offboarding completion.",
          "For handoff acknowledgment, avoid copying clinical narrative or identifiers into private spreadsheets, email, or chat merely to explain a queue state. The organization should approve systems, exports, retention, and disposal with appropriate professional guidance."
        ]
      },
      {
        "heading": "Review quality with evidence",
        "paragraphs": [
          "For handoff acknowledgment, select a documented sample that includes ordinary work and known exceptions. Compare each administrative fact with its named source, test the status criteria, and confirm protected decisions remained with accountable professionals.",
          "For handoff acknowledgment, measure source agreement, required-field completeness, routing accuracy, unresolved ownership, correction traceability, and exception recurrence separately. A single activity count cannot establish record quality or care outcomes."
        ]
      },
      {
        "heading": "Use a practical control table",
        "paragraphs": [
          "For handoff acknowledgment, a control table should list the step, permitted actor, source, output, exception trigger, and reviewer. Managers can use it during onboarding, sampling, incident review, and change approval instead of relying on unwritten custom.",
          "For handoff acknowledgment, version the table when systems, statuses, scripts, owners, or service boundaries change. Do not combine results across materially different versions without noting the change and its likely effect on eligibility or classification."
        ]
      },
      {
        "heading": "Close with accountable ownership",
        "paragraphs": [
          "For handoff acknowledgment, a reliable workflow ends with a named owner and inspectable evidence. Closed should never mean that staff stopped looking; it should mean the written closure condition was satisfied or an authorized person recorded the disposition.",
          "For handoff acknowledgment, begin with a small representative batch, review discrepancies, revise the procedure, and retest before expanding volume. Controlled learning is more defensible than handing over an entire function with vague expectations."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a coordinator make clinical decisions during handoff acknowledgment?",
        "a": "No. Clinical assessment, urgency, diagnosis, treatment, and other licensed decisions remain with qualified professionals."
      },
      {
        "q": "What should happen when source systems disagree?",
        "a": "Preserve both values and their provenance, then route the discrepancy to the authorized owner rather than guessing."
      },
      {
        "q": "How should managers review this workflow?",
        "a": "Use a documented sample, compare records with named sources, and assign recurring exceptions to a process owner."
      }
    ],
    "internalService": "/services/care-gap-outreach",
    "internalSibling": "/blog/patient-outreach-script-change-control",
    "source": {
      "label": "Agency for Healthcare Research and Quality Care Coordination",
      "url": "https://www.ahrq.gov/ncepcr/care/coordination.html"
    }
  },
  {
    "slug": "patient-outreach-script-change-control",
    "title": "Control Changes to Patient Outreach Scripts",
    "description": "Patient outreach scripts need an owner, approved purpose, permitted channel, version, effective date, and stop rule.",
    "category": "Patient communication",
    "publishedAt": "2026-10-12",
    "readTime": "11 min read",
    "thumbnail": "/thumbnails/october-12/patient-outreach-script-change-control.webp",
    "sections": [
      {
        "heading": "Define the administrative purpose",
        "paragraphs": [
          "For outreach script change control, patient outreach scripts need an owner, approved purpose, permitted channel, version, effective date, and stop rule. The role remains limited to repeatable preparation, coordination, documentation, and escalation under approved rules.",
          "For outreach script change control, write one purpose statement that names the eligible queue, source of truth, permitted action, evidence of completion, accountable reviewer, and prohibited decisions. In a routine scheduling reply that introduces a symptom or urgent concern, those definitions keep uncertainty visible rather than forcing an unsupported status."
        ]
      },
      {
        "heading": "Separate preparation from professional judgment",
        "paragraphs": [
          "For outreach script change control, an assistant may compare approved fields, organize records, send current templates, maintain stated statuses, and route an exception. The assistant does not assess symptoms, determine clinical priority, select treatment, interpret professional notes, or promise access to care.",
          "For outreach script change control, when a message includes clinical, medication, safety, legal, privacy, or complaint content, preserve its original meaning and transfer it under the approved procedure. A transfer record shows the handoff activity, not that a qualified person resolved the matter."
        ]
      },
      {
        "heading": "Design the source record",
        "paragraphs": [
          "For outreach script change control, record a stable identifier, authoritative source, received time, source date, current state, status reason, owner, next review date, and relevant reference number. Use unknown, unavailable, pending, and not applicable as separate values.",
          "For outreach script change control, corrections should preserve the earlier value, the evidence supporting the change, the person who made it, and the effective time. Silent replacement makes later reconstruction unreliable and can conceal a weak instruction."
        ]
      },
      {
        "heading": "Build the operating sequence",
        "paragraphs": [
          "For outreach script change control, confirm the current procedure and access role, verify identity using approved fields, capture source facts without inference, apply the permitted administrative action, and route anything outside the rule to its named owner.",
          "For outreach script change control, at closure, reconcile the record with the primary system and require either supported completion evidence or a handoff with an accountable recipient. Temporary notes should have an expiry, disposition, and deletion or retention instruction."
        ]
      },
      {
        "heading": "Test exception paths",
        "paragraphs": [
          "For outreach script change control, use realistic cases that include a duplicate record, missing source, conflicting dates, failed channel, unavailable reviewer, sensitive reply, system outage, and request outside scope. Record where the procedure becomes ambiguous.",
          "For outreach script change control, an exception path needs a trigger, destination, required context, communication channel, fallback owner, acknowledgment state, and stopping rule. It should never ask administrative personnel to fill a clinical decision gap."
        ]
      },
      {
        "heading": "Protect access and minimum necessary information",
        "paragraphs": [
          "For outreach script change control, provide individual accounts and the least system access required for the assigned queue. Review permissions when staffing, duties, vendors, platforms, or services change, and document offboarding completion.",
          "For outreach script change control, avoid copying clinical narrative or identifiers into private spreadsheets, email, or chat merely to explain a queue state. The organization should approve systems, exports, retention, and disposal with appropriate professional guidance."
        ]
      },
      {
        "heading": "Review quality with evidence",
        "paragraphs": [
          "For outreach script change control, select a documented sample that includes ordinary work and known exceptions. Compare each administrative fact with its named source, test the status criteria, and confirm protected decisions remained with accountable professionals.",
          "For outreach script change control, measure source agreement, required-field completeness, routing accuracy, unresolved ownership, correction traceability, and exception recurrence separately. A single activity count cannot establish record quality or care outcomes."
        ]
      },
      {
        "heading": "Use a practical control table",
        "paragraphs": [
          "For outreach script change control, a control table should list the step, permitted actor, source, output, exception trigger, and reviewer. Managers can use it during onboarding, sampling, incident review, and change approval instead of relying on unwritten custom.",
          "For outreach script change control, version the table when systems, statuses, scripts, owners, or service boundaries change. Do not combine results across materially different versions without noting the change and its likely effect on eligibility or classification."
        ]
      },
      {
        "heading": "Close with accountable ownership",
        "paragraphs": [
          "For outreach script change control, a reliable workflow ends with a named owner and inspectable evidence. Closed should never mean that staff stopped looking; it should mean the written closure condition was satisfied or an authorized person recorded the disposition.",
          "For outreach script change control, begin with a small representative batch, review discrepancies, revise the procedure, and retest before expanding volume. Controlled learning is more defensible than handing over an entire function with vague expectations."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a coordinator make clinical decisions during outreach script change control?",
        "a": "No. Clinical assessment, urgency, diagnosis, treatment, and other licensed decisions remain with qualified professionals."
      },
      {
        "q": "What should happen when source systems disagree?",
        "a": "Preserve both values and their provenance, then route the discrepancy to the authorized owner rather than guessing."
      },
      {
        "q": "How should managers review this workflow?",
        "a": "Use a documented sample, compare records with named sources, and assign recurring exceptions to a process owner."
      }
    ],
    "internalService": "/services/patient-communication",
    "internalSibling": "/blog/records-request-authorization-checkpoints",
    "source": {
      "label": "Agency for Healthcare Research and Quality Care Coordination",
      "url": "https://www.ahrq.gov/ncepcr/care/coordination.html"
    }
  },
  {
    "slug": "records-request-authorization-checkpoints",
    "title": "Add Authorization Checkpoints to Records Requests",
    "description": "Records coordination should pause at identity, authority, scope, approval, and disclosure checkpoints defined by the organization.",
    "category": "Role design",
    "publishedAt": "2026-10-12",
    "readTime": "11 min read",
    "thumbnail": "/thumbnails/october-12/records-request-authorization-checkpoints.webp",
    "sections": [
      {
        "heading": "Define the administrative purpose",
        "paragraphs": [
          "For records request checkpoints, records coordination should pause at identity, authority, scope, approval, and disclosure checkpoints defined by the organization. The role remains limited to repeatable preparation, coordination, documentation, and escalation under approved rules.",
          "For records request checkpoints, write one purpose statement that names the eligible queue, source of truth, permitted action, evidence of completion, accountable reviewer, and prohibited decisions. In a request whose contact details match but whose authorization evidence is incomplete, those definitions keep uncertainty visible rather than forcing an unsupported status."
        ]
      },
      {
        "heading": "Separate preparation from professional judgment",
        "paragraphs": [
          "For records request checkpoints, an assistant may compare approved fields, organize records, send current templates, maintain stated statuses, and route an exception. The assistant does not assess symptoms, determine clinical priority, select treatment, interpret professional notes, or promise access to care.",
          "For records request checkpoints, when a message includes clinical, medication, safety, legal, privacy, or complaint content, preserve its original meaning and transfer it under the approved procedure. A transfer record shows the handoff activity, not that a qualified person resolved the matter."
        ]
      },
      {
        "heading": "Design the source record",
        "paragraphs": [
          "For records request checkpoints, record a stable identifier, authoritative source, received time, source date, current state, status reason, owner, next review date, and relevant reference number. Use unknown, unavailable, pending, and not applicable as separate values.",
          "For records request checkpoints, corrections should preserve the earlier value, the evidence supporting the change, the person who made it, and the effective time. Silent replacement makes later reconstruction unreliable and can conceal a weak instruction."
        ]
      },
      {
        "heading": "Build the operating sequence",
        "paragraphs": [
          "For records request checkpoints, confirm the current procedure and access role, verify identity using approved fields, capture source facts without inference, apply the permitted administrative action, and route anything outside the rule to its named owner.",
          "For records request checkpoints, at closure, reconcile the record with the primary system and require either supported completion evidence or a handoff with an accountable recipient. Temporary notes should have an expiry, disposition, and deletion or retention instruction."
        ]
      },
      {
        "heading": "Test exception paths",
        "paragraphs": [
          "For records request checkpoints, use realistic cases that include a duplicate record, missing source, conflicting dates, failed channel, unavailable reviewer, sensitive reply, system outage, and request outside scope. Record where the procedure becomes ambiguous.",
          "For records request checkpoints, an exception path needs a trigger, destination, required context, communication channel, fallback owner, acknowledgment state, and stopping rule. It should never ask administrative personnel to fill a clinical decision gap."
        ]
      },
      {
        "heading": "Protect access and minimum necessary information",
        "paragraphs": [
          "For records request checkpoints, provide individual accounts and the least system access required for the assigned queue. Review permissions when staffing, duties, vendors, platforms, or services change, and document offboarding completion.",
          "For records request checkpoints, avoid copying clinical narrative or identifiers into private spreadsheets, email, or chat merely to explain a queue state. The organization should approve systems, exports, retention, and disposal with appropriate professional guidance."
        ]
      },
      {
        "heading": "Review quality with evidence",
        "paragraphs": [
          "For records request checkpoints, select a documented sample that includes ordinary work and known exceptions. Compare each administrative fact with its named source, test the status criteria, and confirm protected decisions remained with accountable professionals.",
          "For records request checkpoints, measure source agreement, required-field completeness, routing accuracy, unresolved ownership, correction traceability, and exception recurrence separately. A single activity count cannot establish record quality or care outcomes."
        ]
      },
      {
        "heading": "Use a practical control table",
        "paragraphs": [
          "For records request checkpoints, a control table should list the step, permitted actor, source, output, exception trigger, and reviewer. Managers can use it during onboarding, sampling, incident review, and change approval instead of relying on unwritten custom.",
          "For records request checkpoints, version the table when systems, statuses, scripts, owners, or service boundaries change. Do not combine results across materially different versions without noting the change and its likely effect on eligibility or classification."
        ]
      },
      {
        "heading": "Close with accountable ownership",
        "paragraphs": [
          "For records request checkpoints, a reliable workflow ends with a named owner and inspectable evidence. Closed should never mean that staff stopped looking; it should mean the written closure condition was satisfied or an authorized person recorded the disposition.",
          "For records request checkpoints, begin with a small representative batch, review discrepancies, revise the procedure, and retest before expanding volume. Controlled learning is more defensible than handing over an entire function with vague expectations."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a coordinator make clinical decisions during records request checkpoints?",
        "a": "No. Clinical assessment, urgency, diagnosis, treatment, and other licensed decisions remain with qualified professionals."
      },
      {
        "q": "What should happen when source systems disagree?",
        "a": "Preserve both values and their provenance, then route the discrepancy to the authorized owner rather than guessing."
      },
      {
        "q": "How should managers review this workflow?",
        "a": "Use a documented sample, compare records with named sources, and assign recurring exceptions to a process owner."
      }
    ],
    "internalService": "/services/records-coordination",
    "internalSibling": "/blog/care-team-meeting-action-register",
    "source": {
      "label": "Agency for Healthcare Research and Quality Care Coordination",
      "url": "https://www.ahrq.gov/ncepcr/care/coordination.html"
    }
  },
  {
    "slug": "care-team-meeting-action-register",
    "title": "Create a Care Team Meeting Action Register",
    "description": "An action register turns meeting decisions into named tasks, due dates, evidence fields, and escalation paths without rewriting clinical conclusions.",
    "category": "Care coordination",
    "publishedAt": "2026-10-12",
    "readTime": "11 min read",
    "thumbnail": "/thumbnails/october-12/care-team-meeting-action-register.webp",
    "sections": [
      {
        "heading": "Define the administrative purpose",
        "paragraphs": [
          "For meeting action registers, an action register turns meeting decisions into named tasks, due dates, evidence fields, and escalation paths without rewriting clinical conclusions. The role remains limited to repeatable preparation, coordination, documentation, and escalation under approved rules.",
          "For meeting action registers, write one purpose statement that names the eligible queue, source of truth, permitted action, evidence of completion, accountable reviewer, and prohibited decisions. In a multidisciplinary meeting that creates several follow-up actions across different systems, those definitions keep uncertainty visible rather than forcing an unsupported status."
        ]
      },
      {
        "heading": "Separate preparation from professional judgment",
        "paragraphs": [
          "For meeting action registers, an assistant may compare approved fields, organize records, send current templates, maintain stated statuses, and route an exception. The assistant does not assess symptoms, determine clinical priority, select treatment, interpret professional notes, or promise access to care.",
          "For meeting action registers, when a message includes clinical, medication, safety, legal, privacy, or complaint content, preserve its original meaning and transfer it under the approved procedure. A transfer record shows the handoff activity, not that a qualified person resolved the matter."
        ]
      },
      {
        "heading": "Design the source record",
        "paragraphs": [
          "For meeting action registers, record a stable identifier, authoritative source, received time, source date, current state, status reason, owner, next review date, and relevant reference number. Use unknown, unavailable, pending, and not applicable as separate values.",
          "For meeting action registers, corrections should preserve the earlier value, the evidence supporting the change, the person who made it, and the effective time. Silent replacement makes later reconstruction unreliable and can conceal a weak instruction."
        ]
      },
      {
        "heading": "Build the operating sequence",
        "paragraphs": [
          "For meeting action registers, confirm the current procedure and access role, verify identity using approved fields, capture source facts without inference, apply the permitted administrative action, and route anything outside the rule to its named owner.",
          "For meeting action registers, at closure, reconcile the record with the primary system and require either supported completion evidence or a handoff with an accountable recipient. Temporary notes should have an expiry, disposition, and deletion or retention instruction."
        ]
      },
      {
        "heading": "Test exception paths",
        "paragraphs": [
          "For meeting action registers, use realistic cases that include a duplicate record, missing source, conflicting dates, failed channel, unavailable reviewer, sensitive reply, system outage, and request outside scope. Record where the procedure becomes ambiguous.",
          "For meeting action registers, an exception path needs a trigger, destination, required context, communication channel, fallback owner, acknowledgment state, and stopping rule. It should never ask administrative personnel to fill a clinical decision gap."
        ]
      },
      {
        "heading": "Protect access and minimum necessary information",
        "paragraphs": [
          "For meeting action registers, provide individual accounts and the least system access required for the assigned queue. Review permissions when staffing, duties, vendors, platforms, or services change, and document offboarding completion.",
          "For meeting action registers, avoid copying clinical narrative or identifiers into private spreadsheets, email, or chat merely to explain a queue state. The organization should approve systems, exports, retention, and disposal with appropriate professional guidance."
        ]
      },
      {
        "heading": "Review quality with evidence",
        "paragraphs": [
          "For meeting action registers, select a documented sample that includes ordinary work and known exceptions. Compare each administrative fact with its named source, test the status criteria, and confirm protected decisions remained with accountable professionals.",
          "For meeting action registers, measure source agreement, required-field completeness, routing accuracy, unresolved ownership, correction traceability, and exception recurrence separately. A single activity count cannot establish record quality or care outcomes."
        ]
      },
      {
        "heading": "Use a practical control table",
        "paragraphs": [
          "For meeting action registers, a control table should list the step, permitted actor, source, output, exception trigger, and reviewer. Managers can use it during onboarding, sampling, incident review, and change approval instead of relying on unwritten custom.",
          "For meeting action registers, version the table when systems, statuses, scripts, owners, or service boundaries change. Do not combine results across materially different versions without noting the change and its likely effect on eligibility or classification."
        ]
      },
      {
        "heading": "Close with accountable ownership",
        "paragraphs": [
          "For meeting action registers, a reliable workflow ends with a named owner and inspectable evidence. Closed should never mean that staff stopped looking; it should mean the written closure condition was satisfied or an authorized person recorded the disposition.",
          "For meeting action registers, begin with a small representative batch, review discrepancies, revise the procedure, and retest before expanding volume. Controlled learning is more defensible than handing over an entire function with vague expectations."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a coordinator make clinical decisions during meeting action registers?",
        "a": "No. Clinical assessment, urgency, diagnosis, treatment, and other licensed decisions remain with qualified professionals."
      },
      {
        "q": "What should happen when source systems disagree?",
        "a": "Preserve both values and their provenance, then route the discrepancy to the authorized owner rather than guessing."
      },
      {
        "q": "How should managers review this workflow?",
        "a": "Use a documented sample, compare records with named sources, and assign recurring exceptions to a process owner."
      }
    ],
    "internalService": "/services/referral-coordination",
    "internalSibling": "/blog/referral-status-definition-guide",
    "source": {
      "label": "Agency for Healthcare Research and Quality Care Coordination",
      "url": "https://www.ahrq.gov/ncepcr/care/coordination.html"
    }
  },
  {
    "slug": "referral-status-definition-guide",
    "title": "Define Referral Statuses With Observable Criteria",
    "description": "Referral statuses should describe observable administrative conditions rather than imply suitability, urgency, or acceptance.",
    "category": "Referral systems",
    "publishedAt": "2026-10-12",
    "readTime": "11 min read",
    "thumbnail": "/thumbnails/october-12/referral-status-definition-guide.webp",
    "sections": [
      {
        "heading": "Define the administrative purpose",
        "paragraphs": [
          "For referral status definitions, referral statuses should describe observable administrative conditions rather than imply suitability, urgency, or acceptance. The role remains limited to repeatable preparation, coordination, documentation, and escalation under approved rules.",
          "For referral status definitions, write one purpose statement that names the eligible queue, source of truth, permitted action, evidence of completion, accountable reviewer, and prohibited decisions. In a record marked ready even though a required document is unreadable, those definitions keep uncertainty visible rather than forcing an unsupported status."
        ]
      },
      {
        "heading": "Separate preparation from professional judgment",
        "paragraphs": [
          "For referral status definitions, an assistant may compare approved fields, organize records, send current templates, maintain stated statuses, and route an exception. The assistant does not assess symptoms, determine clinical priority, select treatment, interpret professional notes, or promise access to care.",
          "For referral status definitions, when a message includes clinical, medication, safety, legal, privacy, or complaint content, preserve its original meaning and transfer it under the approved procedure. A transfer record shows the handoff activity, not that a qualified person resolved the matter."
        ]
      },
      {
        "heading": "Design the source record",
        "paragraphs": [
          "For referral status definitions, record a stable identifier, authoritative source, received time, source date, current state, status reason, owner, next review date, and relevant reference number. Use unknown, unavailable, pending, and not applicable as separate values.",
          "For referral status definitions, corrections should preserve the earlier value, the evidence supporting the change, the person who made it, and the effective time. Silent replacement makes later reconstruction unreliable and can conceal a weak instruction."
        ]
      },
      {
        "heading": "Build the operating sequence",
        "paragraphs": [
          "For referral status definitions, confirm the current procedure and access role, verify identity using approved fields, capture source facts without inference, apply the permitted administrative action, and route anything outside the rule to its named owner.",
          "For referral status definitions, at closure, reconcile the record with the primary system and require either supported completion evidence or a handoff with an accountable recipient. Temporary notes should have an expiry, disposition, and deletion or retention instruction."
        ]
      },
      {
        "heading": "Test exception paths",
        "paragraphs": [
          "For referral status definitions, use realistic cases that include a duplicate record, missing source, conflicting dates, failed channel, unavailable reviewer, sensitive reply, system outage, and request outside scope. Record where the procedure becomes ambiguous.",
          "For referral status definitions, an exception path needs a trigger, destination, required context, communication channel, fallback owner, acknowledgment state, and stopping rule. It should never ask administrative personnel to fill a clinical decision gap."
        ]
      },
      {
        "heading": "Protect access and minimum necessary information",
        "paragraphs": [
          "For referral status definitions, provide individual accounts and the least system access required for the assigned queue. Review permissions when staffing, duties, vendors, platforms, or services change, and document offboarding completion.",
          "For referral status definitions, avoid copying clinical narrative or identifiers into private spreadsheets, email, or chat merely to explain a queue state. The organization should approve systems, exports, retention, and disposal with appropriate professional guidance."
        ]
      },
      {
        "heading": "Review quality with evidence",
        "paragraphs": [
          "For referral status definitions, select a documented sample that includes ordinary work and known exceptions. Compare each administrative fact with its named source, test the status criteria, and confirm protected decisions remained with accountable professionals.",
          "For referral status definitions, measure source agreement, required-field completeness, routing accuracy, unresolved ownership, correction traceability, and exception recurrence separately. A single activity count cannot establish record quality or care outcomes."
        ]
      },
      {
        "heading": "Use a practical control table",
        "paragraphs": [
          "For referral status definitions, a control table should list the step, permitted actor, source, output, exception trigger, and reviewer. Managers can use it during onboarding, sampling, incident review, and change approval instead of relying on unwritten custom.",
          "For referral status definitions, version the table when systems, statuses, scripts, owners, or service boundaries change. Do not combine results across materially different versions without noting the change and its likely effect on eligibility or classification."
        ]
      },
      {
        "heading": "Close with accountable ownership",
        "paragraphs": [
          "For referral status definitions, a reliable workflow ends with a named owner and inspectable evidence. Closed should never mean that staff stopped looking; it should mean the written closure condition was satisfied or an authorized person recorded the disposition.",
          "For referral status definitions, begin with a small representative batch, review discrepancies, revise the procedure, and retest before expanding volume. Controlled learning is more defensible than handing over an entire function with vague expectations."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a coordinator make clinical decisions during referral status definitions?",
        "a": "No. Clinical assessment, urgency, diagnosis, treatment, and other licensed decisions remain with qualified professionals."
      },
      {
        "q": "What should happen when source systems disagree?",
        "a": "Preserve both values and their provenance, then route the discrepancy to the authorized owner rather than guessing."
      },
      {
        "q": "How should managers review this workflow?",
        "a": "Use a documented sample, compare records with named sources, and assign recurring exceptions to a process owner."
      }
    ],
    "internalService": "/services/patient-scheduling",
    "internalSibling": "/blog/patient-communication-preference-reconciliation",
    "source": {
      "label": "Agency for Healthcare Research and Quality Care Coordination",
      "url": "https://www.ahrq.gov/ncepcr/care/coordination.html"
    }
  },
  {
    "slug": "patient-communication-preference-reconciliation",
    "title": "Reconcile Patient Communication Preferences Safely",
    "description": "Preference reconciliation compares approved channels, consent records, restrictions, failed delivery, and later changes against one source of truth.",
    "category": "Patient communication",
    "publishedAt": "2026-10-12",
    "readTime": "11 min read",
    "thumbnail": "/thumbnails/october-12/patient-communication-preference-reconciliation.webp",
    "sections": [
      {
        "heading": "Define the administrative purpose",
        "paragraphs": [
          "For communication preference reconciliation, preference reconciliation compares approved channels, consent records, restrictions, failed delivery, and later changes against one source of truth. The role remains limited to repeatable preparation, coordination, documentation, and escalation under approved rules.",
          "For communication preference reconciliation, write one purpose statement that names the eligible queue, source of truth, permitted action, evidence of completion, accountable reviewer, and prohibited decisions. In a person allowing text reminders but limiting voicemail detail, those definitions keep uncertainty visible rather than forcing an unsupported status."
        ]
      },
      {
        "heading": "Separate preparation from professional judgment",
        "paragraphs": [
          "For communication preference reconciliation, an assistant may compare approved fields, organize records, send current templates, maintain stated statuses, and route an exception. The assistant does not assess symptoms, determine clinical priority, select treatment, interpret professional notes, or promise access to care.",
          "For communication preference reconciliation, when a message includes clinical, medication, safety, legal, privacy, or complaint content, preserve its original meaning and transfer it under the approved procedure. A transfer record shows the handoff activity, not that a qualified person resolved the matter."
        ]
      },
      {
        "heading": "Design the source record",
        "paragraphs": [
          "For communication preference reconciliation, record a stable identifier, authoritative source, received time, source date, current state, status reason, owner, next review date, and relevant reference number. Use unknown, unavailable, pending, and not applicable as separate values.",
          "For communication preference reconciliation, corrections should preserve the earlier value, the evidence supporting the change, the person who made it, and the effective time. Silent replacement makes later reconstruction unreliable and can conceal a weak instruction."
        ]
      },
      {
        "heading": "Build the operating sequence",
        "paragraphs": [
          "For communication preference reconciliation, confirm the current procedure and access role, verify identity using approved fields, capture source facts without inference, apply the permitted administrative action, and route anything outside the rule to its named owner.",
          "For communication preference reconciliation, at closure, reconcile the record with the primary system and require either supported completion evidence or a handoff with an accountable recipient. Temporary notes should have an expiry, disposition, and deletion or retention instruction."
        ]
      },
      {
        "heading": "Test exception paths",
        "paragraphs": [
          "For communication preference reconciliation, use realistic cases that include a duplicate record, missing source, conflicting dates, failed channel, unavailable reviewer, sensitive reply, system outage, and request outside scope. Record where the procedure becomes ambiguous.",
          "For communication preference reconciliation, an exception path needs a trigger, destination, required context, communication channel, fallback owner, acknowledgment state, and stopping rule. It should never ask administrative personnel to fill a clinical decision gap."
        ]
      },
      {
        "heading": "Protect access and minimum necessary information",
        "paragraphs": [
          "For communication preference reconciliation, provide individual accounts and the least system access required for the assigned queue. Review permissions when staffing, duties, vendors, platforms, or services change, and document offboarding completion.",
          "For communication preference reconciliation, avoid copying clinical narrative or identifiers into private spreadsheets, email, or chat merely to explain a queue state. The organization should approve systems, exports, retention, and disposal with appropriate professional guidance."
        ]
      },
      {
        "heading": "Review quality with evidence",
        "paragraphs": [
          "For communication preference reconciliation, select a documented sample that includes ordinary work and known exceptions. Compare each administrative fact with its named source, test the status criteria, and confirm protected decisions remained with accountable professionals.",
          "For communication preference reconciliation, measure source agreement, required-field completeness, routing accuracy, unresolved ownership, correction traceability, and exception recurrence separately. A single activity count cannot establish record quality or care outcomes."
        ]
      },
      {
        "heading": "Use a practical control table",
        "paragraphs": [
          "For communication preference reconciliation, a control table should list the step, permitted actor, source, output, exception trigger, and reviewer. Managers can use it during onboarding, sampling, incident review, and change approval instead of relying on unwritten custom.",
          "For communication preference reconciliation, version the table when systems, statuses, scripts, owners, or service boundaries change. Do not combine results across materially different versions without noting the change and its likely effect on eligibility or classification."
        ]
      },
      {
        "heading": "Close with accountable ownership",
        "paragraphs": [
          "For communication preference reconciliation, a reliable workflow ends with a named owner and inspectable evidence. Closed should never mean that staff stopped looking; it should mean the written closure condition was satisfied or an authorized person recorded the disposition.",
          "For communication preference reconciliation, begin with a small representative batch, review discrepancies, revise the procedure, and retest before expanding volume. Controlled learning is more defensible than handing over an entire function with vague expectations."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a coordinator make clinical decisions during communication preference reconciliation?",
        "a": "No. Clinical assessment, urgency, diagnosis, treatment, and other licensed decisions remain with qualified professionals."
      },
      {
        "q": "What should happen when source systems disagree?",
        "a": "Preserve both values and their provenance, then route the discrepancy to the authorized owner rather than guessing."
      },
      {
        "q": "How should managers review this workflow?",
        "a": "Use a documented sample, compare records with named sources, and assign recurring exceptions to a process owner."
      }
    ],
    "internalService": "/services/care-team-administration",
    "internalSibling": "/blog/care-coordination-access-review-cadence",
    "source": {
      "label": "Agency for Healthcare Research and Quality Care Coordination",
      "url": "https://www.ahrq.gov/ncepcr/care/coordination.html"
    }
  },
  {
    "slug": "care-coordination-access-review-cadence",
    "title": "Set an Access Review Cadence for Care Coordination Systems",
    "description": "Access reviews should connect current duties with system roles, queue permissions, exports, inactive accounts, and offboarding evidence.",
    "category": "Role design",
    "publishedAt": "2026-10-12",
    "readTime": "11 min read",
    "thumbnail": "/thumbnails/october-12/care-coordination-access-review-cadence.webp",
    "sections": [
      {
        "heading": "Define the administrative purpose",
        "paragraphs": [
          "For access review cadence, access reviews should connect current duties with system roles, queue permissions, exports, inactive accounts, and offboarding evidence. The role remains limited to repeatable preparation, coordination, documentation, and escalation under approved rules.",
          "For access review cadence, write one purpose statement that names the eligible queue, source of truth, permitted action, evidence of completion, accountable reviewer, and prohibited decisions. In a coordinator changing assignments while retaining access to the prior team queue, those definitions keep uncertainty visible rather than forcing an unsupported status."
        ]
      },
      {
        "heading": "Separate preparation from professional judgment",
        "paragraphs": [
          "For access review cadence, an assistant may compare approved fields, organize records, send current templates, maintain stated statuses, and route an exception. The assistant does not assess symptoms, determine clinical priority, select treatment, interpret professional notes, or promise access to care.",
          "For access review cadence, when a message includes clinical, medication, safety, legal, privacy, or complaint content, preserve its original meaning and transfer it under the approved procedure. A transfer record shows the handoff activity, not that a qualified person resolved the matter."
        ]
      },
      {
        "heading": "Design the source record",
        "paragraphs": [
          "For access review cadence, record a stable identifier, authoritative source, received time, source date, current state, status reason, owner, next review date, and relevant reference number. Use unknown, unavailable, pending, and not applicable as separate values.",
          "For access review cadence, corrections should preserve the earlier value, the evidence supporting the change, the person who made it, and the effective time. Silent replacement makes later reconstruction unreliable and can conceal a weak instruction."
        ]
      },
      {
        "heading": "Build the operating sequence",
        "paragraphs": [
          "For access review cadence, confirm the current procedure and access role, verify identity using approved fields, capture source facts without inference, apply the permitted administrative action, and route anything outside the rule to its named owner.",
          "For access review cadence, at closure, reconcile the record with the primary system and require either supported completion evidence or a handoff with an accountable recipient. Temporary notes should have an expiry, disposition, and deletion or retention instruction."
        ]
      },
      {
        "heading": "Test exception paths",
        "paragraphs": [
          "For access review cadence, use realistic cases that include a duplicate record, missing source, conflicting dates, failed channel, unavailable reviewer, sensitive reply, system outage, and request outside scope. Record where the procedure becomes ambiguous.",
          "For access review cadence, an exception path needs a trigger, destination, required context, communication channel, fallback owner, acknowledgment state, and stopping rule. It should never ask administrative personnel to fill a clinical decision gap."
        ]
      },
      {
        "heading": "Protect access and minimum necessary information",
        "paragraphs": [
          "For access review cadence, provide individual accounts and the least system access required for the assigned queue. Review permissions when staffing, duties, vendors, platforms, or services change, and document offboarding completion.",
          "For access review cadence, avoid copying clinical narrative or identifiers into private spreadsheets, email, or chat merely to explain a queue state. The organization should approve systems, exports, retention, and disposal with appropriate professional guidance."
        ]
      },
      {
        "heading": "Review quality with evidence",
        "paragraphs": [
          "For access review cadence, select a documented sample that includes ordinary work and known exceptions. Compare each administrative fact with its named source, test the status criteria, and confirm protected decisions remained with accountable professionals.",
          "For access review cadence, measure source agreement, required-field completeness, routing accuracy, unresolved ownership, correction traceability, and exception recurrence separately. A single activity count cannot establish record quality or care outcomes."
        ]
      },
      {
        "heading": "Use a practical control table",
        "paragraphs": [
          "For access review cadence, a control table should list the step, permitted actor, source, output, exception trigger, and reviewer. Managers can use it during onboarding, sampling, incident review, and change approval instead of relying on unwritten custom.",
          "For access review cadence, version the table when systems, statuses, scripts, owners, or service boundaries change. Do not combine results across materially different versions without noting the change and its likely effect on eligibility or classification."
        ]
      },
      {
        "heading": "Close with accountable ownership",
        "paragraphs": [
          "For access review cadence, a reliable workflow ends with a named owner and inspectable evidence. Closed should never mean that staff stopped looking; it should mean the written closure condition was satisfied or an authorized person recorded the disposition.",
          "For access review cadence, begin with a small representative batch, review discrepancies, revise the procedure, and retest before expanding volume. Controlled learning is more defensible than handing over an entire function with vague expectations."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a coordinator make clinical decisions during access review cadence?",
        "a": "No. Clinical assessment, urgency, diagnosis, treatment, and other licensed decisions remain with qualified professionals."
      },
      {
        "q": "What should happen when source systems disagree?",
        "a": "Preserve both values and their provenance, then route the discrepancy to the authorized owner rather than guessing."
      },
      {
        "q": "How should managers review this workflow?",
        "a": "Use a documented sample, compare records with named sources, and assign recurring exceptions to a process owner."
      }
    ],
    "internalService": "/services/care-gap-outreach",
    "internalSibling": "/blog/care-workflow-outage-reconciliation",
    "source": {
      "label": "Agency for Healthcare Research and Quality Care Coordination",
      "url": "https://www.ahrq.gov/ncepcr/care/coordination.html"
    }
  },
  {
    "slug": "care-workflow-outage-reconciliation",
    "title": "Reconcile Care Coordination Work After a System Outage",
    "description": "Outage procedures need temporary identifiers, restricted storage, action history, restoration checks, and controlled entry into the primary system.",
    "category": "Role design",
    "publishedAt": "2026-10-12",
    "readTime": "11 min read",
    "thumbnail": "/thumbnails/october-12/care-workflow-outage-reconciliation.webp",
    "sections": [
      {
        "heading": "Define the administrative purpose",
        "paragraphs": [
          "For outage reconciliation, outage procedures need temporary identifiers, restricted storage, action history, restoration checks, and controlled entry into the primary system. The role remains limited to repeatable preparation, coordination, documentation, and escalation under approved rules.",
          "For outage reconciliation, write one purpose statement that names the eligible queue, source of truth, permitted action, evidence of completion, accountable reviewer, and prohibited decisions. In a scheduling and referral platform becoming unavailable during an active work period, those definitions keep uncertainty visible rather than forcing an unsupported status."
        ]
      },
      {
        "heading": "Separate preparation from professional judgment",
        "paragraphs": [
          "For outage reconciliation, an assistant may compare approved fields, organize records, send current templates, maintain stated statuses, and route an exception. The assistant does not assess symptoms, determine clinical priority, select treatment, interpret professional notes, or promise access to care.",
          "For outage reconciliation, when a message includes clinical, medication, safety, legal, privacy, or complaint content, preserve its original meaning and transfer it under the approved procedure. A transfer record shows the handoff activity, not that a qualified person resolved the matter."
        ]
      },
      {
        "heading": "Design the source record",
        "paragraphs": [
          "For outage reconciliation, record a stable identifier, authoritative source, received time, source date, current state, status reason, owner, next review date, and relevant reference number. Use unknown, unavailable, pending, and not applicable as separate values.",
          "For outage reconciliation, corrections should preserve the earlier value, the evidence supporting the change, the person who made it, and the effective time. Silent replacement makes later reconstruction unreliable and can conceal a weak instruction."
        ]
      },
      {
        "heading": "Build the operating sequence",
        "paragraphs": [
          "For outage reconciliation, confirm the current procedure and access role, verify identity using approved fields, capture source facts without inference, apply the permitted administrative action, and route anything outside the rule to its named owner.",
          "For outage reconciliation, at closure, reconcile the record with the primary system and require either supported completion evidence or a handoff with an accountable recipient. Temporary notes should have an expiry, disposition, and deletion or retention instruction."
        ]
      },
      {
        "heading": "Test exception paths",
        "paragraphs": [
          "For outage reconciliation, use realistic cases that include a duplicate record, missing source, conflicting dates, failed channel, unavailable reviewer, sensitive reply, system outage, and request outside scope. Record where the procedure becomes ambiguous.",
          "For outage reconciliation, an exception path needs a trigger, destination, required context, communication channel, fallback owner, acknowledgment state, and stopping rule. It should never ask administrative personnel to fill a clinical decision gap."
        ]
      },
      {
        "heading": "Protect access and minimum necessary information",
        "paragraphs": [
          "For outage reconciliation, provide individual accounts and the least system access required for the assigned queue. Review permissions when staffing, duties, vendors, platforms, or services change, and document offboarding completion.",
          "For outage reconciliation, avoid copying clinical narrative or identifiers into private spreadsheets, email, or chat merely to explain a queue state. The organization should approve systems, exports, retention, and disposal with appropriate professional guidance."
        ]
      },
      {
        "heading": "Review quality with evidence",
        "paragraphs": [
          "For outage reconciliation, select a documented sample that includes ordinary work and known exceptions. Compare each administrative fact with its named source, test the status criteria, and confirm protected decisions remained with accountable professionals.",
          "For outage reconciliation, measure source agreement, required-field completeness, routing accuracy, unresolved ownership, correction traceability, and exception recurrence separately. A single activity count cannot establish record quality or care outcomes."
        ]
      },
      {
        "heading": "Use a practical control table",
        "paragraphs": [
          "For outage reconciliation, a control table should list the step, permitted actor, source, output, exception trigger, and reviewer. Managers can use it during onboarding, sampling, incident review, and change approval instead of relying on unwritten custom.",
          "For outage reconciliation, version the table when systems, statuses, scripts, owners, or service boundaries change. Do not combine results across materially different versions without noting the change and its likely effect on eligibility or classification."
        ]
      },
      {
        "heading": "Close with accountable ownership",
        "paragraphs": [
          "For outage reconciliation, a reliable workflow ends with a named owner and inspectable evidence. Closed should never mean that staff stopped looking; it should mean the written closure condition was satisfied or an authorized person recorded the disposition.",
          "For outage reconciliation, begin with a small representative batch, review discrepancies, revise the procedure, and retest before expanding volume. Controlled learning is more defensible than handing over an entire function with vague expectations."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a coordinator make clinical decisions during outage reconciliation?",
        "a": "No. Clinical assessment, urgency, diagnosis, treatment, and other licensed decisions remain with qualified professionals."
      },
      {
        "q": "What should happen when source systems disagree?",
        "a": "Preserve both values and their provenance, then route the discrepancy to the authorized owner rather than guessing."
      },
      {
        "q": "How should managers review this workflow?",
        "a": "Use a documented sample, compare records with named sources, and assign recurring exceptions to a process owner."
      }
    ],
    "internalService": "/services/patient-communication",
    "internalSibling": "/blog/patient-follow-up-exception-taxonomy",
    "source": {
      "label": "Agency for Healthcare Research and Quality Care Coordination",
      "url": "https://www.ahrq.gov/ncepcr/care/coordination.html"
    }
  },
  {
    "slug": "patient-follow-up-exception-taxonomy",
    "title": "Create a Patient Follow-Up Exception Taxonomy",
    "description": "An exception taxonomy separates missing sources, failed contact, conflicting records, unavailable owners, and protected questions that need different responses.",
    "category": "Care coordination",
    "publishedAt": "2026-10-12",
    "readTime": "11 min read",
    "thumbnail": "/thumbnails/october-12/patient-follow-up-exception-taxonomy.webp",
    "sections": [
      {
        "heading": "Define the administrative purpose",
        "paragraphs": [
          "For follow-up exception taxonomies, an exception taxonomy separates missing sources, failed contact, conflicting records, unavailable owners, and protected questions that need different responses. The role remains limited to repeatable preparation, coordination, documentation, and escalation under approved rules.",
          "For follow-up exception taxonomies, write one purpose statement that names the eligible queue, source of truth, permitted action, evidence of completion, accountable reviewer, and prohibited decisions. In a follow-up queue using one vague blocked status for five unrelated conditions, those definitions keep uncertainty visible rather than forcing an unsupported status."
        ]
      },
      {
        "heading": "Separate preparation from professional judgment",
        "paragraphs": [
          "For follow-up exception taxonomies, an assistant may compare approved fields, organize records, send current templates, maintain stated statuses, and route an exception. The assistant does not assess symptoms, determine clinical priority, select treatment, interpret professional notes, or promise access to care.",
          "For follow-up exception taxonomies, when a message includes clinical, medication, safety, legal, privacy, or complaint content, preserve its original meaning and transfer it under the approved procedure. A transfer record shows the handoff activity, not that a qualified person resolved the matter."
        ]
      },
      {
        "heading": "Design the source record",
        "paragraphs": [
          "For follow-up exception taxonomies, record a stable identifier, authoritative source, received time, source date, current state, status reason, owner, next review date, and relevant reference number. Use unknown, unavailable, pending, and not applicable as separate values.",
          "For follow-up exception taxonomies, corrections should preserve the earlier value, the evidence supporting the change, the person who made it, and the effective time. Silent replacement makes later reconstruction unreliable and can conceal a weak instruction."
        ]
      },
      {
        "heading": "Build the operating sequence",
        "paragraphs": [
          "For follow-up exception taxonomies, confirm the current procedure and access role, verify identity using approved fields, capture source facts without inference, apply the permitted administrative action, and route anything outside the rule to its named owner.",
          "For follow-up exception taxonomies, at closure, reconcile the record with the primary system and require either supported completion evidence or a handoff with an accountable recipient. Temporary notes should have an expiry, disposition, and deletion or retention instruction."
        ]
      },
      {
        "heading": "Test exception paths",
        "paragraphs": [
          "For follow-up exception taxonomies, use realistic cases that include a duplicate record, missing source, conflicting dates, failed channel, unavailable reviewer, sensitive reply, system outage, and request outside scope. Record where the procedure becomes ambiguous.",
          "For follow-up exception taxonomies, an exception path needs a trigger, destination, required context, communication channel, fallback owner, acknowledgment state, and stopping rule. It should never ask administrative personnel to fill a clinical decision gap."
        ]
      },
      {
        "heading": "Protect access and minimum necessary information",
        "paragraphs": [
          "For follow-up exception taxonomies, provide individual accounts and the least system access required for the assigned queue. Review permissions when staffing, duties, vendors, platforms, or services change, and document offboarding completion.",
          "For follow-up exception taxonomies, avoid copying clinical narrative or identifiers into private spreadsheets, email, or chat merely to explain a queue state. The organization should approve systems, exports, retention, and disposal with appropriate professional guidance."
        ]
      },
      {
        "heading": "Review quality with evidence",
        "paragraphs": [
          "For follow-up exception taxonomies, select a documented sample that includes ordinary work and known exceptions. Compare each administrative fact with its named source, test the status criteria, and confirm protected decisions remained with accountable professionals.",
          "For follow-up exception taxonomies, measure source agreement, required-field completeness, routing accuracy, unresolved ownership, correction traceability, and exception recurrence separately. A single activity count cannot establish record quality or care outcomes."
        ]
      },
      {
        "heading": "Use a practical control table",
        "paragraphs": [
          "For follow-up exception taxonomies, a control table should list the step, permitted actor, source, output, exception trigger, and reviewer. Managers can use it during onboarding, sampling, incident review, and change approval instead of relying on unwritten custom.",
          "For follow-up exception taxonomies, version the table when systems, statuses, scripts, owners, or service boundaries change. Do not combine results across materially different versions without noting the change and its likely effect on eligibility or classification."
        ]
      },
      {
        "heading": "Close with accountable ownership",
        "paragraphs": [
          "For follow-up exception taxonomies, a reliable workflow ends with a named owner and inspectable evidence. Closed should never mean that staff stopped looking; it should mean the written closure condition was satisfied or an authorized person recorded the disposition.",
          "For follow-up exception taxonomies, begin with a small representative batch, review discrepancies, revise the procedure, and retest before expanding volume. Controlled learning is more defensible than handing over an entire function with vague expectations."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a coordinator make clinical decisions during follow-up exception taxonomies?",
        "a": "No. Clinical assessment, urgency, diagnosis, treatment, and other licensed decisions remain with qualified professionals."
      },
      {
        "q": "What should happen when source systems disagree?",
        "a": "Preserve both values and their provenance, then route the discrepancy to the authorized owner rather than guessing."
      },
      {
        "q": "How should managers review this workflow?",
        "a": "Use a documented sample, compare records with named sources, and assign recurring exceptions to a process owner."
      }
    ],
    "internalService": "/services/records-coordination",
    "internalSibling": "/blog/referral-document-receipt-reconciliation",
    "source": {
      "label": "Agency for Healthcare Research and Quality Care Coordination",
      "url": "https://www.ahrq.gov/ncepcr/care/coordination.html"
    }
  }
];
