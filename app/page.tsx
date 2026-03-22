export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", color: "white", background: "#0a0a0a" }}>

      {/* HERO SECTION */}
      <section style={{ textAlign: "center", padding: "120px 20px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
          NEXT MINDSET
        </h1>

        <p style={{ opacity: 0.7, marginTop: "10px", fontSize: "18px" }}>
          Built through running, fatherhood, and showing up daily.
        </p>

        <a href="https://yourshopifylink.com" target="_blank">
          <button style={{
            marginTop: "30px",
            padding: "12px 30px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
            cursor: "pointer"
          }}>
            Shop Now
          </button>
        </a>
      </section>

      {/* ABOUT / STORY */}
      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "28px" }}>Why I Started</h2>

        <p style={{ maxWidth: "600px", margin: "20px auto", opacity: 0.7 }}>
          This isn’t just about running.
          It’s about showing up when it’s hard.
          Being present as a father.
          And building discipline through discomfort.
        </p>
      </section>

      {/* RUNS SECTION */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px" }}>The Work</h2>

        <div style={{ marginTop: "30px" }}>
          
          <p>7KM Run</p>
          <a href="https://strava.app.link/FtrpswsiI1b" target="_blank">
            View Run
          </a>

          <br /><br />

          <p>Interval Session</p>
          <a href="https://strava.app.link/kYk4zHyiI1b" target="_blank">
            View Run
          </a>

        </div>
      </section>

      {/* BRAND / SHOP */}
      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "28px" }}>The Brand</h2>

        <p style={{ opacity: 0.7, marginTop: "10px" }}>
          Built for people who choose discipline over excuses.
        </p>

        <a href="https://yourshopifylink.com" target="_blank">
          <button style={{
            marginTop: "20px",
            padding: "12px 30px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
            cursor: "pointer"
          }}>
            Visit Store
          </button>
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "40px", textAlign: "center", opacity: 0.5 }}>
        <p>Next Mindset © 2026</p>
      </footer>

    </main>
  );
}