"use client";

import Layout from "@/components/layout/Layout";
import TrendingSlider from "@/components/slider/TrendingSlider";
import TechnologySlider from "@/components/slider/TechnologySlider";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FloatingParticles from "@/components/floatingParticle";
import ScrollContainer from "@/components/scrollContainer";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const postItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Sample mineral posts
const mineralPosts = [
  {
    id: 1,
    imageUrl:
      "https://www.mindat.org/imagecache/7b/de/06496280017271926488539.jpg",
    title: "The Stunning Geometry of Pyrite: Nature's Perfect Cubes",
    description:
      "Discover how pyrite forms its characteristic cubic crystals and why it's called fool's gold.",
  },
  {
    id: 2,
    imageUrl:
      "https://www.mindat.org/imagecache/e0/e2/06653070017271921489864.jpg",
    title: "Amethyst: The Royal Purple Quartz with Ancient Healing Lore",
    description:
      "Explore the history and geology behind this beautiful purple variety of quartz.",
  },
  {
    id: 3,
    imageUrl:
      "https://www.mindat.org/imagecache/da/77/06672520017271923175982.jpg",
    title: "Fluorite: The Most Colorful Mineral in the World",
    description:
      "Learn why fluorite displays such a remarkable range of colors and its industrial uses.",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=500&h=350&q=80",
    title: "Malachite: The Striking Green Banded Stone of Copper",
    description:
      "How this vibrant green mineral forms in copper deposits and its historical significance.",
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1605106702734-205df224ecce?auto=format&fit=crop&w=500&h=350&q=80",
    title: "Quartz: The Most Abundant Mineral on Earth's Surface",
    description:
      "The many varieties and remarkable properties of this common but fascinating mineral.",
  },
  {
    id: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&h=350&q=80",
    title: "Bismuth: The Rainbow Metallic Crystal with Hopper Growth",
    description:
      "The science behind bismuth's spectacular iridescent colors and geometric shapes.",
  },
  {
    id: 7,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Opal-53714.jpg",
    title: "Opal: The Play-of-Color Gem That Contains Water",
    description:
      "How opals form and what causes their unique play-of-color phenomenon.",
  },
  {
    id: 8,
    imageUrl:
      "https://i0.wp.com/geologyscience.com/wp-content/uploads/2018/04/Quartz_Tibet.jpg?w=1021&ssl=1",
    title: "Tourmaline: The Electric Mineral With Piezoelectric Properties",
    description:
      "Why tourmaline can generate electricity when heated and its many color varieties.",
  },
];

export default function Home1() {
  const [isOpen, setOpen] = useState(false);
  const [showTechSlider, setShowTechSlider] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTechSlider(true);
    }, 1000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
      <Layout headerStyle={1}>
        <motion.section
          className="tgbanner__area"
          variants={fadeInUp}
          // style={{
          //   padding: "20px 10px",
          // }}
        >
          <div className="container" style={{ boxSizing: "border-box" }}>
            <div
              className="tgbanner__grid"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "40px",
                justifyContent: "space-between",
              }}
            >
              <div
                className="tgbanner__post big-post col-9"
                style={{
                  flex: "1 1 600px",
                  minWidth: "300px",
                  boxSizing: "border-box",
                }}
              >
                <div className="tgbanner__thumb tgImage__hover col-lg-12 col-md-12 col-sm-12">
                  {showTechSlider && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={fadeInUp}
                    >
                      <TechnologySlider />
                    </motion.div>
                  )}
                </div>
              </div>

              <motion.div
                className="col-lg-3 col-md-12 col-sm-12"
                style={{
                  height: "72vh",
                  overflowY: "auto",
                  paddingRight: "10px",
                  scrollbarWidth: "thin",
                }}
                variants={staggerContainer}
              >
                {mineralPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    variants={postItem}
                    style={{
                      marginBottom: "30px",
                      borderBottom: "1px solid #eee",
                      paddingBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        overflow: "hidden",
                        borderRadius: "8px",
                      }}
                    >
                      <Link href="#">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                          }}
                        />
                      </Link>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      <h2
                        style={{
                          fontSize: "16px",
                          margin: "8px 0 0",
                        }}
                      >
                        <Link href="#">{post.title}</Link>
                      </h2>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "gray",
                          margin: "5px 0 0",
                        }}
                      >
                        {post.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
           <motion.section
          className="trending-post-area section__hover-line pb-20"
          variants={fadeInUp}
        >
          <div className="container">
            <div className="section__title-wrap mb-40">
              <div className="row align-items-end">
                <div className="col-sm-6">
                  <div className="section__title">
                    <span className="section__sub-title">Popular Minerals</span>
                    <h3 className="section__main-title">
                      Trending New minerals
                    </h3>
                  </div>
                </div>
                {/* <div className="col-sm-6">
                  <div className="section__read-more text-start text-sm-end">
                    <Link href="">
                      More Critical minerals{" "}
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="trending__slider">
              <div className="swiper-container trending-active">
                <TrendingSlider showItem={4} />
              </div>
            </div>
          </div>
        </motion.section>
        </motion.section>

        {/* Trending Section */}
       
      </Layout>
    </motion.div>
  );
}
