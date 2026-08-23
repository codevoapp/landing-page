"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { BtnPrimary, Container, Eyebrow } from "@/components/ui";
import { contactSchema } from "@/lib/contact-schema";

const empty = { name: "", email: "", company: "", message: "" };

export function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof typeof empty, string>>>(
    {},
  );
  const [success, setSuccess] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(values);

    if (!parsed.success) {
      const next: Partial<Record<keyof typeof empty, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key as keyof typeof empty]) {
          next[key as keyof typeof empty] = issue.message;
        }
      }
      setErrors(next);
      setSuccess(false);
      return;
    }

    // Local-only success for now — API/DB comes later with admin.
    setErrors({});
    setValues(empty);
    setSuccess(true);
  }

  return (
    <section
      id="contact"
      className="band-dark glow-mint relative overflow-hidden py-[125px] max-md:py-[90px]"
    >
      <Container className="grid grid-cols-2 items-center gap-[100px] max-md:grid-cols-1 max-md:gap-[50px]">
        <Reveal>
          <Eyebrow>07 — Your turn</Eyebrow>
          <h2 className="m-0 font-display text-[clamp(48px,6vw,78px)] leading-[0.94] font-semibold tracking-[-0.06em]">
            Let&apos;s make your
            <br />
            <em className="gradient-text">next website.</em>
          </h2>
          <p className="mt-5 max-w-[450px] text-[color:var(--band-muted)]">
            Tell us what you&apos;re building. We&apos;ll reply with a clear next
            step.
          </p>
          <div className="mt-[30px] grid gap-3 text-[13px] text-[color:var(--band-soft)]">
            <span>✦ Free first concept</span>
            <span>✦ No commitment</span>
            <span>✦ Human response</span>
          </div>
        </Reveal>

        <Reveal delay>
          <form
            onSubmit={onSubmit}
            className="rounded-[20px] border border-[color:var(--band-card-border)] bg-[var(--band-card)] p-[30px] shadow-[0_30px_90px_#000] transition-[border-color,box-shadow] duration-300 ease-out hover:border-[#9c58ff88] hover:shadow-[0_30px_90px_#000,0_0_60px_#7b3bff22]"
            noValidate
          >
            {success ? (
              <div className="mb-4 rounded-[10px] border border-[#37e5a444] bg-[#37e5a410] p-3 text-[13px] text-[#8df1c8]">
                Thanks — your message has been sent.
              </div>
            ) : null}

            <div className="mb-4 grid grid-cols-2 gap-3.5 max-md:grid-cols-1">
              <label className="mb-0 grid gap-2 text-[11px] text-[color:var(--band-muted)]">
                Name
                <input
                  name="name"
                  value={values.name}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, name: e.target.value }))
                  }
                  placeholder="Your name"
                  className="w-full rounded-[10px] border border-[color:var(--band-card-border)] bg-[var(--band-input)] px-[13px] py-[13px] font-[inherit] text-[color:var(--band-ink)] outline-none focus:border-[#9d5dff88]"
                />
                {errors.name ? (
                  <span className="text-[11px] text-pink">{errors.name}</span>
                ) : null}
              </label>
              <label className="mb-0 grid gap-2 text-[11px] text-[color:var(--band-muted)]">
                Email
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, email: e.target.value }))
                  }
                  placeholder="you@company.com"
                  className="w-full rounded-[10px] border border-[color:var(--band-card-border)] bg-[var(--band-input)] px-[13px] py-[13px] font-[inherit] text-[color:var(--band-ink)] outline-none focus:border-[#9d5dff88]"
                />
                {errors.email ? (
                  <span className="text-[11px] text-pink">{errors.email}</span>
                ) : null}
              </label>
            </div>

            <label className="mb-4 grid gap-2 text-[11px] text-[color:var(--band-muted)]">
              Company
              <input
                name="company"
                value={values.company}
                onChange={(e) =>
                  setValues((v) => ({ ...v, company: e.target.value }))
                }
                placeholder="Company name (optional)"
                className="w-full rounded-[10px] border border-[color:var(--band-card-border)] bg-[var(--band-input)] px-[13px] py-[13px] font-[inherit] text-[color:var(--band-ink)] outline-none focus:border-[#9d5dff88]"
              />
            </label>

            <label className="mb-4 grid gap-2 text-[11px] text-[color:var(--band-muted)]">
              What are you building?
              <textarea
                name="message"
                value={values.message}
                onChange={(e) =>
                  setValues((v) => ({ ...v, message: e.target.value }))
                }
                placeholder="Tell us a little about your project..."
                className="min-h-[130px] w-full resize-y rounded-[10px] border border-[color:var(--band-card-border)] bg-[var(--band-input)] px-[13px] py-[13px] font-[inherit] text-[color:var(--band-ink)] outline-none focus:border-[#9d5dff88]"
              />
              {errors.message ? (
                <span className="text-[11px] text-pink">{errors.message}</span>
              ) : null}
            </label>

            <BtnPrimary asButton type="submit" className="w-full">
              Request a free concept <span>↗</span>
            </BtnPrimary>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
