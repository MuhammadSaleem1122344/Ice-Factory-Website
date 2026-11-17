"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollProgress() {
  const [scrollState, setScrollState] = useState({ progress: 0, showButton: false });

  useEffect(() => {
    let frame = 0;

    const updateScrollState = () => {
      frame = 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0
        ? Math.min(100, Math.max(0, Math.round((window.scrollY / maxScroll) * 100)))
        : 0;
      const showButton = window.scrollY > 480;

      setScrollState((current) => (
        current.progress === progress && current.showButton === showButton
          ? current
          : { progress, showButton }
      ));
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrollState);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <>
      <div
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={scrollState.progress}
        aria-valuetext={`${scrollState.progress}%`}
        className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent"
      >
        <div
          className="h-full origin-left bg-gradient-to-r from-cyan-300 via-cyan-400 to-sky-500 shadow-[0_0_12px_rgb(34_211_238/70%)]"
          style={{ transform: `scaleX(${scrollState.progress / 100})` }}
        />
      </div>
      <button
        type="button"
        onClick={scrollToTop}
        disabled={!scrollState.showButton}
        aria-label="Back to top"
        className={`fixed bottom-24 right-6 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/90 text-navy-900 shadow-lg shadow-navy-900/15 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 focus-visible:outline-offset-4 ${
          scrollState.showButton
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp aria-hidden="true" className="h-5 w-5" />
      </button>
    </>
  );
}
