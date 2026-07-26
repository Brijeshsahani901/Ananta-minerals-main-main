import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import clsx from "clsx";

export default function MineralsAgreement() {
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
                    India's string of critical minerals agreements and the logic
                    behind them
                  </h3>

                  <p className="my-3">
                    In 2026, India's push to secure critical mineral supplies
                    gained fresh momentum with a string of bilateral agreements
                    and deals being struck with the{" "}
                    <a
                      href="https://in.usembassy.gov/united-states-and-india-sign-strategic-critical-minerals-cooperation-framework/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      US
                    </a>
                    ,
                    <a
                      href="https://www.dfat.gov.au/trade/agreements/in-force/australia-india-ecta/outcomes/australia-india-ecta-benefits-australian-critical-minerals-and-resources-sectors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Australia
                    </a>
                    ,
                    <a
                      href="https://thediplomat.com/2026/02/india-brazil-bond-deepens-with-critical-minerals-pact/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Brazil
                    </a>
                    ,
                    <a
                      href="https://www.wionews.com/world/india-japan-critical-minerals-pact-how-partnership-aims-to-de-risk-supply-chains-of-both-nations-1782985007929"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Japan
                    </a>
                    ,
                    <a
                      href="https://in.diplomatie.gouv.fr/en/first-india-france-joint-working-group-critical-minerals"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      France
                    </a>
                    , and
                    <a
                      href="https://ddindia.co.in/2026/07/india-indonesia-target-deeper-trade-critical-minerals-partnership-and-digital-connectivity/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Indonesia
                    </a>
                    . The agreements reflect a broader strategy to reduce
                    dependence on any single supplier for resources that
                    underpin modern manufacturing and defence capability.
                  </p>

                  <p className="my-3">
                    The urgency behind this push stems partly from how
                    concentrated global mining and processing of these minerals
                    has become in the modern day industrial value and supply
                    chains. India's geology has always been more generous than
                    its industrial capacity to exploit it. The country sits on
                    rare earth reserves that place it among the world's leading
                    holders of these materials, yet the gap between what lies
                    underground and what actually moves through its
                    manufacturing economy is bridged almost entirely by imports.
                    Lithium, cobalt and nickel arrive from overseas in
                    quantities that cover essentially the entire domestic
                    requirement, because the extraction and refining
                    infrastructure needed to convert India's known deposits into
                    commercially usable material has not kept pace with the
                    surveying work that identified them. The result is a country
                    whose resource map and its supply chain reality point in
                    opposite directions.
                  </p>

                  <p className="my-3">
                    The geopolitical exposure this creates is not uniformly
                    distributed, mineral supply chains are concentrated in ways
                    that leave importing countries with limited room to
                    manoeuvre when a dominant supplier changes its behaviour,
                    whether for commercial reasons, political ones, or some
                    combination of the two. Rare earth refining in particular
                    sits overwhelmingly within China's borders regardless of
                    where the raw material originated, meaning that the
                    processing chokepoint remains even when the mining is
                    diversified. India's import sourcing mirrors this broader
                    pattern, drawing from a narrow enough set of countries that
                    a policy shift in any one of them would land with immediate
                    consequences across battery manufacturing, semiconductor
                    fabrication and defence supply chains simultaneously.
                  </p>

                  <p className="my-3">
                    India's response has involved simultaneous movement on
                    multiple axes; overseas mineral agreements with
                    resource-rich countries in South America and Africa have
                    been structured to give Indian entities exploration rights
                    in mineralised regions before competition pushes entry costs
                    higher. A parallel set of cooperation frameworks with
                    technologically advanced partners across Asia, Europe and
                    the Americas is oriented toward processing knowledge and
                    investment rather than raw supply, since the refining gap is
                    at least as constraining as the mining gap.
                  </p>

                  <p className="my-3">
                    Domestic mobilisation is proceeding alongside the external
                    diplomacy, though it faces the harder problem. Geological
                    survey work at significant scale has been directed toward
                    producing a more comprehensive picture of India's subsurface
                    resources than currently exists, and block auctions are
                    being planned to bring private and public capital into
                    extraction. Offshore nodule deposits in India's Exclusive
                    Economic Zone (EEZ) have been included in the longer-term
                    resource planning, representing a category of supply that
                    remains technically challenging but whose scale is
                    potentially substantial.
                  </p>

                  <p className="my-3">
                    Identifying where minerals sit and even extracting them at
                    surface are less complex challenges than building the
                    refining and beneficiation capacity needed to turn ore into
                    the purified industrial inputs that battery makers and chip
                    fabricators actually require. That capacity takes years to
                    construct and longer to operate at the yield and consistency
                    that manufacturing customers demand.
                  </p>

                  <p className="my-3">
                    The bilateral agreements India has pursued with
                    technologically capable partners contain implicit answers to
                    this problem, since several of them involve processing
                    knowledge and refinery investment rather than simply supply
                    volumes. Whether those implicit commitments convert into
                    actual infrastructure on Indian soil depends on the
                    specificity of follow-through on both sides. The broader
                    critical mineral security project India is pursuing is
                    better understood as a structural repositioning over a
                    decade or more than as a problem being solved through any
                    current agreement.
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
