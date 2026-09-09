import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import clsx from "clsx";

export default function IndiaSeeksCopper() {
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
            src={`${basePath}/assets/minerals_images/zambia.webp`}
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
                    India seeks Copper in Zambia
                  </h3>

                  <p className="my-3">
                    India's search for critical minerals partnerships is not only
                    international but also trans continental, with no one geography being
                    central to its vision. According to a&nbsp;
                    <a
                      href="https://www.reuters.com/world/india/india-revives-talks-with-zambia-invest-critical-minerals-sources-say-2026-09-01/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      report
                    </a>
                    &nbsp;by Reuters, New Delhi is in talks with Zambia on the African continent.
                    The report cites unnamed Indian officials from India's Ministry of
                    Mines, who confirmed to the news outlet that preliminary discussions
                    have already occurred between the two countries on August 26 2026.
                  </p>

                  <p className="my-3">
                    The particular mineral under question is Copper, which has been a
                    particularly important commodity for humans since the bronze age in
                    history. While contemporary usage spans all modern industries from power
                    transmission to advanced digital systems, its mining and refining as
                    well as competitive pricing has become quite a concern in a country's
                    supply chains.
                  </p>

                  <p className="my-3">
                    The calculation is even more important for an economy like India which
                    is trying to not only maintain a high growth rate, service
                    infrastructure for billions, but also diversify from a largely service
                    oriented economy to a high-tech manufacturing economy where sectors like
                    advanced semiconductor, integrated circuits, batteries, photovoltaics
                    and data centers are the priority.
                  </p>

                  <p className="my-3">
                    India's only domestic Copper ore production is currently done by state
                    owned&nbsp;
                    <a
                      href="https://mines.gov.in/webportal/content/hcl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hindustan Copper Limited (HCL)
                    </a>
                    , which owns the Malanjkhand Copper Project in Madhya Pradesh, which
                    represents both India's largest deposit of the mineral and its largest
                    ore extraction site. However despite that, Malanjkhand&nbsp;
                    <a
                      href="https://mines.gov.in/webportal/copper"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      barely meets even 4.5%
                    </a>
                    &nbsp;of India's annual Copper ore needs as of 2026.
                  </p>

                  <p className="my-3">
                    While India has been engaging with Zambia for Copper mining exploration
                    and extraction rights for a 9,000Km block since at least 2025, however
                    reportedly the deal didn't move forward due to the Zambian government
                    being unable to provide formal legal guarantees for New Delhi's capital
                    investment, as well as legally binding mining rights. Purportedly, those
                    issues have not seen progress yet, but the continuation of the dialogue
                    is a positive sign that they may be eventually resolved. According to
                    the report by Reuters, the new negotiations may even be on exploring
                    other possible locations for exploration and extraction in Zambia, thus
                    providing a proverbial clean slate to both parties.
                  </p>

                  <p className="my-3">
                    While India is likely to use its state owned Khanij Bidesh India Limited
                    (KABIL) to own, operate and maintain any overseas mineral interests, it
                    will be interesting to see if any other Public Sector Undertaking (PSU)s
                    can also throw in their hat in what is likely to be a high priority
                    foreign acquisition.
                  </p>

                  <p className="my-3">
                    On the ready to use refined metal inputs meant for industries front too
                    supplies of processed copper from global commodity markets have been
                    possible. However India's fortunes have certainly reversed since 2018
                    when alleged environmental pollution forced the&nbsp;
                    <a
                      href="https://www.reuters.com/article/world/tamil-nadu-closes-vedanta-copper-smelter-permanently-after-bloody-protest-idUSKCN1IT13D/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      closure
                    </a>
                    &nbsp;of Vedanta Group's Copper smelting facilities in the southern state
                    of Tamil Nadu. The reversal is so stark that from a net exporter in 2018,
                    India regressed to importing over 90% of its refined Copper in 2026.
                    While a new facility in Gujarat owned by the Adani Group is slowly
                    restoring domestic smelting and refining capacity, it only commenced
                    operations in 2025.
                  </p>

                  <p className="my-3">
                    If the Zambia negotiations are fruitful and the exploration and
                    extraction complex is developed with maximum efficiency, India may be
                    able to meet around 20% of its projected Copper ore needs with the
                    extraction operations of KABIL in the country.
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