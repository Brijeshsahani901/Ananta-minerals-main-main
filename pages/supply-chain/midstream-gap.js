import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge, Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function MidstreamGap() {
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
            src={`${basePath}/assets/minerals_images/midstream.jpg`}
            alt="The Midstream Gap: India’s Strategic Vulnerability in Critical Minerals"
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
                    The Midstream Gap: India’s Strategic Vulnerability in Critical Minerals
                  </h3>

                  <p className="my-3">
                    The supply chain for critical minerals generally involves exploration,
                    mining (extraction), <a href="https://www.eesi.org/papers/view/issue-brief-critical-minerals-and-the-u.s-clean-energy-transition#:~:text=Extraction%20" target="_blank">processing, refining,</a> and then manufacturing into end products. Critical minerals -- such as lithium, cobalt, nickel, rare earth elements, and others -- are the backbone of modern technologies and the clean energy transition. However, securing these materials is not just about mining them; the refining and processing stages that turn raw ores into high-purity materials are equally crucial and challenging. In this context, processing refers to the initial treatment of mined material to separate the desired mineral from other ore components, whereas <a href="https://www.eesi.org/papers/view/issue-brief-critical-minerals-and-the-u.s-clean-energy-transition#:~:text=Any%20remaining%20impurities%20are%20removed,then%20be%20used%20for%20manufacturing" target="_blank">refining</a> refers to removing remaining impurities to attain a high-purity form usable in manufacturing.
                  </p>

                  <p className="my-3">
                    From the critical minerals list given by the <a href="https://mines.gov.in/webportal/home" target="_blank">Ministry of Mines</a>, India's value addition in global supply chains for refining and processing/ midstream capabilities is given below in the table:
                  </p>

                  {/* Table */}
                  <div className="table-responsive my-4">
                    <Table bordered>
                      <thead>
                        <tr>
                          <th><strong>Mineral - Critical Application</strong></th>
                          <th><strong>Processing into - India's % of global value chain</strong></th>
                          <th><strong>Refining into - India's % of global value chain</strong></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>Lithium -- EV batteries</td><td>No commercial processing (0%)</td><td>Lithium carbonate / hydroxide -- 0%</td></tr>
                        <tr><td>Cobalt -- EV batteries</td><td>Cobalt intermediates (incl. recycling) -- ~1%</td><td>Battery-grade cobalt sulphate -- ~1%</td></tr>
                        <tr><td>Nickel -- EV batteries & alloys</td><td>Nickel matte / intermediates -- ~1%</td><td>Nickel sulphate (battery-grade) -- ~1–2%</td></tr>
                        <tr><td>Graphite (Synthetic) -- Li-ion anodes</td><td>Synthetic graphite blocks, electrodes -- ~10%</td><td>Battery anode-grade graphite -- ~5%</td></tr>
                        <tr><td>Graphite (Natural) -- Li-ion anodes</td><td>Beneficiated flake graphite -- ~0%</td><td>Spherical purified graphite -- ~0%</td></tr>
                        <tr><td>Rare Earths -- Permanent magnets (EVs, wind)</td><td>Mineral cracking, separation of light REEs -- ~2%</td><td>RE oxides (La, Ce, Nd, Pr) -- ~1–2%</td></tr>
                        <tr><td>Copper -- Power & EV wiring</td><td>Smelting of concentrates -- ~5%</td><td>Electro-refined copper cathodes -- ~5%</td></tr>
                        <tr><td>Aluminium -- Transport & power</td><td>Alumina refining -- ~6%</td><td>Primary aluminium metal -- ~6%</td></tr>
                        <tr><td>Chromium -- Stainless steel</td><td>Chrome ore processing -- ~8%</td><td>Ferrochrome alloy -- ~9%</td></tr>
                        <tr><td>Manganese -- Steel & batteries</td><td>Ore beneficiation -- ~6%</td><td>Ferromanganese / silicomanganese -- ~7%</td></tr>
                        <tr><td>Titanium -- Pigments & aerospace</td><td>Mineral sands processing -- ~5%</td><td>TiO₂ pigment -- ~5%</td></tr>
                        <tr><td>Vanadium -- High-strength steel</td><td>Vanadium-bearing slag processing -- ~0%</td><td>Vanadium alloys -- ~0%</td></tr>
                        <tr><td>Tungsten -- Cutting tools</td><td>Concentrate processing -- ~0%</td><td>Tungsten powder -- ~0%</td></tr>
                        <tr><td>Niobium -- HSLA steel</td><td>No processing capability (0%)</td><td>Ferroniobium -- 0%</td></tr>
                        <tr><td>Phosphorus -- Fertilisers & LFP batteries</td><td>Rock phosphate beneficiation -- ~4%</td><td>Phosphoric acid -- ~3–4%</td></tr>
                        <tr><td>Silicon -- Solar & electronics</td><td>Quartz → metallurgical silicon -- ~3%</td><td>Polysilicon (solar-grade) -- ~0%</td></tr>
                        <tr><td>Potash -- Fertilisers</td><td>No processing (0%)</td><td>Potash salts -- 0%</td></tr>
                        <tr><td>Gallium -- Semiconductors</td><td>By-product recovery from bauxite/zinc -- ~0%</td><td>Refined gallium -- ~0%</td></tr>
                        <tr><td>Germanium -- Fiber optics & IR</td><td>By-product recovery -- ~0%</td><td>Refined germanium -- ~0%</td></tr>
                        <tr><td>Indium -- Displays & PV</td><td>By-product recovery -- ~0%</td><td>Refined indium -- ~0%</td></tr>
                        <tr><td>Selenium -- Solar & electronics</td><td>By-product processing -- ~2%</td><td>Refined selenium -- ~2%</td></tr>
                        <tr><td>Tellurium -- CdTe solar</td><td>By-product recovery -- ~0%</td><td>Refined tellurium -- ~0%</td></tr>
                        <tr><td>Tin -- Electronics solder</td><td>Tin concentrate processing -- ~3%</td><td>Refined tin metal -- ~3%</td></tr>
                        <tr><td>Zinc -- Galvanisation</td><td>Zinc concentrate processing -- ~6%</td><td>Refined zinc -- ~6%</td></tr>
                        <tr><td>Lead -- Batteries</td><td>Lead concentrate processing -- ~4%</td><td>Refined lead -- ~4%</td></tr>
                        <tr><td>PGMs -- Catalysts & fuel cells</td><td>PGM concentrate processing -- ~0%</td><td>Refined PGMs -- ~0%</td></tr>
                        <tr><td>Beryllium -- Aerospace & defence</td><td>No processing (0%)</td><td>No refining (0%)</td></tr>
                        <tr><td>Molybdenum -- Alloy steel</td><td>Roasted molybdenum concentrate -- ~0%</td><td>Ferromolybdenum -- ~0%</td></tr>
                        <tr><td>Antimony -- Flame retardants</td><td>No processing (0%)</td><td>No refining (0%)</td></tr>
                      </tbody>
                    </Table>
                  </div>

                  <p className="my-3">
                    Out of the 30 critical minerals covered in the table, 15 minerals show ~0% contribution by India in at least one of the two value-adding stages (processing or refining). Across these minerals, China is overwhelmingly the single dominant exporter or, in a few cases (Brazil, South Africa, Canada, US), shares leadership with others. This concentration reflects decades of industrial policy focused on midstream control.
                  </p>

                  <p className="my-3">
                    This indicates that over half of the critical minerals relevant to India's industrial, energy-transition, and defence needs remain outside India's midstream control, even where domestic demand is large or growing. This translates into structural exposure to external supply shocks, export controls, and technology-linked dependencies.
                  </p>

                  <p className="my-3">
                    Only five minerals show more than 5% global value-chain contribution by India in either processing or refining: Synthetic graphite (processing ~10%), Aluminium (processing and refining ~6%), Chromium (processing ~8%, refining ~9%), Manganese (processing ~6%, refining ~7%), Zinc (processing and refining ~6%).
                  </p>

                  <p className="my-3">
                    These are largely bulk industrial or ferro-alloy minerals, not energy-transition bottleneck minerals such as lithium chemicals, rare earth magnets, or battery-grade nickel and cobalt. This highlights that India's strengths lie in traditional metallurgical chains, not in the new strategic mineral architectures shaping EVs, renewables, semiconductors, and advanced defence systems.
                  </p>

                  <p className="my-3">
                    A critical structural insight from the table is that there is not a single mineral where India contributes more than ~10% of global value addition at either the processing or refining stage. Even in India's strongest area—synthetic graphite processing—the contribution peaks at around ~10%, not beyond it. In contrast, China routinely controls 40–90% of refining capacity in lithium chemicals, rare earth separation, graphite anodes, gallium, germanium, and tungsten.
                  </p>

                  <p className="my-3">
                    This confirms that India is not a price-setter, standard-setter, or supply-chain gatekeeper in any critical mineral midstream today.
                  </p>

                  <h4 className="my-3">Challenge in Developing Capability</h4>
                  <p className="my-3">
                    Developing critical mineral processing and refining capabilities is not constrained only by common challenges such as capital intensity, environmental clearances, or assured access to high-quality feedstock; each mineral also carries unique technical, chemical, and scale-related barriers. The deeper structural challenge is the absence of integrated mineral ecosystems. Establishing refining and processing capacity is infrastructure-intensive. A mineral processing or refining facility needs reliable access to energy, water, and transportation. Large amounts of electricity or heat are often required for processes (mineral processing is among the most energy-intensive of industries, so proximity to affordable power is important). Water infrastructure is critical because processing can consume enormous volumes of water; for example, producing 1 kg of rare earth oxide from certain ores can require tens of thousands of kilograms of water.
                  </p>

                  <p className="my-3">
                    China has built tightly linked clusters—such as Jiangxi (rare earths), Inner Mongolia (REEs and coal-chemicals), Sichuan (lithium), Yunnan (copper and aluminium), and Hunan (non-ferrous metals)—where mining, processing, refining, R&D, and downstream manufacturing coexist within exclusive regional ecosystems. Multiple by-product minerals are extracted and refined in proximity, lowering costs and accelerating learning. Decades of investing has finally come to fruition to have allowed China to supply midstream materials cheaply, killing the global competition and eliminating new entrants who must still recover capex. Other countries cannot replicate this ecosystem fast enough; by the time capacity is built, it risks technological obsolescence. The only durable pathway is sustained investment in R&D, enabling process innovation that can leapfrog existing systems rather than compete with China on cost alone.
                  </p>

                  <h4 className="my-3">India's Recent Developments and Policy Support</h4>
                  <p className="my-3">
                    One of the most visible developments is <a href="https://www.newindianexpress.com/states/odisha/2025/Aug/20/nalco-eyes-production-of-gallium-metal-in-next-two-years?" target="_blank">NALCO's</a> plan to produce gallium metal. The Navratna PSU plans a 10 tonnes-per-year gallium extraction plant near its Damanjodi alumina refinery in Odisha by late 2026 or early 2027, using indigenously developed extraction technology, with commercial production expected within two years. This will be India's first domestic gallium facility, supporting semiconductor and electronics supply chains which currently depend heavily on imports.
                  </p>

                  <p className="my-3">
                    In the lithium space, <a href="https://www.indianchemicalnews.com/battery/lohum-announces-indias-first-battery-grade-lithium-refinery-25382?" target="_blank">Lohum</a>—a leading Indian processor of sustainable critical minerals—has announced a 1,000 tpa battery-grade lithium refining facility, reinforcing India's ambition to build domestic capacity for EV and energy storage materials. This facility aims to produce high-purity lithium products and is positioned as one of the few refineries outside China with competitive scale and quality.
                  </p>

                  <p className="my-3">
                    Most recently, a joint venture between Singareni Collieries Company Limited (SCCL) and Hyderabad-based <a href="https://timesofindia.indiatimes.com/city/hyderabad/sccl-altmin-jv-to-set-up-rs-2-2k-cr-lithium-refinery-in-t/articleshow/125989701.cms?" target="_blank">Altmin Pvt Ltd</a> is set to establish India's first large-scale battery-grade lithium refinery in Telangana, with an estimated investment of ₹2,250 crore. This project directly targets India's growing demand for lithium chemicals and aims to support the EV and stationary storage sectors. The first production is expected in 2027-2028.
                  </p>

                  <p className="my-3">
                    At the policy level, the <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2120525&" target="_blank">National Critical Mineral Mission (NCMM)</a> was formally launched in 2025 with a broad mandate to strengthen India's value chains from exploration to processing, refining, and recycling. The mission has a multi-year budget outlay of ₹34,300 crore and targets initiatives such as dedicated mineral processing parks, centres of excellence for R&D, and strategic stockpiles. It also aims to generate intellectual property, including 1,000 patents by 2030, indicating a focus on innovation, not just infrastructure.
                  </p>

                  <h4 className="my-3">Policy Pathways for India's Midstream Strategy</h4>
                  <ol>
                    <li className="my-2">
                      <strong>Long-Term Government Offtake Guarantees:</strong> For high-risk midstream investments, the government can act as an anchor buyer—especially for defence, space, power electronics, and public EV programmes—providing 10–15 year offtake assurance. This directly addresses demand risk, the biggest deterrent to refining investments.
                    </li>
                    <li className="my-2">
                      <strong>Strategic R&D and Process IP Fund:</strong> Instead of replicating China's scale, India must leapfrog through process innovation—new separation chemistries, low-temperature refining, solvent reuse, and modular plants. A dedicated fund linking CSIR labs, IITs, PSUs, and private firms is essential.
                    </li>
                    <li className="my-2">
                      <strong>Mineral-Linked Manufacturing Incentives:</strong> PLI-style incentives should be extended only where refining is linked to downstream use—for example, lithium refining tied to battery cathodes, gallium to chip fabs, and rare earths to magnet manufacturing—ensuring value capture stays domestic.
                    </li>
                  </ol>

                  <p className="my-3">
                    India's vulnerability is concentrated in minerals that underpin semiconductors, clean energy, and advanced manufacturing, rather than bulk metals.
                  </p>

                  <h4 className="my-3">Five Minerals India Must Target Urgently — and Why</h4>
                  <ol>
                    <li className="my-2">
                      <strong>Gallium — Semiconductors & Chip Manufacturing</strong>
                      <ul>
                        <li  className="my-2"><strong>Vulnerability:</strong> ~0% refining contribution</li>
                        <li  className="my-2"><strong>Sector Risk:</strong> Semiconductors, RF chips, defence electronics</li>
                        <li  className="my-2"><strong>Why Critical:</strong> Gallium is essential for GaN and GaAs chips used in 5G, radars, and power electronics. China controls refining and has already used export restrictions as leverage. NALCO's initiative is a start, but scale and downstream linkage are missing.</li>
                      </ul>
                    </li>
                    <li className="my-2">
                      <strong>Germanium — Optical Fibres & Advanced Chips</strong>
                      <ul>
                        <li  className="my-2"><strong>Vulnerability:</strong> ~0% processing and refining</li>
                        <li  className="my-2"><strong>Sector Risk:</strong> Telecom, fibre optics, infrared systems</li>
                        <li  className="my-2"><strong>Why Critical:</strong> Germanium is indispensable for fibre-optic cables and high-end electronics. Supply is highly concentrated, and India's digital infrastructure expansion depends on secure access.</li>
                      </ul>
                    </li>
                    <li className="my-2">
                      <strong>Lithium (Battery-grade chemicals) — EVs & Energy Storage</strong>
                      <ul>
                        <li  className="my-2"><strong>Vulnerability:</strong> 0% refining dominance despite rising demand</li>
                        <li  className="my-2"><strong>Sector Risk:</strong> EVs, grid storage, renewable integration</li>
                        <li  className="my-2"><strong>Why Critical:</strong> India is building EV demand faster than refining capacity. Without domestic lithium chemicals, India risks swapping oil dependence for battery dependence.</li>
                      </ul>
                    </li>
                    <li className="my-2">
                      <strong>Rare Earths (Nd, Pr, Dy) — EV Motors & Wind Turbines</strong>
                      <ul>
                        <li  className="my-2"><strong>Vulnerability:</strong> ~0% magnet-grade refining and downstream</li>
                        <li  className="my-2"><strong>Sector Risk:</strong> EV motors, wind energy, defence systems</li>
                        <li  className="my-2"><strong>Why Critical:</strong> India has resources and some separation capability, but lacks magnet manufacturing. This is a classic case where ecosystem absence—not geology—is the bottleneck.</li>
                      </ul>
                    </li>
                    <li className="my-2">
                      <strong>Natural Graphite (Anode-grade) — Li-ion Batteries</strong>
                      <ul>
                        <li  className="my-2"><strong>Vulnerability:</strong> ~0% spherical graphite processing</li>
                        <li  className="my-2"><strong>Sector Risk:</strong> Battery manufacturing</li>
                        <li  className="my-2"><strong>Why Critical:</strong> Even with cell manufacturing ambitions, India remains dependent on China for anode materials. Synthetic graphite helps, but cost and performance advantages still favour natural graphite for many applications.</li>
                      </ul>
                    </li>
                  </ol>

                  <p className="my-3">Below is a second set of five critical minerals that India should prioritise after the first list, based on the table, India’s ~0% or weak midstream presence, and sectoral vulnerability. </p>

                  <h4 className="my-3">The Next 5 Critical Minerals India Must Prioritise</h4>
                  <ol start="6">
                    <li className="my-2">
                      <strong>Silicon (Solar- & Semiconductor-Grade Polysilicon) — Electronics & Solar</strong>
                      <ul>
                        <li  className="my-2"><strong>India's position:</strong> ~0% refining (polysilicon)</li>
                        <li  className="my-2"><strong>Key sectors at risk:</strong> Solar PV manufacturing, semiconductors, power electronics</li>
                        <li  className="my-2"><strong>Why it matters:</strong> India has strong ambitions in solar module manufacturing, yet depends almost entirely on imports for polysilicon and wafers. This creates a structural bottleneck where downstream capacity grows faster than upstream material security.</li>
                      </ul>
                    </li>
                    <li className="my-2">
                      <strong>Tungsten — Defence, Aerospace & Advanced Manufacturing</strong>
                      <ul>
                        <li  className="my-2"><strong>India's position:</strong> ~0% processing and refining</li>
                        <li  className="my-2"><strong>Key sectors at risk:</strong> Defence tooling, aerospace components, cutting tools</li>
                        <li  className="my-2"><strong>Why it matters:</strong> Tungsten's extreme hardness and heat resistance make it irreplaceable in defence and industrial tooling. China's near-monopoly in refined tungsten exposes India to strategic supply disruptions.</li>
                      </ul>
                    </li>
                    <li className="my-2">
                      <strong>Niobium — High-Strength Low-Alloy (HSLA) Steels</strong>
                      <ul>
                        <li  className="my-2"><strong>India's position:</strong> 0% ferroniobium refining</li>
                        <li  className="my-2"><strong>Key sectors at risk:</strong> Infrastructure, pipelines, automotive, defence</li>
                        <li  className="my-2"><strong>Why it matters:</strong> Small additions of niobium dramatically improve steel strength and reduce material usage. Brazil's dominance means India's infrastructure expansion is tied to a single external source.</li>
                      </ul>
                    </li>
                    <li className="my-2">
                      <strong>Vanadium — Grid Storage & High-Strength Steel</strong>
                      <ul>
                        <li  className="my-2"><strong>India's position:</strong> ~0% refining</li>
                        <li  className="my-2"><strong>Key sectors at risk:</strong> Grid-scale energy storage (VRFBs), specialty steels</li>
                        <li  className="my-2"><strong>Why it matters:</strong> Vanadium is emerging as a key material for long-duration energy storage. Without refining capability, India risks missing a parallel energy-storage pathway beyond lithium-ion.</li>
                      </ul>
                    </li>
                    <li className="my-2">
                      <strong>Platinum Group Metals (PGMs) — Hydrogen & Emissions Control</strong>
                      <ul>
                        <li  className="my-2"><strong>India's position:</strong> ~0% refining</li>
                        <li  className="my-2"><strong>Key sectors at risk:</strong> Hydrogen electrolyzers, fuel cells, auto catalysts</li>
                        <li  className="my-2"><strong>Why it matters:</strong> PGMs are critical for the hydrogen economy and emissions control. India's hydrogen ambitions cannot be realised without secure PGM refining and recycling ecosystems.</li>
                      </ul>
                    </li>
                  </ol>

                  <h4 className="my-3">Workforce/ Human Capital</h4>
                  <p className="my-3">
                    Unlike basic mining, mineral refining is a knowledge-intensive endeavor. It demands metallurgists, chemical engineers, and technicians skilled in advanced extractive processes. Many critical mineral refining techniques involve handling toxic chemicals (acids, organic solvents) and even radioactive materials (in the case of rare earths from monazite, which contains thorium), so a trained workforce is essential for safety and efficiency. The lack of domestic expertise is one reason some countries offshore these steps. Indeed, the five stages of the critical mineral supply chain often occur in different countries partly due to some nations lacking "advanced processing infrastructure" or a skilled workforce to run it. Building up human capital—through research institutions and on-the-job training—is also vital.
                  </p>

                  <h4 className="my-3">Sources</h4>
                  <ul>
                    <li>USGS — Mineral Commodity Summaries: <a href="https://www.usgs.gov/centers/national-minerals-information-center" target="_blank">https://www.usgs.gov/centers/national-minerals-information-center</a></li>
                    <li>International Energy Agency — Critical Minerals & Battery Supply Chains: <a href="https://www.iea.org/topics/critical-minerals" target="_blank">https://www.iea.org/topics/critical-minerals</a></li>
                    <li>International Aluminium Institute (IAI): <a href="https://international-aluminium.org" target="_blank">https://international-aluminium.org</a></li>
                    <li>International Chromium Development Association (ICDA): <a href="https://www.icdacr.com" target="_blank">https://www.icdacr.com</a></li>
                    <li>International Manganese Institute (IMnI): <a href="https://www.manganese.org" target="_blank">https://www.manganese.org</a></li>
                    <li>International Copper Association (ICA): <a href="https://copperalliance.org" target="_blank">https://copperalliance.org</a></li>
                    <li>International Lead and Zinc Study Group (ILZSG): <a href="https://www.ilzsg.org" target="_blank">https://www.ilzsg.org</a></li>
                    <li>International Nickel Study Group (INSG): <a href="https://www.insg.org" target="_blank">https://www.insg.org</a></li>
                    <li>International Tin Association (ITA): <a href="https://www.internationaltin.org" target="_blank">https://www.internationaltin.org</a></li>
                    <li>FAO — World Fertilizer & Phosphate Statistics: <a href="https://www.fao.org" target="_blank">https://www.fao.org</a></li>
                  </ul>

  <p style={{color: "#686868"}}>
                                        Copyright ©️ 2025 by Ananta Aspen Centre<br/>
                                            This text is protected by copyright and may not be reproduced, distributed, or modified without permission
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
                        Mithilesh Phadke is a Programme Executive at the Ananta Aspen Centre. This non-partisan, non-profit organisation promotes value- based leadership and convenes Track II dialogues with India’s strategic partner countries. At the Centre, he works in the Leadership vertical where he curates programmes, socratic dialogues and fellowships for various demographics, including high school students, mid-career professionals, senior leaders, and women entrepreneurs from tier 2 &amp; 3 cities. He is also part of an annual event called Ananta Godrej Ideas India, where fellows from Ananta’s seven fellowships and different walks of life gather to exchange ideas for ushering in significant societal change. Additionally, he contributes to the International Relations Vertical on a project basis, like curation support for the Arctic Circle India Forum, and research support for Ananta’s Critical Minerals Dashboard. He is also involved in leading an annual public event that dissects and analyses the Indian government's Union Budget. Across the programmes, his role varies from curation, research, logistics management, analytical visualisation, graphic tools development, and stakeholder engagement to connect government, business, and civil society for more effective dialogue. His work reflects a commitment to nurturing leadership and fostering informed conversations that contribute to a better future.
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