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
//       <h2 className="text-center mb-4">Critical Minerals Tracker</h2>
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
//          Reset Map View
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
//         <div className="section map">
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
//         </div>

//         <div className="section info">
//           <div className="card shadow-sm h-100">
//             <div
//               className="card-body"
//               style={{ overflowY: "auto", height: "300px" }}
//             >
//               {selectedCountry ? (
//                 <>
//                   <h4 className="card-title">{selectedCountry.country}</h4>

//                   <h6 className="mt-3" style={{ color: "#2F4156" }}>
//                     Export-Import Restrictions
//                   </h6>

//                   <motion.div
//                     initial={{ opacity: 0, y: 6 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <h6 style={{ color: "#2F4156" }}>Restriction Summary</h6>

//                     <p className="card-text mb-1">
//                       <small>{selectedCountry.restriction}</small>
//                     </p>

//                     <div className="my-2">
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

//                   {/* ✅ ACITI HARD-CODED WORD CONTENT DIRECTLY */}
//                   {selectedInitiative.name.includes("Australia") ? (
//                     <>
//                       <h6 className="mt-3" style={{ color: "#2F4156" }}>
//                         Member Countries
//                       </h6>
//                       <p className="mb-1">
//                         <small>India, Australia, Canada</small>
//                       </p>
//                       <h6 className="mt-3" style={{ color: "#2F4156" }}>
//                         Significance
//                       </h6>

//                       <p className="card-text mb-1">
//                         <small>
//                           The governments of India, Canada and Australia
//                           launched a formal trilateral called the
//                          <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2193028&utm_source=chatgpt.com&reg=3&lang=2" target="_blank"> Australia–Canada–India Technology and Innovation
//                           (ACITI) Partnership </a>at the G20 Summit in Johannesburg.
//                           At its core, ACITI is a pragmatic cooperation
//                           framework, rather than a treaty, that commits the
//                           three governments to intensifying their work on
//                           critical and emerging technologies, strengthening
//                           green energy innovation, and enhancing the resilience
//                           of supply chains for strategic minerals. The
//                           declaration stresses pooling technological strengths,
//                           coordinating on research and development, and moving
//                           faster from lab ideas into deployable industry
//                           projects.
//                         </small>
//                       </p>
//                       <p className="mb-1">
//                         <small>
//                           The ACITI partnership is important for India because
//                           it converts diplomatic alignment into practical tools
//                           that can speed up the country’s clean-energy
//                           transition. By linking Canada’s processing expertise
//                           and Australia’s resource scale with India’s
//                           manufacturing base and market, the trilateral can
//                           shorten the path from mine to factory, lower
//                           supply-risk, and make investments in refineries,
//                           recycling and advanced manufacturing far more
//                           bankable, but only if the partners translate
//                           declarations into concrete pilots, matched finance and
//                           clear timelines.
//                         </small>{" "}
//                       </p>

//                   <p className="mb-1">
//   <small>
//     <span className="fw-medium">
//       • Reduce Single-Source Risk:
//     </span>{" "}
//     provides alternate, like-minded suppliers for graphite, lithium, rare
//     earths and other inputs, lowering dependence on any one country.
//   </small>
// </p>

//                       <p className="mb-1">
//                         <small>
//                            <span className="fw-medium">• Faster Technology Transfer:</span> joint
//                           R&D and pilots help move lab innovations (battery
//                           chemistry, recycling, refining tech) into Indian
//                           plants sooner.
//                         </small>
//                       </p>

//                       <p className="mb-1">
//                         <small>
//                            <span className="fw-medium">• Build Processing Capacity:</span>{" "}
//                           coordinated investments and offtake links can make
//                           domestic refineries and precursor plants financially
//                           viable
//                         </small>
//                       </p>

//                       <p className="mb-1">
//                         <small>
//                            <span className="fw-medium">• Unlock Finance and Offtake:</span> matched
//                           government signals and trilateral commercial
//                           arrangements reduce investor uncertainty and attract
//                           private capital.
//                         </small>
//                       </p>

//                       <p className="mb-1">
//                         <small>
//                            <span className="fw-medium">• Create Jobs and Value Addition:</span>{" "}
//                           more downstream processing in India means higher-value
//                           manufacturing, not just raw exports.
//                         </small>
//                       </p>

//                       <p className="mb-1">
//                         <small>
//                           <span className="fw-medium">
//                             • Standards, regulation and ESG alignment:&nbsp;
//                           </span>
//                           working with partners helps harmonise best practices
//                           for environmental controls, permitting and responsible
//                           sourcing.
//                         </small>
//                       </p>

//                       <p className="mb-1">
//                         <small>
//                           <span className="fw-medium">• Strengthen Strategic Autonomy:</span> more
//                           resilient, diversified supply chains increase India’s
//                           bargaining power and policy space in geopolitics.
//                         </small>
//                       </p>
//                     </>
//                   ) : (
//                     <>
//                       {/* ✅ Normal initiatives remain array driven */}
//                       <h6 className="mt-3" style={{ color: "#2F4156" }}>
//                         Member Countries
//                       </h6>
//                       <p className="mb-1">
//                         <small>{selectedInitiative.countries.join(", ")}</small>
//                       </p>

//                       <h6 className="mt-3" style={{ color: "#2F4156" }}>
//                         Significance
//                       </h6>

//                       {/* <p className="card-text mb-1">
//                         <small>{selectedInitiative.importance}</small>
//                       </p> */}
// <p className="card-text">
//   <small
//     style={{
//       whiteSpace: "pre-wrap",
//       lineHeight: "1",
//     }}
//   >
//     {selectedInitiative.importance.trim()}
//   </small>
// </p>

//                     </>
//                   )}
//                 </>
//               ) : (
//                 <p
//                   className="text-muted pb-1 mb-1"
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

// <style jsx>{`
//   /* Layout wrapper */
//   .custom-grid {
//     display: flex;
//     gap: 1rem;
//     flex-wrap: wrap;
//   }

//   /* Each section */
//   .section {
//     flex: 1 1 auto;
//   }

//   /* Sidebar fixed width */
//   .sidebar {
//     min-width: 220px;
//     max-width: 250px;
//     flex-shrink: 0;
//   }

//   /* Info Panel fixed width */
//   .info {
//     min-width: 280px;
//     max-width: 320px;
//     flex-shrink: 0;
//   }

//   /* Map fills remaining space */
//   .map {
//     flex-grow: 1;
//     min-width: 0;
//   }

//   /* ✅ MAP HEIGHT CONTROLLED HERE */
//   .map .card {
//     height: 300px;
//   }

//   /* Info scroll */
//   .info .card-body {
//     height: 300px;
//     overflow-y: auto;
//   }

//   /* 📱 Responsive */
//   @media (max-width: 1100px) {
//     .custom-grid {
//       flex-direction: column;
//     }

//     .sidebar,
//     .map,
//     .info {
//       width: 100% !important;
//       min-width: 100% !important;
//       max-width: 100% !important;
//       flex: none;
//     }

//     .map .card {
//       height: 250px;
//     }

//     .info .card-body {
//       max-height: 250px;
//     }
//   }
// `}</style>

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
      <h2 className="text-center mb-4">Critical Minerals Tracker</h2>
      <div className="text-center mb-3">
        <button
          onClick={() => {
            setSelectedCountry(null);
            setSelectedInitiative(null);
            setPosition({ coordinates: [0, 20], zoom: 1 });
          }}
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
          Reset Map View
        </button>
      </div>

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

        {/* Map Section - REDUCED HEIGHT */}
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

        {/* Info Section */}
        <div className="section info">
          <div className="card shadow-sm h-100">
            <div
              className="card-body"
              style={{ overflowY: "auto", height: "280px" }}
            >
              {selectedCountry ? (
                <>
                  <h4 className="card-title">{selectedCountry.country}</h4>

                  <h6 className="mt-3" style={{ color: "#2F4156" }}>
                    Export-Import Restrictions
                  </h6>

                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h6 style={{ color: "#2F4156" }}>Restriction Summary</h6>

                    <p className="card-text mb-1">
                      <small>{selectedCountry.restriction}</small>
                    </p>

                    <div className="my-2">
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

                  {selectedInitiative.name.includes("Australia") ? (
                    <>
                      <h6 className="mt-3" style={{ color: "#2F4156" }}>
                        Member Countries
                      </h6>
                      <p className="mb-1">
                        <small>India, Australia, Canada</small>
                      </p>
                      <h6 className="mt-3" style={{ color: "#2F4156" }}>
                        Significance
                      </h6>

                      <p className="card-text mb-1">
                        <small>
                          The governments of India, Canada and Australia
                          launched a formal trilateral called the
                          <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2193028&utm_source=chatgpt.com&reg=3&lang=2" target="_blank" rel="noopener noreferrer"> Australia–Canada–India Technology and Innovation
                          (ACITI) Partnership </a>at the G20 Summit in Johannesburg.
                          At its core, ACITI is a pragmatic cooperation
                          framework, rather than a treaty, that commits the
                          three governments to intensifying their work on
                          critical and emerging technologies, strengthening
                          green energy innovation, and enhancing the resilience
                          of supply chains for strategic minerals. The
                          declaration stresses pooling technological strengths,
                          coordinating on research and development, and moving
                          faster from lab ideas into deployable industry
                          projects.
                        </small>
                      </p>
                      <p className="mb-1">
                        <small>
                          The ACITI partnership is important for India because
                          it converts diplomatic alignment into practical tools
                          that can speed up the country's clean-energy
                          transition. By linking Canada's processing expertise
                          and Australia's resource scale with India's
                          manufacturing base and market, the trilateral can
                          shorten the path from mine to factory, lower
                          supply-risk, and make investments in refineries,
                          recycling and advanced manufacturing far more
                          bankable, but only if the partners translate
                          declarations into concrete pilots, matched finance and
                          clear timelines.
                        </small>
                      </p>

                      <p className="mb-1">
                        <small>
                          <span className="fw-medium">• Reduce Single-Source Risk:</span>{" "}
                          provides alternate, like-minded suppliers for graphite, lithium, rare
                          earths and other inputs, lowering dependence on any one country.
                        </small>
                      </p>

                      <p className="mb-1">
                        <small>
                          <span className="fw-medium">• Faster Technology Transfer:</span> joint
                          R&D and pilots help move lab innovations (battery
                          chemistry, recycling, refining tech) into Indian
                          plants sooner.
                        </small>
                      </p>

                      <p className="mb-1">
                        <small>
                          <span className="fw-medium">• Build Processing Capacity:</span>{" "}
                          coordinated investments and offtake links can make
                          domestic refineries and precursor plants financially
                          viable
                        </small>
                      </p>

                      <p className="mb-1">
                        <small>
                          <span className="fw-medium">• Unlock Finance and Offtake:</span> matched
                          government signals and trilateral commercial
                          arrangements reduce investor uncertainty and attract
                          private capital.
                        </small>
                      </p>

                      <p className="mb-1">
                        <small>
                          <span className="fw-medium">• Create Jobs and Value Addition:</span>{" "}
                          more downstream processing in India means higher-value
                          manufacturing, not just raw exports.
                        </small>
                      </p>

                      <p className="mb-1">
                        <small>
                          <span className="fw-medium">• Standards, regulation and ESG alignment:&nbsp;</span>
                          working with partners helps harmonise best practices
                          for environmental controls, permitting and responsible
                          sourcing.
                        </small>
                      </p>

                      <p className="mb-1">
                        <small>
                          <span className="fw-medium">• Strengthen Strategic Autonomy:</span> more
                          resilient, diversified supply chains increase India's
                          bargaining power and policy space in geopolitics.
                        </small>
                      </p>
                    </>
                  ) : (
                    <>
                      <h6 className="mt-3" style={{ color: "#2F4156" }}>
                        Member Countries
                      </h6>
                      <p className="mb-1">
                        <small>{selectedInitiative.countries.join(", ")}</small>
                      </p>

                      <h6 className="mt-3" style={{ color: "#2F4156" }}>
                        Significance
                      </h6>

                      <p className="card-text">
                        <small
                          style={{
                            whiteSpace: "pre-wrap",
                            lineHeight: "1",
                          }}
                        >
                          {selectedInitiative.importance.trim()}
                        </small>
                      </p>
                    </>
                  )}
                </>
              ) : (
                <p
                  className="text-muted pb-1 mb-1"
                  style={{
                    borderBottom: "2px solid #ccc",
                    display: "inline-block",
                    width: "100%",
                  }}
                >
                  Select a country or initiative to see details.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Layout wrapper */
        .custom-grid {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Each section */
        .section {
          flex: 1 1 auto;
        }

        /* Sidebar fixed width */
        .sidebar {
          min-width: 220px;
          max-width: 250px;
          flex-shrink: 0;
        }

        /* Info Panel fixed width */
        .info {
          min-width: 280px;
          max-width: 320px;
          flex-shrink: 0;
        }

        /* Map fills remaining space */
        .map {
          flex-grow: 1;
          min-width: 0;
        }

        /* ✅ REDUCED HEIGHT - Changed from 420px to 280px */
        .map .card {
          height: 280px;
        }

        /* ✅ REDUCED HEIGHT for info panel */
        .info .card-body {
          height: 280px;
          overflow-y: auto;
        }

        /* 📱 Responsive (Tablet / Mobile) */
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

          /* Even smaller height for mobile */
          .map .card {
            height: 240px;
          }

          .info .card-body {
            max-height: 240px;
            overflow-y: auto;
          }
        }
      `}</style>
    </div>
  );
}