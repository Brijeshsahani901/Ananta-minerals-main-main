"use client";
import { useRef, useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
        "India's ambition for critical mineral independence rests on a complex sequence of capabilities that span the full length of the value chain...",
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
        "This strategic report analyzes India's battery recycling ecosystem and its role in securing critical mineral supply chains...",
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
        "Chinese supplies of rare-earth doped magnets to India have not resumed... The problem must be tackled at multiple levels...",
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
        "In October 2025, the Indian Finance Ministry cleared a Rs. 7,300–7,350 crore (USD 880–885 million) Production-Linked Incentive (PLI) to establish domestic sintered..",
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
        "The recovery of critical raw materials (CRMs) from electronic waste has drawn significant attention in discussions on the circular economy and sustainable development..",
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
        "On November 28 2025, Karnataka signed a memorandum of understanding with Bengaluru based startup MiniMines Cleantech Solutions",
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
      title:
        "The Mother of All Deals and Critical Minerals",
      link: "/supply-chain/mother-of-all-deals",
      content:
        "Global critical-raw-materials (CRM) supply chains today are thin, concentrated and geopolitically charged. China dominates processing and refining for many battery and rare- earth inputs, leaving miners and manufacturers outside China exposed to single-point chokepoints, export controls and price spikes.",
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
        "As India and the European Union (EU) edge closer to new trade and investment agreements, including a long-awaited free trade pact and investment protection deal, there is growing recognition that critical minerals must form a pillar of their economic partnership",
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
        "The United States’ interest in Greenland is long-standing and well-documented. In 1946, Secretary of State James F.",
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
        "India’s search for critical minerals is entering a more assertive diplomatic phase, and Latin America is becoming central to that effort. As the global energy transition to greener sources accelerates, minerals such as lithium, copper, cobalt and rare earth elements have shifted from being niche commodities to strategic assets.",
      author: "Aditya Pareek",
      date: "February 2026",
      category: "Industry Analysis",
    },
      {
      id: 20,
      image: `${basePath}/assets/minerals_images/jaishankar.jpg`,
      title: "Jaishankar in Washington: Critical Minerals and the Hard Geometry of Supply Chains",
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
      title: "Union Budget Positions India in the Global Supply Chain with Rare Earth Corridor",
      link: "/supply-chain/union-budget",
      content:
        "In the Union Budget for the financial year 2026–2027, the Government of India has articulated a clear strategy aimed at integrating the country more deeply into global supply and value chains for critical minerals,",
      author: "Aditya Pareek",
      date: "February 2026",
      category: "Industry Analysis",
    },
   
  ];
  

  const parseDate = (dateStr) => {
    const clean = dateStr
      .replace(/(\d+)(st|nd|rd|th)/gi, "$1")
      .replace(/,/g, "");
    return new Date(clean);
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
    <div className="document-slider-wrapper"  > 
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

        .doc-content {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-grow: 1;
          background-color:currentColor;
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
          className="nav-arrow left"
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
          className="nav-arrow right"
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
