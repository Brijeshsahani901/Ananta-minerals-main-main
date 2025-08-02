import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

gsap.registerPlugin(ScrollTrigger);

export default function Tellurium() {
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
            alt="Tellurium"
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
                        <h3 className="fade-in-on-scroll"><strong>Tellurium: Strategic Alternatives</strong></h3>

                        <h4 className="fade-in-on-scroll my-4 text-blue"><strong>Alternative Chemistries</strong></h4>

                        <p className="fade-in-on-scroll my-4">
                          As the global solar industry begins to pivot away from cadmium telluride (CdTe)--based thin-film technologies, India has an opportunity to fast-track innovation and manufacturing capacity in next-generation photovoltaic chemistries that bypass tellurium altogether.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          Oxford PV's commercial rollout of <a href="https://www.oxfordpv.com/news/20-more-powerful-tandem-solar-panels-enter-commercial-use-first-time-us?utm_source=chatgpt.com" className="underline">perovskite--silicon tandem solar panels</a> in the U.S. exemplifies this shift. Their 72-cell modules deliver 20% more power output than conventional silicon panels and are already in utility-scale deployment, offering scalable, high-efficiency performance without tellurium.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          Heliatek's organic photovoltaics (OPVs) have set world records, achieving 12% efficiency on flexible films. These ultra-light, semi-transparent modules are ideally suited for <a href="https://www.heliatek.com/en/technology/opv/" className="underline">building-integrated photovoltaics (BIPV)</a> and are entirely free of tellurium.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          In Berlin, HZB and Humboldt University researchers recently certified 24.6% efficiency for a CIGS--perovskite tandem solar cell, marrying copper--indium--gallium--selenide <a href="https://www.sciencedaily.com/releases/2025/02/250204173758.htm?utm_source=chatgpt.com" className="underline">(CIGS)</a> bottom layers with perovskite top cells. This approach significantly reduces material dependency while achieving top-tier performance.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          The Centre for Solar Energy and Hydrogen Research (ZSW) set a new European record of 10.3% efficiency for <a href="https://www.nsenergybusiness.com/news/newsgerman-scientists-develop-new-process-for-thin-solar-cells-production-261113/?utm_source=chatgpt.com" className="underline">kesterite (CZTS) thin-film solar cells</a>---using earth-abundant elements like tin, zinc, sulfur, and copper while completely avoiding both cadmium and tellurium.
                        </p>

                        <div className="table-responsive fade-in-on-scroll my-4">
                          <table className="table table-bordered fade-in-on-scroll">
                            <thead style={{ backgroundColor: "#f0f0f0" }}>
                              <tr className="text-blue">
                                <th><strong>Emerging Non-Tellurium Solar Technologies</strong></th>
                                <th><strong>Efficiency Achieved</strong></th>
                                <th><strong>Key Features</strong></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-light-blue">Oxford PV -- Perovskite--Silicon Tandem</td>
                                <td>20% higher than silicon</td>
                                <td>Commercial-scale; no Te</td>
                              </tr>
                              <tr>
                                <td className="text-light-blue">Heliatek OPVs</td>
                                <td>12%</td>
                                <td>Flexible; BIPV-ready</td>
                              </tr>
                              <tr>
                                <td className="text-light-blue">HZB -- CIGS--Perovskite Tandem</td>
                                <td>24.6%</td>
                                <td>Low Te; scalable</td>
                              </tr>
                              <tr>
                                <td className="text-light-blue">ZSW -- Kesterite (CZTS)</td>
                                <td>10.3%</td>
                                <td>Cd/Te-free; earth-abundant</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <h4 className="fade-in-on-scroll my-4"><strong>Global Shifts in Technology</strong></h4>

                        <ul className="fade-in-on-scroll my-4 fw-normal">
                          <li className="my-3"><strong>United States:</strong> First Solar is commercializing Te-lean and alternate thin-film technologies.</li>
                          <li className="my-3"><strong>China:</strong> Tongwei Solar is investing in CIGS-based manufacturing lines.</li>
                          <li className="my-3"><strong>European Union:</strong> Horizon Europe's PHOTOTRACK programme is advancing perovskite photovoltaics.</li>
                          <li className="my-3"><strong>Australia:</strong> CSIRO continues pilot development of organic and perovskite-based solar cells.</li>
                        </ul>

                        <h4 className="fade-in-on-scroll my-4"><strong>Substitution Pathways:</strong></h4>

                        <ul className="fade-in-on-scroll fw-normal my-4">
                          <li className="my-3">For CdTe in thin films: Amorphous silicon, CIGS, CZTS</li>
                          <li className="my-3">For thermal/electrical devices: Bismuth selenide, organic polymers</li>
                          <li className="my-3">For rubber vulcanisation agents: Sulphur- and selenium-based compounds¹⁴</li>
                        </ul>

                        <h4 className="fade-in-on-scroll my-4"><strong>Domestic Pathways: Technology Diversification in India</strong></h4>

                        <p className="fade-in-on-scroll my-4">
                          India's Ministry of New and Renewable Energy (MNRE) and the Solar Energy Research Institute for India and the U.S. (SERIIUS) are well-positioned to lead initiatives in post-tellurium solar innovation. Private players like Adani Solar and Tata Power Solar must be incentivised to diversify beyond CdTe.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          India's PLI schemes for solar manufacturing, coupled with the Make in India programme, can serve as launchpads for developing thin-film technologies rooted in domestic research and global partnerships.
                        </p>

                        <h4 className="fade-in-on-scroll my-4 text-blue"><strong>Strategic Technology Transfer & Co‑Development Agreements</strong></h4>

                        <div className="table-responsive fade-in-on-scroll my-4">
                          <table className="table table-bordered fade-in-on-scroll">
                            <thead style={{ backgroundColor: "#f0f0f0" }}>
                              <tr className="text-blue">
                                <th><strong>Project Title</strong></th>
                                <th><strong>Partners</strong></th>
                                <th><strong>Scope</strong></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-light-blue"><strong>Perovskite Tandem Pilot with Oxford PV</strong></td>
                                <td>MNRE, Oxford PV, CSIR‑SOLAR</td>
                                <td>₹350 crore pilot to manufacture perovskite--silicon modules in India.</td>
                              </tr>
                              <tr>
                                <td className="text-light-blue"><strong>OPV Integration MoU with Heliatek</strong></td>
                                <td>DST, Heliatek GmbH, Tata Power Solar</td>
                                <td>₹200 crore Make in India R&D centre for BIPV organic films.</td>
                              </tr>
                              <tr>
                                <td className="text-light-blue"><strong>CIGS--Perovskite Indo--German Pact</strong></td>
                                <td>MNRE, HZB, IIT‑Madras</td>
                                <td>₹300 crore R&D facility for CIGS--perovskite tandem development.</td>
                              </tr>
                              <tr>
                                <td className="text-light-blue"><strong>Kesterite Scale-Up with ZSW</strong></td>
                                <td>MNRE, ZSW, CSIR‑NCL</td>
                                <td>₹150 crore demo line for CZTS absorber stack production.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <h4 className="fade-in-on-scroll my-4 text-blue">Additional Policy Recommendations</h4>

                        <h5 className="fade-in-on-scroll fw-normal my-4"><em>Upgrading Recycling Capabilities</em></h5>

                        <p className="fade-in-on-scroll my-4">
                          India currently lacks dedicated recycling infrastructure for tellurium. Specialized facilities are needed to extract tellurium from end-of-life CdTe solar panels and anode slimes from copper refineries. The Critical Minerals Mission (2025) should explicitly allocate resources toward:
                        </p>

                        <ul className="fade-in-on-scroll my-4 fw-normal">
                          <li className="my-3">Establishing reverse logistics systems for PV waste</li>
                          <li className="my-3">Funding public--private R&D on Te-recovery tech</li>
                          <li className="my-3">Offering financial incentives for solar panel recyclers</li>
                        </ul>

                        <h5 className="fade-in-on-scroll fw-normal my-4"><em>Diversifying Supply Chains</em></h5>

                        <p className="fade-in-on-scroll my-4">
                          With over 90% of global tellurium currently sourced from copper refining in China, India's dependence is a critical vulnerability. Strategic trade partnerships with South Korea, Canada, and Chile---countries with tellurium-producing refineries---could help diversify supply sources.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          India's clean energy ambitions hinge not just on deploying the next billion solar panels---but on doing so with resilient, diversified, and future-ready mineral inputs. Tellurium presents both a challenge and an opportunity. Strategic investment in alternate chemistries, technology co-development, and domestic innovation will help reduce tellurium dependency. The country's PLI schemes, bilateral R&D ties, and public--private partnerships can collectively ensure that tellurium scarcity does not impede India's solar transition.
                        </p>

                        <p className="fade-in-on-scroll my-4" style={{ fontStyle: "italic" }}>
                          <em>Disclaimer: Data updated as of June 2025, next update on September 2025</em>
                        </p>

                        <h4 className="fade-in-on-scroll my-4 text-blue"><strong>References</strong></h4>

                        <div className="fade-in-on-scroll my-4" style={{ fontStyle: "italic", fontSize : "1.08rem" }}>
                          <p className="my-3"><em>CSIRO (2024). Next-Gen Solar Research Portfolio.</em></p>
                          <p className="my-3"><em>First Solar (2024). Investor Presentation.</em></p>
                          <p className="my-3"><em>Heliatek GmbH (2024). OPV Efficiency Record Press Release.</em></p>
                          <p className="my-3"><em>Helmholtz-Zentrum Berlin (2024). CIGS--Perovskite Tandem Press Briefing.</em></p>
                          <p className="my-3"><em>Horizon Europe (2024). PHOTOTRACK Programme Overview.</em></p>
                          <p className="my-3"><em>IBM Yearbook (2024). Rare Metals in Energy Applications, Chapter 14, p. 2.</em></p>
                          <p className="my-3"><em>IBM Yearbook (2024). Tellurium Substitution Pathways, Chapter 14, p. 2.</em></p>
                          <p className="my-3"><em>Indian Solar Recycling Coalition (ISRC) (2024). PV Waste and Recovery.</em></p>
                          <p className="my-3"><em>MNRE (2023). PLI Scheme for High-Efficiency Solar PV Modules.</em></p>
                          <p className="my-3"><em>SERIIUS--IISc--MNRE Report (2023). Pathways for India--U.S. Solar Innovation.</em></p>
                          <p className="my-3"><em>Tongwei Solar (2023). Annual Report and Technology Roadmap.</em></p>
                          <p className="my-3"><em>World Bank (2023). Minerals for Climate Action.</em></p>
                          <p className="my-3"><em>Oxford PV (2024). Product Datasheet: Tandem Module Performance. Retrieved from https://www.oxfordpv.com</em></p>
                          <p className="my-3"><em>ZSW (2024). Efficiency Milestones in CZTS Solar Cells.</em></p>
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