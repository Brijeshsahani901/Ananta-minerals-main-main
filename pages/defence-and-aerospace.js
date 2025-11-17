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
//     const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
//     const pdfUrl = `${basePath}/assets/downloads/Defence_and_Aerospace.pdf`;

//     // Open the PDF in a new browser tab
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
//           <div>
//             <MilitaryDronesAssembly />
//           </div>
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
//                               alt="automobile"
//                               className="img-fluid h-100 w-100"
//                                       style={{ objectFit: "cover" , borderRadius: "20px", }}
//                             />
//                           </div>
//                           <div className="col-md-8 ml-3">
//                             {/* <Link href="/supply-chain/critical-pathway"> */}
//                             <h2
//                             className="mb-4"
//                               style={{ cursor: "pointer" }}
//                               onClick={handleDownload}
//                               ref={criticalRef}
//                               onMouseEnter={() => handleMouseEnter(criticalRef)}
//                               onMouseLeave={() => handleMouseLeave(criticalRef)}
//                             >
//                               Mineral Security in India's Defence and Aerospace
//                               Supply Chain
//                             </h2>
//                             {/* </Link> */}
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


import Layout from "@/components/layout/Layout";
import MilitaryDronesAssembly from "@/components/militaryDroneAssembly";
import { useRef } from "react";
import gsap from "gsap";

export default function DefenceAerospace() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const criticalRef = useRef(null);

  const handleMouseEnter = (ref) => {
    gsap.to(ref.current, {
      duration: 0.3,
      scale: 1.02,
      textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, {
      duration: 0.3,
      scale: 1,
      textShadow: "none",
      ease: "power2.out",
    });
  };

  const handleDownload = () => {
    const pdfUrl = `${basePath}/assets/downloads/Defence_and_Aerospace.pdf`;
    window.open(pdfUrl, "_blank");
  };

  return (
    <>
      <Layout
        breadcrumbCategory="Defence"
        breadcrumbPostTitle="Mineral Security in India's Defence and Aerospace Supply Chain"
      >
        <section
          className="blog-details-area"
          style={{
            backgroundImage: `url("${basePath}/static/media/home-shape.684c9f3deb5fb22fbe2f.png")`,
          }}
        >
          <div>
            <MilitaryDronesAssembly />
          </div>

          <div className="container mt-50">
            <div className="row justify-content-center">
              <div className="col-lg-1"></div>
              <div className="col-xl-12 col-lg-12">
                <div className="blog-post-wrapper">
                  <div className="latest__post-item">
                    <div className="latest__post-content">
                      <div
                        className="document-box mb-4"
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#fff",
                          overflow: "hidden",
                        }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={`${basePath}/assets/sectors_images/defence.jpg`}
                              alt="defence"
                              className="img-fluid h-100 w-100"
                              style={{
                                objectFit: "cover",
                                borderRadius: "20px",
                              }}
                            />
                          </div>

                          <div className="col-md-8 ml-3">
                            {/* Heading (not clickable now) */}
                            <h2
                              className="mb-4"
                              ref={criticalRef}
                              onMouseEnter={() => handleMouseEnter(criticalRef)}
                              onMouseLeave={() => handleMouseLeave(criticalRef)}
                              style={{
                                cursor: "default",
                              }}
                            >
                              Mineral Security in India's Defence and Aerospace
                              Supply Chain
                            </h2>

                            {/* Description */}
                            <p>
                              The defence and aerospace sectors represent the
                              technological apex of India's industrial
                              ambitions, underpinning national security,
                              regional power projection, and strategic autonomy.
                              These sectors are becoming increasingly
                              mineral-intensive, driven by the adoption of
                              hypersonic platforms, miniaturised electronic
                              warfare systems, directed energy weapons, and
                              advanced jet propulsion technologies. India's
                              defence and aerospace minerals landscape is
                              characterized by high import dependency for all
                              high-purity strategic minerals, with complete
                              external reliance for at least five critical
                              minerals. There are no strategic stockpiling
                              mechanisms for elements such as tantalum, rhenium,
                              or niobium, and minimal domestic refining and
                              separation capacity, particularly for REEs, PGMs,
                              and hafnium.
                            </p>

                            {/* Elegant "View Report" button */}
                                                    <button
  onClick={handleDownload}
  style={{
    marginTop: "15px",
    padding: "8px 20px",
    background: "linear-gradient(135deg, #2F4156 0%, #3A506B 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "15px",
    fontWeight: "500",
    fontSize: "14px",
    boxShadow: "0 4px 12px rgba(47, 65, 86, 0.4)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    letterSpacing: "0.4px",
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = "scale(1.05)";
    e.target.style.boxShadow = "0 6px 14px rgba(0, 114, 255, 0.6)";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "0 4px 10px rgba(0, 114, 255, 0.4)";
  }}
>
  <i
    className="fas fa-file-pdf"
    style={{ fontSize: "18px", color: "red", fontVariant: "outlined" }}
  ></i>
  View Report
</button>

                            {/* Author & Date */}
                            <div
                              style={{
                                position: "relative",
                                color: "black",
                                top: 20,
                                left: 90,
                                background: "black",
                                height: "12px",
                                width: "2px",
                              }}
                            ></div>
                            <p className="date">
                              July 2025 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              Prerna Bountra
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
