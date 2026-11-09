import type { BlogPost } from './types';

export const november08BlogPosts: readonly BlogPost[] = [
  {
    "slug": "build-a-referral-intake-note-that-routes-the-clinical-question",
    "title": "Build a referral intake note that routes the clinical question",
    "description": "A referral intake note that records the source, the patient request, and the clinical question without guessing the answer.",
    "category": "Care coordination",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/build-a-referral-intake-note-that-routes-the-clinical-question.webp",
    "sections": [
      {
        "heading": "How to approach: Build a referral intake note that routes the clinical question",
        "paragraphs": [
          "A referral intake note is a routing record, not a clinical opinion. It captures who sent the referral, what the patient asked for, and which clinical question needs an owner. The coordinator should be able to complete it without making a judgment about diagnosis or treatment. A note that answers the clinical question has crossed the role boundary.",
          "Design the note around the next decision. If the next decision is a triage review, the note needs the referral source, the requested service, and the date. If the next decision is scheduling, it needs the patient's availability and contact preference. The fields should follow the decision, not the other way around."
        ]
      },
      {
        "heading": "Capture the referral source and date",
        "paragraphs": [
          "Record the referring organization, the person who sent the referral, and the date it arrived. Include the channel and the reference number if one exists. A note without a source cannot be verified when the patient calls back. A dated source also shows whether the referral met the response window.",
          "Attach the referral document or a link to it rather than retyping the whole text. Retelling introduces errors and hides the original wording. If the document is illegible, record that fact and route the request for a readable copy. The coordinator should not reconstruct a clinical detail from a blurry page."
        ]
      },
      {
        "heading": "Separate facts from the clinical question",
        "paragraphs": [
          "Write the patient's stated need in their own words, then list the verified facts separately. A request for help with transportation is a fact, while a question about whether the patient can safely travel is clinical. Keeping the two apart prevents the coordinator from answering a question the role does not own. A short note with four fields is easier to use than a long narrative.",
          "Name the clinical question in one sentence that a clinician can answer. A vague question such as please review produces a vague response. A specific question such as whether the patient needs a mobility assessment before the visit gives the clinician something to decide. Route the clinical question rather than answering it."
        ]
      },
      {
        "heading": "Name the owner and the response window",
        "paragraphs": [
          "Assign the clinical question to a named clinician or role, with a date by which a response is expected. The coordinator can own the preparation and the follow-up, but not the clinical judgment. Record the owner in the same line as the question so the queue can be sorted. Keep the confirmation and the release record together.",
          "Set the response window according to the referral's urgency and the clinic's policy. A routine referral and an urgent one should not share the same clock. If the window passes, the note should show the escalation and the person who received it. Keep the confirmation and the release record together."
        ]
      },
      {
        "heading": "Record the patient communication preference",
        "paragraphs": [
          "Record the patient's preferred language, channel, and contact time. Note any accommodation the patient requested, such as a interpreter or a written summary. The coordinator should not assume that a phone call is acceptable because it is convenient for the clinic. Keep the evidence with the record, not in a separate inbox.",
          "Keep sensitive details to what the work requires. The intake note is a working record, not a full clinical history. Share it only through the approved system and with the people who need it for the referral. Review the first few notes together with the clinical owner."
        ]
      },
      {
        "heading": "Stop when the request exceeds scope",
        "paragraphs": [
          "A referral that asks the coordinator to assess, diagnose, or recommend treatment should stop at the boundary. Record the request exactly as it arrived and route it to the clinical owner. A well-written stop note protects the patient and the coordinator. Use the approved system and the minimum data needed for the task.",
          "Review the intake note with the clinical owner at the start of the relationship. Ask whether the fields support the decision and whether any question is missing. Update the template once, then use the same version consistently. Use the approved system and the minimum data needed for the task."
        ]
      }
    ],
    "faq": [
      {
        "q": "What belongs in a referral intake note?",
        "a": "The source, the date, the patient request, the verified facts, the clinical question, and the named owner."
      },
      {
        "q": "Should a coordinator answer a clinical question?",
        "a": "No. The coordinator records and routes the question to the named clinical owner."
      }
    ],
    "internalService": "/services/referral-coordination",
    "internalSibling": "/blog/stop-a-clinical-question-at-the-coordinator-boundary",
    "source": {
      "label": "AHRQ",
      "url": "https://www.ahrq.gov/"
    }
  },
  {
    "slug": "set-a-same-day-callback-script-for-a-care-coordination-queue",
    "title": "Set a same-day callback script for a care coordination queue",
    "description": "A callback script that sets a realistic window, protects clinical boundaries, and records the outcome of each attempt.",
    "category": "Care coordination",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/set-a-same-day-callback-script-for-a-care-coordination-queue.webp",
    "sections": [
      {
        "heading": "How to approach: Set a same-day callback script for a care coordination queue",
        "paragraphs": [
          "A same-day callback script is a promise about capacity, not just a polite sentence. The queue must have enough trained people to return the calls within the window it announces. Start by measuring the calls the team can actually complete in a day. Then write the script around that number.",
          "Keep the script short enough to use during a real call. It should include the opening, the reason for the call, the boundary, and the next step. The coordinator should not read a long paragraph while the patient waits. Write the boundary in the place where the work is assigned."
        ]
      },
      {
        "heading": "Start with the promise the queue can keep",
        "paragraphs": [
          "Write the window as a specific time range and state the time zone. Avoid phrases such as later today or as soon as possible because they cannot be audited. If the queue cannot promise same-day service for every request, say which requests qualify. Update the checklist when the same question appears twice.",
          "Check the promise against breaks, meetings, and the calls already waiting. A promise that ignores those obligations becomes a second backlog. Publish the last acceptable callback time so the coordinator does not promise a call no one is scheduled to make. Name the clinical owner in the same line as the question."
        ]
      },
      {
        "heading": "Write the opening and the boundary",
        "paragraphs": [
          "The opening should identify the clinic, the coordinator, and the reason for the call. Ask whether it is a good time to talk before discussing any detail. If the patient is unavailable, offer the approved alternative rather than leaving a sensitive voicemail. Route the clinical question rather than answering it.",
          "State the boundary in plain language. The coordinator can help with scheduling, records, and coordination, but cannot give clinical advice. If the patient asks a clinical question, record it and route it to the named clinician. Test the template on one real referral before expanding it."
        ]
      },
      {
        "heading": "Record the attempt and the outcome",
        "paragraphs": [
          "Record the number, the time, and the result of each attempt. A busy signal, a voicemail, and a wrong number are different outcomes and need different next steps. A note that says called patient does not help the next coordinator. Review the first few notes together with the clinical owner.",
          "If the patient asks to be called later, record the new window and the reason. Do not overwrite the original promise without a trace. The history shows whether the queue is missing commitments or responding to patient requests. Route the clinical question rather than answering it."
        ]
      },
      {
        "heading": "Escalate a clinical question immediately",
        "paragraphs": [
          "A clinical question raised during a callback should leave the routine queue. Record the patient's words, the date, and the clinician who received the question. The coordinator should not promise an answer or a treatment. Keep the patient's words separate from the coordinator's interpretation.",
          "If the question is urgent according to the clinic's policy, follow the emergency path rather than the routine callback path. The script should name that path so the coordinator does not have to improvise. Use the approved system and the minimum data needed for the task. Keep the patient's words separate from the coordinator's interpretation."
        ]
      },
      {
        "heading": "Review failed callbacks daily",
        "paragraphs": [
          "At the end of the day, review the callbacks that did not reach the patient. Sort them by remaining time and decide whether to retry, send a written notice, or return the case to the clinic. A failed callback is a queue item, not a closed task. Test the template on one real referral before expanding it.",
          "Look for patterns in the failures. A high number of wrong numbers may point to a registration problem, while a high number of no-answers may point to a timing problem. Fix the cause instead of adding more attempts. Use the approved system and the minimum data needed for the task."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a same-day callback script promise?",
        "a": "A specific window the queue can staff, with the time zone and the last acceptable callback time."
      },
      {
        "q": "What happens when a patient asks a clinical question?",
        "a": "Record the question and route it to the named clinician rather than answering it."
      }
    ],
    "internalService": "/services/patient-communication",
    "internalSibling": "/blog/build-a-referral-intake-note-that-routes-the-clinical-question",
    "source": {
      "label": "HHS Office for Civil Rights: HIPAA",
      "url": "https://www.hhs.gov/hipaa/"
    }
  },
  {
    "slug": "write-a-patient-handoff-checklist-for-a-move-between-clinics",
    "title": "Write a patient handoff checklist for a move between clinics",
    "description": "A handoff checklist that covers records, consent, transport, language needs, and the confirmation that closes the loop.",
    "category": "Care coordination",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/write-a-patient-handoff-checklist-for-a-move-between-clinics.webp",
    "sections": [
      {
        "heading": "How to approach: Write a patient handoff checklist for a move between clinics",
        "paragraphs": [
          "A patient handoff between clinics fails when the receiving team has to reconstruct the story. The checklist should name the records, the open items, the consent, and the person who will confirm receipt. Start with the receiving clinic and work backward. Route the clinical question rather than answering it.",
          "Keep the checklist short enough to complete before the transfer. A long form that is finished after the patient leaves is not a control. Use the same template for every move so the team learns what information is actually needed. If the source is unclear, pause and ask rather than guessing."
        ]
      },
      {
        "heading": "Confirm the receiving clinic and contact",
        "paragraphs": [
          "Record the receiving clinic, the contact person, and the date the patient is expected. Confirm that the clinic is accepting the patient and that the specialty matches the request. A handoff sent to the wrong clinic wastes time and may delay care. Write the boundary in the place where the work is assigned.",
          "Record the channel used for the handoff and the confirmation received. A fax without a confirmation is not a completed handoff. If the receiving clinic uses a portal, record the submission reference. Write the boundary in the place where the work is assigned."
        ]
      },
      {
        "heading": "List the records and the open items",
        "paragraphs": [
          "List the records included in the handoff and the records still missing. Mark each item as sent, pending, or not applicable. The receiving team should not have to guess whether a document was omitted on purpose. Update the checklist when the same question appears twice.",
          "List the open items that need a decision, such as a pending test or a medication question. Name the owner and the expected date. A handoff that hides an open item creates a gap at the receiving clinic. Test the template on one real referral before expanding it."
        ]
      },
      {
        "heading": "Record consent and the permitted scope",
        "paragraphs": [
          "Confirm that the patient's consent covers the records being shared and the receiving clinic. Record the date and the source of the consent. If the consent is limited, state the limit in the handoff. Set the next review date before the current one ends.",
          "Do not include records outside the permitted scope even if they seem useful. A privacy breach is harder to repair than a missing document. Route the question to the privacy owner if the scope is unclear. Test the template on one real referral before expanding it."
        ]
      },
      {
        "heading": "Set the transport and language needs",
        "paragraphs": [
          "Record the patient's transport plan and any language or accessibility need. A handoff that ignores transport may result in a missed appointment. A handoff that ignores language may result in a patient who cannot understand the next step. A short note with four fields is easier to use than a long narrative.",
          "Confirm that the receiving clinic can meet the need before the patient arrives. If the clinic cannot, record the alternative and the person who arranged it. The patient should not discover the gap at the front desk. Review the first few notes together with the clinical owner."
        ]
      },
      {
        "heading": "Close the loop with a dated confirmation",
        "paragraphs": [
          "The handoff is complete when the receiving clinic confirms receipt and the patient knows the next step. Record the confirmation date and the person who confirmed. A sent message is not a completed handoff. If the source is unclear, pause and ask rather than guessing.",
          "Review one handoff each month and ask the receiving team what was missing. Update the checklist based on that feedback. A checklist that is never reviewed becomes a form that everyone fills out without improving the transfer. Set the next review date before the current one ends."
        ]
      }
    ],
    "faq": [
      {
        "q": "When is a patient handoff complete?",
        "a": "When the receiving clinic confirms receipt and the patient knows the next step."
      },
      {
        "q": "What should a handoff record about consent?",
        "a": "The consent date, source, and any limit on the records that may be shared."
      }
    ],
    "internalService": "/services/records-coordination",
    "internalSibling": "/blog/prepare-a-records-request-packet-without-guessing-consent",
    "source": {
      "label": "HHS Office for Civil Rights: HIPAA",
      "url": "https://www.hhs.gov/hipaa/"
    }
  },
  {
    "slug": "keep-a-community-resource-list-current-and-source-backed",
    "title": "Keep a community resource list current and source-backed",
    "description": "A maintenance routine for a community resource list that records sources, verification dates, eligibility, and retirement.",
    "category": "Care coordination",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/keep-a-community-resource-list-current-and-source-backed.webp",
    "sections": [
      {
        "heading": "How to approach: Keep a community resource list current and source-backed",
        "paragraphs": [
          "A community resource list is only useful when the entries are current and traceable. Each entry should record the source, the date it was verified, and the person who checked it. A list of names and phone numbers without a source is a rumor with a spreadsheet. If the source is unclear, pause and ask rather than guessing.",
          "Decide how often each type of entry needs review. A food pantry's hours may change seasonally, while a housing program may change eligibility less often. The review interval should match the volatility of the information. Route the clinical question rather than answering it."
        ]
      },
      {
        "heading": "Record the source and the verification date",
        "paragraphs": [
          "Record the organization's official page, the phone number used, and the date of the last check. If the information came from a conversation, record the person's role and the date. A source that cannot be checked again is weak evidence. Test the template on one real referral before expanding it.",
          "Keep the original note or screenshot with the entry when the policy allows it. A later reviewer should be able to see what changed. Do not overwrite the old value without a trace. A short note with four fields is easier to use than a long narrative."
        ]
      },
      {
        "heading": "Check eligibility and hours",
        "paragraphs": [
          "Record the eligibility rules, the service area, and the hours in the entry. A resource that serves a different county or age group is not a match. The coordinator should not have to call the organization to discover a basic eligibility rule. Set the next review date before the current one ends.",
          "Check the hours against the patient's availability and transport. A resource that closes before the patient can arrive is not usable. If the hours are uncertain, mark the entry as unverified rather than guessing. Route the clinical question rather than answering it."
        ]
      },
      {
        "heading": "Separate a referral from a recommendation",
        "paragraphs": [
          "The coordinator can share a resource and help the patient contact it. The coordinator should not recommend a clinical service or promise an outcome. Use neutral language that describes what the resource offers. A note that cannot be reproduced is not yet a control.",
          "If the patient asks whether a resource is good, record the question and route it to the clinician or the approved navigation process. A personal opinion is not a substitute for an assessment. Route the clinical question rather than answering it. Update the checklist when the same question appears twice."
        ]
      },
      {
        "heading": "Retire stale entries",
        "paragraphs": [
          "An entry that has not been verified within its review window should be marked stale and removed from the active list. A stale entry can send a patient to a closed program. Retiring it is part of maintaining the list, not a failure. Review the first few notes together with the clinical owner.",
          "Keep the retired entry in an archive with the reason and the date. If the resource reopens, the team can restore it with a new verification rather than starting over. Keep the evidence with the record, not in a separate inbox. Keep the confirmation and the release record together."
        ]
      },
      {
        "heading": "Assign ownership and review quarterly",
        "paragraphs": [
          "Name one person who owns the list and one backup. The owner should review the entries on a schedule and record the review date. A list with no owner becomes stale between grant cycles. Write the boundary in the place where the work is assigned.",
          "Review the list quarterly with the people who use it. Ask which entries caused a problem and which resources are missing. The review should produce a short list of changes, not a new spreadsheet. Review the first few notes together with the clinical owner."
        ]
      }
    ],
    "faq": [
      {
        "q": "What must every community resource entry record?",
        "a": "The source, the verification date, the eligibility rules, the hours, and the owner."
      },
      {
        "q": "What should happen to a stale entry?",
        "a": "Mark it stale, remove it from the active list, and archive the reason and date."
      }
    ],
    "internalService": "/services/care-gap-outreach",
    "internalSibling": "/blog/track-a-transportation-barrier-without-owning-the-clinical-plan",
    "source": {
      "label": "SAMHSA",
      "url": "https://www.samhsa.gov/"
    }
  },
  {
    "slug": "track-a-transportation-barrier-without-owning-the-clinical-plan",
    "title": "Track a transportation barrier without owning the clinical plan",
    "description": "A coordination record for transport barriers that keeps the clinical decision with the clinician and the next step with the patient.",
    "category": "Care coordination",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/track-a-transportation-barrier-without-owning-the-clinical-plan.webp",
    "sections": [
      {
        "heading": "How to approach: Track a transportation barrier without owning the clinical plan",
        "paragraphs": [
          "A transportation barrier is an access problem, not a clinical diagnosis. The coordinator can record the barrier, offer approved options, and follow up. The coordinator should not decide whether the patient can safely travel or skip care. Keep the evidence with the record, not in a separate inbox.",
          "Start with the patient's own description of the barrier. A note that says no transport hides whether the issue is cost, distance, mobility, or a schedule conflict. The specific barrier determines the useful option. Check that the patient's preference is recorded and followed."
        ]
      },
      {
        "heading": "Record the barrier in the patient's words",
        "paragraphs": [
          "Write what the patient said, then add the verified facts. If the patient says the bus does not run after dark, record the route and the time. If the patient says a ride fell through, record the date and the intended appointment. Set the next review date before the current one ends.",
          "Record the appointment that is at risk and the date it will be missed. A barrier without a deadline is hard to prioritize. The queue should show which appointments need action first. Record the date and the source so the next reviewer can repeat the check."
        ]
      },
      {
        "heading": "Offer only approved options",
        "paragraphs": [
          "Use the approved transport resources and the organization's policy. Do not invent a ride, promise reimbursement, or commit a volunteer without approval. The coordinator can share the option and help the patient contact it. If the source is unclear, pause and ask rather than guessing.",
          "If the approved options do not fit, record the gap and route it to the person who can approve an alternative. A documented gap is more useful than a workaround that creates a safety or privacy problem. Route the clinical question rather than answering it. If the source is unclear, pause and ask rather than guessing."
        ]
      },
      {
        "heading": "Keep the clinical decision with the clinician",
        "paragraphs": [
          "If the patient asks whether to reschedule or whether it is safe to travel, route the question to the clinician. Record the question and the date it was sent. The coordinator should not answer a clinical question to keep the schedule moving. Check that the patient's preference is recorded and followed.",
          "If the appointment is urgent, follow the clinic's escalation path. The transport note should show that the clinical owner was notified and what they decided. Name the clinical owner in the same line as the question. A short note with four fields is easier to use than a long narrative."
        ]
      },
      {
        "heading": "Set a follow-up date",
        "paragraphs": [
          "Set a date to check whether the patient found transport and whether the appointment was kept. A note that ends with patient will call back has no owner and no date. The follow-up should be assigned to a person. Update the checklist when the same question appears twice.",
          "If the patient misses the appointment, record the reason and the next step. The reason may be the same barrier or a new one. Review the pattern rather than treating each miss as a separate failure. Keep the confirmation and the release record together."
        ]
      },
      {
        "heading": "Review barriers by pattern",
        "paragraphs": [
          "Review the transport barriers monthly and look for repeated routes, times, or neighborhoods. A pattern may point to a resource gap that the organization can address. A single case may need only a follow-up. Update the checklist when the same question appears twice.",
          "Share the pattern with the team and the community resource owner. The goal is to reduce the number of missed appointments, not to document more barriers. Name the clinical owner in the same line as the question. Check that the patient's preference is recorded and followed."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a coordinator decide whether a patient can travel?",
        "a": "No. The coordinator records the barrier and routes the clinical question to the clinician."
      },
      {
        "q": "What should a transport note include?",
        "a": "The patient's words, the verified facts, the at-risk appointment, the approved option, and a follow-up date."
      }
    ],
    "internalService": "/services/patient-scheduling",
    "internalSibling": "/blog/keep-a-community-resource-list-current-and-source-backed",
    "source": {
      "label": "HRSA",
      "url": "https://www.hrsa.gov/"
    }
  },
  {
    "slug": "design-a-care-gap-outreach-log-that-records-the-next-step",
    "title": "Design a care gap outreach log that records the next step",
    "description": "An outreach log that defines the gap, records contact attempts, respects consent, and closes the loop with evidence.",
    "category": "Care coordination",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/design-a-care-gap-outreach-log-that-records-the-next-step.webp",
    "sections": [
      {
        "heading": "How to approach: Design a care gap outreach log that records the next step",
        "paragraphs": [
          "A care gap outreach log works when the gap and the eligible population are defined before the first call. The log should record who was contacted, what happened, and what comes next. A list of names without a definition is not an outreach program. A short note with four fields is easier to use than a long narrative.",
          "Start with the gap the organization is addressing and the evidence that the patient is eligible. Record the source and the date. The coordinator should not add a patient to the list because someone remembered a concern. Write the boundary in the place where the work is assigned."
        ]
      },
      {
        "heading": "Define the gap and the eligible population",
        "paragraphs": [
          "Write the gap in observable terms, such as a missing screening or an overdue follow-up visit. Name the source that identified the gap and the date it was found. A gap that cannot be verified is not ready for outreach. Keep the patient's words separate from the coordinator's interpretation.",
          "Define who is eligible and who is excluded. Record the exclusions and the reason. The log should let a reviewer rebuild the population without asking the original coordinator. Name the clinical owner in the same line as the question."
        ]
      },
      {
        "heading": "Record the contact attempt",
        "paragraphs": [
          "Record the date, channel, and outcome of each attempt. A voicemail, a wrong number, and a conversation are different outcomes. A note that says contacted patient hides whether the message was actually delivered. Write the boundary in the place where the work is assigned.",
          "If the patient asks not to be contacted, record the request and the date. Remove the patient from the active outreach list. Respecting the request is part of the program, not an exception. Test the template on one real referral before expanding it."
        ]
      },
      {
        "heading": "Name the next action and owner",
        "paragraphs": [
          "Every open row needs a next action, an owner, and a date. The action might be a second call, a letter, a scheduling offer, or a clinical review. The coordinator should not leave a row open without a plan. Keep the patient's words separate from the coordinator's interpretation.",
          "If the patient is reached and declines, record the decision and the reason. Do not keep calling to improve the completion number. The log should reflect the patient's choice. Route the clinical question rather than answering it."
        ]
      },
      {
        "heading": "Respect consent and preferences",
        "paragraphs": [
          "Record the patient's preferred language, channel, and contact time. Use the approved scripts and the approved systems. Do not disclose the gap to a household member who answers the phone. Route the clinical question rather than answering it.",
          "Check the consent and privacy rules before sharing any detail. If the patient's consent is limited, record the limit and follow it. A privacy error can damage trust more than a missed outreach. Route the clinical question rather than answering it."
        ]
      },
      {
        "heading": "Close the loop with evidence and review weekly",
        "paragraphs": [
          "Close the row only when the gap is addressed or the patient has declined and the decision is recorded. Link the evidence, such as the appointment date or the screening result. A closed row without evidence is not a completion. Write the boundary in the place where the work is assigned.",
          "Review the log weekly for rows without a next action and rows that have been open too long. Look for patterns by gap type and by channel. Fix the script or the process when the same problem repeats. Record the date and the source so the next reviewer can repeat the check."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a care gap outreach log record?",
        "a": "The gap, the eligible population, each contact attempt, the patient's preference, the next action, and the evidence of closure."
      },
      {
        "q": "When should a row be closed?",
        "a": "When the gap is addressed or the patient declines and the decision is recorded with evidence."
      }
    ],
    "internalService": "/services/care-gap-outreach",
    "internalSibling": "/blog/set-a-same-day-callback-script-for-a-care-coordination-queue",
    "source": {
      "label": "CMS",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "prepare-a-records-request-packet-without-guessing-consent",
    "title": "Prepare a records request packet without guessing consent",
    "description": "A records request packet that verifies the requester, the authority, the date range, and the permitted use before anything is released.",
    "category": "Records coordination",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/prepare-a-records-request-packet-without-guessing-consent.webp",
    "sections": [
      {
        "heading": "How to approach: Prepare a records request packet without guessing consent",
        "paragraphs": [
          "A records request packet should be built from verified authority, not from an urgent email. The coordinator verifies the requester, the patient, the date range, and the permitted use. A packet assembled before verification is a privacy risk. Keep the confirmation and the release record together.",
          "Keep the packet and the verification record together. A later reviewer should be able to see who requested the records, what authority was checked, and what was released. The record is as important as the documents. Check that the patient's preference is recorded and followed."
        ]
      },
      {
        "heading": "Verify the requester and the authority",
        "paragraphs": [
          "Record the requester's name, organization, and role. Verify the request through an approved channel rather than a reply to an unsolicited email. If the request involves a patient representative, record the legal authority and the date. Check that the patient's preference is recorded and followed.",
          "Check the authorization against the organization's policy. A verbal request is not enough for a release unless the policy explicitly allows it. When the authority is unclear, stop and route the request to the privacy owner. Record the date and the source so the next reviewer can repeat the check."
        ]
      },
      {
        "heading": "List the records and the date range",
        "paragraphs": [
          "Write the specific records requested and the date range. A request for all records is broader than most authorizations allow. The coordinator should not expand the scope to be helpful. Use the approved system and the minimum data needed for the task.",
          "Mark each record as included, pending, or excluded with the reason. If a record is missing, record the search performed. The packet should show what was not found, not just what was sent. Use the approved system and the minimum data needed for the task."
        ]
      },
      {
        "heading": "Check consent and the permitted use",
        "paragraphs": [
          "Record the consent or legal basis for the release and the permitted use. If the consent limits the release to a specific purpose, state that in the packet. Do not share the records with a second party because it would be convenient. Check that the patient's preference is recorded and followed.",
          "Check the minimum necessary standard and redact what is not needed. Record the redactions and the person who approved them. The coordinator should be able to explain every exclusion. Keep the evidence with the record, not in a separate inbox."
        ]
      },
      {
        "heading": "Route the clinical question",
        "paragraphs": [
          "If the request asks for an interpretation, a summary, or a clinical opinion, route it to the clinician. The coordinator can assemble records but should not create a clinical narrative. A note that answers the question has crossed the boundary. If the source is unclear, pause and ask rather than guessing.",
          "Record the question and the clinician who received it. If the clinician provides a summary, keep it separate from the record packet and label it clearly. Check that the patient's preference is recorded and followed. Test the template on one real referral before expanding it."
        ]
      },
      {
        "heading": "Record the release and review before sending",
        "paragraphs": [
          "Record the date, the recipient, the method, and the documents released. Use a secure channel and confirm delivery. A packet sent without a delivery record cannot be closed. A note that cannot be reproduced is not yet a control.",
          "Before sending, ask a second reviewer to check the requester, the authority, the date range, and the redactions. A short checklist is more reliable than memory. After sending, file the confirmation with the packet. Name the clinical owner in the same line as the question."
        ]
      }
    ],
    "faq": [
      {
        "q": "What must be verified before releasing records?",
        "a": "The requester, the patient, the legal authority, the date range, and the permitted use."
      },
      {
        "q": "Should a coordinator summarize records for a requester?",
        "a": "No. Route requests for interpretation or clinical summary to the clinician."
      }
    ],
    "internalService": "/services/records-coordination",
    "internalSibling": "/blog/write-a-patient-handoff-checklist-for-a-move-between-clinics",
    "source": {
      "label": "HHS Office for Civil Rights: HIPAA",
      "url": "https://www.hhs.gov/hipaa/"
    }
  },
  {
    "slug": "run-a-weekly-care-coordination-stand-up-on-evidence",
    "title": "Run a weekly care coordination stand-up on evidence",
    "description": "A short weekly meeting that turns the coordination queue into decisions, owners, and dated next actions.",
    "category": "Care coordination",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/run-a-weekly-care-coordination-stand-up-on-evidence.webp",
    "sections": [
      {
        "heading": "How to approach: Run a weekly care coordination stand-up on evidence",
        "paragraphs": [
          "A weekly stand-up should answer one question: which coordination items need a decision this week, and who will make it. Everything else belongs in the written queue. If the meeting reviews every patient, it becomes a status report and the important decisions get lost. A note that cannot be reproduced is not yet a control.",
          "Choose the items before the meeting. The queue owner should select the referrals that are blocked, aging beyond a threshold, or waiting on a clinician. Send a short evidence pack in advance so the meeting starts with the facts. Update the checklist when the same question appears twice."
        ]
      },
      {
        "heading": "Prepare a short evidence pack",
        "paragraphs": [
          "For each item, include the referral source, the patient request, the open question, the owner, and the next step. Keep it to one page. A pack that takes an hour to read will not be read. A note that cannot be reproduced is not yet a control.",
          "Do not include the entire record. Link the relevant documents and summarize the rest. The purpose is a decision, not a demonstration of effort. Check that the patient's preference is recorded and followed."
        ]
      },
      {
        "heading": "Review items by next action",
        "paragraphs": [
          "Group the items by the decision they need: clinical review, scheduling, records, transport, or a patient contact. This turns a list of patients into a list of decisions. It also shows when one clinician is the bottleneck for several items. Keep the patient's words separate from the coordinator's interpretation.",
          "For each group, ask what would change the current position. If nothing would change it, the item may not need a meeting slot yet. Move it back to the queue with a future review date. Route the clinical question rather than answering it."
        ]
      },
      {
        "heading": "Limit the meeting to decisions",
        "paragraphs": [
          "Do not read updates that everyone already has in writing. Do not retell the history unless it changes the decision. Ask the decision maker for a choice, a condition, or a request for specific evidence. Use the approved system and the minimum data needed for the task.",
          "Record the answer in the queue during the meeting. If a decision cannot be made, name the missing person or evidence and set a date. Every discussed item should leave with an owner. Route the clinical question rather than answering it."
        ]
      },
      {
        "heading": "Assign owners in the room",
        "paragraphs": [
          "An action without a named owner is a suggestion. Assign each next step to one person and confirm that the person accepts it. If the owner is not in the room, the chair should confirm the assignment before the meeting ends. Name the clinical owner in the same line as the question.",
          "Keep the list of actions realistic for the week. A list of thirty actions will not be completed. Choose the few that matter most and leave the rest in the queue with their existing dates. Keep the patient's words separate from the coordinator's interpretation."
        ]
      },
      {
        "heading": "Follow up and measure movement",
        "paragraphs": [
          "Send a short written summary the same day with the decisions, owners, and dates. Check the summary against the queue before sending it. The written record and the system record should tell the same story. A short note with four fields is easier to use than a long narrative.",
          "At the end of the month, review the actions that came out of the stand-up. How many were completed by the date, and how many moved the item forward? A meeting that produces actions but no movement is not working. A note that cannot be reproduced is not yet a control."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a care coordination stand-up decide?",
        "a": "Which coordination items need a decision this week and who will make it, with a dated next action."
      },
      {
        "q": "How many items should be on the agenda?",
        "a": "Only the blocked or aging items that need a decision, with a short evidence pack sent in advance."
      }
    ],
    "internalService": "/services/care-team-administration",
    "internalSibling": "/blog/run-a-weekly-care-coordination-stand-up-on-evidence",
    "source": {
      "label": "AHRQ",
      "url": "https://www.ahrq.gov/"
    }
  }
];
