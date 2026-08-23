import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { projects } from "@/lib/content";

const toneClass: Record<(typeof projects)[number]["tone"], string> = {
  orange: "work-visual-orange",
  violet: "work-visual-violet",
  blue: "work-visual-blue",
  green: "work-visual-green",
  pink: "work-visual-pink",
  gold: "work-visual-gold",
};

export function Work() {
  return (
    <section
      id="work"
      className="band-dark glow-cyan band-curve-t band-curve-pull relative pb-[125px] max-md:pb-[90px]"
    >
      <Container>
        <Reveal className="mb-[60px] flex items-end justify-between gap-10 max-md:block">
          <div>
            <Eyebrow>02 — Selected work</Eyebrow>
            <SectionHeading>
              Work that makes
              <br />
              people <em className="gradient-text">stop scrolling.</em>
            </SectionHeading>
          </div>
          <a
            href="#contact"
            className="text-[13px] text-[color:var(--band-nav)] no-underline hover:opacity-80 max-md:mt-5 max-md:inline-block"
          >
            Start a project ↗
          </a>
        </Reveal>

        <div className="grid grid-cols-2 gap-[22px] max-md:grid-cols-1">
          {projects.map((project) => (
            <Reveal
              key={project.title}
              as="article"
              className="overflow-hidden rounded-[18px] border border-[color:var(--band-card-border)] bg-[var(--band-card)] p-2.5 shadow-[0_12px_40px_rgb(12_13_18/0.06)] transition-[border-color,box-shadow] duration-300 ease-out hover:border-[#9c58ff88] hover:shadow-[0_12px_40px_rgb(12_13_18/0.06),0_0_60px_#7b3bff22]"
            >
              <div
                className={`work-visual relative h-[340px] overflow-hidden rounded-xl p-[26px] text-white ${toneClass[project.tone]}`}
              >
                <span className="font-display text-[34px] font-medium">
                  {project.title}
                </span>
                <small className="mt-1 block text-white/50">
                  {project.category}
                </small>
                <div className="mock-ui absolute right-[9%] bottom-[10%] h-[48%] w-[55%] rounded-xl border border-white/10 bg-black/40 shadow-[0_20px_40px_#000]" />
              </div>
              <div className="flex justify-between px-2 pt-4 pb-2 text-xs">
                <strong>{project.title}</strong>
                <span className="text-[color:var(--band-muted)]">
                  {project.category}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
