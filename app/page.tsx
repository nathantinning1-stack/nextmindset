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
        <h1 style={{ fontSize: "56px", margin: 0 }}>
          <span style={{ color: "#4FC3F7" }}>NEXT</span>
          <br />
          MINDSET
        </h1>

        <p style={{ opacity: 0.7, marginTop: "20px", fontSize: "18px" }}>
          Progress Over Perfection.
        </p>

        <a href="https://next-mindset-2.myshopify.com/products/progress-over-perfection-t-shirt-next-mindset-motivational-tee?variant=52029442621732">
          <button
            style={{
              marginTop: "30px",
              padding: "14px 36px",
              border: "1px solid #4FC3F7",
              background: "transparent",
              color: "#4FC3F7",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Buy Now
          </button>
        </a>
      </section>

      {/* PRODUCT */}
      <section style={{ marginTop: "80px" }}>
        <img
          src="https://next-mindset-2.myshopify.com/products/kids-t-shirt-progress-over-perfection-motivational-tee-next-mindset?variant=52040140128548"
          alt="Next Mindset Shirt"
          style={{
            width: "90%",
            maxWidth: "360px",
            borderRadius: "12px",
            boxShadow: "0 0 40px rgba(79,195,247,0.2)",
          }}
        />

        <h2 style={{ marginTop: "30px" }}>
          Progress Over Perfection Tee
        </h2>

        <p style={{ opacity: 0.7, maxWidth: "400px", margin: "10px auto" }}>
          A reminder to show up every day.
          <br />
          Not perfect — just consistent.
        </p>

        <a href="https://next-mindset-2.myshopify.com/products/progress-over-perfection-t-shirt-next-mindset-motivational-tee?variant=52029442621732">
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
            View Product
          </button>
        </a>
      </section>

      {/* DIVIDER */}
      <div
        style={{
          margin: "80px auto",
          width: "60px",
          height: "2px",
          background: "#4FC3F7",
          opacity: 0.5,
        }}
      />

      {/* STORY */}
      <section style={{ maxWidth: "500px", margin: "0 auto" }}>
        <h2>Why It Exists</h2>

        <p style={{ opacity: 0.7 }}>
          This started with running.
        </p>

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
