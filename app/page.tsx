export default function Home() {
  return (
    <main
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        Next Mindset
      </h1>

      <p style={{ fontSize: "18px", color: "#555" }}>
        Built through running, fatherhood, and showing up daily.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "14px 28px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Start Your Journey
      </button>
    </main>
  );
}