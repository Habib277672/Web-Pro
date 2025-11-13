import React, { useState, useEffect } from "react";

// Define base styles and responsive overrides
const baseStyles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "2rem 0px",
    padding: 0,
    backgroundColor: "#f5f5f5",
  },
  // Top Section
  topSection: {
    display: "flex",
    height: "500px",
    backgroundColor: "#fff",
  },
  imageLeft: {
    flex: 1,
    backgroundImage: "url(/led.png)",
    backgroundSize: "cover",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#666",
    fontSize: "18px",
  },
  textRight: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
  },
  mainHeading: {
    color: "#fff",
    fontSize: "48px",
    fontWeight: "bold",
    lineHeight: "1.3",
    textAlign: "left",
    margin: 0,
  },
  // Title Section
  titleSection: {
    textAlign: "center",
    padding: "40px 20px",
    backgroundColor: "#fff",
    borderBottom: "1px solid #e0e0e0",
  },
  titleText: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#000",
    margin: 0,
    letterSpacing: "1px",
  },
  // Bottom Section
  bottomSection: {
    display: "flex",
    height: "400px",
    backgroundColor: "#fff",
  },
  colorBlock: {
    flex: 1,
    backgroundColor: "#ff6b35",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
  },
  colorBlockText: {
    color: "#fff",
    fontSize: "40px",
    fontWeight: "bold",
    lineHeight: "1.3",
    textAlign: "left",
    margin: 0,
  },
  imageRight: {
    flex: 1,
    backgroundImage: "url(/g-four.png)",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#666",
    fontSize: "18px",
  },
};

// Define styles for mobile (max-width: 768px)
const mobileStyles = {
  topSection: {
    flexDirection: "column",
    height: "auto", // Let content define height
  },
  imageLeft: {
    height: "200px", // Reduced height for mobile image
  },
  textRight: {
    height: "auto",
    padding: "30px 20px",
  },
  mainHeading: {
    fontSize: "32px", // Smaller font size for mobile
    textAlign: "center",
  },
  titleSection: {
    padding: "30px 15px",
  },
  titleText: {
    fontSize: "24px",
  },
  bottomSection: {
    flexDirection: "column",
    height: "auto",
  },
  colorBlock: {
    height: "auto",
    padding: "30px 20px",
  },
  colorBlockText: {
    fontSize: "28px", // Smaller font size for mobile
    textAlign: "center",
  },
  imageRight: {
    height: "200px", // Reduced height for mobile image
  },
};

export function GovernanceLanding() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Function to check screen size and update state
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // Set up event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Conditionally merge styles based on screen size
  const styles = {
    ...baseStyles,
    topSection: isMobile
      ? { ...baseStyles.topSection, ...mobileStyles.topSection }
      : baseStyles.topSection,
    imageLeft: isMobile
      ? { ...baseStyles.imageLeft, ...mobileStyles.imageLeft }
      : baseStyles.imageLeft,
    textRight: isMobile
      ? { ...baseStyles.textRight, ...mobileStyles.textRight }
      : baseStyles.textRight,
    mainHeading: isMobile
      ? { ...baseStyles.mainHeading, ...mobileStyles.mainHeading }
      : baseStyles.mainHeading,
    titleSection: isMobile
      ? { ...baseStyles.titleSection, ...mobileStyles.titleSection }
      : baseStyles.titleSection,
    titleText: isMobile
      ? { ...baseStyles.titleText, ...mobileStyles.titleText }
      : baseStyles.titleText,
    bottomSection: isMobile
      ? { ...baseStyles.bottomSection, ...mobileStyles.bottomSection }
      : baseStyles.bottomSection,
    colorBlock: isMobile
      ? { ...baseStyles.colorBlock, ...mobileStyles.colorBlock }
      : baseStyles.colorBlock,
    colorBlockText: isMobile
      ? { ...baseStyles.colorBlockText, ...mobileStyles.colorBlockText }
      : baseStyles.colorBlockText,
    imageRight: isMobile
      ? { ...baseStyles.imageRight, ...mobileStyles.imageRight }
      : baseStyles.imageRight,
  };

  return (
    <div style={styles.container}>
      {/* Top Section */}
      <div style={styles.topSection}>
        <div style={styles.imageLeft}></div>
        <div style={styles.textRight}>
          <h1 style={styles.mainHeading}>
            STRONG GOVERNANCE,
            <br />
            STRONG FUTURE
          </h1>
        </div>
      </div>

      {/* Title Section */}
      <div style={styles.titleSection}>
        <h2 style={styles.titleText}>GLOBAL GOVERNMENT LEADERSHIP</h2>
      </div>

      {/* Bottom Section */}
      <div style={styles.bottomSection}>
        <div style={styles.colorBlock}>
          <h2 style={styles.colorBlockText}>
            UNITED IN PURPOSE,
            <br />
            DRIVEN BY EXCELLENCE
          </h2>
        </div>
        <div style={styles.imageRight}></div>
      </div>
    </div>
  );
}
