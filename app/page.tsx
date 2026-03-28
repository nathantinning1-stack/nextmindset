"use client";

import Script from "next/script";

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

          {/* 🔥 SHOPIFY BUY BUTTON */}
          <div id="product-component"></div>
        </div>
      </section>

      {/* 🔥 SHOPIFY SCRIPT */}
      <Script id="shopify-buy-button" strategy="afterInteractive">
        {`
          (function () {
            var client = ShopifyBuy.buildClient({
              domain: 'next-mindset-2.myshopify.com',
              storefrontAccessToken: 'YOUR_STOREFRONT_TOKEN'
            });

            ShopifyBuy.UI.onReady(client).then(function (ui) {
              ui.createComponent('product', {
                id: 'YOUR_PRODUCT_ID',
                node: document.getElementById('product-component'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                  product: {
                    styles: {
                      product: {
                        "@media (min-width: 601px)": {
                          "max-width": "250px",
                          "margin-left": "0"
                        }
                      },
                      button: {
                        "background": "linear-gradient(135deg, #00cfff, #0077ff)",
                        "border-radius": "8px",
                        "padding": "14px 28px",
                        "font-weight": "600"
                      }
                    },
                    buttonDestination: "checkout",
                    contents: {
                      img: false,
                      title: false,
                      price: false
                    },
                    text: {
                      button: "Shop Now"
                    }
                  }
                }
              });
            });
          })();
        `}
      </Script>
    </main>
  );
}
