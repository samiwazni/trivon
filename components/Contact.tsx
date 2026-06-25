/**
 * Closing partnership call-to-action. Self-contained section (not a Chapter).
 * Styling: .cta / .cta-* in globals.css.
 */
export default function Contact() {
  return (
    <section className="cta" id="partner">
      <div className="wrap">
        <div className="cta-eyebrow reveal">Partnership inquiries</div>
        <h2 className="cta-h reveal d1">
          We have the market. We&rsquo;re looking for the robots.
        </h2>
        <p className="cta-p reveal d2">
          If your company operates proven autonomous delivery robots and is ready
          to expand into one of the world&rsquo;s largest emerging markets, let&rsquo;s talk.
        </p>
        <div className="cta-links reveal d2">
          <a className="cta-link" href="mailto:partnerships@trivon.vip">
            partnerships@trivon.vip
          </a>
          <a className="cta-link" href="tel:+358449899939">
            +358 44 989 9939
          </a>
        </div>
      </div>
    </section>
  );
}
