"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Container } from "@/components/ui";
import { assetPath } from "@/lib/paths";

const features = [
  {
    title: "Fixed Price",
    subtitle: "From The Start",
    detailLabel: "TRANSPARENCY",
    detail:
      "Clear scope and pricing upfront. No hidden fees — you know exactly what you pay from day one.",
    color: "#F5A623",
    angle: 216,
    icon: "/icons/tag.svg",
  },
  {
    title: "Satisfaction",
    subtitle: "Guarantee",
    detailLabel: "ASSURANCE",
    detail:
      "We stand behind every delivery. Your satisfaction is the measure of a project well done.",
    color: "#A78BFA",
    angle: 288,
    icon: "/icons/seal.svg",
  },
  {
    title: "Free Draft",
    subtitle: "In Advance",
    detailLabel: "PREVIEW",
    detail:
      "See the direction before you commit. We prepare an early draft so feedback starts early.",
    color: "#D946EF",
    angle: 0,
    icon: "/icons/design.svg",
  },
  {
    title: "Optimal Revisions",
    subtitle: "In Advance",
    detailLabel: "COOPERATION",
    detail:
      "We refine design until it's perfect. Design revisions are included in few steps with user testing.",
    color: "#2DD4BF",
    angle: 72,
    icon: "/icons/reload.svg",
  },
  {
    title: "GDPR Conformity",
    subtitle: "Compliant",
    detailLabel: "PRIVACY",
    detail:
      "Built with privacy in mind. Processes and deliveries aligned with data protection standards.",
    color: "#7DD3FC",
    angle: 144,
    icon: "/icons/shield.svg",
  },
];

function FeatureCard({
  title,
  subtitle,
  detailLabel,
  detail,
  color,
  icon,
  className = "",
}: {
  title: string;
  subtitle: string;
  detailLabel: string;
  detail: string;
  color: string;
  icon: string;
  className?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [detailSide, setDetailSide] = useState<"left" | "right">("left");

  const updateDetailSide = () => {
    const el = rootRef.current;
    const orbit = el?.closest(".why-us-orbit");
    if (!el) return;

    const cardBox = el.getBoundingClientRect();
    const cardCenterX = cardBox.left + cardBox.width / 2;

    if (orbit) {
      const orbitBox = orbit.getBoundingClientRect();
      const orbitCenterX = orbitBox.left + orbitBox.width / 2;
      setDetailSide(cardCenterX >= orbitCenterX ? "right" : "left");
      return;
    }

    setDetailSide("left");
  };

  return (
    <div
      ref={rootRef}
      className={`group/card relative ${className}`}
      style={
        {
          ["--card-color" as string]: color,
          ["--card-glow" as string]: `${color}CC`,
          ["--card-glow-soft" as string]: `${color}66`,
        }
      }
      onMouseEnter={updateDetailSide}
    >
      <aside
        className={`why-us-detail-card pointer-events-none absolute top-1/2 z-30 flex h-[180px] w-[220px] flex-col justify-center rounded-[14px] border px-4 py-4 text-left opacity-0 transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:pointer-events-auto group-hover/card:opacity-100 ${
          detailSide === "right"
            ? "why-us-detail-card--right left-[calc(100%+12px)]"
            : "why-us-detail-card--left right-[calc(100%+12px)]"
        }`}
        style={{
          borderColor: color,
          boxShadow: `0 0 20px ${color}CC, 0 4px 24px ${color}66`,
        }}
      >
        <div className="why-us-card-detail-bg pointer-events-none absolute inset-0 rounded-[14px]" aria-hidden />
        <p
          className="relative z-10 m-0 font-ui text-[12px] font-bold tracking-[0.08em] uppercase"
          style={{ color }}
        >
          {detailLabel}
        </p>
        <p className="relative z-10 m-0 mt-2 font-sans text-[11px] leading-[1.55] text-white/95">
          {detail}
        </p>
      </aside>

      <article
        className="why-us-card relative flex size-[180px] flex-col items-center justify-center rounded-[14px] border bg-[#12101F]/90 px-3 py-3 text-center backdrop-blur-sm max-md:mx-auto"
        style={{
          borderColor: `${color}66`,
          boxShadow: `0 0 18px ${color}33`,
        }}
      >
        <div className="relative mb-2 flex size-[100px] shrink-0 items-center justify-center">
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
              color,
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
                WebkitMask: `url(${assetPath(icon)}) center / contain no-repeat`,
                mask: `url(${assetPath(icon)}) center / contain no-repeat`,
              }}
            />
          </div>
        </div>
        <h3 className="m-0 font-ui text-[14px] leading-tight font-semibold text-white">
          {title}
        </h3>
        <p
          className="m-0 mt-1 font-sans text-[12px] leading-tight"
          style={{ color }}
        >
          {subtitle}
        </p>
      </article>
    </div>
  );
}

function BrandCenter() {
  return (
    <div className="relative z-10 flex size-[232px] flex-col items-center justify-center max-md:size-[180px]">
      <div
        className="why-us-glow pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      />
      <div
        className="why-us-inner-ring-glow pointer-events-none absolute inset-0 rounded-full"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-full border border-[#9B6DDE]/70"
        aria-hidden
      />
      <Image
        src={assetPath("/logo/codevo.png")}
        alt=""
        width={85}
        height={85}
        className="relative z-10 h-[85px] w-[85px] object-contain max-md:h-[68px] max-md:w-[68px]"
        unoptimized
      />
      <p className="relative z-10 m-0 mt-3 font-brand text-[22px] font-bold tracking-[0.08em] text-white uppercase max-md:text-[18px]">
        Codevo
      </p>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="band-dark glow-none relative overflow-hidden pt-[80px] pb-[125px] max-md:pt-[60px] max-md:pb-[90px]"
    >
      <div className="why-us-dots inset-0" aria-hidden />

      <Container className="relative z-[1]">
        <header className="mx-auto mb-14 max-w-[560px] text-center max-md:mb-10">
          <h2 className="m-0 font-ui text-[clamp(28px,3.5vw,40px)] leading-tight font-semibold tracking-[-0.02em] text-white">
            Why Work{" "}
            <span className="why-us-title-accent">With Us</span>
          </h2>
          <p className="m-0 mt-3 font-sans text-[14px] text-[#A1A1AA]">
            We are only satisfied when you are.
          </p>
        </header>

        {/* Desktop orbital layout */}
        <div className="why-us-orbit group/orbit relative mx-auto hidden aspect-square w-full max-w-[700px] lg:block">
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 size-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6E2BBA]/35"
            aria-hidden
          />

          <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <BrandCenter />
          </div>

          <div className="why-us-orbit-spin absolute inset-0 z-20">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `rotate(${feature.angle}deg) translateY(-270px) rotate(-${feature.angle}deg)`,
                }}
              >
                <div className="why-us-orbit-counter">
                  <FeatureCard {...feature} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet stack */}
        <div className="lg:hidden">
          <div className="mb-10 flex justify-center">
            <BrandCenter />
          </div>
          <div className="mx-auto grid max-w-[520px] grid-cols-2 gap-3 max-sm:grid-cols-1">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
