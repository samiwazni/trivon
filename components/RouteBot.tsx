/**
 * Animated route with a little autonomous unit travelling along it.
 * Reusable — pass it any path plus its start/end points.
 *
 *   <RouteBot
 *     path="M20,100 C..."
 *     start={[20, 100]}
 *     end={[880, 70]}
 *     viewBox="0 0 900 140"
 *     dur="7s"
 *     className="reveal in d2"
 *   />
 *
 * No JS needed — the motion is SVG (SMIL). SiteEffects pauses it when the
 * visitor prefers reduced motion. Styling lives in globals.css (.route, .r-*).
 */
export type Point = [number, number];

export interface RouteBotProps {
  /** SVG path data the unit travels along */
  path: string;
  /** [x, y] of the origin node */
  start: Point;
  /** [x, y] of the destination node */
  end: Point;
  /** SVG viewBox; match it to the path's coordinate space */
  viewBox?: string;
  /** loop duration, e.g. "7s" */
  dur?: string;
  /** extra classes (e.g. "route-sm reveal d2") */
  className?: string;
}

export default function RouteBot({
  path,
  start,
  end,
  viewBox = "0 0 900 140",
  dur = "7s",
  className = "",
}: RouteBotProps) {
  return (
    <svg
      className={`route ${className}`.trim()}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <path className="r-base" d={path} />
      <path className="r-trail" pathLength={100} d={path} />
      <circle className="r-node" cx={start[0]} cy={start[1]} r="4.6" />
      <circle className="r-node r-dest" cx={end[0]} cy={end[1]} r="4.6" />
      <g className="r-bot">
        <rect x="-9.5" y="-6" width="19" height="11" rx="3.2" />
        <circle className="r-eye" cx="4.8" cy="0" r="1.6" />
        <animateMotion
          dur={dur}
          repeatCount="indefinite"
          rotate="auto"
          path={path}
        />
      </g>
    </svg>
  );
}
