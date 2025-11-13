import React from "react";

export function Footer() {
  // Image URLs - Direct from your images
  const datamatixLogoUrl = "/footer-img.png";

  const styles = {
    container: {
      width: "100%",
      backgroundColor: "#1c1c1c",
      color: "#ccc",
      padding: 0,
      margin: 0,
      boxSizing: "border-box",
    },

    footerContainer: {
      padding: "50px 80px",
      backgroundColor: "#1c1c1c",
    },

    // Header Section
    headerSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: "30px",
      borderBottom: "1px solid #444",
      marginBottom: "50px",
      gap: "40px",
      flexWrap: "wrap",
      backgroundImage: "url(/footer.png)",
    },

    logoSection: {
      display: "flex",
      alignItems: "center",
      gap: "30px",
    },

    logoBox: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },

    logoImage: {
      height: "50px",
      width: "auto",
    },

    logoText: {
      display: "flex",
      flexDirection: "column",
    },

    logoName: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#fff",
    },

    logoTagline: {
      fontSize: "12px",
      color: "#999",
      marginTop: "2px",
    },

    yearsImage: {
      height: "80px",
      width: "auto",
    },

    socialSection: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },

    connectText: {
      fontSize: "13px",
      fontWeight: "bold",
      color: "#fff",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },

    socialIconsContainer: {
      display: "flex",
      gap: "12px",
    },

    socialIcon: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "transform 0.2s",
    },

    socialIconLink: {
      display: "inline-block",
      textDecoration: "none",
    },

    // Divider Line
    divider: {
      height: "1px",
      backgroundColor: "#444",
      margin: "40px 0",
    },

    // Links Section - 4 columns per row
    linksRowContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "60px",
      marginBottom: "40px",
    },

    column: {
      display: "flex",
      flexDirection: "column",
    },

    columnTitle: {
      fontSize: "13px",
      fontWeight: "bold",
      color: "#fff",
      marginBottom: "20px",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },

    linksList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },

    linkItem: {
      marginBottom: "12px",
    },

    link: {
      color: "#ccc",
      textDecoration: "none",
      fontSize: "13px",
      transition: "color 0.2s",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },

    // Bottom Section
    bottomSection: {
      backgroundColor: "#1b6e4f",
      textAlign: "center",
      padding: "18px 0",
      fontSize: "13px",
      color: "#fff",
      marginTop: "30px",
    },
  };

  const LinkItem = ({ text }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
      <li style={styles.linkItem}>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          style={{
            ...styles.link,
            color: isHovered ? "#1b6e4f" : "#ccc",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span>&gt;</span>
          <span>{text}</span>
        </a>
      </li>
    );
  };

  const LinkColumn = ({ title, links }) => (
    <div style={styles.column}>
      <h4 style={styles.columnTitle}>{title}</h4>
      <ul style={styles.linksList}>
        {links.map((link, idx) => (
          <LinkItem key={idx} text={link} />
        ))}
      </ul>
    </div>
  );

  return (
    <footer style={styles.container}>
      <div style={styles.footerContainer}>
        {/* Header Section */}
        <div style={styles.headerSection}>
          <div style={styles.logoSection}>
            <div style={styles.logoBox}>
              <img
                src={datamatixLogoUrl}
                alt="Datamatix Logo"
                style={styles.logoImage}
                onError={(e) => (e.target.style.display = "none")}
              />
              <div style={styles.logoText}>
                <div style={styles.logoName}>Datamatix</div>
                <div style={styles.logoTagline}>the power of trust</div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 1 - 4 columns */}
        <div style={styles.linksRowContainer}>
          <LinkColumn
            title="STANDARDIZATIONS"
            links={["Certifications", "Authorities", "Reports", "TBA"]}
          />
          <LinkColumn
            title="B2B SERVICES"
            links={[
              "Looking for Buyers",
              "Looking for Suppliers",
              "Private Labels Development",
              "Food Industry Partnerships",
            ]}
          />
          <LinkColumn
            title="Extra Food Management"
            links={[
              "Food Logistics",
              "Official Institutions",
              "Machineries and Tech",
              "TBA",
            ]}
          />
          <LinkColumn
            title="WASTE MANAGEMENT"
            links={["Strategies", "TBA", "TBA", "TBA"]}
          />
        </div>

        {/* Divider */}
        <div style={styles.divider}></div>

        {/* Row 2 - 4 columns */}
        <div style={styles.linksRowContainer}>
          <LinkColumn
            title="STORAGE SOLUTIONS"
            links={[
              "Cold chain Solutions",
              "Dry Goods Storage",
              "Packing & Repacking",
              "Hygiene-Compliant Storage",
            ]}
          />
          <LinkColumn
            title="GLOBAL EVENTS"
            links={[
              "International Food Conferences",
              "International Food Exhibitions",
              "Executive Programs",
              "Trade Delegations",
            ]}
          />
          <LinkColumn
            title="MEDIA"
            links={[
              "Food Industry News",
              "Food Market Trends",
              "Food Innovation",
              "Food Leaders Interviews",
            ]}
          />
          <LinkColumn
            title="WASTE MANAGEMENT"
            links={["Strategies", "TBA", "TBA", "TBA"]}
          />
        </div>

        {/* Divider */}
        <div style={styles.divider}></div>

        {/* Row 3 - 4 columns */}
        <div style={styles.linksRowContainer}>
          <LinkColumn
            title="STORAGE SOLUTIONS"
            links={[
              "Cold chain Solutions",
              "Dry Goods Storage",
              "Packing & Repacking",
              "Hygiene-Compliant Storage",
            ]}
          />
          <LinkColumn
            title="GLOBAL EVENTS"
            links={[
              "International Food Conferences",
              "International Food Exhibitions",
              "Executive Programs",
              "Trade Delegations",
            ]}
          />
          <LinkColumn
            title="MEDIA"
            links={[
              "Food Industry News",
              "Food Market Trends",
              "Food Innovation",
              "Food Leaders Interviews",
            ]}
          />
          <LinkColumn
            title="WASTE MANAGEMENT"
            links={["Strategies", "TBA", "TBA", "TBA"]}
          />
        </div>

        {/* Bottom Section */}
        <div style={styles.bottomSection}>
          1989 -2030 © Datamatix - Copyright All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
