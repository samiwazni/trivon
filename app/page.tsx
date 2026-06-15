import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Chapter from "@/components/Chapter";
import ValueColumns from "@/components/ValueColumns";
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
            app. Minutes later, a quiet autonomous Starship robot moves safely
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
            Together, TRIVON and Starship are transforming compounds into
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
          heading="We operates this locally."
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
            management and regulatory integration across Egypt and MENA.
          </p>
          <p className="chap-p reveal d2">
            Our value is not just technology inside a compound. It is{" "}
            <span className="hl">
              the beginning of a new regional standard for intelligent living.
            </span>
          </p>
        </Chapter>

        {/* 04 — the next generation */}
        <Chapter
          id="next-generation"
          num="04"
          label="The Next Generation"
          heading="The next generation of compound living."
        >
          <p className="chap-p reveal d2">
            TRIVON and Starship are introducing the next generation of
            autonomous infrastructure designed specifically for smart compounds
            and future cities across Egypt and the MENA region.
          </p>
          <p className="chap-p reveal d2">
            By combining Starship’s proven autonomous technology with TRIVON’s
            regional implementation expertise, we create scalable ecosystems
            where innovation becomes part of everyday urban life.
          </p>
          <p className="chap-p reveal d2">
            From pilot projects and regulatory integration to full operational
            management, TRIVON enables the successful regional rollout of
            autonomous delivery solutions built for the future of connected
            communities.
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
            Together, TRIVON and Starship create environments where intelligent
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
          heading="Powered by Starship. Operated by TRIVON."
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
      </main>

      <Footer />
      <SiteEffects />
    </>
  );
}
