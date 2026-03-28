"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade");

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
    <main>
      <section className="hero">
        <div className="overlay" />

        <div className="hero-content fade">
          <h1>
            <span>NEXT</span> MINDSET
          </h1>

          <p className="sub">Start Where You Are</p>
          <p className="small">All you need to do is begin.</p>

          <button className="cta">Shop Now</button>
        </div>
      </section>
    </main>
  );
}
