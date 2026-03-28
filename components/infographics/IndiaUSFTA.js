import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function IndiaUSFTA() {
  return (
    <section className={montserrat.className} style={styles.wrapper}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={styles.card}
      >
        {/* Title */}
        <div style={styles.header}>
          <h2 style={styles.title}>India–US Free Trade Agreement</h2>
          <p style={styles.subtitle}>
            Interim Agreement regarding reciprocal and mutually beneficial trade
          </p>
        </div>

        {/* US Tariff Removal */}
        <div style={styles.section}>
          <p style={styles.sectionText}>
            The United States will remove tariffs on certain aircraft and aircraft parts of India imposed to eliminate threats to national security, as per:
          </p>

          <div style={styles.highlightBox}>
            <ul style={styles.list}>
              <li>Proclamation 9704, 2018 (Adjusting Imports of Aluminium into the United States)</li>
              <li>Proclamation 9705, 2018 (Adjusting Imports of Steel into the United States)</li>
              <li>Proclamation 10962, 2025 (Adjusting Imports of Copper into the United States)</li>
            </ul>
          </div>
        </div>

        {/* India Preferential Tariff */}
        <div style={styles.section}>
          <p style={styles.sectionText}>
            India will receive a preferential tariff rate quota for automotive parts subject to the tariff imposed to eliminate threats to national security, as per:
          </p>

          <div style={styles.highlightBox}>
            <ul style={styles.list}>
              <li>Proclamation 9888, 2019 (Adjusting Imports of Automobiles and Automobile Parts into the United States)</li>
            </ul>
          </div>
        </div>

        {/* USD 500 Billion Section */}
        <div style={styles.commitmentBox}>
          <div style={styles.commitmentHeader}>USD 500 Billion</div>

          <ul style={styles.commitmentList}>
            <li>
              India intends to purchase in the US energy products, aircraft parts,
              precious metals, technology products, and coking coal over the next 5 years
            </li>
            <li>
              India and the US will significantly increase trade in technology products
              including Graphics Processing Units (GPUs) and other goods used in data centres
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

const styles = {
  wrapper: {
    background: "linear-gradient(145deg, #092140 0%, #0b1e35 100%)",
    // padding: "10px",
    borderRadius: "10px",
    fontFamily: "montserrat, 'Inter UI', -apple-system, BlinkMacSystemFont, sans-serif",
    boxShadow: "0 20px 28px -8px rgba(0,0,0,0.45)",
    minHeight:"530px",
    boxSizing : "border-box"
  },

  card: {
    background: "#162236",
    borderRadius: "22px",
    padding: "18px 22px",
    color: "#F2F5FF",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 8px 20px rgba(0,0,0,0.3)",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    scrollbarWidth: "thin",
    scrollbarColor: "#576b8a #1f2c3c",
  },

  header: {
    borderBottom: "1.5px solid #FF6B4A",
    paddingBottom: "1px",
    textAlign : "center"
  },

  title: {
    fontSize: "1.35rem",
    fontWeight: "600",
    margin: 0,
    color: "#FF8A5C",
    letterSpacing: "-0.02em",
    lineHeight: 1.2,
  },

  subtitle: {
    fontSize: "0.7rem",
    marginTop: "6px",
    color: "#B0C4DE",
    fontStyle: "normal",
    fontWeight: 400,
    opacity: 0.9,
    textTransform: "uppercase",
    letterSpacing: "0.3px",
  },

  section: {
    marginBottom: "6px",
  },

  sectionText: {
      fontFamily: "inherit",
    fontSize: "0.9rem",
    lineHeight: "1.45",
    marginBottom: "6px",
    color: "#EFF3FA",
    fontWeight: 400,
  },

  highlightBox: {
    background: "rgba(239, 235, 225, 0.95)", // soft parchment
    color: "#1F3A57",
    borderRadius: "16px",
    padding: "12px 16px",
    borderLeft: "4px solid #D34F4F",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  },

  list: {
    margin: 0,
    paddingLeft: "20px",
    fontSize: "0.8rem",
    lineHeight: "1.5",
    fontWeight: 500,
    color: "#1D2E44",
    listStyleType: '"–  "',
  },

  commitmentBox: {
    background: "linear-gradient(105deg, #FEFAF2 0%, #F5EFE6 100%)",
    borderRadius: "20px",
    padding: "14px 18px",
    marginTop: "6px",
    border: "1px solid rgba(193, 84, 62, 0.25)",
    boxShadow: "inset 0 1px 2px white, 0 6px 10px rgba(0,0,0,0.12)",
  },

  commitmentHeader: {
    fontWeight: "700",
    fontSize: "1.1rem",
    color: "#B13B3B",
    marginBottom: "8px",
    letterSpacing: "-0.01em",
    display: "inline-block",
    borderBottom: "2px solid #C04B4B",
    paddingBottom: "3px",
  },

  commitmentList: {
    margin: 0,
    paddingLeft: "20px",
    fontSize: "0.8rem",
    color: "#2A405C",
    lineHeight: "1.5",
    fontWeight: 500,
    listStyleType: '"◆  "',
  },
};