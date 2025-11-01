// import React, { useState } from "react";

// import { motion } from "framer-motion";
// import {
//   multilateralInitiatives,
//   exportImportRestrictions,
// } from "@/util/mapData";
// import { DropdownSection } from "./map/DropdownSection";
// import { WorldMap } from "./map/WorldMap";

// export default function GlobalRestrictionsExplorer() {
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedInitiative, setSelectedInitiative] = useState(null);
//   const [tooltipContent, setTooltipContent] = useState("");
//   const [position, setPosition] = useState({ coordinates: [0, 20], zoom: 1 });
//   const [openSection, setOpenSection] = useState("export");

//   const toggleSection = (section) => {
//     setOpenSection(openSection === section ? null : section);
//   };

//   const handleCountrySelect = (country) => {
//     setSelectedCountry(country);
//     setSelectedInitiative(null);
//     if (country) {
//       setPosition({ coordinates: country.coordinates, zoom: 3 });
//     } else {
//       setPosition({ coordinates: [0, 20], zoom: 1 });
//     }
//   };

//   const handleInitiativeSelect = (initiative) => {
//     setSelectedInitiative(initiative);
//     setSelectedCountry(null);
//     setPosition({ coordinates: [0, 20], zoom: 1 });
//   };

//   return (
//     <div className="mt-4">
//       <h2 className="text-center mb-4">India Critical Minerals Tracker</h2>
//       <div className="text-center mb-3">
//         <button
//           onClick={() => {
//             setSelectedCountry(null);
//             setSelectedInitiative(null);
//             setPosition({ coordinates: [0, 20], zoom: 1 });
//           }}
//           className="btn text-white"
//           style={{
//             backgroundColor: "#2F4156",
//             fontSize: "0.85rem",
//             padding: "4px 12px",
//             border: "none",
//             textTransform: "capitalize",
//             borderRadius: "4px",
//           }}
//         >
//           🔄 Reset Map View
//         </button>
//       </div>

//       {/* Custom Flex Container */}
//       <div className="custom-grid">
//         {/* Sidebar */}
//         <div className="section sidebar">
//           <motion.div
//             style={{
//               boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
//               border: "1px solid #dee2e6",
//               borderRadius: "0.25rem",
//             }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//           >
//             <DropdownSection
//               title="Export-Import Restrictions"
//               isOpen={openSection === "export"}
//               toggle={() => toggleSection("export")}
//             >
//               <div
//                 style={{ display: "flex", flexDirection: "column", gap: "8px" }}
//               >
//                 {exportImportRestrictions.map((country) => {
//                   const isSelected =
//                     selectedCountry?.country === country.country;
//                   return (
//                     <motion.button
//                       key={country.code}
//                       onClick={() => handleCountrySelect(country)}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.2 }}
//                       whileHover={{ scale: 1.03 }}
//                       whileTap={{ scale: 0.97 }}
//                       className="text-start w-100 border-0"
//                       style={{
//                         padding: "5px",
//                         borderRadius: "0.375rem",
//                         fontSize: "0.9rem",
//                         color: isSelected ? "#fff" : "#2F4156",
//                         background: isSelected
//                           ? "linear-gradient(90deg, #006f5d, #00997f)"
//                           : "#f8f9fa",
//                         boxShadow: isSelected
//                           ? "0 0 0 2px #004d0055"
//                           : "0 1px 2px rgba(0,0,0,0.05)",
//                         transition: "all 0.2s ease-in-out",
//                         whiteSpace: "normal",
//                         cursor: "pointer",
//                       }}
//                     >
//                       {country.country}
//                     </motion.button>
//                   );
//                 })}
//               </div>
//             </DropdownSection>

//             <DropdownSection
//               title="Multilateral Initiatives"
//               isOpen={openSection === "multi"}
//               toggle={() => toggleSection("multi")}
//             >
//               <div
//                 style={{ display: "flex", flexDirection: "column", gap: "8px" }}
//               >
//                 {multilateralInitiatives.map((initiative) => {
//                   const isSelected =
//                     selectedInitiative?.name === initiative.name;
//                   return (
//                     <motion.button
//                       key={initiative.name}
//                       onClick={() => handleInitiativeSelect(initiative)}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.2 }}
//                       whileHover={{ scale: 1.03 }}
//                       whileTap={{ scale: 0.97 }}
//                       className="text-start w-100 border-0"
//                       style={{
//                         padding: "5px",
//                         borderRadius: "0.375rem",
//                         fontSize: "0.9rem",
//                         color: isSelected ? "#fff" : "#2F4156",
//                         background: isSelected
//                           ? "linear-gradient(90deg, #006f5d, #00997f)"
//                           : "#f8f9fa",
//                         boxShadow: isSelected
//                           ? "0 0 0 2px #004d0055"
//                           : "0 1px 2px rgba(0,0,0,0.05)",
//                         transition: "all 0.2s ease-in-out",
//                         whiteSpace: "normal",
//                         cursor: "pointer",
//                       }}
//                     >
//                       {initiative.name}
//                     </motion.button>
//                   );
//                 })}
//               </div>
//             </DropdownSection>
//           </motion.div>
//         </div>

//         {/* Map Section */}
//         {/* <div className="section map">
//           <div className="card shadow-sm h-100 position-relative">
//             <WorldMap
//               selectedCountry={selectedCountry}
//               selectedInitiative={selectedInitiative}
//               onCountrySelect={handleCountrySelect}
//               onInitiativeSelect={handleInitiativeSelect}
//               position={position}
//               setTooltipContent={setTooltipContent}
//             />
//             {tooltipContent && (
//               <div
//                 style={{
//                   position: "absolute",
//                   bottom: "10px",
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   backgroundColor: "rgba(0, 0, 0, 0.8)",
//                   color: "white",
//                   padding: "5px 10px",
//                   borderRadius: "4px",
//                   pointerEvents: "none",
//                   zIndex: 10,
//                 }}
//               >
//                 {tooltipContent}
//               </div>
//             )}
//           </div>
//         </div> */}

//         {/* Info Panel */}
//         <div className="section info">
//           <div className="card shadow-sm h-100">
//             <div
//               className="card-body"
//               style={{ overflowY: "auto", height: "500px" }}
//             >
//               {selectedCountry ? (
//                 <>
//                   <h4 className="card-title">{selectedCountry.country}</h4>
//                   <h6 className="mt-4" style={{ color: "#2F4156" }}>
//                     Export-Import Restrictions
//                   </h6>
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4 }}
//                   >
//                     <h6 style={{ color: "#2F4156" }}>Restriction Summary</h6>
//                     <p className="card-text mb-2">
//                       <small>{selectedCountry.restriction}</small>
//                     </p>
//                     <div className="my-3">
//                       <h6 style={{ color: "#2F4156" }}>Significance</h6>
//                       <p className="mb-1">
//                         <small>{selectedCountry.importance}</small>
//                       </p>
//                     </div>
//                   </motion.div>
//                 </>
//               ) : selectedInitiative ? (
//                 <>
//                   <h4 className="card-title">{selectedInitiative.name}</h4>
//                   <h6 className="mt-4" style={{ color: "#2F4156" }}>
//                     Member Countries
//                   </h6>
//                   <p className="mb-2">
//                     <small>{selectedInitiative.countries.join(", ")}</small>
//                   </p>
//                   <h6 className="mt-4" style={{ color: "#2F4156" }}>
//                     Significance
//                   </h6>
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4 }}
//                   >
//                     <p className="card-text mb-2">
//                       <small>{selectedInitiative.importance}</small>
//                     </p>
//                   </motion.div>
//                 </>
//               ) : (
//                 <p
//                   className="text-muted pb-1 mb-2"
//                   style={{
//                     borderBottom: "2px solid #ccc",
//                     display: "inline-block",
//                     width: "100%",
//                   }}
//                 >
//                   Select a country or initiative to see details.
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         /* Wrap your layout */
//         .custom-grid {
//           display: flex;
//           gap: 1rem;
//           flex-wrap: wrap;
//         }

//         /* Each section */
//         .section {
//           flex: 1 1 auto;
//         }

//         /* Sidebar & Info Panel fixed widths on desktop */
//         .sidebar {
//           min-width: 220px;
//           max-width: 250px;
//           flex-shrink: 0;
//         }

//         .info {
//           min-width: 280px;
//           max-width: 320px;
//           flex-shrink: 0;
//         }

//         /* Map should fill remaining space */
//         .map {
//           flex-grow: 1;
//           min-width: 0;
//         }

//         /* 📱 Responsive for tablets/mobiles */
//         @media (max-width: 1100px) {
//           .custom-grid {
//             flex-direction: column;
//           }

//           .sidebar,
//           .map,
//           .info {
//             width: 100% !important;
//             min-width: 100% !important;
//             max-width: 100% !important;
//             flex: none;
//           }

//           /* Ensure map has good height */
//           .map .card {
//             height: 400px;
//           }

//           /* Optional: Info section scrollable if too long */
//           .info .card-body {
//             max-height: 400px;
//             overflow-y: auto;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   multilateralInitiatives,
//   exportImportRestrictions,
// } from "@/util/mapData";
// import { DropdownSection } from "./map/DropdownSection";

// export default function GlobalRestrictionsExplorer() {
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedInitiative, setSelectedInitiative] = useState(null);
//   const [openSection, setOpenSection] = useState("export");

//   const toggleSection = (section) => {
//     setOpenSection(openSection === section ? null : section);
//   };

//   const handleCountrySelect = (country) => {
//     setSelectedCountry(country);
//     setSelectedInitiative(null);
//   };

//   const handleInitiativeSelect = (initiative) => {
//     setSelectedInitiative(initiative);
//     setSelectedCountry(null);
//   };

//   const handleReset = () => {
//     setSelectedCountry(null);
//     setSelectedInitiative(null);
//   };

//   return (
//     <div className="mt-4">
//       <h2 className="text-center mb-4">India Critical Minerals Tracker</h2>
//       <div className="text-center mb-3">
//         <button
//           onClick={handleReset}
//           className="btn text-white"
//           style={{
//             backgroundColor: "#2F4156",
//             fontSize: "0.85rem",
//             padding: "4px 12px",
//             border: "none",
//             textTransform: "capitalize",
//             borderRadius: "4px",
//           }}
//         >
//           🔄 Reset View
//         </button>
//       </div>

//       {/* Two Column Layout */}
//       <div className="two-column-layout">
//         {/* Sidebar - Left Column */}
//         <div className="sidebar-column">
//           <motion.div
//             className="sidebar-content"
//             style={{
//               boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
//               border: "1px solid #dee2e6",
//               borderRadius: "0.25rem",
//             }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//           >
//             <DropdownSection
//               title="Export-Import Restrictions"
//               isOpen={openSection === "export"}
//               toggle={() => toggleSection("export")}
//             >
//               <div className="dropdown-items-container">
//                 {exportImportRestrictions.map((country) => {
//                   const isSelected = selectedCountry?.country === country.country;
//                   return (
//                     <motion.button
//                       key={country.code}
//                       onClick={() => handleCountrySelect(country)}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.2 }}
//                       whileHover={{ scale: 1.03 }}
//                       whileTap={{ scale: 0.97 }}
//                       className="dropdown-item"
//                       style={{
//                         color: isSelected ? "#fff" : "#2F4156",
//                         background: isSelected
//                           ? "linear-gradient(90deg, #006f5d, #00997f)"
//                           : "#f8f9fa",
//                         boxShadow: isSelected
//                           ? "0 0 0 2px #004d0055"
//                           : "0 1px 2px rgba(0,0,0,0.05)",
//                       }}
//                     >
//                       {country.country}
//                     </motion.button>
//                   );
//                 })}
//               </div>
//             </DropdownSection>

//             <DropdownSection
//               title="Multilateral Initiatives"
//               isOpen={openSection === "multi"}
//               toggle={() => toggleSection("multi")}
//             >
//               <div className="dropdown-items-container">
//                 {multilateralInitiatives.map((initiative) => {
//                   const isSelected = selectedInitiative?.name === initiative.name;
//                   return (
//                     <motion.button
//                       key={initiative.name}
//                       onClick={() => handleInitiativeSelect(initiative)}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.2 }}
//                       whileHover={{ scale: 1.03 }}
//                       whileTap={{ scale: 0.97 }}
//                       className="dropdown-item"
//                       style={{
//                         color: isSelected ? "#fff" : "#2F4156",
//                         background: isSelected
//                           ? "linear-gradient(90deg, #006f5d, #00997f)"
//                           : "#f8f9fa",
//                         boxShadow: isSelected
//                           ? "0 0 0 2px #004d0055"
//                           : "0 1px 2px rgba(0,0,0,0.05)",
//                       }}
//                     >
//                       {initiative.name}
//                     </motion.button>
//                   );
//                 })}
//               </div>
//             </DropdownSection>
//           </motion.div>
//         </div>

//         {/* Info Panel - Right Column */}
//         <div className="info-column">
//           <div className="card shadow-sm h-100">
//             <div className="card-body info-content">
//               {selectedCountry ? (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <h4 className="card-title">{selectedCountry.country}</h4>
//                   <h6 className="mt-4 section-title">Export-Import Restrictions</h6>
//                   <h6 className="subsection-title">Restriction Summary</h6>
//                   <p className="card-text mb-2">
//                     <small>{selectedCountry.restriction}</small>
//                   </p>
//                   <div className="my-3">
//                     <h6 className="subsection-title">Significance</h6>
//                     <p className="mb-1">
//                       <small>{selectedCountry.importance}</small>
//                     </p>
//                   </div>
//                 </motion.div>
//               ) : selectedInitiative ? (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <h4 className="card-title">{selectedInitiative.name}</h4>
//                   <h6 className="mt-4 section-title">Member Countries</h6>
//                   <p className="mb-2">
//                     <small>{selectedInitiative.countries.join(", ")}</small>
//                   </p>
//                   <h6 className="mt-4 section-title">Significance</h6>
//                   <p className="card-text mb-2">
//                     <small>{selectedInitiative.importance}</small>
//                   </p>
//                 </motion.div>
//               ) : (
//                 <div className="placeholder-content">
//                   <p className="placeholder-text">
//                     Select a country or initiative to see details.
//                   </p>
//                   <div className="placeholder-hint">
//                     <small className="text-muted">
//                       Choose from the dropdown menus on the left to explore export-import restrictions 
//                       and multilateral initiatives related to critical minerals.
//                     </small>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .two-column-layout {
//           display: flex;
//           gap: 1.5rem;
//           align-items: flex-start;
//         }

//         /* Sidebar Column */
//         .sidebar-column {
//           flex: 0 0 280px;
//         }

//         .sidebar-content {
//           background: white;
//           padding: 1rem;
//         }

//         .dropdown-items-container {
//           display: flex;
//           flex-direction: column;
//           gap: 8px;
//         }

//         .dropdown-item {
//           padding: 8px 12px;
//           border-radius: 0.375rem;
//           font-size: 0.9rem;
//           border: none;
//           text-align: left;
//           width: 100%;
//           white-space: normal;
//           cursor: pointer;
//           transition: all 0.2s ease-in-out;
//         }

//         /* Info Column */
//         .info-column {
//           flex: 1;
//           min-width: 0;
//         }

//         .info-content {
//           overflow-y: auto;
//           height: 500px;
//           padding: 1.5rem;
//         }

//         .section-title {
//           color: #2F4156;
//           font-weight: 600;
//         }

//         .subsection-title {
//           color: #2F4156;
//           font-weight: 500;
//           margin-top: 1rem;
//         }

//         .placeholder-content {
//           text-align: center;
//           padding: 2rem 1rem;
//         }

//         .placeholder-text {
//           color: #6c757d;
//           font-weight: 500;
//           border-bottom: 2px solid #dee2e6;
//           padding-bottom: 0.5rem;
//           margin-bottom: 1rem;
//           display: inline-block;
//           width: 100%;
//         }

//         .placeholder-hint {
//           max-width: 400px;
//           margin: 0 auto;
//         }

//         /* 📱 Mobile Responsive */
//         @media (max-width: 768px) {
//           .two-column-layout {
//             flex-direction: column;
//             gap: 1rem;
//           }

//           .sidebar-column {
//             flex: none;
//             width: 100%;
//           }

//           .info-column {
//             flex: none;
//             width: 100%;
//           }

//           .info-content {
//             height: 400px;
//             max-height: 50vh;
//           }
//         }

//         /* 🖥️ Large screens */
//         @media (min-width: 1200px) {
//           .sidebar-column {
//             flex: 0 0 320px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  multilateralInitiatives,
  exportImportRestrictions,
} from "@/util/mapData";
import { DropdownSection } from "./map/DropdownSection";

export default function GlobalRestrictionsExplorer() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedInitiative, setSelectedInitiative] = useState(null);
  const [openSection, setOpenSection] = useState("export");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSelectedInitiative(null);
  };

  const handleInitiativeSelect = (initiative) => {
    setSelectedInitiative(initiative);
    setSelectedCountry(null);
  };

  const handleReset = () => {
    setSelectedCountry(null);
    setSelectedInitiative(null);
  };

  return (
    <div className="mt-4">
      <h2 className="text-center mb-4">India Critical Minerals Tracker</h2>
      <div className="text-center mb-3">
        <button
          onClick={handleReset}
          className="btn text-white"
          style={{
            backgroundColor: "#2F4156",
            fontSize: "0.85rem",
            padding: "4px 12px",
            border: "none",
            textTransform: "capitalize",
            borderRadius: "4px",
          }}
        >
          🔄 Reset View
        </button>
      </div>

      {/* Two Column Layout */}
      <div className="two-column-layout">
        {/* Sidebar - Left Column */}
        <div className="sidebar-column">
          <motion.div
            className="sidebar-content"
            style={{
              boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
              border: "1px solid #dee2e6",
              borderRadius: "0.25rem",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <DropdownSection
              title="Export-Import Restrictions"
              isOpen={openSection === "export"}
              toggle={() => toggleSection("export")}
            >
              <div className="dropdown-items-container">
                {exportImportRestrictions.map((country) => {
                  const isSelected = selectedCountry?.country === country.country;
                  return (
                    <motion.button
                      key={country.code}
                      onClick={() => handleCountrySelect(country)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="dropdown-item"
                      style={{
                        color: isSelected ? "#fff" : "#2F4156",
                        padding : "6px",
                        borderRadius : "5px",
                        background: isSelected
                          ? "linear-gradient(90deg, #006f5d, #00997f)"
                          : "#f8f9fa",
                        boxShadow: isSelected
                          ? "0 0 0 2px #004d0055"
                          : "0 1px 2px rgba(0,0,0,0.05)",
                      }}
                    >
                      {country.country}
                    </motion.button>
                  );
                })}
              </div>
            </DropdownSection>

            <DropdownSection
              title="Multilateral Initiatives"
              isOpen={openSection === "multi"}
              toggle={() => toggleSection("multi")}
            >
              <div className="dropdown-items-container">
                {multilateralInitiatives.map((initiative) => {
                  const isSelected = selectedInitiative?.name === initiative.name;
                  return (
                    <motion.button
                      key={initiative.name}
                      onClick={() => handleInitiativeSelect(initiative)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="dropdown-item"
                      style={{
                        color: isSelected ? "#fff" : "#2F4156",
                          padding : "6px",
                        borderRadius : "5px",
                        background: isSelected
                          ? "linear-gradient(90deg, #006f5d, #00997f)"
                          : "#f8f9fa",
                        boxShadow: isSelected
                          ? "0 0 0 2px #004d0055"
                          : "0 1px 2px rgba(0,0,0,0.05)",
                      }}
                    >
                      {initiative.name}
                    </motion.button>
                  );
                })}
              </div>
            </DropdownSection>
          </motion.div>
        </div>

        {/* Info Panel - Right Column */}
        <div className="info-column">
          <div className="card shadow-sm h-100">
            <div className="card-body info-content">
              {selectedCountry ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="card-title">{selectedCountry.country}</h4>
                  <h6 className="mt-4 section-title">Export-Import Restrictions</h6>
                  <h6 className="subsection-title">Restriction Summary</h6>
                  <p className="card-text mb-2">
                    <small>{selectedCountry.restriction}</small>
                  </p>
                  <div className="my-3">
                    <h6 className="subsection-title">Significance</h6>
                    <p className="mb-1">
                      <small>{selectedCountry.importance}</small>
                    </p>
                  </div>
                </motion.div>
              ) : selectedInitiative ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="card-title">{selectedInitiative.name}</h4>
                  <h6 className="mt-4 section-title">Member Countries</h6>
                  <p className="mb-2">
                    <small>{selectedInitiative.countries.join(", ")}</small>
                  </p>
                  <h6 className="mt-4 section-title">Significance</h6>
                  <p className="card-text mb-2">
                    <small>{selectedInitiative.importance}</small>
                  </p>
                </motion.div>
              ) : (
                <div className="placeholder-content">
                  <p className="placeholder-text">
                    Select a country or initiative to see details.
                  </p>
                  <div className="placeholder-hint">
                    <small className="text-muted">
                      Choose from the dropdown menus on the left to explore export-import restrictions 
                      and multilateral initiatives related to critical minerals.
                    </small>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .two-column-layout {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        /* Sidebar Column */
        .sidebar-column {
          flex: 0 0 280px;
        }

        .sidebar-content {
          background: white;
          padding: 1rem;
        }

        .dropdown-items-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .dropdown-item {
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 0.95rem;
          border: none;
          text-align: left;
          width: 100%;
          white-space: normal;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          min-height: 48px;
          display: flex;
          align-items: center;
        }

        /* Info Column */
        .info-column {
          flex: 1;
          min-width: 0;
        }

        .info-content {
          overflow-y: auto;
          height: 500px;
          padding: 1.5rem;
        }

        .section-title {
          color: #2F4156;
          font-weight: 600;
        }

        .subsection-title {
          color: #2F4156;
          font-weight: 500;
          margin-top: 1rem;
        }

        .placeholder-content {
          text-align: center;
          padding: 2rem 1rem;
        }

        .placeholder-text {
          color: #6c757d;
          font-weight: 500;
          border-bottom: 2px solid #dee2e6;
          padding-bottom: 0.5rem;
          margin-bottom: 1rem;
          display: inline-block;
          width: 100%;
        }

        .placeholder-hint {
          max-width: 400px;
          margin: 0 auto;
        }

        /* 📱 Mobile Responsive */
        @media (max-width: 768px) {
          .two-column-layout {
            flex-direction: column;
            gap: 1rem;
          }

          .sidebar-column {
            flex: none;
            width: 100%;
          }

          .info-column {
            flex: none;
            width: 100%;
          }

          .info-content {
            height: 400px;
            max-height: 50vh;
          }

          .dropdown-item {
            padding: 14px 16px;
            border-radius: 10px;
            font-size: 1rem;
          }
        }

        /* 🖥️ Large screens */
        @media (min-width: 1200px) {
          .sidebar-column {
            flex: 0 0 320px;
          }
          
          .dropdown-item {
            padding: 14px 18px;
            border-radius: 14px;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}