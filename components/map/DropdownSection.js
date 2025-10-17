import { motion, AnimatePresence } from "framer-motion";

export const  DropdownSection = ({ title, isOpen, toggle, children }) => (
  <div style={{ marginBottom: "10px" }}>
    <div
      onClick={toggle}
      style={{
        backgroundColor: isOpen ? "#F4AC3F" : "#FDDC8C",
        padding: "10px 15px",
        // fontWeight: isOpen ? "bold" : "normal",
        cursor: "pointer",
        borderBottom: "1px solid #ccc",
      }}
    >
      {title}
      <span style={{ float: "right" }}>{isOpen ? "▲" : "▼"}</span>
    </div>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          style={{ overflow: "hidden", backgroundColor: "#fff" }}
        >
          <div style={{ padding: "10px"}}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);