import { Container } from "@/components/ui";

export default function Quote() {
  return (
    <section
      id="quote"
      className="band-dark glow-none relative z-[3] -mt-[220px] overflow-hidden pt-[200px] pb-[160px] max-lg:mt-0 max-lg:pt-[100px] max-lg:pb-[100px]"
    >
      <div className="quote-dots inset-0" aria-hidden />
      <Container className="relative z-[1]">
        <p className="quote-text mx-auto max-w-[920px] font-ui text-[clamp(22px,3.2vw,36px)] leading-[1.35] font-semibold tracking-[-0.02em] text-white max-md:max-w-none">
          Whether we&apos;re{" "}
          <span className="quote-accent">creating something from scratch</span>
          , or
          <br className="max-md:hidden" />{" "}
          <span className="quote-accent">Improving existing product</span>, We
          will help making it
          <br className="max-md:hidden" /> come true.
        </p>
      </Container>
    </section>
  );
}
