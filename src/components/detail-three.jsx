import React from "react";

export function GlobalLeadershipSection() {
  // IMPORTANT: The index prop is now correctly used as the unique key in the map below.
  const RedBox = ({ index }) => (
    <div className="red-box" key={index}>
      {/* Intentionally left blank to match the design's placeholder boxes */}
    </div>
  );

  return (
    <>
      <style>
        {`
          /* ============================================
             GLOBAL LEADERSHIP SECTION (DETAILS 4)
             ============================================ */
          .leadership-section {
            background-color: #068149; /* Dark Emerald Green */
            color: #ffffff;
            margin-top: 2rem;
            padding: 80px 20px 80px 20px;
            text-align: center;
          }

          .leadership-content {
            max-width: 1200px;
            margin: 0 auto;
          }

          /* Micro-Header (EAST ASIA TOP 100...) */
          .micro-header {
            font-family: 'Inter', sans-serif;
            font-size: 0.8rem;
            font-weight: 500;
            letter-spacing: 2px;
            text-transform: uppercase;
            opacity: 0.8;
            margin-bottom: 10px;
          }

          /* Main Title ("100 LEADERS, ONE GLOBAL GOVERNANCE FUTURE.") */
          .main-leadership-title {
            font-family: 'Inter', sans-serif;
            font-size: clamp(1.5rem, 4vw, 2.5rem); 
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 40px;
            letter-spacing: 0.5px;
          }

          /* --- 4 Red Boxes Grid --- */
          .boxes-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            max-width: 900px; /* Constraining the width slightly to group them */
            margin: 0px auto 60px auto; 
            padding: 0 10px; /* Minor padding for edges */
          }

          .red-box {
            /* The red color is slightly different from the previous section's stats */
            background-color: #C62828; /* Darker Red */
            height: 180px;
            border: 2px solid rgba(255, 255, 255, 0.5); /* White outline border */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease;
          }
          
          /* Bottom Quote ("Recognizing the Power of Leadership...") */
          .bottom-quote {
            font-family: 'Inter', sans-serif;
            font-size: clamp(1rem, 2vw, 1.25rem); 
            font-weight: 400; 
            line-height: 1.5;
            max-width: 800px;
            margin: 0 auto;
            opacity: 0.9;
          }

          /* --- Responsive Adjustments --- */
          @media (max-width: 768px) {
            .leadership-section {
              padding: 60px 20px;
            }
            
            .boxes-grid {
              grid-template-columns: repeat(2, 1fr); /* 2x2 layout on mobile */
              gap: 15px;
              margin-bottom: 40px;
            }
            
            .red-box {
                height: 150px;
            }
          }

          @media (max-width: 480px) {
            .red-box {
                height: 120px;
            }
          }
        `}
      </style>

      <section className="leadership-section">
        <div className="leadership-content">
          <p className="micro-header">
            EAST ASIA TOP 100 LEADERS IN GOVERNMENT AND PUBLIC
          </p>

          <h2 className="main-leadership-title">
            “100 LEADERS, ONE GLOBAL GOVERNANCE FUTURE.”
          </h2>

          {/* Grid of 4 placeholder boxes */}
          <div className="boxes-grid">
            {/* FIX: Ensure the map function provides a unique key for each child */}
            {[...Array(4)].map((_, index) => (
              <RedBox key={index} index={index} />
            ))}
          </div>

          <p className="bottom-quote">
            “Recognizing the Power of Leadership to Shape Peace, Progress, and
            Global Stability.”
          </p>
        </div>
      </section>
    </>
  );
}
