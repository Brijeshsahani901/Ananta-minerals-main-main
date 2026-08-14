import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import clsx from "clsx";

export default function UzbekistanMinerals() {
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
            src={`${basePath}/assets/minerals_images/india-uzbekistan.webp`}
            alt="Uzbekistan Critical Minerals"
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
                    Central Asia and Uzbekistan pop up on India's critical
                    minerals agenda
                  </h3>

                  <p className="my-3">
                    Central Asia has occupied a curious position in India's
                    foreign policy thinking for three decades since the fall of
                    the Soviet Union. The region is frequently cited as a
                    priority and rarely treated as one in operational terms.
                    India's bilateral relationship with Uzbekistan is a
                    reasonable illustration of that pattern, characterised by
                    warm rhetoric, modest commercial outcomes and a persistent
                    gap between what the two countries say they want from each
                    other and what they have actually built.
                  </p>

                  <p className="my-3">
                    The current phase of engagement is interesting precisely
                    because the gap between rhetoric and substance appears to be
                    narrowing, not because the diplomatic language has become
                    more ambitious but because the underlying economics have
                    become more specific. Uzbekistan's&nbsp;
                    <a
                      href="https://newsonair.gov.in/uzbekistans-foreign-affairs-minister-reaches-india-today-for-official-visit/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      foreign minister
                    </a>
                    &nbsp;spent August 2-5 2026, reviewing a strategic
                    partnership that both governments want to move beyond its
                    current weight.
                  </p>

                  <p className="my-3">
                    Reportedly during the bilateral discussions, the
                    conversation kept returning to&nbsp;
                    <a
                      href="https://www.aninews.in/news/world/asia/we-want-to-take-it-into-mining-jaishankar-on-india-uzbekistan-targeting-critical-minerals-expanding-trade20260803201504/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      mining and metallurgy
                    </a>
                    , which is not surprising given what Uzbekistan has
                    underground and what India needs at the surface of its
                    manufacturing economy. Gold, copper, uranium and rare earth
                    elements sit in Uzbek deposits that remain largely
                    underdeveloped relative to their assessed scale, and the
                    Uzbek government has made a deliberate decision to attract
                    foreign industrial partners rather than simply export raw
                    ore, a distinction that matters considerably for what kind
                    of investment it is trying to draw in and what kind of
                    partner India can realistically be.
                  </p>

                  <p className="my-3">
                    India's interest in this geography is not primarily
                    diplomatic, it follows from a set of industrial commitments,
                    in electric vehicles, semiconductors and defence
                    manufacturing, that require mineral inputs at volumes and
                    specifications that domestic reserves cannot currently
                    provide and that existing import relationships do not
                    reliably secure. India's National Critical Mineral Mission
                    has produced a bilateral framework with partners across
                    multiple continents, but Central Asia has been notably
                    underrepresented in that framework relative to the region's
                    resource endowment. Uzbekistan's combination of relevant
                    geology, an investment-seeking government and a position
                    along the International North South Transport Corridor
                    (NSTC) that India is actively developing makes it a more
                    practical partner than its distance from Indian ports might
                    suggest.
                  </p>

                  <p className="my-3">
                    The framing that Uzbek officials used in New Delhi was
                    oriented toward joint processing projects rather than
                    extraction concessions, with copper processing, steel
                    production and higher-value rare earth manufacturing
                    identified as the priority areas for bilateral
                    collaboration. That framing reflects a sophistication about
                    what India can offer that goes beyond capital. Indian
                    companies have built project execution track records across
                    Central Asia in pharmaceuticals, information technology and
                    light manufacturing, and several hundred of them are already
                    present in Uzbekistan across various sectors. The mining
                    conversation is therefore entering a commercial relationship
                    that already has institutional depth, which changes the
                    starting conditions for large-scale industrial investment in
                    ways that a purely diplomatic framework would not.
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
