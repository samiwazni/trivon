import type { ReactNode } from "react";

interface Stat {
  /** the figure, e.g. "$542.9M" */
  value: string;
  /** the caption beneath it */
  label: ReactNode;
}

export interface StatRowProps {
  stats: Stat[];
}

/**
 * A row of headline figures. Used inside a <Chapter> as its children.
 * Styling: .stats / .stat / .stat-v / .stat-l.
 */
export default function StatRow({ stats }: StatRowProps) {
  return (
    <div className="stats reveal d2">
      {stats.map((s, i) => (
        <div className="stat" key={i}>
          <div className="stat-v">{s.value}</div>
          <div className="stat-l">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
