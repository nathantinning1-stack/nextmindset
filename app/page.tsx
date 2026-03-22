export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0f0f0f",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        Next Mindset
      </h1>

      <p style={{ fontSize: "18px", color: "#aaa", maxWidth: "500px" }}>
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
          fontSize: "16px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Start Your Journey
      </button>
    </main>
  );
}