import React from "react";
import { ChevronRight } from "lucide-react";

export default function GovernanceSection() {
  // Updated placeholder images to be visually consistent (300x300 for a square look)
  const collageImages = [
    {
      src: "g-one.png",
      alt: "High-Speed Rail",
    }, // Top Left
    {
      src: "g-two.png",
      alt: "Smart City",
    }, // Top Right
    {
      src: "g-three.png",
      alt: "Boardroom Meeting",
    }, // Bottom Left
    {
      src: "g-four.png",
      alt: "Solar Farm",
    }, // Bottom Right
  ];

  return (
    <>
      <style>
        {`
          /* --- General Utilities --- */
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0; 
          }

          /* ============================================
             1. GOVERNANCE SECTION
             ============================================ */
          .governance-section {
            /* Padding removed for seamless attachment to top/bottom */
            padding: 0; 
            background-color: #f7f7f7; 
          }

          .governance-grid {
            display: grid;
            grid-template-columns: 1.2fr 1fr; /* Image column slightly wider */
            gap: 0; 
            align-items: stretch; /* Ensure columns stretch to fill the height */
          }

          /* --- Image Collage --- */
          .governance-collage {
            display: grid;
            grid-template-columns: 1fr 1fr;
            /* CRITICAL CHANGE: Use 1fr 1fr for rows to ensure each row has equal height, 
               making all four cells equal squares/rectangles based on parent container */
            grid-template-rows: 1fr 1fr; 
            gap: 0; 
            /* Ensure the collage container takes up the space needed to define the size */
            height: 100%; 
          }

          .governance-collage img {
            width: 100%;
            height: 100%;
            object-fit: cover; /* Ensures images fill the space without distortion */
            border-radius: 0; 
            box-shadow: none; 
            transition: transform 0.3s ease;
          }
          
          /* Removed specific grid-column/row for nth-child as the 1fr/1fr layout now handles equal sizing implicitly */


          /* --- Text Content --- */
          .governance-content {
            /* CRITICAL CHANGE: Decreased padding to reduce overall container height */
            padding: 20px; 
            display: flex;
            flex-direction: column;
            justify-content: center; /* Vertically center the text */
            height: 100%; 
            background-color: #f7f7f7;
          }

          .governance-content h2 {
            font-size: 2.5rem;
            font-weight: 800;
            line-height: 1.2;
            color: #212121;
            margin-bottom: 20px;
          }

          .governance-content p {
            font-size: 1.1rem;
            line-height: 1.7;
            color: #424242ff;
            margin-bottom: 30px;
          }

          .governance-button {
            display: none; 
          }


          /* --- Responsive Design --- */
          @media (max-width: 1024px) {
            .governance-grid {
              grid-template-columns: 1fr; /* Stack columns */
            }
            .governance-content {
              order: 1; /* Place content first on mobile */
              padding: 20px 15px; /* Add back some side padding for mobile readability */
            }
            .governance-collage {
              order: 2; /* Place image second on mobile */
              margin-top: 0; 
            }
            .governance-content h2 {
              font-size: 2rem;
            }
          }

          @media (max-width: 600px) {
             .governance-collage {
                grid-template-columns: 1fr; /* Single column stack for images */
                grid-template-rows: repeat(4, auto); /* Reset to auto height when stacked */
                gap: 0;
             }
             /* All images stack vertically on mobile */
             .governance-collage img:nth-child(1),
             .governance-collage img:nth-child(2),
             .governance-collage img:nth-child(3),
             .governance-collage img:nth-child(4) {
                 grid-column: 1 / 2;
                 grid-row: auto;
             }
          }
        `}
      </style>

      <section className="governance-section">
        <div className="governance-grid">
          {/* Left Column: Image Collage (4 images side-by-side in two rows) */}
          <div className="governance-collage">
            {collageImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                // Fallback for image loading
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/300x300/9E9E9E/ffffff?text=${image.alt.replace(
                    / /g,
                    "+"
                  )}`;
                }}
              />
            ))}
          </div>

          {/* Right Column: Text Content */}
          <div className="governance-content">
            <h2>GOVERNANCE WITHOUT BORDERS</h2>
            <p>
              East Asia’s future depends on unity. Through this Platform,
              governments align their development agendas — from digital
              identity systems to smart infrastructure — to strengthen economic
              resilience and cross-border cooperation.
            </p>
            <a href="#" className="governance-button">
              Explore The Vision
              <ChevronRight />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
