import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpanded(true); // Auto-expand after delay
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const toggleAccordion = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Layout
      breadcrumbCategory="About"
      breadcrumbPostTitle="About the Critical Minerals Dashboard"
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="blog-details-area  fit-content-height"
        style={{
          backgroundImage: `url("https://brijesh.alpinesoftit.com/site3/static/media/home-shape.684c9f3deb5fb22fbe2f.png")`,
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              <div className="blog-post-wrapper">
                <div className="latest__post-item">
                  <div className="latest__post-content">
                    <div className="accordion" style={{ marginTop: "30px" }}>
                      <div className="accordion-item mb-3">
                        <motion.div
                          className="accordion-header"
                          onClick={toggleAccordion}
                          style={{
                            backgroundColor: expanded ? "#f8f9fa" : "#fff",
                            border: "1px solid #dee2e6",
                            borderRadius: "5px",
                            cursor: "pointer",
                            padding: "1rem 1.5rem",
                          }}
                          whileHover={{ backgroundColor: "#f1f3f5" }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="d-flex justify-content-between align-items-center">
                            <h3
                              className="mb-0"
                              style={{
                                fontSize: "1.2rem",
                                fontWeight: "600",
                                color: expanded ? "#0d6efd" : "#212529",
                              }}
                            >
                              {/* Critical */}
                            </h3>
                            {expanded ? (
                              <FiChevronUp size={20} />
                            ) : (
                              <FiChevronDown size={20} />
                            )}
                          </div>
                        </motion.div>

                        <AnimatePresence initial={false}>
                          {expanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              style={{ overflow: "hidden" }}
                            >
                              <div
                                className="accordion-content p-4"
                                style={{
                                  border: "1px solid #dee2e6",
                                  borderTop: "none",
                                  borderRadius: "0 0 5px 5px",
                                  backgroundColor: "#fff",
                                }}
                              >
                                <p>
                                  Critical minerals are fast becoming what oil
                                  and gas were to the last century—indispensable
                                  to economic security, strategic autonomy, and
                                  technological progress. In an era of global
                                  transitions—from clean energy to advanced
                                  manufacturing—the race to secure reliable
                                  access to these minerals has intensified.
                                  India, too, has recognized this strategic
                                  imperative.
                                </p>

                                <p>
                                  With the launch of the Critical Minerals
                                  Mission, rising exploration activity, and a
                                  growing number of auctions and procurement
                                  efforts, India is laying the groundwork for
                                  long-term mineral security. Simultaneously,
                                  geopolitical shifts and tightening export
                                  controls have exposed the fragility of global
                                  supply chains.
                                </p>

                                <p>
                                  The{" "}
                                  <strong>Critical Minerals Dashboard</strong>{" "}
                                  by Ananta is a first-of-its-kind platform that
                                  offers a sector-wise, data-driven view of
                                  India’s critical mineral landscape. It brings
                                  together mineral intelligence and policy
                                  insight to help decision-makers, researchers,
                                  and industry leaders understand:
                                </p>

                                <ul>
                                  <li>
                                    Which minerals matter most for which sectors
                                  </li>
                                  <li>Where the vulnerabilities lie</li>
                                  <li>
                                    What strategies can build resilient and
                                    diversified supply chains
                                  </li>
                                </ul>

                                <p className="mb-0">
                                  All infographics and visual tools on the
                                  dashboard have been created in-house, with an
                                  emphasis on mapping mineral dependencies and
                                  supply chain risks. This dashboard aims to be
                                  a resource for strategic foresight, informed
                                  policy, and collaborative solutions.
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
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
