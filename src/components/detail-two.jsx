import React from "react";

// NOTE: Since external unique image URLs are restricted, we use a vibrant placeholder
// that visually represents the 'AI + Human Future' graphic in the design.
// The image itself is a gradient/texture to look complex and technical.
const AI_HUMAN_FUTURE_IMAGE = "ai-img.png";

export function GovernanceSectionTwo() {
  const stats = [
    { value: "60+", label: "COUNTRIES", color: "#E53935" },
    { value: "100+", label: "GLOBAL LEADERS", color: "#E53935" },
    { value: "150+", label: "SPEAKERS", color: "#E53935" },
    { value: "130+", label: "HRS OF EMPOWERING CONTENT", color: "#E53935" },
  ];

  return (
    <>
      <style>
        {`
          /* --- Global Styles --- */
          /* Note: We assume Inter font is loaded globally. */

          /* ============================================
             1. HEADING SECTION (White Background)
             ============================================ */
          .heading-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 50px 20px 20px 20px;
            text-align: center;
          }

          /* Main Title (Green text) */
          .main-title {
            font-family: 'Inter', sans-serif;
            font-size: clamp(1.8rem, 4vw, 2.5rem); 
            font-weight: 800;
            line-height: 1.2;
            color: #068149; /* Dark Emerald Green */
            margin-bottom: 10px;
            letter-spacing: 0.5px; 
            text-transform: uppercase; 
          }

          /* Subtitle (Gray text) */
          .subtitle {
            font-family: 'Inter', sans-serif;
            font-size: clamp(1rem, 2vw, 1.25rem); 
            font-weight: 400; 
            color: #4b5563; 
            max-width: 900px;
            margin: 0 auto;
            line-height: 1.5;
            padding-bottom: 20px;
          }

          /* ============================================
             2. MAIN GREEN VISUAL SECTION
             ============================================ */
          .future-governance-section {
            background-color: #068149; /* Dark Emerald Green - The main background color */
            color: #ffffff;
            /* Ensures the section content is visually contained */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
          }

          .inner-container {
            max-width: 1200px;
            margin: 0 auto;
            /* No top/bottom padding here; the image handles the height */
            padding: 0; 
          }

          /* --- Content Grid (Image and Text/Stats) --- */
          .content-grid {
            display: grid;
            /* Defines the two main columns: 1.3 unit for the large image, 1 unit for the text/stats stack */
            grid-template-columns: 1.3fr 1fr; 
            align-items: stretch; /* Makes sure both columns stretch to the full height */
            text-align: left;
            overflow: hidden;
            min-height: 480px; /* Base height for desktop view */
          }

          /* Left Column: Image */
          .image-wrapper {
            /* Using the placeholder URL for the AI + Human Future graphic */
            background-image: url(${AI_HUMAN_FUTURE_IMAGE});
            background-size: cover;
            background-position: center;
            border-radius: 0;
            /* Ensure the image fills the grid cell height */
            height: 100%; 
          }
          
          /* Right Column: Text & Stats (The section containing the paragraph and boxes) */
          .text-stats-wrapper {
            background-color: ; 
            padding: 40px 25px; /* Internal padding for top/bottom/sides */
            display: flex;
            flex-direction: column; 
            /* MODIFIED: Align content to the start (top) of the container */
            justify-content: flex-start; 
            align-items: flex-start;
            /* MODIFIED: Add spacing between the text block and the stats grid */
            gap: 35px; 
          }
          
          .main-text {
            font-size: clamp(0.95rem, 1.1vw, 1.15rem); 
            line-height: 1.6;
            font-weight: 400; 
            /* Margin removed as gap handles spacing now */
            margin-bottom: 0; 
            color : #fff;
          }

          /* --- Statistics Grid (The 2x2 grid inside the right column) --- */
          .stats-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px; 
            width: 100%; 
            max-width: 400px; 
            color:#fff;
          }

          .stat-box {
            background-color: #E53935; /* Strong Red */
            color: #fff;
            padding: 20px 10px; 
            border-radius: 0; 
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center; 
            text-align: center;
            min-height: 90px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }

          .stat-value {
            font-family: 'Inter', sans-serif;
            font-size: clamp(1.8rem, 3vw, 2.5rem); 
            font-weight: 700;
            margin-bottom: 5px;
            line-height: 1;
          }

          .stat-label {
            font-family: 'Inter', sans-serif;
            font-size: 0.65rem; 
            font-weight: 600;
            opacity: 0.95;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            line-height: 1.2;
            color: #fff;
          }


          /* --- Responsive Design --- */
          @media (max-width: 1024px) {
            .content-grid {
              grid-template-columns: 1fr; /* Stack columns on smaller screens */
              min-height: auto;
            }
            .image-wrapper {
                min-height: 300px; 
                height: 300px;
            }
            .text-stats-wrapper {
                padding: 30px 20px;
            }
          }

          @media (max-width: 600px) {
             .stats-grid {
              gap: 10px;
              max-width: none;
            }
             .stat-value {
                font-size: 2rem;
             }
             .stat-label {
                font-size: 0.6rem;
             }
          }
        `}
      </style>

      {/* 1. SEPARATE HEADING BLOCK (White Background) */}
      <div className="heading-container">
        <h1 className="main-title">
          EAST ASIA’S GOVERNMENTS PRIDE THEMSELVES
          <br />
          ON VISION, DISCIPLINE, AND COOPERATION,
          <br />
          BUILDING A GOVERNANCE MODEL
        </h1>
        <p className="subtitle">
          "Presents its best practices and contributions to shaping the future
          of global food and agriculture."
        </p>
      </div>

      {/* 2. MAIN GREEN VISUAL SECTION (Containing the two internal sections) */}
      <section className="future-governance-section">
        <div className="inner-container">
          <div className="content-grid">
            {/* Column 1: Image (The big section on the left) */}
            <div
              className="image-wrapper"
              role="img"
              aria-label="Futuristic graphic showing human and artificial intelligence interfaces."
            />

            {/* Column 2: Text and Statistics (The section on the right) */}
            <div className="text-stats-wrapper">
              <p className="main-text">
                Innovation defines leadership. East Asian governments are
                embracing technology, AI, and data-driven decision-making to
                modernize public institutions and build future-ready societies.
              </p>

              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="stat-box"
                    style={{ backgroundColor: stat.color }}
                  >
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">
                      {/* Splitting the last label onto two lines for exact match in the image */}
                      {index === 3 ? (
                        <>
                          HRS OF EMPOWERING
                          <br />
                          CONTENT
                        </>
                      ) : (
                        stat.label
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
