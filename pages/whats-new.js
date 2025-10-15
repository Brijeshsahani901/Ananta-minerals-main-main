import BlogSidebar from "@/components/elements/BlogSidebar";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState, useRef } from "react";
import gsap from "gsap";
import SupplyChainSteps from "@/components/supplyChainSteps";
import { FaDownload } from "react-icons/fa";

export default function WhatsNew() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const criticalRef = useRef(null);

  const whatsnew = [
    {
      id: 1,
      title: "Disruption In The Supply Of Rare Earth Magnets",
      description:
        "The Indian government’s granular tracking of dependency on Chinese rare earth magnets, highlighted by the relaying of Society of Indian Automobile Manufacturers (SIAM) data, reflects concerns over vulnerabilities in key sectors like automobiles and tech. This detailed monitoring suggests efforts to mitigate risks by diversifying supply sources and boosting domestic production to secure India’s economic future. The use of data from an industry body like SIAM instead of Ministry of Statistic and Project Implementation(MoSPI) reflects the close contact between the government and private sector on a shared strategic concern of national significance.",
      downloadUrl: "#", // Add your actual download link here
      path: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2151394",
      author: "PIB",
      date: "13th July, 2025",
      img: "",
    },
    {
      id: 2,
      title:
        "Mines Ministry Recognizes Seven Centres of Excellence to work under the National Critical Mineral Mission",
      description:
        "By designating seven more Centers of Excellence the Government of India is increasing the pool of stakeholders and experts that can further the cause of strategic diversification and even self reliance in the value chain of critical minerals relevant to India.",
      downloadUrl: "#", // Add your actual download link here
      path: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2151287",
      author: "PIB",
      date: "13th July, 2025",
      img: "",
    },
    {
      id: 3,
      title: "Parliament Question: Rare Earth Minerals",
      description:
        "Parliament Update (Body): In a Lok Sabha reply, Dr. Jitendra Singh revealed that India’s Atomic Minerals Directorate has identified 7.23 million tonnes of in‑situ Rare Earth Oxide (REO) in monazite sands and 1.29 million tonnes in hard‑rock deposits, with the Geological Survey of India adding 482.6 million tonnes of REE ore at various cut‑off grades.",
      downloadUrl: "#", // Add your actual download link here
      path: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2147282",
      author: "PIB",
      date: "13th July, 2025",
      img: "",
    },
    {
      id: 4,
      title:
        " India in talks with Chile and Peru to source Critical Minerals",
      description:
        "Chile, peru (body)- India is negotiating with Chile and Peru under ongoing free‑trade pact talks to secure fixed supplies of copper concentrate and other critical minerals, with its copper import dependency set to climb to 97 percent by 2047.",
      downloadUrl: "#", // Add your actual download link here
      path: "https://www.reuters.com/world/china/india-holding-talks-with-chile-peru-sourcing-critical-minerals-trade-ministry-2025-07-15",
      author: "Reuters",
      date: "15th July, 2025",
      img: "",
    },
    {
      id: 5,
      title:
        "India-UK Tech Pact shifts focus towards Critical Minerals",
      description:
        " India-Uk Tech (Body)- Prime Minister Narendra Modi and UK Prime Minister Keir Starmer expanded its remit to critical minerals and frontier domains—announcing a £1.8 million second phase for the UK–India Critical Minerals Supply Chain Observatory and the launch of a UK–India Critical Minerals Guild to advance sustainable mining, recycling and traceability for semiconductors, batteries and clean‑energy technologies.",
      downloadUrl: "#", // Add your actual download link here
      path: "https://stratnewsglobal.com/world-news/india-uk-tech-pact-expands-focus-to-critical-minerals-frontier-domains/",
      author: "StratNews Global",
      date: "25th July, 2025",
      img: "",
    },
    {
      id: 6,
      title:
        "India’s Rare Earth Partnership with Africa",
      description:
        " India has deepened its strategic engagement with five African nations—Zambia, Zimbabwe, Mozambique, Malawi and Côte d’Ivoire—to secure vital rare earth element supplies and cut its dependence on China, which controls over 90 percent of global REE output.",
      downloadUrl: "#", // Add your actual download link here
      path: "https://africa.businessinsider.com/local/lifestyle/india-ramps-up-rare-earth-partnership-with-5-african-nations-to-counter-chinas/1k9kg7f",
      author: "Business Insider Africa",
      date: "28th July, 2025",
      img: "",
    },
    {
      id: 7,
      title:
        "Hindustan Zinc secures Potash block- REE and Tungsten up next",
      description:
        "Hindustan Zinc (Body)- Hindustan Zinc Ltd. has received a Letter of Intent from the Ministry of Mines for a 1,800‑hectare potash block in Hanumangarh, Rajasthan—its third critical minerals acquisition in 2025 after securing a rare earth elements block in Uttar Pradesh and a tungsten block in Andhra Pradesh under Tranche V of the Centre’s e‑auction process.",
      downloadUrl: "#", // Add your actual download link here
      path: "https://energy.economictimes.indiatimes.com/news/coal/hindustan-zinc-secures-potash-block-adds[…]tungsten-assets-in-critical-minerals-push/122608335",
      author: "ET Energy World",
      date: "17th July, 2025",
      img: "",
    },
     {
      id: 8,
      title:
        "New Tech: Autonomous Vehicle designed for deep ocean mining",
      description:
        "The Ocean Exploration Cooperative Institute (OECI), in partnership with NOAA, BOEM and USGS, deployed Orpheus Ocean’s new autonomous underwater vehicle—designed by WHOI—to image and sample polymetallic nodules at depths up to 5,645 m east of the Mariana Trench, marking the first direct observations of these ultra‑deep mineral-rich sites.",
      downloadUrl: "#", // Add your actual download link here
      path: "https://astrobiology.com/2025/07/ocean-world-exploration-new-autonomous-vehicle-studies-deep-ocean-critical-minerals.html#:~:text=Ocean%20World%20Exploration%3A%20New%20Autonomous%20Vehicle%20Studies%20Deep%20Ocean%20Critical%20Minerals,-By%20Keith%20Cowing&text=A%20new%20autonomous%20underwater%20vehicle,waters%20near%20the%20Mariana%20Trench",
      author: "Astribiology",
      date: "13th July, 2025",
      img: "",
    },
     {
      id: 9,
      title:
        "India and the UK have committed £1.8 million to expand the UK–India Critical Minerals Supply Chain Observatory",
      description:
        "India Critical Minerals Supply Chain Observatory, aiming to build a large digital infrastructure that maps supply chains and flags risks across minerals such as lithium, copper, nickel and cobalt. The project will establish a TEXMiN satellite campus at IIT-ISM Dhanbad and a rare-earth focused variant at GMDC’s iCEM in Ahmedabad (the latter backed by £600k), linking industry hubs and skill development in mid-stream processing. Led by the Institute for Manufacturing (IfM), University of Cambridge in partnership with Indian institutes (including IIT Bombay), the observatory will pilot AI, blockchain and analytics to improve traceability, recycling opportunities and supply-chain resilience. The initiative also foresees a UK-India Critical Minerals Guild to mobilize financing, technology transfer, and industry coordination across processing, recycling and market development.",
      downloadUrl: "#", // Add your actual download link here
      path: "https://www.logisticsinsider.in/india-and-uk-invest-1-8-million-to-launch-worlds-first-critical-minerals-supply-chain-observatory/",
      author: "Logistics Insider",
      date: "18th August, 2025",
      img: "",
    },
     {
      id: 10,
      title:
        "India's Critical Minerals Push: 5 policy pillars proposed for India's rare earth self-reliance",
      description:
        "A Primus Partners report lays out five policy pillars to make India self-reliant in rare-earth magnets, calling for market certainty via long-term price assurance and structured offtake agreements to spur investment and domestic demand. It recommends pilot magnet/manufacturing hubs in mineral-rich states, support for a few industrial leaders to scale up NdFeB magnet production, expansion of monazite mining and rare-earth oxide refining, and boosting NdPr output (including through IREL), along with a proposed national magnet buffer stock and a Rare Earth Innovation Hub linking industry and academia. The report also pushes for a Magnet Ecosystem Coordination Cell (under NITI Aayog/DPIIT) to improve policy coordination; recent budget measures easing customs duties on critical minerals are cited as positive momentum. Given China’s near-monopoly (estimated 85–95% of magnet production), the study warns of rising demand driven by EV and clean-energy targets and highlights nascent domestic projects (e.g., IREL’s Visakhapatnam facility) and international partnerships to secure supply.",
      downloadUrl: "#", // Add your actual download link here
      path: "https://www.logisticsinsider.in/india-and-uk-invest-1-8-million-to-launch-worlds-first-critical-minerals-supply-chain-observatory/",
      author: "Times of India",
      date: "16th August, 2025",
      img: "",
    },

     {
      id: 11,
      title:
        "China expands rare earths export restrictions to new elements",
      description:
        "Blurb : China’s expanded rare-earth controls to holmium, erbium, thulium, europium, and ytterbium elements tighten's global access to key elements essential for lasers, fiber optics, magnetic alloys, and clean-energy technologies, heightening supply insecurity across semiconductor, renewable, defense, and high-tech manufacturing industries, while accelerating diversification efforts in the U.S., EU, Japan, and India to reduce Chinese dependency.",
      downloadUrl: "#", // Add your actual download link here
      path: "https://www.reuters.com/world/china/china-expands-rare-earths-export-restrictions-new-elements-2025-10-09/?utm_source",
      author: "Reuters",
      date: "October 9, 2025",
      img: "",
    },

{
      id: 12,
      title:
        "India to inaugurate national critical mineral stockpile to safeguard rare-earth supply",
      description:
        "Seeking greater resilience in global supply chains, India plans a National Critical Mineral Stockpile, initially focused on rare earths. It aims for a two-month reserve, promoting private sector participation and reducing dependency on imports.",
      downloadUrl: "#", // Add your actual download link here
      path: "https://economictimes.indiatimes.com/industry/indl-goods/svs/metals-mining/india-to-launch-[…]icleshow/124511338.cms?utm_source",
      author: "The Economic Times",
      date: "October 13, 2025",
      img: "",
    },
    {
      id: 13,
      title:
        "CMPDI & GSI to survey rare earth elements in coal mine formations",
      description:
        "In a joint move, CMPDI and the Geological Survey of India are rolling out a standard protocol to explore rare earth metals in coal and surrounding strata, and plan to open a lab to validate reserves and quality.",
      downloadUrl: "#", // Add your actual download link here
      path: "https://timesofindia.indiatimes.com/city/ranchi/cmpdi-gsi-to-explore-rare-earth-metals-in-[…]-mines/articleshow/124461076.cms?utm_source=chatgpt.com",
      author: "Times of India",
      date: "October 10, 2025",
      img: "",
    },
    {
      id: 14,
      title:
        "China issues MOFCOM Notice 2025 No. 61 extending rare-earth export controls globally",
      description:
        "China’s Ministry of Commerce released Notice No. 61 (2025), expanding export-control rules on rare-earth materials and related products. The order introduces a 0.1 % threshold, meaning even foreign-made goods containing trace amounts of Chinese-origin rare earths now need an export licence, significantly widening China’s regulatory reach over global supply chains.",
      downloadUrl: "#", // Add your actual download link here
      path: "https://cset.georgetown.edu/publication/mofcom-notice-2025-61/?utm_source",
      author: "CSET",
      date: "October 9, 2025",
      img: "",
    },
   
  ];

  const sortedWhatsnew = [...whatsnew].sort((a, b) => {
    const dateA = new Date(a.date.replace(/(\d+)(st|nd|rd|th)/, "$1"));
    const dateB = new Date(b.date.replace(/(\d+)(st|nd|rd|th)/, "$1"));
    return dateB - dateA; // Descending order
  });

  //   const handleMouseEnter = (ref) => {
  //     gsap.to(ref.current, {
  //       duration: 0.3,
  //       scale: 1.03,
  //       textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
  //       ease: "power2.out",
  //     });
  //   };

  //   const handleMouseLeave = (ref) => {
  //     gsap.to(ref.current, {
  //       duration: 0.3,
  //       scale: 1,
  //       textShadow: "none",
  //       ease: "power2.out",
  //     });
  //   };

  //   const handleDownload = () => {
  //     const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  //     const pdfUrl = `${basePath}/assets/downloads/Agriculture.pdf`;

  //     // Open the PDF in a new browser tab
  //     window.open(pdfUrl, "_blank");
  //   };

  return (
    <>
      <Layout
        breadcrumbCategory="Agriculture"
        breadcrumbPostTitle="Mineral Security in India's Agriculture Sector"
      >
        <section
          style={{
            backgroundImage: `url("${basePath}/static/media/home-shape.684c9f3deb5fb22fbe2f.png")`,
          }}
        >
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12">
                <div className="blog-post-wrapper">
                    <div className="latest__post-content">
                      <div
                        className="document-box p-4"
                        style={{
                          borderRadius: "8px",
                          backgroundColor: "#f9f9f9",
                        }}
                      >
                        {sortedWhatsnew.map((item, index) => (
                          <a
                            href={
                              /^https?:\/\//.test(item.path)
                                ? item.path
                                : item.path
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="post-entry d-flex mb-5 shadow-sm"
                              style={{
                                position: "relative",
                                backgroundColor: "#ffffff",
                                borderRadius: "8px",
                                padding: "20px 24px",
                                transition:
                                  "box-shadow 0.3s ease, transform 0.2s ease",
                                cursor: "pointer",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow =
                                  "0 6px 20px rgba(0,0,0,0.1)";
                                e.currentTarget.style.transform =
                                  "translateY(-2px)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "none";
                                e.currentTarget.style.transform =
                                  "translateY(0)";
                              }}
                            >
                              {/* Unique Gradient Line */}
                              <div
                                style={{
                                  width: "3px",
                                  borderRadius: "6px",
                                  background:
                                    "linear-gradient(to bottom, #b7f8db, #50a7c2)",

                                  position: "absolute",
                                  left: "0",
                                  top: "0",
                                  bottom: "0",
                                }}
                              ></div>

                              <div
                                className="post-content"
                                style={{ flex: 1, marginLeft: "16px" }}
                              >
                                <h4
                                  style={{
                                    color: "#2F4156",
                                    fontWeight: "600",
                                    transition: "color 0.3s",
                                    marginBottom: "10px",
                                  }}
                                  ref={criticalRef}
                                  onMouseEnter={(e) =>
                                    (e.currentTarget.style.color = "#007BFF")
                                  }
                                  onMouseLeave={(e) =>
                                    (e.currentTarget.style.color = "#2F4156")
                                  }
                                >
                                  {item.title}
                                </h4>

                                <div
                                  style={{
                                    fontSize: "14px",
                                    color: "#666",
                                    marginBottom: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <span style={{ color: "#2F4156" }}>
                                    {item.date}
                                  </span>
                                  <div
                                    style={{
                                      height: "12px",
                                      width: "2px",
                                      background: "#000",
                                      margin: "0 10px",
                                    }}
                                  ></div>
                                  <span style={{ color: "#2F4156" }}>
                                    {item.author}
                                  </span>
                                </div>

                                {item.description && (
                                  <p
                                    style={{
                                      fontSize: "16.5px",
                                      color: "#333",
                                      lineHeight: "1.6",
                                    }}
                                  >
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
