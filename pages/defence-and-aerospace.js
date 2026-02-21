
// import Layout from "@/components/layout/Layout";
// import MilitaryDronesAssembly from "@/components/militaryDroneAssembly";
// import { useRef } from "react";
// import gsap from "gsap";

// export default function DefenceAerospace() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
//   const criticalRef = useRef(null);

//   const handleMouseEnter = (ref) => {
//     gsap.to(ref.current, {
//       duration: 0.3,
//       scale: 1.02,
//       textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
//       ease: "power2.out",
//     });
//   };

//   const handleMouseLeave = (ref) => {
//     gsap.to(ref.current, {
//       duration: 0.3,
//       scale: 1,
//       textShadow: "none",
//       ease: "power2.out",
//     });
//   };

//   const handleDownload = () => {
//     const pdfUrl = `${basePath}/assets/downloads/Defence_and_Aerospace.pdf`;
//     window.open(pdfUrl, "_blank");
//   };

//   return (
//     <>
//       <Layout
//         breadcrumbCategory="Defence"
//         breadcrumbPostTitle="Mineral Security in India's Defence and Aerospace Supply Chain"
//       >
//         <section
//           className="blog-details-area"
//           style={{
//             backgroundImage: `url("${basePath}/static/media/home-shape.684c9f3deb5fb22fbe2f.png")`,
//           }}
//         >
//           <div className="container mt-50">
//             <div className="row justify-content-center">
//               <div className="col-lg-1"></div>
//               <div className="col-xl-12 col-lg-12">
//                 <div className="blog-post-wrapper">
//                   <div className="latest__post-item">
//                     <div className="latest__post-content">
//                       <div
//                         className="document-box mb-4"
//                         style={{
//                           borderRadius: "5px",
//                           backgroundColor: "#fff",
//                           overflow: "hidden",
//                         }}
//                       >
//                         <div className="row g-0">
//                           <div className="col-md-4">
//                             <img
//                               src={`${basePath}/assets/sectors_images/defence.jpg`}
//                               alt="defence"
//                               className="img-fluid h-100 w-100"
//                               style={{
//                                 objectFit: "cover",
//                                 borderRadius: "20px",
//                               }}
//                             />
//                           </div>

//                           <div className="col-md-8 ml-3">
//                             {/* Heading (not clickable now) */}
//                             <h2
//                               className="mb-4"
//                               ref={criticalRef}
//                               onMouseEnter={() => handleMouseEnter(criticalRef)}
//                               onMouseLeave={() => handleMouseLeave(criticalRef)}
//                               style={{
//                                 cursor: "default",
//                               }}
//                             >
//                               Mineral Security in India's Defence and Aerospace
//                               Supply Chain
//                             </h2>

//                             {/* Description */}
//                             <p>
//                               The defence and aerospace sectors represent the
//                               technological apex of India's industrial
//                               ambitions, underpinning national security,
//                               regional power projection, and strategic autonomy.
//                               These sectors are becoming increasingly
//                               mineral-intensive, driven by the adoption of
//                               hypersonic platforms, miniaturised electronic
//                               warfare systems, directed energy weapons, and
//                               advanced jet propulsion technologies. India's
//                               defence and aerospace minerals landscape is
//                               characterized by high import dependency for all
//                               high-purity strategic minerals, with complete
//                               external reliance for at least five critical
//                               minerals. There are no strategic stockpiling
//                               mechanisms for elements such as tantalum, rhenium,
//                               or niobium, and minimal domestic refining and
//                               separation capacity, particularly for REEs, PGMs,
//                               and hafnium.
//                             </p>

//                             {/* Elegant "View Report" button */}
//                                                     <button
//   onClick={handleDownload}
//   style={{
//     marginTop: "15px",
//     padding: "8px 20px",
//     background: "linear-gradient(135deg, #2F4156 0%, #3A506B 100%)",
//     color: "#fff",
//     border: "none",
//     borderRadius: "15px",
//     fontWeight: "500",
//     fontSize: "14px",
//     boxShadow: "0 4px 12px rgba(47, 65, 86, 0.4)",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//     display: "inline-flex",
//     alignItems: "center",
//     gap: "8px",
//     letterSpacing: "0.4px",
//   }}
//   onMouseEnter={(e) => {
//     e.target.style.transform = "scale(1.05)";
//     e.target.style.boxShadow = "0 6px 14px rgba(0, 114, 255, 0.6)";
//   }}
//   onMouseLeave={(e) => {
//     e.target.style.transform = "scale(1)";
//     e.target.style.boxShadow = "0 4px 10px rgba(0, 114, 255, 0.4)";
//   }}
// >
//   <i
//     className="fas fa-file-pdf"
//     style={{ fontSize: "18px", color: "red", fontVariant: "outlined" }}
//   ></i>
//   View Report
// </button>

//                             {/* Author & Date */}
//                             <div
//                               style={{
//                                 position: "relative",
//                                 color: "black",
//                                 top: 20,
//                                 left: 90,
//                                 background: "black",
//                                 height: "12px",
//                                 width: "2px",
//                               }}
//                             ></div>
//                             <p className="date">
//                               July 2025 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                               Prerna Bountra
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </Layout>
//     </>
//   );
// }


"use client";

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function DefenceAerospace() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const handleDownload = () => {
    const pdfUrl = `${basePath}/assets/downloads/Defence_and_Aerospace.pdf`;
    window.open(pdfUrl, "_blank");
  };

  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="blog-details-area fit-content-height"
      >
        {/* Full Width Hero Image */}
        <div style={{ width: "100%", background: "#f5f5f5" }}>
          <img
            src={`${basePath}/assets/sectors_images/defence.jpg`}
            alt="Mineral Security in India's Defence and Aerospace Supply Chain"
            style={{
              width: "100%",
              height: "60vh",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Main Content */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-10">
              <div style={{ marginTop: "30px" }}>
                <div
                  className="p-4"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                  }}
                >
                  {/* Title */}
                  <h3 className="my-3">
                    Mineral Security in India's Defence and Aerospace Supply Chain
                  </h3>

                  {/* Description */}
                  <p className="my-3">
                    The defence and aerospace sectors represent the technological apex of India's industrial ambitions, underpinning national security, regional power projection, and strategic autonomy. These sectors are becoming increasingly mineral-intensive, driven by the adoption of hypersonic platforms, miniaturised electronic warfare systems, directed energy weapons, and advanced jet propulsion technologies.
                  </p>

                  <p className="my-3">
                    India's defence and aerospace minerals landscape is characterized by high import dependency for all high-purity strategic minerals, with complete external reliance for at least five critical minerals. There are no strategic stockpiling mechanisms for elements such as tantalum, rhenium, or niobium, and minimal domestic refining and separation capacity, particularly for REEs, PGMs, and hafnium.
                  </p>

                  <p className="my-3">
                    As India advances its indigenous defence manufacturing ecosystem under strategic autonomy initiatives, securing reliable access to critical minerals becomes central to long-term capability development.
                  </p>

                  {/* Download Button */}
                  <button
                    onClick={handleDownload}
                    style={{
                      marginTop: "15px",
                      padding: "10px 22px",
                      background: "linear-gradient(135deg, #2F4156 0%, #3A506B 100%)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      fontWeight: "500",
                      fontSize: "14px",
                      boxShadow: "0 4px 12px rgba(47, 65, 86, 0.4)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  >
                    View Report (PDF)
                  </button>

               <Card
  className="d-flex flex-column flex-md-row gap-4 p-4 mt-5 shadow-sm"
  style={{
    backgroundColor: "#fff6f6",
    borderRadius: "10px",
  }}
>
  {/* Author Icon */}
  <div
    style={{
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      backgroundColor: "#e9ecef",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      flexShrink: 0,
    }}
  >
    <FaUserCircle size={60} color="#2F4156" />
  </div>

  {/* Text Content */}
  <div style={{ flex: 1 }}>
    <div className="d-flex align-items-center mb-3 gap-2">
      <h5 className="mb-0 fw-semibold text-dark">Prerna Bountra</h5>
      <Badge bg="success" pill>
        Author
      </Badge>
    </div>

    <p className="text-muted" style={{ lineHeight: 1.6 }}>
      Prerna Bountra is Deputy Director, International Relations at Ananta. She leads Ananta’s work
      on the United States and climate diplomacy. She curates Track 1.5 and Track 2 dialogues and has
      been the lead curator of the India US Forum since 2018. Her research interests include U.S.
      domestic and foreign policy, India-US bilateral relations, the US-China-India triangle, great
      power rivalries, the Indo-Pacific, and the geopolitics of energy. She holds degrees in
      Sociology from Hindu College, Journalism from Xavier Institute of Communication, and
      International Law & Diplomacy from the Indian Society of International Law. She’s passionate
      about Hindi cinema, watches many sports but plays none, and is known to arm wrestle people who
      trivialize pop culture.
    </p>
  </div>
</Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}