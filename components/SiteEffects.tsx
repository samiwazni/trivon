"use client";

import { useEffect } from "react";

/**
 * Site-wide behaviour, kept out of the presentational components:
 *  - fades elements with the `reveal` class in as they scroll into view
 *  - pauses the travelling-unit animation when the visitor prefers reduced motion
 *
 * Renders nothing.
 */
export default function SiteEffects() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );
    document
      .querySelectorAll(".reveal:not(.in)")
      .forEach((el) => io.observe(el));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll<SVGSVGElement>("svg.route").forEach((s) => {
        try {
          s.pauseAnimations();
        } catch {}
      });
    }

    return () => io.disconnect();
  }, []);

  return null;
}
