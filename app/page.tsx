mport Script from "next/script";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #111 0%, #000 70%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      {/* STRAVA SCRIPT */}
      <Script
        src="https://strava-embeds.com/embed.js"
        strategy="lazyOnload"
      />

      {/* HERO */}
      <section style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          <span style={{ color: "#4FC3F7" }}>NEXT</span> MINDSET
        </h1>

        <p style={{ opacity: 0.8, fontSize: "18px" }}>
          Built Through Discipline
        </p>

        <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
          Early mornings. Empty roads. No shortcuts.
          <br />
          This isn’t just clothing — it’s a mindset.
        </p>

        <a
          href="https://www.nextmindsetofficial.com/"
          style={{
            display: "inline-block",
            marginTop: "25px",
            padding: "12px 25px",
            background: "#4FC3F7",
            color: "#000",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "6px",
          }}
        >
          Shop The Mindset
        </a>
      </section>

      {/* IDENTITY */}
      <section style={{ marginTop: "80px" }}>
        <h2>This Isn’t For Everyone</h2>
        <p style={{ maxWidth: "600px", margin: "20px auto", lineHeight: "1.6" }}>
          This is for the ones who show up when it’s hard.
          <br />
          When everything says stop — but you don’t.
          <br /><br />
          You don’t wait for motivation.
          <br />
          You build discipline.
        </p>
      </section>

      {/* PRODUCT MESSAGE */}
      <section style={{ marginTop: "80px" }}>
        <h2>Progress Over Perfection</h2>
        <p style={{ maxWidth: "600px", margin: "20px auto" }}>
          You don’t need to be perfect.
          <br />
          You just need to keep moving.
        </p>

        <a
          href="https://www.nextmindsetofficial.com/"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 25px",
            background: "#4FC3F7",
            color: "#000",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "6px",
          }}
        >
          Shop Now
        </a>
      </section>

      {/* FEATURES */}
      <section style={{ marginTop: "80px" }}>
        <h2>Built To Go Further</h2>
        <p style={{ lineHeight: "1.8" }}>
          Lightweight & breathable for every run<br />
          Designed for movement, not comfort zones<br />
          Built for discipline — on and off the road
        </p>
      </section>

      {/* FINAL CTA */}
      <section style={{ marginTop: "100px" }}>
        <h2>You Already Know What You Need To Do</h2>
        <p>The only question is — are you doing it?</p>

        <a
          href="https://www.nextmindsetofficial.com/"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "14px 28px",
            background: "#4FC3F7",
            color: "#000",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "6px",
          }}
        >
          Start Now
        </a>
      </section>
    </main>
  );
}
