"use client";

import Image from "next/image";
import { useRef, useState, type PointerEvent, type ReactNode } from "react";
import { assetPath } from "@/lib/paths";
import {
  MockupVariantBlue,
  MockupVariantGreen,
  MockupVariantOrange,
  MockupVariantPurple,
} from "@/components/sections/HeroMockupVariants";

const BASE_RX = 2;
const BASE_RY = -5;
const MAX_TILT = 20;
const CORNER_TILT = 30;

const cornerTilt: Record<
  "top-left" | "top-right" | "bottom-left" | "bottom-right",
  { rx: number; ry: number }
> = {
  // Hovered corner comes forward toward the cursor.
  "top-left": { rx: -CORNER_TILT, ry: CORNER_TILT },
  "top-right": { rx: -CORNER_TILT, ry: -CORNER_TILT },
  "bottom-left": { rx: CORNER_TILT, ry: CORNER_TILT },
  "bottom-right": { rx: CORNER_TILT, ry: -CORNER_TILT },
};

const staticLoader = ({ src }: { src: string }) => src;
const baseMockup = assetPath("/images/group-94.svg");

const cornerVariants: Record<
  "top-left" | "top-right" | "bottom-left" | "bottom-right",
  ReactNode
> = {
  "top-left": <MockupVariantBlue />,
  "top-right": <MockupVariantPurple />,
  "bottom-left": <MockupVariantGreen />,
  "bottom-right": <MockupVariantOrange />,
};

type Corner = keyof typeof cornerVariants;

export function HeroMockup() {
  const cardRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const [activeCorner, setActiveCorner] = useState<Corner | null>(null);

  function update(clientX: number, clientY: number, reset = false) {
    const card = cardRef.current;
    if (!card) return;

    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      if (reset) {
        card.style.transition = "transform 0.45s ease-out";
        card.style.transform = `rotateX(${BASE_RX}deg) rotateY(${BASE_RY}deg)`;
        return;
      }

      card.style.transition = "transform 0.08s ease-out";
      const rect = card.getBoundingClientRect();
      const px = (clientX - rect.left) / rect.width;
      const py = (clientY - rect.top) / rect.height;
      // Hovered side comes forward toward the cursor.
      const rx = (py - 0.5) * MAX_TILT * 2;
      const ry = (0.5 - px) * MAX_TILT * 2;

      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
  }

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (activeCorner) return;
    update(e.clientX, e.clientY);
  }

  function onLeave() {
    update(0, 0, true);
    setActiveCorner(null);
  }

  function showCorner(corner: Corner) {
    setActiveCorner(corner);
    const card = cardRef.current;
    if (card) {
      const { rx, ry } = cornerTilt[corner];
      card.style.transition = "transform 0.35s ease-out";
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    }
  }

  function hideCorner() {
    setActiveCorner(null);
    update(0, 0, true);
  }

  return (
    <div
      ref={cardRef}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="hero-mockup relative w-full will-change-transform [transform:rotateX(2deg)_rotateY(-5deg)] [transform-style:preserve-3d]"
    >
      <div className="relative aspect-[574/394] w-full">
        <Image
          src={baseMockup}
          alt="Website preview mockup"
          width={574}
          height={394}
          className={`absolute inset-0 h-full w-full object-contain drop-shadow-[0_40px_80px_#00000090] transition-opacity duration-300 ${
            activeCorner ? "opacity-0" : "opacity-100"
          }`}
          loader={staticLoader}
          unoptimized
          priority
        />

        {(Object.keys(cornerVariants) as Corner[]).map((corner) => (
          <div
            key={corner}
            className={`pointer-events-none absolute inset-0 drop-shadow-[0_40px_80px_#00000090] transition-opacity duration-300 ${
              activeCorner === corner ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden
          >
            {cornerVariants[corner]}
          </div>
        ))}

        <button
          type="button"
          aria-label="Preview blue variant"
          className="absolute top-0 left-0 z-10 h-[42%] w-[42%] cursor-pointer border-0 bg-transparent"
          onPointerEnter={() => showCorner("top-left")}
          onPointerLeave={hideCorner}
        />
        <button
          type="button"
          aria-label="Preview purple variant"
          className="absolute top-0 right-0 z-10 h-[42%] w-[42%] cursor-pointer border-0 bg-transparent"
          onPointerEnter={() => showCorner("top-right")}
          onPointerLeave={hideCorner}
        />
        <button
          type="button"
          aria-label="Preview green variant"
          className="absolute bottom-0 left-0 z-10 h-[42%] w-[42%] cursor-pointer border-0 bg-transparent"
          onPointerEnter={() => showCorner("bottom-left")}
          onPointerLeave={hideCorner}
        />
        <button
          type="button"
          aria-label="Preview orange variant"
          className="absolute right-0 bottom-0 z-10 h-[42%] w-[42%] cursor-pointer border-0 bg-transparent"
          onPointerEnter={() => showCorner("bottom-right")}
          onPointerLeave={hideCorner}
        />
      </div>
    </div>
  );
}
