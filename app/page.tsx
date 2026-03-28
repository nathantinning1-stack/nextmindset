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

      {/* SHOPIFY */}
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
              storefrontAccessToken: '91f8904fa25227890c92956b2c2b861e',
            });

            ShopifyBuy.UI.onReady(client).then(function (ui) {
              ui.createComponent('collection', {
                id: '649594601764',
                node: document.getElementById('collection-component'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                  product: {
                    contents: {
                      options: false,
                      buttonWithQuantity: false
                    },
                    buttonDestination: "modal",
                    styles: {
                      product: {
                        "text-align": "left",
                        "margin-bottom": "40px"
                      },
                      title: {
                        "color": "#ffffff"
                      },
                      price: {
                        "color": "#cccccc"
                      },
                      button: {
                        "background": "linear-gradient(135deg, #00cfff, #0077ff)",
                        "border-radius": "8px",
                        "padding": "12px 20px",
                        "font-weight": "600"
                      }
                    },
                    text: {
                      button: "Shop Now"
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
        body {
          margin: 0;
          background: #000;
          font-family: system-ui;
        }

        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          padding-left: 8%;
          color: white;
          position: relative;
          background: url("/run1.jpg") center/cover no-repeat;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0,0,0,0.35),
            rgba(0,0,0,0.1)
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        h1 {
          font-size: 4rem;
        }

        h1 span {
          color: #00cfff;
        }

        .products {
          padding: 80px 8%;
        }
      \`}</style>
    </main>
  );
}
