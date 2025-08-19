import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

gsap.registerPlugin(ScrollTrigger);

export default function Potash() {
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
            alt="Potash"
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
                        <h3 className="fade-in-on-scroll"><strong>Potash: Strategic Alternatives</strong></h3>

                        <h4 className="fade-in-on-scroll my-4 text-blue"><strong>Alternate Chemistries</strong></h4>

                        <p className="fade-in-on-scroll my-4">
                          Potassium-mobilizing biofertilizers (KMBs), particularly strains of <em>Frateuria aurantia</em>, have shown promise in reducing potash dependence in Indian agriculture. Field trials conducted in maize and sugarcane farms across Tamil Nadu and Maharashtra demonstrated a 25% improvement in potassium uptake and overall plant growth (ICAR AICRP, 2023). Wider deployment of KMBs through Krishi Vigyan Kendras (KVKs) and soil health card schemes can enable demand-side substitution in low to medium potassium index regions.
                        </p>

                        <h4 className="fade-in-on-scroll my-4 text-blue"><strong>Technological Alternatives</strong></h4>

                        <p className="fade-in-on-scroll my-4">
                          India lacks commercially viable domestic reserves of potash, but alternate sources exist. Extraction from seawater brine and lake residues via solar evaporation---successfully deployed in China's Qinghai Lake region---offers a scalable low-carbon pathway. Gujarat's Little Rann and coastal Tamil Nadu provide suitable conditions to pilot such technologies.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          Additionally, domestic fertilizer complexes could adopt fluidized bed reactors for producing sulphate of potash (SOP) from imported polyhalite or kainite. This would enable India to diversify away from muriate of potash (MOP), which constitutes over 95% of current imports, and meet the rising demand for chloride-sensitive crops like tobacco, potato, and horticultural produce.
                        </p>

                        <h4 className="fade-in-on-scroll my-4 text-blue"><strong>Strengthening Supply Chains</strong></h4>

                        <p className="fade-in-on-scroll my-4">
                          India imports nearly 100% of its potash requirements, largely from Canada, Russia, and Belarus. This triad controls over 60% of global production, making India vulnerable to geopolitical disruptions and price shocks. To reduce this dependency, India should actively diversify its supply base.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          Emerging potash exporters like Laos and Chile---together holding more than 5% of global reserves---present viable alternatives. India should pursue long-term offtake agreements with producers like Compass Minerals (Chile) and Uralkali's Laotian affiliates. Port-to-port contracts negotiated via the Ministry of External Affairs' Economic Diplomacy Division could mitigate risks associated with transit chokepoints and maritime insurance.
                        </p>

                        <p className="fade-in-on-scroll my-4">
                          In parallel, India must fast-track its deep-sea potash exploration programme in the Rann of Kutch, where preliminary surveys by the Geological Survey of India have indicated sub-surface saline formations with potassic potential. Partnerships with Israeli and Australian firms specializing in low-grade ore extraction can accelerate technology transfer and domestic capability building.
                        </p>

                        <p className="fade-in-on-scroll my-4" style={{ fontStyle: "italic" }}>
                          <em>Disclaimer: Data updated as of June 2025, next update on September 2025</em>
                        </p>
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