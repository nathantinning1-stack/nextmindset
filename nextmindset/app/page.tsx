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
        color: "white",
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Next Mindset
      </h1>

      <p
        style={{
          fontSize: "20px",
          maxWidth: "500px",
          lineHeight: "1.5",
        }}
      >
        Discipline. Consistency. Growth.
      </p>

      <p
        style={{
          marginTop: "20px",
          opacity: 0.7,
          fontSize: "16px",
        }}
      >
        Built through running, fatherhood, and showing up daily.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "12px 24'px",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
          fontWeight: "bold",
          backgroundColor: "#fof0f0"
        }}
      >
        Start Your Journey
      </button>
    </main>
  );
}
