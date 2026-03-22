export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f0f0f",
        color: "#fff",
        fontFamily: "Arial",
      }}
    >
      {/* HERO */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "48px" }}>Next Mindset</h1>
        <p style={{ color: "#aaa" }}>
          Built through running, fatherhood, and showing up daily.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "14px 28px",
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Start Your Journey
        </button>
      </div>

      {/* ABOUT SECTION */}
      <div
        style={{
          padding: "60px 20px",
          textAlign: "center",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <h2>Why I Started</h2>
        <p style={{ color: "#aaa", marginTop: "10px" }}>
          This isn’t just about running.
          It’s about showing up when it’s hard.
          Being present as a father.
          And building discipline through discomfort.
        </p>
      </div>
    </main>
  );
}
