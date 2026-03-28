
"use client";

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function StrategicDialogues() {

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const [selectedImage, setSelectedImage] = useState(null);

  const images = {
    indiaCanada: [
      { src: "Picture2_compressed.webp", caption: "Opening Remarks - India-Canada Dialogue" },
      { src: "Picture3_compressed.webp", caption: "Panel Discussion - Economic Resilience" },
      { src: "Picture4_compressed.webp", caption: "Critical Minerals Supply Chains Session" },
      { src: "Picture5_compressed.webp", caption: "Delegates at the Dialogue" },
      { src: "Picture6_compressed.webp", caption: "Bilateral Discussions" },
      { src: "Picture7_compressed.webp", caption: "Working Group Session" },
      { src: "Picture8_compressed.webp", caption: "Technical Session on Rare Earths" },
      { src: "Picture9_compressed.webp", caption: "Networking Reception" },
      { src: "Picture10_compressed.webp", caption: "Policy Roundtable" },
      { src: "Picture11_compressed.webp", caption: "Closing Remarks" },
    ],

    indiaUS: [
      { src: "Picture12_compressed.webp", caption: "14th India-U.S. Track II Dialogue - Opening Session" },
      { src: "Picture13_compressed.webp", caption: "Energy Cooperation Working Group" },
      { src: "Picture14_compressed.webp", caption: "Track II Dialogue Participants" },
    ],

    indiaAustralia: [
      { src: "Picture15_compressed.webp", caption: "India-Australia Track II Dialogue" },
      { src: "Picture16_compressed.webp", caption: "Climate Change and Energy Discussions" },
    ],
  };

  // MODAL - same as before
  const ImageModal = ({ image, onClose }) => {
    if (!image) return null;

    return (
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.9)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
          cursor: "pointer"
        }}
      >
        <img
          src={`${basePath}/assets/img/strategic-dialogues/${image.src}`}
          alt={image.caption}
          style={{
            maxWidth: "90%",
            maxHeight: "90%",
            objectFit: "contain"
          }}
        />
      </div>
    );
  };

  // OPTIMIZED SLIDER - only image loading improved
  const Slider = ({ images }) => {
    const [loadedImages, setLoadedImages] = useState({});

    return (
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
        speed={800}
        style={{
          height: "530px",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                position: "relative",
                height: "530px",
                cursor: "pointer",
                background: "#f0f0f0" // Placeholder background
              }}
              onClick={() => setSelectedImage(img)}
            >
          <Image
  src={`${basePath}/assets/img/strategic-dialogues/${img.src}`}
  alt={img.caption}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  priority={index === 0}
  placeholder="blur"
  blurDataURL= {`${basePath}/assets/img/strategic-dialogues/${img.src}`}
  style={{
    objectFit: "cover",
    filter: loadedImages[img.src] ? "blur(0px)" : "blur(20px)",
    transform: loadedImages[img.src] ? "scale(1)" : "scale(1.05)",
    transition: "all 0.6s ease"
  }}
  onLoadingComplete={() =>
    setLoadedImages(prev => ({ ...prev, [img.src]: true }))
  }
/>
            </div>
          </SwiperSlide>
        ))}
        <style jsx>{`
          .spinner {
            width: 40px;
            height: 40px;
            border: 3px solid #e0e0e0;
            border-top: 3px solid #2c3e50;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </Swiper>
    );
  };

  return (
    <Layout>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "20px 0", marginRight: "40px" }}
      >

        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />

        <div className="row justify-content-center">

          <div className="col-xl-12 col-lg-12">

            <div style={{ marginLeft: "10px", marginRight: "-25px" }}>

              <div
                style={{
                  paddingLeft: "10px",
                  borderRadius: "15px",
                  backgroundColor: "#fff",
                  boxShadow: "0 5px 25px rgba(0,0,0,0.05)"
                }}
              >

                {/* INDIA CANADA */}
                <section className="dialogue-section">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="pe-lg-4">
                        <h4 style={{
                          color: "#2c3e50",
                          fontSize: "1.8rem",
                          fontWeight: "bold",
                          marginBottom: "1rem",
                        }}>
                          India-Canada Dialogue
                        </h4>
                        <p className="text-muted mt-3">
                          <strong>Economic Resilience & Critical Minerals Supply Chains</strong><br />
                          24-25 November, 2025 | New Delhi
                        </p>
                        <p className="my-3">
                          Ananta Aspen Centre in collaboration with the Asia-Pacific Foundation of Canada, hosted the India–Canada Dialogue on Economic Resilience & Critical Minerals Supply Chains on the 24–25 of November, New Delhi. The dialogue opened with remarks from Shri K. Nagaraj Naidu, Additional Secretary, Americas Division, MEA, Hon. Victor Fedeli, Minister of Economic Development, Job Creation and Trade, Government of Ontario, and Ms Sara Wilshaw, Senior Assistant Deputy Minister, International Trade and Chief Trade Commissioner of Canada.
                        </p>
                        <p className="my-3">
                          The dialogue centred on practical, actionable cooperation across four pillars: strengthening India-Canada
                          economic resilience and identifying short-to-medium term deliverables; unlocking trade and investment through
                          tools like offtake-backed finance, targeted tariff and rules-of-origin approaches, and project-level incentives;
                          mapping geopolitical and technology vulnerabilities and proposing joint R&D, financing and governance responses,
                          with special attention to rare-earths; and converting discussions into a sequenced, accountable roadmap of pilots,
                          policy reforms and financing mechanisms.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <Slider images={images.indiaCanada} />
                    </div>
                  </div>
                </section>

                {/* INDIA US */}
                <section className="dialogue-section">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <Slider images={images.indiaUS} />
                    </div>

                    <div className="col-lg-6">
                      <div className="ps-lg-4">
                        <h4 style={{
                          color: "#2c3e50",
                          fontSize: "1.8rem",
                          fontWeight: "bold",
                          marginBottom: "1rem",
                        }}>
                          14th India-U.S. Track II Dialogue on Energy Cooperation
                        </h4>
                        <p className="text-muted mb-3">
                          <strong>Energy Cooperation</strong><br />
                          19-20 May, 2025 | Washington D.C
                        </p>
                        <p className="my-3">
                          The 14th India–US Track II Dialogue on Energy Cooperation was held on May 19–20 in Washington, D.C., co-chaired by Mr. Jamshyd Godrej, Mr. John Podesta, and Mr. William Reilly. The Dialogue focused on key strategic themes, including energy finance, potential collaboration in breakthrough technologies like nuclear and hydrogen energy, and climate resilience for extreme heat and cooling systems.
                        </p>
                        <p className="my-3">
                          At the Track II Dialogue, India-United States cooperation on critical minerals within the scope of breakthrough
                          technologies was discussed. Participants treated these materials as foundational to the energy transition-critical
                          for batteries, grid storage, renewables, hydrogen and advanced nuclear, and prioritized coordinated supply-chain
                          mapping and stress-testing; offtake-backed finance for mining and midstream/refining projects; joint investment
                          in recycling, precursor capacity and pilot strategic stockpiles; harmonized traceability, standards and
                          export-control coordination; and collaborative R&D on substitution and materials-recovery technologies.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* INDIA AUSTRALIA */}
                <section className="dialogue-section">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="pe-lg-4">
                        <h4 style={{
                          color: "#2c3e50",
                          fontSize: "1.8rem",
                          fontWeight: "bold",
                          marginBottom: "1rem",
                        }}>
                          India-Australia Track II Dialogue
                        </h4>
                        <p className="text-muted mb-3">
                          <strong>Climate Change and Energy</strong><br />
                          25-26 August, 2025 | Canberra
                        </p>
                        <p className="my-3">
                          The India–Australia Track II Dialogue on Climate Change and Energy was convened on 25–26 August in Canberra, in partnership with the Australian Strategic Policy Institute (ASPI). This inaugural edition marked Ananta Aspen Centre's first formal engagement with Australia and served as an important step in strengthening bilateral cooperation on climate and energy issues. The dialogue brought together experts and stakeholders to deliberate on a range of themes, including shared challenges and opportunities, energy transition, climate resilience, critical minerals, and investment pathways.
                        </p>
                        <p className="my-3">
                          Key takeaways from the discussions included the importance of identifying one or two joint "lighthouse projects" that could demonstrate tangible outcomes and help build trust in the partnership. Participants highlighted the strong potential for collaboration on green skills certification, critical minerals processing, and clean energy innovation, leveraging Australia's technical expertise and India's scale and market. There was also recognition of the opportunity to align efforts ahead of COP31, which is expected to be hosted in Australia, to showcase joint action and regional leadership on climate and energy issues.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <Slider images={images.indiaAustralia} />
                    </div>
                  </div>
                </section>

              </div>

            </div>

          </div>

        </div>

        <style jsx>{`
          .dialogue-section {
            padding: 3rem 0;
            border-bottom: 1px solid #eaeaea;
          }
          .dialogue-section:last-child {
            border-bottom: none;
          }
          @media (max-width: 768px) {
            .dialogue-section {
              padding: 2rem 0;
            }
            h4 {
              font-size: 1.4rem !important;
              margin-top: 1.5rem;
            }
          }
        `}</style>

      </motion.section>

    </Layout>
  );
}