export default function Home() {
  return (
    <main style={{ background: "black", color: "white", textAlign: "center", padding: "80px 20px" }}>

      <h1 style={{ fontSize: "48px" }}>
        <span style={{ color: "#4FC3F7" }}>NEXT</span><br />
        MINDSET
      </h1>

      <p style={{ opacity: 0.7, marginTop: "20px" }}>
        Built in discomfort. Worn with purpose.
      </p>

      <a href="https://next-mindset-2.myshopify.com/collections/all">
        <button style={{
          marginTop: "30px",
          padding: "12px 30px",
          border: "1px solid white",
          background: "transparent",
          color: "white",
          cursor: "pointer"
        }}>
          Shop The Mindset
        </button>
      </a>

      <div style={{ marginTop: "60px" }}>
        <img 
          src="https://cdn.shopify.com/s/files/1/0916/2321/6452/files/black-tee-front-back.png"
          style={{ width: "80%", maxWidth: "300px" }}
        />
      </div>

    </main>
  );
}
