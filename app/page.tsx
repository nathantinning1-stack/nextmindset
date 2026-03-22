"use client";

import { useEffect, useRef, useState } from "react";

function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.8s ease",
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 600;

  return (
    <main style={{ backgroundColor: "#000", color: "#fff", fontFamily: "sans-serif" }}>
      
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: isMobile ? "40px 20px" : "20px",
        }}
      >
        <h1 style={{ fontSize: isMobile ? "36px" : "56px", marginBottom: "16px" }}>
          Next Mindset
        </h1>

        <p style={{ opacity: 0.7, maxWidth: "500px", fontSize: isMobile ? "16px" : "20px" }}>
          Built through running, fatherhood, and showing up daily.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "14px 28px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer",
            width: isMobile ? "100%" : "auto",
            maxWidth: "300px",
          }}
        >
          Start Your Journey
        </button>
      </section>

      {/* WHY */}
      <FadeInSection>
        <section style={{ padding: isMobile ? "60px 20px" : "100px 20px", textAlign: "center" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2 style={{ fontSize: isMobile ? "24px" : "30px" }}>
              Why I Started
            </h2>

            <p style={{ opacity: 0.7, lineHeight: "1.6", marginTop: "10px" }}>
              This isn’t just about running. It’s about showing up when it’s hard.
              Being present as a father. And building discipline through discomfort.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* RUNS */}
      <FadeInSection>
        <section
          style={{
            padding: isMobile ? "60px 20px" : "100px 20px",
            backgroundColor: "#0a0a0a",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: isMobile ? "24px" : "30px", marginBottom: "30px" }}>
            Recent Runs
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "20px",
              alignItems: "center",
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
                    width: isMobile ? "100%" : "250px",
                    textAlign: "left",
                  }}
                >
                  <h3>{run}</h3>
                  <p style={{ opacity: 0.6 }}>Keep showing up.</p>
                </div>
              )
            )}
          </div>
        </section>
      </FadeInSection>

      {/* FEATURE */}
      <FadeInSection>
        <section style={{ padding: isMobile ? "60px 20px" : "100px 20px", textAlign: "center" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2 style={{ fontSize: isMobile ? "24px" : "28px" }}>
              101km in March
            </h2>

            <p style={{ opacity: 0.7, marginTop: "10px" }}>
              The goal was 86km. I pushed further. This wasn’t about distance —
              it was about proving I don’t stop when it gets hard.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* FOOTER */}
      <footer style={{ padding: "40px", textAlign: "center", opacity: 0.5 }}>
        <p>Next Mindset © 2026</p>
      </footer>
    </main>
  );
}