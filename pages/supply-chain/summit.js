import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function BRICSCriticalMinerals() {
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
            src={`${basePath}/assets/minerals_images/summit.webp`}
            alt="About"
            style={{
              width: "100%",
              height: "60vh",
              display: "block",
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
                    Critical Minerals at the 18th BRICS Summit
                  </h3>

                  <p className="my-3">
                    At the 18th BRICS Summit hosted by India between September
                    12-13 2026, discussions focused primarily on multilateral
                    cooperation in both economic and security spheres.
                  </p>

                  <p className="my-3">
                    The{" "}
                    <a
                      href="https://www.mea.gov.in/bilateral-documents?dtl/41776"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      New Delhi declaration
                    </a>
                    , adopted in consensus by all member states of the grouping,
                    also featured critical minerals, the value chains they
                    enrich and enable, as well as common challenges and
                    solutions faced by all member states.
                  </p>

                  <p className="my-3">
                    According to a{" "}
                    <a
                      href="https://www.aninews.in/news/national/general-news/critical-minerals-key-agenda-for-upcoming-brics-summit-union-minister-g-kishan-reddy20260911191806/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      statement
                    </a>{" "}
                    by India's Union Minister for Coal and Mines G Kishan Reddy
                    during a press interaction, the inclusion of critical
                    minerals and India's need for exploring potential
                    opportunities for their extraction abroad was a Government
                    of India priority for the summit.
                  </p>

                  <p className="my-3">
                    The specifics of the text of the declaration posits that
                    critical minerals and their associated sectors and services
                    are central to global manufacturing, high-tech industries
                    such as semiconductors, Artificial Intelligence (AI),
                    economic resilience, clean energy transitions, and resource
                    governance. Furthermore the discussions focused on supply
                    chain security, sovereign control, local economic value,
                    and preventing market manipulation.
                  </p>

                  <p className="my-3">
                    While the topic's status as a major pillar in the summit's
                    agenda is a diplomatic victory for India, as it used the
                    forum to specifically channel consensus against the practice
                    of weaponising supplies of critical minerals for
                    geopolitical objectives, it may be more of a performative
                    win than a substantial triumph. The reason for the
                    hollowness of the victory is the fact that China, the
                    biggest offender when it comes to tightening and relaxing
                    export controls for refined and processed critical minerals
                    based on its geopolitical inclinations, also signed off on
                    the consensus. While the hypocrisy may be noticeable to
                    objective observers it is likely a position consistent with
                    how Beijing sees the world, as in its own policymaking, the
                    export controls are mere retaliations and self preservation
                    after an equal or worse measure has been implemented by any
                    adversarial state or entity, with Japan, the US and India
                    all being at the receiving end of this coercive move in
                    recent times.
                  </p>

                  <p className="my-3">
                    Furthermore, a consensus and some non-binding commitments
                    to vague principles doesn't hurt Beijing's autonomy or
                    statecraft at all, as it retains its sovereign privilege to
                    make separate transactions without any of its BRICS
                    partners or the group as a whole having a say in it at all,
                    unless of course they are the ones making deals with China
                    separately. This advantage is even more profound when we
                    take into account the fact that China is also the biggest
                    source of the world's refined and processed critical
                    minerals inputs for almost every sector and industry on the
                    planet.
                  </p>

                  <p className="my-3">
                    While no predictions can be made about the shape future
                    BRICS cooperation or forums on critical minerals may take,
                    it is clear that the group hasn't produced a framework
                    similar to the{" "}
                    <a
                      href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2230648&reg=3&lang=1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pax Silica
                    </a>{" "}
                    alliance led by the US which is trying to safeguard against
                    China's unmatched leverage in the critical minerals value
                    chains around the world.
                  </p>

                  <p className="my-3">
                    China's adversarial attitude towards India is likely to be
                    the achilles heel for BRICS becoming a substantive challenge
                    to the US's Pax Silica initiative in the short to medium
                    term.
                  </p>

                  <p style={{ color: "#686868" }}>
                    Copyright ©️ 2025 by Ananta Aspen Centre
                    <br />
                    This text is protected by copyright and may not be
                    reproduced, distributed, or modified without permission
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
                        Aditya Pareek is a consultant with the Ananta Aspen
                        Centre, he studies the intersection of technology and
                        geopolitics and specialises on the affairs of the former
                        Soviet space.
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