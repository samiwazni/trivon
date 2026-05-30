"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="bar">
        <a className="brandmark" href="#" aria-label="TRIVON — home">
          {/* dark logo → light theme */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="logo logo-dark"
            src="/trivon_marke.png"
            alt="TRIVON"
            onError={(e) =>
              e.currentTarget
                .closest(".brandmark")
                ?.classList.add("logo-missing")
            }
          />
          {/* white logo → dark theme */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="logo logo-white"
            src="/trivon_marke-white.png"
            alt=""
            aria-hidden="true"
          />
          <span className="wordmark-fallback">Trivon</span>
        </a>

        <div className="nav-right">
          <span className="nav-tag">Egypt · MENA</span>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
