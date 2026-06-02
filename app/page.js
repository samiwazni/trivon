"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);

  // sync state with whatever the no-flash script set
  useEffect(() => {
    const t = document.documentElement.getAttribute("data-theme") || "light";
    setTheme(t);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("trivon-theme", next);
    } catch {}
  };

  // nav border on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // reveal on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.16 }
    );
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));

    // respect reduced motion for the travelling bot (SMIL)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll("svg.route").forEach((s) => {
        try {
          s.pauseAnimations();
        } catch {}
      });
    }

    return () => io.disconnect();
  }, []);

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="bar">
          <div className="wordmark">Trivon</div>
          <div className="nav-right">
            <span className="nav-tag">Egypt · MENA</span>
            <button
              className="toggle"
              onClick={toggleTheme}
              aria-label="Toggle light and dark mode"
            >
              <svg
                className="icon-sun"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="4.2" />
                <path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7" />
              </svg>
              <svg
                className="icon-moon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 14.5A8 8 0 0 1 9.5 4 7 7 0 1 0 20 14.5z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="wrap">
            <div className="eyebrow reveal in">
              Autonomous infrastructure · Egypt &amp; MENA
            </div>
            <p className="lead reveal in d1">
              We&rsquo;re building the layer the modern city runs on. It begins
              the moment the things you need{" "}
              <em>find their own way to you</em> &mdash; and it does not stop
              there.
            </p>
            <div className="routeline reveal in d2" aria-hidden="true">
              <svg
                className="route"
                viewBox="0 0 900 140"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  className="r-base"
                  d="M20,100 C220,100 240,30 450,30 C660,30 680,110 880,70"
                />
                <path
                  className="r-trail"
                  pathLength="100"
                  d="M20,100 C220,100 240,30 450,30 C660,30 680,110 880,70"
                />
                <circle className="r-node" cx="20" cy="100" r="4.6" />
                <circle className="r-node r-dest" cx="880" cy="70" r="4.6" />
                <g className="r-bot">
                  <rect x="-10" y="-6.5" width="20" height="11" rx="3.4" />
                  <circle className="r-eye" cx="5" cy="0" r="1.7" />
                  <animateMotion
                    dur="7s"
                    repeatCount="indefinite"
                    rotate="auto"
                    path="M20,100 C220,100 240,30 450,30 C660,30 680,110 880,70"
                  />
                </g>
              </svg>
            </div>
            <div className="hero-foot reveal in d2">
              <span className="scrolldown">Scroll</span>
              <span className="ln" />
              <span>Est. 2026 — a Tekniikkatie venture</span>
            </div>
          </div>
        </section>

        <section className="chapter" id="horizon">
          <div className="ghostnum" aria-hidden="true">
            01
          </div>
          <div className="wrap">
            <div className="chap-grid">
              <div className="label reveal">
                <span className="n">01</span> &mdash; The Horizon
              </div>
              <div className="chap-body">
                <h2 className="chap-h reveal d1">
                  The city is about to run itself.
                </h2>
                <p className="chap-p reveal d2">
                  The next decade quietly hands the city over to systems that
                  serve it &mdash; streets that deliver themselves, homes that
                  anticipate, intelligence that disappears into the walls.{" "}
                  <span className="hl">
                    We are not waiting for that world to arrive.
                  </span>{" "}
                  We are building the layer it will run on, in the
                  region&rsquo;s new cities &mdash; the places already
                  engineered for exactly this &mdash; and we are building it
                  first.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="chapter" id="work">
          <div className="ghostnum" aria-hidden="true">
            02
          </div>
          <div className="wrap">
            <div className="chap-grid">
              <div className="chap-aside">
                <div className="label reveal">
                  <span className="n">02</span> &mdash; The Work
                </div>
                <svg
                  className="route route-sm reveal d2"
                  viewBox="0 0 172 120"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                >
                  <path
                    className="r-base"
                    d="M12,98 C52,98 52,28 92,28 C132,28 132,86 160,70"
                  />
                  <path
                    className="r-trail"
                    pathLength="100"
                    d="M12,98 C52,98 52,28 92,28 C132,28 132,86 160,70"
                  />
                  <circle className="r-node" cx="12" cy="98" r="4.4" />
                  <circle className="r-node r-dest" cx="160" cy="70" r="4.4" />
                  <g className="r-bot">
                    <rect x="-9" y="-6" width="18" height="10" rx="3" />
                    <circle className="r-eye" cx="4.5" cy="0" r="1.5" />
                    <animateMotion
                      dur="5.5s"
                      repeatCount="indefinite"
                      rotate="auto"
                      path="M12,98 C52,98 52,28 92,28 C132,28 132,86 160,70"
                    />
                  </g>
                </svg>
              </div>
              <div className="chap-body">
                <h2 className="chap-h reveal d1">Delivery is the beachhead.</h2>
                <p className="chap-p reveal d2">
                  Every platform begins with one habit it makes perfect. Ours is
                  the last mile &mdash; silent autonomous units that make
                  delivery instant and effortless across the region&rsquo;s
                  smart communities. But the robot at your door is a foothold,
                  not the finish. Behind it we lay the rails &mdash;{" "}
                  <span className="hl">
                    the relationships, the infrastructure, the trust
                  </span>{" "}
                  &mdash; that turn a community into a connected, self-running
                  place to live. Own that layer, and everything that comes next
                  plugs into it.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="row">
            <div className="f-word">Trivon</div>
            <div className="f-meta">
              A Tekniikkatie venture · working title
              <br />
              Egypt · New Cairo · MENA
              <br />
              &copy; 2026
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
