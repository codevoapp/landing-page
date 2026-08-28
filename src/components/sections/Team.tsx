import Image from "next/image";
import { Container } from "@/components/ui";
import { teamMembers } from "@/lib/content";
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

function PlusIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M7 1.5v11M1.5 7h11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Team() {
  return (
    <section
      id="team"
      className="band-dark glow-none relative pt-[100px] pb-[120px] max-md:pt-[72px] max-md:pb-[80px]"
    >
      <Container>
        <div className="mb-10 grid grid-cols-2 items-start gap-x-16 gap-y-6 max-lg:mb-8 max-lg:grid-cols-1">
          <div className="flex items-center gap-2 text-[#6995F4]">
            <h2 className="m-0 font-ui text-[20px] font-medium">Meet Our Team</h2>
            <ArrowIcon className="h-4 w-4" />
          </div>

          <p className="m-0 max-w-[420px] justify-self-end font-sans text-[14px] leading-[1.75] text-[#D4D4D8] max-lg:max-w-none max-lg:justify-self-start">
            We&apos;re a team of creative thinkers, technical specialists and
            problem-solvers. Working with Codevo gets you in-house design and
            technical support, a dedicated client partner and solid relationships
            built on respect and honesty.
          </p>
        </div>
      </Container>

      <ul className="m-0 grid w-full list-none grid-cols-6 gap-0 p-0 max-lg:grid-cols-3 max-sm:grid-cols-2">
        {teamMembers.map((member) => (
          <li key={member.name} className="group relative flex flex-col">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={assetPath(member.image)}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw"
                className="scale-[1.06] object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.1]"
              />
            </div>

            <div className="flex items-start justify-between gap-2 bg-[#12101F] px-3.5 py-3.5 max-md:px-2.5 max-md:py-3">
              <div className="min-w-0">
                <p className="m-0 truncate font-ui text-[14px] leading-tight font-medium text-white max-md:text-[12px]">
                  {member.name}
                </p>
                <p className="m-0 mt-1 truncate font-sans text-[12px] leading-tight text-[#A1A1AA] max-md:text-[10px]">
                  {member.role}
                </p>
              </div>
              <button
                type="button"
                className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center border-0 bg-transparent p-0 text-white/80 transition-colors hover:text-white"
                aria-label={`More about ${member.name}`}
              >
                <PlusIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
