"use client";
export default function Home() {
  return (
    <>
      {/* HERO */}
      <main
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#0a0a0a",
          color: "#ffffff",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "56px", marginBottom: "16px" }}>
          Next Mindset
        </h1>

        <p style={{ fontSize: "20px", opacity: 0.7 }}>
          Built through discipline, not motivation.
        </p>

        <button
          onClick={() =>
            document
              .getElementById("journey")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          style={{
            marginTop: "40px",
            padding: "16px 32px",
            borderRadius: "10px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            backgroundColor: "#fff",
            color: "#000",
          }}
        >
          See The Journey
        </button>
      </main>

      {/* JOURNEY TIMELINE */}
      <section
        id="journey"
        style={{
          padding: "120px 20px",
          backgroundColor: "#111",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>
            The Journey
          </h2>

          <p style={{ opacity: 0.7, marginBottom: "40px" }}>
            Progress isn’t linear. Some days feel strong. Others don’t. But every
            step counts.
          </p>

          <div style={{ textAlign: "left", lineHeight: "1.8" }}>
            <p>• Started with short runs and injuries</p>
            <p>• Built consistency week by week</p>
            <p>• Pushed past 100km in a single month</p>
            <p>• Training toward marathon distance</p>
          </div>
        </div>
      </section>

      {/* FEATURED RUN */}
      <section
        style={{
          padding: "120px 20px",
          backgroundColor: "#0a0a0a",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
            Featured Run
          </h2>

          <h3 style={{ fontSize: "36px", marginBottom: "10px" }}>
            7km Night Run
          </h3>

          <p style={{ opacity: 0.7 }}>
            Shins were sore. Downhills hurt. But I kept going. Not every run
            feels good — but that’s where the real work happens.
          </p>
        </div>
      </section>

      {/* MINDSET */}
      <section
        style={{
          padding: "120px 20px",
          backgroundColor: "#111",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
            The Mindset
          </h2>

          <p style={{ lineHeight: "1.8", opacity: 0.8 }}>
            It’s not about motivation. Motivation fades. Discipline stays. The
            goal isn’t to feel ready — it’s to show up anyway.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "120px 20px",
          backgroundColor: "#0a0a0a",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Follow The Process</h2>

        <button
          style={{
            padding: "16px 32px",
            borderRadius: "10px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            backgroundColor: "#fff",
            color: "#000",
          }}
        >
          View All Runs
        </button>
      </section>
    </>
  );
}