import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import clsx from "clsx";

export default function Dysprosium() {
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
            src={`${basePath}/assets/minerals_images/dysporium.webp`}
            alt="Dysprosium and Terbium for India's Net Zero Transition"
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
                    Dysprosium and Terbium for India's Net Zero Transition
                  </h3>

                  <h4 className="mt-4">Executive Summary</h4>

                  <p className="my-3">
                    From India's perspective, dysprosium and terbium are not
                    simply "rare earths"; they are the narrowest technical
                    chokepoints inside the permanent-magnet supply chain that
                    underpins high-efficiency motors and generators. Their most
                    irreplaceable role is as heavy-rare-earth additives in
                    high-performance NdFeB magnets for EV traction motors,
                    wind-turbine generators, robotics, aerospace, and defence
                    systems, where compact size, high torque density, and
                    resistance to thermal demagnetisation must all be achieved
                    at once. The International Energy Agency notes that demand
                    for magnet rare earths has doubled since 2015 and is set to
                    rise by about one-third by 2030, while the same report
                    states that China accounted for about 60% of mined
                    magnet-rare-earth supply, 91% of refining, and 94% of
                    sintered-magnet production in 2024.
                    <a
                      href="https://www.iea.org/reports/rare-earth-elements/executive-summary?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [1]
                    </a>
                  </p>

                  <p className="my-3">
                    For India, that matters directly because the country is
                    trying to scale both clean electricity and electrified
                    mobility at the same time. India's updated climate
                    commitments target about 50% cumulative electric-power
                    installed capacity from non-fossil sources by 2030 and Net
                    Zero by 2070; official updates also point to a 500 GW
                    non-fossil target by 2030. By late 2025 and mid-2026, India
                    had already crossed 50% non-fossil installed-capacity share,
                    wind capacity had reached 53.99 GW in November 2025, and
                    solar capacity had reached 162.15 GW by 30 May 2026.
                    <a
                      href="https://unfccc.int/sites/default/files/NDC/2022-08/India%20Updated%20First%20Nationally%20Determined%20Contrib.pdf?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [2]
                    </a>
                  </p>

                  <p className="my-3">
                    India's vulnerability is not only geological; it is mostly
                    midstream and downstream. Official Indian sources say India
                    has rare-earth resources and some extraction/refining
                    capability, but that commercial mining and processing remain
                    limited by inadequate technology and the absence of
                    sufficient midstream and downstream industry. Ministry and
                    PIB backgrounders also show that India still sourced a major
                    share of permanent-magnet imports from China during 2022–23
                    to 2024–25, ranging from 59.6% to 81.3% by value and from
                    84.8% to 90.4% by quantity.
                    <a
                      href="https://www.mines.gov.in/admin/storage/ckeditor/Press_Release_Press_Information_1770195545.pdf?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [3]
                    </a>
                  </p>

                  <p className="my-3">
                    The clearest India-relevant conclusion is therefore
                    practical: India does not mainly need "more rare-earth
                    awareness"; it needs mine-to-magnet execution. Today, India
                    has mining and concentrate-making through IREL, some
                    separated rare-earth production at Aluva, limited
                    metal-making and recycling pilots at Bhopal, an operational
                    strategic SmCo magnet line at Vizag, and a national scheme
                    to create 6,000 MTPA integrated NdFeB rare-earth
                    permanent-magnet capacity. But India still lacks
                    demonstrated large-scale, public, commercial Dy/Tb-bearing
                    NdFeB output, and no Indian TGG crystal manufacturer was
                    identified in the official and manufacturer sources
                    reviewed.
                    <a
                      href="https://www.irel.co.in/oscom-rare-earth-extraction-plant?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [4]
                    </a>
                  </p>

                  <h4 className="mt-4">Why These Elements Matter to India</h4>

                  <p className="my-3">
                    India's low-carbon build-out is precisely the kind of system
                    in which dysprosium and terbium become disproportionately
                    important. Rare-earth permanent magnets are central to EV
                    traction motors and to many wind-turbine generator designs;
                    the IEA notes that rare-earth-based motors and generators
                    are the most energy-efficient devices developed so far and
                    can deliver about 20–40% energy savings versus ordinary
                    motors. The same report estimates that each EV traction
                    motor uses roughly 2–4 kg of NdFeB magnets, and that EVs
                    increased their share of magnet-rare-earth demand from under
                    1% in 2015 to about 9% in 2024, reaching 18% by 2030 in the
                    stated-policies case.
                    <a
                      href="https://iea.blob.core.windows.net/assets/88d2b060-4c5b-46cc-8727-c60576cb937d/RareearthelementsPathwaystosecureanddiversifiedsupplychains.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [5]
                    </a>
                  </p>

                  <p className="my-3">
                    That global logic maps directly onto Indian policy targets.
                    India seeks 30% EV sales penetration by 2030, and official
                    material from NITI Aayog and PIB shows EV sales rose from
                    50,000 in 2016 to 2.08 million in 2024, while registered EV
                    stock had reached 56.75 lakh by February 2025. If India
                    moves toward those targets while also expanding wind from
                    53.99 GW in November 2025 toward the official 140 GW by 2030
                    ambition cited in government briefings, dependence on
                    high-performance magnets becomes a strategic industrial
                    issue, not just a materials issue.
                    <a
                      href="https://pib.gov.in/PressReleasePage.aspx?PRID=2152240&utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [6]
                    </a>
                  </p>

                  <p className="my-3">
                    The technical reason is simple and unforgiving. NdFeB
                    magnets are attractive because they provide the highest
                    commercial magnetic energy density; dysprosium and terbium
                    are then used in small but crucial quantities to keep those
                    magnets from losing coercivity at elevated operating
                    temperatures. Dysprosium is the more widely used
                    high-temperature stabiliser, while terbium is even more
                    potent in anisotropy-field enhancement but far more
                    expensive and scarcer, which is why state-of-the-art magnet
                    engineering tries to minimise total Tb use through
                    grain-boundary diffusion and mixed Dy/Tb strategies rather
                    than eliminate heavy rare earths entirely.
                    <a
                      href="https://www.sciencedirect.com/science/article/pii/S0042207X24004160?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [7]
                    </a>
                  </p>

                  <p className="my-3">
                    India's solar build-out matters too, though more indirectly.
                    Solar PV modules themselves do not consume dysprosium or
                    terbium in the same way wind and EV motors do, but active
                    solar trackers, solar pumping systems, plant automation, and
                    high-efficiency industrial drives associated with grid
                    integration often use permanent-magnet BLDC or servo motors;
                    the precise Dy/Tb share in those sub-applications is
                    unspecified in the sources reviewed. That makes wind and EVs
                    the dominant India-relevant irreplaceable uses, while
                    solar-tracker demand is best treated as a secondary, real
                    but less well-quantified pull on the magnet ecosystem.
                    <a
                      href="https://www.sciencedirect.com/science/article/pii/S2352484724006164?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [8]
                    </a>
                  </p>

                  <p className="my-3">
                    India's defence and laser sectors add another layer of
                    non-substitutable demand. Government documents tie
                    rare-earth permanent magnets to defence and aerospace, while
                    DRDO's Electronics and Communication Systems cluster
                    explicitly covers electro-optical and laser-based sensors
                    and systems. For terbium specifically, the separate
                    irreplaceable niche is magneto-optical crystals such as
                    terbium gallium garnet used in Faraday isolators for
                    high-power lasers; Indian deployment volumes are
                    unspecified, but the technical need is directly relevant to
                    domestic electro-optic and laser capability.
                    <a
                      href="https://pib.gov.in/PressReleasePage.aspx?PRID=2194684&lang=2®=3&utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [9]
                    </a>
                  </p>

                  <h4 className="mt-4">Informational Tiles</h4>

                  <h5 className="mt-3">
                    Dysprosium for High-Temperature EV and Wind Magnets
                  </h5>

                  <p className="my-3">
                    <strong>Summary.</strong> Dysprosium's most important
                    India-relevant use is as a coercivity enhancer in
                    high-performance NdFeB magnets used in EV traction motors
                    and wind generators, especially where compactness, thermal
                    stability, and high efficiency must coexist. This matters
                    for India because EV sales reached 2.08 million in 2024, the
                    policy goal is 30% EV sales by 2030, wind capacity reached
                    53.99 GW in November 2025, and the official ambition cited
                    by PIB is 140 GW of wind by 2030.
                    <a
                      href="https://pib.gov.in/PressReleasePage.aspx?PRID=2152240&utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [10]
                    </a>
                  </p>

                  <p className="my-3">
                    <strong>Why irreplaceable.</strong> Dy is technically hard
                    to replace because it raises magnetocrystalline anisotropy
                    at grain boundaries and suppresses reverse-domain
                    nucleation, which is exactly what prevents hot-running NdFeB
                    magnets from demagnetising in traction-duty or
                    generator-duty service. In a 2024 peer-reviewed study,
                    adding only <strong>0.167 wt% Dy</strong> by vacuum
                    grain-boundary diffusion raised intrinsic coercivity by{" "}
                    <strong>28%</strong> while retaining a high energy product
                    of <strong>396.2 kJ/m³</strong>; without heavy-rare-earth
                    stabilisation, the system-level substitute is usually a
                    larger, heavier, or less efficient machine.
                    <a
                      href="https://www.sciencedirect.com/science/article/pii/S0042207X24004160?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [11]
                    </a>
                  </p>

                  <p className="my-3">
                    <strong>Key numbers.</strong> IEA estimates each EV traction
                    motor uses about <strong>2–4 kg</strong> of NdFeB magnets
                    and that rare-earth permanent-magnet motors/generators can
                    save about <strong>20–40%</strong> energy versus ordinary
                    motors; a recent systems paper projects global dysprosium
                    demand could rise to <strong>up to 14 kt by 2050</strong>{" "}
                    under climate-driven scenarios. India-specific Dy content
                    per EV or per MW of Indian wind is{" "}
                    <strong>unspecified</strong> in the sources reviewed.
                    <a
                      href="https://iea.blob.core.windows.net/assets/88d2b060-4c5b-46cc-8727-c60576cb937d/RareearthelementsPathwaystosecureanddiversifiedsupplychains.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [12]
                    </a>
                  </p>

                  <p className="my-3">
                    <strong>Priority sources.</strong> IEA,{" "}
                    <em>Rare Earth Elements</em> (2026) for technology demand
                    and motor/generator efficiency; Huang and Mo,{" "}
                    <em>Vacuum</em> (2024) for Dy diffusion performance;
                    Eheliyagoda et al.,{" "}
                    <em>Resources, Conservation and Recycling</em> (2025) for Dy
                    demand outlook; Indian PIB/NITI materials for EV and wind
                    scaling.
                    <a
                      href="https://iea.blob.core.windows.net/assets/88d2b060-4c5b-46cc-8727-c60576cb937d/RareearthelementsPathwaystosecureanddiversifiedsupplychains.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [13]
                    </a>
                  </p>

                  <h5 className="mt-4">
                    Terbium for Top-Coercivity Magnets and Laser Isolators
                  </h5>

                  <p className="my-3">
                    <strong>Summary.</strong> Terbium has two India-relevant
                    irreplaceable uses: first, as the strongest practical
                    heavy-rare-earth coercivity booster for the highest-grade
                    NdFeB magnets; second, as the core constituent of TGG and
                    related magneto-optical crystals used in Faraday rotators
                    and isolators for high-power laser systems. This matters to
                    India because its REPM scheme explicitly targets magnets for
                    EVs, renewable energy, aerospace, and defence, while DRDO's
                    electro-optical and laser ecosystem creates a strategic pull
                    for advanced Faraday materials even if Indian Tb demand
                    volumes are <strong>unspecified</strong>.
                    <a
                      href="https://pib.gov.in/PressReleasePage.aspx?PRID=2194684&lang=2®=3&utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [14]
                    </a>
                  </p>

                  <p className="my-3">
                    <strong>Why irreplaceable.</strong> In magnets, Tb is harder
                    to replace than Dy on a per-atom basis because it provides
                    stronger anisotropy-field enhancement, which is why
                    engineers use it when they must push coercivity very high
                    with minimal remanence penalty. In a 2025
                    grain-boundary-diffusion paper, <strong>Tb₄O₇</strong>{" "}
                    treatment increased NdFeB coercivity from{" "}
                    <strong>1.1 T to 1.9 T</strong> while keeping remanence at{" "}
                    <strong>1.4 T</strong>; in optics, TGG remains the benchmark
                    because it combines large Verdet constant, high thermal
                    conductivity, low loss, and high laser-damage tolerance in
                    one crystal, a combination competing materials usually
                    cannot match simultaneously.
                    <a
                      href="https://www.sciencedirect.com/science/article/pii/S1002072125001450?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [15]
                    </a>
                  </p>

                  <p className="my-3">
                    <strong>Key numbers.</strong> Commercial TGG data give a
                    Verdet constant of about{" "}
                    <strong>−40 rad T⁻¹ m⁻¹ at 1064 nm</strong> and{" "}
                    <strong>−134 rad T⁻¹ m⁻¹ at 632 nm</strong>, with thermal
                    conductivity about <strong>7.4 W m⁻¹ K⁻¹</strong> and
                    laser-damage capability above <strong>1 GW/cm²</strong>.
                    Recent material-flow work indicates permanent magnets
                    accounted for about{" "}
                    <strong>90% of terbium market flow in 2024</strong>, showing
                    why Tb has become more tightly linked to electrification and
                    automation than to older phosphor uses.
                    <a
                      href="https://www.northropgrumman.com/what-we-do/space/synoptics/products/faraday-crystals?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [16]
                    </a>
                  </p>

                  <p className="my-3">
                    <strong>Priority sources.</strong> Northrop Grumman
                    SYNOPTICS Faraday-crystal specifications; the 2025/2024 TGG
                    optical and growth literature; the 2025{" "}
                    <em>Journal of Rare Earths</em> Tb-diffusion study; Liu et
                    al., <em>Resources, Environment and Sustainability</em>{" "}
                    (2025) on terbium metabolism.
                    <a
                      href="https://www.northropgrumman.com/what-we-do/space/synoptics/products/faraday-crystals?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [17]
                    </a>
                  </p>

                  <h5 className="mt-4">
                    India's Mine-to-Magnet Bottleneck Is the Real Dy–Tb
                    Criticality Story
                  </h5>

                  <p className="my-3">
                    <strong>Summary.</strong> India's most urgent Dy/Tb problem
                    is not simply upstream ore access; it is the incomplete
                    chain from separated oxides to metals, alloys, finished
                    NdFeB magnets, and specialised crystals. Official
                    backgrounders show India sourced <strong>59.6–81.3%</strong>{" "}
                    of permanent-magnet imports from China by value and{" "}
                    <strong>84.8–90.4%</strong> by quantity during{" "}
                    <strong>2022–23 to 2024–25</strong>, while official
                    projections say India's REPM consumption is expected to{" "}
                    <strong>double by 2030</strong>.
                    <a
                      href="https://pib.gov.in/PressNoteDetails.aspx?ModuleId=3&NoteId=156753&lang=1®=3&utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [18]
                    </a>
                  </p>

                  <p className="my-3">
                    <strong>Why irreplaceable.</strong> This bottleneck is
                    "irreplaceable" in the engineering sense because magnet
                    supply security depends on highly qualified,
                    chemistry-intensive stages that cannot be improvised
                    quickly: separation, oxide purification, metal production,
                    alloy control, sintering, grain-boundary diffusion, coating,
                    and magnet qualification. India's response acknowledges that
                    reality: the <strong>₹7,280 crore</strong> REPM scheme aims
                    for <strong>6,000 MTPA</strong> integrated rare-earth
                    permanent-magnet capacity from rare-earth oxides to finished
                    magnets, the NCMM spans exploration through recycling, and
                    IREL is simultaneously building extraction, refining,
                    recycling, pilot metal production, and new magnet
                    capability.
                    <a
                      href="https://pib.gov.in/PressReleasePage.aspx?PRID=2222413&utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [19]
                    </a>
                  </p>

                  <p className="my-3">
                    <strong>Key numbers.</strong> India's current commercial
                    concentrate step is clearer than the later stages: IREL's
                    Odisha Rare Earth Extraction Plant has{" "}
                    <strong>11,200 tpa</strong> installed capacity for mixed
                    rare-earth chloride. Dy/Tb metal capacity in India is{" "}
                    <strong>unspecified</strong> in official sources reviewed;
                    public evidence instead points to mini metal plants for{" "}
                    <strong>La, Ce, and Nd</strong> at Bhopal, an operational{" "}
                    <strong>SmCo</strong> magnet line at Vizag for strategic
                    use, and ongoing creation of integrated NdFeB capability.
                    <a
                      href="https://www.irel.co.in/oscom-rare-earth-extraction-plant?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [20]
                    </a>
                  </p>

                  <p className="my-3">
                    <strong>Priority sources.</strong> PIB backgrounders on the
                    REPM scheme and import dependence; NCMM documentation; IREL
                    operating-unit pages; IEA 2026 value-chain report for
                    company and stage comparisons.
                    <a
                      href="https://pib.gov.in/PressReleasePage.aspx?PRID=2222413&utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [21]
                    </a>
                  </p>

                  <h4 className="mt-4">
                    Supply-Chain Stages and Producer Landscape
                  </h4>

                  <p className="my-3">
                    India's supply-chain problem is best understood step by
                    step. The generic technical route is:{" "}
                    <strong>
                      mining or ion-adsorption extraction →
                      beneficiation/concentrate → chemical cracking and leaching
                      → mixed rare-earth intermediate → solvent-extraction
                      separation → individual oxide → metal or master alloy →
                      finished magnet or optical crystal
                    </strong>
                    . Recent review literature shows solvent extraction remains
                    the dominant industrial route for rare-earth separation,
                    while metal production still relies on demanding
                    pyrometallurgical and electrometallurgical routes such as
                    metallothermic reduction and molten-salt electrolysis.
                    <a
                      href="https://www.sciencedirect.com/science/article/pii/S1226086X2400282X?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [22]
                    </a>
                  </p>

                  <p className="my-3">
                    India has capability at the early and part of the middle
                    stages, but it remains uneven for heavy rare earths. AMD and
                    official replies show India is exploring monazite- and
                    xenotime-bearing resources, yet a 2023 official statement
                    said the high-value heavy rare earths{" "}
                    <strong>
                      dysprosium and terbium are not available in extractable
                      quantities in Indian reserves already under exploitation
                    </strong>
                    . That statement is the most important geological caveat for
                    India: even if beach-sand and related resources exist, the
                    currently exploited feedstocks are not a reliable near-term
                    domestic Dy/Tb source.
                    <a
                      href="https://pib.gov.in/PressReleasePage.aspx?PRID=2118380&utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [23]
                    </a>
                  </p>

                  <p className="my-3">
                    At the extraction/concentrate stage, India's anchor is IREL.
                    IREL operates mineral-sands mining and separation at Odisha,
                    Kerala, and Tamil Nadu, and its Odisha Rare Earth Extraction
                    Plant produces mixed rare-earth chloride with{" "}
                    <strong>11,200 tpa</strong> installed capacity. At the
                    separation/refining stage, IREL's Aluva Rare Earths Division
                    refines mixed concentrate into separated high-purity rare
                    earths, and IREL's own compendium lists{" "}
                    <strong>dysprosium oxide</strong> among the products;
                    however, a current public commercial product listing that
                    clearly shows routine separated <strong>terbium</strong>{" "}
                    output was not identified, so India's present Tb-separation
                    capacity is <strong>unspecified</strong>.
                    <a
                      href="https://www.irel.co.in/oscom-rare-earth-extraction-plant?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [24]
                    </a>
                  </p>

                  <p className="my-3">
                    At the metal and recycling stage, India has partial but
                    still limited capability. Official replies state that IREL
                    has mini plants in Bhopal for{" "}
                    <strong>lanthanum, cerium, and neodymium metals</strong> and
                    a recycling plant there to recover magnetic rare earths from
                    end-of-life magnets. That is meaningful because it shows
                    India is moving beyond oxide-only capability, but it is not
                    the same as having proven commercial-scale Dy/Tb metal or
                    master-alloy output; for those specific heavy-rare-earth
                    stages, public capacity remains <strong>unspecified</strong>
                    .
                    <a
                      href="https://pib.gov.in/PressReleasePage.aspx?PRID=2220295&lang=1®=3&utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [25]
                    </a>
                  </p>

                  <p className="my-3">
                    At the alloying and magnet-manufacturing stage, India is
                    still in transition. Official sources say a strategic-sector{" "}
                    <strong>SmCo</strong> rare-earth permanent-magnet plant has
                    been operationalised at Vizag, IREL is in the process of
                    setting up a rare-earth permanent-magnet plant at
                    Visakhapatnam based on indigenous technology, and the 2025
                    REPM scheme is designed to build <strong>6,000 MTPA</strong>{" "}
                    integrated NdFeB capacity across up to five beneficiaries.
                    But official backgrounders also say domestic production of
                    permanent magnets is still developing, which is consistent
                    with continued import dependence.
                    <a
                      href="https://pib.gov.in/PressReleasePage.aspx?PRID=2220295&lang=1®=3&utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [26]
                    </a>
                  </p>

                  <p className="my-3">
                    At the crystal-growth stage relevant to terbium optics,
                    global production is specialised and India's position
                    appears weakest. Manufacturer and technical sources identify
                    TGG as the standard Faraday-rotator crystal and describe
                    Czochralski growth as the practical production route. In the
                    sources reviewed, major identified producers or suppliers
                    were outside India, and{" "}
                    <strong>
                      no Indian TGG crystal manufacturer was identified
                    </strong>
                    ; if such capacity exists outside the reviewed
                    official/manufacturer set, its status is{" "}
                    <strong>unspecified</strong>.
                    <a
                      href="https://www.northropgrumman.com/what-we-do/space/synoptics/products/faraday-crystals?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [27]
                    </a>
                  </p>

                  <p className="my-3">
                    The producer landscape by stage is therefore concise but
                    revealing. In mining outside China/Myanmar, IEA identifies{" "}
                    <strong>MP Materials</strong>,{" "}
                    <strong>Lynas Rare Earths</strong>,{" "}
                    <strong>Arafura Rare Earths</strong>,{" "}
                    <strong>Iluka Resources</strong>, <strong>Tronox</strong>,
                    and <strong>Meteoric Resources</strong> as major current or
                    pipeline players; within China's heavy-rare-earth mining
                    system, <strong>China Rare Earth Group</strong> holds all
                    ion-adsorption medium-heavy extraction quotas. In refining
                    and separation outside China, IEA highlights{" "}
                    <strong>Lynas</strong>, <strong>MP Materials</strong>,{" "}
                    <strong>Arafura</strong>, <strong>Iluka</strong>,{" "}
                    <strong>Tronox</strong>, <strong>Pensana</strong>,{" "}
                    <strong>Neo Performance Materials</strong>,{" "}
                    <strong>Energy Fuels</strong>, <strong>Solvay</strong>, and{" "}
                    <strong>Carester</strong>; in India, the operating entities
                    clearly evidenced were <strong>IREL</strong> and{" "}
                    <strong>Toyotsu Rare Earths India</strong> (TREI), though
                    TREI's public product slate is concentrated in light rare
                    earths. In downstream magnets and alloys, IEA names{" "}
                    <strong>Shin-Etsu</strong>, <strong>TDK</strong>,{" "}
                    <strong>Daido</strong>, <strong>Proterial</strong>,{" "}
                    <strong>Star Group</strong>,{" "}
                    <strong>Noveon Magnetics</strong>,{" "}
                    <strong>USA Rare Earth</strong>,{" "}
                    <strong>MP Materials</strong>,{" "}
                    <strong>Vulcan Elements</strong>, and{" "}
                    <strong>Neo Performance Materials</strong>; current official
                    Indian evidence points to <strong>IREL</strong> strategic
                    magnet activity and scheme-supported future capacity rather
                    than a presently visible roster of major public commercial
                    Dy/Tb-bearing NdFeB producers.
                    <a
                      href="https://iea.blob.core.windows.net/assets/88d2b060-4c5b-46cc-8727-c60576cb937d/RareearthelementsPathwaystosecureanddiversifiedsupplychains.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [28]
                    </a>
                  </p>

                  {/* Supply Chain Diagram */}
                  <div
                    className={clsx("my-4", "p-4")}
                    style={{
                      background: "#f8f9fa",
                      borderRadius: "8px",
                      textAlign: "center",
                    }}
                  >
                    <img
                      src="/assets/minerals_images/terbium-supply-chain.png"
                      alt="India's Terbium Supply Chain Stages - from global supply through upstream, midstream, downstream paths to Indian end uses"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        display: "block",
                        margin: "0 auto",
                      }}
                    />
                    <p className={clsx("text-muted", "mb-0", "mt-2")}>
                      <em>Figure: Terbium from India's Perspective — Supply Chain Stages</em>
                    </p>
                  </div>

                  <h4 className="mt-4">
                    Dysprosium and Terbium Compared for India
                  </h4>

                  <p className="my-3">
                    The compact comparison below focuses on what matters most
                    for Indian strategy: where the two elements sit in the value
                    chain, what they do technically, and where India currently
                    stands.
                    <a
                      href="https://iea.blob.core.windows.net/assets/88d2b060-4c5b-46cc-8727-c60576cb937d/RareearthelementsPathwaystosecureanddiversifiedsupplychains.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [29]
                    </a>
                  </p>

                  {/* Comparison Table */}
                  <div className={clsx("table-responsive", "my-4")}>
                    <table className={clsx("table", "table-bordered")}>
                      <thead className="table-light">
                        <tr>
                          <th>Topic</th>
                          <th>Dysprosium</th>
                          <th>Terbium</th>
                          <th>India Relevance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Main irreplaceable use</strong>
                          </td>
                          <td>
                            High-temperature NdFeB magnets for EV and wind duty.
                            <a
                              href="https://www.sciencedirect.com/science/article/pii/S0042207X24004160?utm_source=chatgpt.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ms-1"
                            >
                              [30]
                            </a>
                          </td>
                          <td>
                            Highest-coercivity NdFeB grades; TGG/Faraday
                            materials for lasers.
                            <a
                              href="https://www.sciencedirect.com/science/article/pii/S1002072125001450?utm_source=chatgpt.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ms-1"
                            >
                              [31]
                            </a>
                          </td>
                          <td>
                            Dy is the broader motor/generator bottleneck; Tb is
                            the sharper premium bottleneck and the
                            optics-critical material.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Technical reason</strong>
                          </td>
                          <td>
                            Maintains coercivity when magnets run hot;
                            suppresses demagnetisation.
                            <a
                              href="https://www.sciencedirect.com/science/article/pii/S0042207X24004160?utm_source=chatgpt.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ms-1"
                            >
                              [32]
                            </a>
                          </td>
                          <td>
                            Stronger anisotropy-field boost than Dy; in TGG,
                            high Verdet + thermal conductivity + low loss.
                            <a
                              href="https://www.sciencedirect.com/science/article/pii/S0025540825002909?utm_source=chatgpt.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ms-1"
                            >
                              [33]
                            </a>
                          </td>
                          <td>
                            India needs Dy-rich capability for scale, Tb
                            capability for premium magnets and laser systems.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Best recent metric</strong>
                          </td>
                          <td>
                            <strong>0.167 wt% Dy</strong> gave{" "}
                            <strong>+28% coercivity</strong> and{" "}
                            <strong>396.2 kJ/m³</strong>.
                            <a
                              href="https://www.sciencedirect.com/science/article/pii/S0042207X24004160?utm_source=chatgpt.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ms-1"
                            >
                              [34]
                            </a>
                          </td>
                          <td>
                            Tb diffusion raised coercivity{" "}
                            <strong>1.1 T → 1.9 T</strong>; TGG about{" "}
                            <strong>−40 rad T⁻¹ m⁻¹ at 1064 nm</strong>.
                            <a
                              href="https://www.sciencedirect.com/science/article/pii/S1002072125001450?utm_source=chatgpt.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ms-1"
                            >
                              [31]
                            </a>
                          </td>
                          <td>
                            Tb is stronger per unit used, but Dy is the more
                            practical scaling additive.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Indicative 2025 oxide price</strong>
                          </td>
                          <td>
                            <strong>USD 239/kg</strong>.
                            <a
                              href="https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-rare-earths-heavy.pdf?utm_source=chatgpt.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ms-1"
                            >
                              [35]
                            </a>
                          </td>
                          <td>
                            <strong>USD 1,010/kg</strong>.
                            <a
                              href="https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-rare-earths-heavy.pdf?utm_source=chatgpt.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ms-1"
                            >
                              [35]
                            </a>
                          </td>
                          <td>
                            Tb is far more price-sensitive in import planning
                            and inventory strategy.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>India geological position</strong>
                          </td>
                          <td>
                            Heavy-REE availability in exploited reserves
                            limited; extractable Dy in current exploited
                            reserves officially not available.
                            <a
                              href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1914305&utm_source=chatgpt.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ms-1"
                            >
                              [36]
                            </a>
                          </td>
                          <td>
                            Same broad constraint, with public routine Tb output
                            especially unclear.
                            <a
                              href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1914305&utm_source=chatgpt.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ms-1"
                            >
                              [37]
                            </a>
                          </td>
                          <td>
                            India's challenge is heavier on feedstock security
                            than on light-REE abundance.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>India current downstream status</strong>
                          </td>
                          <td>
                            Dy-bearing magnet ecosystem developing; large-scale
                            public commercial NdFeB output still emerging.
                            <a
                              href="https://pib.gov.in/PressReleasePage.aspx?PRID=2222413&utm_source=chatgpt.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ms-1"
                            >
                              [38]
                            </a>
                          </td>
                          <td>
                            Commercial Indian TGG/crystal manufacturing not
                            identified; Tb-heavy premium-magnet capability still
                            emerging.
                            <a
                              href="https://www.northropgrumman.com/what-we-do/space/synoptics/products/faraday-crystals?utm_source=chatgpt.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ms-1"
                            >
                              [39]
                            </a>
                          </td>
                          <td>
                            India is better positioned in upstream extraction
                            and policy design than in fully qualified Dy/Tb
                            downstream conversion.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="mt-4">Methods and Short Sources List</h4>

                  <p className="my-3">
                    This report prioritised official and primary sources, recent
                    peer-reviewed papers, and manufacturer technical data. The
                    databases and source families searched were: IEA reports and
                    chart library; USGS <em>Mineral Commodity Summaries</em>;
                    European Commission critical-raw-materials assessments;
                    India Ministry of Mines, PIB, MNRE, NITI Aayog, IREL, and
                    DRDO pages; ScienceDirect; Springer; Nature; RSC; MDPI; and
                    manufacturer pages or datasheets from Northrop Grumman
                    SYNOPTICS, Arnold Magnetic Technologies, and other
                    optical-crystal suppliers. Search terms included
                    combinations of "dysprosium India EV wind magnet
                    coercivity," "terbium India laser isolator TGG," "India rare
                    earth permanent magnet scheme 6000 MTPA," "IREL dysprosium
                    oxide Aluva," "India critical minerals rare earths heavy
                    rare earths," and "NdFeB grain boundary diffusion dysprosium
                    terbium 2024 2025." Any numerical field that could not be
                    located in a recent official or peer-reviewed source is
                    marked <strong>unspecified</strong>.
                    <a
                      href="https://www.iea.org/reports/rare-earth-elements?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-1"
                    >
                      [40]
                    </a>
                  </p>

                  <p className="my-3">
                    <strong>
                      A short source list follows, with clickable citations
                      serving as links:
                    </strong>
                  </p>

                  <ul>
                    <li>
                      IEA,{" "}
                      <em>
                        Rare Earth Elements: Pathways to Secure and Diversified
                        Supply Chains
                      </em>{" "}
                      (2026).
                      <a
                        href="https://www.iea.org/reports/rare-earth-elements?utm_source=chatgpt.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ms-1"
                      >
                        [41]
                      </a>
                    </li>
                    <li>
                      USGS,{" "}
                      <em>
                        Mineral Commodity Summaries 2026: Rare Earths Heavy
                      </em>
                      .
                      <a
                        href="https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-rare-earths-heavy.pdf?utm_source=chatgpt.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ms-1"
                      >
                        [35]
                      </a>
                    </li>
                    <li>
                      European Commission,{" "}
                      <em>
                        Study on the Critical Raw Materials for the EU 2023
                      </em>
                      .
                      <a
                        href="https://single-market-economy.ec.europa.eu/publications/study-critical-raw-materials-eu-2023-final-report_en?utm_source=chatgpt.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ms-1"
                      >
                        [42]
                      </a>
                    </li>
                    <li>
                      Ministry of Mines, Government of India,{" "}
                      <em>Critical Minerals for India</em> and NCMM materials.
                      <a
                        href="https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf?utm_source=chatgpt.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ms-1"
                      >
                        [43]
                      </a>
                    </li>
                    <li>
                      PIB and MHI backgrounders on the ₹7,280 crore REPM scheme
                      and import dependence.
                      <a
                        href="https://pib.gov.in/PressReleasePage.aspx?PRID=2222413&utm_source=chatgpt.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ms-1"
                      >
                        [44]
                      </a>
                    </li>
                    <li>
                      IREL operating-unit and project pages for Odisha REEP,
                      Aluva RED, Bhopal Theme Park, and Vizag magnet plans.
                      <a
                        href="https://www.irel.co.in/oscom-rare-earth-extraction-plant?utm_source=chatgpt.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ms-1"
                      >
                        [45]
                      </a>
                    </li>
                    <li>
                      Huang and Mo, "Increase of coercivity and composition
                      distribution in dysprosium-diffused NdFeB sintered
                      magnets," <em>Vacuum</em> (2024).
                      <a
                        href="https://www.sciencedirect.com/science/article/pii/S0042207X24004160?utm_source=chatgpt.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ms-1"
                      >
                        [34]
                      </a>
                    </li>
                    <li>
                      Zhang et al., "Efficient grain boundary diffusion source
                      for Nd-Fe-B magnets based on Tb–Dy–Cu alloys,"{" "}
                      <em>Journal of Magnetism and Magnetic Materials</em>{" "}
                      (2025).
                      <a
                        href="https://www.sciencedirect.com/science/article/pii/S0025540825002909?utm_source=chatgpt.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ms-1"
                      >
                        [46]
                      </a>
                    </li>
                    <li>
                      "Mechanism of grain boundary diffusion process of Nd-Fe-B
                      sintered magnets using Tb₄O₇,"{" "}
                      <em>Journal of Rare Earths</em> (2025).
                      <a
                        href="https://www.sciencedirect.com/science/article/pii/S1002072125001450?utm_source=chatgpt.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ms-1"
                      >
                        [47]
                      </a>
                    </li>
                    <li>
                      Northrop Grumman SYNOPTICS Faraday-crystal specifications
                      and related TGG technical references.
                      <a
                        href="https://www.northropgrumman.com/what-we-do/space/synoptics/products/faraday-crystals?utm_source=chatgpt.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ms-1"
                      >
                        [39]
                      </a>
                    </li>
                  </ul>

                  <p style={{ color: "#686868" }} className="mt-5">
                    Copyright © 2025 by Ananta Aspen Centre
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
                          Mithilesh Phadke
                        </h5>
                        <Badge bg="success" pill>
                          Author
                        </Badge>
                      </div>

                      <p className="text-muted" style={{ lineHeight: 1.6 }}>
                        Mithilesh Phadke is a Programme Executive at the Ananta
                        Aspen Centre. This non-partisan, non-profit organisation
                        promotes value-based leadership and convenes Track II
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
