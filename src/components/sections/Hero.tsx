import { Reveal } from "@/components/Reveal";
import { HeroMockup } from "@/components/sections/HeroMockup";
import { BtnGhost, BtnPrimary, Container, Eyebrow } from "@/components/ui";
import { proofAvatars } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="band-dark glow-violet relative flex min-h-[860px] items-center overflow-hidden py-[125px] pt-[190px] max-md:min-h-0 max-md:pt-40"
    >
      <Container className="grid grid-cols-[1.05fr_0.95fr] items-center gap-[70px] max-md:grid-cols-1">
        <Reveal>
          <Eyebrow>✦ Premium digital studio</Eyebrow>
          <h1 className="m-0 font-display text-[clamp(48px,7vw,88px)] leading-[0.94] font-semibold tracking-[-0.06em]">
            Dream website?
            <br />
            <em className="gradient-text">We build it.</em>
          </h1>
          <p className="my-7 max-w-[560px] text-lg text-[color:var(--band-soft)]">
            High-converting websites, landing pages and online shops — designed
            around your business, not a template.
          </p>
          <div className="flex items-center gap-[22px]">
            <BtnPrimary href="#contact">
              Get a free concept <span>↗</span>
            </BtnPrimary>
            <BtnGhost href="#work">
              Explore our work <span>↓</span>
            </BtnGhost>
          </div>
          <div className="mt-[42px] flex items-center gap-3 text-xs text-[color:var(--band-soft)]">
            <div className="flex">
              {proofAvatars.map((label, i) => (
                <b
                  key={label}
                  className={`grid h-7 w-7 place-items-center rounded-full border-2 border-[#090a0e] bg-[#1c1e27] text-[8px] ${i === 0 ? "" : "-ml-[7px]"}`}
                >
                  {label}
                </b>
              ))}
            </div>
            <span>50+ happy clients</span>
          </div>
        </Reveal>

        <Reveal delay className="perspective-[1200px] max-md:mt-5">
          <HeroMockup />
        </Reveal>
      </Container>
    </section>
  );
}
