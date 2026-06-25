import type { ReactNode } from "react";

interface Phase {
  /** the period, e.g. "July 2026" */
  when: string;
  /** the phase name, e.g. "Pilot" */
  title: string;
  /** what happens in this phase */
  body: ReactNode;
}

export interface TimelineProps {
  phases: Phase[];
}

/**
 * A vertical deployment timeline. Used inside a <Chapter> as its children.
 * Styling: .timeline / .tl-item / .tl-when / .tl-title / .tl-body.
 */
export default function Timeline({ phases }: TimelineProps) {
  return (
    <ol className="timeline reveal d2">
      {phases.map((p, i) => (
        <li className="tl-item" key={i}>
          <div className="tl-when">{p.when}</div>
          <div className="tl-title">{p.title}</div>
          <p className="tl-body">{p.body}</p>
        </li>
      ))}
    </ol>
  );
}
