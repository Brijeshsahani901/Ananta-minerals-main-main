import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function About() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="blog-details-area fit-content-height"
        
      >
        {/* Full-width image */}
        <div style={{ width: "100%", background: "#f5f5f5", margin: "0px 0" }}>
          <img
            src={`${basePath}/assets/img/about-img.jpg`}
            alt="About"
            style={{
              width: "100%",
              height: "55vh",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Centered content */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-10">
              <div className="blog-post-wrapper">
                <div className="latest__post-item">
                  <div className="latest__post-content">
                    <div style={{ marginTop: "30px" }}>
                      <div
                        className="p-4"
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#fff",
                        }}
                      >
                        <h1
                          className="text-center  mb-4"
                          
                        >
                          <span style={{borderBottom : "3px solid black"}}>About Us</span>
                          
                        </h1>
                        <p>
                          Critical minerals are fast becoming what oil and gas
                          were to the last century—indispensable to economic
                          security, strategic autonomy, and technological
                          progress. In an era of global transitions—from clean
                          energy to advanced manufacturing—the race to secure
                          reliable access to these minerals has intensified.
                          India, too, has recognized this strategic imperative.
                          With the launch of the Critical Minerals Mission,
                          rising exploration activity, and a growing number of
                          auctions and procurement efforts, India is laying the
                          groundwork for long-term mineral security.
                          Simultaneously, geopolitical shifts and tightening
                          export controls have exposed the fragility of global
                          supply chains.
                        </p>

                        <br />

                        <p>
                          The <strong>Critical Minerals Dashboard</strong> by
                          Ananta is a first-of-its-kind platform that offers a
                          sector-wise, data-driven view of India’s critical
                          mineral landscape. It brings together mineral
                          intelligence and policy insight to help
                          decision-makers, researchers, and industry leaders
                          understand:
                        </p>

                        <br />

                        <ul>
                          <li>Which minerals matter most for which sectors</li>
                          <li>Where the vulnerabilities lie</li>
                          <li>
                            What strategies can build resilient and diversified
                            supply chains
                          </li>
                        </ul>

                        <p className="mb-0">
                          All infographics and visual tools on the dashboard
                          have been created in-house, with an emphasis on
                          mapping mineral dependencies and supply chain risks.
                          This dashboard aims to be a resource for strategic
                          foresight, informed policy, and collaborative
                          solutions.
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
