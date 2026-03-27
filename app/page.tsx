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

          <a href="https://www.nextmindsetofficial.com/" className="btn">
            Shop Now
          </a>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className="section fade product-section">
        <div className="product-container">

          <div className="product-image">
            <img src="/shirt1.jpg" alt="Next Mindset Shirt" />
          </div>

          <div className="product-details">
            <h2>Progress Over Perfection Tee</h2>

            <p className="desc">
              Built for movement. Designed for discipline.
            </p>

            <p className="price">$37.00</p>

            <a
              href="https://www.nextmindsetofficial.com/products/progress-over-perfection-t-shirt-next-mindset-motivational-tee"
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

        <a href="https://www.nextmindsetofficial.com/" className="btn">
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
          background: url('/running.jpg.jpg') center/cover no-repeat;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(4px);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          color: white;
        }

        h1 {
          font-size: 56px;
          margin: 0;
        }

        h1 span {
          color: #4FC3F7;
        }

        .sub {
          font-size: 20px;
          margin-top: 10px;
        }

        .small {
          opacity: 0.7;
          margin-top: 10px;
        }

        /* SECTIONS */
        .section {
          padding: 100px 20px;
          text-align: center;
          background: #000;
          color: white;
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
          line-height: 1.6;
          opacity: 0.85;
        }

        /* PRODUCT SECTION */
        .product-container {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .product-image img {
          width: 100%;
          border-radius: 12px;
        }

        .product-details {
          text-align: left;
        }

        .product-details h2 {
          font-size: 36px;
        }

        .product-details .desc {
          margin-top: 15px;
          opacity: 0.8;
        }

        .product-details .price {
          font-size: 22px;
          font-weight: bold;
          margin-top: 15px;
        }

        /* BUTTON */
        .btn {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 25px;
          background: #4FC3F7;
          color: #000;
          font-weight: bold;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
          background: #29B6F6;
        }

        /* ANIMATION */
        .fade {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }

        .fade.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .product-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .product-details {
            text-align: center;
          }

          h1 {
            font-size: 40px;
          }
        }
      `}</style>

    </main>
  );
}
