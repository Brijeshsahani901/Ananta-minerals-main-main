import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function Jaishankar() {
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
            src={`${basePath}/assets/minerals_images/jaishankar.jpg`}
            alt="Jaishankar in Washington: Critical Minerals and the Hard Geometry of Supply Chains"
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
                    Jaishankar in Washington: Critical Minerals and the Hard Geometry of Supply Chains
                  </h3>

                  <p className="my-3">
                    External Affairs Minister S. Jaishankar's latest visit to Washington comes at a structural inflection point in global economic geopolitics. Critical minerals have moved from being a technical trade concern to a strategic determinant of power. Lithium, rare earth elements, graphite, cobalt, and nickel now underpin electric mobility, grid-scale storage, semiconductors, advanced electronics, and defense systems. The discussions during his visit reflected this transformation: economic diplomacy is now mineral diplomacy.
                  </p>

                  <p className="my-3">
                    The scale of the challenge confronting the United States remains significant. The U.S. is nearly 100 percent import-reliant for lithium, natural graphite, and rare earth elements. Even for cobalt and nickel, dependence remains substantial. This is not merely a trade imbalance; it is a structural vulnerability embedded in the energy transition and the defense industrial base.
                  </p>

                  <p className="my-3">
                    More critically, the vulnerability lies in processing. China controls approximately 70 percent of lithium conversion, 90 percent of graphite processing, and around 85 percent of rare earth separation globally. The geopolitical asymmetry is therefore concentrated in midstream capacity—refining, separation, and chemical conversion—rather than extraction alone.
                  </p>

                  <p className="my-3">
                    Against this backdrop, Jaishankar's engagement in Washington signals India's increasing relevance in the restructuring of supply chains. The United States has mobilized industrial policy instruments including the Inflation Reduction Act and Defense Production Act funding to catalyze domestic processing facilities and battery manufacturing ecosystems. However, scaling refining capacity requires years due to environmental permitting, capital intensity, and technological complexity. The U.S. strategy therefore combines domestic build-out with friend-shoring partnerships.
                  </p>

                  <p className="my-3">
                    India's strategic positioning is significant for three reasons. First, it possesses chemical engineering capabilities and industrial scale that can support lithium conversion, rare earth magnet manufacturing, and precursor production. Second, its geographic and diplomatic footprint across Africa, Latin America, and Australia enables upstream engagement in resource-rich regions. Third, India's own energy transition targets create domestic demand, enhancing commercial viability.
                  </p>

                  <p className="my-3">
                    The visit also coincided with efforts to stabilize trade relations between the two countries. Situating tariff adjustments and broader economic cooperation alongside critical mineral discussions reframes the bilateral relationship from transactional disputes to structural interdependence. Supply chain resilience requires predictable trade architecture and long-term investment stability.
                  </p>

                  <p className="my-3">
                    Geopolitically, the visit reinforces the evolving Indo-Pacific strategy. Rare earth magnets are essential for fighter aircraft, missile guidance systems, naval propulsion technologies, and advanced communications. Securing diversified supply nodes reduces single-point-of-failure risks and strengthens defense interoperability. Cooperation in critical minerals therefore operates at the intersection of economic security and national security.
                  </p>

                  <p className="my-3">
                    Constraints remain on both sides. India must accelerate regulatory clarity, environmental governance, and infrastructure development to attract sustained capital into refining and processing. The United States must streamline permitting timelines and maintain bipartisan support for industrial policy. Without disciplined execution, strategic intent will remain aspirational.
                  </p>

                  <p className="my-3">
                    Ultimately, Jaishankar's visit reflects the maturation of U.S.–India relations. The partnership is evolving toward coordinated industrial strategy, resource security collaboration, and technology ecosystem integration. Critical minerals are no longer peripheral to diplomacy; they are central to it. The geometry of global power is increasingly defined by refining capacity, chemical conversion facilities, and battery precursor plants. In that context, this visit marks participation in shaping a new mineral order defined by distributed resilience among strategic partners.
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
                          Mithilesh Phadke
                        </h5>
                        <Badge bg="success" pill>
                          Author
                        </Badge>
                      </div>

                      <p className="text-muted" style={{ lineHeight: 1.6 }}>
                        Mithilesh Phadke is a Programme Executive at the Ananta
                        Aspen Centre. This non-partisan, non-profit organisation
                        promotes value- based leadership and convenes Track II
                        dialogues with India's strategic partner countries. At
                        the Centre, he works in the Leadership vertical where he
                        curates programmes, socratic dialogues and fellowships
                        for various demographics, including high school
                        students, mid-career professionals, senior leaders, and
                        women entrepreneurs from tier 2 & 3 cities. He is also
                        part of an annual event called Ananta Godrej Ideas
                        India, where fellows from Ananta's seven fellowships and
                        different walks of life gather to exchange ideas for
                        ushering in significant societal change. Additionally,
                        he contributes to the International Relations Vertical
                        on a project basis, like curation support for the Arctic
                        Circle India Forum, and research support for Ananta's
                        Critical Minerals Dashboard. He is also involved in
                        leading an annual public event that dissects and
                        analyses the Indian government's Union Budget. Across
                        the programmes, his role varies from curation, research,
                        logistics management, analytical visualisation, graphic
                        tools development, and stakeholder engagement to connect
                        government, business, and civil society for more
                        effective dialogue. His work reflects a commitment to
                        nurturing leadership and fostering informed
                        conversations that contribute to a better future.
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