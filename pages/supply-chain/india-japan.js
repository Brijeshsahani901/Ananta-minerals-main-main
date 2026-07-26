import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import clsx from "clsx";

export default function CaneberraBet() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={clsx("blog-details-area", "fit-content-height")}
      >
        {/* Full-width image */}
        <div style={{ width: "100%", background: "#f5f5f5", margin: "0px 0" }}>
          <img
            src={`${basePath}/assets/minerals_images/india-japan.webp`}
            alt="About"
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
          <div className={clsx("row", "justify-content-center")}>
            <div className={clsx("col-xl-12", "col-lg-10")}>
              <div style={{ marginTop: "30px" }}>
                <div
                  className="p-4"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                  }}
                >
                  <h3 className="my-3">
                    Japan and India to boost cooperation on critical minerals
                    value chain
                  </h3>

                  <p className="my-3">
                    The Geological Survey of India (GSI) and Japan's Japan
                    Organisation for Metals and Energy Security (JOGMEC),
                    concluded an agreement around the 16th India-Japan Annual
                    Summit in New Delhi on July 2 2026. The Memorandum of
                    Cooperation (MoC) commits both institutions to technical
                    cooperation in upstream critical mineral exploration, a
                    function that sits at the earliest and least commercially
                    rewarding stage of a value chain that neither country
                    currently controls at the scale that their shared strategic
                    circumstances demand.
                  </p>

                  <p className="my-3">
                    The summit's broader 16-point economic security{" "}
                    <a
                      className="mx-1"
                      href="https://www.mea.gov.in/bilateral-documents?dtl/41396/Fact_Sheet_20_IndiaJapan_Economic_Security_Cooperation"
                      target="_blank"
                    >
                      roadmap
                    </a>
                    , which elevated critical minerals into one of five priority
                    sectors alongside semiconductors, clean energy,
                    pharmaceuticals and information and communication
                    technology, signals that the upstream exploration agreement
                    is intended as a foundation rather than a ceiling.
                  </p>

                  <p className="my-3">
                    However, the question that the GSI-JOGMEC cooperation
                    agreement implicitly raises, and that neither government has
                    yet answered publicly in operational terms, is whether a
                    comparable integrated ecosystem could be developed in
                    Northeast India, where the Geological Survey of India's
                    survey work has identified resource concentrations that
                    would be globally significant if they could be brought into
                    production at scale.
                  </p>

                  <p className="my-3">
                    Arunachal Pradesh hosts an estimated 24.8 million tonnes of
                    high-quality natural flake graphite suitable for lithium-ion
                    battery anodes, and a separate deposit at Pakke Kessang of
                    approximately 2.2 million tonnes of rare earth elements
                    including neodymium, the material central to the permanent
                    magnets used in electric vehicle motors and wind turbines.
                    Assam's Jashora Complex contains an estimated 28.6 million
                    tonnes of rare earth element-bearing deposits, while
                    Meghalaya's Sung Valley hosts ultramafic-carbonatite
                    complexes with significant rare earth potential whose full
                    extent has not yet been fully characterised. Nagaland and
                    Manipur contain nickel, cobalt and chromium occurrences
                    within ophiolite belts that would require beneficiation
                    before they could enter commercial processing streams.
                  </p>

                  <p className="my-3">
                    The gap between these geological numbers and commercial
                    production is substantial, and it is not primarily a
                    geological gap. Northeast India's infrastructure
                    connectivity, both within the region and to Indian ports
                    that could service export-oriented processing, remains well
                    below the threshold that would attract private investment in
                    capital-intensive refining facilities without significant
                    public support. The region's complex political economy,
                    including its multiple ethnic communities, historical
                    disputes over land rights and forest access, and the
                    security sensitivities that have attached to parts of the
                    region given its borders with China and Myanmar, adds layers
                    of complexity that straightforward mineral deposit
                    valuations do not capture. None of this is insurmountable,
                    but it means that the pathway from the GSI's survey findings
                    to operating mines and refineries in Northeast India runs
                    through a set of political and infrastructure decisions that
                    go considerably beyond the technical cooperation that JOGMEC
                    can provide.
                  </p>

                  <p className="my-3">
                    This is where Japan's potential contribution becomes
                    interesting in ways that the upstream exploration framing of
                    the agreement in the roadmap’s text may not fully
                    communicate. JOGMEC has developed, through its overseas
                    mineral investment programmes across Australia, Africa and
                    Canada, an institutional capability in moving projects from
                    exploration through feasibility study to project finance
                    structuring that goes well beyond geological survey work.
                    Japan's industrial conglomerates such as Mitsubishi, Mitsui,
                    Sumitomo, Marubeni and Itochu, have collectively built more
                    integrated mining-to-processing investment structures than
                    any other set of non-Chinese institutional investors in the
                    world. The combination of JOGMEC's project development
                    capability and the conglomerates's ability to finance
                    integrated value chain investments, if pointed at Northeast
                    India's identified deposits with the processing and refining
                    infrastructure question explicitly included in the scope,
                    would constitute something qualitatively different from a
                    geological cooperation agreement.
                  </p>

                  <p className="my-3">
                    The summit's broader economic security declaration, which
                    explicitly named arbitrary export restrictions and
                    non-market practices as threats to both countries's supply
                    chain security, points to a shared analytical framework for
                    why this matters. Japan's contribution to the Asian
                    Development Bank's Critical Minerals-to-Manufacturing
                    Financing Partnership Facility,{" "}
                    <a
                      className="mx-1"
                      href="https://www.mof.go.jp/english/policy/international_policy/mdbs/adb/20260501201307.html"
                      target="_blank"
                    >
                      announced
                    </a>{" "}
                    in Samarkand in May 2026, suggests a willingness to commit
                    public capital to the problem.
                  </p>

                  <p style={{ color: "#686868" }}>
                    Copyright ©️ 2025 by Ananta Aspen Centre
                    <br />
                    This text is protected by copyright and may not be
                    reproduced, distributed, or modified without permission
                  </p>

                  <Card
                    className={clsx(
                      "d-flex",
                      "flex-column",
                      "flex-md-row",
                      "gap-4",
                      "p-4",
                      "mt-5",
                      "shadow-sm",
                    )}
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
                      <div
                        className={clsx(
                          "d-flex",
                          "align-items-center",
                          "mb-3",
                          "gap-2",
                        )}
                      >
                        <h5
                          className={clsx("mb-0", "fw-semibold", "text-dark")}
                        >
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
