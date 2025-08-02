import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

gsap.registerPlugin(ScrollTrigger);

export default function Tungsten() {
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
                        <h4 className="fade-in-on-scroll">Tungsten: Strategic Alternatives</h4>

                        <h5 className="fade-in-on-scroll my-4 text-blue">Exploring Alternative Chemistries</h5>

                        <p className="fade-in-on-scroll my-4">
                          Tungsten's high density and melting point have made it indispensable in defence applications, particularly in armour-piercing kinetic energy penetrators (KEPs), shaped charges, and high-temperature rocket engine components. While no perfect substitute exists, select alternatives have shown promise under specific conditions.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          Recent US Army field tests suggest that depleted uranium alloys—though controversial due to toxicity—and hafnium carbide coatings can outperform tungsten in penetrator depth and hardness. India's Defence Research and Development Organisation (DRDO) could consider evaluating these alternatives under controlled conditions at DRDO-Hyderabad's ballistic testing facilities for high-impact use cases only (Silverado Policy Accelerator, 2023).
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          Parallelly, emerging alloy designs are attempting to match tungsten's mechanical attributes. A 2024 study in the <em>International Journal of Metallurgy and Materials</em> reports that W–Ni–Fe–Re (rhenium) alloys achieved up to 30% grain refinement and 15% greater fracture toughness compared to traditional tungsten heavy alloys (WHAs). These findings are corroborated by MDPI research that finds the inclusion of just 5 wt% rhenium into W–Ni–Fe matrices improves both penetration resilience and thermal stability, potentially enabling tungsten-lite alternatives in next-generation munitions (MDPI, 2024).
                        </p>

                        <h5 className="fade-in-on-scroll my-4 text-blue">Alternate Technologies</h5>

                        <p className="fade-in-on-scroll my-4">
                          Tungsten ores, particularly wolframite and scheelite, are challenging to process due to their low-grade and refractory nature. However, Spain and Austria have pioneered techniques such as enhanced gravity separation and microwave-assisted beneficiation, significantly lowering operational costs and improving recovery rates.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          India's Chendapathar (West Bengal) and Degana (Rajasthan) tungsten deposits have remained underexploited due to historical processing challenges. A joint beneficiation pilot involving the Institute of Minerals and Materials Technology (IMMT) Bhubaneswar, Austria's MINEX, and the Geological Survey of India (GSI) could help re-evaluate these reserves using microwave-assisted disintegration and multi-gravity separation units suited for fine particle concentration.
                        </p>

                        <h5 className="fade-in-on-scroll my-4 text-blue">Strengthening Supply Chains</h5>

                        <p className="fade-in-on-scroll   my-4">
                          India currently imports more than 90% of its tungsten requirement, with China (71%), Russia (15%), and Vietnam (6%) as primary suppliers (IBM Yearbook, 2024, Chapter 13, p.6). Given the mineral's importance to the Indian defence sector, such concentrated import dependence poses significant geopolitical risks.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          To diversify and strengthen its tungsten supply chain, India should:
                        </p>

                        <ul className="fade-in-on-scroll my-4 fw-normal">
                          <li className="my-3">Accelerate bilateral mining agreements with Portugal's W Resources and UK's Pryderi Resources, both of which operate under European Chemicals Agency (ECHA) environmental and ethical mining standards.</li>
                          <li className="my-3">Establish strategic stockpiles of ammonium paratungstate (APT) and ferrotungsten alloys in collaboration with the Ministry of Defence and Strategic Materials Division under MEA.</li>
                          <li className="my-3">Explore commercial offtake partnerships with Kazakhstan and Rwanda, emerging tungsten producers with non-aligned export policies.</li>
                        </ul>

                        <p className="fade-in-on-scroll my-4" style={{ fontStyle: "italic" }}>
                          Disclaimer: Data updated as of June 2025, next update on September 2025
                        </p>

                        <h6 className="fade-in-on-scroll my-4 text-blue">References</h6>
                        <ul className="fade-in-on-scroll my-4 fw-normal" style={{ listStyleType: "none", paddingLeft: 0 }}>
                          <li className="my-3">AGH University of Science and Technology. (2023). <em>Advances in Tungsten-Heavy Alloy Fabrication</em>.</li>
                          <li className="my-3">IBM Yearbook. (2024). <em>Indian Minerals Statistics 2024</em>, Chapter 13, p.6.</li>
                          <li className="my-3">MDPI. (2024). <em>Microstructure and Toughness Enhancements in W–Ni–Fe–Re Alloys</em>.</li>
                          <li className="my-3">MINEX Austria & IMMT Bhubaneswar. (2023). <em>Pilot Tungsten Beneficiation Collaboration Framework</em>.</li>
                          <li className="my-3">Pryderi Resources. (2023). <em>Sustainable Tungsten Sourcing for Strategic Allies</em>.</li>
                          <li className="my-3">Silverado Policy Accelerator. (2023). <em>Replacing Tungsten: US Kinetic Energy Penetrator Trials</em>.</li>
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