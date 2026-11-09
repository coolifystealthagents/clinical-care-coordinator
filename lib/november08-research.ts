import type { ResearchPost } from './types';

export const november08ResearchPosts: readonly ResearchPost[] = [
  {
    "slug": "how-often-do-care-coordination-messages-reach-a-named-owner",
    "title": "How often do care coordination messages reach a named owner?",
    "summary": "A proposed protocol for measuring whether coordination messages are routed to a named person rather than a general queue.",
    "cluster": "Care coordination",
    "publishedAt": "2026-11-08",
    "finding": "The study would test whether a coordination message has a named owner or disappears into a shared inbox.",
    "thumbnail": "/thumbnails/november-08/how-often-do-care-coordination-messages-reach-a-named-owner.webp",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This is a proposed research protocol, not a report of completed findings. It asks how often a care coordination message reaches a named owner within the stated response window. The result would describe the routing record, not the quality of the clinical decision. A short note with four fields is easier to use than a long narrative.",
          "The protocol does not measure whether the patient received care. It measures whether the message reached a person who could act. The sponsor should name the routing decision the result could inform. A note that cannot be reproduced is not yet a control."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Define the population as all care coordination messages received during a stated window. The unit is one message, with the sender, the subject, the assigned owner, and the response time recorded. Messages that were duplicates should be linked to the original. Write the boundary in the place where the work is assigned.",
          "Freeze the inclusion rule before reviewing outcomes. A message that was sent to a general inbox and later forwarded still counts as a message, but the owner is recorded at the point of first assignment. Name the clinical owner in the same line as the question. Route the clinical question rather than answering it."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define reach as the message being assigned to a named person in the system of record. Define response as a substantive reply or action by that person. Define window as the time allowed by the clinic's policy for that message type. Test the template on one real referral before expanding it.",
          "Report the reach rate and the response rate separately. A message can reach a named owner and still receive no response. The combination shows whether routing is the problem or capacity is. Keep the patient's words separate from the coordinator's interpretation."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Link each message to the system record, the assignment, and the response. A chat message that says someone will look into it is not evidence of a named owner unless the assignment is recorded. Keep the original message and the routing note. A note that cannot be reproduced is not yet a control.",
          "Where the owner changed during the window, record both owners and the handoff time. The first assignment is part of the evidence about routing quality. Use the approved system and the minimum data needed for the task. A short note with four fields is easier to use than a long narrative."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Use a census of the window if the volume is manageable. If sampling is necessary, stratify by message type and channel. Select the sample before reviewing response times and keep a log of replacements. Route the clinical question rather than answering it.",
          "Pilot the classification on a few messages and compare the reviewers' judgments. Clarify what counts as a substantive response. Record the rule and apply it consistently. Review the first few notes together with the clinical owner."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the reach and response rates by message type and by clinic. Show the messages that never received a named owner. A high reach rate with a low response rate may point to capacity rather than routing. Check that the patient's preference is recorded and followed.",
          "Describe the results as a record of routing, not a judgment about individual coordinators. Name the possible causes and the records needed to test them. Set the next review date before the current one ends. Check that the patient's preference is recorded and followed."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "The system of record may not capture messages that were handled verbally. The owner field may be filled in after the fact. The study should state which channels were included and which were not. Review the first few notes together with the clinical owner.",
          "The response window may vary by message type, which can make a single rate misleading. Report the window used and avoid comparing messages with different service expectations. Set the next review date before the current one ends. Name the clinical owner in the same line as the question."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Repeat the review after a routing change or at the same interval each quarter. Compare the same message types and the same window. A higher reach rate is useful only if the response rate holds. Keep the patient's words separate from the coordinator's interpretation.",
          "Assign the follow-up to the coordination lead and set a date. The protocol should produce a specific decision about the intake or assignment rule. If the source is unclear, pause and ask rather than guessing. Keep the patient's words separate from the coordinator's interpretation."
        ]
      }
    ],
    "sources": [
      {
        "label": "AHRQ",
        "url": "https://www.ahrq.gov/"
      },
      {
        "label": "HHS Office for Civil Rights: HIPAA",
        "url": "https://www.hhs.gov/hipaa/"
      },
      {
        "label": "SAMHSA",
        "url": "https://www.samhsa.gov/"
      }
    ]
  },
  {
    "slug": "can-a-clinical-handoff-be-reproduced-from-its-sources",
    "title": "Can a clinical handoff be reproduced from its sources?",
    "summary": "A proposed protocol for testing whether a handoff record lets a new coordinator reconstruct the patient's next step.",
    "cluster": "Care coordination",
    "publishedAt": "2026-11-08",
    "finding": "The study would test whether a handoff is a usable record or a summary that depends on the sender's memory.",
    "thumbnail": "/thumbnails/november-08/can-a-clinical-handoff-be-reproduced-from-its-sources.webp",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This is a proposed research protocol, not a report of completed findings. It asks whether a clinical handoff can be reproduced from the records attached to it. The result would describe the handoff's usefulness to the next coordinator. Use the approved system and the minimum data needed for the task.",
          "The protocol does not test the clinical correctness of the plan. It tests whether the record contains the facts needed to continue the coordination. The sponsor should name the handoff decision the result could inform. Test the template on one real referral before expanding it."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Define the population as all handoffs completed during a stated window. The unit is one handoff, with the patient, the sending and receiving teams, the records attached, and the confirmation recorded. Handoffs without a written record should be counted separately. Test the template on one real referral before expanding it.",
          "Link the handoff to the patient's next appointment or action so the same handoff is not counted twice across teams. The unit is the handoff event, not the patient. Test the template on one real referral before expanding it. If the source is unclear, pause and ask rather than guessing."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define reproducibility as the ability of a new coordinator to state the patient's next step and the owner using only the handoff record. Define completeness as the presence of the records required by the checklist. Define accuracy as the match between the reconstructed next step and the actual next step. Review the first few notes together with the clinical owner.",
          "Report reproducibility and completeness separately. A complete packet can still be hard to interpret. The combination is what makes the handoff usable. Use the approved system and the minimum data needed for the task."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Use a reviewer who did not create the handoff. Give the reviewer the packet and a blank template, then compare the result with the actual next step. Record the reviewer's confidence and the points where the packet was ambiguous. Route the clinical question rather than answering it.",
          "Keep the original handoff and the reconstruction side by side. A discussion with the sender can explain differences, but it should not be used to improve the reconstruction before it is scored. Check that the patient's preference is recorded and followed. If the source is unclear, pause and ask rather than guessing."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Use all handoffs in the window if the volume is manageable. If sampling is necessary, stratify by sending team and patient type. Select the sample before reviewing reproducibility and keep a log of replacements. Keep the patient's words separate from the coordinator's interpretation.",
          "Pilot the reconstruction on a few handoffs and compare two reviewers. Clarify how a missing document is scored. Record the rules and apply them consistently. Check that the patient's preference is recorded and followed."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report reproducibility and completeness by sending team and by handoff type. Show the handoffs that could not be reconstructed at all. A high completeness rate with low reproducibility may mean the packet lacks a clear next step. Update the checklist when the same question appears twice.",
          "Present the results as a description of the records, not a judgment about the senders. Name the gaps that the checklist should address. Write the boundary in the place where the work is assigned. If the source is unclear, pause and ask rather than guessing."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "The reviewer's familiarity with the patient can inflate reproducibility. Use a reviewer who is new to the case where possible. Record the reviewer's background. A short note with four fields is easier to use than a long narrative.",
          "The actual next step may have changed after the handoff for reasons unrelated to the record. State how the comparison was made and whether later changes were considered. Keep the evidence with the record, not in a separate inbox. A note that cannot be reproduced is not yet a control."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Repeat the review after a checklist change or a new receiving team. Compare the same handoff types and the same reconstruction method. A second review can test whether the change improved usability. Update the checklist when the same question appears twice.",
          "Assign the follow-up to the coordination lead and set a date. The protocol should produce a specific decision about the handoff template or the confirmation step. Set the next review date before the current one ends. A short note with four fields is easier to use than a long narrative."
        ]
      }
    ],
    "sources": [
      {
        "label": "HHS Office for Civil Rights: HIPAA",
        "url": "https://www.hhs.gov/hipaa/"
      },
      {
        "label": "AHRQ",
        "url": "https://www.ahrq.gov/"
      },
      {
        "label": "CMS",
        "url": "https://www.cms.gov/"
      }
    ]
  },
  {
    "slug": "how-complete-is-the-referral-record-at-triage",
    "title": "How complete is the referral record at triage?",
    "summary": "A proposed protocol for measuring which referral fields are present before a triage decision and which are reconstructed later.",
    "cluster": "Care coordination",
    "publishedAt": "2026-11-08",
    "finding": "The study would test whether the referral record supports a triage decision or leaves the coordinator to fill the gaps.",
    "thumbnail": "/thumbnails/november-08/how-complete-is-the-referral-record-at-triage.webp",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This is a proposed research protocol, not a report of completed findings. It asks how often the referral record contains the fields needed for a triage decision. The result would describe the record, not the clinical appropriateness of the referral. A short note with four fields is easier to use than a long narrative.",
          "The protocol does not measure whether the patient was seen. It measures whether the information needed to route the referral was present. The sponsor should name the triage decision the result could inform. Set the next review date before the current one ends."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Define the population as all referrals received during a stated window. The unit is one referral, with the source, the requested service, the patient contact, and the clinical question recorded. Referrals that were withdrawn should be counted separately. Name the clinical owner in the same line as the question.",
          "Link the referral to the triage note so the same referral is not counted twice across systems. The unit is the referral, not the message or the patient. If the source is unclear, pause and ask rather than guessing. Name the clinical owner in the same line as the question."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define completeness as the presence of the fields required by the triage checklist. Define usability as whether a triage reviewer can make the routing decision without requesting more information. Measure both separately. Update the checklist when the same question appears twice.",
          "Report completeness by field and by referral source. A high overall rate can hide a missing clinical question or a missing contact. The field-level view shows where the gap is. Check that the patient's preference is recorded and followed."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Link each field to the referral document or the system record. A field that was added from a phone call should record the caller and the date. A field that was inferred should be marked as inferred. Name the clinical owner in the same line as the question.",
          "Keep the original referral and the triage note. A later correction should not erase what the reviewer saw at the time. The study should distinguish the record at triage from the record after follow-up. Use the approved system and the minimum data needed for the task."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Use a census of the window if the volume is manageable. If sampling is necessary, stratify by referral source and service type. Select the sample before reviewing usability and keep a log of replacements. Test the template on one real referral before expanding it.",
          "Pilot the classification on a few referrals and compare the reviewers. Clarify what counts as a complete clinical question. Record the rule and apply it consistently. Name the clinical owner in the same line as the question."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report completeness and usability by referral source and by service. Show the referrals that required a follow-up call before triage. That follow-up rate is a practical measure of the record's cost. Route the clinical question rather than answering it.",
          "Present the results as a description of the record, not a judgment about the referring organization. Name the missing fields and the process change that would supply them. Keep the evidence with the record, not in a separate inbox. A note that cannot be reproduced is not yet a control."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "The referral record may be complete but hard to read, which can lower usability without lowering the field count. The reviewer's familiarity with the service can also affect the judgment. State both limitations. Test the template on one real referral before expanding it.",
          "The study may miss referrals that were handled outside the formal system. Use a second source to estimate the size of that gap if possible. Review the first few notes together with the clinical owner. Use the approved system and the minimum data needed for the task."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Repeat the review after a referral form change or a new source. Compare the same fields and the same usability definition. A second review can test whether the form change reduced follow-up calls. Name the clinical owner in the same line as the question.",
          "Assign the follow-up to the coordination lead and set a date. The protocol should produce a specific decision about the required fields and the intake channel. Update the checklist when the same question appears twice. Use the approved system and the minimum data needed for the task."
        ]
      }
    ],
    "sources": [
      {
        "label": "CMS",
        "url": "https://www.cms.gov/"
      },
      {
        "label": "AHRQ",
        "url": "https://www.ahrq.gov/"
      },
      {
        "label": "HRSA",
        "url": "https://www.hrsa.gov/"
      }
    ]
  },
  {
    "slug": "what-share-of-community-resource-entries-match-their-source",
    "title": "What share of community resource entries match their source?",
    "summary": "A proposed protocol for checking whether a community resource list matches the official source at the time of review.",
    "cluster": "Care coordination",
    "publishedAt": "2026-11-08",
    "finding": "The study would test whether the resource list is a current, source-backed record or a set of names that have drifted.",
    "thumbnail": "/thumbnails/november-08/what-share-of-community-resource-entries-match-their-source.webp",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This is a proposed research protocol, not a report of completed findings. It asks what share of community resource entries match their official source at the time of review. The result would describe the list's reliability, not the quality of the organization. Route the clinical question rather than answering it.",
          "The protocol does not measure whether a patient was helped. It measures whether the entry a coordinator would use is accurate. The sponsor should name the list-maintenance decision the result could inform. Check that the patient's preference is recorded and followed."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Define the population as all active entries on the resource list on a stated date. The unit is one entry, with the organization, the source, the last verification date, and the fields displayed. Entries marked stale should be counted separately. Keep the confirmation and the release record together.",
          "Link each entry to its source page or phone record. A duplicate entry for the same organization should be linked and counted once in the organization-level view. If the source is unclear, pause and ask rather than guessing. Test the template on one real referral before expanding it."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define a match as the displayed name, phone, hours, and eligibility agreeing with the source. Define currency as the last verification date falling within the required review window. Measure both separately. Set the next review date before the current one ends.",
          "Report the match rate by field and by organization type. A high phone match with a low hours match can still send a patient at the wrong time. The field-level view shows where the list is weak. Keep the patient's words separate from the coordinator's interpretation."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Record the source used and the date of the check for every entry. A phone number that reaches the right organization is evidence, but the hours still need a source. Keep a screenshot or note when the source is a web page. Update the checklist when the same question appears twice.",
          "Do not count a coordinator's memory as a source. If the entry was verified by a conversation, record the person's role and the date. The evidence should let a second reviewer repeat the check. A note that cannot be reproduced is not yet a control."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Use a census of the active list if it is manageable. If sampling is necessary, stratify by organization type and by last verification date. Select the sample before reviewing matches and keep a log of replacements. A note that cannot be reproduced is not yet a control.",
          "Pilot the check on a few entries and compare two reviewers. Clarify how seasonal hours are scored. Record the rules and apply them consistently. A note that cannot be reproduced is not yet a control."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the match and currency rates by field and by organization type. Show the entries that are stale but still active. A stale entry is a finding about the maintenance process, not just a data error. Test the template on one real referral before expanding it.",
          "Present the results as a description of the list at a point in time. Name the fields that fail most often and the review interval that would catch them. Name the clinical owner in the same line as the question. Keep the evidence with the record, not in a separate inbox."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "The official source may itself be out of date, and the study may not be able to detect that. Phone verification may reach a person who gives information not published online. Record the source type for each check. Keep the confirmation and the release record together.",
          "The list may change during the review. Freeze the list at the start and record any changes. The reader should be able to see the population that was checked. Use the approved system and the minimum data needed for the task."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Repeat the review after a list cleanup or at the same interval each quarter. Compare the same fields and the same review window. A second review can test whether the cleanup held. A note that cannot be reproduced is not yet a control.",
          "Assign the follow-up to the list owner and set a date. The protocol should produce a specific decision about the review interval and the fields that require a source. Keep the confirmation and the release record together. Keep the patient's words separate from the coordinator's interpretation."
        ]
      }
    ],
    "sources": [
      {
        "label": "SAMHSA",
        "url": "https://www.samhsa.gov/"
      },
      {
        "label": "HRSA",
        "url": "https://www.hrsa.gov/"
      },
      {
        "label": "CDC",
        "url": "https://www.cdc.gov/"
      }
    ]
  },
  {
    "slug": "how-consistent-is-callback-documentation-across-coordinators",
    "title": "How consistent is callback documentation across coordinators?",
    "summary": "A proposed protocol for comparing how different coordinators record callback attempts and outcomes.",
    "cluster": "Care coordination",
    "publishedAt": "2026-11-08",
    "finding": "The study would test whether callback notes use the same facts or leave the next coordinator to interpret each style.",
    "thumbnail": "/thumbnails/november-08/how-consistent-is-callback-documentation-across-coordinators.webp",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This is a proposed research protocol, not a report of completed findings. It asks how consistently coordinators document callback attempts and outcomes. The result would describe the notes, not the coordinators' effort. Check that the patient's preference is recorded and followed.",
          "The protocol does not measure whether the patient was reached. It measures whether the note lets the next person tell what happened. The sponsor should name the documentation decision the result could inform. Test the template on one real referral before expanding it."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Define the population as callback notes created during a stated window. The unit is one note, with the coordinator, the patient, the attempt time, the outcome, and the next action recorded. Notes that cover several attempts should be split or linked. Review the first few notes together with the clinical owner.",
          "Link the note to the callback task so the same attempt is not counted twice. The unit is the attempt, not the patient or the coordinator. Record the date and the source so the next reviewer can repeat the check. Keep the evidence with the record, not in a separate inbox."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define completeness as the presence of the time, channel, outcome, and next action. Define consistency as the agreement between two reviewers about what the note says happened. Measure both separately. Write the boundary in the place where the work is assigned.",
          "Report completeness and consistency by coordinator group and by outcome type. A high completeness rate with low consistency may mean the fields are present but the wording is ambiguous. Update the checklist when the same question appears twice. Review the first few notes together with the clinical owner."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Use the actual notes and the task records. Do not rely on a summary created for the study. If a note refers to a call that is not in the phone system, record that gap. Keep the confirmation and the release record together.",
          "Have two reviewers read the same notes and write what happened. Compare their answers before discussing. The disagreement rate is the evidence of inconsistency. Review the first few notes together with the clinical owner."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Use a census of the window if the volume is manageable. If sampling is necessary, stratify by coordinator and outcome. Select the sample before reviewing consistency and keep a log of replacements. Use the approved system and the minimum data needed for the task.",
          "Pilot the review on a few notes and refine the definition of outcome. Clarify whether a voicemail counts as an attempt and how a wrong number is recorded. Apply the rule consistently. Test the template on one real referral before expanding it."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report completeness and consistency by outcome and by coordinator group. Show the notes that two reviewers read differently. A pattern in the disagreements can point to a missing field or a vague template. Update the checklist when the same question appears twice.",
          "Present the results as a description of the documentation, not a performance ranking. The useful output is a template change, not a score for each person. Record the date and the source so the next reviewer can repeat the check. Test the template on one real referral before expanding it."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "Reviewers may share assumptions about the clinic's conventions, which can inflate consistency. Use a reviewer from outside the team where possible. Record the reviewers' backgrounds. Keep the patient's words separate from the coordinator's interpretation.",
          "The notes may be written after the fact, which can change what is recorded. The study should state when the notes were created and whether they were contemporaneous. Keep the patient's words separate from the coordinator's interpretation. Use the approved system and the minimum data needed for the task."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Repeat the review after a template change or a training session. Compare the same outcome types and the same consistency method. A second review can test whether the change reduced disagreement. A note that cannot be reproduced is not yet a control.",
          "Assign the follow-up to the coordination lead and set a date. The protocol should produce a specific decision about the required fields and the wording of the outcome codes. Name the clinical owner in the same line as the question. Update the checklist when the same question appears twice."
        ]
      }
    ],
    "sources": [
      {
        "label": "AHRQ",
        "url": "https://www.ahrq.gov/"
      },
      {
        "label": "HHS Office for Civil Rights: HIPAA",
        "url": "https://www.hhs.gov/hipaa/"
      },
      {
        "label": "CMS",
        "url": "https://www.cms.gov/"
      }
    ]
  },
  {
    "slug": "how-much-of-a-care-gap-outcome-can-be-reconstructed-from-the-record",
    "title": "How much of a care gap outcome can be reconstructed from the record?",
    "summary": "A proposed protocol for testing whether a closed care gap has evidence that can be reconstructed later.",
    "cluster": "Care coordination",
    "publishedAt": "2026-11-08",
    "finding": "The study would test whether a closed outreach row records the outcome or only the fact that someone closed it.",
    "thumbnail": "/thumbnails/november-08/how-much-of-a-care-gap-outcome-can-be-reconstructed-from-the-record.webp",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This is a proposed research protocol, not a report of completed findings. It asks how much of a care gap outcome can be reconstructed from the outreach record. The result would describe the record's completeness, not the clinical outcome. If the source is unclear, pause and ask rather than guessing.",
          "The protocol does not measure whether the patient's health improved. It measures whether the coordination team can show what happened. The sponsor should name the closure decision the result could inform. Check that the patient's preference is recorded and followed."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Define the population as care gap outreach rows closed during a stated window. The unit is one row, with the gap, the patient, the attempts, the outcome, and the evidence recorded. Rows closed without evidence should be counted separately. A short note with four fields is easier to use than a long narrative.",
          "Link the row to the appointment or screening record that supports the outcome. A row that says completed without a source is not evidence of completion. Update the checklist when the same question appears twice. A short note with four fields is easier to use than a long narrative."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define reconstruction as the ability of a reviewer to state the outcome and the evidence using only the row and its links. Define completeness as the presence of the required fields. Measure both separately. Route the clinical question rather than answering it.",
          "Report reconstruction and completeness by gap type and by closure code. A high completeness rate with low reconstruction may mean the codes are too broad. Keep the patient's words separate from the coordinator's interpretation. Route the clinical question rather than answering it."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Link each closure to the source that supports it, such as the appointment record, the screening result, or the patient's documented decline. A note that says patient declined is not enough without the date and the channel. Test the template on one real referral before expanding it. A note that cannot be reproduced is not yet a control.",
          "Keep the original row and the later correction. A closed row that was reopened should show both states. The study should distinguish the closure record from the follow-up record. If the source is unclear, pause and ask rather than guessing."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Use a census of the window if the volume is manageable. If sampling is necessary, stratify by gap type and closure code. Select the sample before reviewing reconstruction and keep a log of replacements. Keep the confirmation and the release record together.",
          "Pilot the reconstruction on a few rows and compare two reviewers. Clarify what counts as evidence of a decline. Record the rules and apply them consistently. Write the boundary in the place where the work is assigned."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report reconstruction and completeness by gap type and by closure code. Show the rows that could not be reconstructed. A large share of unsupported closures is a finding about the process, not just the data. Update the checklist when the same question appears twice.",
          "Present the results as a description of the record, not a judgment about the patient or the coordinator. Name the evidence that should be required before a row can close. Use the approved system and the minimum data needed for the task. Name the clinical owner in the same line as the question."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "The row may be reconstructed from a source that was added after closure. The study should record when the evidence was attached. A late attachment is weaker than a contemporaneous one. Route the clinical question rather than answering it.",
          "The patient's outcome may be outside the record, such as care received elsewhere. State the limits of the source and avoid treating a missing record as a failure to receive care. Write the boundary in the place where the work is assigned. Route the clinical question rather than answering it."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Repeat the review after a closure-code change or a new outreach process. Compare the same gap types and the same evidence standard. A second review can test whether the change improved reconstruction. A note that cannot be reproduced is not yet a control.",
          "Assign the follow-up to the outreach owner and set a date. The protocol should produce a specific decision about the evidence required at closure. Test the template on one real referral before expanding it. Route the clinical question rather than answering it."
        ]
      }
    ],
    "sources": [
      {
        "label": "CMS",
        "url": "https://www.cms.gov/"
      },
      {
        "label": "AHRQ",
        "url": "https://www.ahrq.gov/"
      },
      {
        "label": "HHS Office for Civil Rights: HIPAA",
        "url": "https://www.hhs.gov/hipaa/"
      }
    ]
  },
  {
    "slug": "how-often-are-patient-questions-answered-outside-the-clinical-record",
    "title": "How often are patient questions answered outside the clinical record?",
    "summary": "A proposed protocol for measuring clinical questions that are answered in messages rather than routed to the clinical owner.",
    "cluster": "Care coordination",
    "publishedAt": "2026-11-08",
    "finding": "The study would test whether patient questions stay in the coordination record or move into informal channels where the answer cannot be reviewed.",
    "thumbnail": "/thumbnails/november-08/how-often-are-patient-questions-answered-outside-the-clinical-record.webp",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This is a proposed research protocol, not a report of completed findings. It asks how often a patient's clinical question is answered outside the clinical record. The result would describe the routing practice, not the correctness of the answer. Write the boundary in the place where the work is assigned.",
          "The protocol does not measure patient satisfaction. It measures whether the question reached the clinician and whether the answer is documented. The sponsor should name the routing decision the result could inform. Record the date and the source so the next reviewer can repeat the check."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Define the population as patient questions received through coordination channels during a stated window. The unit is one question, with the channel, the subject, the responder, and the documentation recorded. Questions that were never answered should remain visible. Keep the evidence with the record, not in a separate inbox.",
          "Link the question to the patient and to the clinical record where one exists. A question that appears in several messages should be linked to one unit. Set the next review date before the current one ends. Keep the evidence with the record, not in a separate inbox."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define a clinical question as a request for an assessment, a diagnosis, treatment advice, or a judgment about safety. Define a documented answer as a response recorded in the clinical record by an authorized person. Measure the share of questions that meet both conditions. Write the boundary in the place where the work is assigned.",
          "Report the routing rate and the documentation rate separately. A question can be routed to a clinician but answered in a message that is not part of the record. The combination shows where the gap is. Name the clinical owner in the same line as the question."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Use the message record and the clinical record. A verbal answer that is not documented is a finding, not a completed answer. Record the responder's role and the date. Write the boundary in the place where the work is assigned.",
          "Keep the original question and the response. If the answer was given in a phone call, record the call and the person who received it. Do not reconstruct the answer from memory. Keep the evidence with the record, not in a separate inbox."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Use a census of the window if the volume is manageable. If sampling is necessary, stratify by channel and question type. Select the sample before reviewing documentation and keep a log of replacements. Check that the patient's preference is recorded and followed.",
          "Pilot the classification on a few questions and compare the reviewers. Clarify what counts as clinical advice. Record the rule and apply it consistently. Route the clinical question rather than answering it."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the routing and documentation rates by channel and question type. Show the questions that were answered outside the record. A high routing rate with a low documentation rate may point to a workflow gap rather than a knowledge gap. Name the clinical owner in the same line as the question.",
          "Present the results as a description of the routing practice, not a judgment about individual coordinators. Name the channels and the handoff that would keep the answer in the record. Set the next review date before the current one ends. Keep the evidence with the record, not in a separate inbox."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "Some clinical questions may be answered in a secure portal that the study cannot access. State which systems were included. A question answered in an excluded system may look undocumented. Record the date and the source so the next reviewer can repeat the check.",
          "The classification of a clinical question can be subjective. Use two reviewers and report the disagreement rate. The rule should be clear enough for a new reviewer to apply. Set the next review date before the current one ends."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Repeat the review after a channel change or a new triage policy. Compare the same question types and the same documentation standard. A second review can test whether the routing change worked. Keep the evidence with the record, not in a separate inbox.",
          "Assign the follow-up to the clinical operations lead and set a date. The protocol should produce a specific decision about which channels may answer a clinical question. Name the clinical owner in the same line as the question. Set the next review date before the current one ends."
        ]
      }
    ],
    "sources": [
      {
        "label": "HHS Office for Civil Rights: HIPAA",
        "url": "https://www.hhs.gov/hipaa/"
      },
      {
        "label": "CMS",
        "url": "https://www.cms.gov/"
      },
      {
        "label": "AHRQ",
        "url": "https://www.ahrq.gov/"
      }
    ]
  }
];
