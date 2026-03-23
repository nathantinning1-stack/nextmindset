export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #111 0%, #000 70%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "80px 20px",
      }}
    >
      {/* HERO */}
      <section style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "64px", margin: 0, letterSpacing: "2px" }}>
          <span style={{ color: "#4FC3F7" }}>NEXT</span>
          <br />
          MINDSET
        </h1>

        <p
          style={{
            opacity: 0.6,
            marginTop: "20px",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          Built in discomfort.
          <br />
          Worn with purpose.
        </p>

        <a href="https://next-mindset-2.myshopify.com/collections/all">
          <button
            style={{
              marginTop: "35px",
              padding: "14px 40px",
              border: "1px solid #4FC3F7",
              background: "transparent",
              color: "#4FC3F7",
              fontSize: "16px",
              letterSpacing: "1px",
              cursor: "pointer",
            }}
          >
            SHOP THE MINDSET
          </button>
        </a>
      </section>

      {/* VIRAL PROOF */}
      <section
        style={{
          marginTop: "100px",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2 style={{ fontSize: "28px" }}>
          The Work Speaks
        </h2>

        <p style={{ opacity: 0.6, marginTop: "10px" }}>
          No motivation. Just discipline.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "15px",
            marginTop: "30px",
          }}
        >
          <video
            src="/run1.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", borderRadius: "10px" }}
          />

          <video
            src="/run2.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        <p style={{ opacity: 0.6, marginTop: "20px", fontSize: "14px" }}>
          They won’t see the early mornings.
          <br />
          They won’t feel the sore legs.
          <br />
          But they’ll see the results.
        </p>
      </section>

      {/* PRODUCT */}
      <section
        style={{
          marginTop: "100px",
          maxWidth: "500px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2 style={{ fontSize: "28px" }}>
          Progress Over Perfection Tee
        </h2>

        <p style={{ opacity: 0.6, marginTop: "15px", lineHeight: "1.6" }}>
          Built for those who show up when it’s hard.
          <br />
          No shortcuts. No excuses.
        </p>

        <a href="https://next-mindset-2.myshopify.com/products/progress-over-perfection-t-shirt-next-mindset-motivational-tee?variant=52029442621732">
          <button
            style={{
              marginTop: "25px",
              padding: "12px 30px",
              border: "1px solid white",
              background: "transparent",
              color: "white",
              cursor: "pointer",
            }}
          >
            VIEW PRODUCT
          </button>
        </a>
      </section>

      {/* DIVIDER */}
      <div
        style={{
          margin: "100px auto",
          width: "60px",
          height: "2px",
          background: "#4FC3F7",
          opacity: 0.5,
        }}
      />

      {/* STORY */}
      <section style={{ maxWidth: "500px", margin: "0 auto" }}>
        <h2>Why I Started</h2>

        <p style={{ opacity: 0.6, marginTop: "15px" }}>
          This started with running.
        </p>

        <p style={{ opacity: 0.6 }}>
          Early mornings. Sore legs. No motivation.
          <br />
          Just showing up anyway.
        </p>

        <p style={{ opacity: 0.6 }}>
          As a father, discipline isn’t something you talk about.
          <br />
          It’s something you live.
        </p>

        <p style={{ opacity: 0.6 }}>
          Next Mindset is built on that.
        </p>
      </section>

      {/* FINAL CTA */}
      <section style={{ marginTop: "100px" }}>
        <h2>Join The Mindset</h2>

        <a href="https://next-mindset-2.myshopify.com/collections/all">
          <button
            style={{
              marginTop: "20px",
              padding: "14px 40px",
              border: "1px solid #4FC3F7",
              background: "#4FC3F7",
              color: "black",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            START NOW
          </button>
        </a>
      </section>
    </main>
  );
}
