import React from "react";

// Define the component using custom CSS for styling
export function Leaderships() {
  const DARK_GREEN = "#068149";

  return (
    <section className="header-section">
      <style>
        {`
        /* Global Font and Section Reset */
        .header-section {
          background-color: #ffffff;
          padding: 6rem 1.5rem; /* Equivalent to py-24 and px-6 */
          font-family: "Inter", sans-serif;
          text-align: center;
          width: 100%;
          box-sizing: border-box; /* Include padding in element's total width and height */
        }
        
        /* Container for content width */
        .header-container {
        margin-top: -6rem;
          max-width: 960px; /* Equivalent to max-w-4xl */
          margin-left: auto;
          margin-right: auto;
        }

        /* Main Heading Style - Decreased Font Size */
        .main-heading {
          color: ${DARK_GREEN};
          font-size: 2rem; /* Decreased from 2.25rem for mobile */
          font-weight: 800; /* Extra bold */
          text-transform: uppercase;
          line-height: 1.2;
          letter-spacing: 0.05em; /* Tracking wide */
        }
        
        /* Body Text Style - Decreased Font Size */
        .body-text {
          margin-top: 2rem;
          font-size: 1rem; /* Decreased from 1.125rem for mobile */
          color: #1f2937; /* Dark gray for good contrast */
          line-height: 1.6;
          margin-left: auto;
          margin-right: auto;
          max-width: 800px; /* Max width for body text */
        }

        /* Responsive adjustments for tablet and desktop (sm/lg breakpoints) */
        @media (min-width: 640px) {
          .header-section {
            padding: 8rem 2rem; /* Increased padding for tablets */
          }
          .main-heading {
            font-size: 2.75rem; /* Decreased from 3rem for tablet */
          }
          .body-text {
            font-size: 1.125rem; /* Decreased from 1.25rem for tablet */
          }
        }

        @media (min-width: 1024px) {
          .main-heading {
            font-size: 3.5rem; /* Decreased from 4rem for desktop */
          }
          .body-text {
            font-size: 1.25rem; /* Decreased from 1.5rem for desktop */
          }
        }
        `}
      </style>

      <div className="header-container">
        {/* Main Heading */}
        <h1 className="main-heading">
          WHERE VISIONARY GOVERNMENTS SHAPE
          <br className="mobile-break" /> THE FUTURE OF EAST ASIA
        </h1>

        {/* Body Text */}
        <p className="body-text">
          Across East Asia, forward-thinking ministries, authorities, and public
          institutions are redefining governance through technology, leadership
          excellence, and regional collaboration.
        </p>
      </div>
    </section>
  );
}
