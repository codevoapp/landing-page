import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section
      id="process"
      className="band-light band-curve-pull relative pb-[125px] max-md:pb-[90px]"
    >
      <Container>
        <Reveal className="mb-[60px] flex items-end justify-between gap-10 max-md:block">
          <div>
            <Eyebrow>01 — Process</Eyebrow>
            <SectionHeading>
              We turn your idea
              <br />
              into <em className="gradient-text">something real.</em>
            </SectionHeading>
          </div>
          <p className="max-w-[360px] text-[color:var(--band-muted)] max-md:mt-5">
            Clear communication, fast iterations and no agency fog.
          </p>
        </Reveal>

        <div className="grid grid-cols-4 gap-px bg-[color:var(--band-line)] max-md:grid-cols-2">
          {processSteps.map((step) => (
            <Reveal
              key={step.n}
              as="article"
              className="min-h-[260px] bg-[var(--band-bg)] p-[34px]"
            >
              <span className="text-[11px] text-[color:var(--band-muted)]">
                {step.n}
              </span>
              <div>
                <h3 className="mt-[45px] mb-3 font-display text-[23px] font-semibold">
                  {step.title}
                </h3>
                <p className="text-sm text-[color:var(--band-muted)]">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
