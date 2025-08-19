import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

gsap.registerPlugin(ScrollTrigger);

export default function Niobium() {
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
            alt="Niobium"
            style={{
              width: "100%",
            height : "400px",
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
                        <h2 className="fade-in-on-scroll"><strong>Niobium</strong></h2>

                        <h4 className="fade-in-on-scroll my-4 text-blue"><strong>Alternate Chemistries</strong></h4>

                        <p className="fade-in-on-scroll my-4">
                          While niobium is considered largely irreplaceable in high-performance aerospace and nuclear applications, substitution is viable in several non-critical systems. In such use-cases, titanium--vanadium--aluminium composites have demonstrated the potential to reduce niobium requirement by up to 40%, particularly in aircraft structures and secondary propulsion systems (<em>Airbus Materials Substitution Study, 2022</em>). These alloys, while not matching the extreme high-temperature resilience of niobium, are sufficient for components such as satellite casings, support frames, and low-thrust engines.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          India's private aerospace ecosystem---led by Tata Advanced Systems Ltd. (TASL) and Larsen & Toubro Defence---can be incentivised to develop and qualify such niobium-free or niobium-light variants. A targeted policy instrument like a Defence Mineral Substitution Scheme (DMSS) under the Ministry of Defence's Innovation for Defence Excellence (iDEX) framework could catalyse R&D, prototype development, and eventual production scaling for these alternate chemistries.
                        </p>

                        <h4 className="fade-in-on-scroll my-4 text-blue"><strong>Alternate Technologies</strong></h4>

                        <p className="fade-in-on-scroll">
                          In structural and high-strength steel sectors, niobium microalloying improves both strength and weldability without increasing carbon content. Brazilian firm CBMM, the global niobium leader, has pioneered thermomechanical processing (TMP) to incorporate small amounts of niobium into steels used in naval, pipeline, and civil engineering applications. According to CBMM's technical data, such steels offer 20--30% higher yield strength at lower mass density, enabling lightweight yet robust materials for mobility platforms (<em>CBMM Technical Whitepaper, 2023</em>).
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          India could replicate this success by establishing a dedicated TMP demonstration unit. This could be jointly run by Steel Authority of India Ltd. (SAIL) and Mishra Dhatu Nigam Ltd. (MIDHANI), focused on producing niobium-bearing steels for strategic sectors such as marine vessels, armoured vehicles, and next-generation fighter jets. Inclusion of DRDO and the Indian Navy in an advisory capacity would ensure that application-readiness is achieved for national defence use-cases.
                        </p>

                        <h4 className="fade-in-on-scroll my-4 text-blue"><strong>Strengthening Supply Chains</strong></h4>

                        <p className="fade-in-on-scroll">
                          Niobium is primarily used in superalloys for rocket nozzles, jet turbine blades, and superconducting magnets. However, India has no known commercial reserves of niobium and is entirely dependent on imports. Over 85% of the global niobium supply comes from Companhia Brasileira de Metalurgia e Mineração (CBMM) in Araxá, Brazil---making it one of the most monopolised mineral markets globally (<em>USGS, 2024, p. 174</em>).
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          India's current import volumes remain modest, but with the expansion of its space programme (ISRO's Gaganyaan) and jet engine co-development with GE Aerospace, the demand is likely to rise. To avoid future supply bottlenecks, India should prioritise a government-to-government (G2G) strategic offtake agreement with Brazil. Such a pact could mirror CBMM's existing long-term contracts with Japan, the US, and Germany---ensuring supply certainty and price stability.
                        </p>

                        <p className="fade-in-on-scroll">
                          In parallel, India should actively seek exploration partnerships in Africa, particularly Rwanda and the Democratic Republic of Congo, which host lesser-exploited niobium reserves. Bilateral pacts under India's concessional lines of credit framework, or via platforms such as the India--Africa Forum Summit, could offer Indian firms preferential access to new niobium assets in exchange for infrastructure and processing investment.
                        </p>

                        <h4 className="fade-in-on-scroll my-4 text-blue"><strong>Policy Recommendations</strong></h4>

                        <ul className="fade-in-on-scroll fw-normal">
                          <li className="my-3"><strong>Launch a Defence Mineral Substitution Scheme (DMSS):</strong> Focus on alternate chemistries for non-critical niobium applications through Indian aerospace OEMs and DRDO labs.</li>
                          <li className="my-3"><strong>Establish a TMP Steel Demonstration Facility:</strong> Facilitate tech transfer with CBMM and co-develop niobium-alloy steel variants through SAIL--MIDHANI collaboration.</li>
                          <li className="my-3"><strong>Negotiate a Strategic Offtake Pact with CBMM:</strong> Formalise a G2G supply deal with Brazil, modelled on CBMM's long-term agreements with Japan and the US.</li>
                          <li className="my-3"><strong>Explore Africa's Niobium Corridors:</strong> Secure bilateral mining rights in Rwanda and DRC through integrated infrastructure and processing support packages.</li>
                          <li className="my-3"><strong>Include Niobium in Strategic Mineral Reserve Stockpile:</strong> Given its supply concentration, India's upcoming Critical Mineral Strategic Reserve should include niobium as a priority item.</li>
                        </ul>

                        <p className="fade-in-on-scroll" style={{ fontStyle: "italic" }}>
                          <em>Disclaimer: Data updated as of June 2025, next update on September 2025</em>
                        </p>

                        <h5 className="fade-in-on-scroll mt-4 text-blue"><strong>References</strong></h5>

                        <div className="fade-in-on-scroll fw-normal">
                          <p className="my-2 fw-normal"><em>Airbus. Materials Substitution Study: Strategic Alloys and Alternatives, 2022.</em></p>
                          <p className="my-2 fw-normal"><em>CBMM. Corporate Reports on Global Market Share and Thermomechanical Processing, 2022--2023.</em></p>
                          <p className="my-2 fw-normal"><em>CBMM. Technical Whitepaper: Niobium Microalloyed Steels for Lightweighting and Performance, 2023.</em></p>
                          <p className="my-2 fw-normal"><em>United States Geological Survey (USGS). Mineral Commodity Summaries -- Niobium (Columbium), January 2024, p. 174.</em></p>
                        </div>
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