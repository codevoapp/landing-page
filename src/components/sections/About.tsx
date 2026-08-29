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
    title: (
      <>
        Understand
        <br />
        Your Target
      </>
    ),
    color: "#7EB6FF",
    body: "Our process will help refine your ideas, so your website or product speaks directly to your customer.",
    icon: "/icons/target.svg",
  },
  {
    title: (
      <>
        Deliver success
        <br />
        not just a service
      </>
    ),
    color: "#C4B5FD",
    body: "We create reliable digital solutions designed to deliver real results for businesses and their customers.",
    icon: "/icons/gear.svg",
  },
  {
    title: (
      <>
        Build
        <br />
        For Growth
      </>
    ),
    color: "#E9A8FF",
    body: "We build scalable digital solutions that support your goals today and grow with your business tomorrow.",
    icon: "/icons/growth.svg",
  },
];

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

            <p className="m-0 justify-self-end pt-1 font-sans text-[14px] leading-[1.25] max-lg:max-w-none max-lg:justify-self-start">
              We are an IT development and creative agency delivering digital
              solutions that combine technology, design, and creativity. From
              web and app development to branding and creative content, we help
              businesses build, grow, and stand out in the digital world.
            </p>
          </div>
        </div>

        <div className="relative -mt-86 grid grid-cols-2 items-center gap-x-8 gap-y-8 max-lg:mt-0 max-lg:grid-cols-1">
          <div className="group relative z-0 -ml-24 w-[140%] max-w-none origin-bottom-left scale-85 max-lg:ml-0 max-lg:w-full max-lg:scale-100">
            <Image
              src={assetPath("/images/about-img.png")}
              alt="Codevo team collaborating around a website design"
              width={900}
              height={700}
              className="h-auto w-full object-contain object-bottom"
            />

            <Image
              src={assetPath("/images/high-quality.png")}
              alt=""
              width={149}
              height={60}
              aria-hidden
              className="pointer-events-none absolute top-[50%] left-[16%] z-20 w-[26%] max-w-[170px] -translate-x-2 translate-y-1 opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 max-lg:top-[36%] max-lg:left-[4%]"
            />
            <Image
              src={assetPath("/images/affordable.png")}
              alt=""
              width={149}
              height={60}
              aria-hidden
              className="pointer-events-none absolute top-[22%] right-[2%] z-20 w-[26%] max-w-[170px] translate-x-2 -translate-y-1 opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all delay-75 duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 max-lg:top-[16%] max-lg:right-[2%]"
            />
            <Image
              src={assetPath("/images/user-friendly.png")}
              alt=""
              width={149}
              height={60}
              aria-hidden
              className="pointer-events-none absolute top-[64%] right-[25%] z-20 w-[26%] max-w-[170px] translate-y-2 opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all delay-150 duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 max-lg:top-[56%] max-lg:left-[36%]"
            />
          </div>

          <div className="relative z-10 mt-36 ml-4">
            <div className="mb-5 flex items-center gap-2 text-[#6995F4]">
              <h3 className="m-0 font-ui text-[20px]">Our Values</h3>
              <ArrowIcon className="h-6 w-6" />
            </div>

            <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
              {values.map((value) => (
                <article
                  key={value.icon}
                  className="flex min-h-[250px] flex-col items-center justify-center rounded-[16px] border border-[#6E2BBA]/60 bg-[#12101F] px-3.5 py-4 text-center transition-[border-color,box-shadow,background-color] duration-300 ease-out hover:border-[#6E2BBACC] hover:bg-[#1E1B34] hover:shadow-[0_0_20px_#6E2BBACC,0_4px_24px_#6E2BBA66]"
                >
                  <div className="relative mb-5 flex size-[100px] shrink-0 items-center justify-center">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0"
                      style={{
                        maskImage:
                          "radial-gradient(circle at center, black 30%, transparent 68%)",
                        WebkitMaskImage:
                          "radial-gradient(circle at center, black 30%, transparent 68%)",
                      }}
                    >
                      <svg
                        className="absolute inset-0 size-full"
                        viewBox="0 0 100 100"
                        fill="none"
                      >
                        {[0.5, 20, 40, 60, 80, 99.5].map((pos) => (
                          <g key={pos}>
                            <line
                              x1={pos}
                              y1="0.5"
                              x2={pos}
                              y2="99.5"
                              stroke="#6E2BBA"
                              strokeOpacity="0.7"
                              strokeWidth="1"
                            />
                            <line
                              x1="0.5"
                              y1={pos}
                              x2="99.5"
                              y2={pos}
                              stroke="#6E2BBA"
                              strokeOpacity="0.7"
                              strokeWidth="1"
                            />
                          </g>
                        ))}
                      </svg>
                    </div>

                    <div
                      className="relative z-10 grid size-[43px] place-items-center rounded-[10px] border border-transparent"
                      style={{
                        color: value.color,
                        background: `
                          radial-gradient(circle at 50% 45%, #1E1B34 0%, #282444 100%) padding-box,
                          linear-gradient(135deg, #6B4A8C, #5A3A7A, #7A5A9A, #4A1A7A) border-box
                        `,
                      }}
                    >
                      <span
                        aria-hidden
                        className="block size-6"
                        style={{
                          backgroundColor: "currentColor",
                          WebkitMask: `url(${assetPath(value.icon)}) center / contain no-repeat`,
                          mask: `url(${assetPath(value.icon)}) center / contain no-repeat`,
                        }}
                      />
                    </div>
                  </div>
                  <h4
                    className="m-0 mb-3 font-ui text-[15px] leading-[1.3]"
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
