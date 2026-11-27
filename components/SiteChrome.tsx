'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { nav } from '@/lib/content';
import { site } from '@/lib/site';

export function Attribution({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`attribution${inverse ? ' inverse' : ''}`} href="https://stealthagents.com/" rel="noopener noreferrer">
      <span>Powered by</span>
      <Image src="/brand/stealth-agents-logo-black.png" alt="Stealth Agents" width={98} height={28} />
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header data-site-header="sticky" className="site-header">
        <Link className="brand" href="/" aria-label={`${site.name} home`}>
          <Image src="/logo.svg" alt="" width={42} height={42} priority />
          <span className="brand-full">{site.name}</span>
        </Link>
        <nav id="primary-menu" aria-label="Primary navigation" className={open ? 'open' : ''}>
          {nav.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
        </nav>
        <Attribution />
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-menu" onClick={() => setOpen((value) => !value)}>
          <span aria-hidden="true">{open ? 'Close' : 'Menu'}</span>
          <span className="sr-only">Toggle navigation</span>
        </button>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer data-site-footer="true">
      <div>
        <Link className="brand inverse" href="/">
          <Image src="/logo.svg" alt="" width={44} height={44} />
          <span>{site.name}</span>
        </Link>
        <p>Administrative support for clearer care team handoffs.</p>
        <Attribution inverse />
      </div>
      <nav data-footer-menu="true" className="footer-links" aria-label="Footer navigation">
        <Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/contact-us">Contact Us</Link>
        <Link href="/about">About</Link><Link href="/blog">Blog</Link><Link href="/research">Research</Link>
        <Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link>
      </nav>
      <section className="site-parent-company" aria-label="Powered by StealthAgents"><a className="site-parent-logo" href="https://stealthagents.com/" aria-label="Visit StealthAgents"><img src="/stealthagents-parent-logo.png" alt="StealthAgents" width="158" height="53" loading="lazy" /></a><div><h2>Powered by StealthAgents</h2><p>StealthAgents recruits and supports the remote professionals behind our services, from matching and onboarding to ongoing team support.</p><a className="site-parent-link" href="https://stealthagents.com/">Explore StealthAgents ↗</a></div></section><p className="copyright">© {new Date().getFullYear()} {site.name}</p>
    </footer>
  );
}
