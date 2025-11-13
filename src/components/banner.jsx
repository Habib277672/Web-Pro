import React from "react";

// Changed to a DEFAULT export to prevent import errors like the one observed.
export function Banner() {
  return (
    <>
      <style>
        {`
        /* --- General Utilities --- */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }

        /* ============================================
           1. GREEN FEATURE SECTION
           ============================================ */
        .feature-section {
          position: relative;
          width: 100%;
          /* Deep green background color */
          background-color: #068149; 
          color: #fff;
          padding: 100px 0; /* Generous vertical padding */
          text-align: center;
          overflow: hidden;
        }

        /* Subtle Background Image and Overlay (similar to Hero) */
        .feature-background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          /* FIX: Using the actual uploaded background image */
          background-image: url('/banner-img.png'); 
          background-size: cover;
          background-position: center;
          /* Reduced opacity slightly to make the image a subtle texture */
          opacity: ; 
          z-index: 9;
        }

        /* Solid Green Overlay */
        .feature-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          /* Keeping opacity at 0.85 (or increasing slightly to 0.90) to maintain high text contrast */
          background-color: rgba(6, 129, 73, 0.85); /* Deep green tint */
          z-index: 2; 
        }

        .feature-inner {
          position: relative;
          z-index: 3; /* Ensure content is above all overlays */
          /* Constrain the central content block width */
          max-width: 900px;
          margin: 0 auto;
          z-index:99;
        }

        /* Main Heading (All Caps, Bold, Large) */
        .feature-inner h3 {
          color: #fff;
          font-size: 2.5rem;
          font-weight: 800; /* Extra bold */
          line-height: 1.3;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }

        /* Primary Paragraph */
        .feature-inner p:first-of-type {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 500;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
        }

        /* Horizontal Divider */
        .feature-divider {
            width: 350px; /* Wider line */
            border: none;
            border-top: 2px solid #fff; /* White line */
            margin: 3rem auto; /* Large margin for separation */
        }
        
        /* Secondary Quote/Paragraph */
        .feature-inner p:last-of-type {
            color: #fff;
            font-size: 1.25rem;
            font-weight: 400;
            line-height: 1.5;
            /* Quote marks as seen in the mockup are handled by styling/font choice */
        }

        /* --- Responsive Design --- */
        @media (max-width: 768px) {
            .feature-section {
                padding: 60px 0;
            }
            .feature-inner h3 {
                font-size: 2rem;
                margin-bottom: 1.5rem;
            }
            .feature-inner p:first-of-type {
                font-size: 1.2rem;
            }
            .feature-inner p:last-of-type {
                font-size: 1.1rem;
            }
            .feature-divider {
                width: 200px;
                margin: 2rem auto;
            }
        }
        `}
      </style>

      {/* Feature Section JSX */}
      <section className="feature-section">
        <div className="feature-background-image"></div>
        <div className="container feature-inner">
          <h3>ENHANCING GOVERNANCE INSPIRING LEADERSHIP SHAPING THE FUTURE.</h3>

          <p>
            The Platform brings together East Asian nations to drive a new era
            of collaborative governance rooted in transparency, innovation, and
            public trust.
          </p>

          <hr className="feature-divider" />

          <p>
            “Powering global governance, protecting public trust, shaping the
            2030 future of leadership.”
          </p>
        </div>
      </section>
    </>
  );
}
