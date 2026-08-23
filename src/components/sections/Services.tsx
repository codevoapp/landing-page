import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section
      id="services"
      className="band-dark glow-mint relative py-[125px] max-md:py-[90px]"
    >
      <Container>
        <Reveal className="mb-[60px]">
          <Eyebrow>03 — Services</Eyebrow>
          <SectionHeading>
            Everything you need
            <br />
            to <em className="gradient-text">grow online.</em>
          </SectionHeading>
        </Reveal>

        <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2">
          {services.map((service) => (
            <Reveal
              key={service.n}
              as="article"
              className="min-h-[270px] rounded-2xl border border-[color:var(--band-card-border)] bg-[var(--band-card)] p-[34px] transition-[border-color,box-shadow] duration-300 ease-out hover:border-[#9c58ff88] hover:shadow-[0_0_60px_#7b3bff22]"
            >
              <span className="text-[11px] text-[color:var(--band-muted)]">
                {service.n}
              </span>
              <h3 className="mt-[45px] mb-3 font-display text-[23px] font-semibold">
                {service.title}
              </h3>
              <p className="text-sm text-[color:var(--band-muted)]">
                {service.body}
              </p>
              <a
                href="#contact"
                className="mt-[35px] block text-xs text-[color:var(--band-ink)] no-underline"
              >
                Learn more ↗
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
