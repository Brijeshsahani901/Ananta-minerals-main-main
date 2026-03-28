import { motion, AnimatePresence } from "framer-motion";

export const DropdownSection = ({
  title,
  isOpen,
  toggle,
  children,
}) => {
  return (
    <div style={{ marginBottom: "14px" }}>
      
      {/* 🔴 Premium Heading Button */}
      <motion.div
        onClick={toggle}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        style={{
       background: isOpen
  ? "#b71c1c"   // deep premium red
  : "#d32f2f",
          color: "#ffffff",
          padding: "14px 18px",
          fontWeight: "600",
          cursor: "pointer",
          borderRadius: isOpen ? "8px 8px 0 0" : "8px",
          userSelect: "none",
          boxShadow: "0 4px 12px rgba(204, 0, 0, 0.25)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "all 0.3s ease",
          fontSize: "15px",
          letterSpacing: "0.3px",
        }}
      >
        {title}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            fontSize: "14px",
          }}
        >
          ▼
        </motion.span>
      </motion.div>

      {/* 🔴 Dropdown Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            style={{
              overflow: "hidden",
              color : "red",
              background: "white",
              borderRadius: "0 0 8px 8px",
              boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
              border: "1px solid #f1f1f1",
              borderTop: "none",
            }}
          >
            <div
              style={{
                padding: "16px 18px",
                color: "#333",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};