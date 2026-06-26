import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Chapter from "@/components/Chapter";
import ValueColumns from "@/components/ValueColumns";
import StatRow from "@/components/StatRow";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        <Hero />

        {/* 01 — the scene */}
        <Chapter
          id="scene"
          num="01"
          label="The Scene"
          heading="It’s early evening in Cairo."
        >
          <p className="chap-p reveal d2">
            Families order groceries, medicine and dinner through their compound
            app. Minutes later, a quiet autonomous robot moves safely
            through the community, arriving directly at their doorstep.
          </p>
          <p className="chap-p reveal d2">
            No traffic. No waiting. No delivery chaos. No unnecessary car
            movement inside the compound.
          </p>
          <p className="chap-p reveal d2">
            Children stop and smile as the robot passes. Residents experience
            technology not as something distant &mdash; but as something useful,
            elegant and seamlessly integrated into everyday life.
          </p>
          <p className="chap-p reveal d2">
            <span className="hl">This goes beyond delivery. It is a new urban experience.</span>
          </p>
        </Chapter>

        {/* 02 — the alliance + value */}
        <Chapter
          id="value"
          num="02"
          label="The Value"
          heading="A connected living ecosystem."
        >
          <p className="chap-p reveal d2">
            Together, TRIVON and our robot partners are transforming compounds into
            connected living ecosystems where innovation creates real comfort
            for people.
          </p>
          <ValueColumns
            columns={[
              {
                title: "For residents",
                items: [
                  "Convenience without stress",
                  "A feeling of modernity and prestige",
                  "Safer, quieter communities",
                  "More personal time",
                  "A smarter lifestyle experience",
                ],
              },
              {
                title: "For developers & smart-city operators",
                items: [
                  "Future-ready positioning",
                  "Innovation visibility",
                  "Sustainable mobility solutions",
                  "Operational efficiency",
                  "Stronger resident attraction & retention",
                ],
              },
            ]}
          />
        </Chapter>

        {/* 03 — local execution */}
        <Chapter
          id="ground"
          num="03"
          label="On the Ground"
          heading="We operate this locally. Right now."
          route={{
            path: "M12,98 C52,98 52,28 92,28 C132,28 132,86 160,70",
            start: [12, 98],
            end: [160, 70],
            viewBox: "0 0 172 120",
            dur: "5.5s",
          }}
        >
          <p className="chap-p reveal d2">
            From pilot execution and smart-city coordination to operational
            management and regulatory integration across Egypt and MENA &mdash;
            TRIVON is on the ground.
          </p>
          <p className="chap-p reveal d2">
            Our value is not just technology inside a compound. It is{" "}
            <span className="hl">
              the beginning of a new regional standard for intelligent living.
            </span>
          </p>
          <p className="chap-p reveal d2">
            We&rsquo;ve already mapped the regulatory pathway. We have the team in
            place. We have the compounds ready.
          </p>
        </Chapter>

        {/* 04 — the next generation */}
        <Chapter
          id="next-generation"
          num="04"
          label="The Next Generation"
          heading="The next generation of compound living is starting now."
        >
          <p className="chap-p reveal d2">
            TRIVON and our robot partners are introducing autonomous
            infrastructure designed specifically for smart compounds and future
            cities across Egypt.
          </p>
          <p className="chap-p reveal d2">
            By combining proven autonomous technology with TRIVON’s regional
            implementation expertise, we create scalable ecosystems where
            innovation becomes part of everyday urban life.
          </p>
          <p className="chap-p reveal d2">
            From pilot projects to regulatory integration to full operational
            management &mdash; TRIVON makes autonomous delivery work on the
            ground, in the real world, at scale.
          </p>
        </Chapter>

        {/* 05 — human by design */}
        <Chapter
          id="human"
          num="05"
          label="Human by Design"
          heading="Where smart cities become human."
        >
          <p className="chap-p reveal d2">
            Technology should not feel complicated. It should feel effortless.
          </p>
          <p className="chap-p reveal d2">
            Together, TRIVON and our robot partners create environments where intelligent
            systems reduce stress, simplify daily routines and improve quality
            of life for residents.
          </p>
          <p className="chap-p reveal d2">
            Autonomous delivery becomes more than innovation &mdash; it becomes
            a seamless part of modern living:{" "}
            <span className="hl">quiet, safe, sustainable</span> and designed
            around human convenience.
          </p>
        </Chapter>

        {/* 06 — the alliance / closing */}
        <Chapter
          id="alliance"
          num="06"
          label="The Alliance"
          heading="Powered & Operated by TRIVON."
        >
          <p className="chap-p reveal d2">
            Global autonomous technology requires strong local execution. TRIVON
            acts as the operational and strategic regional partner for Egypt and
            MENA &mdash; coordinating developers, smart-city stakeholders,
            compound operators and regulatory frameworks to ensure successful
            deployment on the ground.
          </p>
          <p className="chap-p reveal d2">
            The result is a scalable regional alliance that transforms visionary
            technology into real-world infrastructure and everyday experience.
          </p>
        </Chapter>

        {/* 07 — the market we have */}
        <Chapter
          id="market"
          num="07"
          label="The Market We Have"
          heading="We have the market. Now we’re looking for the robots."
        >
          <p className="chap-sub reveal d2">Here’s what’s real</p>
          <p className="chap-p reveal d2">
            We&rsquo;ve secured access to 200+ gated compounds across Egypt. 1M+ affluent residents ready for autonomous
            delivery.
          </p>
          <p className="chap-p reveal d2">
            Our developer partnership is confirmed. Our operational team is in
            place. Our regulatory pathway is mapped. July 2026 is locked in.
          </p>
          <p className="chap-p reveal d2">
            <span className="hl">The market is not theoretical. It&rsquo;s ready.</span>
          </p>
          <p className="chap-sub reveal d2">The opportunity</p>
          <p className="chap-p reveal d2">
            Egypt&rsquo;s delivery market is $542.9M. MENA grows at 10% annually.
            Zero autonomous delivery competition exists yet. We are first.
          </p>
          <p className="chap-sub reveal d2">What we need</p>
          <p className="chap-p reveal d2">
            A proven robotics partner ready to deploy and scale with us.
          </p>
          <StatRow
            stats={[
              { value: "$542.9M", label: "Egypt delivery market, 2025" },
              { value: "10%", label: "Annual MENA growth" },
              { value: "200+", label: "Gated compounds" },
              { value: "1M+", label: "Affluent residents" },
            ]}
          />
        </Chapter>

        {/* 08 — the model */}
        <Chapter
          id="model"
          num="08"
          label="The Model"
          heading="You own the robots. We run the ground."
        >
          <p className="chap-p reveal d2">
            A revenue-share partnership with zero capital requirement from the
            robot provider.
          </p>
          <ValueColumns
            columns={[
              {
                title: "What TRIVON has secured (today)",
                items: [
                  "Access to 200+ compounds, 1M+ residents",
                  "Developer partnership confirmed",
                  "Regulatory pathway mapped",
                  "Operational team in place",
                  "July 2026 pilot location confirmed",
                  "Local operations, logistics & customer service",
                  "Maintenance and on-the-ground technical support",
                  "Regulatory coordination and compliance",
                  "Regional expansion path: Egypt → MENA",
                ],
              },
              {
                title: "What we need from you",
                items: [
                  "1–3 autonomous delivery robots for the pilot (you retain ownership)",
                  "Proven autonomous platform & management system",
                  "Technical support and integration assistance",
                  "Scalable deployment infrastructure",
                ],
              },
            ]}
          />
          <p className="chap-p reveal d2">
            <span className="hl">That&rsquo;s it. We handle the rest.</span>
          </p>
        </Chapter>

        {/* 09 — the timeline */}
        <Chapter
          id="timeline"
          num="09"
          label="The Timeline"
          heading="Ready. Let’s go."
          route={{
            path: "M12,98 C52,98 52,28 92,28 C132,28 132,86 160,70",
            start: [12, 98],
            end: [160, 70],
            viewBox: "0 0 172 120",
            dur: "5.5s",
          }}
        >
          <Timeline
            phases={[
              {
                when: "July – August 2026",
                title: "Pilot",
                body: "One robot in one compound. Real-world operational validation. Customer-adoption testing. Market proof-of-concept. This is where we prove it works.",
              },
              {
                when: "August – September 2026",
                title: "Scaling",
                body: "Expansion to multiple compounds. Higher delivery volume. Operational optimisation across the network. We move fast once we know it works.",
              },
              {
                when: "October 2026 onward",
                title: "Regional rollout",
                body: "Full deployment across 20+ compounds. Path into the wider MENA region. This becomes standard.",
              },
            ]}
          />
        </Chapter>

        {/* 10 — how this works */}
        <Chapter
          id="how"
          num="10"
          label="How This Works"
          heading="Built for July."
        >
          <p className="chap-p reveal d2">
            <span className="hl">July is our target.</span> We&rsquo;re built for
            it. Our compounds are ready. Our team is in place.
          </p>
          <p className="chap-p reveal d2">
            If your robot logistics require adjustment, August or September work
            &mdash; but we&rsquo;re built for a July launch.
          </p>
          <p className="chap-p reveal d2">
            The timeline is flexible based on robot-provider logistics. Let&rsquo;s
            work together on what fits. But the market doesn&rsquo;t wait.{" "}
            <span className="hl">Neither do we.</span>
          </p>
        </Chapter>
      </main>

      <Contact />
      <Footer />
      <SiteEffects />
    </>
  );
}
