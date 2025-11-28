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
  ];

  const parseDate = (dateStr) => {
    const clean = dateStr
      .replace(/(\d+)(st|nd|rd|th)/gi, "$1")
      .replace(/,/g, "");
    return new Date(clean);
  };

  const sortedSlides = [...slides].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
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
    [updateArrowVisibility]
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

        .doc-content {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-grow: 1;
        }

        .doc-title { font-size: 1.05rem; font-weight: 600; color: #0f1724; margin:0 0 4px 0; }
        .doc-excerpt { font-size: 0.98rem; line-height:1.5; color:#4b5563; flex-grow:1; margin:0; }
        .doc-meta { display:flex; align-items:center; gap:0.6rem; color:#6b7280; font-size:0.9rem; margin-top:0.35rem; }

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
