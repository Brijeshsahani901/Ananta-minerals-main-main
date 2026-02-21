import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function GreenlandGambit() {
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
            src={`${basePath}/assets/minerals_images/greenlandGambit.jpg`}
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
                    The United States and the Greenland Question
                  </h3>

                  <p className="my-3">
                    The United States' interest in Greenland is long-standing and
                    well-documented. In 1946, Secretary of State James F. Byrnes proposed
                    that the United States consider purchasing Greenland, a proposal
                    recorded in State Department{" "}
                    <a
                      href="https://history.state.gov/historicaldocuments/frus1947v01/d379?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      historical documents
                    </a>
                    . The issue reappeared in 2019 after then-President Trump's public
                    remarks, prompting a formal Congressional Research Service analysis of
                    U.S.-Denmark-Greenland relations. Since 2019, Washington has{" "}
                    <a
                      href="https://www.congress.gov/crs_external_products/IN/PDF/IN11161/IN11161.1.pdf?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      emphasised partnership
                    </a>{" "}
                    and enhanced security cooperation rather than outright acquisition,
                    formalised most recently in the{" "}
                    <a
                      href="https://www.fmn.dk/globalassets/fmn/dokumenter/nyheder/2023/-us-denmark-dca-den-prime-english-20dec2023-.pdf?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      U.S.--Denmark Defense Cooperation Agreement of December 2023
                    </a>
                    . The Department of Defence's 2024 Arctic Strategy underlines a{" "}
                    <a
                      href="https://media.defense.gov/2024/Jul/22/2003507411/-1/-1/0/DOD-ARCTIC-STRATEGY-2024.PDF?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      stronger U.S. posture
                    </a>{" "}
                    in the region, focusing on homeland defence, intelligence, and allied
                    cooperation, while U.S. and Danish official statements repeatedly note
                    that Denmark retains constitutional authority over Greenland's foreign
                    and defence matters.
                  </p>

                  <p className="my-3">
                    Into January 2026, Greenland has remained politically salient in
                    Washington with multiple bills introduced in the{" "}
                    <a
                      href="https://www.congress.gov/bill/119th-congress/house-bill/361?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      119th Congress
                    </a>{" "}
                    that would either authorise presidential negotiations to acquire and
                    annexe Greenland or explicitly prohibit federal funds to facilitate any
                    annexation, keeping the question alive in congressional debate even as
                    executive-branch documents frame engagement as a partnership.
                  </p>

                  <p className="my-3">
                    Greenland has moved from an Arctic curiosity to a live node in the
                    global race for critical raw materials (CRMs).{" "}
                    <a
                      href="https://www.eurare.org/countries/greenland.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Geological surveys and recent exploration
                    </a>{" "}
                    have confirmed meaningful occurrences of rare earth elements (REEs),
                    graphite, ilmenite, nickel and other strategic inputs concentrated in
                    the island's southern intrusive complexes and coastal mineral-sand
                    deposits. Yet, the economics of Arctic mining, remote logistics, harsh
                    climate, limited infrastructure, and stringent environmental politics
                    mean that geological promise does not automatically translate into
                    production. Policymakers and firms must therefore weigh strategic
                    opportunity against operational and political friction.
                  </p>

                  <h4 className="my-3">What is Greenland's Critical Mineral Ceiling?</h4>

                  <p className="my-3">
                    Key deposits give Greenland an outsized strategic interest relative to
                    its population. The Ilímaussaq complex (Kvanefjeld) hosts one of the
                    world's largest{" "}
                    <a
                      href="https://portergeo.com.au/database/mineinfo.php?mineid=mn1814"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      undeveloped REE resources
                    </a>{" "}
                    alongside uranium and zinc; the{" "}
                    <a
                      href="https://eurmc.org/publication/rare-earths-mining-in-kringlerne-greenland-critical-factsheets-on-mining-projects/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Kringlerne/Killavaat Alannguat (Tanbreez)
                    </a>{" "}
                    package also ranks among the largest REE deposits globally. High-grade{" "}
                    <a
                      href="https://greenrocmining.com/project/amitsoq-graphite-greenland/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      graphite occurrences (Amitsoq)
                    </a>{" "}
                    and heavy-mineral sands (ilmenite, titanium) add to the island's CRM
                    mix. That said, to date, only a handful of small operations have reached
                    production; most large projects remain in permitting, legal dispute or
                    long-term development phases.
                  </p>

                  <h4 className="my-3">Ongoing pilots and private-sector activity</h4>

                  <p className="my-3">
                    Several private players are actively advancing pilot studies, permitting
                    and early development work. Energy Transition Minerals (formerly
                    Greenland Minerals) has long developed the Kvanefjeld feasibility and
                    downstream concepts. However, the project has been stalled politically
                    and in arbitration after Greenland's 2021 uranium restrictions. Tanbreez
                    (Killavaat Alannguat) has changed hands and is advancing under Critical
                    Metals and related developers with updated scoping and drilling
                    programs. More recently,{" "}
                    <a
                      href="https://www.reuters.com/business/energy/greenland-approves-30-year-mining-permit-eu-backed-graphite-project-2025-12-09/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GreenRoc Strategic Materials
                    </a>{" "}
                    secured permits and political backing for the Amitsoq graphite project
                    and EU strategic support, while other juniors such as Amaroq, Greenland
                    Resources,{" "}
                    <a
                      href="https://www.nsenergybusiness.com/projects/dundas-titanium-ilmenite-project/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dundas Titanium
                    </a>
                    , have moved exploration and exploitation licence applications through
                    Greenland's permitting system. These are not small pilots, they are
                    capital-intensive pre-development stages aimed at de-risking metallurgy,
                    logistics and social consent.
                  </p>

                  <h4 className="my-3">China and Russia: presence and limits</h4>

                  <p className="my-3">
                    Chinese commercial interest has been the most visible:{" "}
                    <a
                      href="https://en.cnnc.com.cn/2019-01/23/c_1026658.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Shenghe Resources
                    </a>{" "}
                    established a strategic stake and offtake/processing ties with the Kvanefjeld
                    developer, prompting{" "}
                    <a
                      href="https://www.diis.dk/en/research/chinese-investments-in-greenland-raise-us-concerns"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Western attention to possible Beijing leverage
                    </a>{" "}
                    over future REE supply chains. That link has driven diplomatic pushback
                    and policy scrutiny in Europe and the U.S. by 2024-25. Russia's
                    footprint in Greenlandian mining is far smaller, with Moscow's Arctic
                    activity concentrated closer to Russian territory, and credible evidence
                    of Russian mining investment in Greenland is limited;{" "}
                    <a
                      href="https://www.reuters.com/world/china/nordics-reject-trumps-claim-chinese-russian-ships-around-greenland-ft-reports-2026-01-11/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Western reporting and Nordic officials have
                    </a>{" "}
                    also pushed back on overblown claims of Russian ships operating around
                    Greenland. In short, China has active commercial ties to Greenland REE
                    projects; Russian direct involvement in Greenland mining is marginal.
                  </p>

                  <h4 className="my-3">How can India optimise a Greenland strategy?</h4>

                  <p className="my-3">
                    India should approach Greenland with a pragmatic, layered playbook
                    rather than a single large bet:
                  </p>

                  <ul className="my-3">
                    <li>
                      <strong>Technical & upstream cooperation:</strong> fund or jointly finance
                      geological surveys and metallurgical pilots on separation research,
                      low-temperature processing, with Greenland institutions and trusted
                      Western partners. This buys technical familiarity without immediate
                      sovereign exposure.
                    </li>
                    <li>
                      <strong>Targeted offtakes and processing partnerships:</strong> secure long-term
                      offtake or concentrate purchase agreements tied to financing support
                      for local beneficiation. India's downstream ecosystem (refining,
                      battery anode capacity) can add value by offering to take concentrates
                      and invest in separation/refining nodes shared with EU partners.
                    </li>
                    <li>
                      <strong>Coalitions, not solo runs:</strong> work through multilateral or
                      like-minded groupings (EU/Canada/Japan/Australia) to reduce
                      geopolitical friction tied to China and to meet Greenland's governance
                      and finance thresholds. Co-investment reduces perception risk and
                      unlocks export-credit and concessional finance.
                    </li>
                    <li>
                      <strong>ESG & community consent as entry ticket:</strong> make community benefits,
                      environmental performance and Arctic-appropriate tailings solutions
                      contractual preconditions for investment, this protects reputational
                      and political capital.
                    </li>
                    <li>
                      <strong>Legal and sanctions due diligence:</strong> given the geopolitics around
                      REEs, ensure every contract integrates strong arbitration, escrowed
                      payments and transparent ownership to avoid future geopolitically
                      driven contestation.
                    </li>
                  </ul>

                  <h4 className="my-3">Conclusion: realistic ambition, patient execution</h4>

                  <p className="my-3">
                    Greenland offers strategically useful CRMs that could diversify
                    non-Chinese supply, but turning deposits into secure, sustainable supply
                    chains will take years and will be as much about diplomacy, finance and
                    environmental politics as about geology. For India, the smart path is
                    incremental: partner on technical pilots, lock in offtakes and
                    processing collaborations with trusted allies, and foreground ESG and
                    community consent so that when a commercial window opens, Indian firms
                    can step in as credible, value-adding partners rather than rushed
                    opportunists. Greenland's resources are a strategic option, not an
                    instant fix, for India's CRM diversification.
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
                          Ayan Barman
                        </h5>
                        <Badge bg="success" pill>
                          Author
                        </Badge>
                      </div>

                      <p className="text-muted" style={{ lineHeight: 1.6 }}>
                        Ayan Barman is an international relations researcher at
                        Ananta Aspen Centre focusing on the geopolitical
                        implications of critical minerals. He holds a BA in
                        Liberal & Humanities Studies from O.P. Jindal
                        University, where he studied global security dynamics.
                        Ayan has contributed to policy reports at NITI Aayog and
                        authored articles on geopolitical issues with the
                        Observer Research Foundation. He has also worked at
                        British Petroleum (BP) as an executive. He is dedicated
                        to enhancing India's role in global governance and
                        promoting sustainable development in critical minerals.
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