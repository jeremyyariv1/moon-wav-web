"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Role } from "@/lib/auth";

export default function LockedLanding() {
  const [openCard, setOpenCard] = useState<Role | null>(null);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-brand-bg overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-3">
          <span
            className="text-6xl md:text-7xl italic font-semibold text-white leading-none"
            style={{ fontFamily: "Georgia, serif" }}
          >
            moonwav
          </span>
          <p className="text-[11px] uppercase tracking-[0.22em] text-brand-subtle">
            Closed preview
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 w-full">
          <LoginCard
            role="investor"
            eyebrow="Investors"
            title="Read the thesis"
            buttonLabel="Investor login"
            isOpen={openCard === "investor"}
            onOpen={() => setOpenCard("investor")}
            onClose={() => setOpenCard(null)}
          />
          <LoginCard
            role="creator"
            eyebrow="Creators"
            title="The creator program"
            buttonLabel="Creator login"
            isOpen={openCard === "creator"}
            onOpen={() => setOpenCard("creator")}
            onClose={() => setOpenCard(null)}
          />
        </div>

      </div>
    </main>
  );
}

function LoginCard({
  role,
  eyebrow,
  title,
  buttonLabel,
  isOpen,
  onOpen,
  onClose,
}: {
  role: Role;
  eyebrow: string;
  title: string;
  buttonLabel: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role, password }),
      });
      if (res.ok) {
        window.location.href = `/${role}`;
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      setError(data.error ?? "Login failed");
    } catch {
      setError("Network error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      className={`rounded-2xl border bg-brand-surface/40 backdrop-blur-sm p-6 transition-colors ${
        isOpen
          ? "border-brand-primary/70"
          : "border-brand-border hover:border-brand-primary/60"
      }`}
    >
      <div className="flex flex-col gap-1 mb-5">
        <span className="text-[10px] uppercase tracking-[0.22em] text-brand-primary font-semibold">
          {eyebrow}
        </span>
        <h2 className="text-white text-xl font-semibold tracking-tight">{title}</h2>
      </div>

      {!isOpen && (
        <button
          type="button"
          onClick={onOpen}
          className="w-full rounded-lg border border-brand-border bg-brand-card/60 hover:bg-brand-card hover:border-brand-primary/50 transition-colors text-white font-medium text-sm py-2.5 flex items-center justify-center gap-2"
        >
          {buttonLabel}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      )}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={onSubmit}
            className="flex flex-col gap-3 overflow-hidden"
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoComplete="current-password"
              autoFocus
              className="w-full bg-brand-card/80 border border-brand-border rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-brand-muted focus:outline-none focus:border-brand-primary/80 transition-colors"
              required
              aria-label={`${eyebrow} password`}
            />
            {error && <p className="text-red-400 text-xs">{error}</p>}

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setPassword("");
                  setError(null);
                  onClose();
                }}
                className="px-4 rounded-lg border border-brand-border text-brand-subtle hover:text-white hover:border-brand-primary/40 transition-colors text-sm py-2.5"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting || !password}
                className="flex-1 rounded-lg bg-brand-primary hover:bg-brand-light disabled:opacity-40 disabled:hover:bg-brand-primary transition-colors text-white font-medium text-sm py-2.5 shadow-lg shadow-brand-primary/20"
              >
                {submitting ? "Checking…" : "Enter"}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
