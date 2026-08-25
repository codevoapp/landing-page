"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/lib/content";
import { assetPath } from "@/lib/paths";

/** Keep src as-is — paths already include basePath via `assetPath`. */
const staticLoader = ({ src }: { src: string }) => src;

const languages = [
  {
    code: "en",
    label: "ENGLISH",
    short: "EN",
    flag: assetPath("/icons/emojione_flag-for-united-kingdom.svg"),
  },
  {
    code: "id",
    label: "INDONESIA",
    short: "ID",
    flag: assetPath("/icons/emojione_flag-for-indonesia.svg"),
  },
] as const;

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

export function Brand({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`flex shrink-0 items-center gap-2.5 text-base font-bold text-white no-underline ${className}`}
      aria-label="Codevo home"
    >
      <Image
        src={assetPath("/logo/codevo.png")}
        alt=""
        width={28}
        height={28}
        className="h-10 w-10 object-contain"
        loader={staticLoader}
        unoptimized
        priority
      />
      <span className="font-brand font-bold tracking-wide uppercase text-2xl">
        Codevo
      </span>
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState<(typeof languages)[number]>(languages[0]);
  const langRef = useRef<HTMLDivElement>(null);

  const close = () => setOpen(false);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (!langRef.current?.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent px-4 py-4 max-md:px-3 max-md:py-3">
      <nav
        className={`relative mx-auto grid h-[60px] w-full max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-6 rounded-[10px] bg-linear-to-r from-[#393838] via-[#444444] to-[#242424] px-24 max-md:flex max-md:justify-between max-md:px-5 border border-white/10 ${open ? "open" : ""}`}
      >
        <Brand />

        <div
          className={`${
            open
              ? "absolute top-[calc(100%+10px)] right-0 left-0 z-50 flex flex-col gap-5 rounded-[16px] border border-white/10 bg-[#242424] p-5"
              : "hidden items-center justify-center gap-1 md:flex"
          }`}
        >
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="group relative flex items-center justify-center px-2 py-2 mx-2"
            >
              <a
                href={link.href}
                onClick={close}
                className="font-ui text-[16px] whitespace-nowrap text-white/90 no-underline transition-colors group-hover:text-[#6995F4]"
              >
                {link.label}
              </a>
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 bg-linear-to-r from-[#8844F2] to-[#18C0EF] transition-transform duration-200 group-hover:scale-x-100"
              />
            </div>
          ))}

          {open ? (
            <a
              href="#contact"
              onClick={close}
              className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-linear-to-r from-[#8844F2] to-[#18C0EF] px-5 py-2.5 font-ui text-[13px] font-semibold text-white no-underline"
            >
              Get In Touch <ArrowIcon className="h-5 w-5" />
            </a>
          ) : null}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div ref={langRef} className="relative inline-flex">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className="inline-flex h-10 min-w-[120px] items-center justify-between gap-2 rounded-[10px] bg-white px-6 font-ui text-[14px] text-black"
              aria-expanded={langOpen}
              aria-haspopup="listbox"
            >
              <span className="inline-flex items-center gap-2">
                <Image
                  src={lang.flag}
                  alt=""
                  width={16}
                  height={16}
                  className="h-4 w-4 rounded-full object-cover"
                  loader={staticLoader}
                  unoptimized
                />
                <span>{lang.short}</span>
              </span>
              <Image
                src={assetPath("/icons/eva_arrow-up-fill.svg")}
                alt=""
                width={16}
                height={16}
                className={`h-5 w-5 shrink-0 transition-transform ${langOpen ? "" : "rotate-180"}`}
                loader={staticLoader}
                unoptimized
              />
            </button>

            {langOpen ? (
              <ul
                role="listbox"
                className="absolute top-[calc(100%+8px)] left-0 z-50 m-0 w-full list-none overflow-hidden rounded-[10px] bg-white p-1 shadow-[0_12px_40px_#00000040]"
              >
                {languages.map((item) => (
                  <li key={item.code}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={lang.code === item.code}
                      onClick={() => {
                        setLang(item);
                        setLangOpen(false);
                      }}
                      className={`flex w-full items-center gap-2 rounded-lg border-0 px-3 py-2.5 text-left font-ui text-[12px] uppercase ${
                        lang.code === item.code
                          ? "bg-[#18C0EF]/30 font-semibold text-[#6995F4]"
                          : "bg-transparent text-black/80 hover:bg-black/5"
                      }`}
                    >
                      <Image
                        src={item.flag}
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 rounded-full object-cover"
                        loader={staticLoader}
                        unoptimized
                      />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <a
            href="#contact"
            className="group relative inline-flex h-10 items-center gap-2 overflow-hidden rounded-[10px] bg-linear-to-r from-[#8844F2] to-[#18C0EF] px-5 font-ui text-[16px] text-white no-underline shadow-[0_8px_20px_#00000040] transition-[color,transform,filter] duration-200 hover:text-black active:scale-[0.98] active:brightness-90"
          >
            <span
              aria-hidden
              className="absolute inset-0 bg-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            />
            <span className="relative z-10 inline-flex items-center gap-2">
              Get In Touch <ArrowIcon className="h-5 w-5" />
            </span>
          </a>
        </div>

        <button
          type="button"
          className="grid gap-1 border-0 bg-transparent p-2 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-[22px] bg-white" />
          <span className="block h-px w-[22px] bg-white" />
          <span className="block h-px w-[22px] bg-white" />
        </button>
      </nav>
    </header>
  );
}
