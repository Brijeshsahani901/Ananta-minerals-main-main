import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge, Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function CriticalMineralsPartnership() {
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
            src={`${basePath}/assets/minerals_images/secure.jpg`}
            alt="Securing the Future: How India and Europe Can Co-Create Resilient Critical Mineral Supply Chains"
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
                    Securing the Future: How India and Europe Can Co-Create
                    Resilient Critical Mineral Supply Chains
                  </h3>

                  <p className="my-3">
                    As India and the European Union (EU) edge closer to new
                    trade and investment agreements, including a long-awaited
                    free trade pact and investment protection deal, there is
                    growing recognition that critical minerals must form a
                    pillar of their economic partnership. Both India and Europe
                    are racing to secure the raw materials underpinning clean
                    energy and high-tech industries, from lithium and cobalt for
                    batteries to rare earth elements (REEs) for wind turbines
                    and electronics. The inauguration of the India--EU Trade and
                    Technology Council (TTC) in 2022 signalled this strategic
                    shift: its working groups explicitly seek cooperation on
                    resilient supply chains and green technologies, implicitly
                    highlighting critical minerals security. Strengthening ties
                    in this arena aligns with broader climate and industrial
                    goals, and the timing is opportune. As negotiators refine
                    the India--EU free trade agreement -- talks relaunched in
                    2022 after a decade-long hiatus -- both sides see an
                    opportunity to embed a critical minerals partnership into
                    the fabric of their economic relationship.
                  </p>

                  <p className="my-3">
                    This partnership imperative arises from a convergence of
                    needs. India, with ambitions to become a clean energy
                    leader, is scrambling to obtain minerals essential for solar
                    panels, electric vehicles, and defense technologies. Europe,
                    aiming to <strong>"de-risk"</strong> its economy, is
                    urgently diversifying away from over-reliance on single
                    suppliers for key raw materials. A strategic collaboration
                    across all stages of the mineral value chain -- from
                    exploration and mining to processing and refining -- could
                    address India's technology and infrastructure gaps while
                    leveraging Europe's advanced industrial capabilities. In
                    turn, Europe would gain a reliable partner in its quest for
                    secure and sustainable mineral supplies, reducing
                    vulnerabilities in an era of supply chain shocks. The
                    foundation is already being laid: the two regions have a
                    <strong>60% overlap</strong> in their officially identified
                    critical minerals lists. In short, India and Europe
                    increasingly view each other as natural allies in fortifying
                    critical mineral supply chains -- a cooperation that could
                    be cemented through upcoming trade deals and beyond.
                  </p>

                  {/* Overlap of Critical Minerals Table */}
                  <div
                    className="my-4 p-3"
                    style={{ backgroundColor: "#f8f9fa", borderRadius: "5px" }}
                  >
                    <h5 className="mb-3">
                      <strong>Overlap of Critical minerals</strong>
                    </h5>
                    <div className="table-responsive">
                      <Table bordered>
                        <tbody>
                          <tr>
                            <td>
                              <strong>Antimony</strong>
                            </td>
                            <td>
                              <strong>Graphite</strong>
                            </td>
                            <td>
                              <strong>Rare Earth Elements</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Beryllium</strong>
                            </td>
                            <td>
                              <strong>Hafnium</strong>
                            </td>
                            <td>
                              <strong>Silicon</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Bismuth</strong>
                            </td>
                            <td>
                              <strong>Lithium</strong>
                            </td>
                            <td>
                              <strong>Strontium</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Cobalt</strong>
                            </td>
                            <td>
                              <strong>Niobium</strong>
                            </td>
                            <td>
                              <strong>Tantalum</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Copper</strong>
                            </td>
                            <td>
                              <strong>Nickel</strong>
                            </td>
                            <td>
                              <strong>Titanium</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Gallium</strong>
                            </td>
                            <td>
                              <strong>Platinum Group Metals</strong>
                            </td>
                            <td>
                              <strong>Tungsten</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Germanium</strong>
                            </td>
                            <td>
                              <strong>Phosphorus</strong>
                            </td>
                            <td>
                              <strong>Vanadium</strong>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>

                  <h4 className="my-3">Reducing Dependence on China</h4>
                  <p className="my-3">
                    A powerful geopolitical impetus underlies the India--EU push
                    for mineral independence: the dominant position of China in
                    critical minerals and the attendant supply risk. Over the
                    past two decades, China has come to control outsized
                    portions of both the mining and refining of many critical
                    raw materials. For example, China accounts for{" "}
                    <strong>
                      roughly 70% of global rare earth element mining and nearly{" "}
                      <a
                        href="https://economictimes.indiatimes.com/industry/indl-goods/svs/metals-mining/india-ranks-3rd-in-rare-earth-reserves-but-trails-in-production-due-to-structural-bottlenecks-in-mining-report/articleshow/126227549.cms?from=mdr"
                        target="_blank"
                      >
                        90% of rare earth refining
                      </a>
                    </strong>
                    . It also processes around{" "}
                    <a
                      href="https://www.delorscentre.eu/en/publications/eu-critical-raw-materials#:~:text=The%20uneven%20distribution%20of%20supply,of%20the%20world%27s%20total"
                      target="_blank"
                    >
                      <strong>60% of the world's lithium</strong>
                    </a>{" "}
                    and the majority of other battery metals. Such concentration
                    has made China a near-monopoly "factory" for critical
                    minerals, allowing it to leverage this dominance
                    geopolitically. In 2023--2024, Beijing imposed export
                    restrictions on gallium, germanium, graphite and even
                    certain rare earths -- ostensibly over national security,
                    but widely seen as retaliation in trade disputes. These
                    moves served as a wake-up call in both New Delhi and
                    Brussels. European officials openly warn that the EU
                    <strong>"must reduce our dependencies"</strong>
                    ...particularly on...China", after witnessing how reliance
                    on a single supplier can be weaponized.
                  </p>

                  <p className="my-3">
                    In 2020{" "}
                    <a
                      href="https://www.delorscentre.eu/en/publications/eu-critical-raw-materials#:~:text=respectively%2C%20by%202050,of%20this%20interdependence%20by%20third"
                      target="_blank"
                    >
                      <strong>
                        98% of the EU's rare earth imports came from China
                      </strong>
                    </a>
                    , and Europe depends on China or one other country for over
                    70% of supply in many critical materials. India, too, relies
                    overwhelmingly on imports for minerals like lithium, cobalt
                    and nickel -- in fact it has been
                    <a
                      href="https://www.pmfias.com/indias-critical-minerals-diplomacy/#:~:text=India%27s%20Critical%20Minerals%20Diplomacy%20,transition%20supply%20chains%20externally"
                      target="_blank"
                    >
                      <em>100% import-dependent</em>
                    </a>{" "}
                    for these key minerals. This shared strategic concern has
                    pushed India and the EU into closer coordination. Both
                    joined the <strong>MSP</strong> to invest jointly in
                    diversified mineral sources and promote responsible mining
                    practices as a counterweight to Chinese dominance. The EU
                    has also proposed a{" "}
                    <strong>Critical Raw Materials Club</strong> with
                    like-minded partners (welcoming India's participation) to
                    develop alternative supply chains. In essence, the
                    geopolitical driver is clear: by partnering, India and
                    Europe can collectively reduce their vulnerability to
                    China's near-monopoly, enhancing their{" "}
                    <strong>strategic autonomy</strong> in an uncertain
                    multipolar world
                    <a
                      href="https://csep.org/blog/positioning-critical-minerals-in-the-india-eu-partnership/#:~:text=Strategic%20convergence%20between%20India%20and,the%20EU"
                      target="_blank"
                    >
                      [24]
                    </a>
                    <a
                      href="https://csep.org/blog/positioning-critical-minerals-in-the-india-eu-partnership/#:~:text=There%20are%20important%20motivations%20for,environmental%20security%20to%20succeed%20in"
                      target="_blank"
                    >
                      [25]
                    </a>
                    .
                  </p>

                  <h4 className="my-3">
                    Policy Frameworks: Converging Critical Mineral Strategies
                  </h4>
                  <p className="my-3">
                    Recognizing the need for bolder measures, the European
                    Commission proposed a{" "}
                    <a
                      href="https://www.oeko.de/en/blog/ensuring-the-eus-long-term-access-to-raw-materials/#:~:text=The%20Critical%20Raw%20Materials%20Act,reduce%20dependence%20on%20individual%20countries"
                      target="_blank"
                    >
                      <strong>Critical Raw Materials Act (CRMA)</strong>
                    </a>{" "}
                    in 2023, which was adopted by the EU in March 2024. The CRMA
                    establishes clear benchmarks for European capacities by
                    2030: at least{" "}
                    <strong>
                      10% of the EU's annual consumption of strategic raw
                      materials should be mined domestically, 40% should be
                      processed within the EU, and 15--25% recycled
                    </strong>{" "}
                    from end-of-life products. Just as crucially, the Act aims
                    to
                    <em>
                      limit dependence on any single country to no more than 65%
                    </em>{" "}
                    of the EU's consumption for each critical material.
                  </p>

                  <p className="my-3">
                    Europe has begun investing in mines and processing plants in
                    third countries as well; by mid-2025 the EU had announced
                    support for <strong>13 new raw material projects</strong>{" "}
                    spanning Ukraine, Greenland, Kazakhstan, Zambia and beyond.
                    Additionally, the EU has signed at least{" "}
                    <a
                      href="https://csep.org/blog/positioning-critical-minerals-in-the-india-eu-partnership/#:~:text=7,to%20diversify%20its%20own%20energy"
                      target="_blank"
                    >
                      <strong>14 bilateral partnerships</strong>
                    </a>{" "}
                    on critical minerals with countries like Canada, Australia,
                    Norway, Kazakhstan, Namibia, and Rwanda, to secure
                    diversified supply channels.
                  </p>

                  <h4 className="my-3">
                    Complementary Strengths Across the Value Chain
                  </h4>
                  <p className="my-3">
                    A core rationale for India--EU collaboration is the
                    complementary nature of their capabilities across the
                    critical minerals <em>value chain</em>. This chain can be
                    viewed in four stages -- exploration, mining, processing,
                    and refining -- and each reveals mutual gaps and
                    opportunities:
                  </p>

                  <p className="my-3">
                    <strong>Exploration:</strong> Locating viable mineral
                    deposits requires advanced survey technologies and
                    geological expertise. Here, Europe can offer significant
                    value to India. European nations have world-class geological
                    survey institutes and remote sensing programs (for instance,
                    satellites under the EU's Copernicus program) that can aid
                    in mapping India's untapped mineral potential.{" "}
                    <strong>Joint Exploration Projects</strong> -- possibly
                    funded under EU's Global Gateway or India's National Mineral
                    Exploration Trust -- can jumpstart the partnership at the
                    very first link of the value chain.
                  </p>

                  <p className="my-3">
                    <strong>Mining:</strong> Once minerals are found, the next
                    step is extraction. India has mining experience (it is a top
                    producer of iron ore, bauxite, etc.), but many critical
                    minerals are geologically complex or environmentally
                    sensitive to mine. Europe can contribute advanced mining
                    equipment, safety and environmental management techniques,
                    and project financing to develop India's critical mineral
                    mines. For instance, rare earths in India are mostly
                    contained in monazite sands along coastal areas, which
                    require careful handling due to accompanying radioactive
                    thorium. European firms specialized in sustainable mining
                    could partner with Indian companies like Vedanta or
                    Hindustan Zinc to deploy safer extraction methods that
                    protect workers and local ecosystems.
                    <strong>Public-private partnerships</strong> could flourish
                    here: European mining companies or investment funds could
                    take equity in Indian mining ventures, while Indian firms
                    gain access to capital and know-how. Conversely, India's
                    large state-owned miners (e.g. Coal India, Indian Oil) and
                    emerging private players can join European-led projects
                    overseas. Through the MSP and other forums, India and the EU
                    are already eyeing{" "}
                    <strong>co-investment in third countries</strong>,
                    particularly in
                    <a
                      href="https://csep.org/blog/positioning-critical-minerals-in-the-india-eu-partnership/#:~:text=of%20the%20India,has%20signed%2014%20partnerships%20on"
                      target="_blank"
                    >
                      &nbsp;Africa
                    </a>
                    . India, which currently imports{" "}
                    <strong>
                      almost all of its lithium, cobalt, and nickel
                    </strong>
                    , having EU-backed mining projects either domestically or
                    abroad would significantly enhance resource security.
                  </p>

                  <p className="my-3">
                    <strong>Processing:</strong> Raw ore typically needs to be
                    processed (crushed, concentrated, chemically treated) before
                    it is useful to industries. This stage is a known weakness
                    for India. It has abundant minerals on paper, but limited
                    facilities to convert them into high-purity materials. A
                    striking example is rare earths: despite India's{" "}
                    <strong>6--7% share of global rare earth reserves</strong>,
                    its rare earth oxide output is &lt;1% of world production.
                    The gap stems from{" "}
                    <em>
                      "limited processing capacity and value-chain integration"
                    </em>
                    , as a recent Indian government report observed. Europe can
                    help bridge this gap. The EU and several member states
                    possess strong chemical and materials engineering sectors --
                    for instance, <strong>Estonia</strong> hosts a rare earth
                    separation plant (one of the few outside China), and{" "}
                    <strong>Finland</strong> houses Europe's largest cobalt
                    refinery. European companies like Solvay and Umicore have
                    expertise in processing minerals into battery-grade
                    chemicals and metal alloys. By transferring technology and
                    investing in processing plants in India, European actors
                    could gain a reliable source of intermediates while helping
                    India climb the value chain. This might involve setting up
                    joint ventures for lithium refining or cathode material
                    production under India's Production-Linked Incentive (PLI)
                    schemes for batteries. India's first lithium refinery, for
                    example, could be established with European technical
                    collaboration, ensuring it meets the stringent quality
                    needed for EV batteries. Under the CRMA's 40% processing
                    goal, the EU may count trusted partners' capacities as part
                    of a broader allied supply network. If India can process and
                    refine more of its own minerals (or imported ores) with
                    European help, those refined products (like lithium
                    carbonate or rare earth oxides) could be exported to Europe,
                    reducing European dependence on Chinese processors.
                  </p>

                  <p className="my-3">
                    <strong>Refining:</strong> The final step -- refining to
                    ultra-high purity or manufacturing specialized products
                    (e.g. battery cells, magnets) -- is where both regions
                    aspire to compete with China. Europe has some high-end
                    capacity (for instance, German firms make specialized
                    magnets, and Swedish start-up Northvolt is producing
                    advanced lithium batteries), but Europe still relies heavily
                    on imported refined materials. India, meanwhile, is only
                    beginning to develop refining; as noted, it historically
                    exported minerals in raw or semi-processed form and imported
                    the finished components. A partnership can target joint
                    development of{" "}
                    <strong>refining and manufacturing facilities</strong>. For
                    example, to reduce China's chokehold on magnets (used in
                    wind turbines and EV motors), India and the EU could
                    establish a <strong>joint rare earth magnet plant</strong>{" "}
                    in India -- combining India's raw monazite supply with
                    European magnet-making know-how. This would serve India's
                    growing wind industry and also create an export supply for
                    Europe's turbine manufacturers, all under an ESG-compliant
                    supply chain. Similarly, European battery makers could set
                    up assembly in India sourcing refined lithium and cathode
                    materials locally, tying into India's large auto market.
                    Such industrial collaborations would be facilitated by the
                    trade agreements under negotiation, ideally removing tariffs
                    and encouraging investment protection for critical minerals
                    value-add. In refining,{" "}
                    <strong>scale and technology are king</strong>: China's ~90%
                    share of rare earth refining is due to decades of investing
                    in those processes. India and Europe, by pooling their
                    market demand and capital, can achieve economies of scale to
                    make non-Chinese refining viable.
                  </p>

                  {/* Critical Minerals Table */}
                  <h5 className="my-3">
                    <strong>
                      Critical Minerals -- Reserves, Production, and Processing
                    </strong>
                  </h5>
                  <div className="table-responsive my-4">
                    <Table bordered>
                      <thead>
                        <tr>
                          <th>
                            <strong>Mineral</strong>
                          </th>
                          <th>
                            <strong>
                              India -- Reserves (Global Rank) / 2024 Production
                            </strong>
                          </th>
                          <th>
                            <strong>EU -- Reserves / 2024 Production</strong>
                          </th>
                          <th>
                            <strong>
                              Global Context (Top Producer & China's role)
                            </strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Lithium</strong>
                          </td>
                          <td>
                            5.9 million tonnes (newly discovered in 2023); No
                            significant lithium output yet
                          </td>
                          <td>
                            Minimal known reserves (Portugal and Serbia
                            prospects); No EU production currently
                          </td>
                          <td>
                            Australia -- 53% of mining; China ~60% of lithium
                            refining
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Rare Earths (REEs)</strong>
                          </td>
                          <td>
                            6.9 million tonnes REO (3rd largest); 2,900 tonnes
                            in 2024 (&lt;&lt;1% of world)
                          </td>
                          <td>
                            Minimal (small deposit in Sweden identified; no
                            current mining); Only a small separator in Estonia
                          </td>
                          <td>
                            China -- 270,000 t in 2024; China ~90% of REE
                            refining capacity
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Cobalt</strong>
                          </td>
                          <td>
                            Negligible dedicated reserves (byproduct from copper
                            mines); No mine production
                          </td>
                          <td>
                            Some cobalt in nickel ores (Finland); EU refining
                            ~13% of global (Finland & Belgium)
                          </td>
                          <td>
                            D.R. Congo -- ~70% of mining; China ~78% of refining
                            (2023)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Graphite</strong>
                          </td>
                          <td>
                            Significant natural graphite reserves (e.g. in
                            Jharkhand, Arunachal); moderate production (~5% of
                            world)
                          </td>
                          <td>
                            Very limited (EU must import lest than 90%); no EU
                            mining of flake graphite
                          </td>
                          <td>
                            China -- ~65% of mining; China ~100% of spherical
                            graphite processing for batteries
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>

                  <p className="my-3">
                    India and Europe's assets are highly complementary across
                    the value chain, and integration would make the whole{" "}
                    <strong>far more resilient</strong> than the sum of its
                    parts.
                  </p>

                  <h4 className="my-3">
                    Mobilizing Investment, Innovation, and Industrial
                    Cooperation
                  </h4>
                  <p className="my-3">
                    Translating these opportunities into reality will require
                    concerted public and private action.{" "}
                    <strong>Public-private cooperation</strong> is crucial --
                    governments can set the stage with policy incentives, but
                    industry must carry out projects on the ground. Europe
                    provides a successful template in the form of the European
                    Battery Alliance (EBA) and related initiatives. Under the
                    EBA, EU institutions and member states pooled funds with
                    automakers and technology firms to build domestic battery
                    supply chains. A flagship result was Sweden's{" "}
                    <a
                      href="https://northvolt.com/articles/european-backing-for-northvolt-gigafactory-in-sweden/?utm_source=chatgpt.com"
                      target="_blank"
                    >
                      <strong>Northvolt gigafactory</strong>
                    </a>
                    , which received EU support and is now producing lithium-ion
                    cells.
                  </p>

                  <p className="my-3">
                    In parallel, <strong>R&D collaboration</strong> can
                    significantly boost long-term capabilities. Both regions
                    have strong research institutions that, if linked, can drive
                    innovation in extraction, materials science, and recycling.
                    Joint research could focus on{" "}
                    <em>new processing techniques</em>
                    (for example, refining rare earths without toxic chemicals),
                    or on
                    <strong>substitute materials</strong> that reduce dependence
                    on any one critical element.
                  </p>

                  <p className="my-3">
                    From an industry standpoint, there are already signs of
                    nascent cooperation. European automakers and energy
                    companies are keen on India as an emerging battery
                    manufacturing hub. For example, global firms are partnering
                    with Indian companies to set up cell factories and EV
                    component plants under India's incentive schemes. While many
                    of these currently rely on imported Chinese materials, a
                    concerted shift to use
                    <em>India--EU supply chains</em> could occur if refining and
                    processing capabilities are built in India. European
                    chemical companies could form JVs with Indian firms like
                    Tata Chemicals or Reliance to produce battery precursors in
                    India, securing a non-Chinese source for Europe's battery
                    factories. On the flip side, Indian mining companies could
                    acquire stakes in European processing firms or mines (for
                    instance, an Indian consortium could invest in a European
                    lithium project in Serbia or Portugal). Such cross-ownership
                    would align interests and ensure supply sharing in times of
                    need.
                  </p>

                  <p className="my-3">
                    Both India and Europe have committed to net-zero emissions
                    targets (India by 2070, EU by 2050), so greening the mineral
                    supply chain is integral to their climate strategies. This
                    includes minimizing the carbon intensity of mining (through
                    renewable energy use in mines), improving energy efficiency
                    in mineral processing, and sharing best practices on land
                    reclamation and biodiversity protection post-mining.
                  </p>

                  <p className="my-3">
                    Finally, <strong>circular economy models</strong> encompass
                    substitution (finding alternative materials or technologies
                    that require less of a critical mineral) and extending
                    product lifetimes. Europe has active programs looking at
                    substituting critical materials (for example, researching
                    magnet designs that reduce heavy rare earth usage).
                    Collaboration with Indian scientists and startups in such
                    fields can broaden the talent pool and accelerate
                    breakthroughs. Similarly, both regions can implement
                    policies to encourage product life extension -- for
                    instance, encouraging reuse of electric vehicle batteries in
                    secondary applications (like grid storage) before recycling.
                    Joint standards for battery second-life use or shared
                    databases of critical material stockpiles could be explored.
                    By building a partnership on the ethos of sustainability,
                    India and the EU will not only secure minerals but do so in
                    a manner that aligns with their values and global
                    sustainable development goals.
                  </p>

                  <h4 className="my-3">Sources:</h4>
                  <ul>
                    <li>
                      CSEP (2024).{" "}
                      <em>
                        Positioning Critical Minerals in the India--EU
                        Partnership
                      </em>
                      .
                      <a
                        href="https://csep.org/blog/positioning-critical-minerals-in-the-india-eu-partnership/#:~:text=between%20the%20critical%20minerals%20identified,rivalries%2C%20most%20importantly%20with%20China"
                        target="_blank"
                      >
                        [5]
                      </a>
                      <a
                        href="https://csep.org/blog/positioning-critical-minerals-in-the-india-eu-partnership/#:~:text=2022%20India,minerals%20and%20renewable%20energy%20technologies"
                        target="_blank"
                      >
                        [1]
                      </a>
                    </li>
                    <li>
                      FIIA (2024).{" "}
                      <em>
                        India's critical minerals strategy: Geopolitical
                        imperatives and energy transition goals
                      </em>
                      .
                      <a
                        href="https://fiia.fi/en/publication/indias-critical-minerals-strategy#:~:text=India%E2%80%99s%20critical%20minerals%20strategy%2C%20while,For%20instance%2C%20the%20government%20has"
                        target="_blank"
                      >
                        [61]
                      </a>
                      <a
                        href="https://fiia.fi/en/publication/indias-critical-minerals-strategy#:~:text=currently%20limited%2C%20recycling%20is%20not,chains%2C%20as%20many%20firms%20may"
                        target="_blank"
                      >
                        [62]
                      </a>
                    </li>
                    <li>
                      Delors Centre (2023).{" "}
                      <em>
                        Meeting the costs of resilience: The EU's Critical Raw
                        Materials Strategy
                      </em>
                      .
                      <a
                        href="https://www.delorscentre.eu/en/publications/eu-critical-raw-materials#:~:text=respectively%2C%20by%202050,countries%20and%20to%20external%20shocks"
                        target="_blank"
                      >
                        [15]
                      </a>
                      <a
                        href="https://www.delorscentre.eu/en/publications/eu-critical-raw-materials#:~:text=The%20first%20measure%20to%20increase,term%20solution"
                        target="_blank"
                      >
                        [43]
                      </a>
                    </li>
                    <li>
                      The Economic Times (2025).{" "}
                      <em>
                        India ranks 3rd in rare earth reserves, but trails in
                        production...
                      </em>
                      <a
                        href="https://economictimes.indiatimes.com/industry/indl-goods/svs/metals-mining/india-ranks-3rd-in-rare-earth-reserves-but-trails-in-production-due-to-structural-bottlenecks-in-mining-report/articleshow/126227549.cms?from=mdr#:~:text=Data%20showed%20that%20India%20holds,Brazil%20with%2021%20million%20tonnes"
                        target="_blank"
                      >
                        [54]
                      </a>
                      <a
                        href="https://economictimes.indiatimes.com/industry/indl-goods/svs/metals-mining/india-ranks-3rd-in-rare-earth-reserves-but-trails-in-production-due-to-structural-bottlenecks-in-mining-report/articleshow/126227549.cms?from=mdr#:~:text=Beyond%20mining%2C%20the%20report%20pointed,processing%20capacity%20is%20heavily%20concentrated"
                        target="_blank"
                      >
                        [10]
                      </a>
                    </li>
                    <li>
                      Z2Data (2025).{" "}
                      <em>
                        Seven Statistics Illustrating China's Dominance of
                        Critical Minerals
                      </em>
                      .
                      <a
                        href="https://www.z2data.com/insights/seven-statistics-illustrating-chinas-dominance-of-critical-minerals#:~:text=Earth%20Elements"
                        target="_blank"
                      >
                        [9]
                      </a>
                      <a
                        href="https://www.z2data.com/insights/seven-statistics-illustrating-chinas-dominance-of-critical-minerals#:~:text=6,to%20Promote%20Independence%20From%20China"
                        target="_blank"
                      >
                        [14]
                      </a>
                    </li>
                    <li>
                      Oeko-Institut (2023).{" "}
                      <em>
                        Ensuring the EU's long-term access to raw materials
                      </em>
                      .
                      <a
                        href="https://www.oeko.de/en/blog/ensuring-the-eus-long-term-access-to-raw-materials/#:~:text=based%20on%20the%20EU%E2%80%99s%20overall,reduce%20dependence%20on%20individual%20countries"
                        target="_blank"
                      >
                        [45]
                      </a>
                      <a
                        href="https://www.oeko.de/en/blog/ensuring-the-eus-long-term-access-to-raw-materials/#:~:text=developed%20in%20parallel%20in%20the,should%20qualify%20for%20consideration%20here"
                        target="_blank"
                      >
                        [82]
                      </a>
                    </li>
                    <li>
                      Eurostat (2024).{" "}
                      <em>International trade in critical raw materials</em>.
                      <a
                        href="https://ec.europa.eu/eurostat/statistics-explained/index.php?title=International_trade_in_critical_raw_materials&oldid=616743#:~:text=The%20EU%20is%20heavily%20dependent,disruptions%20in%20critical%20technology%20sectors"
                        target="_blank"
                      >
                        [87]
                      </a>
                      <a
                        href="https://ec.europa.eu/eurostat/statistics-explained/index.php?title=International_trade_in_critical_raw_materials&oldid=616743#:~:text=The%20bulk%20of%20EU%20imports,importers%20was%20more%20than%2090"
                        target="_blank"
                      >
                        [21]
                      </a>
                    </li>
                    <li>
                      IEA (2025). <em>Global Critical Minerals Outlook</em>.
                      <a
                        href="https://www.iea.org/reports/global-critical-minerals-outlook-2025/executive-summary#:~:text=Diversification%20is%20the%20watchword%20for,for%20cobalt%2C%20graphite%20and%20rare"
                        target="_blank"
                      >
                        [88]
                      </a>
                      <a
                        href="https://www.iea.org/reports/global-critical-minerals-outlook-2025/executive-summary#:~:text=Major%20risk%20areas%20for%20this,have%20few%20viable%20alternatives%20without"
                        target="_blank"
                      >
                        [89]
                      </a>
                    </li>
                  </ul>
                  <div className="mt-5">
                    <p>
                      <strong>
                        [1] [2] [3] [4] [5] [6] [7] [24] [25] [37] [38] [39]
                        [40] [41] [42] [47] [48] [51] [53] [55] [57] [70] [76]
                        [77] [84] [85] [86]
                      </strong>{" "}
                      Positioning Critical Minerals in the India–EU Partnership
                      – CSEP
                    </p>

                    <p>
                      <a
                        href="https://csep.org/blog/positioning-critical-minerals-in-the-india-eu-partnership/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://csep.org/blog/positioning-critical-minerals-in-the-india-eu-partnership/
                      </a>
                    </p>

                    <p>
                      <strong>
                        [8] [16] [23] [26] [27] [28] [29] [30] [31] [32] [33]
                        [34] [35] [36] [61] [62] [71] [72] [73] [74] [75] [83]
                      </strong>{" "}
                      India’s critical minerals strategy: Geopolitical
                      imperatives and energy transition goals – FIIA
                    </p>

                    <p>
                      <a
                        href="https://fiia.fi/en/publication/indias-critical-minerals-strategy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://fiia.fi/en/publication/indias-critical-minerals-strategy
                      </a>
                    </p>

                    <p>
                      <strong>[9] [12] [14] [49] [50] [68]</strong> Seven
                      Statistics Illustrating China’s Dominance of Critical
                      Minerals – Z2Data
                    </p>

                    <p>
                      <a
                        href="https://www.z2data.com/insights/seven-statistics-illustrating-chinas-dominance-of-critical-minerals"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.z2data.com/insights/seven-statistics-illustrating-chinas-dominance-of-critical-minerals
                      </a>
                    </p>

                    <p>
                      <strong>[10] [54] [56] [58] [59] [60] [64] [69]</strong>{" "}
                      India ranks 3rd in rare earth reserves, but trails in
                      production – The Economic Times
                    </p>

                    <p>
                      <a
                        href="https://economictimes.indiatimes.com/industry/indl-goods/svs/metals-mining/india-ranks-3rd-in-rare-earth-reserves-but-trails-in-production-due-to-structural-bottlenecks-in-mining-report/articleshow/126227549.cms?from=mdr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://economictimes.indiatimes.com/industry/indl-goods/svs/metals-mining/india-ranks-3rd-in-rare-earth-reserves-but-trails-in-production-due-to-structural-bottlenecks-in-mining-report/articleshow/126227549.cms
                      </a>
                    </p>

                    <p>
                      <strong>[11] [15] [17] [18] [19] [43] [52] [63]</strong>{" "}
                      Meeting the costs of resilience: The EU’s Critical Raw
                      Materials Strategy
                    </p>

                    <p>
                      <a
                        href="https://www.delorscentre.eu/en/publications/eu-critical-raw-materials"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.delorscentre.eu/en/publications/eu-critical-raw-materials
                      </a>
                    </p>

                    <p>
                      <strong>[13] [88] [89]</strong> Executive Summary – Global
                      Critical Minerals Outlook 2025 – IEA
                    </p>

                    <p>
                      <a
                        href="https://www.iea.org/reports/global-critical-minerals-outlook-2025/executive-summary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.iea.org/reports/global-critical-minerals-outlook-2025/executive-summary
                      </a>
                    </p>

                    <p>
                      <strong>[20] [21] [87]</strong> International trade in
                      critical raw materials – Eurostat
                    </p>

                    <p>
                      <a
                        href="https://ec.europa.eu/eurostat/statistics-explained/index.php?title=International_trade_in_critical_raw_materials&oldid=616743"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://ec.europa.eu/eurostat/statistics-explained/index.php?title=International_trade_in_critical_raw_materials
                      </a>
                    </p>

                    <p>
                      <strong>[22]</strong> India’s Critical Minerals Diplomacy
                      – PMF IAS
                    </p>
                  </div>
                  <div className="mt-3">
                    <p>
                      <a
                        href="https://www.pmfias.com/indias-critical-minerals-diplomacy/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.pmfias.com/indias-critical-minerals-diplomacy/
                      </a>
                    </p>

                    <p>
                      <strong>[44] [45] [46] [78] [79] [80] [81] [82]</strong>{" "}
                      Ensuring the EU’s long-term access to raw materials |
                      oeko.de
                    </p>

                    <p>
                      <a
                        href="https://www.oeko.de/en/blog/ensuring-the-eus-long-term-access-to-raw-materials/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.oeko.de/en/blog/ensuring-the-eus-long-term-access-to-raw-materials/
                      </a>
                    </p>

                    <p>
                      <strong>[65]</strong> A mining industry overview of cobalt
                      in Finland: exploration, deposits ...
                    </p>

                    <p>
                      <a
                        href="https://www.lyellcollection.org/doi/10.1144/geoenergy2023-016"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.lyellcollection.org/doi/10.1144/geoenergy2023-016
                      </a>
                    </p>

                    <p>
                      <strong>[66] [67]</strong> [PDF] Cobalt Market Report 2023
                    </p>

                    <p>
                      <a
                        href="https://www.cobaltinstitute.org/wp-content/uploads/2025/02/Cobalt-Market-Report-2023.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.cobaltinstitute.org/wp-content/uploads/2025/02/Cobalt-Market-Report-2023.pdf
                      </a>
                    </p>
                  </div>

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
