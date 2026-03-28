"use client";

import Script from "next/script";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="overlay" />

        <div className="hero-content">
          <h1>
            <span>NEXT</span> MINDSET
          </h1>

          <p className="sub">Start Where You Are</p>
          <p className="small">All you need to do is begin.</p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <div id="collection-component"></div>
      </section>

      {/* SHOPIFY BUY BUTTON */}
      <Script id="shopify-buy" strategy="afterInteractive">
        {`
        (function () {
          var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

          function loadScript() {
            var script = document.createElement('script');
            script.async = true;
            script.src = scriptURL;
            document.head.appendChild(script);
            script.onload = ShopifyBuyInit;
          }

          function ShopifyBuyInit() {
            var client = ShopifyBuy.buildClient({
              domain: 'next-mindset-2.myshopify.com',
              storefrontAccessToken: 'REPLACE_WITH_YOUR_TOKEN',
            });

            ShopifyBuy.UI.onReady(client).then(function (ui) {
              ui.createComponent('collection', {
                id: 'REPLACE_WITH_COLLECTION_ID',
                node: document.getElementById('collection-component'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                  product: {
                    contents: {
                      options: false,
                      buttonWithQuantity: false
                    },
                    styles: {
                      product: {
                        "text-align": "left",
                        "margin-bottom": "40px"
                      },
                      title: {
                        "font-size": "16px",
                        "color": "#ffffff"
                      },
                      price: {
                        "color": "#cccccc"
                      },
                      button: {
                        "background": "linear-gradient(135deg, #00cfff, #0077ff)",
                        "border-radius": "8px",
                        "padding": "12px 20px",
                        "font-weight": "600",
                        "border": "none",
                        "cursor": "pointer"
                      }
                    },
                    text: {
                      button: "Shop Now"
                    }
                  },
                  productSet: {
                    styles: {
                      products: {
                        "@media (min-width: 601px)": {
                          "margin-left": "-20px"
                        }
                      }
                    }
                  }
                }
              });
            });
          }

          if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
              ShopifyBuyInit();
            } else {
              loadScript();
            }
          } else {
            loadScript();
          }
        })();
        `}
      </Script>

      {/* STYLES */}
      <style jsx global>{\`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #000;
          font-family: system-ui, sans-serif;
        }

        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          padding-left: 8%;
          color: white;
          overflow: hidden;

          background: url("/run1.jpg") center/cover no-repeat;
        }

        .overlay {
          position: absolute;
          inset: 0;

          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.35) 0%,
            rgba(0, 0, 0, 0.15) 40%,
            rgba(0, 0, 0, 0.02) 100%
          );

          z-index: 1;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: inherit;
          filter: brightness(1.15) contrast(1.2) saturate(1.2);
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 600px;
        }

        .hero h1 {
          font-size: 4rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-shadow: 0 3px 14px rgba(0,0,0,0.75);
        }

        .hero h1 span {
          color: #00cfff;
        }

        .sub {
          font-size: 1.2rem;
          margin-top: 20px;
          opacity: 0.9;
        }

        .small {
          margin-top: 10px;
          opacity: 0.7;
        }

        .products {
          padding: 80px 8%;
          background: #000;
        }
      \`}</style>
    </main>
  );
}
