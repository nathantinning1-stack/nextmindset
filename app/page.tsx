"use client";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="overlay" />

        <div className="hero-content">
          <h1>
            <span>NEXT</span> MINDSET
          </h1>

          <p className="sub">Start Where You Are</p>
          <p className="small">All you need to do is begin.</p>

          <a
            href="https://next-mindset-2.myshopify.com/collections/all"
            target="_blank"
            rel="noopener noreferrer"
            className="cta"
          >
            Shop Now
          </a>
        </div>
      </section>

      <section className="products">
        <div id="collection-component"></div>
      </section>
    </main>
  );
}
