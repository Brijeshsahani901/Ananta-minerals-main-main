import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function QuantumComputing() {
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
            src={`${basePath}/assets/minerals_images/quantum-computers.webp`}
            alt="Quantum Computing and the Critical Mineral Race"
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
                    Quantum Computing and the Critical Mineral Race
                  </h3>

                  <p className="my-3">
                    <strong>
                      Quantum computing is becoming strategically important for
                      the same reason semiconductors did
                    </strong>
                    ---not because it will replace every existing computer, but
                    because it could become decisive infrastructure for a narrow
                    set of high-value tasks in science, defence, cybersecurity,
                    pharmaceuticals, materials discovery and advanced industry.
                    NIST describes quantum computers as machines that could
                    eventually help with molecular simulation, supply-chain
                    optimisation and code-breaking, while IBM, Google,
                    Microsoft, AWS and others are now openly roadmapping
                    fault-tolerant systems rather than only laboratory
                    demonstrators.
                    <a
                      href="https://www.nist.gov/quantum-information-science/quantum-computing-explained"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [1]
                    </a>
                  </p>

                  <p className="my-3">
                    The important strategic twist is that the race is{" "}
                    <strong>not only about algorithms and qubit counts</strong>.
                    It is also about who can secure the materials, processing
                    know-how and specialised manufacturing steps needed for
                    quantum-grade hardware: superconducting thin films,
                    ultra-clean oxides, cryogenics, vacuum systems, photonic
                    components, laser systems and advanced packaging. The
                    International Energy Agency has warned that refining is even
                    more concentrated than mining in many critical-material
                    chains, and a major 2025 market review noted that the
                    industry's focus has shifted from simply adding qubits to{" "}
                    <strong>stabilising</strong> them.
                    <a
                      href="https://www.usgs.gov/publications/mineral-commodity-summaries-2025"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [2]
                    </a>
                  </p>

                  <h4 className="my-3">Quantum computing in simple terms</h4>

                  <p className="my-3">
                    In simple language, a classical computer stores information
                    in <strong>bits</strong>, which are either 0 or 1. A quantum
                    computer stores information in <strong>qubits</strong>,
                    which can be 0, 1, or a quantum mixture of both at the same
                    time. Qubits can also be <strong>entangled</strong>, meaning
                    that the state of one qubit is linked to the state of
                    another. Those two features---superposition and
                    entanglement---are what give quantum computers their
                    potential advantage on certain problems.
                    <a
                      href="https://www.nist.gov/quantum-information-science/quantum-computing-explained"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [3]
                    </a>
                  </p>

                  <p className="my-3">
                    That does <strong>not</strong> mean a quantum computer is a
                    magic machine that tries every answer at once. NIST
                    explicitly warns against that popular misconception. What
                    quantum computers really do is manipulate probability
                    amplitudes so that the right answers become more likely when
                    the qubits are measured. That makes them promising for some
                    very specific problem classes---especially quantum
                    simulation, some optimisation tasks and certain
                    cryptographic attacks---but not for everyday word
                    processing, web browsing or spreadsheets.
                    <a
                      href="https://www.nist.gov/quantum-information-science/quantum-computing-explained"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [3]
                    </a>
                  </p>

                  <p className="my-3">
                    The biggest hardware difference is that a classical computer
                    is a room-temperature semiconductor product, whereas a
                    quantum computer is usually a{" "}
                    <strong>
                      precision physics machine attached to a computer
                    </strong>
                    . Depending on the platform, it may require millikelvin
                    cryogenics, a high-vacuum chamber, laser arrays, microwave
                    electronics, exotic nanofabrication, or all of these
                    together. NIST's overview spans superconducting circuits,
                    trapped ions, neutral atoms, photons, diamond defects and
                    silicon spin qubits; Microsoft's topological approach adds
                    quantum materials engineering using indium arsenide and
                    aluminium nanowires.
                    <a
                      href="https://www.nist.gov/quantum-information-science/quantum-computing-explained"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [4]
                    </a>
                  </p>

                  <p className="my-3">
                    Today's machines are still early and error-prone. NIST notes
                    that current systems remain rudimentary, and the engineering
                    challenge is to protect fragile quantum states from noise
                    long enough to do useful work. That is why the next phase of
                    the industry is about{" "}
                    <strong>
                      error correction, logical qubits, modularity and
                      industrial-scale hardware engineering
                    </strong>
                    , not just headline physical-qubit counts.
                    <a
                      href="https://www.nist.gov/quantum-information-science/quantum-computing-explained"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [5]
                    </a>
                  </p>

                  <h4 className="my-3">Quantum Leaders</h4>

                  <p className="my-3">
                    There is{" "}
                    <strong>no single global leader on every metric</strong>.
                    Different countries and companies lead in different
                    platforms, and qubit counts are not directly comparable
                    across modalities because coherence time, connectivity, gate
                    fidelity, speed and error-correction overhead vary widely.
                    Nature's quantum-physics ranking found that no one country
                    or region dominates all quantum research, although the
                    University of Science and Technology of China stood out
                    strongly among institutions. Commercially, the field is
                    fragmented across superconducting, trapped-ion,
                    neutral-atom, photonic, annealing and topological
                    approaches.
                    <a
                      href="https://www.nature.com/nature-index/news/ten-best-countries-for-quantum-physics-research"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [6]
                    </a>
                  </p>

                  <p className="my-3">
                    The <strong>United States</strong> has the deepest
                    commercial bench. IBM says it offers the world's largest
                    fleet of 100+ qubit quantum computers and is aiming for
                    systems with hundreds of logical qubits by the end of the
                    decade. Google's current-generation Willow is a 105-qubit
                    superconducting chip with very high gate fidelities and a
                    key error-correction milestone. AWS has entered hardware
                    with Ocelot, aimed at reducing error-correction overhead.
                    Microsoft is pushing a topological route with Majorana 1. On
                    trapped ions and neutral atoms, the US also hosts IonQ,
                    Quantinuum's major US operations, Atom Computing and QuEra.
                    <a
                      href="https://www.ibm.com/quantum"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [7]
                    </a>
                  </p>

                  <p className="my-3">
                    <strong>China</strong> is a front-rank quantum power in both
                    research and hardware. USTC reported the 105-qubit
                    superconducting processor Zuchongzhi-3, and Origin Quantum
                    says its Wukong superconducting platform is independently
                    developed in China and widely accessed through the cloud.
                    Nature Index reporting also highlights USTC as the strongest
                    single institutional player in quantum-physics research.
                    <a
                      href="https://en.ustc.edu.cn/info/1007/5015.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [8]
                    </a>
                  </p>

                  <p className="my-3">
                    <strong>Japan, Canada and parts of Europe</strong> are also
                    clearly in the top tier. RIKEN and Fujitsu unveiled a
                    256-qubit superconducting quantum computer and laid out a
                    path toward 1,000 qubits. Canada is strong in two distinct
                    niches: D-Wave's commercially available annealing systems
                    and Xanadu's modular photonic architecture. In Europe and
                    the UK, Quantinuum and Oxford Ionics are leaders in trapped
                    ions, Pasqal in neutral atoms, Alice & Bob in cat qubits,
                    and IQM in superconducting deployments tied to European
                    supercomputing infrastructure.
                    <a
                      href="https://www.riken.jp/en/news_pubs/news/2025/20250422_1/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [9]
                    </a>
                  </p>

                  <p className="my-3">
                    On the government side, the strongest{" "}
                    <strong>confirmed public programmes</strong> in the sources
                    reviewed here are the US National Quantum Initiative, the EU
                    Quantum Flagship, Japan's public-private RIKEN--Fujitsu
                    effort, and India's National Quantum Mission. China's
                    leadership is also clearly supported by state-backed
                    institutions such as USTC and the Chinese Academy of
                    Sciences, even where the current answer does not pin down a
                    single canonical public roadmap document.
                    <a
                      href="https://digital-strategy.ec.europa.eu/en/policies/quantum-technologies-flagship"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [10]
                    </a>
                  </p>

                  <h4 className="my-3">
                    Critical minerals matter and where they are used
                  </h4>

                  <p className="my-3">
                    There is <strong>no single bill of materials</strong> for a
                    quantum computer, because the hardware platforms are
                    different. Strictly speaking, the policy conversation should
                    widen from "critical minerals" to{" "}
                    <strong>critical materials</strong>: some of the most
                    strategic inputs are not classic mined bulk minerals at all,
                    but purified isotopes, specialty semiconductors, photonic
                    materials, superconducting films and cryogenic gases.
                    <a
                      href="https://www.nist.gov/quantum-information-science/quantum-computing-explained"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [11]
                    </a>
                  </p>

                  <p className="my-3">
                    For <strong>superconducting quantum computers</strong>---the
                    approach used by IBM, Google and many others---the most
                    important materials are aluminium, aluminium oxide, niobium,
                    tantalum, silicon or sapphire substrates, copper,
                    niobium-titanium cabling, indium advanced packaging and
                    helium for dilution refrigeration. NIST explains that
                    aluminium oxide is a core tunnel-barrier and gate-oxide
                    material; Al/AlOx/Al Josephson junctions are central to
                    superconducting devices; niobium is valuable as a
                    superconductor; and niobium thin films are used in
                    resonators. NIST and other research groups also note the
                    growing importance of tantalum surfaces and caps for
                    reducing dielectric loss, while Bluefors states that
                    dilution refrigerators rely on a helium-3/helium-4 mixture
                    to achieve the required temperatures. Indium bump
                    interconnects are also used in advanced superconducting
                    packaging.
                    <a
                      href="https://www.nist.gov/programs-projects/precision-materials-quantum-devices"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [12]
                    </a>
                  </p>

                  <p className="my-3">
                    For <strong>trapped-ion systems</strong>, the qubits
                    themselves are atoms such as ytterbium, barium or calcium.
                    Microsoft's IonQ documentation says IonQ manipulates the
                    hyperfine states of ytterbium ions with lasers, while
                    Quantinuum's Helios uses barium ions and the company has
                    also published work involving ytterbium--barium ion
                    transport. Around those ions sits a materials stack based on
                    gold/alumina or silicon trap chips, vacuum chambers,
                    microwave control, laser diodes and integrated photonics.
                    The trapped-ion materials review highlights silicon nitride,
                    alumina, aluminium nitride, lithium niobate, silicon
                    modulators, GaN-based photonics and superconducting
                    single-photon detectors as relevant materials for scaling
                    the platform.
                    <a
                      href="https://learn.microsoft.com/en-us/azure/quantum/provider-ionq"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [13]
                    </a>
                  </p>

                  <p className="my-3">
                    For <strong>neutral-atom systems</strong>, the most
                    important elemental inputs are the atom species
                    themselves---typically rubidium or ytterbium---and the
                    photonics stack needed to trap and manipulate them. Pasqal
                    says it uses focused lasers to capture and control rubidium
                    atoms, QuEra says it uses rubidium atoms, and Atom Computing
                    builds optically trapped neutral-atom systems controlled
                    wirelessly with lasers. These systems generally reduce
                    dependence on deep cryogenics compared with superconducting
                    hardware, but they increase dependence on stable laser
                    supply chains, optical coatings, vacuum systems and
                    integrated photonics.
                    <a
                      href="https://www.pasqal.com/technology/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [14]
                    </a>
                  </p>

                  <p className="my-3">
                    For <strong>silicon spin and topological platforms</strong>,
                    the material story shifts toward semiconductor
                    heterostructures. Recent reviews and demonstrations describe
                    silicon/silicon-germanium and germanium/silicon-germanium
                    chips as leading semiconductor platforms for spin qubits,
                    often using metallic gates such as aluminium. Microsoft's
                    Majorana route combines indium arsenide with aluminium to
                    create topological superconducting nanowires. In other
                    words, the relevant strategic inputs here include
                    high-purity silicon, germanium, SiGe heterostructures,
                    indium-bearing semiconductors and the superconducting metals
                    layered onto them.
                    <a
                      href="https://www.nature.com/articles/s41534-025-01016-x"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [15]
                    </a>
                  </p>

                  <p className="my-3">
                    For <strong>photonic quantum computing</strong>, the key
                    materials are silicon photonics, silicon nitride and
                    especially lithium niobate in modulators and nonlinear
                    devices. Nature reported a manufacturable silicon-photonics
                    platform for quantum computing, PsiQuantum says its Omega
                    chipset is a silicon photonic stack built in industrial
                    semiconductor fabs, and recent reviews identify thin-film
                    lithium niobate as a major platform for integrated quantum
                    photonics. Photonic routes can avoid some cryogenic
                    bottlenecks, but they make photonics foundry access and
                    low-loss packaging strategically important.
                    <a
                      href="https://www.nature.com/articles/s41586-025-08820-7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [16]
                    </a>
                  </p>

                  <p className="my-3">
                    If a policymaker wanted a{" "}
                    <strong>priority watchlist</strong> today, the highest-value
                    materials to monitor would be:{" "}
                    <strong>
                      niobium, tantalum, aluminium and ultra-clean aluminium
                      oxide for superconducting devices; helium-3/helium-4 and
                      cryogenic infrastructure; high-purity silicon, germanium
                      and SiGe; indium-bearing semiconductors and indium
                      packaging; gallium-bearing photonics materials; lithium
                      niobate; and rare-earth and atomic-species supply linked
                      to ytterbium and related quantum hardware
                    </strong>
                    . Not every platform uses every material, but these are the
                    inputs most likely to become strategic chokepoints across
                    the hardware landscape.
                    <a
                      href="https://www.nist.gov/programs-projects/precision-materials-quantum-devices"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [17]
                    </a>
                  </p>

                  <h4 className="my-3">
                    Supply-chain risk, refining concentration, and Q-Day
                  </h4>

                  <p className="my-3">
                    The central supply-chain lesson is that{" "}
                    <strong>
                      quantum risk sits more in refining, purity, fabrication
                      and specialised manufacturing than in raw tonnage
                    </strong>
                    . The IEA's 2025 assessment says processing concentration is
                    substantially higher than mining concentration, with the top
                    three refining countries averaging 86% market share across
                    many critical-mineral chains. For quantum hardware, that
                    matters because qubit performance depends on exceptionally
                    low defect densities, clean interfaces, isotopic control,
                    careful oxide growth, ultra-low-loss packaging and tight
                    cryogenic integration.
                    <a
                      href="https://www.usgs.gov/publications/mineral-commodity-summaries-2025"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [18]
                    </a>
                  </p>

                  <p className="my-3">
                    The clearest single-country chokepoint visible in the
                    sources is <strong>niobium</strong>, where USGS notes that
                    Brazil overwhelmingly dominates world production. For
                    superconducting and cryogenic systems, that is strategically
                    relevant because niobium appears in films, resonators and
                    NbTi cryogenic cables. Another obvious chokepoint is{" "}
                    <strong>gallium</strong>, where USGS reporting points to
                    dominant Chinese refining. More broadly, China remains
                    central to several advanced-material processing chains
                    relevant to photonics and rare-earth separation, which means
                    supply security depends not only on ores but also on
                    downstream chemical and electronic-material conversion.
                    <a
                      href="https://catalog.data.gov/dataset/mineral-commodity-summaries-2025-helium-data-release"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [19]
                    </a>
                  </p>

                  <p className="my-3">
                    A second major risk is <strong>cryogenics</strong>. Bluefors
                    says the dilution refrigerators used across much of
                    superconducting quantum computing depend on
                    helium-3/helium-4 mixtures in closed-loop systems. That
                    makes the bottleneck less about commodity-scale volume and
                    more about specialised isotope availability, refrigerator
                    manufacturing capacity, lead times and system integration.
                    In practice, countries that can mine or import materials but
                    cannot build dilution refrigerators, cryogenic wiring,
                    quantum packaging or advanced laser stacks will still remain
                    dependent on foreign suppliers.
                    <a
                      href="https://bluefors.com/products/dilution-refrigerator-measurement-systems/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [20]
                    </a>
                  </p>

                  <p className="my-3">
                    That is also why the historical analogy with the{" "}
                    <strong>1980s personal-computer era</strong> needs care. The
                    early PC revolution did increase demand for electronics
                    materials, but the bigger story was learning curves and
                    manufacturing scale in semiconductors. Quantum computing is
                    different: the near-term geopolitical risk is less about
                    bulk-material consumption and more about thin, highly
                    specialised supply chains in superconducting films, clean
                    oxides, photonics, cryogenics, vacuum hardware and chip
                    packaging. The right analytical conclusion is not "all
                    computer materials always skyrocket", but rather that
                    strategic bottlenecks tend to emerge first where
                    manufacturing is specialised and geographically
                    concentrated.
                    <a
                      href="https://www.worldbank.org/en/research/commodity-markets"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [21]
                    </a>
                  </p>

                  <p className="my-3">
                    <strong>Q-Day</strong> is the point at which a
                    cryptanalytically relevant quantum computer can break
                    today's widely used public-key cryptography. NIST stresses
                    that such machines may still be years or decades away, but
                    Google has made the issue feel closer by setting a 2029
                    internal timeline for post-quantum migration and citing
                    progress in hardware, error correction and factoring cost
                    estimates. In a 2025 Google research publication, Craig
                    Gidney estimated that RSA-2048 factoring could, in
                    principle, be done in less than a week with fewer than one
                    million noisy physical qubits under stated assumptions---far
                    below earlier estimates, but still far beyond current
                    hardware such as the 105-qubit Willow chip. The policy
                    implication is clear:{" "}
                    <strong>
                      Q-Day is not here, but the migration clock is already
                      running
                    </strong>
                    .
                    <a
                      href="https://csrc.nist.gov/projects/post-quantum-cryptography"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [22]
                    </a>
                  </p>

                  <h4 className="my-3">India's position</h4>

                  <p className="my-3">
                    India is no longer a spectator. The{" "}
                    <strong>National Quantum Mission</strong> has an outlay of
                    ₹6,003.65 crore over eight years, and the Government says it
                    has created four thematic hubs, including a Quantum
                    Computing hub at IISc Bengaluru. In a 2025 parliamentary
                    reply, the Department of Science and Technology said that
                    the computing hub spans 21 institutions, and that India is
                    pursuing indigenous capability across superconducting
                    qubits, neutral atoms, trapped ions, semiconductor qubits
                    and photonic technology. The same reply set explicit
                    quantum-computing targets for progressively larger systems
                    over three, five and eight years.
                    <a
                      href="https://pib.gov.in/PressReleasePage.aspx?PRID=2158388"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [23]
                    </a>
                  </p>

                  <p className="my-3">
                    On hardware, India now has genuine early-stage domestic
                    milestones. The government-backed QpiAI-Indus launch was
                    described by the Press Information Bureau as India's first
                    full-stack quantum computing system with a 25-qubit
                    superconducting processor. Separately, TIFR and DRDO
                    completed end-to-end testing of a 6-qubit superconducting
                    quantum processor. The Government has also announced quantum
                    fabrication and central facilities at IISc Bengaluru and IIT
                    Bombay, with additional facilities at IIT Delhi and IIT
                    Kanpur, aimed at indigenising fabrication of quantum chips
                    and sensors.
                    <a
                      href="https://pib.gov.in/PressReleasePage.aspx?PRID=2121845"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [24]
                    </a>
                  </p>

                  <p className="my-3">
                    India's private sector is also filling in the supply stack
                    rather than only the software stack. QpiAI is the main
                    indigenous full-stack hardware firm in the sources reviewed
                    here. Dimira, an IIT Bombay spin-out backed under the
                    National Quantum Mission, is developing indigenous cryogenic
                    RF/microwave cables for quantum systems. Prenishq, an IIT
                    Delhi spin-out, is building ultra-high-vacuum chambers,
                    narrow-linewidth lasers and control electronics, and has
                    demonstrated an indigenous high-precision diode laser for
                    quantum communication and computing. On the ecosystem side,
                    IBM, TCS and the Government of Andhra Pradesh say they plan
                    to anchor Amaravati's Quantum Valley Tech Park with a
                    156-qubit IBM Quantum System Two using the Heron processor,
                    which---if completed as described---would be India's largest
                    machine.
                    <a
                      href="https://www.qpiai.tech/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [25]
                    </a>
                  </p>

                  <p className="my-3">
                    My assessment is that{" "}
                    <strong>
                      India is still an emerging hardware player rather than a
                      world leader today
                    </strong>
                    , but it is building something more durable than a single
                    showcase machine: a public mission, early indigenous
                    processors, fabrication plans, cryogenic and laser
                    suppliers, and a route to hybrid access through foreign
                    partners. That is the right direction. The gap India still
                    needs to close is in large-scale fault-tolerant hardware,
                    deep materials processing, and the specialised quantum-grade
                    manufacturing capabilities that sit between research
                    prototypes and industrial systems. This assessment is an
                    inference from the mission structure, the current qubit
                    milestones and the supply-chain initiatives documented
                    above.
                    <a
                      href="https://pib.gov.in/PressReleasePage.aspx?PRID=2158388"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      [26]
                    </a>
                  </p>

                  <div
                    className="my-5 pt-3"
                    style={{ borderTop: "1px solid #e0e0e0" }}
                  >
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      [1] [3] [4] [5] [11]
                      https://www.nist.gov/quantum-information-science/quantum-computing-explained
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      &lt;https://www.nist.gov/quantum-information-science/quantum-computing-explained&gt;
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      [2] [18]
                      https://www.usgs.gov/publications/mineral-commodity-summaries-2025
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      &lt;https://www.usgs.gov/publications/mineral-commodity-summaries-2025&gt;
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      [6]
                      https://www.nature.com/nature-index/news/ten-best-countries-for-quantum-physics-research
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      &lt;https://www.nature.com/nature-index/news/ten-best-countries-for-quantum-physics-research&gt;
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      [7] https://www.ibm.com/quantum
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      &lt;https://www.ibm.com/quantum&gt;
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      [8] https://en.ustc.edu.cn/info/1007/5015.htm
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      &lt;https://en.ustc.edu.cn/info/1007/5015.htm&gt;
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      [9]
                      https://www.riken.jp/en/news_pubs/news/2025/20250422_1/index.html
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      &lt;https://www.riken.jp/en/news_pubs/news/2025/20250422_1/index.html&gt;
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      [10]
                      https://digital-strategy.ec.europa.eu/en/policies/quantum-technologies-flagship
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      &lt;https://digital-strategy.ec.europa.eu/en/policies/quantum-technologies-flagship&gt;
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      [12] [17]
                      https://www.nist.gov/programs-projects/precision-materials-quantum-devices
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      &lt;https://www.nist.gov/programs-projects/precision-materials-quantum-devices&gt;
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      [13]
                      https://learn.microsoft.com/en-us/azure/quantum/provider-ionq
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      &lt;https://learn.microsoft.com/en-us/azure/quantum/provider-ionq&gt;
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      [14] https://www.pasqal.com/technology/
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      &lt;https://www.pasqal.com/technology/&gt;
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      [15] https://www.nature.com/articles/s41534-025-01016-x
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      &lt;https://www.nature.com/articles/s41534-025-01016-x&gt;
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      [16] https://www.nature.com/articles/s41586-025-08820-7
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      &lt;https://www.nature.com/articles/s41586-025-08820-7&gt;
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      [19]
                      https://catalog.data.gov/dataset/mineral-commodity-summaries-2025-helium-data-release
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      &lt;https://catalog.data.gov/dataset/mineral-commodity-summaries-2025-helium-data-release&gt;
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      [20]
                      https://bluefors.com/products/dilution-refrigerator-measurement-systems/
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      &lt;https://bluefors.com/products/dilution-refrigerator-measurement-systems/&gt;
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      [21] [27]
                      https://www.worldbank.org/en/research/commodity-markets
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      &lt;https://www.worldbank.org/en/research/commodity-markets&gt;
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      [22]
                      https://csrc.nist.gov/projects/post-quantum-cryptography
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      &lt;https://csrc.nist.gov/projects/post-quantum-cryptography&gt;
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      [23] [26]
                      https://pib.gov.in/PressReleasePage.aspx?PRID=2158388
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      &lt;https://pib.gov.in/PressReleasePage.aspx?PRID=2158388&gt;
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      [24] https://pib.gov.in/PressReleasePage.aspx?PRID=2121845
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      &lt;https://pib.gov.in/PressReleasePage.aspx?PRID=2121845&gt;
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      [25] https://www.qpiai.tech/
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      &lt;https://www.qpiai.tech/&gt;
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      [28] https://www.osti.gov/biblio/1853096
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      &lt;https://www.osti.gov/biblio/1853096&gt;
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      [29]
                      https://azure.microsoft.com/en-us/blog/quantum/2025/02/19/microsoft-unveils-majorana-1-the-worlds-first-quantum-processor-powered-by-topological-qubits/
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "5px",
                      }}
                    >
                      &lt;https://azure.microsoft.com/en-us/blog/quantum/2025/02/19/microsoft-unveils-majorana-1-the-worlds-first-quantum-processor-powered-by-topological-qubits/&gt;
                    </p>
                  </div>

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
                        women entrepreneurs from tier 2 &amp; 3 cities. He is
                        also part of an annual event called Ananta Godrej Ideas
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
