export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "0f0f0f",
      color: "white",
      textAlign: "center",
      padding: "20px"
    }}>
      
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Next Mindset
      </h1>

      <p style={{ fontSize: "20px", maxWidth: "500px", lineHeight: "1.5" }}>
        Discipline. Consistency. Growth.
      </p>

      <p style={{ marginTop: "20px", opacity: 0.7 }}>
        Built through running, fatherhood, and showing up daily.
      </p>

    </main>
  );
}
