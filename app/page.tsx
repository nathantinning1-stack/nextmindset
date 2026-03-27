"use client";
import { useEffect } from "react";
import Script from "next/script";

export default function Home() {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "white" }}>

      {/* HERO */}
      <section
        style={{
          height: "100vh",
          backgroundImage: "url('/running.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
          }}
        />

        <div className="fade-in" style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ fontSize: "56px" }}>
            <span style={{ color: "#4FC3F7" }}>NEXT</span> MINDSET
          </h1>

          <p style={{ fontSize: "20px", opacity: 0.9 }}>
            Built Through Discipline
          </p>

          <a
            href="https://www.nextmindsetofficial.com/"
            className="btn"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* IDENTITY */}
      <section className="section fade-in">
        <h2>This Isn’t For Everyone</h2>
        <p>
          This is for the ones who show up when it’s hard.
          When everything says stop — but you don’t.
          <br /><br />
          You don’t wait for motivation.
          You build discipline.
        </p>
      </section>

      {/* PRODUCT */}
      <section className="section dark fade-in">
        <h2>Progress Over Perfection</h2>
        <p>
          You don’t need to be perfect.
          <br />
          You just need to keep moving.
        </p>
      </section>

      {/* FEATURES */}
      <section className="section fade-in">
        <h2>Built To Go Further</h2>
        <p>
          Lightweight & breathable<br />
          Built for movement<br />
          Designed for discipline
        </p>
      </section>

      {/* CTA */}
      <section className="section dark fade-in">
        <h2>You Already Know What You Need To Do</h2>
        <p>The only question is — are you doing it?</p>

        <a
          href="https://www.nextmindsetofficial.com/"
          className="btn"
        >
          Start Now
        </a>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .section {
          padding: 100px 20px;
          text-align: center;
          background: #000;
        }

        .section.dark {
          background: #111;
        }

        h2 {
          font-size: 32px;
          margin-bottom: 20px;
        }

        p {
          max-width: 600px;
          margin: auto;
          opacity: 0.85;
          line-height: 1.6;
        }

        /* BUTTON */
        .btn {
          display: inline-block;
          margin-top: 25px;
          padding: 14px 30px;
          background: #4FC3F7;
          color: #000;
          font-weight: bold;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn:hover {
          transform: translateY(-3px);
          background: #29B6F6;
        }

        /* ANIMATION */
        .fade-in {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease-out;
        }

        .fade-in.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

    </main>
  );
}
