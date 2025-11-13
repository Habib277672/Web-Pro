import React from "react";

export function Hero() {
  return (
    <>
      <style>
        {`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* --- General Utilities --- */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
          width: 100%;
        }

        /* --- Hero Section Styling --- */
        .hero {
          position: relative;
          width: 100%;
          min-height: 550px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          background-image: url('hero-img.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: #fff;
          padding: 80px 0;
          overflow: hidden;
        }

        /* Dark Green Overlay */
        .hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(6, 129, 73, 0.98) 0%,
            rgba(6, 129, 73, 0.8) 40%,
            rgba(6, 129, 73, 0.4) 70%,
            rgba(6, 129, 73, 0) 100%
          );
          z-index: 1;
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1000px;
          padding: 0 20px;
        }

        .hero-text {
          max-width: 800px;
          width: 100%;
        }

        .hero-text h1 {
          color: #fff;
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          word-wrap: break-word;
        }

        .hero-divider {
          width: 120px;
          border: none;
          border-top: 3px solid #fff;
          margin: 1.5rem 0 2rem 0;
        }

        .hero-text p {
          color: #fff;
          font-size: 1.4rem;
          line-height: 1.6;
          margin-bottom: 0;
          max-width: 550px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          word-wrap: break-word;
        }

        .hero-text .heart-icon {
          color: #ff6b6b;
          font-size: 1.1em;
          vertical-align: middle;
          margin: 0 2px;
        }

        /* --- Large Screens (1025px+) --- */
        @media (min-width: 1025px) {
          .hero {
            min-height: 550px;
            padding: 80px 0;
          }

          .hero-text h1 {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
          }

          .hero-text p {
            font-size: 1.4rem;
          }

          .hero-divider {
            width: 120px;
            margin: 1.5rem 0 2rem 0;
          }
        }

        /* --- Tablets (769px to 1024px) --- */
        @media (max-width: 1024px) and (min-width: 769px) {
          .hero {
            min-height: 480px;
            padding: 60px 0;
          }

          .hero-inner {
            padding: 0 30px;
          }

          .hero-text h1 {
            font-size: 3rem;
            margin-bottom: 1.3rem;
          }

          .hero-text p {
            font-size: 1.2rem;
          }

          .hero-divider {
            width: 100px;
            margin: 1.3rem 0 1.8rem 0;
          }
        }

        /* --- Medium Tablets (641px to 768px) --- */
        @media (max-width: 768px) and (min-width: 641px) {
          .hero {
            min-height: 420px;
            padding: 50px 0;
          }

          .hero-inner {
            padding: 0 25px;
          }

          .hero-text h1 {
            font-size: 2.5rem;
            margin-bottom: 1.2rem;
          }

          .hero-text p {
            font-size: 1.1rem;
            line-height: 1.5;
          }

          .hero-divider {
            width: 90px;
            border-top: 2px solid #fff;
            margin: 1.2rem 0 1.5rem 0;
          }
        }

        /* --- Small Tablets & Large Mobile (481px to 640px) --- */
        @media (max-width: 640px) and (min-width: 481px) {
          .hero {
            min-height: 380px;
            padding: 40px 0;
          }

          .hero-inner {
            padding: 0 20px;
          }

          .hero-text h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
            line-height: 1.3;
          }

          .hero-text p {
            font-size: 0.95rem;
            line-height: 1.5;
          }

          .hero-divider {
            width: 80px;
            border-top: 2px solid #fff;
            margin: 1rem 0 1.3rem 0;
          }
        }

        /* --- Mobile Phones (360px to 480px) --- */
        @media (max-width: 480px) {
          .hero {
            min-height: 350px;
            padding: 35px 0;
            background-attachment: scroll;
          }

          .hero-inner {
            padding: 0 16px;
          }

          .hero-text h1 {
            font-size: 1.75rem;
            margin-bottom: 0.9rem;
            line-height: 1.3;
          }

          .hero-text p {
            font-size: 0.9rem;
            line-height: 1.4;
            max-width: 100%;
          }

          .hero-divider {
            width: 70px;
            border-top: 2px solid #fff;
            margin: 0.9rem 0 1.2rem 0;
          }
        }

        /* --- Very Small Mobile (Below 360px) --- */
        @media (max-width: 359px) {
          .hero {
            min-height: 320px;
            padding: 30px 0;
            background-attachment: scroll;
          }

          .hero-inner {
            padding: 0 12px;
          }

          .hero-text h1 {
            font-size: 1.5rem;
            margin-bottom: 0.8rem;
            line-height: 1.25;
          }

          .hero-text p {
            font-size: 0.85rem;
            line-height: 1.4;
          }

          .hero-divider {
            width: 60px;
            border-top: 2px solid #fff;
            margin: 0.8rem 0 1rem 0;
          }
        }
        `}
      </style>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>Welcome to the East Asia Governments Platform</h1>
            <hr className="hero-divider" />
            <p>
              We unite Asia's ministries, authorities, and public institutions
              to modernize governance, elevate leadership, and deliver citizen
              <span className="heart-icon">❤</span>centric services across the
              region.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
