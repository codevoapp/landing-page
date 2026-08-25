import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";

export function Intro() {
  return (
    <section
      id="intro"
      className="band-dark glow-compact band-curve-b relative py-[125px] text-center max-md:py-[90px]"
    >
      <Reveal>
        <Container narrow>
          <Eyebrow>Built for impact</Eyebrow>
          <SectionHeading>
            Not just beautiful.
            <br />
            <em className="gradient-text">Built to convert.</em>
          </SectionHeading>
          <p className="mt-5 text-[color:var(--band-muted)]">
            Every detail is shaped to make your brand feel credible, memorable
            and easy to choose.
          </p>
        </Container>
      </Reveal>
    </section>
  );
}
