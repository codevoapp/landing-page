import { HeroMockup } from "@/components/sections/HeroMockup";
import { BtnGhost, BtnPrimary, Container } from "@/components/ui";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.7892 12.256C3.64855 12.1153 3.56953 11.9246 3.56953 11.7257C3.56953 11.5268 3.64855 11.336 3.7892 11.1953L9.93396 5.05058L5.38019 5.05058C5.27953 5.05413 5.17919 5.03737 5.08515 5.00131C4.99112 4.96524 4.9053 4.9106 4.83284 4.84065C4.76038 4.7707 4.70274 4.68687 4.66338 4.59416C4.62402 4.50145 4.60373 4.40176 4.60373 4.30105C4.60373 4.20033 4.62402 4.10064 4.66338 4.00793C4.70274 3.91522 4.76038 3.83139 4.83284 3.76144C4.9053 3.69149 4.99112 3.63685 5.08515 3.60078C5.17919 3.56472 5.27953 3.54796 5.38019 3.55151H11.7442C11.9429 3.55164 12.1335 3.63064 12.274 3.77118C12.4146 3.91172 12.4936 4.10229 12.4937 4.30105L12.4937 10.665C12.4868 10.8592 12.4049 11.0432 12.265 11.1782C12.1252 11.3131 11.9385 11.3885 11.7442 11.3885C11.5498 11.3885 11.3631 11.3131 11.2233 11.1782C11.0834 11.0432 11.0015 10.8592 10.9946 10.665L10.9946 6.11124L4.84986 12.256C4.70921 12.3966 4.51844 12.4757 4.31953 12.4757C4.12062 12.4757 3.92985 12.3966 3.7892 12.256Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="band-dark glow-hero relative flex min-h-[780px] items-center overflow-hidden py-[110px] pt-[160px] max-md:min-h-0 max-md:pt-36 max-md:pb-20"
    >
      <div className="hero-glow" aria-hidden />
      <div className="hero-dots" aria-hidden />
      <Container className="grid grid-cols-[1fr_1fr] items-center gap-12 max-lg:gap-10 max-md:grid-cols-1">
        <div>
          <h1 className="m-0 font-ui text-[clamp(40px,5.2vw,64px)] leading-[1.08] font-medium tracking-[-0.035em]">
            <span className="hero-title-gradient">Dream of Getting</span>
            <br />
            <span className="text-white">Your Own Website?</span>
          </h1>
          <p className="mt-10 mb-7 max-w-[460px] font-sans text-[clamp(17px,1.6vw,22px)] leading-[1.45] text-[#6995F4]">
            We Turn Ideas Into Digital Experiences That Move Your Business
            Forward.
          </p>
          <p className="mb-12 max-w-[420px] font-display text-[16px] leading-[1.65] text-white">
            High-converting websites, apps, design and digital marketing
            strategy designed around your business.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <BtnPrimary
              href="#contact"
              className="rounded-[10px] px-5 py-3 !text-[16px] gap-2"
            >
              Get an Estimate <ArrowIcon className="h-5 w-5" />
            </BtnPrimary>
            <BtnGhost
              href="#work"
              className="group relative overflow-hidden rounded-[10px] !border-[#6E2BBA] !bg-white/10 px-5 py-3 !text-[16px] gap-2 hover:!border-transparent hover:!bg-transparent hover:brightness-100"
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-linear-to-r from-[#8844F2] to-[#18C0EF] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
              <span className="relative z-10 inline-flex items-center gap-2">
                View Our Work <ArrowIcon className="h-5 w-5" />
              </span>
            </BtnGhost>
          </div>
        </div>

        <div className="perspective-[1200px] max-md:mt-2 max-md:max-w-[420px] max-md:mx-auto">
          <HeroMockup />
        </div>
      </Container>
    </section>
  );
}
