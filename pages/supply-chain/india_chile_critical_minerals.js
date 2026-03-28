import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge, Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function DeepSeaMinerals() {
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
            src={`${basePath}/assets/minerals_images/india-chile.jpg`}
            alt="India-Chile Trade Framework and Critical Minerals"
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
                    India—Chile Trade Framework and Critical Minerals: What Chile Leads In, Who Operates the Assets, and Lessons for India
                  </h3>

                  <p className="my-3">
                    The recently expanded India—Chile trade framework marks a significant
                    evolution in bilateral economic engagement, particularly in the context
                    of critical minerals. What began as a Preferential Trade Agreement (PTA)
                    in 2006, later expanded in 2017, is now moving toward a more
                    comprehensive economic partnership. This progression reflects a deeper
                    strategic alignment that goes beyond tariff liberalization and enters
                    the domain of resource security, industrial policy coordination, and
                    energy transition planning. At the center of this evolving relationship
                    lies cooperation on critical minerals—especially lithium and
                    copper—both of which are indispensable to the global shift toward
                    clean energy and electrification.
                  </p>

                  <h4 className="my-3">
                    1) Where Chile Leads Across the Critical Mineral Value Chain
                  </h4>

                  <p className="my-3">
                    Chile's comparative advantage is strongest in upstream production
                    (mining/extraction) and in selective midstream segments—particularly
                    lithium chemical conversion and copper smelting/refining—supported by
                    a mature regulatory ecosystem and globally competitive operators. In
                    practical terms, Chile is a global "anchor supplier" of copper and a
                    tier‑one supplier of lithium raw materials and battery‑grade chemicals,
                    with active policy efforts to capture more value downstream through
                    public‑private partnerships and stricter governance mechanisms.
                  </p>

                  <h4 className="my-3">Table 1: Chile's Strength by Value-Chain Stage (Indicative)</h4>
                  
                  <Table striped bordered hover responsive className="my-3">
                    <thead>
                      <tr>
                        <th>Stage</th>
                        <th>Chile's current position</th>
                        <th>What this means for India</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Exploration & Mining</td>
                        <td>World-leading copper producer; major lithium brine extraction base</td>
                        <td>Secure long-term supply and equity stakes; diversify away from single‑region risk</td>
                      </tr>
                      <tr>
                        <td>Processing / Concentration</td>
                        <td>Large-scale copper concentration; established lithium brine processing</td>
                        <td>Build offtake + tech tie-ups; integrate ESG and water stewardship into supply contracts</td>
                      </tr>
                      <tr>
                        <td>Refining / Smelting</td>
                        <td>Copper smelting/refining footprint; lithium chemical conversion at industrial scale</td>
                        <td>Partner on upgrading/refining tech; replicate 'conversion + compliance' model in India</td>
                      </tr>
                      <tr>
                        <td>Battery/Materials manufacturing</td>
                        <td>Developing; still limited vs East Asia/EU/US</td>
                        <td>Opportunity for JV investment: cathode materials, precursor chemicals, downstream manufacturing</td>
                      </tr>
                      <tr>
                        <td>Recycling / Circular</td>
                        <td>Growing policy attention; not yet globally dominant</td>
                        <td>Cooperate on standards + urban mining; build recycling scale early in India</td>
                      </tr>
                    </tbody>
                  </Table>

                  <h4 className="my-3">
                    2) Copper: Chile's Core Strategic Asset
                  </h4>

                  <p className="my-3">
                    Chile's role in copper is not merely "large-scale mining"; it is a
                    deeply integrated ecosystem of world-class ore bodies, global operators,
                    logistics, and a state capacity that uses copper as a strategic revenue
                    and industrial policy lever. Copper's relevance to India's 500 GW
                    non‑fossil electricity target and the electrification of mobility is
                    straightforward: transmission lines, transformers, windings, EV motors,
                    and charging infrastructure all multiply copper intensity.
                  </p>

                  <p className="my-3">
                    Operationally, Chile's copper leadership is driven by a mix of
                    state-owned and multinational firms operating some of the world's most
                    productive mines. Understanding "who runs what" matters for India
                    because supply security in practice is negotiated with asset operators
                    and license-holding entities, within the rules set by Chilean
                    authorities.
                  </p>

                  <h4 className="my-3">Table 2: Major Copper Assets in Chile — Operators and Ownership (Selected)</h4>
                  
                  <Table striped bordered hover responsive className="my-3">
                    <thead>
                      <tr>
                        <th>Asset</th>
                        <th>Primary operator</th>
                        <th>Ownership (selected)</th>
                        <th>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Escondida</td>
                        <td>BHP (operator)</td>
                        <td>BHP 57.5%; Rio Tinto 30%; JECO 12.5%</td>
                        <td>World's largest copper producer (mine-level)</td>
                      </tr>
                      <tr>
                        <td>Collahuasi</td>
                        <td>Collahuasi (operating company)</td>
                        <td>Anglo American 44%; Glencore 44%; Japan Collahuasi Resources 12%</td>
                        <td>Large-scale concentrate producer; global JV model</td>
                      </tr>
                      <tr>
                        <td>Codelco portfolio (7 divisions)</td>
                        <td>Codelco (state-owned)</td>
                        <td>State-owned</td>
                        <td>Chuquicamata, El Teniente, Andina, etc.; includes Ventanas refinery</td>
                      </tr>
                      <tr>
                        <td>Antofagasta Minerals (4 mines)</td>
                        <td>Antofagasta (operator)</td>
                        <td>Los Pelambres, Centinela, Antucoya, Zaldívar (Centinela 70% owned)</td>
                        <td>Major private Chilean producer; desalination & expansion focus</td>
                      </tr>
                    </tbody>
                  </Table>

                  <p className="my-3">
                    What Chile also does differently—worth noting for India—is
                    operational adaptation to water stress. Large mines have shifted toward
                    desalinated water and reduced freshwater reliance as a social license
                    and regulatory response. This is relevant because India's own mineral
                    corridor development will face water constraints and community
                    pressures, especially in arid or semi-arid zones.
                  </p>

                  <h4 className="my-3">
                    3) Lithium: Governance Innovation and Midstream Conversion Capability
                  </h4>

                  <p className="my-3">
                    Chile's lithium story is not only about resource abundance in the Salar
                    de Atacama; it is equally about governance architecture. The National
                    Lithium Strategy frames lithium as a strategic resource, expanding state
                    participation and using structured contracts and public‑private
                    partnerships to manage value capture, environmental standards, and
                    indigenous consultation. The headline governance move is to place the
                    state (primarily via Codelco and ENAMI) in majority or controlling
                    positions in strategic projects, while leveraging private operators for
                    technology, capex, and operating expertise.
                  </p>

                  <p className="my-3">
                    From a value-chain standpoint, Chile's differentiator is its ability to
                    go beyond extraction into chemical conversion at scale—producing
                    battery‑grade lithium carbonate (and in some cases hydroxide) from
                    brines. Albemarle's La Negra complex in Antofagasta is a concrete
                    example of midstream capacity expansion, with the company describing the
                    site as a major battery‑grade lithium carbonate production complex
                    following its expansions.
                  </p>

                  <h4 className="my-3">Table 3: Chile Lithium — Key Operators, Projects, and State Role (Selected)</h4>
                  
                  <Table striped bordered hover responsive className="my-3">
                    <thead>
                      <tr>
                        <th>Project / Asset</th>
                        <th>Operators / partners</th>
                        <th>Governance / state role</th>
                        <th>What to watch</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Salar de Atacama (existing production)</td>
                        <td>SQM; Albemarle</td>
                        <td>Strategic resource; moving toward stronger state participation under National Lithium Strategy</td>
                        <td>Water/brine constraints; technology shifts (e.g., DLE pilots)</td>
                      </tr>
                      <tr>
                        <td>Codelco—SQM partnership (Atacama)</td>
                        <td>Codelco + SQM JV</td>
                        <td>Codelco holds 50% + one share; refined lithium production planned 2025—2060</td>
                        <td>Implementation approvals; ESG commitments; process efficiency without increased brine extraction (as stated by partnership site)</td>
                      </tr>
                      <tr>
                        <td>ENAMI—Rio Tinto (CEOL) — emerging</td>
                        <td>ENAMI + Rio Tinto</td>
                        <td>CEOL contract mechanism enabling state-owned company + private partner</td>
                        <td>Community consultation; water impacts; pace of project execution</td>
                      </tr>
                    </tbody>
                  </Table>

                  <div className="text-center my-4">
                    <p><strong>Figure 2: Announced lithium production capacity trajectory (kt).</strong></p>
                    <img
                      src={`${basePath}/assets/lithium-production-graph.png`}
                      alt="Lithium production capacity trajectory"
                      style={{
                        width: "100%",
                        height: "400px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        objectFit : "contain"
                      }}
                    />
                  </div>

                  <p className="my-3">
                    Chile is also actively testing and scaling technology pathways to reduce
                    environmental externalities. Direct Lithium Extraction (DLE) pilots and
                    process-efficiency commitments are increasingly part of project
                    narratives, reflecting both regulatory pressure and the need to maintain
                    long-term production under tighter water and brine constraints.
                  </p>

                  <h4 className="my-3">
                    4) Processing and Refining: What Chile Actually Controls
                  </h4>

                  <p className="my-3">
                    A common misconception is that Chile is only an upstream exporter. In
                    reality, Chile retains meaningful midstream assets in copper and
                    lithium. On copper, Chile hosts multiple smelters (historically
                    including facilities such as Chuquicamata and Caletones), and Codelco
                    explicitly lists the Ventanas Refinery as part of its operational
                    footprint. On lithium, chemical conversion capacity (notably at La
                    Negra) is a concrete example of "processing inside the country,"
                    producing battery-grade material rather than exporting only raw brine or
                    concentrate.
                  </p>

                  <p className="my-3">
                    However, the global chokepoint remains advanced refining and downstream
                    manufacturing of cathode/anode materials and battery cells, where East
                    Asia retains scale advantages. Chile's policy direction is therefore to
                    (a) increase state oversight and value capture at the
                    upstream/midstream, (b) attract higher-value investment into conversion
                    and material processing, and (c) lock sustainability credentials that
                    make Chilean output "acceptable" for EU/US clean supply chain regimes.
                  </p>

                  <h4 className="my-3">
                    5) Authorities and Governance: Who Regulates What
                  </h4>

                  <p className="my-3">
                    For India, knowing the operator is necessary but not sufficient: Chile's
                    "rules of the game" are set by a set of institutions under the Ministry
                    of Mining, including COCHILCO and SERNAGEOMIN, alongside state-owned
                    enterprises such as Codelco and ENAMI. In lithium specifically, the
                    National Lithium Strategy institutionalizes state participation and
                    embeds consultation mechanisms for indigenous communities and local
                    stakeholders. This is strategically important because contract
                    structures, licensing regimes, and social license requirements directly
                    affect project timelines and therefore supply reliability.
                  </p>

                  <h4 className="my-3">
                    6) What Chile Has Signed With Others — and What India Can Learn
                  </h4>

                  <p className="my-3">
                    Chile has been actively structuring "strategic partnerships" around
                    critical raw materials, often combining trade frameworks with
                    sustainability and investment cooperation. The EU—Chile Memorandum of
                    Understanding (18 July 2023) explicitly targets sustainable raw
                    materials value chains, aiming to mobilize cooperation across mining
                    standards, investment, and supply chain resilience. Chile's
                    long-standing FTA with the United States also matters in practice: U.S.
                    government statements have highlighted that Chilean critical minerals
                    can support eligibility under U.S. clean vehicle tax credit supply-chain
                    rules, reinforcing Chile's attractiveness as a 'trusted' supplier in
                    North American policy ecosystems.
                  </p>

                  <p className="my-3">
                    Chile has also anchored long-duration commercial offtake strategies with
                    major battery manufacturers. For example, SQM has announced long-term
                    supply arrangements with battery players for refined lithium carbonate
                    and hydroxide, reflecting a commercial model where upstream producers
                    secure bankability by contracting with downstream demand centers. This
                    "contracted demand" approach is a practical template India can emulate
                    via its public sector and domestic cell manufacturers—pairing upstream
                    equity/offtake with downstream commitments to ensure financing closes.
                  </p>

                  <h4 className="my-3">
                    7) What India Should Take Inspiration From — A Playbook
                  </h4>

                  <ol className="my-3" style={{ paddingLeft: "20px" }}>
                    <li className="mb-2">
                      <strong>Use structured state-partner models for strategic minerals.</strong> Chile's
                      lithium strategy operationalizes state participation through
                      public‑private JVs and contract instruments (e.g., CEOL) rather than
                      relying only on classic concession models. For India, this suggests
                      creating standardized JV/contract templates for overseas assets (through
                      KABIL and PSUs) with clear clauses on ESG, technology transfer, and
                      long-term offtake security.
                    </li>
                    <li className="mb-2">
                      <strong>Build "water + ESG" into supply security, not as an afterthought.</strong> Chile's
                      mining ecosystem increasingly uses desalination and tighter water
                      stewardship to maintain social license. India should embed
                      water-use KPIs, community consultation milestones, and transparency
                      commitments into critical mineral procurement and equity investment
                      strategies—especially when sourcing from arid zones.
                    </li>
                    <li className="mb-2">
                      <strong>Don't stop at ore: secure midstream conversion.</strong> Chile's La Negra
                      example shows the strategic value of producing battery‑grade chemicals
                      domestically. India's policy should prioritize domestic
                      conversion/refining facilities and ensure overseas procurement contracts
                      include support for feedstock specifications, impurity management, and
                      process know-how.
                    </li>
                    <li className="mb-2">
                      <strong>Align with "trusted supply chain" regimes.</strong> Chile's EU MoU and U.S.
                      FTA link its minerals to market access advantages and clean-tech
                      incentives. India should proactively align its domestic standards and
                      traceability systems (mine-to-material) to meet EU/US sustainability
                      disclosure expectations, turning compliance into a competitiveness
                      advantage.
                    </li>
                    <li className="mb-2">
                      <strong>Combine diplomacy + industrial policy.</strong> Chile's approach integrates
                      government-led frameworks with bankable commercial deals (e.g.,
                      long-term offtake). India should similarly coordinate MEA, mines
                      ministry, and industry to present integrated packages: upstream access +
                      midstream investment + downstream demand guarantees.
                    </li>
                  </ol>

                  <h4 className="my-3">
                    Highlighted Sources (for verification and further reading)
                  </h4>

                  <ul className="my-3" style={{ paddingLeft: "20px" }}>
                    <li className="mb-1"><strong>European Commission:</strong> EU—Chile MoU on sustainable raw materials value chains (signed 18 July 2023) + MoU PDF.</li>
                    <li className="mb-1"><strong>Government of Chile:</strong> National Lithium Strategy portal; Government news on Codelco—SQM approvals.</li>
                    <li className="mb-1"><strong>Codelco:</strong> Corporate overview; Codelco—SQM partnership agreement explainer; NovaAndino Litio updates.</li>
                    <li className="mb-1"><strong>US Treasury:</strong> Remarks by Secretary Janet Yellen at Albemarle's La Negra facility on U.S.—Chile FTA and IRA relevance.</li>
                    <li className="mb-1"><strong>USGS:</strong> Mineral Commodity Summaries 2024 (Chile copper/lithium positioning).</li>
                    <li className="mb-1"><strong>BHP and Rio Tinto:</strong> Escondida ownership disclosures; Collahuasi shareholder disclosures.</li>
                    <li className="mb-1"><strong>Albemarle:</strong> Salar de Atacama and La Negra facility pages (processing/conversion scale statements).</li>
                    <li className="mb-1"><strong>ICCT:</strong> Report on expanding the lithium value chain in Chile (capacity projections).</li>
                    <li className="mb-1"><strong>NRGI:</strong> Analysis on Chile lithium strategy and CEOL contracts (ENAMI—Rio Tinto).</li>
                    <li className="mb-1"><strong>SQM:</strong> Long-term lithium supply agreement announcement with LG Energy Solution.</li>
                  </ul>

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
                          Mithilesh Phadke
                        </h5>
                        <Badge bg="success" pill>
                          Author
                        </Badge>
                      </div>

                      <p className="text-muted" style={{ lineHeight: 1.6 }}>
                        Mithilesh Phadke is a Programme Executive at the Ananta
                        Aspen Centre. This non-partisan, non-profit organisation
                        promotes value- based leadership and convenes Track II
                        dialogues with India's strategic partner countries. At the
                        Centre, he works in the Leadership vertical where he curates
                        programmes, socratic dialogues and fellowships for various
                        demographics, including high school students, mid-career
                        professionals, senior leaders, and women entrepreneurs from
                        tier 2 &amp; 3 cities. He is also part of an annual event
                        called Ananta Godrej Ideas India, where fellows from Ananta's
                        seven fellowships and different walks of life gather to
                        exchange ideas for ushering in significant societal change.
                        Additionally, he contributes to the International Relations
                        Vertical on a project basis, like curation support for the
                        Arctic Circle India Forum, and research support for Ananta's
                        Critical Minerals Dashboard. He is also involved in leading
                        an annual public event that dissects and analyses the Indian
                        government's Union Budget. Across the programmes, his role
                        varies from curation, research, logistics management,
                        analytical visualisation, graphic tools development, and
                        stakeholder engagement to connect government, business, and
                        civil society for more effective dialogue. His work reflects
                        a commitment to nurturing leadership and fostering informed
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