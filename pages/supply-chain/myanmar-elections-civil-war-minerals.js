// import Layout from "@/components/layout/Layout";
// import { motion } from "framer-motion";
// import { Card, Badge } from "react-bootstrap";
// import { FaUserCircle } from "react-icons/fa";

// export default function MyanmarElectionsCivilWarMinerals() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

//   return (
//     <Layout>
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="blog-details-area fit-content-height"
//       >
//         {/* Full-width image */}
//         <div style={{ width: "100%", background: "#f5f5f5", margin: "0px 0" }}>
//           <img
//             src={`${basePath}/assets/minerals_images/Rare Earth Minerals Mining.png`}
//             alt="Myanmar Elections Civil War Minerals"
//             style={{
//               width: "100%",
//               height: "60vh",
//               display: "block",
//               objectFit: "cover",
//             }}
//           />
//         </div>

//         {/* Main content */}
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-xl-12 col-lg-10">
//               <div style={{ marginTop: "30px" }}>
//                 <div
//                   className="p-4"
//                   style={{
//                     borderRadius: "5px",
//                     backgroundColor: "#fff",
//                   }}
//                 >
//                   <h3 className="my-3">
//                     Votes, Violence, and Valuable Minerals: Myanmar's Elections
//                     Amidst Civil War and Rare Earths Race
//                   </h3>

//                   <p className="my-3">
//                     The world depends on China for its critical minerals needs
//                     but China, in turn, depends on a remote state in war-torn
//                     Myanmar. Myanmar holds one of the world's largest reserves
//                     of heavy rare earth elements (HREE), supplying 57% of
//                     China's total rare earth imports in 2024, which are
//                     essential in the production of advanced defence systems and
//                     green transition technologies like electric vehicles and
//                     wind turbines. Under the second Trump administration's
//                     intensified focus on critical minerals, the US appears to be
//                     turning its attention to the region. India, too, has shown
//                     interest, by exploring partnerships with ethnic armed
//                     organisations despite a strong and steadily deepening
//                     relationship with the Tatmadaw (Myanmar military). Much of
//                     2025 has been eventful for Myanmar with the sudden election
//                     announcement amidst an ongoing civil war and fast-paced
//                     evolution of engagements with China, the US, and India.
//                   </p>

//                   <h4 className="my-3">
//                     China's Growing Reliance on Myanmar's Rare Earths
//                   </h4>

//                   <p className="my-3">
//                     While China dominates nearly 90% of global critical mineral
//                     processing capacity, it is less widely recognised that its
//                     supply of certain HREEs, particularly dysprosium and
//                     terbium, is significantly reliant on resources extracted
//                     from Myanmar's Kachin State. Since 2017, China's HREE
//                     imports from Myanmar have increased exponentially because of
//                     low extraction cost and lack of environmental regulations.
//                   </p>

//                   <p className="my-3">
//                     Ever since the civil war erupted in Myanmar in 2021,
//                     following a coup and crushed civil disobedience movement,
//                     China's supply of HREEs have remained at risk. Following the
//                     seizure of major mining areas in Kachin state by the Kachin
//                     Independence Army's (KIA), an ethnic armed organisation,
//                     China temporarily halted HREE imports from Myanmar by
//                     closing border gates. After negotiations, imports resumed
//                     under KIA tax regulation at a fixed price in April 2025,
//                     transforming Myanmar's conflict economy and giving a
//                     non-state actor effective control over a key global supply
//                     corridor in a volatile region.
//                   </p>

//                   <h4 className="my-3">
//                     Trump Administration's New Approach to Myanmar Sanctions
//                   </h4>

//                   <p className="my-3">
//                     A sequence of developments beginning in early July 2025,
//                     although claimed to be unrelated by US officials,
//                     underscores a shift in American policy towards Myanmar,
//                     still referred to as Burma on most US government platforms.
//                     General Hlaing, Myanmar's de facto leader who seized power
//                     from the democratically elected government, wrote a
//                     multi-page laudatory letter to President Trump requesting
//                     for lifting of sanctions and drawing a parallel between
//                     alleged electoral fraud in both countries in 2020 which he
//                     claimed had led to the losses of their respective parties.
//                     The letter was written in response to President Trump's
//                     earlier correspondence regarding increased tariffs to
//                     several countries, including Myanmar.
//                   </p>

//                   <p className="my-3">
//                     Just a few weeks later, the US lifted sanctions on close
//                     associates of the Tatmadaw. And a few days after that,
//                     reports of competing propositions on sourcing HREEs from
//                     Myanmar — with KIA which is presently in control of most
//                     mining areas or, alternatively, with Tatmadaw — were heard
//                     by the Trump administration. However, this potential
//                     collaboration is highly impractical due to the technical and
//                     logistical challenges, such as lack of processing & refining
//                     capability and transport corridors, among other reasons.
//                   </p>

//                   <h4 className="my-3">
//                     Myanmar's 2025 Vote: Legitimacy in Question
//                   </h4>

//                   <p className="my-3">
//                     Since this communication, Myanmar authorities have nominally
//                     lifted the state of emergency while retaining martial law,
//                     transferring power from the State Administration Council to
//                     the newly formed interim government, both headed by General
//                     Hlaing. Elections have been announced to begin on 28
//                     December 2025 even as the civil war is ongoing, casting a
//                     doubt on the feasibility of a peaceful and legitimate
//                     political process. The election has been boycotted by
//                     several major political and armed groups. These moves have
//                     not been welcomed by reform advocates as steps towards
//                     democracy, but rather viewed as a tactical rebranding
//                     effort, perhaps, to seem more palatable to the US and the
//                     world.
//                   </p>

//                   <p className="my-3">
//                     In order to re-legitimise authoritarian rule, a new
//                     draconian electoral law was enacted right before the
//                     announcement of the upcoming national election. It entails
//                     harsh penalties, including death penalty, for those who
//                     oppose or disrupt the election. The electoral design also
//                     clearly favours Tatmadaw control. While all Lower House
//                     seats will be contested, many Upper House and regional
//                     constituencies, mostly in ethnic minority areas, will remain
//                     vacant, citing security concerns. This weakens the
//                     opposition's ability to form a presidential coalition, and
//                     eases the path for a Tatmadaw-backed president.
//                   </p>

//                   <p className="my-3">
//                     Even prior to the 2021 civil war, Myanmar operated under
//                     constrained democracy as the 2008 Constitution, practically
//                     written by the Tatmadaw, ensured that veto power and 25% of
//                     the seats remain with them along with key ministries like
//                     defence and home affairs. It also prohibited Aung San Suu
//                     Kyi, the most popular leader in Myanmar, to become the
//                     president as evident in article 59F which was specifically
//                     enacted for her.
//                   </p>

//                   <h4 className="my-3">
//                     Myanmar's Diplomatic Tightrope: Balancing China and the US
//                   </h4>

//                   <p className="my-3">
//                     The Tatmadaw is attempting to play both sides by optimising
//                     its leverage to maintain favourable ties. A Washington-based
//                     lobbying firm has signed a $3 million-per-year agreement
//                     with Myanmar to help restore ties with the US. Concurrently,
//                     General Hlaing attended the SCO summit, where he also
//                     conducted a meeting with Prime Minister Modi; China's
//                     Victory Day parade; and a series of meetings to boost trade
//                     & investment with China.
//                   </p>

//                   <p className="my-3">
//                     China's participation in Myanmar's critical mineral sector
//                     reflects prioritising economic and strategic interests
//                     without the constraints imposed by strong commitments to
//                     democratic governance, environmental protection, and labour
//                     standards. The US, too, seems to be deprioritising democracy
//                     in Myanmar, as it softens its stance on the Tatmadaw and
//                     considers options to capitalise on the attractive yet
//                     unrealistic potential opportunity of supply of critical
//                     minerals.
//                   </p>

//                   <h4 className="my-3">
//                     India's Nascent Interest in Myanmar's Rare Earths
//                   </h4>

//                   <p className="my-3">
//                     India signaled its interest in Kachin's resources when state
//                     owned India Rare Earths Limited (IREL) and Geological Survey
//                     of India officials visited the region and conducted meetings
//                     with the KIA to evaluate upstream collaboration
//                     opportunities in late 2024. An intense ongoing battle
//                     starting in December 2024 in Bhamo, a key military and
//                     logistical hub in Kachin State, has become a flashpoint,
//                     with China allegedly pressuring the KIA to halt its
//                     offensives. By August 2025, the Tatmadaw had reportedly
//                     regained control of the strategic town, located south of key
//                     mining zones. This shift may have influenced the KIA's
//                     recent willingness to consider mining partnerships with
//                     India. In a further development, as of September 2025,
//                     India's Ministry of Mines has instructed both state-owned
//                     and private firms to assess the viability of sourcing and
//                     transporting HREE samples from KIA-held territory.
//                   </p>

//                   <p className="my-3">
//                     In the short term it is difficult for India to become a
//                     midstream partner. But if processing and refining
//                     capabilities are developed in the coming years as part of
//                     the National Critical Minerals Mission along with stalled
//                     infrastructure projects like the Kaladan Multi Modal Project
//                     and India-Myanmar-Thailand Trilateral Highway, India can be
//                     a vital node in emerging supply chains in collaboration with
//                     other countries such as Japan and South Korea with which
//                     IREL is seeking partnerships with. However, the realisation
//                     of this potential depends on how the precarious situation in
//                     Myanmar unfolds and how India navigates its relationships
//                     with the fighting factions.
//                   </p>

//                   <h4 className="my-3">
//                     From Borders to Ballots: India's Stake in Myanmar's
//                     Uncertain Future
//                   </h4>

//                   <p className="my-3">
//                     India has been consistently deepening its engagement with
//                     the Tatmadaw, Prime Minister Modi discussed rare earth
//                     mining in his recent meeting with General Hlaing on the
//                     sidelines of the SCO summit. Another high-level meeting was
//                     held in New Delhi in September 2025 during the visit of
//                     Myanmar's General Ko Ko Oo, who remains under U.S. sanctions
//                     imposed by the Biden administration along with other ongoing
//                     military engagements. India has also committed to sending
//                     observers to monitor Myanmar's upcoming elections,
//                     indicating a measure of support for the electoral process.
//                   </p>

//                   <p className="my-3">
//                     India's stance on Myanmar will be shaped not only by its
//                     strategic need for critical minerals, especially as China
//                     wields dominance over its global supply and leverages it
//                     diplomatically, but also by a range of complex challenges.
//                     This includes the impact of cross-border insurgencies and
//                     narcotics flow in India's Northeast, as Myanmar is now the
//                     world's largest producer of opium, as well as internal
//                     frictions between the central and state governments over the
//                     Free Movement Regime, border fencing, and refugee policies.
//                   </p>

//                   <p className="my-3">
//                     Although India is positioned as the only functioning federal
//                     democracy in the region which makes it an appealing partner
//                     to Myanmar's pro-democracy opposition, it values stability
//                     in Myanmar over everything else. Given its close ties with
//                     the Tatmadaw, India may face credibility challenges and will
//                     need to actively invest in rebuilding political trust with
//                     any incoming democratic or partially democratic
//                     administration in Myanmar.
//                   </p>

//                   <p className="my-3">
//                     The civil war continues to flare between the Tatmadaw,
//                     plagued by desertion and low morale, and opposition forces
//                     (the shadow National Unity Government, People's Defence
//                     Forces, and ethnic armed organisations), who have come
//                     together in an unprecedented manner but have their own
//                     sub-national goals. However, the prospects of an absolute
//                     win for the pro-democracy opposition forces, where all
//                     political factions and armed groups consolidate territorial
//                     control, including major cities, and reconcile their
//                     differences to establish a cohesive and inclusive government
//                     for the entire country, remain grim. Chances of a protracted
//                     stalemate or fragmentation into autonomous regional entities
//                     are higher.
//                   </p>

//                   <Card
//                     className="p-4 mt-5 shadow-sm"
//                     style={{
//                       backgroundColor: "#fff6f6",
//                       borderRadius: "10px",
//                     }}
//                   >
//                     <div className="d-flex flex-column flex-md-row align-items-start gap-4 mb-4">
//                       <div
//                         style={{
//                           width: "100px",
//                           height: "100px",
//                           borderRadius: "50%",
//                           backgroundColor: "#e9ecef",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//                           overflow: "hidden",
//                           flexShrink: 0,
//                         }}
//                       >
//                         <img
//                           src={`${basePath}/assets/img/maitreyee.jpg`}
//                           alt="Maitrayee Jha"
//                           style={{
//                             width: "100%",
//                             height: "100%",
//                             objectFit: "cover",
//                           }}
//                           onError={(e) => {
//                             e.target.style.display = "none";
//                             e.target.nextSibling.style.display = "flex";
//                           }}
//                         />
//                         <FaUserCircle
//                           size={60}
//                           color="#2F4156"
//                           style={{ display: "none" }}
//                         />
//                       </div>

//                       {/* Bio */}
//                       <div>
//                         <div className="d-flex align-items-center mb-2 gap-2">
//                           <h5 className="mb-0 fw-semibold text-dark">
//                             Maitrayee Jha
//                           </h5>
//                           <Badge bg="success" pill>
//                             Author
//                           </Badge>
//                         </div>
//                         <p
//                           className="text-muted mb-0"
//                           style={{ lineHeight: 1.6 }}
//                         >
//                           Maitrayee Jha is a Programme Executive at the Ananta
//                           Centre. She holds a Master’s degree in Conflict
//                           Analysis and Peace Building from Jamia Millia Islamia,
//                           as well as a postgraduate diploma in Conflict
//                           Transformation and Peace Building from Lady Shri Ram
//                           College, University of Delhi. She earned her
//                           Bachelor's (Honours) degree in Philosophy, with a
//                           minor in Political Science, from Miranda House,
//                           University of Delhi.
//                         </p>
//                       </div>
//                     </div>
//                   </Card>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.section>
//     </Layout>
//   );
// }


import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function MyanmarElectionsCivilWarMinerals() {
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
            src={`${basePath}/assets/minerals_images/Rare Earth Minerals Mining.png`}
            alt="Myanmar Elections Civil War Minerals"
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
                    Votes, Violence, and Valuable Minerals: Myanmar's Elections
                    Amidst Civil War and Rare Earths Race
                  </h3>

                  <p className="my-3">
                    The world depends on China for its critical minerals needs
                    but China, in turn, depends on a remote state in war-torn
                    Myanmar. Myanmar holds one of the world's largest{" "}
                   <a href="https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-rare-earths.pdf" target="_blank"> reserves</a> of heavy
                    rare earth elements (HREE), supplying{" "}
                    <a href="https://www.cnbc.com/2025/06/24/chinas-rare-earth-dominance-myanmar-plays-a-critical-role-.html" target="_blank">57%</a> of China's total
                    rare earth imports in 2024, which are essential in the
                    production of advanced defence systems and green transition
                    technologies like electric vehicles and wind turbines. Under
                    the second Trump administration's intensified focus on
                    critical minerals, the US appears to be turning its
                    attention to the region. India, too, has shown interest, by
                    exploring partnerships with ethnic armed organisations
                    despite a strong and steadily deepening relationship with
                    the Tatmadaw (Myanmar military). Much of 2025 has been
                    eventful for Myanmar with the sudden election announcement
                    amidst an ongoing civil war and fast-paced evolution of
                    engagements with China, the US, and India.
                  </p>

                  <h4 className="my-3">
                    China's Growing Reliance on Myanmar's Rare Earths
                  </h4>

                  <p className="my-3">
                    While China dominates nearly{" "}
                    <a href="https://www.iea.org/reports/energy-technology-perspectives-2023/clean-energy-supply-chains-vulnerabilities" target="_blank">90%</a> of global
                    critical mineral processing capacity, it is less widely
                    recognised that its supply of certain HREEs, particularly
                    dysprosium and terbium, is significantly reliant on
                    resources extracted from Myanmar's Kachin State. Since 2017,
                    China's HREE <a href="https://globalwitness.org/en/campaigns/transition-minerals/fuelling-the-future-poisoning-the-present-myanmars-rare-earth-boom/" target="_blank">imports</a>{" "}
                    from Myanmar have increased exponentially because of low
                    extraction cost and lack of environmental regulations.
                  </p>

                  <p className="my-3">
                    Ever since the civil war erupted in Myanmar in 2021,
                    following a coup and crushed civil disobedience movement,
                    China's supply of HREEs have remained at risk. Following the
                    seizure of major mining areas in Kachin state by the Kachin
                    Independence Army's (KIA), an ethnic armed organisation,
                    China temporarily halted HREE imports from Myanmar by
                    closing border gates. After negotiations, imports{" "}
                    <a href="https://www.stimson.org/2025/rare-earths-and-realpolitik-future-of-mediation-myanmar/" target="_blank">resumed</a> under KIA tax
                    regulation at a fixed price in April 2025, transforming
                    Myanmar's conflict economy and giving a non-state actor
                    effective control over a key global supply corridor in a
                    volatile region.
                  </p>

                  <h4 className="my-3">
                    Trump Administration's New Approach to Myanmar Sanctions
                  </h4>

                  <p className="my-3">
                    A sequence of developments beginning in early July 2025,
                    although claimed to be{" "}
                    <a href="https://www.reuters.com/world/asia-pacific/us-lifts-some-myanmar-sanctions-says-no-link-generals-letter-trump-2025-07-25/" target="_blank" > unrelated</a> by US
                    officials, underscores a shift in American policy towards
                    Myanmar, still referred to as{" "}
                    <a href="https://www.state.gov/countries-areas/burma" target="_blank" > Burma</a> on most US
                    government platforms. General Hlaing, Myanmar's de facto
                    leader who seized power from the democratically elected
                    government, wrote a multi-page laudatory{" "}
                    <a href="https://yangonmediagroup.com/index.php/eng-section/senior-general-sends-formal-response-to-trump?utm_source=chatgpt.com" target="_blank" > letter</a> to President
                    Trump requesting for lifting of sanctions and drawing a
                    parallel between alleged electoral fraud in both countries
                    in 2020 which he claimed had led to the losses of their
                    respective parties. The letter was written in response to
                    President Trump's earlier{" "}
                    <a href="https://www.reuters.com/world/eus-von-der-leyen-had-good-exchange-with-trump-over-phone-commission-says-2025-07-07/" target="_blank" > correspondence</a>{" "}
                    regarding increased tariffs to several countries, including
                    Myanmar.
                  </p>

                  <p className="my-3">
                    Just a few weeks later, the US{" "}
                    <a href="https://www.thehindu.com/news/international/us-lifts-sanctions-on-myanmar-junta-allies-after-general-praises-trump/article69853784.ece" target="_blank"> lifted</a> sanctions on
                    close associates of the Tatmadaw. And a few days after that,
                    reports of competing propositions on sourcing HREEs from
                    Myanmar — with KIA which is presently in control of most
                    mining areas or, alternatively, with Tatmadaw — were{" "}
                    <a href="https://www.reuters.com/world/china/trump-team-hears-pitches-access-myanmars-rare-earths-2025-07-28/" target="_blank">heard</a> by the Trump
                    administration. However, this potential collaboration is
                    highly <a href="https://www.stimson.org/2025/four-reasons-why-proposals-to-source-rare-earth-minerals-from-myanmar-will-not-succeed/" target="_blank">impractical</a>{" "}
                    due to the technical and logistical challenges, such as lack
                    of processing & refining capability and transport corridors,
                    among other reasons.
                  </p>

                  <h4 className="my-3">
                    Myanmar's 2025 Vote: Legitimacy in Question
                  </h4>

                  <p className="my-3">
                    Since this communication, Myanmar authorities have nominally
                    lifted the state of emergency while retaining martial law,
                    transferring power from the State Administration Council to
                    the newly formed{" "}
                    <a href="https://www.reuters.com/world/asia-pacific/myanmar-forms-interim-government-before-election-top-general-still-charge-2025-07-31/" target="_blank">interim government</a>,
                    both headed by General Hlaing. Elections have been{" "}
                    <a href="https://www.thehindu.com/news/international/myanmar-election-to-begin-december-28-junta/article69946381.ece" target="_blank">announced</a> to begin on
                    28 December 2025 even as the civil war is ongoing, casting
                    a doubt on the feasibility of a peaceful and legitimate
                    political process. The election has been{" "}
                    <a href="https://www.thehindu.com/news/international/myanmar-ethnic-group-vows-to-block-elections-in-its-enclave/article69920403.ece" target="_blank">boycotted</a> by several
                    major political and armed groups. These moves have not been
                    welcomed by reform advocates as steps towards democracy, but
                    rather viewed as a tactical rebranding effort, perhaps, to
                    seem more palatable to the US and the world.
                  </p>

                  <p className="my-3">
                    In order to re-legitimise authoritarian rule, a new
                    draconian <a href="https://apnews.com/article/myanmar-election-democracy-law-vote-military-fc36d312dafb24a7a30e201a612239c9" target="_blank">electoral law</a> was
                    enacted right before the announcement of the upcoming
                    national election. It entails harsh penalties, including
                    death penalty, for those who oppose or disrupt the election.
                    The <a href="https://www.stimson.org/2025/myanmars-december-election-engineering-continuity-through-institutional-redesign/" target="_blank">electoral design</a> also
                    clearly favours Tatmadaw control. While all Lower House
                    seats will be contested, many Upper House and regional
                    constituencies, mostly in ethnic minority areas, will remain
                    vacant, citing security concerns. This weakens the
                    opposition's ability to form a presidential coalition, and
                    eases the path for a Tatmadaw-backed president.
                  </p>

                  <p className="my-3">
                    Even prior to the 2021 civil war, Myanmar operated under
                    constrained democracy as the{" "}
                    <a href="https://www.burmalibrary.org/docs5/Myanmar_Constitution-2008-en.pdf" target="_blank">2008 Constitution</a>,
                    practically written by the Tatmadaw, ensured that veto power
                    and 25% of the seats remain with them along with key
                    ministries like defence and home affairs. It also prohibited
                    Aung San Suu Kyi, the most popular leader in Myanmar, to
                    become the president as evident in article{" "}
                    <a target="_blank" href="https://www.irrawaddy.com/specials/untouchable-articles-myanmars-constitution.html">59F</a> which was
                    specifically enacted for her.
                  </p>

                  <h4 className="my-3">
                    Myanmar's Diplomatic Tightrope: Balancing China and the US
                  </h4>

                  <p className="my-3">
                    The Tatmadaw is attempting to play both sides by optimising
                    its leverage to maintain favourable ties. A Washington-based
                    lobbying firm has <a target="_blank" href="https://www.reuters.com/world/china/myanmar-signs-deal-with-washington-lobbyists-rebuild-us-relations-2025-08-08/">signed</a> a
                    $3 million-per-year agreement with Myanmar to help restore
                    ties with the US. Concurrently, General Hlaing attended the{" "}
                    <a target="_blank" href="https://apnews.com/article/china-military-parade-sco-putin-xi-kim-7d71b8ef9dc3bcc5de2ee192debd87c7">SCO summit</a>, where he
                    also conducted a <a target="_blank" href="https://www.mea.gov.in/press-releases.htm?dtl/40073/Prime_Minister_meets_with_Sr_Gen_Min_Aung_Hlaing_Chairman_of_the_State_Security_and_Peace_Commission_of_Myanmar_on_the_sidelines_of_the_SCO_Summit_Aug">meeting</a> with
                    Prime Minister Modi; China's Victory Day{" "}
                    <a target="_blank" href="https://www.reuters.com/world/china/factbox-who-were-foreign-leaders-chinas-military-parade-2025-09-03/">parade</a>; and a series
                    of <a target="_blank" href="https://www.irrawaddy.com/news/burma/doubts-cast-on-myanmar-junta-bosss-pledges-to-chinese-investors.html">meetings</a> to boost
                    trade & investment with China.
                  </p>

                  <p className="my-3">
                    China's participation in Myanmar's critical mineral sector
                    reflects <a target="_blank" href="https://www.cnbc.com/2025/06/24/chinas-rare-earth-dominance-myanmar-plays-a-critical-role-.html">prioritiasing</a> economic
                    and strategic interests without the constraints imposed by
                    strong commitments to democratic governance, environmental
                    protection, and labour standards. The US, too, seems to be{" "}
                    <a target="_blank" href="https://foreignpolicy.com/2025/08/21/myanmar-us-trump-junta-critical-minerals-war-china-min-aung-hlaing/">deprioritising</a>{" "}
                    democracy in Myanmar, as it softens its stance on the
                    Tatmadaw and considers options to capitalise on the
                    attractive yet unrealistic potential opportunity of supply
                    of critical minerals.
                  </p>

                  <h4 className="my-3">
                    India's Nascent Interest in Myanmar's Rare Earths
                  </h4>

                  <p className="my-3">
                    India signaled its interest in Kachin's resources when state
                    owned India Rare Earths Limited (IREL) and Geological Survey
                    of India officials <a target="_blank" href="https://www.reuters.com/world/asia-pacific/myanmar-rebels-disrupt-china-rare-earth-trade-sparking-regional-scramble-2025-03-28/">visited</a> the
                    region and conducted <a target="_blank" href="https://economictimes.indiatimes.com/news/india/myanmar-seeks-to-expand-investment-trade-ties-with-india/articleshow/118460828.cms?utm_source=chatgpt.com">meetings</a> with
                    the KIA to evaluate upstream collaboration opportunities in
                    late 2024. An intense ongoing battle starting in December
                    2024 in Bhamo, a key military and logistical hub in Kachin
                    State, has become a flashpoint, with China allegedly{" "}
                    <a href="https://www.reuters.com/world/china/china-risks-global-heavy-rare-earth-supply-stop-myanmar-rebel-victory-2025-07-08/" target="_blank">pressuring</a> the KIA to
                    halt its offensives. By August 2025, the Tatmadaw had{" "}
                    <a target="_blank" href="https://www.irrawaddy.com/news/war-against-the-junta/myanmar-junta-retakes-bhamo-battalion-hq.html">reportedly</a> regained
                    control of the strategic town, located south of key mining
                    zones. This shift may have influenced the KIA's recent
                    willingness to consider mining partnerships with India. In a
                    further <a target="_blank" href="https://www.reuters.com/world/china/india-explores-rare-earth-deal-with-myanmar-rebels-after-chinese-curbs-2025-09-10/">development</a>, as of
                    September 2025, India's Ministry of Mines has instructed
                    both state-owned and private firms to assess the viability
                    of sourcing and transporting HREE samples from KIA-held
                    territory.
                  </p>

                  <p className="my-3">
                    In the short term it is difficult for India to become a
                    midstream partner. But if processing and refining
                    capabilities are developed in the coming years as part of
                    the National Critical Minerals Mission along with stalled
                    infrastructure projects like the Kaladan Multi Modal Project
                    and India-Myanmar-Thailand Trilateral Highway, India can be
                    a vital node in emerging supply chains in collaboration with
                    other countries such as Japan and South Korea with which
                    IREL is <a target="_blank" href="https://www.reuters.com/world/china/indian-miner-irel-seeks-japan-south-korea-partnerships-rare-earth-magnet-2025-08-14/">seeking partnerships</a> with.
                    However, the realisation of this potential depends on how
                    the precarious situation in Myanmar unfolds and how India
                    navigates its relationships with the fighting factions.
                  </p>

                  <h4 className="my-3">
                    From Borders to Ballots: India's Stake in Myanmar's
                    Uncertain Future
                  </h4>

                  <p className="my-3">
                    India has been consistently deepening its engagement with
                    the Tatmadaw, Prime Minister Modi{" "}
                    <a target="_blank" href="https://www.pmindia.gov.in/en/news_updates/pm-meets-with-sr-gen-min-aung-hlaing-chairman-of-the-state-security-and-peace-commission-of-myanmar-on-the-sidelines-of-the-sco-summit/?comment=disable">discussed</a> rare earth
                    mining in his recent meeting with General Hlaing on the
                    sidelines of the SCO summit. Another high-level{" "}
                    <a target="_blank" href="https://www.tribuneindia.com/news/world/upendra-dwivedi-meets-myanmar-army-commander-discusses-ways-to-advance-bilateral-defence-cooperation/amp">meeting</a> was held in
                    New Delhi in September 2025 during the visit of Myanmar's
                    General Ko Ko Oo, who remains under U.S. sanctions imposed
                    by the Biden administration along with other ongoing
                    military engagements. India has also{" "}
                    <a target="_blank" href="https://www.reuters.com/world/china/india-backs-myanmar-militarys-election-plan-state-media-says-2025-09-01/">committed</a> to sending
                    observers to monitor Myanmar's upcoming elections,
                    indicating a measure of support for the electoral process.
                  </p>

                  <p className="my-3">
                    India's stance on Myanmar will be shaped not only by its
                    strategic need for critical minerals, especially as China
                    wields dominance over its global supply and leverages it
                    diplomatically, but also by a range of complex challenges.
                    This includes the impact of cross-border insurgencies and
                    narcotics flow in India's Northeast, as Myanmar is now the
                    world's largest <a target="_blank" href="https://news.un.org/en/story/2023/12/1144702">producer</a> of
                    opium, as well as internal <a target="_blank" href="https://www.newindianexpress.com/nation/2025/Mar/16/mizoram-body-urges-shah-to-reconsider-decision-to-fence-india-myanmar-border-lift-fmr-2">frictions</a> between
                    the central and state governments over the Free Movement
                    Regime, border fencing, and refugee policies.
                  </p>

                  <p className="my-3">
                    Although India is positioned as the only functioning federal
                    democracy in the region which makes it an appealing partner
                    to Myanmar's pro-democracy opposition, it values stability
                    in Myanmar over everything else. Given its close ties with
                    the Tatmadaw, India may face credibility challenges and will
                    need to actively invest in rebuilding political trust with
                    any incoming democratic or partially democratic
                    administration in Myanmar.
                  </p>

                  <p className="my-3">
                    The civil war continues to flare between the Tatmadaw,
                    plagued by desertion and low morale, and opposition forces
                    (the shadow National Unity Government, People's Defence
                    Forces, and ethnic armed organisations), who have come
                    together in an unprecedented manner but have their own
                    sub-national goals. However, the prospects of an absolute
                    win for the pro-democracy opposition forces, where all
                    political factions and armed groups consolidate territorial
                    control, including major cities, and reconcile their
                    differences to establish a cohesive and inclusive government
                    for the entire country, remain grim. Chances of a protracted
                    stalemate or fragmentation into autonomous regional entities
                    are higher.
                  </p>

                  <Card
                    className="p-4 mt-5 shadow-sm"
                    style={{
                      backgroundColor: "#fff6f6",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="d-flex flex-column flex-md-row align-items-start gap-4 mb-4">
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
                          overflow: "hidden",
                          flexShrink: 0,
                        }}
                      >
                        <img
                          src={`${basePath}/assets/img/maitreyee.jpg`}
                          alt="Maitrayee Jha"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                        <FaUserCircle
                          size={60}
                          color="#2F4156"
                          style={{ display: "none" }}
                        />
                      </div>

                      {/* Bio */}
                      <div>
                        <div className="d-flex align-items-center mb-2 gap-2">
                          <h5 className="mb-0 fw-semibold text-dark">
                            Maitrayee Jha
                          </h5>
                          <Badge bg="success" pill>
                            Author
                          </Badge>
                        </div>
                        <p
                          className="text-muted mb-0"
                          style={{ lineHeight: 1.6 }}
                        >
                          Maitrayee Jha is a Programme Executive at the Ananta
                          Centre. She holds a Master's degree in Conflict
                          Analysis and Peace Building from Jamia Millia Islamia,
                          as well as a postgraduate diploma in Conflict
                          Transformation and Peace Building from Lady Shri Ram
                          College, University of Delhi. She earned her
                          Bachelor's (Honours) degree in Philosophy, with a
                          minor in Political Science, from Miranda House,
                          University of Delhi.
                        </p>
                      </div>
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