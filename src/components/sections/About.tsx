import Image from "next/image";
import { Container } from "@/components/ui";
import { assetPath } from "@/lib/paths";

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

const values = [
  {
    title: "Understand Your Target",
    color: "#7EB6FF",
    body: "Our process will help refine your ideas, so your website or product speaks directly to your customer.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" aria-hidden>
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Deliver success not just a service",
    color: "#C4B5FD",
    body: "We create reliable digital solutions designed to deliver real results for businesses and their customers.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" aria-hidden>
        <path
          d="M20 9 21.6 16.2 28.8 17.8 21.6 19.4 20 26.6 18.4 19.4 11.2 17.8 18.4 16.2 20 9Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M28 11.5 28.6 13.8 30.9 14.4 28.6 15 28 17.3 27.4 15 25.1 14.4 27.4 13.8 28 11.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Build For Growth",
    color: "#E9A8FF",
    body: "We build scalable digital solutions that support your goals today and grow with your business tomorrow.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" aria-hidden>
        <path
          d="M10 27V22h4.5v5H10Zm7.5 0V17h4.5v10h-4.5Zm7.5 0V13h4.5v14H25Z"
          fill="currentColor"
        />
        <path
          d="M11 15.5 20 10l9 7.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.5 10.5H29V14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

export default function About() {
  return (
    <section
      id="about"
      className="band-dark glow-none band-curve-t band-curve-pull-tight band-curve-shadow relative z-[1] pb-0"
    >
      <Container className="relative">
        <div className="relative z-20">
          <p className="m-0 mb-5 font-ui text-[13px] text-[#9CA3AF]">
            01 – About Us
          </p>

          <div className="mb-4 grid grid-cols-2 items-start gap-x-16 gap-y-6 max-lg:mb-8 max-lg:grid-cols-1">
            <h2 className="about-title-gradient m-0 max-w-[472px] font-ui text-[32px] leading-none font-semibold tracking-normal">
              We thrive on building close
              <br />
              connections with our clients.
            </h2>

            <p className="m-0 justify-self-end pt-1 font-sans text-[14px] leading-[1.75] text-[#A1A1AA] max-lg:max-w-none max-lg:justify-self-start">
              We are an IT development and creative agency delivering digital
              solutions that combine technology, design, and creativity. From
              web and app development to branding and creative content, we help
              businesses build, grow, and stand out in the digital world.
            </p>
          </div>
        </div>

        <div className="relative -mt-86 grid grid-cols-2 items-center gap-x-8 gap-y-8 max-lg:mt-0 max-lg:grid-cols-1">
          <div className="relative z-0 -ml-24 w-[140%] max-w-none origin-bottom-left scale-85 max-lg:ml-0 max-lg:w-full max-lg:scale-100">
            <Image
              src={assetPath("/images/Group 70.png")}
              alt="Codevo team collaborating around a website design"
              width={900}
              height={700}
              className="h-auto w-full object-contain object-bottom"
            />
          </div>

          <div className="relative z-10 mt-36 ml-4">
            <div className="mb-5 flex items-center gap-2 text-[#6995F4]">
              <h3 className="m-0 font-ui text-[20px] font-medium">Our Values</h3>
              <ArrowIcon className="h-4 w-4" />
            </div>

            <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
              {values.map((value) => (
                <article
                  key={value.title}
                  className="flex min-h-[250px] flex-col rounded-[16px] border border-[#6E2BBA]/60 bg-[#12101F] px-3.5 py-4"
                >
                  <div
                    className="mb-5 grid h-11 w-11 place-items-center rounded-[10px]"
                    style={{
                      color: value.color,
                      background: `${value.color}22`,
                      boxShadow: `0 0 20px ${value.color}30`,
                    }}
                  >
                    {value.icon}
                  </div>
                  <h4
                    className="m-0 mb-3 font-ui text-[15px] leading-[1.3] font-medium"
                    style={{ color: value.color }}
                  >
                    {value.title}
                  </h4>
                  <p className="m-0 font-sans text-[12px] leading-[1.6] text-[#D4D4D8]">
                    {value.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
