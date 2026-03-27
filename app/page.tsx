import Script from "next/script";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/running.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          minHeight: "100vh",
          color: "white",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <Script
          src="https://strava-embeds.com/embed.js"
          strategy="lazyOnload"
        />

        <h1 style={{ fontSize: "48px" }}>
          <span style={{ color: "#4FC3F7" }}>NEXT</span> MINDSET
        </h1>

        <p>Built Through Discipline</p>

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
      </div>
    </main>
  );
}
