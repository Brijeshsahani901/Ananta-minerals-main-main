import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";

export default function PMCsCriticalMinerals() {
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
        <div style={{ width: "100%", background: "#1a1a2e", margin: "0px 0" }}>
          <img
            src={`${basePath}/assets/minerals_images/private-military.webp`}
            alt="Private Military Companies and Critical Minerals Supply Chain in Africa"
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
                    How Private Military Companies Affect the Critical Minerals
                    Supply Chain
                  </h3>

                  <p className="my-3">
                    The{" "}
                    <a
                      href="https://africamineralsgroup.org/map-of-critical-minerals-in-africa-by-country/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      places richest in critical minerals
                    </a>{" "}
                    needed to power the global high-tech industries are also
                    among the most dangerous to operate in. Cobalt in the
                    eastern Democratic Republic of Congo (DRC), gold across the
                    Sahel, tantalum threading through Central Africa's fractured
                    states. These are strategic prizes, and the competition for
                    them has spawned a shadow industry of armed contractors,
                    paramilitary guards, and geopolitical deal-making that is
                    quietly determining what the world pays for critical
                    minerals underpinning almost every modern industry including
                    automobiles, semiconductors, and defense systems.
                  </p>

                  <p className="my-3">
                    Private Military Companies (PMCs), organisations that
                    provide armed security, logistics, intelligence, and
                    sometimes direct combat services for hire, have occupied
                    conflict-prone mining regions for decades. What has changed
                    dramatically is the scale and geopolitical weight of their
                    involvement. As governments and private corporations race to
                    lock in reliable critical mineral supplies ahead of a
                    profound demand surge projected through 2030, armed
                    contractors are no longer peripheral actors in the mining
                    sector. Their presence ripples through commodity prices,
                    supply chain risk assessments, and investor behaviour in
                    ways markets are only beginning to fully price.
                  </p>

                  <p className="my-3">
                    The DRC{" "}
                    <a
                      href="https://www.downtoearth.org.in/mining/drc-is-sending-in-the-military-to-guard-mines-and-critical-minerals-will-it-be-enough"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      illustrates
                    </a>{" "}
                    this tension most acutely as the country accounts for
                    roughly 70% of global cobalt production and holds massive
                    copper reserves, while its eastern provinces have been in
                    various states of armed conflict for over three decades. The
                    M23 rebel movement, dozens of other armed factions, and a
                    national army with a documented record of extorting the very
                    miners it is supposed to protect have made eastern DRC the
                    world's most complex security environment for resource
                    extraction. Mining companies have long contracted private
                    security firms to fill the governance gap, tasking them with
                    protecting infrastructure and transport corridors that the
                    state cannot reliably secure.
                  </p>

                  <p className="my-3">
                    Now the Congolese government is attempting something more
                    ambitious, a{" "}
                    <a
                      href="https://www.bloomberg.com/news/articles/2026-04-27/congo-plans-paramilitary-unit-for-mines-with-us-uae-funding"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      planned
                    </a>{" "}
                    force of approximately 20,000 paramilitaries, backed by the
                    US and the UAE, is being structured to protect mining zones
                    and export nodes across the country's mineral-producing
                    provinces. Chinese companies currently dominate DRC's cobalt
                    and copper production, and China has demonstrated its
                    willingness to weaponise mineral market dominance by
                    imposing{" "}
                    <a
                      href="https://www.reuters.com/markets/commodities/china-bans-exports-gallium-germanium-antimony-us-2024-12-03/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      export restrictions
                    </a>{" "}
                    on gallium, germanium, graphite, and antimony in retaliation
                    for US technology controls.
                  </p>

                  <p className="my-3">
                    A more stable, Western-aligned Congolese mining sector would
                    provide an alternative supply node for battery and defence
                    industries that both Washington and Abu Dhabi view as
                    strategic priorities. Whether the new mining guard can
                    deliver that stability is another matter. However in the
                    country, enforcement of existing mining laws remains weak,
                    corruption is structurally embedded, and community consent
                    mechanisms function as procedural formalities rather than
                    genuine rights-based processes. Deploying thousands of armed
                    personnel into that environment without stronger oversight
                    risks replicating existing problems at greater scale.
                  </p>

                  {/* NEW PARAGRAPH ADDED - Wagner Group section from Word document */}
                  <p className="my-3">
                    Elsewhere in Africa, the trajectory has run in the opposite
                    direction, the Russian state backed Wagner Group{" "}
                    <a
                      href="https://interpopulum.org/wp-content/uploads/2025/12/Proxy-Power-and-Precious-Minerals-Russias-Growing-Footprint-in-Africa-through-the-Wagner-Group.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      demonstrated
                    </a>{" "}
                    a model in which security provision served not as a service
                    rendered to a mining company but as a lever for acquiring
                    mineral assets directly. Between roughly 2017 and 2023,
                    Wagner traded military services to fragile African
                    governments in exchange for mining concessions, exploitation
                    rights, and political access needed to establish shell
                    company networks for profit extraction. In the Central
                    African Republic, Wagner personnel provided presidential
                    security while simultaneously securing gold and diamond
                    mining permits through the government they were protecting.
                    In Sudan, they traded disinformation and security support
                    for access to artisanal gold mining sites. In Mali, they
                    leveraged anti-French sentiment after a military coup to
                    install themselves as the junta's primary security partner,
                    gaining footholds across that country's gold sector.
                    Estimates suggest Wagner extracted approximately $2.5
                    billion in gold from African operations between 2022 and
                    mid-2024 alone, moving product through parallel trading
                    networks that bypassed international sanctions monitoring
                    before feeding into global supply chains through
                    intermediary refiners.
                  </p>

                  <p className="my-3">
                    The market consequences of PMC activity operate through
                    several mechanisms not always visible in spot price data.
                    When armed groups create instability around a mining zone,
                    formal sector output contracts, personnel are evacuated, and
                    capital expenditure is deferred. This drives up
                    jurisdictional risk premiums, the cost that buyers bear to
                    compensate for potential supply interruption, just as
                    smuggled mineral volumes, diverted into informal channels
                    that bypass export registries, distort production statistics
                    and demand forecasting.
                  </p>

                  <p style={{ color: "#686868", marginTop: "40px" }}>
                    Copyright © 2025 by Ananta Aspen Centre
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
                        Centre. He studies the intersection of technology and
                        geopolitics and specialises on the affairs of the former
                        Soviet space and African security dynamics.
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
