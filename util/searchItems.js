import { whatsnew } from "@/util/mineralData";

export const authors = [
  {
    name: "Ayan Barman",
    category: "Sectors & Strategic Analysis",
    routes: [
      { path: "/agriculture", label: "Mineral Security in India's Agriculture Sector", type: "sector" },
      { path: "/automobile", label: "Automobile Industry and Battery Applications", type: "sector" },
      { path: "/renewable-energy", label: "Critical Minerals for India's Renewable Energy Transition", type: "sector" },
      {
        path: "/supply-chain/closing-loop",
        label: "Closing the Loop: Strengthening India's Battery Recycling Supply Chains",
        type: "article",
      },
      {
        path: "/supply-chain/magnets-money",
        label: "Magnets, Money, and Momentum: India's Rare-Earth PLI Push",
        type: "article",
      },
      {
        path: "/supply-chain/rare-earth-elements",
        label: "Rare Earth Elements Just Got Rarer",
        type: "article",
      },
      {
        path: "/supply-chain/asia-playbook",
        label: "From Reserves to Riches: Asia's Critical Minerals Playbook and India's Role",
        type: "article",
      },
      {
        path: "/supply-chain/mining-royalty-rates",
        label: "Royalty Reform for Strategic Minerals: Clearer prices but not a silver bullet",
        type: "article",
      },
      {
        path: "/supply-chain/practical-triangle",
        label: "A practical triangle: What the new Australia-Canada-India Tech Pact means for Critical Minerals",
        type: "article",
      },
      {
        path: "/supply-chain/future-of-venezuela",
        label: "The Future of Venezuelan Critical Minerals",
        type: "article",
      },
      {
        path: "/supply-chain/greenland-gambit",
        label: "The Greenland Gambit: Strategic Minerals and Washington’s Return to the Arctic",
        type: "article",
      },
      {
        path: "/supply-chain/mother-of-all-deals",
        label: "The Mother of All Deals and Critical Minerals",
        type: "article",
      },
      {
        path: "/supply-chain/strait-of-hourmous",
        label: "Strait Flush: Pentagon's Rush and India's ICET Mineral Play",
        type: "article",
      },
      {
        path: "/supply-chain/helium",
        label: "Helium Under Pressure: Invisible Gas, Visible Crisis",
        type: "article",
      },
      {
        path: "/supply-chain/thorium",
        label: "Thorium: India’s Long Game in Nuclear Power",
        type: "article",
      },
    ],
  },
  {
    name: "Prerna Bountra",
    category: "Sectors & Research",
    routes: [
      {
        path: "/supply-chain/critical-pathway",
        label: "Critical Pathways: Building India's Mineral Value Chain",
        type: "article",
      },
      {
        path: "/defence-and-aerospace",
        label: "Mineral Security in India's Defence and Aerospace Supply Chain",
        type: "sector",
      },
    ],
  },
  {
    name: "T K Arun",
    category: "Strategic Analysis",
    routes: [
      {
        path: "/supply-chain/rare-earth-strategy",
        label: "Breaking China's stranglehold over rare earth supplies",
        type: "article",
      },
    ],
  },
  {
    name: "Keerthi Lanka & Shivangi Aggarwal",
    category: "Industry Analysis",
    routes: [
      {
        path: "/supply-chain/recycling-e-waste",
        label: "The Missing Discourse in CRM Recycling from E-Waste",
        type: "article",
      },
    ],
  },
  {
    name: "Maitrayee Jha",
    category: "Industry Analysis",
    routes: [
      {
        path: "/supply-chain/myanmar-elections-civil-war-minerals",
        label: "Votes, Violence, and Valuable Minerals: Myanmar's Elections Amidst Civil War and Rare Earths Race",
        type: "article",
      },
      {
        path: "/supply-chain/drones",
        label: "Drones and Dependency: How Critical Minerals Shape Combat Power",
        type: "article",
      },
    ],
  },
  {
    name: "Mithilesh Phadke",
    category: "Industry Analysis",
    routes: [
      {
        path: "/supply-chain/beneath-the-surface",
        label: "Beneath the Surface: India’s Ambition in Deep-Sea Minerals",
        type: "article",
      },
      {
        path: "/supply-chain/midstream-gap",
        label: "The Midstream Gap: India’s Strategic Vulnerability in Critical Mineral Processing and Refining",
        type: "article",
      },
      {
        path: "/supply-chain/securing-the-future",
        label: "Securing the Future : How India and Europe Can Co-Create Resilient Critical Mineral Supply Chains",
        type: "article",
      },
      {
        path: "/supply-chain/jaishankar",
        label: "Jaishankar in Washington: Critical Minerals and the Hard Geometry of Supply Chains",
        type: "article",
      },
      {
        path: "/supply-chain/india_chile_critical_minerals",
        label: "India Chile Trade Framework and Critical Minerals: What Chile Leads In, Who Operates the Assets, and Lessons for India",
        type: "article",
      },
      {
        path: "/supply-chain/critical-minerals-fertilizers",
        label: "Critical Minerals in Fertilizers, Challenges of Food Security and Road Ahead",
        type: "article",
      },
      {
        path: "/supply-chain/quantum-computing",
        label: "Quantum Computing and the Critical Mineral Race",
        type: "article",
      },
      {
        path: "/supply-chain/dysporium-and-teribium",
        label: "Dysprosium and Terbium for India’s Net Zero Transition",
        type: "article",
      },
    ],
  },
  {
    name: "Aditya Pareek",
    category: "Industry Analysis",
    routes: [
      {
        path: "/supply-chain/indias-prospective",
        label: "India's prospective role in Pax Silica's evolution and US micro-refinery strategy",
        type: "article",
      },
      {
        path: "/supply-chain/karnatak",
        label: "Karnataka bets on MiniMines for processing complex",
        type: "article",
      },
      {
        path: "/supply-chain/india-latin",
        label: "India-Latin America Critical Minerals Agreement",
        type: "article",
      },
      {
        path: "/supply-chain/union-budget",
        label: "Union Budget Positions India in the Global Supply Chain with Rare Earth Corridor",
        type: "article",
      },
      {
        path: "/supply-chain/US-Japan-critical",
        label: "How the US-Japan critical minerals framework is a template for India",
        type: "article",
      },
      {
        path: "/supply-chain/resource-nationalism",
        label: "Resource nationalism's grip on global critical minerals supply chains",
        type: "article",
      },
      {
        path: "/supply-chain/canberra-bet",
        label: "Canberra's $5 Billion Bet on a Minerals Alliance, and the Energy Crisis Sharpening Its Logic",
        type: "article",
      },
      {
        path: "/supply-chain/venezeula",
        label: "A path for Indian state firms in US play for Venezuela's Critical Minerals",
        type: "article",
      },
      {
        path: "/supply-chain/private-military-company",
        label: "How private military companies affect the critical minerals supply chain",
        type: "article",
      },
      {
        path: "/supply-chain/multilateral-lenders",
        label: "How multilateral lenders are moving to reshape Asia's critical minerals value chain",
        type: "article",
      },
      {
        path: "/supply-chain/g7",
        label: "The G7’s new critical minerals action plan",
        type: "article",
      },
      {
        path: "/supply-chain/pentagon-critical-minerals",
        label: "The Pentagon’s critical minerals rush meets foreign civil society pressure",
        type: "article",
      },
      {
        path: "/supply-chain/minerals-agreement",
        label: "India’s string of critical minerals agreements and the logic behind them",
        type: "article",
      },
      {
        path: "/supply-chain/india-japan",
        label: "Japan and India to boost cooperation on critical minerals value chain",
        type: "article",
      },
      {
        path: "/supply-chain/india-germany",
        label: "India-Germany critical minerals cooperation",
        type: "article",
      },
      {
        path: "/supply-chain/india-uzbekistan",
        label: "Central Asia and Uzbekistan pop up on India’s critical minerals agenda",
        type: "article",
      },
      {
        path: "/supply-chain/india-seeks-copper",
        label: "India seeks Copper in Zambia",
        type: "article",
      },
    ],
  },
];

export const slides = [
  {
    "id": "agriculture",
    "image": "/assets/sectors_images/agriculture.jpg",
    "title": "Mineral Security in India's Agriculture Sector",
    "link": "/agriculture",
    "content": "India's agricultural sector—on which over 60% of the population depends directly or indirectly— relies heavily on the uninterrupted supply of mineral-based fertilizers.",
    "author": "Prerna Bountra",
    "date": "July 2025",
    "category": "Research Report"
  },
  {
    "id": "automobile",
    "image": "/assets/sectors_images/automobile.jpg",
    "title": "Automobile Industry and Battery Applications",
    "link": "/automobile",
    "content": "The rapid shift toward electric vehicles (EVs) and next-generation battery technologies has made the automotive sector highly dependent on a secure, affordable supply of critical minerals—especially lithium, nickel, cobalt, graphite, and rare earth elements (REEs).",
    "author": "Ayan Barman",
    "date": "July 2025",
    "category": "Research Report"
  },
  {
    "id": "defence-and-aerospace",
    "image": "/assets/sectors_images/defence.jpg",
    "title": "Mineral Security in India's Defence and Aerospace Supply Chain",
    "link": "/defence-and-aerospace",
    "content": "The defence and aerospace sectors represent the technological apex of India's industrial ambitions, underpinning national security, regional power projection, and strategic autonomy.",
    "author": "Prerna Bountra",
    "date": "July 2025",
    "category": "Research Report"
  },
  {
    "id": "renewable-energy",
    "image": "/assets/sectors_images/renewable.jpg",
    "title": "Critical Minerals for India's Renewable Energy Transition",
    "link": "/renewable-energy",
    "content": "The renewable energy sector is increasingly vulnerable to supply, pricing, and processing challenges concerning key transition minerals—copper, platinum group metals (PGMs), and tellurium.",
    "author": "Ayan Barman",
    "date": "July 2025",
    "category": "Research Report"
  },
  {
    "id": 1,
    "image": "/assets/minerals_images/battery.jpg",
    "title": "Critical Pathways: Building India's Mineral Value Chain",
    "link": "/supply-chain/critical-pathway",
    "content": "India's ambition for critical mineral independence rests on a complex sequence of capabilities that span the full length of the value chain.",
    "author": "Prerna Bountra",
    "date": "July 2025",
    "category": "Research Report"
  },
  {
    "id": 2,
    "image": "/assets/minerals_images/closing_loop.jpg",
    "title": "Closing the Loop: Strengthening India's Battery Recycling Supply Chains",
    "link": "/supply-chain/closing-loop",
    "content": "This strategic report analyzes India's battery recycling ecosystem and its role in securing critical mineral supply chains.",
    "author": "Ayan Barman",
    "date": "July 2025",
    "category": "Research Report"
  },
  {
    "id": 3,
    "image": "/assets/minerals_images/colorful-baubles.jpg",
    "title": "Breaking China's stranglehold over rare earth supplies",
    "link": "/supply-chain/rare-earth-strategy",
    "content": "Chinese supplies of rare-earth doped magnets to India have not resumed, weeks after a political agreement had been reached to resume shipments to India.",
    "author": "T K Arun",
    "date": "September 2025",
    "category": "Strategic Analysis"
  },
  {
    "id": 4,
    "image": "/assets/minerals_images/magnet.jpg",
    "title": "Magnets, Money, and Momentum: India's Rare-Earth PLI Push",
    "link": "/supply-chain/magnets-money",
    "content": "In October 2025, the Indian Finance Ministry cleared a Rs. 7,300–7,350 crore (USD 880–885 million) Production-Linked Incentive (PLI) to establish domestic sintered...",
    "author": "Ayan Barman",
    "date": "October 2025",
    "category": "Strategic Analysis"
  },
  {
    "id": 5,
    "image": "/assets/minerals_images/rare_earth_minerals.jpg",
    "title": "Rare Earth Elements Just Got Rarer",
    "link": "/supply-chain/rare-earth-elements",
    "content": "The Ministry of Commerce of the People's Republic of China (MOFCOM) published two formal announcements expanding export controls related to rare-earth elements (REEs) and REE-related technologies.",
    "author": "Ayan Barman",
    "date": "October 2025",
    "category": "Strategic Analysis"
  },
  {
    "id": 6,
    "image": "/assets/minerals_images/e-waste.png",
    "title": "The Missing Discourse in CRM Recycling from E-Waste",
    "link": "/supply-chain/recycling-e-waste",
    "content": "The recovery of critical raw materials (CRMs) from electronic waste has drawn significant attention in discussions on the circular economy and sustainable development.",
    "author": "Keerthi Lanka & Shivangi Aggarwal",
    "date": "October 2025",
    "category": "Industry Analysis"
  },
  {
    "id": 10,
    "image": "/assets/minerals_images/royalty-rates.jpg",
    "title": "Royalty Reform for Strategic Minerals: Clearer prices but not a silver bullet",
    "link": "/supply-chain/mining-royalty-rates",
    "content": "On 12 November 2025, the Union Cabinet revised the method of charging royalties on four minerals the government designates as ‘critical’ for the clean-energy transition: graphite, caesium, rubidium, and zirconium.",
    "author": "Ayan Barman",
    "date": "November 2025",
    "category": "Industry Analysis"
  },
  {
    "id": 9,
    "image": "/assets/minerals_images/deep-sea-minerals.jpg",
    "title": "Beneath the Surface: India’s Ambition in Deep-Sea Minerals",
    "link": "/supply-chain/beneath-the-surface",
    "content": "The global shift from fossil fuels to clean energy has sharply increased the demand for critical minerals.",
    "author": "Mithilesh Phadke",
    "date": "November 2025",
    "category": "Industry Analysis"
  },
  {
    "id": 14,
    "image": "/assets/minerals_images/pax.jpg",
    "title": "India's prospective role in Pax Silica's evolution and US micro-refinery strategy",
    "link": "/supply-chain/indias-prospective",
    "content": "Two recent developments in the US’s quest to derisk its defence critical minerals inputs from China have direct implications for India.",
    "author": "Aditya Pareek",
    "date": "December 2025",
    "category": "Industry Analysis"
  },
  {
    "id": 8,
    "image": "/assets/minerals_images/asia-playbook.jpg",
    "title": "From Reserves to Riches: Asia's Critical Minerals Playbook and India's Role",
    "link": "/supply-chain/asia-playbook",
    "content": "India has ambitious plans to turn its rich mineral reserves into a strategic strength.",
    "author": "Ayan Barman",
    "date": "November 2025",
    "category": "Industry Analysis"
  },
  {
    "id": 7,
    "image": "/assets/minerals_images/Rare Earth Minerals Mining.png",
    "title": "Votes, Violence, and Valuable Minerals: Myanmar's Elections Amidst Civil War and Rare Earths Race",
    "link": "/supply-chain/myanmar-elections-civil-war-minerals",
    "content": "The world depends on China for its critical minerals needs but China, in turn, depends on a remote state in war-torn Myanmar.",
    "author": "Maitrayee Jha",
    "date": "November 2025",
    "category": "Industry Analysis"
  },
  {
    "id": 12,
    "image": "/assets/minerals_images/midstream.jpg",
    "title": "The Midstream Gap: India’s Strategic Vulnerability in Critical Mineral Processing and Refining",
    "link": "/supply-chain/midstream-gap",
    "content": "The supply chain for critical minerals generally involves exploration, mining (extraction), processing, refining, and then manufacturing into end products.",
    "author": "Mithilesh Phadke",
    "date": "December 2025",
    "category": "Industry Analysis"
  },
  {
    "id": 10,
    "image": "/assets/minerals_images/karnatak.jpg",
    "title": "Karnataka bets on MiniMines for processing complex",
    "link": "/supply-chain/karnatak",
    "content": "On November 28 2025, Karnataka signed a memorandum of understanding with Bengaluru based startup MiniMines Cleantech Solutions.",
    "author": "Aditya Pareek",
    "date": "December 2025",
    "category": "Industry Analysis"
  },
  {
    "id": 11,
    "image": "/assets/minerals_images/practical-triangle.jpg",
    "title": "A practical triangle: What the new Australia-Canada-India Tech Pact means for Critical Minerals",
    "link": "/supply-chain/practical-triangle",
    "content": "Last month the governments of India, Canada and Australia launched a formal trilateral called the Australia–Canada–India Technology and Innovation (ACITI) Partnership at the G20 Summit in Johannesburg.",
    "author": "Ayan Barman",
    "date": "December 2025",
    "category": "Industry Analysis"
  },
  {
    "id": 18,
    "image": "/assets/minerals_images/indai-europe.png",
    "title": "The Mother of All Deals and Critical Minerals",
    "link": "/supply-chain/mother-of-all-deals",
    "content": "Global critical-raw-materials (CRM) supply chains today are thin, concentrated and geopolitically charged.",
    "author": "Ayan Barman",
    "date": "January 2026",
    "category": "Industry Analysis"
  },
  {
    "id": 17,
    "image": "/assets/minerals_images/secure.jpg",
    "title": "Securing the Future : How India and Europe Can Co-Create Resilient Critical Mineral Supply Chains",
    "link": "/supply-chain/securing-the-future",
    "content": "As India and the European Union (EU) edge closer to new trade and investment agreements, including a long-awaited free trade pact and investment protection deal, there is growing recognition that critical minerals must form a pillar of their economic partnership.",
    "author": "Mithilesh Phadke",
    "date": "January 2026",
    "category": "Industry Analysis"
  },
  {
    "id": 16,
    "image": "/assets/minerals_images/greenlandGambit.jpg",
    "title": "The Greenland Gambit: Strategic Minerals and Washington’s Return to the Arctic",
    "link": "/supply-chain/greenland-gambit",
    "content": "The United States’ interest in Greenland is long-standing and well-documented.",
    "author": "Ayan Barman",
    "date": "January 2026",
    "category": "Industry Analysis"
  },
  {
    "id": 15,
    "image": "/assets/minerals_images/venezeula.jpg",
    "title": "The Future of Venezuelan Critical Minerals",
    "link": "/supply-chain/future-of-venezuela",
    "content": "The US strikes on Venezuela in early January 2026, coined as 'Operation Absolute Resolve,' and the subsequent US assertion of control over Venezuelan oil flows, have abruptly changed the risk calculus in Caracas.",
    "author": "Ayan Barman",
    "date": "January 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "latin",
    "image": "/assets/minerals_images/india-latin.jpg",
    "title": "India-Latin America Critical Minerals Agreement",
    "link": "/supply-chain/india-latin",
    "content": "India’s search for critical minerals is entering a more assertive diplomatic phase, and Latin America is becoming central to that effort.",
    "author": "Aditya Pareek",
    "date": "February 2026",
    "category": "Industry Analysis"
  },
  {
    "id": 20,
    "image": "/assets/minerals_images/jaishankar.jpg",
    "title": "Jaishankar in Washington: Critical Minerals and the Hard Geometry of Supply Chains",
    "link": "/supply-chain/jaishankar",
    "content": "External Affairs Minister S. Jaishankar’s latest visit to Washington comes at a structural inflection point in global economic geopolitics.",
    "author": "Mithilesh Phadke",
    "date": "February 2026",
    "category": "Industry Analysis"
  },
  {
    "id": 19,
    "image": "/assets/minerals_images/budget2026.jpeg",
    "title": "Union Budget Positions India in the Global Supply Chain with Rare Earth Corridor",
    "link": "/supply-chain/union-budget",
    "content": "In the Union Budget for the financial year 2026–2027, the Government of India has articulated a clear strategy aimed at integrating the country more deeply into global supply and value chains for critical minerals.",
    "author": "Aditya Pareek",
    "date": "February 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "jdk",
    "image": "/assets/minerals_images/india-chile.jpg",
    "title": "India Chile Trade Framework and Critical Minerals: What Chile Leads In, Who Operates the Assets, and Lessons for India",
    "link": "/supply-chain/india_chile_critical_minerals",
    "content": "The recently expanded India–Chile trade framework marks a significant evolution in bilateral economic engagement, particularly in the context of critical minerals.",
    "author": "Mithilesh Phadke",
    "date": "27 February 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "df",
    "image": "/assets/minerals_images/helium.jpeg",
    "title": "Helium Under Pressure: Invisible Gas, Visible Crisis",
    "link": "/supply-chain/helium",
    "content": "The Iran Crisis and West Asian escalation have triggered an unlikely but critical supply shock: helium.",
    "author": "Ayan Barman",
    "date": "March 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "def",
    "image": "/assets/minerals_images/us-japan.jpeg",
    "title": "How the US-Japan critical minerals framework is a template for India",
    "link": "/supply-chain/US-Japan-critical",
    "content": "When Washington and Tokyo formalised their critical minerals framework agreement in October 2025, the immediate commentary focused on what it meant for the bilateral relationship and what it signalled to Beijing.",
    "author": "Aditya Pareek",
    "date": "March 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "dfd",
    "image": "/assets/minerals_images/strait-of-hourmous.jpg",
    "title": "Strait Flush: Pentagon's Rush and India's ICET Mineral Play",
    "link": "/supply-chain/strait-of-hourmous",
    "content": "The Pentagon's urgent request for 13 critical minerals, including tungsten, yttrium, and germanium, made just hours before military strikes on Iran in early March 2026, has exposed a stark reality, i.e. one of the world's largest military powers faces acute supply- chain vulnerabilities during ‘Operation Epic Fury .’ For India, the crisis arrives at a precarious moment.",
    "author": "Ayan Barman",
    "date": "March 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "df",
    "image": "/assets/minerals_images/resource-nationalism.jpg",
    "title": "Resource nationalism's grip on global critical minerals supply chains",
    "link": "/supply-chain/resource-nationalism",
    "content": "In an era of green energy transition, critical minerals such as lithium, cobalt, nickel, graphite, and Rare Earth Elements(REE)s fuel everything from Electric Vehicle(EV) batteries to wind turbines and semiconductors.",
    "author": "Aditya Pareek",
    "date": "March 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "drones",
    "image": "/assets/minerals_images/drones.webp",
    "title": "Drones and Dependency: How Critical Minerals Shape Combat Power",
    "link": "/supply-chain/drones",
    "content": "Drones have moved beyond the role of peripheral tools to become a core feature of contemporary warfare.",
    "author": "Maitrayee Jha",
    "date": " April, 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "canberra-bet",
    "image": "/assets/minerals_images/canberra.jpg",
    "title": "Canberra's $5 Billion Bet on a Minerals Alliance, and the Energy Crisis Sharpening Its Logic",
    "link": "/supply-chain/canberra-bet",
    "content": "The signing of the US-Australia Framework for Securing Supply in the Mining and Processing of Critical Minerals and Rare Earths in October 2025 was widely read as a strategic hedge against China's dominance in mineral processing.",
    "author": "Aditya Pareek",
    "date": " April, 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "lf",
    "image": "/assets/minerals_images/thorium.jpg",
    "title": "Thorium: India’s Long Game in Nuclear Power",
    "link": "/supply-chain/thorium",
    "content": "India is talking about thorium again as the country’s nuclear strategy is moving from aspiration to implementation.",
    "author": "Ayan Barman",
    "date": " April, 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "dgf",
    "image": "/assets/minerals_images/venezuela-flag.jpg",
    "title": "A path for Indian state firms in US play for Venezuela's Critical Minerals",
    "link": "/supply-chain/venezeula",
    "content": "The conversation about US-Venezuela cooperation in critical minerals has so far been dominated by American and Canadian mining companies primarily because they are geographically the closest processing and production linked entities.",
    "author": "Aditya Pareek",
    "date": " April, 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "private-military-company",
    "image": "/assets/minerals_images/private-military.webp",
    "title": "How private military companies affect the critical minerals supply chain",
    "link": "/supply-chain/private-military-company",
    "content": "The places richest in critical minerals needed to power the global high-tech industries are also among the most dangerous to operate in. Cobalt in the eastern Democratic Republic of Congo(DRC), gold across the Sahel, tantalum threading through Central Africa's fractured states.",
    "author": "Aditya Pareek",
    "date": "May, 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "critical-minerals-fertilizers",
    "image": "/assets/minerals_images/food-security.jpeg",
    "title": "Critical Minerals in Fertilizers, Challenges of Food Security and Road Ahead",
    "link": "/supply-chain/critical-minerals-fertilizers",
    "content": "Food security has always been central to India’s national stability, economic resilience, and strategic autonomy.",
    "author": "Mithilesh Phadke",
    "date": "May, 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "multilateral-lenders",
    "image": "/assets/minerals_images/multilateral-lenders.webp",
    "title": "How multilateral lenders are moving to reshape Asia's critical minerals value chain",
    "link": "/supply-chain/multilateral-lenders",
    "content": "The global race for critical minerals until 2010 when China and Japan had a brief dispute over the supply of Rare Earth Elements(REE)s, had been a story told almost entirely in extraction terms.",
    "author": "Aditya Pareek",
    "date": "May, 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "g7",
    "image": "/assets/minerals_images/g7.webp",
    "title": "The G7’s new critical minerals action plan",
    "link": "/supply-chain/g7",
    "content": "At their summit’s second and final day on June 17, 2026, the leaders of the Group of Seven (G7) nations adopted a document laying out the titular Critical Minerals Action Plan, which sets out a shared commitment to rethinking how supply chain relevant critical minerals are found, extracted, processed, and traded.",
    "author": "Aditya Pareek",
    "date": "June, 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "quantum-computing",
    "image": "/assets/minerals_images/quantum-computers.webp",
    "title": "Quantum Computing and the Critical Mineral Race",
    "link": "/supply-chain/quantum-computing",
    "content": "Quantum computing is becoming strategically important for the same reason semiconductors did—not because it will replace every existing computer, but because it could become decisive infrastructure for a narrow set of high-value tasks in science ...",
    "author": "Mithilesh Phadke",
    "date": "June, 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "pentagon-critical-minerals",
    "image": "/assets/minerals_images/pentagon-critical-merals.webp",
    "title": "The Pentagon’s critical minerals rush meets foreign civil society pressure",
    "link": "/supply-chain/pentagon-critical-minerals",
    "content": "The US Department of War is confronting a potential supply chain crisis as its involvement in the combat operations in the West Asia region continues to drag on and its arsenal and inventory requires replacements for expended material.",
    "author": "Aditya Pareek",
    "date": "June, 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "minerals-agreement",
    "image": "/assets/minerals_images/minerals-agreement.webp",
    "title": "India’s string of critical minerals agreements and the logic behind them",
    "link": "/supply-chain/minerals-agreement",
    "content": "In 2026, India's push to secure critical mineral supplies gained fresh momentum with a string of bilateral agreements and deals being struck with the United States, Australia, Brazil, Japan, France, and Indonesia.",
    "author": "Aditya Pareek",
    "date": "July, 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "dysporium-and-teribium",
    "image": "/assets/minerals_images/dysporium.webp",
    "title": "Dysprosium and Terbium for India’s Net Zero Transition",
    "link": "/supply-chain/dysporium-and-teribium",
    "content": "From India’s perspective, dysprosium and terbium are not simply “rare earths”; they are the narrowest technical chokepoints inside the permanent-magnet supply chain that underpins high-efficiency motors and generators. ",
    "author": "Mithilesh Phadke",
    "date": "July, 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "india-japan",
    "image": "/assets/minerals_images/india-japan.webp",
    "title": "Japan and India to boost cooperation on critical minerals value chain",
    "link": "/supply-chain/india-japan",
    "content": "The Geological Survey of India (GSI) and Japan's Japan Organisation for Metals and Energy Security (JOGMEC), concluded an agreement around the 16th India-Japan Annual Summit in New Delhi on July 2 2026.",
    "author": "Aditya Pareek",
    "date": "July, 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "india-germany",
    "image": "/assets/minerals_images/india-germany.webp",
    "title": "India-Germany critical minerals cooperation",
    "link": "/supply-chain/india-germany",
    "content": "India permitted 100% foreign direct investment in mineral exploration and mining through the automatic route after the country’s Ministry of Mines introduced a dedicated exploration licence for deep-seated and critical minerals in July 2023.",
    "author": "Aditya Pareek",
    "date": "August, 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "india-uzbekistan",
    "image": "/assets/minerals_images/india-uzbekistan.webp",
    "title": "Central Asia and Uzbekistan pop up on India’s critical minerals agenda",
    "link": "/supply-chain/india-uzbekistan",
    "content": "Central Asia has occupied a curious position in India’s foreign policy thinking for three decades since the fall of the Soviet Union.",
    "author": "Aditya Pareek",
    "date": "August, 2026",
    "category": "Industry Analysis"
  },
  {
    "id": "india-seeks-copper",
    "image": "/assets/minerals_images/india-uzbekistan.webp",
    "title": "India seeks Copper in Zambia",
    "link": "/supply-chain/india-seeks-copper",
    "content": "India’s search for critical minerals partnerships is not only international but also trans continental, with no one geography being central to its vision.",
    "author": "Aditya Pareek",
    "date": "September, 2026",
    "category": "Industry Analysis"
  }
];

export const mineralPosts = whatsnew;

export const allArticles = authors.flatMap((author) =>
  author.routes.map((route) => ({
    ...route,
    name: route.label,
    author: author.name,
    category: author.category,
    type: route.type || "article",
  }))
);

export const slideArticles = slides.map((slide) => ({
  path: slide.link,
  label: slide.title,
  name: slide.title,
  author: slide.author,
  category: slide.category,
  type: "article",
  content: slide.content,
  date: slide.date,
}));

export const postArticles = (mineralPosts || []).map((post) => ({
  path: post.path && post.path !== "#" ? post.path : "/whats-new",
  label: post.title,
  name: post.title,
  author: post.author,
  category: "News & Updates",
  type: "article",
  date: post.date,
  isExternal: Boolean(post.path && post.path !== "#" && post.path.startsWith("http")),
}));

// Build deduplicated article list for comprehensive search
const articleMap = new Map();

// Add slides (rich with content, dates, categories)
slideArticles.forEach((item) => {
  if (item.path) {
    articleMap.set(item.path, item);
  }
});

// Add author articles if not already present
allArticles.forEach((item) => {
  if (item.path && !articleMap.has(item.path)) {
    articleMap.set(item.path, item);
  }
});

export const combinedArticles = [
  ...Array.from(articleMap.values()),
  ...postArticles,
];

export const getAllSearchItems = (alternateTechItems = [], sectorItems = []) => {
  return [
    ...alternateTechItems.map((item) => ({
      ...item,
      category: "Alternate Tech",
      type: "page",
    })),
    ...sectorItems.map((item) => ({
      ...item,
      category: "Sectors",
      type: "page",
    })),

    // Static pages
    { path: "/about", label: "About", category: "Pages", type: "page" },
    { path: "/supply-chain", label: "Supply Chains", category: "Pages", type: "page" },
    { path: "/whats-new", label: "What's New", category: "Pages", type: "page" },
    { path: "/strategic-dialogues", label: "Strategic Dialogues", category: "Pages", type: "page" },
    { path: "/active-projects", label: "Active Projects", category: "Pages", type: "page" },

    // Authors
    ...authors.map((author) => ({
      name: author.name,
      category: author.category,
      routes: author.routes,
      type: "author",
    })),

    // All combined articles and news items
    ...combinedArticles,
  ];
};

export const searchItems = {
  authors,
  slides,
  mineralPosts,
  allArticles: combinedArticles,
  getAllSearchItems,
};

export default searchItems;
