import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import clsx from "clsx";

export default function G7() {
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
            src={`${basePath}/assets/minerals_images/g7.webp`}
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
                    The G7's new critical minerals action plan
                  </h3>

                  <p className="my-3">
                    At their summit's second and final day on June 17, 2026, the
                    leaders of the Group of Seven (G7) nations adopted a&nbsp;
                    <a
                      href="https://www.mofa.go.jp/files/100862251.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      document
                    </a>
                    &nbsp;laying out the titular Critical Minerals Action Plan,
                    which sets out a shared commitment to rethinking how supply
                    chain relevant critical minerals are found, extracted,
                    processed, and traded.
                  </p>

                  <p className="my-3">
                    Ubiquitously, critical mineral inputs are the foundational
                    inputs needed for the manufacturing of electric vehicle
                    batteries, wind turbines, solar panels, smartphones, and
                    military equipment among thousands of other applications.
                    Rare Earth Elements (REE)s including lithium, cobalt,
                    nickel, and a dozen other materials sit at the foundation of
                    the hightech technologies that modern governments and
                    businesses are betting the future on. Without reliable
                    access to these materials, the green energy transition
                    stalls, digital infrastructure weakens, and manufacturing
                    slows.
                  </p>

                  <p className="my-3">
                    The Action Plan builds on earlier work begun during Japan's
                    presidency of the G7 in 2023, when a five-point framework
                    for minerals security was first sketched out. Italy carried
                    that work forward in 2024 during its presidency of the
                    forum. The document first released as a draft in June 2025
                    takes the conversation to a more concrete level, organizing
                    the G7's commitments into three broad areas, building
                    markets that operate on shared standards, mobilizing
                    investment on a large scale, and supporting innovation
                    across the entire supply chain.
                  </p>

                  <p className="my-3">
                    On the question of standards, the G7 leaders acknowledged
                    that the price of a mineral on an open market does not
                    always capture the true cost of getting it there.
                    Environmental damage, unsafe labor conditions, corruption,
                    and the displacement of local communities can all be hidden
                    in a low price tag. The Action Plan calls for a roadmap that
                    would define what it means for a mineral to have been
                    responsibly sourced, including inputs from industry,
                    international organizations, indigenous communities, local
                    populations, labor unions, and civil society groups. The
                    goal is to establish a minimum threshold of acceptable
                    practice that any supplier would need to meet to participate
                    in markets that G7 nations take seriously.
                  </p>

                  <p className="my-3">
                    The second major pillar of the plan concerns funding,
                    developing new mines and processing facilities is expensive,
                    slow, and uncertain. Securing permission and regulatory nods
                    can take years. Prices fluctuate in ways that scare off
                    investors and in some cases, deliberate interference in
                    markets can make otherwise promising projects unviable. The
                    G7 acknowledged that overcoming these barriers requires
                    coordinated effort across governments, development banks,
                    export credit agencies, and private lenders. The plan
                    encourages development finance institutions from G7
                    countries to work more closely together and to identify
                    projects where their resources can be combined. It also
                    calls on multilateral development banks and private sector
                    lenders to make more capital available for mineral projects
                    that meet the standards being developed under the first
                    pillar.
                  </p>

                  <p className="my-3">
                    A notable feature of the investment section of the document
                    is its emphasis on partnerships with lower-income and
                    emerging market countries, now also colloquially called the
                    Global South. Many of the world's most significant mineral
                    deposits are found in Africa, Latin America, and parts of
                    Asia. The G7 plan frames engagement with these countries not
                    as extraction but as partnership, promising support for
                    local economic growth, capacity building, better governance
                    of the mining sector, and efforts to combat gender-based
                    violence in mining communities. The plan also references
                    existing frameworks like the World Bank led Resilient and
                    Inclusive Supply Chain Enhancement (RISE) partnership, and
                    the Minerals Security Partnership (MSP), as vehicles through
                    which these commitments can be delivered. There is
                    recognition too of the debt challenges facing many
                    developing nations and a stated commitment to promoting
                    transparent and fair financing practices.
                  </p>

                  <p className="my-3">
                    The third area of focus is innovation, the G7 nations
                    collectively possess significant research capacity and
                    private sector dynamism that has not yet been fully directed
                    at the challenges specific to critical minerals. Processing
                    raw ore into usable material is often technically demanding
                    and environmentally costly. Recycling minerals from old
                    products back into new supply chains is still far less
                    common than it could be. Designing products to use less of a
                    given mineral, or to substitute a scarce one with a more
                    available alternative, represents the most consequential
                    form of supply chain resilience.
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
