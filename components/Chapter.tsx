import type { ReactNode } from "react";
import RouteBot, { type Point } from "./RouteBot";

interface ChapterRoute {
  path: string;
  start: Point;
  end: Point;
  viewBox: string;
  dur: string;
}

export interface ChapterProps {
  /** anchor id for the section, e.g. "horizon" */
  id: string;
  /** the chapter number, e.g. "01" */
  num: string;
  /** the short label, e.g. "The Horizon" */
  label: string;
  /** the large heading line */
  heading: string;
  /** optional travelling unit shown beside the label */
  route?: ChapterRoute;
  /** body copy (usually one or more <p className="chap-p reveal d2">) */
  children: ReactNode;
}

/**
 * A numbered chapter section. Reusable — add more sections by dropping another
 * <Chapter> into page.tsx.
 *
 *   <Chapter id="horizon" num="01" label="The Horizon"
 *            heading="The city is about to run itself.">
 *     <p className="chap-p reveal d2">Body copy…</p>
 *   </Chapter>
 */
export default function Chapter({
  id,
  num,
  label,
  heading,
  route,
  children,
}: ChapterProps) {
  return (
    <section className="chapter" id={id}>
      <div className="ghostnum" aria-hidden="true">
        {num}
      </div>
      <div className="wrap">
        <div className="chap-grid">
          <div className="chap-aside">
            <div className="label reveal">
              <span className="n">{num}</span> &mdash; {label}
            </div>
            {route && (
              <RouteBot
                className="route-sm reveal d2"
                path={route.path}
                start={route.start}
                end={route.end}
                viewBox={route.viewBox}
                dur={route.dur}
              />
            )}
          </div>
          <div className="chap-body">
            <h2 className="chap-h reveal d1">{heading}</h2>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
