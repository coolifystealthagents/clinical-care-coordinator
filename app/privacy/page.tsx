import type { Metadata } from 'next';
import Link from 'next/link';
import { WorkflowArt } from '@/components/Visuals';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'How Clinical Care Coordinator handles website inquiries, form fields, scheduling, and basic site analytics.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return <main id="main-content">
    <section className="legal-hero legal-privacy"><div><p className="eyebrow">Privacy policy</p><h1>Plain information about website data.</h1><p>Last updated October 20, 2026</p></div><WorkflowArt variant="records" title="A record path from collection to appropriate use"/></section>
    <section className="section legal-layout"><aside><p className="eyebrow">On this page</p><nav aria-label="Privacy policy sections"><a href="#collection">Information collected</a><a href="#use">How it is used</a><a href="#sharing">Services and sharing</a><a href="#choices">Your choices</a><a href="#security">Security and retention</a><a href="#contact">Contact</a></nav></aside><article className="legal-copy">
      <p>This policy describes information handled through this public website. It does not describe a customer organization&apos;s clinical systems or establish this website as a channel for patient care.</p>
      <h2 id="collection">Information collected</h2><p>When you submit the contact form, the site collects the fields you provide. Those fields may include your name, organization email, phone details, organization or role information, referral source, service interest, budget or timing selections, and your message. The form also includes technical fields used to identify the source of the inquiry and deter automated abuse.</p><p>Do not submit patient names, diagnoses, appointment details, medical record contents, or other protected health information. This public form is intended for business and workflow inquiries.</p><p>The site loads an analytics and lead attribution script. Basic events may include page visits, referral information, campaign parameters, browser or device information, approximate network information, and form conversion events. Server logs may also record request time, path, network address, and user agent for operation and security.</p>
      <h2 id="use">How information is used</h2><p>Submitted and technical information may be used to respond to an inquiry, assess a requested staffing scope, coordinate a possible consultation, attribute outreach, operate and improve the site, investigate misuse, and maintain service security.</p>
      <h2 id="sharing">Service providers and sharing</h2><p>Information may be processed by service providers that support hosting, analytics, lead handling, communications, and scheduling. After a form is accepted, the thank you page offers an embedded OnceHub scheduling tool. Information entered into that tool is handled under the scheduling provider&apos;s applicable terms and privacy practices.</p><p>Information may also be disclosed when reasonably necessary to comply with law, protect rights and safety, investigate abuse, or support a business transaction. This policy does not promise that information is never shared.</p>
      <h2 id="choices">Your choices</h2><p>You can choose not to submit the form and can limit browser storage or scripts through browser settings. Blocking scripts may affect site functions. To ask about information associated with an inquiry, use the contact page and provide enough nonclinical detail to identify the request. Available rights may depend on your location and applicable law.</p>
      <h2 id="security">Security and retention</h2><p>Reasonable operational safeguards may be used, but no website or transmission method can be guaranteed secure. Information may be kept for as long as reasonably needed for the purposes above, recordkeeping, dispute handling, security, and legal obligations.</p>
      <h2>Children</h2><p>This business staffing website is not directed to children. Do not use it to submit information about a child or patient.</p>
      <h2 id="contact">Contact and policy changes</h2><p>No verified public privacy email is currently listed. Use the <Link href="/contact-us">Contact Us page</Link> for a privacy question, and do not include patient information. This policy may be updated as the website and its service providers change. The date above identifies the current published version.</p>
    </article></section>
  </main>;
}
