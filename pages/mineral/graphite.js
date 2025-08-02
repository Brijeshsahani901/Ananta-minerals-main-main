import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

gsap.registerPlugin(ScrollTrigger);

export default function Graphite() {
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
                        <h4 className="fade-in-on-scroll">Graphite Strategy for India: Diversification, Substitution, and Global Collaboration</h4>

                        <p className="fade-in-on-scroll my-4">
                          As demand for graphite surges—especially for lithium-ion battery anodes—the industry is undergoing a technological shift to address supply chain concentration, carbon intensity, and material bottlenecks. Global efforts are now focused on synthetic graphite production, carbon-neutral mining, and advanced purification processes.
                        </p>

                        <h5 className="fade-in-on-scroll my-4">Global Advances in Graphite Supply</h5>

                        <ul className="fade-in-on-scroll my-4 fw-normal">
                          <li className="my-3">
                            <strong className="text-light-blue">Synthetic Graphite Production:</strong> US-based <a href="https://www.novonixgroup.com/conditional-commitment-announcement/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">NOVONIX</a> is leading efforts to produce synthetic graphite domestically, reducing dependence on Chinese supply chains. Its <em>Riverside</em> facility aims to reach 20,000 t/y by 2025 using proprietary graphitization furnace technology.
                          </li>
                          <li className="my-3">
                            <strong className="text-light-blue">Carbon-Neutral Natural Graphite Mining:</strong> Canada's <a href="https://www.businesswire.com/news/home/20240214552719/en/NMG-Announces-Offtake-Agreement-with-GM-for-Canadian-Graphite-and-US%24150-Million-Equity-Investment" target="_blank" rel="noopener noreferrer"><em>Nouveau Monde Graphite</em></a> (NMG) is developing the <em>Matawinie</em> mine—one of the world's first all-electric, zero-emission graphite mining operations. NMG has secured US$150 million in offtake and equity agreements from General Motors and Panasonic for 18,000 t/y of anode-grade graphite.
                          </li>
                          <li className="my-3">
                            <strong className="text-light-blue">Spherical Graphite Development in the U.S.:</strong> <a href="https://www.graphiteoneinc.com/mine-to-material-manufacturing/" target="_blank" rel="noopener noreferrer"><em>Graphite One's</em> <em>Graphite Creek</em></a> project in Alaska is building a sustainable supply of spherical graphite for EV batteries. Its pilot facility presents opportunities for joint R&D and future technology collaboration with Indian institutions.
                          </li>
                        </ul>

                        <h5 className="fade-in-on-scroll my-4 text-blue">Strategic Initiatives for India</h5>

                        <p className="fade-in-on-scroll my-4">
                          To secure graphite access and enhance self-reliance, India should invest in global partnerships and pilot domestic innovations across mining, processing, and advanced materials development.
                        </p>

                        <i className="fade-in-on-scroll my-4">Strategic MoUs and Technology Transfer</i>

                        {/* Table */}
                        <div className="table-responsive fade-in-on-scroll my-4">
                          <table className="table table-bordered fade-in-on-scroll">
                            <thead style={{ backgroundColor: "#f0f0f0" }} className="fade-in-on-scroll">
                              <tr className="text-light-blue">
                                <th>Initiative</th>
                                <th>Partners</th>
                                <th>Scope</th>
                                <th>Estimated Investment</th>
                              </tr>
                            </thead>
                            <tbody className="fade-in-on-scroll">
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>Synthetic Graphite Plant with NOVONIX</strong></td>
                                <td>NOVONIX, PLI Scheme, Indian EV OEMs</td>
                                <td>Co-develop 10,000 t/y synthetic graphite anode plant in India under ₹800 crore slab</td>
                                <td>₹800 crore</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>Green-Mine JV with NMG</strong></td>
                                <td>KABIL/State Mining Depts., NMG</td>
                                <td>Replicate carbon-neutral <em>Matawinie</em> mine in Odisha or Jharkhand, powered by hydropower and electric fleets</td>
                                <td>₹500 crore</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>Graphite Creek R&D Partnership</strong></td>
                                <td>Graphite One, C-MET, Ministry of S&T</td>
                                <td>Trilateral R&D consortium on spherical graphite purification and coating</td>
                                <td>₹300 crore</td>
                              </tr>
                              <tr className="fade-in-on-scroll">
                                <td className="text-light-blue"><strong>Composite Anode Pilot with SGL Carbon</strong></td>
                                <td>SGL Carbon, CSIR-CMERI</td>
                                <td>Develop 5 MW graphite-silicon composite anode pilot integrating SGL coatings with Indian materials</td>
                                <td>TBD</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <i className="fade-in-on-scroll my-4">Tapping into New Supply Regions</i>

                        <p className="fade-in-on-scroll my-4">
                          India must proactively diversify beyond China and Mozambique—its two largest graphite import sources—by engaging with emerging suppliers in Latin America, North America, and Europe.
                        </p>

                        <ul className="fade-in-on-scroll my-4 fw-normal">
                          <li className="my-3">
                            Home to substantial graphite reserves and an existing partnership with India on sustainable energy, Brazil presents a logical next step for raw material and technology collaboration.
                          </li>
                          <li className="my-3">
                            Exported 21% of its graphite to the U.S. in 2023 (Benson & Denamiel, 2023), with a mineral trade surplus of USD 12.8 billion (International Trade Association, 2023). India should capitalise on Mexico's recent mining law that nationalises critical minerals and facilitates structured state-led agreements.
                          </li>
                          <li className="my-3">
                            Norway holds promising flake graphite deposits in Senja Island, Lofoten-Vesterålen, and Bamble, with <em>Skaland Graphite</em> as the leading producer. According to the Geological Survey of Norway, these reserves offer high-purity flake graphite. India can engage Norway through a dedicated trade and logistics pact to establish a Nordic graphite corridor.
                          </li>
                          <li className="my-3">
                            India can collaborate with Japan and South Korea—world leaders in battery-grade graphite processing and materials engineering. Japan brings decades of experience in anode material manufacturing and purification technologies. South Korea's Posco International is building its graphite supply chain through a US$40 million investment in Tanzania's <em>Black Rock Mining</em>. India should emulate this model by securing equity stakes or long-term offtakes in Africa and Southeast Asia.
                          </li>
                        </ul>

                        <p className="fade-in-on-scroll my-4">
                          India's graphite strategy must rest on three pillars: scaling up domestic innovation, securing diversified global supply, and forming high-value technology partnerships. Strategic collaborations can facilitate access to proprietary purification and coating technologies, support for domestic cell manufacturers, and integration into global EV supply chains. By investing in synthetic graphite production, piloting green mines, and integrating with emerging suppliers from Norway to Mexico, India can reduce strategic dependence and become a competitive player in the global battery value chain.
                        </p>

                        <p className="fade-in-on-scroll my-4" style={{ fontStyle: "italic" }}>
                          Disclaimer: Data updated as of June 2025, next update on September 2025
                        </p>

                        <h6 className="fade-in-on-scroll my-4 text-blue">References</h6>
                        <ul className="fade-in-on-scroll fw-normal" style={{ listStyleType: "none", paddingLeft: 0 }}>
                          <li className="my-2">Benson, A., & Denamiel, S. (2023). <em>Critical Minerals Trade Flows in North America.</em></li>
                          <li className="my-2">Geological Survey of Norway. <em>Graphite Resource Mapping, 2022.</em></li>
                          <li className="my-2">Graphite One Inc. <em>Graphite Creek Project Overview, 2023.</em></li>
                          <li className="my-2">IBM Yearbook (2024). <em>Mineral Production Statistics.</em></li>
                          <li className="my-2">International Trade Association. <em>Mexico Mining Sector Report, 2023.</em></li>
                          <li className="my-2">Nouveau Monde Graphite. <em>Matawinie Mine and Offtake Agreements, 2022–2024.</em></li>
                          <li className="my-2">NOVONIX Ltd. <em>Corporate Update on Riverside Facility, 2023–2024.</em></li>
                          <li className="my-2">Posco International. <em>Tanzania Investment in Black Rock Mining, 2023.</em></li>
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