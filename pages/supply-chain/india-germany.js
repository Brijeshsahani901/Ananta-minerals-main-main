import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import clsx from "clsx";

export default function IndiaGermany() {
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
            src={`${basePath}/assets/minerals_images/india-germany.webp`}
            alt="India-Germany critical minerals cooperation"
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
                    India-Germany critical minerals cooperation
                  </h3>

                  <p className="my-3">
                    India permitted 100% foreign direct investment in mineral exploration
                    and mining through the automatic route after the country's Ministry of
                    Mines{" "}
                    <a
                      href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2042601&reg=48&lang=2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      introduced
                    </a>{" "}
                    a dedicated exploration licence for deep-seated and critical minerals in
                    July 2023, a provision that has now become the legal scaffolding for New
                    Delhi's latest overture to Berlin.
                  </p>

                  <p className="my-3">
                    Indian authorities have{" "}
                    <a
                      href="https://www.energywatch.in/critical-minerals/india-germany-looking-at-joint-development-of-critical-mineral-blocks-german-embassy-official"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      reportedly
                    </a>{" "}
                    handed German counterparts a list of 67 critical mineral blocks,
                    spanning sites identified for elements central to clean energy and
                    defence manufacturing, with the explicit aim of drawing German companies
                    into joint ventures or wholly foreign-owned projects.
                  </p>

                  <p className="my-3">
                    The move builds on the Joint Declaration of Intent on critical minerals
                    that Chancellor Friedrich Merz{" "}
                    <a
                      href="https://www.mea.gov.in/bilateral-documents?dtl/40582/List_of_Outcomes_Visit_of_the_Chancellor_of_the_Federal_Republic_of_Germany_to_India_January_1213_2026"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      signed
                    </a>{" "}
                    during his visit to India in January 2026, as part of a broader package
                    of 19 agreements and declarations covering everything from
                    semiconductors to defence.
                  </p>

                  <p className="my-3">
                    According to reports citing German Embassy officials in India, the
                    Geological Survey of India and Germany's Federal Institute for
                    Geosciences and Natural Resources, known by its German acronym BGR, are
                    preparing a second memorandum of understanding meant to deepen technical
                    collaboration beyond the initial framework, with BGR working alongside
                    the German Raw Materials Agency on the German side of implementation.
                  </p>

                  <p className="my-3">
                    Nine centres of excellence have purportedly been earmarked for joint
                    research, and the value chain the two governments are targeting extends
                    past mere extraction into refining and processing, an area where India
                    has historically lagged given its dependence on China for downstream
                    capacity in rare earths and other strategic materials.
                  </p>

                  <p className="my-3">
                    Officials on both the Indian and German sides have flagged permanent
                    magnet production and battery storage technology as priority outputs of
                    this cooperation, both of which sit at the centre of India's ambitions
                    in electric mobility and renewable energy hardware, sectors where magnet
                    supply in particular has become a point of vulnerability following
                    export curbs from Beijing earlier in 2026.
                  </p>

                  <p className="my-3">
                    The mineral push does not exist in isolation from the wider financial
                    architecture Germany has built around its India relationship. Under the
                    Green and Sustainable Development Partnership, first launched in 2022,
                    Berlin committed €10bn in climate-related finance to India through 2030,
                    delivered mainly as concessional loans via KfW Development Bank
                    alongside grant-based technical assistance.
                  </p>

                  <p className="my-3">
                    Close to €5bn of that commitment has reportedly already been disbursed
                    or formally earmarked, funding that has gone toward renewable energy
                    deployment, green mobility programmes including electric buses, solar
                    manufacturing capacity and wind power. The pace of disbursement suggests
                    Berlin is trying to move the partnership past declaratory statements and
                    into asset-level deployment, though how much of the remaining €5bn
                    materialises within the original timeline will depend partly on
                    Germany's own fiscal constraints and partly on India's capacity to
                    absorb concessional capital into bankable projects.
                  </p>

                  <p className="my-3">
                    Coal transition work forms a smaller but symbolically loaded strand of
                    the relationship. KfW reportedly signed a €100mn loan agreement with
                    India's NLC India earlier in 2026 specifically to fund solar generation
                    and battery storage on former mining land, and German officials say
                    cooperation has since extended to sites nearing closure under India's
                    Ministry of Coal, with renewable infrastructure planned as part of their
                    redevelopment. This kind of adaptive reuse, converting degraded coal
                    land into generation capacity rather than leaving it stranded, has been
                    tried elsewhere with mixed results, and its success in India will likely
                    hinge on land title clarity and grid connectivity at individual sites
                    rather than on the financing structure alone.
                  </p>

                  <p className="my-3">
                    Grid integration has emerged as a parallel and arguably more urgent
                    concern. German officials working with India's Ministry of Power have
                    reportedly described grid stabilisation as one of the principal
                    bottlenecks constraining India's renewable energy build-out, a
                    diagnosis that lines up with independent assessments showing that
                    curtailment risk rises as solar and wind capacity is added faster than
                    transmission and storage infrastructure can absorb it. Separately,
                    Germany is said to be collaborating with India's Bureau of Energy
                    Efficiency on the development of India's domestic carbon market, an
                    area still in relatively early stages of design compared with the
                    compliance and voluntary markets operating in Europe.
                  </p>

                  <p className="my-3">
                    Taken together, the mineral list, the GSDP disbursements, the coal land
                    conversions, the grid work and the carbon market cooperation read less
                    like discrete initiatives and more like an attempt to stitch India's
                    energy transition and its critical minerals ambitions into a single
                    bilateral track, one that gives German industry earlier and deeper
                    access to Indian mineral assets in exchange for financing and technical
                    capacity that India still lacks in refining, storage and grid
                    management. Whether the 67 blocks translate into actual German capital
                    commitments, as opposed to sitting as a negotiating list, will be the
                    more telling indicator over the coming months.
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