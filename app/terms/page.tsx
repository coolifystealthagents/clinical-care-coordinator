import type { Metadata } from 'next';
import Link from 'next/link';
import { WorkflowArt } from '@/components/Visuals';

export const metadata: Metadata = {
  title: 'Website terms of use',
  description: 'Terms for using the Clinical Care Coordinator public website, information, inquiry form, and links.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return <main id="main-content">
    <section className="legal-hero legal-terms"><div><p className="eyebrow">Website terms</p><h1>Terms for this public information site.</h1><p>Last updated October 20, 2026</p></div><WorkflowArt variant="message" title="Clear boundaries for information, inquiries, and next steps"/></section>
    <section className="section legal-layout"><aside><p className="eyebrow">On this page</p><nav aria-label="Terms sections"><a href="#scope">Scope</a><a href="#not-care">Not medical care</a><a href="#inquiries">Inquiries</a><a href="#acceptable">Acceptable use</a><a href="#content">Content and links</a><a href="#disclaimers">Disclaimers</a><a href="#contact">Questions</a></nav></aside><article className="legal-copy">
      <p>These terms apply to use of the Clinical Care Coordinator public website. By using the site, you agree to use it lawfully and consistently with these terms. If you do not agree, do not use the site.</p>
      <h2 id="scope">Website and service scope</h2><p>The site provides general information about remote administrative staffing and workflow design for care organizations. Descriptions are examples of possible role boundaries, not a promise that a particular person, scope, schedule, result, or service is available.</p><p>Any staffing relationship, fees, responsibilities, privacy terms, service level, or deliverable would require separate review and agreement. Website content alone does not create a customer, employment, agency, fiduciary, professional, or clinical relationship.</p>
      <h2 id="not-care">Not medical or emergency care</h2><p>This site does not provide medical advice, diagnosis, triage, treatment, emergency response, legal advice, or regulatory advice. It is not a patient portal. Do not use it for symptoms, urgent needs, or emergencies. Contact appropriate local emergency or licensed care resources when needed.</p>
      <h2 id="inquiries">Forms and scheduling</h2><p>Submit accurate business contact and workflow information. Do not submit protected health information, patient records, confidential clinical details, unlawful content, or material you are not authorized to share. Form acceptance only means the technical request was accepted. It does not guarantee a response, appointment, candidate, placement, or service.</p><p>An optional third party scheduling tool appears after an accepted inquiry. A time is not represented as confirmed by this site unless the scheduling provider presents confirmation through its own process.</p>
      <h2 id="acceptable">Acceptable use</h2><p>Do not interfere with site operation, probe or bypass security, introduce malicious code, scrape in a way that burdens the service, impersonate another person, submit deceptive information, or use the site in violation of law or another person&apos;s rights.</p>
      <h2 id="content">Content, brands, and external links</h2><p>Website copy, visual design, graphics, and branding may be protected by intellectual property law. You may use the site for ordinary evaluation of the described services, but may not falsely present its content or marks as your own.</p><p>Links and embedded services may lead to third party sites. Their content, availability, and practices are controlled by their operators. A link does not by itself constitute an endorsement of every statement or service on the destination.</p>
      <h2 id="disclaimers">Availability and limitation</h2><p>The site is provided for general informational use and may be changed, interrupted, or contain errors. To the extent permitted by applicable law, no warranty is made that the site will always be available, complete, secure, or suitable for a particular purpose.</p><p>To the extent permitted by applicable law, the site operators and service providers are not responsible for indirect or consequential loss arising from use of, or inability to use, this public site. Nothing here excludes responsibility that cannot lawfully be excluded.</p>
      <h2>Changes</h2><p>These terms may be revised as the website or its services change. The date above identifies the current published version. Continued use after publication of a revision is subject to the revised terms.</p>
      <h2 id="contact">Questions</h2><p>No verified public legal email is currently listed. Use the <Link href="/contact-us">Contact Us page</Link> for a question about these terms. Do not include patient information.</p>
    </article></section>
  </main>;
}
