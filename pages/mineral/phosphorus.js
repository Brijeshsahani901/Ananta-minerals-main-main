import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const contentRef = useRef(null);

  // useEffect(() => {
  //   const elements = contentRef.current.querySelectorAll(".fade-in-on-scroll");

  //   elements.forEach((el) => {
  //     gsap.fromTo(
  //       el,
  //       { autoAlpha: 0, y: 15 },
  //       {
  //         duration: 0.5,
  //         autoAlpha: 1,
  //         y: 0,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: el,
  //           start: "top 90%",
  //           toggleActions: "play none none reverse",
  //         },
  //       }
  //     );
  //   });
  // }, []);
  
  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="blog-details-area fit-content-height"
        ref={contentRef}
      >
        {/* Full-width image */}
        <div style={{ width: "100%", background: "#f5f5f5", margin: "0px 0" }} className="fade-in-on-scroll">
          <img
            src={`${basePath}/assets/minerals_images/min.jpg`}
            alt="About"
            style={{
              width: "100%",
              height: "70vh",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Main content */}
        <div className="container fade-in-on-scroll">
          <div className="row justify-content-center fade-in-on-scroll">
            <div className="col-xl-12 col-lg-10 fade-in-on-scroll">
              <div className="blog-post-wrapper fade-in-on-scroll">
                <div className="latest__post-item fade-in-on-scroll">
                  <div className="latest__post-content fade-in-on-scroll">
                    <div style={{ marginTop: "30px" }}>
                      <div
                        className="p-4 fade-in-on-scroll"
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#fff",
                        }}
                      >
                        <h4 className="fade-in-on-scroll">Phosphorus: Interventions for Agricultural Resilience</h4>

                        <h5 className="fade-in-on-scroll my-4 text-blue">Alternate Chemistries</h5>

                        <p className="fade-in-on-scroll my-4">
                          Phosphorus solubilizing bacteria (PSB), such as <em>Bacillus megaterium</em> and <em>Pseudomonas fluorescens</em>, have demonstrated the ability to enhance phosphorus availability from fixed soil pools. These microbial interventions can reduce dependence on conventional phosphorus fertilizers like DAP (di-ammonium phosphate). Field trials in Punjab and Andhra Pradesh under the National Bio-fertilizer Mission have reported yield increases of 15–20% alongside a 30% reduction in DAP application (ICAR-IISS, 2022). To further this innovation, India should invest in commercializing consortium-based biofertilizers that combine PSB with mycorrhizal fungi, enhancing nutrient uptake efficiency and long-term soil health.
                        </p>

                        <h5 className="fade-in-on-scroll my-4 text-blue">Technological Alternatives</h5>

                        <p className="fade-in-on-scroll">
                          India's limited rock phosphate reserves and high import dependence call for aggressive deployment of beneficiation technologies at the domestic level. Existing rock phosphate mines in Madhya Pradesh and Rajasthan could benefit from advanced processing techniques such as flotation and calcination to increase the usable phosphorus content. Simultaneously, phosphorus recovery from non-traditional sources should be explored. Technologies like struvite crystallization have enabled phosphorus recovery from urban sewage sludge and agro-industrial waste streams in countries like Germany and Japan.
                        </p>

                        <h5 className="fade-in-on-scroll my-4 text-blue">Strengthening Supply Chains</h5>

                        <p className="fade-in-on-scroll my-4">
                          India imports more than 90% of its phosphate rock, primarily for fertilizer production, rendering the agricultural sector vulnerable to geopolitical shocks and price volatility. To address this, bilateral partnerships must be scaled up. The 2022 Memorandum of Understanding (MoU) with Morocco's OCP Group, which secures the annual supply of 1 million tonnes of phosphate, marks an important step. This agreement should be expanded to include joint ventures for beneficiation and acidulation units within India, allowing for partial value addition and employment generation.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          Furthermore, Jordan's Arab Potash Company and Saudi Arabia's Ma'aden, both major global suppliers, should be engaged for long-term rock phosphate supply under sovereign guarantee frameworks. Establishing a strategic reserve of phosphate-based fertilizers is essential to shield Indian farmers from sudden global price surges (PIB, 2023).
                        </p>

                        <p className="fade-in-on-scroll my-4" style={{ fontStyle: "italic" }}>
                          Disclaimer: Data updated as of June 2025, next update on September 2025
                        </p>

                        <h6 className="fade-in-on-scroll my-4 text-blue">References</h6>
                        <ul className="fade-in-on-scroll fw-normal" style={{ listStyleType: "none", paddingLeft: 0 }}>
                          <li className="my-2">Food and Agriculture Organization (FAO). (2023). <em>Global assessment of phosphorus recovery technologies: Lessons from Europe and Asia</em>. Rome.</li>
                          <li className="my-2">ICAR-Indian Institute of Soil Science. (2022). <em>Field evaluation of phosphate solubilizing microbes under the National Bio-fertilizer Mission</em>. Indian Council of Agricultural Research.</li>
                          <li className="my-2">Press Information Bureau (PIB). (2023). <em>India–Morocco collaboration on phosphate fertilizers and the expansion of strategic reserves</em>. Ministry of Chemicals and Fertilizers.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}