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
//       <div className="row">
//         {/* Sidebar Dropdowns */}
//         <div className="col-md-2 mb-3">
//           <motion.div
//             style={{
//               boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
//               border: "1px solid #dee2e6",
//               borderRadius: "0.25rem",
//               overflow: "visible",
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

//         {/* World Map */}
//         <div className="col-md-7 mb-3">
//           <div className="card shadow-sm h-100">
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
//                 }}
//               >
//                 {tooltipContent}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Info Panel */}
//         <div className="col-md-3 mb-6">
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
//                 <p className="text-muted">
//                   Select a country or initiative to see details.
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
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
import { WorldMap } from "./map/WorldMap";

export default function GlobalRestrictionsExplorer() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedInitiative, setSelectedInitiative] = useState(null);
  const [tooltipContent, setTooltipContent] = useState("");
  const [position, setPosition] = useState({ coordinates: [0, 20], zoom: 1 });
  const [openSection, setOpenSection] = useState("export");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSelectedInitiative(null);
    if (country) {
      setPosition({ coordinates: country.coordinates, zoom: 3 });
    } else {
      setPosition({ coordinates: [0, 20], zoom: 1 });
    }
  };

  const handleInitiativeSelect = (initiative) => {
    setSelectedInitiative(initiative);
    setSelectedCountry(null);
    setPosition({ coordinates: [0, 20], zoom: 1 });
  };

  return (
    <div className="mt-4">
      <h2 className="text-center mb-4">India Critical Minerals Tracker</h2>

      {/* Custom Flex Container */}
      <div className="custom-grid">
        {/* Sidebar */}
        <div className="section sidebar">
          <motion.div
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
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                {exportImportRestrictions.map((country) => {
                  const isSelected =
                    selectedCountry?.country === country.country;
                  return (
                    <motion.button
                      key={country.code}
                      onClick={() => handleCountrySelect(country)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="text-start w-100 border-0"
                      style={{
                        padding: "5px",
                        borderRadius: "0.375rem",
                        fontSize: "0.9rem",
                        color: isSelected ? "#fff" : "#2F4156",
                        background: isSelected
                          ? "linear-gradient(90deg, #006f5d, #00997f)"
                          : "#f8f9fa",
                        boxShadow: isSelected
                          ? "0 0 0 2px #004d0055"
                          : "0 1px 2px rgba(0,0,0,0.05)",
                        transition: "all 0.2s ease-in-out",
                        whiteSpace: "normal",
                        cursor: "pointer",
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
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                {multilateralInitiatives.map((initiative) => {
                  const isSelected =
                    selectedInitiative?.name === initiative.name;
                  return (
                    <motion.button
                      key={initiative.name}
                      onClick={() => handleInitiativeSelect(initiative)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="text-start w-100 border-0"
                      style={{
                        padding: "5px",
                        borderRadius: "0.375rem",
                        fontSize: "0.9rem",
                        color: isSelected ? "#fff" : "#2F4156",
                        background: isSelected
                          ? "linear-gradient(90deg, #006f5d, #00997f)"
                          : "#f8f9fa",
                        boxShadow: isSelected
                          ? "0 0 0 2px #004d0055"
                          : "0 1px 2px rgba(0,0,0,0.05)",
                        transition: "all 0.2s ease-in-out",
                        whiteSpace: "normal",
                        cursor: "pointer",
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

        {/* Map Section */}
        <div className="section map">
          <div className="card shadow-sm h-100 position-relative">
            <WorldMap
              selectedCountry={selectedCountry}
              selectedInitiative={selectedInitiative}
              onCountrySelect={handleCountrySelect}
              onInitiativeSelect={handleInitiativeSelect}
              position={position}
              setTooltipContent={setTooltipContent}
            />
            {tooltipContent && (
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  pointerEvents: "none",
                  zIndex: 10,
                }}
              >
                {tooltipContent}
              </div>
            )}
          </div>
        </div>

        {/* Info Panel */}
        <div className="section info">
          <div className="card shadow-sm h-100">
            <div
              className="card-body"
              style={{ overflowY: "auto", height: "500px" }}
            >
              {selectedCountry ? (
                <>
                  <h4 className="card-title">{selectedCountry.country}</h4>
                  <h6 className="mt-4" style={{ color: "#2F4156" }}>
                    Export-Import Restrictions
                  </h6>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h6 style={{ color: "#2F4156" }}>Restriction Summary</h6>
                    <p className="card-text mb-2">
                      <small>{selectedCountry.restriction}</small>
                    </p>
                    <div className="my-3">
                      <h6 style={{ color: "#2F4156" }}>Significance</h6>
                      <p className="mb-1">
                        <small>{selectedCountry.importance}</small>
                      </p>
                    </div>
                  </motion.div>
                </>
              ) : selectedInitiative ? (
                <>
                  <h4 className="card-title">{selectedInitiative.name}</h4>
                  <h6 className="mt-4" style={{ color: "#2F4156" }}>
                    Member Countries
                  </h6>
                  <p className="mb-2">
                    <small>{selectedInitiative.countries.join(", ")}</small>
                  </p>
                  <h6 className="mt-4" style={{ color: "#2F4156" }}>
                    Significance
                  </h6>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="card-text mb-2">
                      <small>{selectedInitiative.importance}</small>
                    </p>
                  </motion.div>
                </>
              ) : (
                <p className="text-muted">
                  Select a country or initiative to see details.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Wrap your layout */
        .custom-grid {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Each section */
        .section {
          flex: 1 1 auto;
        }

        /* Sidebar & Info Panel fixed widths on desktop */
        .sidebar {
          min-width: 220px;
          max-width: 250px;
          flex-shrink: 0;
        }

        .info {
          min-width: 280px;
          max-width: 320px;
          flex-shrink: 0;
        }

        /* Map should fill remaining space */
        .map {
          flex-grow: 1;
          min-width: 0;
        }

        /* 📱 Responsive for tablets/mobiles */
        @media (max-width: 1100px) {
          .custom-grid {
            flex-direction: column;
          }

          .sidebar,
          .map,
          .info {
            width: 100% !important;
            min-width: 100% !important;
            max-width: 100% !important;
            flex: none;
          }

          /* Ensure map has good height */
          .map .card {
            height: 400px;
          }

          /* Optional: Info section scrollable if too long */
          .info .card-body {
            max-height: 400px;
            overflow-y: auto;
          }
        }
      `}</style>
    </div>
  );
}
