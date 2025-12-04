import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function AsiaPlaybook() {
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
            src={`${basePath}/assets/minerals_images/practical-triangle.jpg`}
            alt="A Practical Triangle: What the new Australia-Canada-India Tech Pact means for Critical Minerals"
            style={{
              width: "100%",
              height: "60vh",
              display: "block",
              objectFit: "cover",
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
                    A Practical Triangle: What the new Australia-Canada-India Tech Pact means for Critical Minerals
                  </h3>

                  <p className="my-3">
                    Last month the governments of India, Canada and Australia launched a formal trilateral called the <a
                      href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2193028&utm_source=chatgpt.com&reg=3&lang=2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Australia-Canada-India Technology and Innovation (ACITI) Partnership
                    </a> at the G20 Summit in Johannesburg. At its core, ACITI is a pragmatic cooperation framework, rather than a treaty, that commits the three governments to intensifying their work on critical and emerging technologies, strengthening green energy innovation, and enhancing the resilience of supply chains for strategic minerals. The declaration stresses pooling technological strengths, coordinating on research and development, and moving faster from lab ideas into deployable industry projects.
                  </p>

                  <h4 className="my-3">
                    What does the Framework entail?
                  </h4>

                  <p className="my-3">
                    The partners have agreed to institutionalise regular official meetings, with an initial set of officials due to meet in early 2026, to identify joint R&D and pilot projects and to use each country's comparative advantages. Canada's mining and processing know-how, Australia's raw-material scale and processing push, and India's manufacturing and deployment capacity, to build supply-chain links, lay the foundations of this strategy. The joint statement highlights AI, green hydrogen, battery tech and, crucially for resource security, critical minerals as immediate cooperation areas. The idea is to complement existing bilateral tracks with a trilateral forum that can move faster on practical projects.
                  </p>

                  <h4 className="my-3">
                    The Spotlight on Critical Minerals
                  </h4>

                  <p className="my-3">
                    The clean-energy transition depends on steady access to graphite, lithium, rare earths and other strategic inputs. Australia and Canada are resource-rich suppliers and are already investing in processing capacity; India is a large consumer and an emerging manufacturing hub for batteries and electric vehicles.
                  </p>

                  <h4 className="my-3">
                    Over the next year, we can expect ACITI to focus on three deliverables:
                  </h4>

               <p>
                Mapping priority mineral supply chains and critical gaps; short pilot projects for processing or test-scale refining through technology transfer and joint pilots; and coordinated approaches to secure offtake or investment. The third deliverable should ideally focus on linking Australian and Canadian producers with Indian processors and manufacturers. Officials have flagged meetings and working groups to turn those ideas into concrete project lists in 2026
               </p>

                  <p className="my-3">
                    The upsides for India are tangible with the partnership reducing supplier concentration risk by building alternate, like-minded sourcing channels, which are politically attractive at a time when global suppliers are restructuring their supply chains. Additionally, access to Canadian and Australian technical expertise and finance can accelerate India's push to grow domestic processing capacity, which is the real lever for labour skilling and value addition. Lastly, joint R&D and pilot projects can shorten time-to-market for technologies India wants to scale, such as battery recycling, advanced refining methods, or green hydrogen coupled to mining. In short, more secure inputs, more tech sharing, and clearer commercial links to buyers and investors.
                  </p>

                  <h4 className="my-3">
                    Trade-offs and potential limitations:
                  </h4>

                  <p className="my-3">
                    Coordination between three bureaucracies takes time, and more importantly, announcements do not automatically convert into mines, plants or factories. Australia and Canada may prioritise projects that fit their commercial timelines, leaving India to chase downstream integration on a slower path. There is also the minor risk that early projects focus on commodity flows rather than building domestic high-end refining capacity, meaning India might continue to import processed intermediates even as raw shipments become steadier. Finally, geopolitical optics matter; deepening resource ties with some partners can potentially prompt competitive responses elsewhere, complicating broader diplomatic balancing acts.
                  </p>

                  <p className="my-3">
                    A realistic way to judge ACITI will be by small, measurable wins over the next year. Signed pilot-project agreements, matched finance or offtake commitments, and a published roadmap for processing capacity, not just exploration, would be a strong start. For policymakers in India, the priority is to convert the trilateral promise into domestic industrial outcomes, insist on capacity-building clauses, co-financing for refineries or recycling plants, and clear timelines for technology transfer. If ACITI remains a high-level dialogue, its value will be limited; if it becomes a delivery vehicle for concrete projects, it can materially strengthen India's critical minerals strategy.
                  </p>

                  <p className="my-3">
                    In short, ACITI is a useful, timely experiment in multilateral cooperation. It is neither a silver bullet nor a geopolitical provocation; it is a pragmatic effort to integrate suppliers, technology, and manufacturers into more resilient supply chains. The next year will show whether it delivers pilot plants and offtake contracts, or whether it remains a diplomatic umbrella with modest operational bite.
                  </p>

                  <Card
                    className="d-flex flex-column flex-md-row gap-4 p-4 mt-5 shadow-sm"
                    style={{
                      backgroundColor: "#fff6f6",
                      borderRadius: "10px",
                    }}
                  >
                    {/* Author Icon */}
                    <div
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        backgroundColor: "#e9ecef",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        flexShrink: 0,
                      }}
                    >
                      <FaUserCircle size={60} color="#2F4156" />
                    </div>

                    {/* Text Content */}
                    <div style={{ flex: 1 }}>
                      <div className="d-flex align-items-center mb-3 gap-2">
                        <h5 className="mb-0 fw-semibold text-dark">
                          Ayan Barman
                        </h5>
                        <Badge bg="success" pill>
                          Author
                        </Badge>
                      </div>

                      <p className="text-muted" style={{ lineHeight: 1.6 }}>
                        Ayan Barman is an international relations researcher at
                        Ananta Aspen Centre focusing on the geopolitical
                        implications of critical minerals. He holds a BA in
                        Liberal & Humanities Studies from O.P. Jindal
                        University, where he studied global security dynamics.
                        Ayan has contributed to policy reports at NITI Aayog and
                        authored articles on geopolitical issues with the
                        Observer Research Foundation. He has also worked at
                        British Petroleum (BP) as an executive. He is dedicated
                        to enhancing India's role in global governance and
                        promoting sustainable development in critical minerals.
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