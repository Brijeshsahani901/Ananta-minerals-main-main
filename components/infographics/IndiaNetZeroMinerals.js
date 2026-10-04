import { Montserrat, Playfair_Display } from "@/lib/fonts";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function IndiaNetZeroMinerals() {
  const highlights = [
    {
      id: 1,
      text: "India may require ~169 million tonnes of Critical Energy Transition Minerals between 2025–2070 under its Net Zero Scenario — 51% more than under current policies (~112 Mt).",
      position: "left",
      maxWidth: "660px",
    },
    {
      id: 2,
      text: "Copper (~66 Mt) + graphite (~46.4 Mt) account for about two-thirds of India's entire ~169 Mt net-zero critical-mineral requirement through 2070.",
      position: "right",
      maxWidth: "580px",
    },
    {
      id: 3,
      text: "More than 95% of India's projected graphite demand comes from EVs and battery-energy-storage systems.",
      position: "left",
      maxWidth: "560px",
    },
    {
      id: 4,
      text: "Construction and real estate account for roughly 43% of copper use in India.",
      position: "right",
      maxWidth: "560px",
    },
  ];

  return (
    <div className={`netzero-container ${montserrat.className}`}>
      {/* Background Ambience / Gradient overlay */}
      <div className="gradient-background" />

      <div className="content-wrapper">
        {/* Main Title */}
        <header className="title-header">
          <h2 className={`main-title ${playfair.className}`}>
            Critical Minerals Powering India’s Net–Zero Transition
          </h2>
        </header>

        {/* Highlights Stack */}
        <div className="highlights-list">
          {highlights.map((item) => (
            <div
              key={item.id}
              className={`highlight-row ${
                item.position === "right" ? "pos-right" : "pos-left"
              }`}
            >
              <div
                className="highlight-card"
                style={{ maxWidth: item.maxWidth }}
              >
                <span className="accent-bar" />
                <p className="card-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .netzero-container {
          width: 100%;
          height: 530px;
          min-height: 530px;
          max-height: 530px;
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          box-sizing: border-box;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
        }

        /* Exact Golden-Black Gradient from the image */
        .gradient-background {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            98deg,
            #000000 0%,
            #000000 24%,
            #0a0802 38%,
            #1e1605 52%,
            #4a370e 68%,
            #8a681e 84%,
            #af8a2c 95%,
            #b7902f 100%
          );
          z-index: 0;
        }

        .gradient-background::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 100% 45%,
            rgba(255, 215, 100, 0.12) 0%,
            transparent 65%
          );
          pointer-events: none;
        }

        .content-wrapper {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 24px 36px 20px 36px;
          box-sizing: border-box;
          justify-content: space-between;
          overflow-y: auto;
          overflow-x: hidden;
        }

        /* Custom subtle scrollbar if needed */
        .content-wrapper::-webkit-scrollbar {
          width: 4px;
        }
        .content-wrapper::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }

        .title-header {
          text-align: center;
          margin-bottom: 12px;
          flex-shrink: 0;
        }

        .main-title {
          color: #ffffff;
          font-size: 27px;
          font-weight: 600;
          letter-spacing: 0.4px;
          line-height: 1.3;
          margin: 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .highlights-list {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          gap: 14px;
          padding: 4px 0;
        }

        .highlight-row {
          display: flex;
          width: 100%;
          box-sizing: border-box;
        }

        .pos-left {
          justify-content: flex-start;
          padding-left: 2%;
        }

        .pos-right {
          justify-content: flex-start;
          padding-left: 21%;
        }

        .highlight-card {
          display: flex;
          align-items: stretch;
          width: 100%;
          box-sizing: border-box;
          transition: transform 0.25s ease;
        }

        .highlight-card:hover {
          transform: translateX(4px);
        }

        .accent-bar {
          width: 3.5px;
          min-width: 3.5px;
          background-color: #ffffff;
          border-radius: 2px;
          flex-shrink: 0;
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.35);
          transition: box-shadow 0.25s ease;
        }

        .highlight-card:hover .accent-bar {
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.85);
        }

        .card-text {
          color: #ffffff;
          font-size: 15.2px;
          font-weight: 700;
          line-height: 1.45;
          letter-spacing: 0.1px;
          margin: 0;
          padding-left: 15px;
          text-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
          .main-title {
            font-size: 24px;
          }
          .pos-right {
            padding-left: 16%;
          }
          .card-text {
            font-size: 14.5px;
          }
        }

        @media (max-width: 992px) {
          .content-wrapper {
            padding: 20px 24px;
          }
          .main-title {
            font-size: 22px;
          }
          .pos-left {
            padding-left: 1%;
          }
          .pos-right {
            padding-left: 10%;
          }
          .card-text {
            font-size: 14px;
            line-height: 1.4;
          }
        }

        @media (max-width: 768px) {
          .netzero-container {
            height: auto;
            min-height: 520px;
            max-height: none;
          }
          .content-wrapper {
            padding: 18px 16px;
          }
          .main-title {
            font-size: 19px;
            margin-bottom: 6px;
          }
          .highlights-list {
            gap: 16px;
          }
          .pos-left,
          .pos-right {
            padding-left: 0;
          }
          .card-text {
            font-size: 13.5px;
            padding-left: 12px;
          }
        }
      `}</style>
    </div>
  );
}
