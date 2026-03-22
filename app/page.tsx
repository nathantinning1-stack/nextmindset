"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <main
      style={{
        fontFamily: "sans-serif",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      {/* HERO */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(30px)",
          transition: "all 1s ease",
        }}
      >
        <h1 style={{ fontSize: "52px", marginBottom: "20px" }}>
          Next Mindset
        </h1>

        <p style={{ opacity: 0.7, maxWidth: "500px", marginBottom: "30px" }}>
          Built through running, fatherhood, and showing up daily.
        </p>

        <button
          style={{
            padding: "14px 28px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform =
              "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform =
              "scale(1)";
          }}
        >
          Start Your Journey
        </button>
      </section>

      {/* WHY SECTION */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
            Why I Started
          </h2>

          <p style={{ opacity: 0.7, lineHeight: "1.6" }}>
            This isn’t just about running. It’s about showing up when it’s hard.
            Being present as a father. And building discipline through discomfort.
          </p>
        </div>
      </section>

      {/* RUN CARDS */}
      <section
        style={{
          padding: "100px 20px",
          backgroundColor: "#0a0a0a",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "30px", marginBottom: "40px" }}>
          Recent Runs
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {["7km Night Run", "10km Long Run", "Interval Session"].map(
            (run, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#111",
                  padding: "20px",
                  borderRadius: "12px",
                  width: "250px",
                  textAlign: "left",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-8px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(0px)";
                }}
              >
                <h3>{run}</h3>
                <p style={{ opacity: 0.6 }}>Keep showing up.</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "40px",
          textAlign: "center",
          opacity: 0.5,
        }}
      >
        <p>Next Mindset © 2026</p>
      </footer>
    </main>
  );
}