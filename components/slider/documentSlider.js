"use client";
import { useRef, useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

const DocumentSlider = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const scrollRowRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const slides = [
    {
      id: "agriculture",
      image: `${basePath}/assets/sectors_images/agriculture.jpg`,
      title: "Mineral Security in India's Agriculture Sector",
      link: "/agriculture",
      content:
        "India's agricultural sector—on which over 60% of the population depends directly or indirectly— relies heavily on the uninterrupted supply of mineral-based fertilizers.",
      author: "Prerna Bountra",
      date: "July 2025",
      category: "Research Report",
    },
    {
      id: "automobile",
      image: `${basePath}/assets/sectors_images/automobile.jpg`,
      title: "Automobile Industry and Battery Applications",
      link: "/automobile",
      content:
        "The rapid shift toward electric vehicles (EVs) and next-generation battery technologies has made the automotive sector highly dependent on a secure, affordable supply of critical minerals—especially lithium, nickel, cobalt, graphite, and rare earth elements (REEs).",
      author: "Ayan Barman",
      date: "July 2025",
      category: "Research Report",
    },
    {
      id: "defence-and-aerospace",
      image: `${basePath}/assets/sectors_images/defence.jpg`,
      title: "Mineral Security in India's Defence and Aerospace Supply Chain",
      link: "/defence-and-aerospace",
      content:
        "The defence and aerospace sectors represent the technological apex of India's industrial ambitions, underpinning national security, regional power projection, and strategic autonomy.",
      author: "Prerna Bountra",
      date: "July 2025",
      category: "Research Report",
    },
    {
      id: "renewable-energy",
      image: `${basePath}/assets/sectors_images/renewable.jpg`,
      title: "Critical Minerals for India's Renewable Energy Transition",
      link: "/renewable-energy",
      content:
        "The renewable energy sector is increasingly vulnerable to supply, pricing, and processing challenges concerning key transition minerals—copper, platinum group metals (PGMs), and tellurium.",
      author: "Ayan Barman",
      date: "July 2025",
      category: "Research Report",
    },
    {
      id: 1,
      image: `${basePath}/assets/minerals_images/battery.jpg`,
      title: "Critical Pathways: Building India's Mineral Value Chain",
      link: "/supply-chain/critical-pathway",
      content:
        "India's ambition for critical mineral independence rests on a complex sequence of capabilities that span the full length of the value chain.",
      author: "Prerna Bountra",
      date: "July 2025",
      category: "Research Report",
    },
    {
      id: 2,
      image: `${basePath}/assets/minerals_images/closing_loop.jpg`,
      title:
        "Closing the Loop: Strengthening India's Battery Recycling Supply Chains",
      link: "/supply-chain/closing-loop",
      content:
        "This strategic report analyzes India's battery recycling ecosystem and its role in securing critical mineral supply chains.",
      author: "Ayan Barman",
      date: "July 2025",
      category: "Research Report",
    },
    {
      id: 3,
      image: `${basePath}/assets/minerals_images/colorful-baubles.jpg`,
      title: "Breaking China's stranglehold over rare earth supplies",
      link: "/supply-chain/rare-earth-strategy",
      content:
        "Chinese supplies of rare-earth doped magnets to India have not resumed, weeks after a political agreement had been reached to resume shipments to India.",
      author: "T K Arun",
      date: "September 2025",
      category: "Strategic Analysis",
    },
    {
      id: 4,
      image: `${basePath}/assets/minerals_images/magnet.jpg`,
      title: "Magnets, Money, and Momentum: India's Rare-Earth PLI Push",
      link: "/supply-chain/magnets-money",
      content:
        "In October 2025, the Indian Finance Ministry cleared a Rs. 7,300–7,350 crore (USD 880–885 million) Production-Linked Incentive (PLI) to establish domestic sintered...",
      author: "Ayan Barman",
      date: "October 2025",
      category: "Strategic Analysis",
    },
    {
      id: 5,
      image: `${basePath}/assets/minerals_images/rare_earth_minerals.jpg`,
      title: "Rare Earth Elements Just Got Rarer",
      link: "/supply-chain/rare-earth-elements",
      content:
        "The Ministry of Commerce of the People's Republic of China (MOFCOM) published two formal announcements expanding export controls related to rare-earth elements (REEs) and REE-related technologies.",
      author: "Ayan Barman",
      date: "October 2025",
      category: "Strategic Analysis",
    },
    {
      id: 6,
      image: `${basePath}/assets/minerals_images/e-waste.png`,
      title: "The Missing Discourse in CRM Recycling from E-Waste",
      link: "/supply-chain/recycling-e-waste",
      content:
        "The recovery of critical raw materials (CRMs) from electronic waste has drawn significant attention in discussions on the circular economy and sustainable development.",
      author: "Keerthi Lanka & Shivangi Aggarwal",
      date: "October 2025",
      category: "Industry Analysis",
    },
    {
      id: 10,
      image: `${basePath}/assets/minerals_images/royalty-rates.jpg`,
      title:
        "Royalty Reform for Strategic Minerals: Clearer prices but not a silver bullet",
      link: "/supply-chain/mining-royalty-rates",
      content:
        "On 12 November 2025, the Union Cabinet revised the method of charging royalties on four minerals the government designates as ‘critical’ for the clean-energy transition: graphite, caesium, rubidium, and zirconium.",
      author: "Ayan Barman",
      date: "November 2025",
      category: "Industry Analysis",
    },
    {
      id: 9,
      image: `${basePath}/assets/minerals_images/deep-sea-minerals.jpg`,
      title: "Beneath the Surface: India’s Ambition in Deep-Sea Minerals",
      link: "/supply-chain/beneath-the-surface",
      content:
        "The global shift from fossil fuels to clean energy has sharply increased the demand for critical minerals.",
      author: "Mithilesh Phadke",
      date: "November 2025",
      category: "Industry Analysis",
    },
    {
      id: 14,
      image: `${basePath}/assets/minerals_images/pax.jpg`,
      title:
        "India's prospective role in Pax Silica's evolution and US micro-refinery strategy",
      link: "/supply-chain/indias-prospective",
      content:
        "Two recent developments in the US’s quest to derisk its defence critical minerals inputs from China have direct implications for India.",
      author: "Aditya Pareek",
      date: "December 2025",
      category: "Industry Analysis",
    },
    {
      id: 8,
      image: `${basePath}/assets/minerals_images/asia-playbook.jpg`,
      title:
        "From Reserves to Riches: Asia's Critical Minerals Playbook and India's Role",
      link: "/supply-chain/asia-playbook",
      content:
        "India has ambitious plans to turn its rich mineral reserves into a strategic strength.",
      author: "Ayan Barman",
      date: "November 2025",
      category: "Industry Analysis",
    },
    {
      id: 7,
      image: `${basePath}/assets/minerals_images/Rare Earth Minerals Mining.png`,
      title:
        "Votes, Violence, and Valuable Minerals: Myanmar's Elections Amidst Civil War and Rare Earths Race",
      link: "/supply-chain/myanmar-elections-civil-war-minerals",
      content:
        "The world depends on China for its critical minerals needs but China, in turn, depends on a remote state in war-torn Myanmar.",
      author: "Maitrayee Jha",
      date: "November 2025",
      category: "Industry Analysis",
    },
    {
      id: 12,
      image: `${basePath}/assets/minerals_images/midstream.jpg`,
      title:
        "The Midstream Gap: India’s Strategic Vulnerability in Critical Mineral Processing and Refining",
      link: "/supply-chain/midstream-gap",
      content:
        "The supply chain for critical minerals generally involves exploration, mining (extraction), processing, refining, and then manufacturing into end products.",
      author: "Mithilesh Phadke",
      date: "December 2025",
      category: "Industry Analysis",
    },
    {
      id: 10,
      image: `${basePath}/assets/minerals_images/karnatak.jpg`,
      title: "Karnataka bets on MiniMines for processing complex",
      link: "/supply-chain/karnatak",
      content:
        "On November 28 2025, Karnataka signed a memorandum of understanding with Bengaluru based startup MiniMines Cleantech Solutions.",
      author: "Aditya Pareek",
      date: "December 2025",
      category: "Industry Analysis",
    },
    {
      id: 11,
      image: `${basePath}/assets/minerals_images/practical-triangle.jpg`,
      title:
        "A practical triangle: What the new Australia-Canada-India Tech Pact means for Critical Minerals",
      link: "/supply-chain/practical-triangle",
      content:
        "Last month the governments of India, Canada and Australia launched a formal trilateral called the Australia–Canada–India Technology and Innovation (ACITI) Partnership at the G20 Summit in Johannesburg.",
      author: "Ayan Barman",
      date: "December 2025",
      category: "Industry Analysis",
    },

    {
      id: 18,
      image: `${basePath}/assets/minerals_images/indai-europe.png`,
      title: "The Mother of All Deals and Critical Minerals",
      link: "/supply-chain/mother-of-all-deals",
      content:
        "Global critical-raw-materials (CRM) supply chains today are thin, concentrated and geopolitically charged.",
      author: "Ayan Barman",
      date: "January 2026",
      category: "Industry Analysis",
    },
    {
      id: 17,
      image: `${basePath}/assets/minerals_images/secure.jpg`,
      title:
        "Securing the Future : How India and Europe Can Co-Create Resilient Critical Mineral Supply Chains",
      link: "/supply-chain/securing-the-future",
      content:
        "As India and the European Union (EU) edge closer to new trade and investment agreements, including a long-awaited free trade pact and investment protection deal, there is growing recognition that critical minerals must form a pillar of their economic partnership.",
      author: "Mithilesh Phadke",
      date: "January 2026",
      category: "Industry Analysis",
    },

    {
      id: 16,
      image: `${basePath}/assets/minerals_images/greenlandGambit.jpg`,
      title:
        "The Greenland Gambit: Strategic Minerals and Washington’s Return to the Arctic",
      link: "/supply-chain/greenland-gambit",
      content:
        "The United States’ interest in Greenland is long-standing and well-documented.",
      author: "Ayan Barman",
      date: "January 2026",
      category: "Industry Analysis",
    },
    {
      id: 15,
      image: `${basePath}/assets/minerals_images/venezeula.jpg`,
      title: "The Future of Venezuelan Critical Minerals",
      link: "/supply-chain/future-of-venezuela",
      content:
        "The US strikes on Venezuela in early January 2026, coined as 'Operation Absolute Resolve,' and the subsequent US assertion of control over Venezuelan oil flows, have abruptly changed the risk calculus in Caracas.",
      author: "Ayan Barman",
      date: "January 2026",
      category: "Industry Analysis",
    },
    {
      id: "latin",
      image: `${basePath}/assets/minerals_images/india-latin.jpg`,
      title: "India-Latin America Critical Minerals Agreement",
      link: "/supply-chain/india-latin",
      content:
        "India’s search for critical minerals is entering a more assertive diplomatic phase, and Latin America is becoming central to that effort.",
      author: "Aditya Pareek",
      date: "February 2026",
      category: "Industry Analysis",
    },
    {
      id: 20,
      image: `${basePath}/assets/minerals_images/jaishankar.jpg`,
      title:
        "Jaishankar in Washington: Critical Minerals and the Hard Geometry of Supply Chains",
      link: "/supply-chain/jaishankar",
      content:
        "External Affairs Minister S. Jaishankar’s latest visit to Washington comes at a structural inflection point in global economic geopolitics.",
      author: "Mithilesh Phadke",
      date: "February 2026",
      category: "Industry Analysis",
    },
    {
      id: 19,
      image: `${basePath}/assets/minerals_images/budget2026.jpeg`,
      title:
        "Union Budget Positions India in the Global Supply Chain with Rare Earth Corridor",
      link: "/supply-chain/union-budget",
      content:
        "In the Union Budget for the financial year 2026–2027, the Government of India has articulated a clear strategy aimed at integrating the country more deeply into global supply and value chains for critical minerals.",
      author: "Aditya Pareek",
      date: "February 2026",
      category: "Industry Analysis",
    },
    {
      id: "jdk",
      image: `${basePath}/assets/minerals_images/india-chile.jpg`,
      title:
        "India Chile Trade Framework and Critical Minerals: What Chile Leads In, Who Operates the Assets, and Lessons for India",
      link: "/supply-chain/india_chile_critical_minerals",
      content:
        "The recently expanded India–Chile trade framework marks a significant evolution in bilateral economic engagement, particularly in the context of critical minerals.",
      author: "Mithilesh Phadke",
      date: "27 February 2026",
      category: "Industry Analysis",
    },
    {
      id: "df",
      image: `${basePath}/assets/minerals_images/helium.jpeg`,
      title: "Helium Under Pressure: Invisible Gas, Visible Crisis",
      link: "/supply-chain/helium",
      content:
        "The Iran Crisis and West Asian escalation have triggered an unlikely but critical supply shock: helium.",
      author: "Ayan Barman",
      date: "March 2026",
      category: "Industry Analysis",
    },
    {
      id: "def",
      image: `${basePath}/assets/minerals_images/us-japan.jpeg`,
      title:
        "How the US-Japan critical minerals framework is a template for India",
      link: "/supply-chain/US-Japan-critical",
      content:
        "When Washington and Tokyo formalised their critical minerals framework agreement in October 2025, the immediate commentary focused on what it meant for the bilateral relationship and what it signalled to Beijing.",
      author: "Aditya Pareek",
      date: "March 2026",
      category: "Industry Analysis",
    },
    {
      id: "dfd",
      image: `${basePath}/assets/minerals_images/strait-of-hourmous.jpg`,
      title: "Strait Flush: Pentagon's Rush and India's ICET Mineral Play",
      link: "/supply-chain/strait-of-hourmous",
      content:
        "The Pentagon's urgent request for 13 critical minerals, including tungsten, yttrium, and germanium, made just hours before military strikes on Iran in early March 2026, has exposed a stark reality, i.e. one of the world's largest military powers faces acute supply- chain vulnerabilities during ‘Operation Epic Fury .’ For India, the crisis arrives at a precarious moment.",
      author: "Ayan Barman",
      date: "March 2026",
      category: "Industry Analysis",
    },
    {
      id: "df",
      image: `${basePath}/assets/minerals_images/resource-nationalism.jpg`,
      title:
        "Resource nationalism's grip on global critical minerals supply chains",
      link: "/supply-chain/resource-nationalism",
      content:
        "In an era of green energy transition, critical minerals such as lithium, cobalt, nickel, graphite, and Rare Earth Elements(REE)s fuel everything from Electric Vehicle(EV) batteries to wind turbines and semiconductors.",
      author: "Aditya Pareek",
      date: "March 2026",
      category: "Industry Analysis",
    },
    {
      id: "",
      image: `${basePath}/assets/minerals_images/drones.webp`,
      title: "Drones and Dependency: How Critical Minerals Shape Combat Power",
      link: "/supply-chain/drones",
      content:
        "Drones have moved beyond the role of peripheral tools to become a core feature of contemporary warfare.",
      author: "Maitrayee Jha",
      date: " April, 2026",
      category: "Industry Analysis",
    },
    {
      id: "",
      image: `${basePath}/assets/minerals_images/canberra.jpg`,
      title:
        "Canberra's $5 Billion Bet on a Minerals Alliance, and the Energy Crisis Sharpening Its Logic",
      link: "/supply-chain/canberra-bet",
      content:
        "The signing of the US-Australia Framework for Securing Supply in the Mining and Processing of Critical Minerals and Rare Earths in October 2025 was widely read as a strategic hedge against China's dominance in mineral processing.",
      author: "Aditya Pareek",
      date: " April, 2026",
      category: "Industry Analysis",
    },
    {
      id: "lf",
      image: `${basePath}/assets/minerals_images/thorium.jpg`,
      title: "Thorium: India’s Long Game in Nuclear Power",
      link: "/supply-chain/thorium",
      content:
        "India is talking about thorium again as the country’s nuclear strategy is moving from aspiration to implementation.",
      author: "Ayan Barman",
      date: " April, 2026",
      category: "Industry Analysis",
    },
    {
      id: "dgf",
      image: `${basePath}/assets/minerals_images/venezuela-flag.jpg`,
      title:
        "A path for Indian state firms in US play for Venezuela's Critical Minerals",
      link: "/supply-chain/venezeula",
      content:
        "The conversation about US-Venezuela cooperation in critical minerals has so far been dominated by American and Canadian mining companies primarily because they are geographically the closest processing and production linked entities.",
      author: "Aditya Pareek",
      date: " April, 2026",
      category: "Industry Analysis",
    },
    {
      id: "",
      image: `${basePath}/assets/minerals_images/private-military.webp`,
      title:
        "How private military companies affect the critical minerals supply chain",
      link: "/supply-chain/private-military-company",
      content:
        "The places richest in critical minerals needed to power the global high-tech industries are also among the most dangerous to operate in. Cobalt in the eastern Democratic Republic of Congo(DRC), gold across the Sahel, tantalum threading through Central Africa's fractured states.",
      author: "Aditya Pareek",
      date: "May, 2026",
      category: "Industry Analysis",
    },

    {
      id: "",
      image: `${basePath}/assets/minerals_images/food-security.jpeg`,
      title:
        "Critical Minerals in Fertilizers, Challenges of Food Security and Road Ahead",
      link: "/supply-chain/critical-minerals-fertilizers",
      content:
        "Food security has always been central to India’s national stability, economic resilience, and strategic autonomy.",
      author: "Mithilesh Phadke",
      date: "May, 2026",
      category: "Industry Analysis",
    },
    {
      id: "",
      image: `${basePath}/assets/minerals_images/multilateral-lenders.webp`,
      title:
        "How multilateral lenders are moving to reshape Asia's critical minerals value chain",
      link: "/supply-chain/multilateral-lenders",
      content:
        "The global race for critical minerals until 2010 when China and Japan had a brief dispute over the supply of Rare Earth Elements(REE)s, had been a story told almost entirely in extraction terms.",
      author: "Aditya Pareek",
      date: "May, 2026",
      category: "Industry Analysis",
    },
    {
      id: "",
      image: `${basePath}/assets/minerals_images/g7.webp`,
      title: "The G7’s new critical minerals action plan",
      link: "/supply-chain/g7",
      content:
        "At their summit’s second and final day on June 17, 2026, the leaders of the Group of Seven (G7) nations adopted a document laying out the titular Critical Minerals Action Plan, which sets out a shared commitment to rethinking how supply chain relevant critical minerals are found, extracted, processed, and traded.",
      author: "Aditya Pareek",
      date: "June, 2026",
      category: "Industry Analysis",
    },
    {
      id: "",
      image: `${basePath}/assets/minerals_images/quantum-computers.webp`,
      title: "Quantum Computing and the Critical Mineral Race",
      link: "/supply-chain/quantum-computing",
      content:
        "Quantum computing is becoming strategically important for the same reason semiconductors did—not because it will replace every existing computer, but because it could become decisive infrastructure for a narrow set of high-value tasks in science ...",
      author: "Mithilesh Phadke",
      date: "June, 2026",
      category: "Industry Analysis",
    },
    {
      id: "",
      image: `${basePath}/assets/minerals_images/pentagon-critical-merals.webp`,
      title:
        "The Pentagon’s critical minerals rush meets foreign civil society pressure",
      link: "/supply-chain/pentagon-critical-minerals",
      content:
        "The US Department of War is confronting a potential supply chain crisis as its involvement in the combat operations in the West Asia region continues to drag on and its arsenal and inventory requires replacements for expended material.",
      author: "Aditya Pareek",
      date: "June, 2026",
      category: "Industry Analysis",
    },
    {
      id: "",
      image: `${basePath}/assets/minerals_images/minerals-agreement.webp`,
      title:
        "India’s string of critical minerals agreements and the logic behind them",
      link: "/supply-chain/minerals-agreement",
      content:
        "In 2026, India's push to secure critical mineral supplies gained fresh momentum with a string of bilateral agreements and deals being struck with the United States, Australia, Brazil, Japan, France, and Indonesia.",
      author: "Aditya Pareek",
      date: "July, 2026",
      category: "Industry Analysis",
    },
    {
      id: "",
      image: `${basePath}/assets/minerals_images/dysporium.webp`,
      title: "Dysprosium and Terbium for India’s Net Zero Transition",
      link: "/supply-chain/dysporium-and-teribium",
      content:
        "From India’s perspective, dysprosium and terbium are not simply “rare earths”; they are the narrowest technical chokepoints inside the permanent-magnet supply chain that underpins high-efficiency motors and generators. ",
      author: "Mithilesh Phadke",
      date: "July, 2026",
      category: "Industry Analysis",
    },
    {
      id: "",
      image: `${basePath}/assets/minerals_images/india-japan.webp`,
      title:
        "Japan and India to boost cooperation on critical minerals value chain",
      link: "/supply-chain/india-japan",
      content:
        "The Geological Survey of India (GSI) and Japan's Japan Organisation for Metals and Energy Security (JOGMEC), concluded an agreement around the 16th India-Japan Annual Summit in New Delhi on July 2 2026.",
      author: "Aditya Pareek",
      date: "July, 2026",
      category: "Industry Analysis",
    },
    {
      id: "",
      image: `${basePath}/assets/minerals_images/india-uzbekistan.webp`,
      title:
        "Central Asia and Uzbekistan pop up on India’s critical minerals agenda",
      link: "/supply-chain/india-uzbekistan",
      content:
        "Central Asia has occupied a curious position in India’s foreign policy thinking for three decades since the fall of the Soviet Union.",
      author: "Aditya Pareek",
      date: "August, 2026",
      category: "Industry Analysis",
    },
  ];

  const parseDate = (dateStr) => {
    if (!dateStr) return 0;

    const clean = dateStr
      .replace(/(\d+)(st|nd|rd|th)/gi, "$1")
      .replace(/,/g, "")
      .trim();

    // Try parsing directly
    let date = new Date(clean);

    // If invalid → custom handling
    if (isNaN(date)) {
      const parts = clean.split(" ");

      if (parts.length === 2) {
        // Example: "March 2026"
        const [month, year] = parts;
        date = new Date(`${month} 1, ${year}`);
      }

      if (parts.length === 3) {
        // Example: "27 February 2026"
        const [day, month, year] = parts;
        date = new Date(`${month} ${day}, ${year}`);
      }
    }

    return isNaN(date) ? 0 : date.getTime();
  };

  const sortedSlides = [...slides].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date),
  );

  const updateArrowVisibility = useCallback(() => {
    const scrollRow = scrollRowRef.current;
    if (!scrollRow) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRow;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 2);
  }, []);

  const scroll = useCallback(
    (direction) => {
      const scrollRow = scrollRowRef.current;
      if (!scrollRow) return;

      const cardWidth = 340;
      const gap = 20;
      const scrollAmount = (cardWidth + gap) * 2; // scroll 2 cards

      const target =
        direction === "left"
          ? scrollRow.scrollLeft - scrollAmount
          : scrollRow.scrollLeft + scrollAmount;

      scrollRow.scrollTo({
        left: target,
        behavior: "smooth",
      });

      // Use requestAnimationFrame for smooth update
      const raf = () => {
        updateArrowVisibility();
        if (Math.abs(scrollRow.scrollLeft - target) > 1) {
          requestAnimationFrame(raf);
        }
      };
      requestAnimationFrame(raf);
    },
    [updateArrowVisibility],
  );

  useEffect(() => {
    updateArrowVisibility();
    window.addEventListener("resize", updateArrowVisibility);
    return () => window.removeEventListener("resize", updateArrowVisibility);
  }, [updateArrowVisibility]);

  return (
    <div className="document-slider-wrapper">
      <style>{`
        .document-slider-wrapper {
          position: relative;
          width: 100%;
          padding: 1rem 0;
          box-sizing: border-box;
        }

        .scroll-row {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding: 0 0;
        }

        .scroll-row::-webkit-scrollbar { display: none; }
        .scroll-row { -ms-overflow-style: none; scrollbar-width: none; }

        .doc-card {
          flex: 0 0 340px;
          min-width: 340px;
          height: auto;
          border-radius: 14px;
          overflow: hidden;
          scroll-snap-align: start;
          box-shadow: 0 6px 18px rgba(2,6,23,0.06);
          border: 1px solid rgba(0,0,0,0.06);
          background: #fff;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          will-change: transform;
        }

        .doc-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(2,6,23,0.12);
        }

        .doc-image-wrap {
          position: relative;
          width: 100%;
          height: 200px;
          flex-shrink: 0;
          background: #f4f4f4;
          overflow: hidden;
        }

        /* Image blur animation */
        .doc-image-wrap img {
          transition: filter 0.3s ease;
        }
        
        .doc-image-wrap img[data-next-image-blur="true"] {
          filter: blur(8px);
        }
        
        .doc-image-wrap img[data-next-image-blur="false"] {
          filter: blur(0);
        }

        .doc-content {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-grow: 1;
          background-color: #0f1724;
        }

        .doc-title { font-size: 1.05rem; font-weight: 600; color: #0f1724; margin:0 0 4px 0; color:white; }
        .doc-excerpt { font-size: 0.98rem; line-height:1.5; color:#4b5563; flex-grow:1; margin:0; color:white;}
        .doc-meta { display:flex; align-items:center; gap:0.6rem; color:#6b7280; font-size:0.9rem; margin-top:0.35rem; color:white; }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: white;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.2s ease;
        }

        .nav-arrow svg { width: 28px; height: 28px; stroke-width:2; color:#374151; }
        .nav-arrow.left { left: -24px; }
        .nav-arrow.right { right: -24px; }

        .nav-arrow:hover { background:#f1f5f9; box-shadow: 0 6px 16px rgba(0,0,0,0.15); }

        @media(max-width:1024px){ .doc-card { flex:0 0 300px; min-width:300px; } }
        @media(max-width:768px){ .doc-card { flex:0 0 90%; min-width:90%; } .doc-image-wrap{height:180px;} .nav-arrow{display:none;} }
      `}</style>

      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          className={clsx("nav-arrow", "left")}
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          className={clsx("nav-arrow", "right")}
          onClick={() => scroll("right")}
          aria-label="Scroll right"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      <div ref={scrollRowRef} className="scroll-row">
        {sortedSlides.map((slide) => (
          <article
            key={slide.id}
            className="doc-card"
            role="group"
            aria-label={slide.title}
          >
            <div className="doc-image-wrap">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="(max-width:768px) 100vw, 340px"
                style={{ objectFit: "cover", objectPosition: "center" }}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
                loading="eager"
                unoptimized={false}
              />
            </div>
            <div className="doc-content">
              <Link href={slide.link} aria-label={`Open ${slide.title}`}>
                <h3 className="doc-title">{slide.title}</h3>
              </Link>
              <p className="doc-excerpt">{slide.content}</p>
              <div className="doc-meta">
                <div>
                  {slide.date} | {slide.author}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default DocumentSlider;
