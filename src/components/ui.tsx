import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  narrow = false,
}: {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-[min(calc(100%-48px),var(--container-site))] max-md:w-[min(calc(100%-30px),var(--container-site))] ${narrow ? "max-w-[760px]" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 font-display text-[11px] font-semibold tracking-[0.18em] text-[color:var(--band-eyebrow,#a6a6b4)] uppercase">
      {children}
    </div>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="m-0 font-display text-[clamp(42px,5vw,68px)] leading-[0.94] font-semibold tracking-[-0.06em]">
      {children}
    </h2>
  );
}

export function BtnPrimary({
  href,
  children,
  asButton = false,
  type = "submit",
  className = "",
}: {
  href?: string;
  children: ReactNode;
  asButton?: boolean;
  type?: "button" | "submit";
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-3 rounded-xl bg-linear-to-br from-[#6b29ff] to-[#b348ff] px-4 py-3 text-[13px] font-bold text-white no-underline shadow-[0_15px_40px_#772cff3b] transition-[filter,transform,box-shadow] duration-200 ease-out hover:brightness-110 hover:shadow-[0_18px_44px_#772cff55] active:brightness-90 active:scale-[0.98] active:shadow-[0_8px_24px_#772cff33] ${className}`;

  if (asButton) {
    return (
      <button type={type} className={`${classes} cursor-pointer border-0`}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}

export function BtnGhost({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-3 rounded-xl border border-[color:var(--band-card-border,var(--color-line))] bg-[var(--band-ghost,rgb(255_255_255/0.05))] px-4 py-3 text-[13px] font-bold text-[color:var(--band-ink,#fff)] no-underline transition-[background-color,border-color,transform,filter] duration-200 ease-out hover:border-white/25 hover:bg-white/10 hover:brightness-110 active:scale-[0.98] active:bg-white/[0.04] active:brightness-90 ${className}`}
    >
      {children}
    </a>
  );
}
