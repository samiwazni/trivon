import type { ReactNode } from "react";

interface ValueColumn {
  /** small heading above the list, e.g. "For residents" */
  title: string;
  /** the value bullet points */
  items: ReactNode[];
}

export interface ValueColumnsProps {
  columns: ValueColumn[];
}

/**
 * A responsive set of value columns, each with a label and a bulleted list.
 * Used inside a <Chapter> as its children. Styling: .values / .value-col / .value-list.
 */
export default function ValueColumns({ columns }: ValueColumnsProps) {
  return (
    <div className="values reveal d2">
      {columns.map((col, i) => (
        <div className="value-col" key={i}>
          <h3>{col.title}</h3>
          <ul className="value-list">
            {col.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
