import React from "react";
import { Locate, Settings, Lightbulb, User, Globe, Users } from "lucide-react";

// Data structure for the policy updates
const policyUpdates = [
  {
    country: "China",
    icon: <li></li>,
    text: "China leads East Asia's transformation toward data-driven administration, enhancing decision transparency, public accountability, and inter-ministerial efficiency through AI-enabled governance frameworks.",
    img: "china.png",
  },
  {
    country: "Japan",
    icon: <li></li>,
    text: "Japan's governance vision focuses on trust-based technology adoption and resilient administrative models that balance modernization with citizen well-being and ethical leadership.",
    img: "japan.png",
  },
  {
    country: "Mongolia",
    icon: <li></li>,
    text: "Mongolia is advancing institutional governance by promoting cross-border collaboration, e-governance infrastructure, and professional leadership training for sustainable growth.",
    img: "mongolia.png",
  },
  {
    country: "North Korea",
    icon: <li></li>,
    text: "The Platform highlights policy engagement pathways encouraging constructive participation and knowledge exchange aimed at regional cooperation and peace frameworks.",
    img: "north-korea.png",
  },
  {
    country: "South Korea",
    icon: <li></li>,
    text: "South Korea is focused on digital public services, leveraging 5G and IoT to create highly efficient, smart cities and promoting democratic accountability through digital platforms.",
    img: "south-korea.png",
  },
  {
    country: "Taiwan",
    icon: <li></li>,
    text: "Taiwan is leading in open government initiatives, using decentralized technology to enhance citizen feedback mechanisms and foster high levels of public sector transparency.",
    img: "taiwan.png",
  },
];

export function RegionalPolicySection() {
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

          li{
          margin-left:1rem;
          }
          /* ============================================
             1. QUOTE SECTION
             ============================================ */
          .quote-section {
            padding: 80px 0 40px 0;
            text-align: center;
            background-color: #ffffff;
          }
          
          .quote-text {
            font-size: 2.2rem;
            font-weight: 800;
            line-height: 1.4;
            color: #068149;
            max-width: 950px;
            margin: 0 auto;
          }

          /* ============================================
             2. NEWS AND POLICY GRID
             ============================================ */
          .news-section {
            padding: 20px 0 80px 0;
            background-color: #ffffff;
          }
          
          .news-title {
            font-size: 1.75rem;
            font-weight: 700;
            color: #212121;
            margin-bottom: 2rem;
            text-align: left;
            padding-bottom: 10px;
            border-bottom: 3px solid #068149; /* Green underline for the title */
            display: inline-block;
          }
          
          .policy-grid {
            display: grid;
            grid-template-columns: 1fr 1fr; /* Two columns for desktop */
            gap: 2rem;
          }

          .policy-item {
            display: flex;
            flex-direction: column;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            overflow: hidden;
          }

          .policy-item-header {
            background-color: #f5f5f5;
            padding: 10px 15px;
            font-weight: 700;
            color: #212121;
            display: flex;
            align-items: center;
          }

          .policy-item-content {
            display: flex;
            padding: 20px 15px;
            gap: 15px;
          }

          .policy-image {
            width: 100px; /* Fixed size for the image/icon area */
            height: 100px;
            flex-shrink: 0;
            border-radius: 4px;
            object-fit: cover;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          
          .policy-body {
            flex-grow: 1;
          }

          .policy-body p {
            font-size: 0.95rem;
            color: #616161;
            line-height: 1.5;
            margin-bottom: 10px;
          }

          .read-more {
            color: #068149;
            font-weight: 600;
            text-decoration: none;
            display: inline-block;
            transition: color 0.2s ease;
          }

          .read-more:hover {
            color: #004d40;
            text-decoration: underline;
          }

          /* --- Responsive Design --- */
          @media (max-width: 1024px) {
            .quote-text {
                font-size: 1.8rem;
            }
          }
          
          @media (max-width: 768px) {
            .quote-section {
                padding: 50px 0 30px 0;
            }
            .quote-text {
                font-size: 1.5rem;
            }
            .policy-grid {
              grid-template-columns: 1fr; /* Single column for mobile */
            }
            .policy-item-content {
                flex-direction: column; /* Stack image and text vertically */
                align-items: center;
                text-align: center;
            }
            .policy-image {
                margin-bottom: 10px;
            }
          }
        `}
      </style>

      {/* Quote Section (matches the large text block at the top) */}
      <section className="quote-section">
        <div className="container">
          <h1 className="quote-text">
            “POWERING GLOBAL GOVERNANCE, PROTECTING PUBLIC TRUST, SHAPING THE
            2030 FUTURE OF LEADERSHIP, AND DELIVERING WORLD-CLASS PUBLIC
            SERVICES.”
          </h1>
        </div>
      </section>

      {/* News and Policy Grid Section */}
      <section className="news-section">
        <div className="container">
          {/* Section Heading */}
          <h2 className="news-title">
            The Central Asian Food Industry and Agriculture Latest News
          </h2>

          <div className="policy-grid">
            {policyUpdates.map((item, index) => (
              <div key={index} className="policy-item">
                <div className="policy-item-header">
                  {/* Icon and Country Name - Icons are hidden in the mockup but included for best practice */}
                  <span className="mr-2">{item.icon}</span>
                  {item.country}
                </div>
                <div className="policy-item-content">
                  <img
                    src={item.img}
                    alt={`Image related to ${item.country} policy`}
                    className="policy-image"
                    // Placeholder images for visual consistency (replace with real images)
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/100x100/e0e0e0/068149?text=${item.country.charAt(
                        0
                      )}`;
                    }}
                  />
                  <div className="policy-body">
                    <p>{item.text}</p>
                    <a href="#" className="read-more">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
