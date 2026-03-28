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

      {/* HERO */}
      <section className="hero">
        <div className="overlay" />

        <div className="hero-content fade">
          <h1><span>NEXT</span> MINDSET</h1>

          <p className="sub">Start Where You Are</p>
          <p className="small">All you need to do is begin.</p>

          {/* ✅ FIXED SHOP LINK */}
          <a
            href="https://next-mindset-2.myshopify.com/products/progress-over-perfection-t-shirt-next-mindset-motivational-tee"
            className="btn"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className="section fade product-section">
        <div className="product-container">

          <div className="product-image">
            <img src="/shirt.jpeg" alt="Next Mindset Shirt" />
          </div>

          <div className="product-details">
            <h2>Progress Over Perfection Tee</h2>

            <p className="desc">
              Built for movement. Designed for discipline.
            </p>

            <p className="price">$32.00</p>

            <a
              href="https://next-mindset-2.myshopify.com/products/progress-over-perfection-t-shirt-next-mindset-motivational-tee"
              className="btn"
            >
              View Product
            </a>
          </div>

        </div>
      </section>

      {/* INSPIRATION SECTION */}
      <section className="section dark fade">
        <h2>This Is For You</h2>
        <p>
          This is for anyone ready to start.<br />
          You don’t need to be perfect. You don’t need to be ready.<br /><br />
          You just need to begin.<br /><br />
          Small progress is still progress.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="section fade">
        <h2>All You Need To Do Is Start</h2>
        <p>
          You don’t need motivation.<br />
          You don’t need the perfect plan.<br /><br />
          Just take the first step.<br /><br />
          Small progress is still progress.
        </p>

        <a
          href="https://next-mindset-2.myshopify.com/products/progress-over-perfection-t-shirt-next-mindset-motivational-tee"
          className="btn"
        >
          Start Now
        </a>
      </section>

      {/* STYLES */}
      <style jsx>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

        /* HERO */
        .hero {
          height: 100vh;
          background: url('/running.jpg') center/cover no-repeat;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(3px);

          /* ✅ FIX CLICK ISSUE */
          pointer-events: none;
          z
