import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

export default function IndiaUSFTA() {
  return (
    <section style={styles.wrapper}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={styles.card}
      >
        {/* Header Section */}
        <div style={styles.header}>
          <div style={styles.flagContainer}>
            <div style={styles.indiaFlag}></div>
            <div style={styles.flagDivider}>
              <span style={styles.plusIcon}>+</span>
            </div>
            <div style={styles.usFlag}></div>
          </div>
          
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={styles.title}
          >
            India–US Free Trade Agreement
          </motion.h2>
          
          <p style={styles.subtitle}>
            Interim Agreement regarding reciprocal and mutually beneficial trade
          </p>
          
          <div style={styles.headerDivider}></div>
        </div>
        
        {/* Main Content - 3 Row Layout */}
        <div style={styles.contentGrid}>
          
          {/* Row 1: US Tariff Removal */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={styles.row}
          >
            <div style={styles.rowHeader}>
              <div style={styles.iconBox}>
                <span style={styles.icon}>📉</span>
              </div>
              <h3 style={styles.rowTitle}>US Tariff Removal</h3>
            </div>
            
            <p style={styles.text}>
              The United States will remove tariffs on certain aircraft and
              aircraft parts of India imposed to eliminate threats to national
              security
            </p>
            
            <div style={styles.proclamationsContainer}>
              <h4 style={styles.proclamationTitle}>Proclamations:</h4>
              <div style={styles.proclamationList}>
                <div style={styles.proclamationItem}>
                  <div style={styles.proclamationYear}>2018</div>
                  <div style={styles.proclamationText}>Aluminium Imports (9704)</div>
                </div>
                <div style={styles.proclamationItem}>
                  <div style={styles.proclamationYear}>2018</div>
                  <div style={styles.proclamationText}>Steel Imports (9705)</div>
                </div>
                <div style={styles.proclamationItem}>
                  <div style={styles.proclamationYear}>2025</div>
                  <div style={styles.proclamationText}>Copper Imports (10962)</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Row 2: India Preferential Tariff */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={styles.row}
          >
            <div style={styles.rowHeader}>
              <div style={styles.iconBox}>
                <span style={styles.icon}>🤝</span>
              </div>
              <h3 style={styles.rowTitle}>India Preferential Tariff</h3>
            </div>
            
            <p style={styles.text}>
              India will receive a preferential tariff rate quota for automotive
              parts subject to the tariff imposed to eliminate threats to national
              security
            </p>
            
            <div style={styles.proclamationsContainer}>
              <h4 style={styles.proclamationTitle}>Proclamation:</h4>
              <div style={styles.proclamationList}>
                <div style={styles.proclamationItem}>
                  <div style={styles.proclamationYear}>2019</div>
                  <div style={styles.proclamationText}>Automobiles & Automobile Parts Imports (9888)</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Row 3: Trade Enhancement */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={styles.row}
          >
            <div style={styles.rowHeader}>
              <div style={styles.iconBox}>
                <span style={styles.icon}>🚀</span>
              </div>
              <h3 style={styles.rowTitle}>Trade Enhancement</h3>
            </div>
            
            <div style={styles.usdContainer}>
              <motion.h3
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9 }}
                style={styles.usd}
              >
                USD 500 Billion
              </motion.h3>
              <p style={styles.usdSubtitle}>Trade volume over next 5 years</p>
            </div>
            
            <div style={styles.tradeDetails}>
              <div style={styles.tradeItem}>
                <div style={styles.tradeIcon}>📦</div>
                <div style={styles.tradeText}>
                  India intends to purchase US energy products, aircraft parts,
                  precious metals, technology products, and coking coal
                </div>
              </div>
              <div style={styles.tradeItem}>
                <div style={styles.tradeIcon}>💻</div>
                <div style={styles.tradeText}>
                  Significant increase in trade of technology products including GPUs
                  and other goods used in data centres
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={styles.footer}
        >
          <div style={styles.timeline}>
            <div style={styles.timelineItem}>
              <div style={styles.timelineDot}></div>
              <div style={styles.timelineText}>2018</div>
            </div>
            <div style={styles.timelineDivider}></div>
            <div style={styles.timelineItem}>
              <div style={styles.timelineDot}></div>
              <div style={styles.timelineText}>2019</div>
            </div>
            <div style={styles.timelineDivider}></div>
            <div style={styles.timelineItem}>
              <div style={styles.timelineDot}></div>
              <div style={styles.timelineText}>2025</div>
            </div>
          </div>
          <p style={styles.footerText}>Bilateral Trade Agreement Timeline</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

const styles = {
  wrapper: {
    background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
    padding: "25px",
    borderRadius: "20px",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
  },
  
  card: {
    border: "2px solid #7c3aed",
    borderRadius: "18px",
    padding: "30px",
    color: "#fff",
    background: "rgba(31, 33, 97, 0.9)",
    backdropFilter: "blur(10px)",
    overflow: "hidden",
  },
  
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
  
  flagContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15px",
    gap: "10px",
  },
  
  indiaFlag: {
    width: "60px",
    height: "40px",
    background: "linear-gradient(to bottom, #ff9933 33%, #ffffff 33%, #ffffff 66%, #138808 66%)",
    borderRadius: "4px",
    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.2)",
  },
  
  usFlag: {
    width: "60px",
    height: "40px",
    background: "linear-gradient(to right, #3c3b6e 40%, #ffffff 40%, #ffffff 43%, #B22234 43%, #B22234 57%, #ffffff 57%, #ffffff 60%, #3c3b6e 60%)",
    borderRadius: "4px",
    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.2)",
  },
  
  flagDivider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
  },
  
  plusIcon: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#7c3aed",
    background: "#fff",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
  },
  
  title: {
    color: "#ff6b6b",
    fontWeight: 800,
    fontSize: "2rem",
    marginBottom: "8px",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },
  
  subtitle: {
    fontSize: "0.95rem",
    color: "#e5e7eb",
    marginBottom: "16px",
    fontStyle: "italic",
    opacity: 0.9,
  },
  
  headerDivider: {
    height: "3px",
    background: "linear-gradient(to right, transparent, #7c3aed, transparent)",
    width: "80%",
    margin: "0 auto",
  },
  
  contentGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    marginBottom: "25px",
  },
  
  row: {
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "16px",
    padding: "22px",
    borderLeft: "4px solid #7c3aed",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  },
  
  rowHeader: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "15px",
  },
  
  iconBox: {
    background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
    borderRadius: "12px",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 10px rgba(124, 58, 237, 0.3)",
  },
  
  icon: {
    fontSize: "24px",
  },
  
  rowTitle: {
    fontSize: "1.3rem",
    fontWeight: 700,
    color: "#ffd166",
    margin: 0,
  },
  
  text: {
    fontSize: "0.95rem",
    lineHeight: 1.5,
    color: "#e5e7eb",
    marginBottom: "18px",
  },
  
  proclamationsContainer: {
    background: "rgba(245, 239, 230, 0.1)",
    borderRadius: "12px",
    padding: "18px",
    border: "1px solid rgba(124, 58, 237, 0.3)",
  },
  
  proclamationTitle: {
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "#ff6b6b",
    marginBottom: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  
  proclamationList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  
  proclamationItem: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "10px",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "8px",
  },
  
  proclamationYear: {
    background: "#7c3aed",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: "bold",
    minWidth: "60px",
    textAlign: "center",
  },
  
  proclamationText: {
    fontSize: "0.9rem",
    color: "#fff",
    flex: 1,
  },
  
  usdContainer: {
    textAlign: "center",
    marginBottom: "20px",
    padding: "15px",
    background: "linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 107, 107, 0.05) 100%)",
    borderRadius: "12px",
    border: "1px solid rgba(255, 107, 107, 0.3)",
  },
  
  usd: {
    fontWeight: 800,
    fontSize: "1.8rem",
    color: "#ffd166",
    margin: "10px 0 5px 0",
    textShadow: "0 2px 8px rgba(255, 209, 102, 0.3)",
  },
  
  usdSubtitle: {
    fontSize: "0.85rem",
    color: "#e5e7eb",
    opacity: 0.8,
  },
  
  tradeDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  
  tradeItem: {
    display: "flex",
    gap: "15px",
    alignItems: "flex-start",
  },
  
  tradeIcon: {
    fontSize: "20px",
    background: "rgba(124, 58, 237, 0.2)",
    borderRadius: "8px",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  
  tradeText: {
    fontSize: "0.9rem",
    lineHeight: 1.5,
    color: "#e5e7eb",
  },
  
  footer: {
    marginTop: "25px",
    paddingTop: "20px",
    borderTop: "1px solid rgba(124, 58, 237, 0.3)",
  },
  
  timeline: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
  },
  
  timelineItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  
  timelineDot: {
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    background: "#7c3aed",
    marginBottom: "8px",
    boxShadow: "0 0 8px #7c3aed",
  },
  
  timelineText: {
    fontSize: "0.85rem",
    color: "#e5e7eb",
    fontWeight: 600,
  },
  
  timelineDivider: {
    width: "40px",
    height: "2px",
    background: "rgba(124, 58, 237, 0.5)",
    margin: "0 10px",
  },
  
  footerText: {
    textAlign: "center",
    fontSize: "0.8rem",
    color: "#a5b4fc",
    fontStyle: "italic",
    opacity: 0.8,
  },
};