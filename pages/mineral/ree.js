import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

gsap.registerPlugin(ScrollTrigger);

export default function RareEarthElement() {
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
                        <h4 className="fade-in-on-scroll">Rare Earth Elements: Supply Diversification and Tech Substitution</h4>

                        <h5 className="fade-in-on-scroll my-4 text-blue">Alternate Chemistries</h5>

                        <p className="fade-in-on-scroll my-4">
                          The global shift towards rare-earth-free technologies is accelerating, driven by cost pressures, geopolitical risk, and supply chain instability. Automakers such as BMW and Renault are transitioning to ferrite-based and induction motors, significantly reducing dependence on rare earth elements (REEs) in electric vehicles (IEA, 2022). <a href="https://press.zf.com/press/en/releases/release_60480.html" target="_blank" rel="noopener noreferrer"><em>ZF Friedrichshafen</em></a>, a German automotive supplier, has commercialized Inductively Excited Synchronous Motors (I2SMs) that offer performance parity with permanent magnet-based motors without requiring neodymium or dysprosium (ZF, 2023).
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          In Japan, <a href="https://global.toyota/en/newsroom/corporate/21139684.html#:~:text=A%20portion%20of%20the%20neodymium,maintain%20magnetization)%20and%20heat%20resistance." target="_blank" rel="noopener noreferrer"><em>Toyota's 2023</em></a> magnet design reduced neodymium content by incorporating cerium and lanthanum, and government-affiliated institutions like AIST have advanced research into iron-nitride-based magnets as viable alternatives (METI Japan, 2023). The United Kingdom's Advanced Electric Machines (AEM) has developed ferrite magnet motors that eliminate REEs altogether and, in May 2025, entered a partnership with India's Sterling <a href="https://www.business-standard.com/industry/auto/aem-brings-rare-earth-free-ev-motors-to-india-partners-with-sterling-gtake-125071101086_1.html" target="_blank" rel="noopener noreferrer"><em>Gtake E‑Mobility</em></a> to localize manufacturing in Faridabad (AEM, 2025).
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          In the United States, <a href="https://www.manufacturingtodayindia.com/general-motors-and-stellantis-invest-in-niron-magnetics-rare-earth-free-ev-magnet-technology#:~:text=General%20Motors%20and%20Stellantis%20invest,is%20currently%20dependent%20on%20China." target="_blank" rel="noopener noreferrer"><em>General Motors (GM) and BorgWarner</em></a> are investing in REE-free and low-REE motor platforms, while Niron Magnetics, backed by GM and Stellantis, is scaling up production of iron-nitride permanent magnets (Niron, 2024). Additionally, Australia's Lynas Rare Earths and university consortia are developing Mn‑Al‑C hybrid magnets under EU-funded SUSMAGPRO projects, which can potentially be licensed to Indian R&D institutions (SUSMAGPRO, 2024).
                        </p>

                        <h5 className="fade-in-on-scroll my-4">Key Companies Advancing REE-Free Motor Technologies</h5>

                        {/* Table */}
                        <div className="table-responsive fade-in-on-scroll my-4">
                          <table className="table table-bordered fade-in-on-scroll">
                            <thead style={{ backgroundColor: "#f0f0f0" }} className="fade-in-on-scroll">
                              <tr className="text-blue">
                                <th>Company / Institution</th>
                                <th>Country</th>
                                <th>Technology Focus</th>
                                <th>Notable Collaboration(s)</th>
                              </tr>
                            </thead>
                            <tbody className="fade-in-on-scroll">
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue">ZF Friedrichshafen AG</td>
                                <td>Germany</td>
                                <td>Induction-Excited Synchronous Motors (I²SM)</td>
                                <td>Potential India MoU</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue">Toyota</td>
                                <td>Japan</td>
                                <td>Nd-reduced magnets with La and Ce</td>
                                <td>IREL-Toyota Tsusho JV (India)</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue">AEM</td>
                                <td>United Kingdom</td>
                                <td>Ferrite-based magnets</td>
                                <td>JV with Sterling Gtake E-Mobility (India, 2025)</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue">Niron Magnetics</td>
                                <td>USA</td>
                                <td>REE-free permanent magnets (Iron-nitride based)</td>
                                <td>Backed by GM, Stellantis</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue">General Motors & BorgWarner</td>
                                <td>USA</td>
                                <td>REE-lite/REE-free EV motors</td>
                                <td>Internal scaling</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue">SUSMAGPRO Consortium</td>
                                <td>EU</td>
                                <td>Mn-Al-C, hybrid magnet systems</td>
                                <td>University partners, possible Indian licensing</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <h5 className="fade-in-on-scroll my-4">Strategic MoUs and Trade Agreements for India</h5>

                        <p className="fade-in-on-scroll my-4">
                          India can leverage these international advancements to catalyze a domestic shift toward REE alternatives. The existing IREL--Toyota Tsusho joint venture under the India--Japan Clean Energy Partnership provides a template for technology alignment. New Delhi should formalize cooperation with Germany's ZF or Fraunhofer IWU to transfer I2SM designs through a structured ₹500 crore Production-Linked Incentive (PLI) scheme. Similarly, a Memorandum of Cooperation with Niron Magnetics (US) would enable joint manufacturing of REE-free magnets in Indian Special Economic Zones, anchored in the Minerals Security Partnership (MSP) that India joined in June 2023 (US Department of State, 2023).
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          India's existing collaboration between Sterling Gtake and AEM (UK) should be expanded through a UK--India Strategic Partnership MoU, embedding ferrite magnet IP into India's EV supply chain. A broader public-private R&D consortium, involving institutions like IIT Madras and CPRI, could license motor designs from BMW and Renault and develop a "Magnet-Free Motor" ecosystem, targeting 20 MW of induction/ferrite motor capacity by 2027. A complementary ₹300 crore "Lightweight Alloy Innovation" grant should support co-development of Al-Ce rotor alloys, building on performance data published by BMW and Audi.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          These initiatives would not only reduce REE dependency but also catalyze the emergence of a globally competitive EV subcomponent manufacturing ecosystem within India.
                        </p>

                        <h5 className="fade-in-on-scroll my-4">Additional Supply Chain Recommendations</h5>

                        <i className="fade-in-on-scroll my-4">Boosting Domestic Capabilities</i>

                        <p className="fade-in-on-scroll my-4">
                          India's REE sector is constrained by legacy challenges in mining, refining, and safe handling. Given that REEs often occur alongside thorium, stringent containment and transportation protocols are essential. At present, India lacks the specialized logistics infrastructure required to manage these risks.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          Japan's REE recycling strategy offers a model for safe handling. Its innovations include vacuum-sealed packaging, inert gas-filled transport containers, and real-time monitoring systems for compound degradation (JOGMEC, 2023). India should seek collaboration with Japan to co-develop such containment protocols under a bilateral R&D framework—especially through the Japan-India Energy Dialogue.
                        </p>

                        <i className="fade-in-on-scroll fw-normal my-4">Processing Opportunities in Central Asia</i>

                        <p className="fade-in-on-scroll my-4">
                          In June 2024, Kazakhstan declassified geological data on REE and rare metal reserves to attract Western investment. This move aligns with growing interest from the US, UK, and EU, positioning Kazakhstan as a viable alternative to China for rare-earth processing (Bekmurzaev, 2024). India could leverage its growing role in the C5+1 regional dialogue—which includes Kazakhstan—to secure processing partnerships.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          Collaborating with Kazakhstan under the US--India Critical Minerals Working Group would allow India to integrate with Western-aligned REE value chains and fast-track its own processing expertise.
                        </p>

                        <i className="fade-in-on-scroll fw-normal my-4">Stockpiling Strategies and Collaborating with Vietnam</i>

                        <p className="fade-in-on-scroll my-4">
                          China's strategic stockpiling and export restrictions have exposed the fragility of global REE markets. Vietnam, which holds the world's second-largest REE reserves after China, has become a key focus of US-led supply diversification (USGS, 2024, p. 145). With US support, Vietnam is rapidly scaling up mining and processing capacities.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          India should pursue a joint stockpile mechanism with Vietnam, Japan, the US, and Australia, under the Indo-Pacific Economic Framework (IPEF) or a dedicated Quad Supply Chain Task Force. Such a pooled reserve would provide mutual supply guarantees in times of market volatility, reducing strategic vulnerability to Chinese disruptions.
                        </p>

                        <p className="fade-in-on-scroll" style={{ fontStyle: "italic" }}>
                          Disclaimer: Data updated as of June 2025, next update on September 2025
                        </p>

                        <h6 className="fade-in-on-scroll my-4 text-blue">References</h6>
                        <ul className="fade-in-on-scroll fw-normal" style={{ listStyleType: "none", paddingLeft: 0 }}>
                          <li className="my-3">AEM. (2025). <em>Advanced Electric Machines and Sterling Gtake Form Strategic Manufacturing Partnership</em>. AEM News Release, May 2025.</li>
                          <li className="my-3">Bekmurzaev, A. (2024). "Kazakhstan Opens Rare Earth Deposits to Global Investment." <em>Steppe Insight Journal</em>, June 2024.</li>
                          <li className="my-3">IEA. (2022). <em>The Role of Critical Minerals in Clean Energy Transitions</em>. International Energy Agency.</li>
                          <li className="my-3">JOGMEC. (2023). <em>Rare Earth Recycling and Safe Handling Protocols in Japan</em>. Japan Oil, Gas and Metals National Corporation Technical Brief.</li>
                          <li className="my-3">METI Japan. (2023). <em>New Rare Earth Substitution Technologies by AIST and Toyota</em>. Ministry of Economy, Trade and Industry Press Briefing.</li>
                          <li className="my-3">Niron Magnetics. (2024). <em>Permanent Magnet Innovation for the Next-Gen EV Era</em>. Corporate Report.</li>
                          <li className="my-3">SUSMAGPRO. (2024). <em>Sustainable Recovery, Reprocessing and Reuse of Rare-Earth Magnets</em>. EU Horizon 2020 Programme.</li>
                          <li className="my-3">US Department of State. (2023). <em>Minerals Security Partnership: India Joins New Supply Chain Initiative</em>. June 2023.</li>
                          <li className="my-3">USGS. (2024). <em>Mineral Commodity Summaries: Rare Earths</em>. U.S. Geological Survey, p. 145.</li>
                          <li className="my-3">ZF Friedrichshafen AG. (2023). <em>Induction Motor Solutions for REE-Free Drive Trains</em>. Technical White Paper.</li>
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