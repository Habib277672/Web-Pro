import React, { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > scrollThreshold && !isScrolled) {
        setIsScrolled(true);
      } else if (currentScrollPos <= scrollThreshold && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <header className="site-header">
      <style>{`
        :root {
          --primary-green: #068149;
          --secondary-green: #38c172;
        }

        * {
          box-sizing: border-box;
        }

        .site-header {
          background-color: #fff;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
          width: 100%;
          text-align:center;
        }

        /* TOP BAR */
        .header-top-bar {
          padding: 8px 0;
          border-bottom: 1px solid #eee;
          width: 100%;
        }

        .header-top-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .platform-name {
          font-size: 14px;
          color: #333;
          font-weight: 500;
        }

        .action-buttons {
          display: flex;
          gap: 5px;
          flex-wrap: wrap;
        }

        .btn-action {
          text-decoration: none;
          color: #fff;
          font-size: 12px;
          font-weight: 500;
          padding: 6px 12px;
          border-radius: 4px;
          transition: opacity 0.3s;
          border: none;
          cursor: pointer;
          display: inline-block;
        }

        .btn-action:hover {
          opacity: 0.9;
        }

        .events-calendar, .food-brands, .suppliers-directory, .membership {
          background-color: var(--primary-green);
        }

        .login {
          background-color: var(--secondary-green);
        }

        /* PRIMARY NAV */
        .primary-nav {
          padding: 10px 0;
          border-bottom: 2px solid var(--primary-green);
          width: 100%;
          overflow-x: auto;
        }

        .primary-nav-inner {
          display: flex;
          justify-content: center;
          gap: 20px;
          min-width: min-content;
          padding-bottom: 8px;
        }

        .primary-nav-inner a {
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          color: #333;
          transition: color 0.3s;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .primary-nav-inner a:hover {
          color: var(--primary-green);
        }

        /* SECONDARY NAV */
        .secondary-nav {
          padding: 8px 0 12px;
          width: 100%;
          overflow-x: auto;
        }

        .secondary-nav-inner {
          display: flex;
          justify-content: center;
          gap: 20px;
          min-width: min-content;
        }

        .secondary-nav-inner a {
          text-decoration: none;
          font-size: 13px;
          font-weight: 400;
          color: #555;
          transition: color 0.3s;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .secondary-nav-inner a:hover {
          color: var(--primary-green);
        }

        /* LOGO SECTION */
        .header-logo-section {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px 0;
          max-height: 400px;
          opacity: 1;
          visibility: visible;
          transition: all 0.5s ease-out;
          overflow: hidden;
        }

        .header-logo-section.hide-on-scroll {
          max-height: 0;
          padding: 0;
          opacity: 0;
          visibility: hidden;
        }

        .main-logo-image {
          max-width: 100%;
          max-height: 200px;
          height: auto;
          object-fit: contain;
        }

        /* TABLET (768px and below) */
        @media (max-width: 768px) {
          .container {
            padding: 0 12px;
          }

          .header-top-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .platform-name {
            font-size: 12px;
            width: 100%;
          }

          .action-buttons {
            width: 100%;
            gap: 3px;
          }

          .btn-action {
            font-size: 11px;
            padding: 5px 8px;
            flex: 1;
            text-align: center;
          }

          .primary-nav-inner {
            gap: 15px;
          }

          .primary-nav-inner a {
            font-size: 12px;
          }

          .secondary-nav-inner {
            gap: 15px;
          }

          .secondary-nav-inner a {
            font-size: 11px;
          }

          .header-logo-section {
            padding: 15px 0;
            max-height: 300px;
          }

          .main-logo-image {
            max-height: 150px;
          }
        }

        /* MOBILE (480px and below) */
        @media (max-width: 480px) {
          .container {
            padding: 0 8px;
          }

          .header-top-bar {
            padding: 6px 0;
          }

          .header-top-inner {
            flex-direction: column;
            gap: 6px;
          }

          .platform-name {
            font-size: 11px;
            width: 100%;
          }

          .action-buttons {
            width: 100%;
            flex-direction: column;
            gap: 2px;
          }

          .btn-action {
            font-size: 10px;
            padding: 4px 6px;
            width: 100%;
          }

          .primary-nav {
            padding: 6px 0;
          }

          .primary-nav-inner {
            gap: 12px;
            justify-content: flex-start;
            padding-left: 8px;
          }

          .primary-nav-inner a {
            font-size: 11px;
          }

          .secondary-nav {
            padding: 4px 0 8px;
          }

          .secondary-nav-inner {
            gap: 12px;
            justify-content: flex-start;
            padding-left: 8px;
          }

          .secondary-nav-inner a {
            font-size: 10px;
          }

          .header-logo-section {
            padding: 10px 0;
            max-height: 200px;
          }

          .main-logo-image {
            max-height: 100px;
          }
        }

        /* SMALL MOBILE (360px and below) */
        @media (max-width: 360px) {
          .btn-action {
            font-size: 9px;
            padding: 3px 4px;
          }

          .primary-nav-inner a {
            font-size: 10px;
          }

          .secondary-nav-inner a {
            font-size: 9px;
          }
        }
      `}</style>

      {/* Top Bar */}
      <div className="header-top-bar">
        <div className="container header-top-inner">
          <div className="platform-name">The World Governments Platforms</div>
          <div className="action-buttons">
            <a href="#events" className="btn-action events-calendar">
              Events Calendar
            </a>
            <a href="#brands" className="btn-action food-brands">
              Food Brands
            </a>
            <a href="#suppliers" className="btn-action suppliers-directory">
              Suppliers
            </a>
            <a href="#membership" className="btn-action membership">
              Membership
            </a>
            <a href="#login" className="btn-action login">
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Primary Navigation */}
      <nav className="primary-nav">
        <div className="container">
          <div className="primary-nav-inner">
            <a href="#home">Home</a>
            <a href="#seafood">Seafood</a>
            <a href="#meat">Meat</a>
            <a href="#chicken">Chicken</a>
            <a href="#tea">Tea</a>
            <a href="#herbs">Herbs</a>
            <a href="#coffee">Coffee</a>
            <a href="#dairy">Dairy</a>
            <a href="#beverages">Beverages</a>
            <a href="#sugar">Sugar</a>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <nav className="secondary-nav">
        <div className="container">
          <div className="secondary-nav-inner">
            <a href="#fruits">Fruits</a>
            <a href="#confectionery">Confectionery</a>
            <a href="#nuts">Nuts & Pistachios</a>
            <a href="#rice">Rice</a>
            <a href="#noodles">Noodles</a>
            <a href="#olives">Olives</a>
            <a href="#cooking-oil">Cooking Oil</a>
          </div>
        </div>
      </nav>

      {/* Logo Section */}
      <div
        className={`header-logo-section ${isScrolled ? "hide-on-scroll" : ""}`}
      >
        <div className="container">
          <img
            src="logo-img.png"
            alt="The World Governments Platform"
            className="main-logo-image"
          />
        </div>
      </div>
    </header>
  );
}
