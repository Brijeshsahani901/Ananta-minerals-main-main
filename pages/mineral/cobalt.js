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
                        <h4 className="fade-in-on-scroll">Cobalt Alternatives and Strategic Pathways for India's Battery Future</h4>

                        <p className="fade-in-on-scroll">
                          Cobalt, a critical input in high-performance lithium-ion batteries, faces mounting concerns around supply concentration, ethical sourcing, and cost volatility. In response, research institutions and industry leaders are accelerating the development of cobalt-free cathode technologies.
                        </p>

                        <h5 className="fade-in-on-scroll my-4 text-blue">Global R&D Momentum</h5>

                        <ul className="fade-in-on-scroll my-4">
                          <li className="my-2">
                            <strong className="text-light-blue">LNMO Cathodes:</strong> Under the <a href="https://www.energy.gov/articles/doe-announces-42-million-develop-more-affordable-and-efficient-advanced-electric-vehicle?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer"><em>U.S. Department of Energy's (DOE)</em> <em>EVs4ALL</em> <em>initiative</em></a>, South 8 Technologies received $3.15 million to commercialize lithium nickel manganese oxide (LNMO) cathodes paired with a proprietary LiGas electrolyte, targeting rapid-charging, cobalt-free cells.
                          </li>
                          <li className="my-2">
                            <strong className="text-light-blue">NFA Cathodes:</strong> <a href="https://www.ornl.gov/news/new-class-cobalt-free-cathodes-could-enhance-energy-density-next-gen-lithium-ion-batteries?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer"><em>Oak Ridge National Laboratory (ORNL)</em></a> has developed nickel‑iron‑aluminum (NFA) cathodes that eliminate cobalt entirely while achieving energy densities comparable to traditional NMC materials. This research is backed by the DOE Office of Science.
                          </li>
                          <li className="my-2">
                            <strong className="text-light-blue">DRX Cathodes:</strong> The <a href="https://newscenter.lbl.gov/2023/09/11/new-consortium-to-make-ev-batteries-more-sustainable/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer"><em>DRX Consortium</em></a>—co-led by Lawrence Berkeley National Laboratory and UC Berkeley—advances disordered rock salt (DRX) cathodes made solely from manganese and titanium, dispensing with both cobalt and nickel.
                          </li>
                          <li className="my-2">
                            <strong className="text-light-blue">Hydro4Crystal Process:</strong> Argonne National Laboratory, in collaboration with ACTion Battery Technologies, has pioneered a <a href="https://www.energy.gov/eere/ammto/articles/celebrating-lasting-impact-year-advanced-materials-and-manufacturing?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer"><em>hydrothermal</em></a> process for the continuous production of cobalt-free, nickel-rich cathode crystals. This is being scaled under DOE's Advanced Materials and Manufacturing Technologies Office (AMMTO).
                          </li>
                        </ul>

                        <p className="fade-in-on-scroll my-2">
                          In parallel, industry adoption of lithium iron phosphate (LFP) batteries—entirely cobalt-free—has accelerated. Tesla and BYD have already commercialized LFP batteries at scale, citing their lower cost and longer cycle life. In Europe, initiatives like the ReLieVe project aim to recover cobalt from end-of-life batteries and support the circular economy transition.
                        </p>

                        <h5 className="fade-in-on-scroll my-4 text-blue">Policy Pathways for India</h5>

                        <i className="fade-in-on-scroll my-4">Supporting Domestic Cathode Innovation</i>

                        <p className="fade-in-on-scroll my-4">
                          India can invest in global cobalt-free innovations to reduce long-term import dependence and position itself as a hub for next-generation battery manufacturing. Key bilateral and institutional pathways include:
                        </p>

                        {/* Table */}
                        <div className="table-responsive fade-in-on-scroll my-4">
                          <table className="table table-bordered fade-in-on-scroll">
                            <thead style={{ backgroundColor: "#f0f0f0" }} className="fade-in-on-scroll">
                              <tr className="text-blue">
                                <th>Initiative</th>
                                <th>Partners</th>
                                <th>Scope</th>
                                <th>Estimated Investment</th>
                              </tr>
                            </thead>
                            <tbody className="fade-in-on-scroll">
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>NFA Cathode Co-Development</strong></td>
                                <td>DST, ORNL, CSIR‑CECRI</td>
                                <td>Joint R&D and scale-up of ORNL's cobalt-free NFA prototypes in India</td>
                                <td>₹200 crore</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>DRX Joint Center</strong></td>
                                <td>NITI Aayog, Berkeley Lab, IIT Bombay</td>
                                <td>"Advanced Cathode Materials" CoE in Mumbai to commercialize DRX cathodes</td>
                                <td>₹300 crore</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>Hydro4Crystal Pilot Line</strong></td>
                                <td>DST, Argonne, IISc Bangalore</td>
                                <td>Pilot a 100 kW hydrothermal cathode line for cobalt-free materials</td>
                                <td>₹150 crore</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <i className="fade-in-on-scroll my-4">Scaling LFP Cathode Manufacturing</i>
                        <p className="fade-in-on-scroll my-4">
                          India can co-invest in licensed LFP cathode production under a <strong>₹1,000 crore Production-Linked Incentive (PLI) scheme.</strong> This would allow domestic battery players like Exide and Amara Raja to adopt proven Blade-style battery designs and accelerate local LFP deployment. Such a move also aligns with India's energy security and industrial self-reliance goals.
                        </p>

                        <h5 className="fade-in-on-scroll text-blue my-4">Enhancing Supply Security</h5>

                        <i className="fade-in-on-scroll my-5">Tapping into Southeast Asia</i>
                        <p className="fade-in-on-scroll my-4">
                          Indonesia's 2023 cobalt <strong>export restriction on critical raw materials</strong> has driven domestic value addition and created a window for strategic partnerships. As ASEAN Chair and a participant in the Minerals Security Partnership (MSP)—alongside India—Indonesia plays a pivotal regional role in battery mineral supply chains.
                        </p>

                        <p className="fade-in-on-scroll my-2">India can:</p>
                        <ul className="fade-in-on-scroll">
                          <li className="my-2 fw-normal">Pursue a formal cobalt cooperation agreement with Indonesia.</li>
                          <li className="my-2 fw-normal">Engage with Prabowo Subianto's administration to build long-term collaboration on downstream processing and joint ventures in refining or precursor production.</li>
                        </ul>

                        <p className="fade-in-on-scroll">
                          Despite temporary halts in mining policy reviews, Indonesia remains committed to developing its EV supply chain. A well-structured bilateral arrangement could enhance India's access to refined cobalt while reinforcing regional supply diversification.
                        </p>

                        <p className="fade-in-on-scroll my-4">Strategic Stockpiling Framework</p>
                        <p className="fade-in-on-scroll">
                          China's dominance in cobalt is reinforced not just by mining assets but also by state-backed stockpiling. In 2024, Beijing announced plans to <strong>procure up to 15,000</strong> metric tons of cobalt, raising the risk of price manipulation and supply shocks.
                        </p>

                        <p className="fade-in-on-scroll my-4">India can:</p>
                        <ul className="fade-in-on-scroll my-4">
                          <li className="my-2 fw-normal">Establish a Strategic Reserves Administration for Critical Minerals, modeled on the Strategic Petroleum Reserves.</li>
                          <li className="my-2 fw-normal">Begin with cobalt, lithium, and graphite—minerals where domestic reserves are limited.</li>
                          <li className="my-2 fw-normal">Allocate dedicated funds under the National Critical Minerals Mission (2024 Budget) to secure stable inventories and buffer against geopolitical disruptions.</li>
                        </ul>

                        <h6 className="fade-in-on-scroll my-4">Securing African Partnerships</h6>
                        <p className="fade-in-on-scroll">
                          The Democratic Republic of Congo (DRC) supplies over 70% of global cobalt but is increasingly marked by political uncertainty and degrading ore quality. India's presence in African critical minerals remains nascent, despite MoUs with Zambia and Zimbabwe.
                        </p>

                        <p className="fade-in-on-scroll my-4">A stronger African strategy should:</p>
                        <ul className="fade-in-on-scroll my-4">
                          <li className="my-2 fw-normal">Target investments in mineral-rich countries like South Africa, Namibia, and Madagascar.</li>
                          <li className="my-2 fw-normal">Develop transport corridors and logistics infrastructure to facilitate mineral exports from landlocked states.</li>
                          <li className="my-2 fw-normal">Form strategic partnerships with African producers on value-added processing rather than raw material extraction.</li>
                        </ul>

                        <p className="fade-in-on-scroll my-4">
                          As the global battery sector pivots away from cobalt, India must proactively invest in cobalt-free chemistries, secure regional partnerships, and create robust domestic reserves. These actions will not only insulate the country from volatile cobalt markets but also establish India as a credible player in the global energy transition.
                        </p>

                        <p className="fade-in-on-scroll" style={{ fontStyle: "italic" }}>
                          Disclaimer: Data updated as of June 2025, next update on September 2025
                        </p>

                        <h6 className="fade-in-on-scroll my-4 text-blue">References</h6>
                        <ul className="fade-in-on-scroll my-4 fw-normal" style={{ listStyleType: "none", paddingLeft: 0 }}>
                          <li className="my-2">Argonne National Laboratory, <em>Hydro4Crystal Process Brief</em>, 2023.</li>
                          <li className="my-2">Desai, A. (2024). <em>Critical Mineral Supply Chains and China's Strategic Reserves</em>.</li>
                          <li className="my-2">Indonesia Ministry of Energy and Mineral Resources, Policy Updates, 2023–2024.</li>
                          <li className="my-2">Lawrence Berkeley National Lab, <em>DRX Consortium Funding News</em>, 2023.</li>
                          <li className="my-2">Ministry of Mines, Government of India. <em>National Critical Minerals Strategy</em>, 2024.</li>
                          <li className="my-2">Oak Ridge National Laboratory, <em>NFA Cathode Research Update</em>, 2020.</li>
                          <li className="my-2">ReLieVe Project, EU Battery Alliance, 2021–2024.</li>
                          <li className="my-2">Tesla Battery Day, 2020; BYD Product Launches, 2022–2024.</li>
                          <li className="my-2">U.S. Department of Energy, <em>EVs4ALL Program Announcements</em>, 2023–2024.</li>
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