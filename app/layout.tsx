import type { Metadata } from 'next';
import Script from 'next/script';
import { Footer, Header } from '@/components/SiteChrome';
import { site } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: { default: `${site.name} | Administrative care coordination support`, template: `%s | ${site.name}` },
  description: site.heroBody,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: site.name, title: site.name, description: site.heroBody, images: [{ url: '/brand/clinical-care-coordinator-open-graph.png', width: 1200, height: 630, alt: site.name }] },
  twitter: { card: 'summary_large_image', images: ['/brand/clinical-care-coordinator-open-graph.png'] },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': `https://${site.domain}/#organization`, name: site.name, url: `https://${site.domain}`, parentOrganization: { '@type': 'Organization', name: 'Stealth Agents', url: 'https://stealthagents.com/' } },
    { '@type': 'WebSite', '@id': `https://${site.domain}/#website`, name: site.name, url: `https://${site.domain}`, publisher: { '@id': `https://${site.domain}/#organization` } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Script src="/acr-config.js" strategy="beforeInteractive" />
        <Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
