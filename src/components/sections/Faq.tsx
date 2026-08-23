import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow } from "@/components/ui";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section
      id="faq"
      className="band-dark glow-violet band-curve-t band-curve-pull relative pb-[125px] max-md:pb-[90px]"
    >
      <Container narrow>
        <Reveal>
          <Eyebrow>06 — FAQ</Eyebrow>
        </Reveal>
        <Reveal>
          <h2 className="mb-[50px] font-display text-[clamp(50px,6vw,74px)] leading-[0.94] font-semibold tracking-[-0.06em]">
            Questions,
            <br />
            <em className="gradient-text">answered.</em>
          </h2>
        </Reveal>

        <div className="border-t border-[color:var(--band-line)]">
          {faqs.map((item) => (
            <Reveal
              key={item.q}
              as="details"
              className="faq-item border-b border-[color:var(--band-line)] py-[22px]"
            >
              <summary className="flex cursor-pointer list-none justify-between font-display text-lg font-medium">
                {item.q}{" "}
                <span className="text-[color:var(--band-muted)]">+</span>
              </summary>
              <p className="mt-3 max-w-[650px] text-[color:var(--band-muted)]">
                {item.a}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
