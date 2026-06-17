import RouteBot from "./RouteBot";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="eyebrow reveal in">
          Smarter Communities Start Here
        </div>

        <p className="lead reveal in d1">
          Imagine living in a compound that <em>thinks ahead.</em>
        </p>

        <div className="routeline reveal in d2">
          <RouteBot
            path="M20,100 C220,100 240,30 450,30 C660,30 680,110 880,70"
            start={[20, 100]}
            end={[880, 70]}
            viewBox="0 0 900 140"
            dur="7s"
          />
        </div>

        <div className="hero-foot reveal in d2">
          <span className="scrolldown">Scroll</span>
          <span className="ln" />
          <span>Powered & Operated by TRIVON</span>
        </div>
      </div>
    </section>
  );
}
