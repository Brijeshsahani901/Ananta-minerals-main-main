import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function IndiaCanadaCEPA() {
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
            src={`${basePath}/assets/minerals_images/india-canada.webp`}
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
                    India-Canada CEPA and Critical Minerals Cooperation
                  </h3>

                  <p className="my-3">
                    India and Canada are moving towards concluding a
                    Comprehensive Economic Partnership Agreement (CEPA).
                    Purportedly, one of the key pillars of negotiations is
                    cooperation on critical minerals and related sectors. The
                    fifth round of negotiations are reportedly underway and as
                    of October 2026 the two countries are pushing to{" "}
                    <a
                      href="https://newsonair.gov.in/india-canada-to-start-5th-round-of-negotiations-for-their-proposed-comprehensive-economic-partnership-agreement-today/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      conclude the agreement
                    </a>{" "}
                    by the end of the year, according to a report by All India
                    Radio. India had also signed a separate agreement with
                    Canada on critical minerals cooperation in March 2026 during
                    Canadian Prime Minister Mark Carney's{" "}
                    <a
                      href="https://newsonair.gov.in/delegation-level-talks-between-pm-modi-and-canadian-pm-mark-carney-underway-in-new-delhi/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      visit
                    </a>{" "}
                    to India.
                  </p>

                  <p className="my-3">
                    While a stated goal of the CEPA pact is to bolster bilateral
                    trade up to Canadian $70 billion by 2030, what part of it
                    will be natural resources including critical minerals
                    related is difficult to predict. However, given India's push
                    for free trade agreements, and finding allies in subsectors
                    such as critical minerals sourcing and processing, as well
                    as high-tech manufacturing of complex things like
                    semiconductors it's imperative that they would dominate
                    almost all of its foreign policy considerations.
                  </p>

                  <p className="my-3">
                    India is also increasingly shifting its economic base to
                    include not only manufacturing but also new age digital
                    technologies such as data centers and Artificial
                    Intelligence applications that need them, which all in turn
                    needs significant investment and security in energy as well
                    as critical industrial inputs for energy storage solutions.
                    While Canada too is part of the global value chain
                    realignment, it doesn't necessarily have an adversarial
                    relationship with China which dominates the global critical
                    mineral value chains due to its outsized share of processing
                    capabilities and market share.
                  </p>

                  <p className="my-3">
                    However, advancing cooperation with India gives Canada an
                    avenue to de-risking its dependence on China as well so it
                    is not without incentives for it either. Furthermore,
                    India's high growth rate which is being praised by
                    international fiscal institutions like the{" "}
                    <a
                      href="https://newsonair.gov.in/imf-raises-indias-gdp-growth-forecast-to-7-for-2026-27/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      International Monetary Fund (IMF)
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://newsonair.gov.in/world-bank-raises-indias-gdp-growth-projection-to-7-1-from-6-6-for-this-fiscal/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      World Bank
                    </a>{" "}
                    unanimously, is indicative of its superior attractiveness
                    for Canadian and other partner nation's investors to prefer
                    diversifying away from China which is while still one of the
                    top two economies, is{" "}
                    <a
                      href="https://www.scmp.com/economy/china-economy/article/3370586/imf-revises-down-projection-chinas-gdp-year-cautions-export-reliance"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      growing at less than half the rate
                    </a>{" "}
                    India is.
                  </p>

                  <p className="my-3">
                    This interest is also manifesting in the size of the
                    Canadian trade delegation comprising roughly 300 business
                    representatives which arrived in India accompanying Canadian
                    Trade Minister Maninder Sidhu for the fifth round of the
                    CEPA negotiation talks in October 2026.
                  </p>

                  <p className="my-3">
                    Furthermore, the institutional frameworks to enable
                    investment to flow easily into India, New Delhi has also
                    purportedly expressed the need for a Bilateral Investment
                    Treaty (BIT) which should be helpful in ironing out any
                    legal and regulatory hurdles.
                  </p>

                  <p className="my-3">
                    While not a certainty at this point, framing the critical
                    minerals cooperation as not only a bilateral agreement but a
                    complimentary initiative where other like minded partners
                    such as the Quad nations, Japan, US and Australia can also
                    contribute and benefit from coming onboard will be a more
                    optimal and forward looking path.
                  </p>

                  <p className="my-3">
                    Another forward looking measure would be to hone a skill
                    development and mobility framework attached to inculcating a
                    labour pool focused on providing the personnel strength for
                    the refining and processing green field investments that may
                    come up in either countries as a shared priority. While
                    India has included a similar mobility and workforce
                    development agreement with the UK, it can't be easily
                    extrapolated to Canada or the critical minerals applications
                    where the need is most acute. The reasons may stretch from
                    the various legal, immigration, and industrial regulatory
                    barriers already in place, which are a completely different
                    challenge to streamline and ease with every individual
                    country or block. However, given that bilateral agreements
                    and treaties are subject to future revisions and amendments
                    based on the level of diplomatic warmth between the
                    concerned nations, it is not out of the question that
                    whatever form the CEPA concluded in the near future takes,
                    it will most certainly be improved in the coming years and
                    decades as broader geopolitical context changes.
                  </p>

                  {/* Optional image section - uncomment if you have a relevant image */}
                  {/* <div className="my-4 text-center">
                    <img
                      src={`${basePath}/assets/minerals_images/india-canada-cepa.png`}
                      alt="Source: NewsOnAir"
                      style={{
                        width: "75%",
                        height: "500px",
                        display: "inline-block",
                      }}
                    />
                    <p className="text-muted mt-2" style={{ fontSize: "0.85rem" }}>
                      Source: NewsOnAir
                    </p>
                  </div> */}

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
