import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";

export default function IndiasProspective() {
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
            src={`${basePath}/assets/minerals_images/budget2026.jpeg`}
            alt="Union Budget positions India in the global supply chain with Rare Earths Corridors"
            style={{
              width: "100%",
              height: "60vh",
              display: "block",
              objectFit: "fill",
            }}
          />
        </div>

        {/* Main content */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-10">
              <div style={{ marginTop: "30px" }}>
                <div
                  className="p-4"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                  }}
                >
                  <h3 className="my-3">
                    Union Budget positions India in the global supply chain with Rare Earths Corridors
                  </h3>

                  <p className="my-3">
                    In the Union Budget for the financial year 2026–2027, the Government of India has articulated a{" "}
                    <a
                      href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2222413&reg=3&lang=2#:~:text=The%20Union%20Budget%202026%E2%80%9327%20has%20placed%20strong%20emphasis%20on,with%20new%20corridor%2Dbased%20initiatives."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      clear strategy
                    </a>{" "}
                    aimed at integrating the country more deeply into global supply and value chains for critical minerals, raw and processed materials essential for clean energy technologies, advanced electronics, Electric Vehicles (EVs), aerospace and defence systems. At a time when global supply chains are being reshaped by geopolitical competition and import vulnerabilities, the budget's emphasis on domestic capacity, connected infrastructure and strategic partnerships continues a significant policy pivot.
                  </p>

                  <p className="my-3">
                    Finance Minister Nirmala Sitharaman's budget speech underscored the urgency of advancing critical mineral ecosystems that can reduce reliance on imports, particularly from dominant producers such as China. China globally accounts for a large share of rare earth element processing and derivative permanent magnet production, heightening supply chain risks for countries seeking secure access to these materials and also has disagreements with Beijing. The budget's provisions reflect a concerted effort to position India not merely as a source of raw materials but as a competitive actor in processing, downstream manufacturing and research driven innovation.
                  </p>

                  <p className="my-3">
                    A notable feature of the fiscal plan is the exemption of basic customs duty on capital goods required for processing critical minerals. This measure is intended to catalyse investment in domestic processing facilities, a recognised bottleneck in the current ecosystem, and to make Indian output more cost competitive in global markets. The exemption dovetails with broader reforms under the National Critical Mineral Mission, a multi-year initiative designed to cultivate capabilities from exploration and mining to recycling and value-added manufacturing.
                  </p>

                  <p className="my-3">
                    Beyond fiscal incentives, the budget reinforces the government's commitment to logistics and connectivity projects that support supply chain flows. Announcements on dedicated freight corridors and enhanced multimodal infrastructure, though not exclusively targeted at minerals, are crucial for moving ores and processed materials efficiently between mining hubs, ports and industrial clusters. Improved connectivity cuts costs, reduces delays and strengthens linkages between domestic producers and global buyers that are a foundational component of supply chain competitiveness.
                  </p>

                  <p className="my-3">
                    Importantly, these measures are not framed in isolation. They form part of a broader industrial ecosystem strategy that includes semiconductor and electronics manufacturing missions, chemical parks and incentives for advanced materials. By aligning critical minerals with other high-tech sectors, the budget acknowledges that mineral supply chains are only as strong as the manufacturing and research bases they feed.
                  </p>

                  <p className="my-3">
                    A flagship initiative in this year's budget is the announcement of dedicated rare earth corridors across four Indian states, Odisha, Kerala, Andhra Pradesh and Tamil Nadu. Rare earth elements (REEs), a subset of critical minerals, are indispensable for technologies such as EV motors, permanent magnets, wind turbines, mobile devices and defence electronics. While India possesses significant REE-bearing resources, particularly monazite in coastal and beach sand deposits, the country has historically depended on imports for refined REE products and high-strength magnets.
                  </p>

                  <div className="text-center my-4">
                    <img
                      src={`${basePath}/assets/minerals_images/union-budget.png`}
                      alt="Rare Earth Corridors Map showing Odisha, Kerala, Andhra Pradesh and Tamil Nadu"
                      style={{
                        width: "100%",
                        maxWidth: "500px",
                        height: "auto",
                        borderRadius: "8px",
                      }}
                    />
                    <p className="mt-2" style={{ fontSize: "0.9rem", color: "#666" }}>
                      <a
                        href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2222413&reg=3&lang=2#:~:text=The%20Union%20Budget%202026%E2%80%9327%20has%20placed%20strong%20emphasis%20on,with%20new%20corridor%2Dbased%20initiatives."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source: Press Information Bureau
                      </a>
                    </p>
                  </div>

                  <p className="my-3">
                    The corridors are designed as integrated value chains linking mining, processing, research and manufacturing within cohesive geographic and economic zones. This model reflects a shift from fragmented initiatives to coordinated clusters that can support economies of scale, attract private investment, and promote specialised skills and technology development.
                  </p>

                  <p className="my-3">
                    For each corridor, the plan envisages leveraging local endowments and existing infrastructure. Odisha's mineral belts, rich in heavy mineral sands, form a natural starting point for extraction and beneficiation. Kerala's coastal sands, including deposits around Chavara, are targeted for their high monazite content. Andhra Pradesh and Tamil Nadu offer complementary advantages, including port connectivity that facilitates both domestic distribution and exports. These corridors are expected to support not only raw extraction and processing but also research facilities and manufacturing units, particularly for high-performance rare earth permanent magnets (REPMs).
                  </p>

                  <p className="my-3">
                    The emphasis on REPMs is significant. In late 2025, the government launched a scheme to promote manufacturing of sintered rare earth permanent magnets, aimed at establishing a sizeable domestic capacity. The corridors, in this context, provide the spatial and economic framework to support such initiatives, ensuring that raw minerals can be efficiently converted into high-value components for global markets.
                  </p>

                  <p className="my-3">
                    In addition to industrial clustering, the corridors are expected to generate employment opportunities, attract investment and stimulate local economies. These corridors, such as the one in Kerala, could draw substantial capital commitments and spur thousands of jobs, embedding mineral value chains firmly in regional development agendas.
                  </p>

                  <p className="my-3">
                    Environmental governance and community engagement are also implicit in the corridors' conception. Given the potential ecological impact of mining and processing, the corridors will need to integrate sustainable practices, regulatory oversight, and mechanisms for local benefit sharing to maintain social licence and long-term viability.
                  </p>

                  <p className="my-3">
                    In a global environment where supply security is a priority for economies pursuing decarbonisation and technological leadership, India's approach aligns with broader geopolitical shifts. The rare earth corridors, in particular, represent a bold attempt to capture more of the value embedded in critical minerals and to anchor high-tech manufacturing in Indian soil. While execution will be crucial, the policy framework outlined in this year's budget lays important groundwork for a more resilient, integrated and globally significant critical minerals ecosystem.
                  </p>

                  <Card
                    className="d-flex flex-column flex-md-row gap-4 p-4 mt-5 shadow-sm"
                    style={{
                      backgroundColor: "#fff6f6",
                      borderRadius: "10px",
                    }}
                  >
                    {/* Author Icon */}
                    <img
                      src={`${basePath}/assets/img/aditya-pareek.jpeg`}
                      alt="Aditya Pareek"
                      width={100}
                      height={100}
                      style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        flexShrink: 0,
                      }}
                    />
                    {/* Text Content */}
                    <div style={{ flex: 1 }}>
                      <div className="d-flex align-items-center mb-3 gap-2">
                        <h5 className="mb-0 fw-semibold text-dark">
                          Aditya Pareek
                        </h5>
                        <Badge bg="success" pill>
                          Author
                        </Badge>
                      </div>

                      <p className="text-muted" style={{ lineHeight: 1.6 }}>
                        Aditya Pareek is a consultant with the Ananta Aspen Centre, he studies the intersection of technology and geopolitics and specialises on the affairs of the former Soviet space.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}