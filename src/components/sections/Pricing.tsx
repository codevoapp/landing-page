import {
  BtnGhost,
  BtnPrimary,
  Container,
  Eyebrow,
  SectionHeading,
} from "@/components/ui";
import { pricingPlans } from "@/lib/content";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="band-dark glow-wide band-curve-b band-curve-shadow relative py-[125px] max-md:py-[90px]"
    >
      <Container>
        <div className="mb-[60px] flex items-end justify-between gap-10 max-md:block">
          <div>
            <Eyebrow>04 — Simple pricing</Eyebrow>
            <SectionHeading>
              Premium websites
              <br />
              without <em className="gradient-text">agency bloat.</em>
            </SectionHeading>
          </div>
          <p className="max-w-[360px] text-[color:var(--band-muted)] max-md:mt-5">
            Choose a starting point. We tailor the final scope to your goals.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[18px] max-md:grid-cols-1">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-[18px] border bg-[var(--band-card)] p-[30px] shadow-[0_12px_40px_rgb(12_13_18/0.06)] transition-[border-color,box-shadow] duration-300 ease-out hover:border-[#9c58ff88] hover:shadow-[0_12px_40px_rgb(12_13_18/0.06),0_0_60px_#7b3bff22] ${
                plan.featured
                  ? "border-[#9c58ff88] shadow-[0_0_60px_#7b3bff22]"
                  : "border-[color:var(--band-card-border)]"
              }`}
            >
              <div className="flex justify-between text-[color:var(--band-soft)]">
                <span>{plan.name}</span>
                {plan.featured ? (
                  <b className="rounded-full bg-[#8d4dff1b] px-[9px] py-1.5 text-[10px] text-[#7a3dff]">
                    Most popular
                  </b>
                ) : null}
              </div>
              <strong className="mt-8 mb-1.5 block font-display text-[42px] font-semibold">
                {plan.price}
              </strong>
              <p className="text-[color:var(--band-muted)]">{plan.blurb}</p>
              <ul className="mt-[30px] mb-10 grid list-none gap-3 p-0 text-[13px] text-[color:var(--band-ink)]">
                {plan.features.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
              {plan.featured ? (
                <BtnPrimary href="#contact" className="w-full">
                  Choose {plan.name} <span>↗</span>
                </BtnPrimary>
              ) : (
                <BtnGhost href="#contact" className="w-full">
                  Choose {plan.name} <span>↗</span>
                </BtnGhost>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
