import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="band-light band-curve-pull relative pb-[125px] max-md:pb-[90px]">
      <Container>
        <Reveal className="mb-[60px]">
          <Eyebrow>05 — Client voices</Eyebrow>
          <SectionHeading>
            They came for a website.
            <br />
            <em className="gradient-text">They stayed for the results.</em>
          </SectionHeading>
        </Reveal>

        <div className="grid grid-cols-3 gap-[18px] max-md:grid-cols-1">
          {testimonials.map((item) => (
            <Reveal
              key={item.name}
              as="blockquote"
              className="m-0 rounded-[18px] border border-[color:var(--band-card-border)] bg-[var(--band-card)] p-7 transition-transform duration-300 ease-out hover:scale-[1.03]"
            >
              <div className="text-[10px] tracking-[0.2em] text-[#d6a6ff]">
                ★★★★★
              </div>
              <p className="min-h-[150px] text-base leading-relaxed text-[color:var(--band-ink)] opacity-90">
                {item.quote}
              </p>
              <footer className="grid gap-[3px]">
                <strong>{item.name}</strong>
                <span className="text-[11px] text-[color:var(--band-muted)]">
                  {item.role}
                </span>
              </footer>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
