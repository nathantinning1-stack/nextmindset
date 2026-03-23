export default function Home() {
  return (
    <main
      style={{
        background: "black",
        color: "white",
        textAlign: "center",
        padding: "80px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}
      <section style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "48px", margin: 0 }}>
          <span style={{ color: "#4FC3F7" }}>NEXT</span>
          <br />
          MINDSET
        </h1>

        <p style={{ opacity: 0.7, marginTop: "20px" }}>
          Built in discomfort. Worn with purpose.
        </p>

        <a href="https://next-mindset-2.myshopify.com/collections/all">
          <button
            style={{
              marginTop: "30px",
              padding: "14px 32px",
              border: "1px solid white",
              background: "transparent",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Shop The Mindset
          </button>
        </a>
      </section>

      {/* PRODUCT */}
      <section style={{ marginTop: "80px" }}>
        <img
          src="https://next-mindset-2.myshopify.com/products/black-tee-logo-front-and-back?variant=52011816255780"
          alt="Next Mindset Shirt"
          style={{
            width: "80%",
            maxWidth: "320px",
            borderRadius: "8px",
          }}
        />

        <h2 style={{ marginTop: "20px" }}>
          Black Tee — Front & Back Logo
        </h2>

        <p style={{ opacity: 0.7 }}>
          Built for those who show up when it’s hard.
          <br />
          No shortcuts. No excuses.
        </p>

        <a href="https://next-mindset-2.myshopify.com/collections/all">
          <button
            style={{
              marginTop: "20px",
              padding: "12px 28px",
              border: "1px solid white",
              background: "transparent",
              color: "white",
              cursor: "pointer",
            }}
          >
            View Collection
          </button>
        </a>
      </section>

      {/* STORY */}
      <section style={{ marginTop: "80px", maxWidth: "500px", marginInline: "auto" }}>
        <h2>Why It Exists</h2>

        <p style={{ opacity: 0.7 }}>This started with running.</p>

        <p style={{ opacity: 0.7 }}>
          Early mornings. Sore legs. No motivation.
          <br />
          Just showing up anyway.
        </p>

        <p style={{ opacity: 0.7 }}>
          As a father, discipline isn’t something you talk about.
          <br />
          It’s something you live.
        </p>

        <p style={{ opacity: 0.7 }}>
          Next Mindset is built on that.
        </p>
      </section>
    </main>
  );
}
