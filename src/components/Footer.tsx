import type { ReactNode } from "react";
import { Brand } from "@/components/Header";
import { services } from "@/lib/content";

const companyLinks = [
  { href: "#process", label: "How we work" },
  { href: "#work", label: "Case studies" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

const resourceLinks = [
  { href: "#services", label: "Capabilities" },
  { href: "#contact", label: "Request a concept" },
  { href: "mailto:hello@codevo.example", label: "Support" },
] as const;

const legalLinks = [
  { href: "#", label: "Privacy" },
  { href: "#", label: "Terms" },
  { href: "#", label: "Cookies" },
] as const;

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.52V24H.24V8.25zM8.34 8.25h4.33v2.14h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.93V24h-4.52v-7.75c0-1.85-.03-4.22-2.57-4.22-2.57 0-2.96 2.01-2.96 4.09V24H8.34V8.25z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.23v3.3c0 .32.22.7.82.58A12 12 0 0 0 12 .3z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.5l-5.1-6.66L5.8 22H2.7l7.25-8.28L.8 2h6.66l4.6 6.1L18.9 2zm-1.14 18h1.8L6.36 3.9H4.42L17.76 20z" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://www.linkedin.com", label: "LinkedIn", Icon: LinkedInIcon },
  { href: "https://github.com", label: "GitHub", Icon: GitHubIcon },
  { href: "https://x.com", label: "X", Icon: XIcon },
] as const;

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="m-0 mb-4 font-display text-[11px] font-semibold tracking-[0.16em] text-[color:var(--band-eyebrow)] uppercase">
      {children}
    </h3>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm text-[color:var(--band-soft)] no-underline transition-colors hover:text-white"
    >
      {children}
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="band-dark glow-none border-t border-[color:var(--band-line)] bg-gray-900 [--band-bg:var(--color-gray-900)]">
      <div className="mx-auto w-[min(calc(100%-48px),var(--container-site))] max-md:w-[min(calc(100%-30px),var(--container-site))]">
        <div className="grid grid-cols-[1.4fr_repeat(3,0.85fr)] gap-12 pt-16 pb-0 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-10">
          <div className="max-w-[320px]">
            <Brand />
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--band-muted)]">
              Premium websites, landing pages and digital products engineered
              for growth — built by a focused product studio.
            </p>
            <div className="mt-6 grid gap-2 text-sm">
              <a
                href="mailto:hello@codevo.example"
                className="text-[color:var(--band-soft)] no-underline hover:text-white"
              >
                hello@codevo.example
              </a>
              <span className="text-[color:var(--band-muted)]">
                Remote-first · EU & Asia
              </span>
            </div>
            <div className="mt-7 flex gap-2.5">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-[color:var(--band-card-border)] bg-[var(--band-ghost)] text-[color:var(--band-soft)] no-underline transition-colors hover:border-white/25 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <FooterHeading>Services</FooterHeading>
            <ul className="m-0 grid list-none gap-3 p-0">
              {services.map((service) => (
                <li key={service.title}>
                  <FooterLink href="#services">{service.title}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Company</FooterHeading>
            <ul className="m-0 grid list-none gap-3 p-0">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Resources</FooterHeading>
            <ul className="m-0 grid list-none gap-3 p-0">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative -mt-2 overflow-hidden pt-0 select-none">
        <p
          aria-hidden
          className="pointer-events-none relative z-0 -mb-[0.32em] text-center font-display text-[clamp(7rem,28vw,22rem)] leading-none font-bold tracking-[-0.07em] text-[color-mix(in_srgb,var(--band-bg)_90%,white)]"
        >
          Codevo
        </p>

        <div className="relative z-20 border-t border-[color:var(--band-line)] bg-[var(--band-bg)]">
          <div className="mx-auto flex w-[min(calc(100%-48px),var(--container-site))] items-center justify-between gap-4 py-5 text-xs text-[color:var(--band-muted)] max-md:w-[min(calc(100%-30px),var(--container-site))] max-md:flex-col max-md:items-start">
            <span>© {year} Codevo. All rights reserved.</span>
            <nav className="flex flex-wrap gap-5" aria-label="Legal">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[color:var(--band-muted)] no-underline hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
