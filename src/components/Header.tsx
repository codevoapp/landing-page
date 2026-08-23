"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

function BrandMark() {
  return (
    <span className="inline-flex h-6 w-6 items-end gap-[3px]" aria-hidden>
      <i className="block h-3.5 w-[5px] rounded-[5px] bg-linear-to-b from-cyan to-purple" />
      <i className="block h-[21px] w-[5px] rounded-[5px] bg-linear-to-b from-cyan to-purple" />
      <i className="block h-[17px] w-[5px] rounded-[5px] bg-linear-to-b from-cyan to-purple" />
    </span>
  );
}

export function Brand({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`flex items-center gap-2.5 font-display text-base font-bold text-white no-underline ${className}`}
      aria-label="Codevo home"
    >
      <BrandMark />
      <span>Codevo</span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-300 ${
        scrolled
          ? "bg-transparent py-4"
          : "bg-linear-to-b from-[#030407ee] to-transparent py-0"
      }`}
    >
      <nav
        className={`relative mx-auto flex items-center justify-between border bg-[rgb(8_8_14/0.7)] backdrop-blur-[18px] transition-[width,border-radius,padding,margin] duration-300 ease-out max-md:px-5 ${
          scrolled
            ? "w-[min(calc(100%-48px),var(--container-site))] rounded-full border-white/12 px-8 py-2.5 max-md:w-[min(calc(100%-30px),var(--container-site))]"
            : "w-full rounded-none border-x-0 border-t-0 border-white/10 px-[max(2rem,calc((100%-var(--container-site))/2))] py-4"
        } ${open ? "open" : ""}`}
      >
        <Brand />

        <div
          className={`${
            open
              ? "absolute top-[calc(100%+10px)] right-4 left-4 flex flex-col gap-7 rounded-3xl border border-white/10 bg-[#090a0f] p-5 md:right-0 md:left-0"
              : "hidden gap-7 md:flex"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="text-[13px] text-nav no-underline hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={close}
          className={`${
            open
              ? "absolute top-[calc(100%+200px)] right-4 left-4 inline-flex justify-center md:right-0 md:left-0"
              : "hidden md:inline-flex"
          } items-center gap-3 rounded-xl bg-linear-to-br from-[#6326ff] to-[#b346ff] px-4 py-3 text-[13px] font-bold text-white no-underline shadow-[0_0_25px_#792cff45] transition-[filter,transform,box-shadow] duration-200 ease-out hover:brightness-110 hover:shadow-[0_0_30px_#792cff66] active:scale-[0.98] active:brightness-90`}
        >
          Get a free concept <span>↗</span>
        </a>

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
