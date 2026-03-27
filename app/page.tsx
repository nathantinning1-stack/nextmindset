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
          <p className="sub">Built Through Discipline</p>
          <p className="small">Running. Fatherhood. Showing up daily.</p>

          <a href="https://www.nextmindsetofficial.com/" className="btn">
            Shop Now
          </a>
        </div>
      </section>

      {/* PRODUCT SECTION 🔥 */}
      <section className="section fade">
        <h2>Featured Product</h2>

        <div className="product-card">
          <div className="image-wrapper">
            <img src="/1000021177.jpg" alt="Next Mindset Shirt" />
          </div>

          <div className="product-info">
            <h3>Progress Over Perfection Tee</h3>
            <p>Built for movement. Designed for discipline.</p>

            <a
              href="https://www.nextmindsetofficial.com/products/progress-over-perfection-t-shirt-next-mindset-motivational-tee"
              className="btn"
            >
              View Product
            </a>
          </div>
        </div>
      </section>

      {/* IDENTITY */}
      <section className="section dark fade">
        <h2>This Isn’t For Everyone</h2>
        <p>
          This is for the ones who show up when it’s hard.
          When everything says stop — but you don’t.
          <br /><br />
          You don’t wait for motivation.
          You build discipline.
        </p>
      </section>

      {/* CTA */}
      <section className="section fade">
        <h2>You Already Know What You Need To Do</h2>
        <p>The only question is — are you doing it?</p>

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

        /* SECTION */
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
          margin-bottom: 30px;
        }

        p {
          max-width: 600px;
          margin: auto;
          opacity: 0.85;
        }

        /* PRODUCT CARD 🔥 */
        .product-card {
          max-width: 400px;
          margin: auto;
          background: #111;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          transition: transform 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-8px);
        }

        .image-wrapper {
          overflow: hidden;
        }

        .image-wrapper img {
          width: 100%;
          display: block;
          transition: transform 0.4s ease;
        }

        .product-card:hover img {
          transform: scale(1.05);
        }

        .product-info {
          padding: 20px;
        }

        .product-info h3 {
          margin: 10px 0;
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
      `}</style>

    </main>
  );
}
