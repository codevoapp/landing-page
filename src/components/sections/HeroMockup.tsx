"use client";

import { useRef, type PointerEvent } from "react";

const BASE_RX = 3;
const BASE_RY = -7;
const MAX_TILT = 10;

export function HeroMockup() {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  function update(clientX: number, clientY: number, reset = false) {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card) return;

    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      if (reset) {
        card.style.transition = "transform 0.45s ease-out";
        card.style.transform = `rotateX(${BASE_RX}deg) rotateY(${BASE_RY}deg)`;
        if (glow) {
          glow.style.transition = "background 0.45s ease-out";
          glow.style.background =
            "radial-gradient(420px circle at 50% 30%, rgb(180 120 255 / 0.35), transparent 55%)";
        }
        return;
      }

      card.style.transition = "transform 0.08s ease-out";
      const rect = card.getBoundingClientRect();
      const px = (clientX - rect.left) / rect.width;
      const py = (clientY - rect.top) / rect.height;
      const rx = BASE_RX + (0.5 - py) * MAX_TILT * 2;
      const ry = BASE_RY + (px - 0.5) * MAX_TILT * 2;

      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      if (glow) {
        glow.style.transition = "background 0.08s ease-out";
        glow.style.background = `radial-gradient(420px circle at ${px * 100}% ${py * 100}%, rgb(180 120 255 / 0.35), transparent 55%)`;
      }
    });
  }

  function onMove(e: PointerEvent<HTMLDivElement>) {
    update(e.clientX, e.clientY);
  }

  function onLeave() {
    update(0, 0, true);
  }

  return (
    <div
      ref={cardRef}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="hero-mockup relative rounded-[18px] border border-white/12 bg-[#0b0c12] p-2 shadow-[0_40px_100px_#000,0_0_100px_#672cff24] will-change-transform [transform:rotateX(3deg)_rotateY(-7deg)] [transform-style:preserve-3d]"
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 z-10 rounded-[16px] opacity-60 mix-blend-soft-light"
        style={{
          background:
            "radial-gradient(420px circle at 50% 30%, rgb(180 120 255 / 0.35), transparent 55%)",
        }}
        aria-hidden
      />

      <div className="relative flex gap-[5px] p-[7px]">
        <i className="block h-1.5 w-1.5 rounded-full bg-[#444]" />
        <i className="block h-1.5 w-1.5 rounded-full bg-[#444]" />
        <i className="block h-1.5 w-1.5 rounded-full bg-[#444]" />
      </div>
      <div className="relative border-b border-white/5 px-3 py-2 text-[8px] text-[#666]">
        Codevo{" "}
        <span className="float-right">Services &nbsp; Work &nbsp; Contact</span>
      </div>
      <div className="device-screen relative m-[7px] h-[460px] overflow-hidden rounded-xl max-md:h-[360px]">
        <div className="absolute top-[5%] left-[20%] h-[260px] w-[260px] rounded-full bg-[#a84dff2b] blur-[45px]" />
        <div className="absolute top-[27%] left-[11%] font-display text-[42px] leading-none font-medium">
          Your next
          <br />
          <strong>digital move.</strong>
        </div>
        <div className="absolute top-[48%] left-[11%] h-px w-2/5 bg-white/15" />
        <div className="absolute right-[10%] bottom-[10%] h-1/4 w-2/5 rounded-[10px] border border-white/10 bg-white/5" />
      </div>
    </div>
  );
}
