import React, { useState, useEffect } from "react";

export const Catogries = () => {
  // 1. State to store the current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 2. useEffect to add and cleanup the resize event listener
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 3. Define breakpoints
  const isDesktop = windowWidth >= 1024; // Large screens
  const isTablet = windowWidth >= 640 && windowWidth < 1024; // Medium screens
  const isMobile = windowWidth < 640; // Small screens

  // 4. Define base styles
  const baseStyles = {
    section: {
      fontFamily: "Arial, sans-serif",
      width: "100%",
      backgroundColor: "#ffffff",
    },
    cell: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#ffffff",
      fontWeight: "bold",
      textAlign: "center",
      padding: "20px",
    },
    imageCell: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },
    greenBox: {
      backgroundColor: "#068149",
      color: "#fff",
      padding: "40px 30px",
      lineHeight: "1.4",
      letterSpacing: "0.5px",
    },
    blackBox: {
      backgroundColor: "#1a1a1a",
      color: "#fff",
      padding: "40px 30px",
      lineHeight: "1.4",
      letterSpacing: "0.5px",
    },
    bottomSection: {
      backgroundColor: "#068149",
      color: "#fff",
      textAlign: "center",
      padding: "70px 20px",
    },
    bottomHeading: {
      fontWeight: "bold",
      marginBottom: "25px",
    },
    bottomText: {
      lineHeight: "1.7",
      maxWidth: "850px",
      margin: "0 auto",
    },
  };

  // 5. Responsive Grid and Typography Styles
  let responsiveStyles = {};

  if (isDesktop) {
    // Desktop: 3 columns, 2 rows
    responsiveStyles = {
      grid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(2, 320px)",
        width: "100%",
        overflow: "hidden",
      },
      cell: {
        fontSize: "1.3rem",
      },
      greenBox: {
        fontSize: "1.4rem",
      },
      blackBox: {
        fontSize: "1.3rem",
      },
      bottomHeading: {
        fontSize: "1.9rem",
      },
      bottomText: {
        fontSize: "1.05rem",
      },
    };
  } else if (isTablet) {
    // Tablet: 2 columns, 3 rows (or 2 columns alternating)
    responsiveStyles = {
      grid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(3, 300px)", // Adjusted height for more items
        width: "100%",
        overflow: "hidden",
      },
      cell: {
        fontSize: "1.2rem",
      },
      greenBox: {
        fontSize: "1.3rem",
      },
      blackBox: {
        fontSize: "1.2rem",
      },
      bottomHeading: {
        fontSize: "1.6rem",
      },
      bottomText: {
        fontSize: "1rem",
      },
    };
  } else if (isMobile) {
    // Mobile: 1 column, 6 rows (stack everything)
    responsiveStyles = {
      grid: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "repeat(6, 250px)", // Stacked items, adjusted height
        width: "100%",
        overflow: "hidden",
      },
      cell: {
        fontSize: "1.1rem",
      },
      greenBox: {
        fontSize: "1.2rem",
        padding: "30px 20px",
      },
      blackBox: {
        fontSize: "1.1rem",
        padding: "30px 20px",
      },
      bottomHeading: {
        fontSize: "1.4rem",
      },
      bottomText: {
        fontSize: "0.95rem",
      },
      bottomSection: {
        padding: "50px 15px", // Less padding on mobile
      },
    };
  }

  // Combine base and responsive styles
  const styles = {
    ...baseStyles,
    ...responsiveStyles,
    // Merge nested styles
    grid: { ...baseStyles.grid, ...responsiveStyles.grid },
    cell: { ...baseStyles.cell, ...responsiveStyles.cell },
    greenBox: {
      ...baseStyles.greenBox,
      ...responsiveStyles.greenBox,
      ...baseStyles.cell,
      ...responsiveStyles.cell,
    },
    blackBox: {
      ...baseStyles.blackBox,
      ...responsiveStyles.blackBox,
      ...baseStyles.cell,
      ...responsiveStyles.cell,
    },
    bottomSection: {
      ...baseStyles.bottomSection,
      ...responsiveStyles.bottomSection,
    },
    bottomHeading: {
      ...baseStyles.bottomHeading,
      ...responsiveStyles.bottomHeading,
    },
    bottomText: { ...baseStyles.bottomText, ...responsiveStyles.bottomText },
  };

  return (
    <section style={styles.section}>
      {/* Top Grid - The layout changes based on screen size */}
      <div style={styles.grid}>
        {/* Row 1/Item 1 */}
        <div style={styles.cell}>
          <img src="/gov.png" alt="Governance" style={styles.imageCell} />
        </div>
        {/* Row 1/Item 2 */}
        <div style={styles.greenBox}>GOVERNANCE ROOTED IN INTEGRITY</div>
        {/* Row 1/Item 3 */}
        <div style={styles.cell}>
          <img src="/g-three.png" alt="Leadership" style={styles.imageCell} />
        </div>

        {/* Row 2/Item 4 */}
        <div style={styles.blackBox}>INNOVATION EMPOWERING ADMINISTRATION</div>
        {/* Row 2/Item 5 */}
        <div style={styles.cell}>
          <img src="/g-two.png" alt="Innovation" style={styles.imageCell} />
        </div>
        {/* Row 2/Item 6 */}
        <div style={styles.blackBox}>TRANSPARENCY FOR A STRONGER REGION</div>
      </div>

      {/* Bottom Section - Text size is also responsive */}
      <div style={styles.bottomSection}>
        <h2 style={styles.bottomHeading}>
          VISIONARY LEADERS ALIGN STRATEGIES FORWARD
        </h2>
        <p style={styles.bottomText}>
          East Asian governments unite under a shared vision of collaboration
          and progress. Through ministerial dialogue, digital policy exchange,
          and institutional partnerships, leaders work together to ensure
          transparent people-centric governance across the region.
        </p>
      </div>
    </section>
  );
};
