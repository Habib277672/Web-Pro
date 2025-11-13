import React from "react";

export function EastAsiaRegion() {
  const combinedImageUrl = "/combine.png";

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f5f5f5",
      fontFamily: "Arial, sans-serif",
      padding: 0,
      margin: 0,
      boxSizing: "border-box",
    },
    topHeading: {
      textAlign: "center",
      padding: "50px 5%",
      backgroundColor: "#fff",
      borderBottom: "1px solid #e0e0e0",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    },
    headingText: {
      fontSize: "clamp(24px, 4vw, 32px)", // Responsive font
      fontWeight: "800",
      color: "#000",
      margin: 0,
      lineHeight: "1.4",
      letterSpacing: "1px",
    },
    mainContent: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap", // Allows wrapping on smaller screens
      minHeight: "600px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    leftSection: {
      flex: "1 1 400px", // Grow/shrink, min-width: 400px
      minHeight: "300px",
      backgroundImage: `url(${combinedImageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    rightSection: {
      flex: "1 1 400px",
      backgroundColor: "#1b6e4f",
      padding: "5% 5%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      color: "#fff",
      minHeight: "300px",
    },
    rightHeading: {
      fontSize: "clamp(28px, 5vw, 42px)",
      fontWeight: "800",
      lineHeight: "1.3",
      marginBottom: "30px",
      textAlign: "left",
      letterSpacing: "1px",
    },
    cardsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", // Responsive grid
      gap: "16px",
    },
    card: {
      padding: "20px",
      fontSize: "clamp(16px, 2vw, 24px)",
      fontWeight: "bold",
      color: "#fff",
      minHeight: "100px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      transition: "transform 0.2s",
      cursor: "pointer",
    },
    cardHover: {
      transform: "scale(1.03)",
    },
    cardBlue: { backgroundColor: "#0066cc" },
    cardRed: { backgroundColor: "#ff6b6b" },
    cardGold: { backgroundColor: "#cc9933" },
    cardGray: { backgroundColor: "#666666" },
    linkText: {
      marginTop: "20px",
      fontSize: "clamp(14px, 2vw, 18px)",
      textAlign: "left",
    },
    clickLink: {
      textDecoration: "underline",
      fontWeight: "bold",
      cursor: "pointer",
      marginLeft: "5px",
    },
    bottomHeading: {
      textAlign: "center",
      padding: "30px 5%",
      backgroundColor: "#fff",
      borderTop: "1px solid #e0e0e0",
      boxShadow: "0 -2px 4px rgba(0,0,0,0.05)",
    },
    bottomHeadingText: {
      fontSize: "clamp(20px, 4vw, 28px)",
      fontWeight: "800",
      color: "#000",
      margin: 0,
      letterSpacing: "1px",
    },
  };

  const Card = ({ color, children }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
      <div
        style={{
          ...styles.card,
          ...color,
          ...(isHovered ? styles.cardHover : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <header style={styles.topHeading}>
        <h1 style={styles.headingText}>
          THE EAST ASIA REGION IS RECOGNIZED FOR LEADERSHIP,
          <br />
          DIPLOMACY, AND INSTITUTIONAL EXCELLENCE
        </h1>
      </header>

      <main style={styles.mainContent}>
        <div
          style={styles.leftSection}
          aria-label="East Asia collage image representing urban, financial, and diplomatic themes"
        ></div>

        <div style={styles.rightSection}>
          <section>
            <h2 style={styles.rightHeading}>
              STRENGTHENING
              <br />
              PEACE, STABILITY, AND
              <br />
              INSTITUTIONAL TRUST
            </h2>

            <div style={styles.cardsContainer}>
              <Card color={styles.cardBlue}>Growth</Card>
              <Card color={styles.cardRed}>Inspiration</Card>
              <Card color={styles.cardGold}>Modernization</Card>
              <Card color={styles.cardGray}>Leadership</Card>
            </div>
          </section>

          <div style={styles.linkText}>
            For More Details, Please
            <span style={styles.clickLink}>Click</span>
          </div>
        </div>
      </main>

      <footer style={styles.bottomHeading}>
        <h2 style={styles.bottomHeadingText}>
          POLICY LEADERS SHAPING THE EAST ASIAN CENTURY
        </h2>
      </footer>
    </div>
  );
}
