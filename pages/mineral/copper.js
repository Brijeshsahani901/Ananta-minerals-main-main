import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

gsap.registerPlugin(ScrollTrigger);

export default function Copper() {
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
               height: "55vh",
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
                        <h4 className="fade-in-on-scroll my-4">Copper Substitution and Strategic Resilience: A Roadmap for India</h4>

                        <h5 className="fade-in-on-scroll my-4 text-blue">Emerging Substitutes and Disruptive Chemistries</h5>

                        <p className="fade-in-on-scroll my-4">
                          Copper's role in electrical wiring, power systems, and communications infrastructure is indispensable—but increasing global demand and supply constraints have prompted the search for viable substitutes and more efficient extraction methods.
                        </p>

                        <h6 className="fade-in-on-scroll my-4 text-blue">Key Technological Alternatives</h6>

                        <ul className="fade-in-on-scroll my-4 fw-normal">
                          <li className="my-3">
                            <strong className="text-light-blue">Copper-Clad Aluminum Wire (CCAW):</strong> Now accepted in U.S. architectural specifications via <a href="https://www.prnewswire.com/news-releases/copper-clad-aluminum-building-wire-gains-acceptance-by-masterspec-a-new-standard-for-electrical-installations-302257287.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer"><em>MasterSpec</em></a>, <a href="https://ctcglobal.com/ctc-global-and-google-announce-strategic-collaboration-to-deploy-accc-advanced-conductors-boost-grid-capacity-and-reliability/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">CCAW</a> features an aluminum core and copper cladding, combining conductivity with reduced weight and material cost—especially for RF and power cabling.
                          </li>
                          <li className="my-3">
                            <strong className="text-light-blue">Aluminum-Calcium (Al–Ca) Composites:</strong> Developed by the <a href="https://www.ameslab.gov/news/ames-national-laboratory-to-test-new-electrical-transmission-line-that-could-improve-grid?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer"><em>U.S. DOE's</em></a> Ames Laboratory, these powder-metallurgy conductors embed calcium filaments in aluminum, yielding strengths comparable to copper and reducing transmission line losses by over 10%.
                          </li>
                          <li className="my-3">
                            <strong className="text-light-blue">Optical Fiber:</strong> Spearheaded by Corning's "Copper vs. Fiber" initiative, <a href="https://www.corning.com/optical-communications/worldwide/en/home/the-signal-network-blog/copper-versus-fiber.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer"><em>fiber-optic cables</em></a> have replaced copper in backbone and data center communications due to vastly superior bandwidth and immunity to electromagnetic interference.
                          </li>
                          <li className="my-3">
                            <strong className="text-light-blue">Aluminum Substitution:</strong> Long used in power cables, vehicle radiators, plumbing, and electrical systems, aluminum remains a cost-effective and abundant alternative for multiple copper-dominated applications.
                          </li>
                          <li className="my-3">
                            <strong className="text-light-blue">Plastics and Composites:</strong> In structural systems like water piping, plastics such as HDPE and PE-RT have gained wide acceptance, displacing copper in urban infrastructure (IBM Yearbook, 2024, Chapter 5, p.12).
                          </li>
                        </ul>

                        <h5 className="fade-in-on-scroll my-4 text-blue">Strategic Pathways for India</h5>

                        <p className="fade-in-on-scroll my-4">
                          India's industrial growth and energy transition will drive copper demand, particularly in power, EVs, and urban infrastructure. Reducing dependence on copper imports—especially from highly concentrated markets—will require both technological adoption and strategic policy interventions.
                        </p>

                        {/* Table */}
                        <div className="table-responsive fade-in-on-scroll my-4">
                          <table className="table table-bordered fade-in-on-scroll">
                            <thead style={{ backgroundColor: "#f0f0f0" }} className="fade-in-on-scroll">
                              <tr className="text-blue">
                                <th>Initiative</th>
                                <th>Possible Partners</th>
                                <th>Scope</th>
                                <th>Estimated Investment</th>
                              </tr>
                            </thead>
                            <tbody className="fade-in-on-scroll">
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>Al–Ca Composite Pilot</strong></td>
                                <td>CSIR–NML, U.S. DOE–Ames Laboratory</td>
                                <td>Establish pilot-scale extrusion and wire-drawing lines for Al–Ca conductors</td>
                                <td>₹200 crore</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>Bioleaching Pact</strong></td>
                                <td>Ministry of Mines, Freeport-McMoRan, Ceibo</td>
                                <td>Test Ceibo's sulfide-leaching and Freeport's Morenci techniques at Malanjkhand tailings; build 2 t/day pilot pad</td>
                                <td>₹150 crore</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>Smart Infrastructure Substitution</strong></td>
                                <td>Corning, Georg Fischer, MoHUA</td>
                                <td>License optical fiber trunk lines and HDPE water pipes for smart cities and e-mobility infrastructure under NIP</td>
                                <td>Concessional finance</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <h5 className="fade-in-on-scroll my-4 text-blue">Enhancing Recycling and Domestic Efficiency</h5>

                        <p className="fade-in-on-scroll my-4">
                          India is a leading copper recycler, yet the sector remains fragmented and technologically underdeveloped.
                        </p>

                        <ul className="fade-in-on-scroll my-4 fw-normal">
                          <li className="my-3">
                            <strong className="text-blue">Capacity Building:</strong> As of 2010, the Central Pollution Control Board licensed 35 dedicated copper units (2.42 lakh tpa) and 132 mixed-metal units (5.17 lakh tpa) (IBM Yearbook, 2024, Chapter 5, p.11). This footprint must be expanded significantly to meet rising demand.
                          </li>
                          <li className="my-3">
                            <strong className="text-blue">R&D Collaboration:</strong> India can partner with Japan to co-develop advanced recycling technologies, including electrochemical recovery and urban mining systems.
                          </li>
                          <li className="my-3">
                            <strong className="text-blue">Data and Regulation:</strong> The unorganised nature of scrap collection hinders data accuracy. A national registry of recyclers and formalisation of informal players could improve material tracking, raise yields, and support circularity.
                          </li>
                        </ul>

                        <h5 className="fade-in-on-scroll my-3 text-blue my-4">Strategic and Regional Cooperation</h5>

                        <p className="fade-in-on-scroll my-4">
                          India should mainstream copper supply resilience into multilateral and regional economic diplomacy.
                        </p>

                        <ul className="fade-in-on-scroll my-4 fw-normal">
                          <li className="my-3">
                            <strong className="text-blue">Multilateral Engagement:</strong> BRICS and G20 platforms can serve as arenas for copper supply discussions, particularly on joint exploration, beneficiation technology, and investment norms.
                          </li>
                          <li className="my-3">
                            <strong className="text-blue">Regional Logistics Hubs:</strong> Establish a "critical mineral corridor" with Bhutan and Nepal to create integrated logistics chains for copper transport, refining, and warehousing. This would improve supply chain agility and hedge against disruptions in maritime shipping routes.
                          </li>
                        </ul>

                        <p className="fade-in-on-scroll my-4">
                          India's ability to meet surging copper demand while reducing import dependence hinges on rapid adoption of substitutes, targeted technology partnerships, and systemic recycling reforms. By investing in alternatives like Al–Ca conductors and bioleaching, and strengthening multilateral and regional frameworks, India can build a resilient and future-ready copper strategy.
                        </p>

                        <p className="fade-in-on-scroll my-4" style={{ fontStyle: "italic" }}>
                          Disclaimer: Data updated as of June 2025, next update on September 2025
                        </p>

                        <h6 className="fade-in-on-scroll my-4 text-blue">References</h6>
                        <ul className="fade-in-on-scroll fw-normal" style={{ listStyleType: "none", paddingLeft: 0 }}>
                          <li className="my-2">Central Pollution Control Board, Ministry of Environment, 2010.</li>
                          <li className="my-2">Corning Inc., <em>Copper vs. Fiber Campaign</em>, 2022–2024.</li>
                          <li className="my-2">Freeport-McMoRan & Ceibo, <em>Sulfide Leaching Technology Reports</em>, 2023.</li>
                          <li className="my-2">IBM Yearbook (2024), Chapter 5, pp. 11–12.</li>
                          <li className="my-2">National Infrastructure Pipeline (NIP), Ministry of Finance, 2024.</li>
                          <li className="my-2">U.S. DOE Ames Laboratory. <em>Aluminum-Calcium Composite Conductor Research Updates</em>, 2023.</li>
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