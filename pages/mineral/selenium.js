import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

gsap.registerPlugin(ScrollTrigger);

export default function Selenium() {
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
                        <h4 className="fade-in-on-scroll my-4">Selenium: Strategic Recovery and Substitution Pathways</h4>

                        <h5 className="fade-in-on-scroll my-4 text-blue">Alternate Chemistries</h5>

                        <p className="fade-in-on-scroll my-4">
                          While there is no known agronomic substitute for selenium due to its unique biological functions in humans, livestock, and plants, nano-selenium formulations present a promising pathway for optimizing efficiency and minimizing environmental loss. Studies by Brazil's EMBRAPA have demonstrated that nano-selenium uptake in soybean plants is 30% more efficient than conventional selenium forms, requiring significantly lower application doses for similar agronomic effects (EMBRAPA, 2022). India should support translational research under the ICAR-Nano Agri Inputs Programme to validate and pilot nano-selenium use for biofortification in pulse and cereal belts, particularly in selenium-deficient regions of eastern India.
                        </p>

                        <h5 className="fade-in-on-scroll my-4 text-blue">Technological Alternatives</h5>

                        <p className="fade-in-on-scroll my-4">
                          Globally, selenium is primarily obtained as a by-product of copper refining, specifically from anode slimes. However, selenium recovery from e-waste residues, including photovoltaic panels and glass decolorizers, is gaining traction under circular economy models. The European Union's SELREC program offers a scalable framework for decentralized selenium extraction units integrated within metallurgical processing clusters (EU SELREC Report, 2023). India's Green Energy Corridor and urban e-waste hubs (such as Bhiwadi and Moradabad) could serve as pilot locations for such recovery units. Additionally, high-temperature pyro-hydrometallurgical systems co-located at copper smelters could enable economic selenium capture without requiring major infrastructural overhauls.
                        </p>

                        <h5 className="fade-in-on-scroll my-4">Selenium Supply and Strategy Overview</h5>

                        {/* Table */}
                        <div className="table-responsive fade-in-on-scroll my-4">
                          <table className="table table-bordered fade-in-on-scroll">
                            <thead style={{ backgroundColor: "#f0f0f0" }} className="fade-in-on-scroll">
                              <tr className="text-blue">
                                <th>Category</th>
                                <th>Details</th>
                              </tr>
                            </thead>
                            <tbody className="fade-in-on-scroll">
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>Primary Use</strong></td>
                                <td>Semiconductors, glass decolorizing, solar cells, animal feed, biofortification</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>Global Production</strong></td>
                                <td>~3,000 tonnes/year (mostly by-product of copper smelting)</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>Top Producers</strong></td>
                                <td>Japan, South Korea, Belgium, Germany, China</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>India's Import Dependency</strong></td>
                                <td>100%</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>Potential Domestic Source</strong></td>
                                <td>Hindustan Copper Ltd anode slimes, urban e-waste hubs</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>Strategic Recommendation</strong></td>
                                <td>G2G offtake with Japan/South Korea; pilot nano-selenium; integrate SELREC model</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <h5 className="fade-in-on-scroll my-4 text-blue">Strengthening Supply Chains</h5>

                        <p className="fade-in-on-scroll my-4">
                          India is currently fully import-dependent on selenium, with key sourcing from countries like Japan, South Korea, and Belgium, all of whom recover it as a by-product of copper smelting. To insulate against geopolitical disruptions and price volatility, India should pursue G2G agreements with these countries, akin to Japan's joint selenium procurement framework with JX Nippon Mining & Metals. The Ministry of External Affairs' Economic Diplomacy Division should coordinate with the Ministry of Mines and Ministry of Electronics & IT to ensure cross-sectoral alignment.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          Domestically, Hindustan Copper Ltd and other integrated copper producers should be incentivized via Viability Gap Funding (VGF) and policy-based fiscal support under the Production Linked Incentive (PLI) Scheme for Non-Ferrous Metals. Additionally, strategic reserves of selenium—especially for its role in semiconductors, solar cells, and glassmaking—should be initiated by the Ministry of Chemicals and Fertilizers in collaboration with the newly proposed National Critical Minerals Mission.
                        </p>

                        <p className="fade-in-on-scroll my-4" style={{ fontStyle: "italic" }}>
                          Disclaimer: Data updated as of June 2025, next update on September 2025
                        </p>

                        <h5 className="fade-in-on-scroll my-4 text-blue">References</h5>
                        <ul className="fade-in-on-scroll fw-normal" style={{ listStyleType: "none", paddingLeft: 0 }}>
                          <li className="my-3">EMBRAPA. (2022). <em>Nano Selenium Uptake in Soybean and Environmental Effects</em>. Brazilian Agricultural Research Corporation.</li>
                          <li className="my-3">EU SELREC Report. (2023). <em>Selenium Recovery for a Resilient European Circular Economy</em>. European Commission.</li>
                          <li className="my-3">USGS. (2024). <em>Mineral Commodity Summaries — Selenium</em>, p. 155.</li>
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