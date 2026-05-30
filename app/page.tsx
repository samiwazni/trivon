import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Chapter from "@/components/Chapter";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        <Hero />

        <Chapter
          id="horizon"
          num="01"
          label="The Horizon"
          heading="The city is about to run itself."
        >
          <p className="chap-p reveal d2">
            The next decade quietly hands the city over to systems that serve it
            &mdash; streets that deliver themselves, homes that anticipate,
            intelligence that disappears into the walls.{" "}
            <span className="hl">
              We are not waiting for that world to arrive.
            </span>{" "}
            We are building the layer it will run on, in the region&rsquo;s new
            cities &mdash; the places already engineered for exactly this &mdash;
            and we are building it first.
          </p>
        </Chapter>

        <Chapter
          id="work"
          num="02"
          label="The Work"
          heading="Delivery is the beachhead."
          route={{
            path: "M12,98 C52,98 52,28 92,28 C132,28 132,86 160,70",
            start: [12, 98],
            end: [160, 70],
            viewBox: "0 0 172 120",
            dur: "5.5s",
          }}
        >
          <p className="chap-p reveal d2">
            Every platform begins with one habit it makes perfect. Ours is the
            last mile &mdash; silent autonomous units that make delivery instant
            and effortless across the region&rsquo;s smart communities. But the
            robot at your door is a foothold, not the finish. Behind it we lay
            the rails &mdash;{" "}
            <span className="hl">
              the relationships, the infrastructure, the trust
            </span>{" "}
            &mdash; that turn a community into a connected, self-running place to
            live. Own that layer, and everything that comes next plugs into it.
          </p>
        </Chapter>
      </main>

      <Footer />
      <SiteEffects />
    </>
  );
}
