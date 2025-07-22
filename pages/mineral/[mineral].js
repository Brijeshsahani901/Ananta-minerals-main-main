import BlogSidebar from "@/components/elements/BlogSidebar";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mineralData } from "@/util/mineralData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

export default function MineralDetails() {
    const router = useRouter();
    const { mineral } = router.query;
    const [item, setItem] = useState(null);

    useEffect(() => {
        if (mineral) {
            const foundItem = mineralData.find(data => data.mineral === mineral);
            setItem(foundItem);
        }
    }, [mineral]);

    if (!item) {
        return <div>Loading...</div>;
    }

    const renderContent = (content) => {
      return content.map((section, index) => {
        switch (section.type) {
          case 'list':
            return (
              <motion.ul 
                key={index} 
                className="list-wrap custom-bullet-list"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {section.items.map((item, i) => (
                  <motion.li 
                    key={i} 
                    variants={itemVariants}
                    className=""
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            );
          case 'partnerships':
            return (
              <motion.div 
                key={index} 
                className="partnerships-section"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {section.items.map((partnership, i) => (
                  <motion.div 
                    key={i} 
                    className="partnership-item" 
                    style={{ marginBottom: '2rem' }}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4>{partnership.name}</h4>
                    <p><strong>Partners:</strong> {partnership.partners}</p>
                    <p><strong>Scope:</strong> {partnership.scope}</p>
                  </motion.div>
                ))}
              </motion.div>
            );
          case 'recommendations':
            return (
              <motion.div 
                key={index} 
                className="recommendations-section"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {section.items.map((rec, i) => (
                  <motion.div 
                    key={i} 
                    className="recommendation-item" 
                    style={{ marginBottom: '1.5rem' }}
                    variants={itemVariants}
                  >
                    <h5>{rec.title}</h5>
                    <p>{rec.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            );
          default:
            return (
              <motion.p 
                key={index}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                {section}
              </motion.p>
            );
        }
      });
    };

    return (
      <Layout breadcrumbCategory={item.category} breadcrumbPostTitle={item.title}>
  <motion.section
    className="blog-details-area"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
   style={{ backgroundImage: `url("https://brijesh.alpinesoftit.com/site3/static/media/home-shape.684c9f3deb5fb22fbe2f.png")` }}
  >
    <div className="container">
      <div className="row justify-content-center gx-5">
        {/* Social Icons */}
        {/* <div className="col-lg-1 d-none d-lg-block">
          <motion.div
            className="blog-details-social sticky-top"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ul className="list-wrap">
              {["facebook-f", "twitter", "linkedin-in", "behance", "share"].map((icon, i) => (
                <li key={i}>
                  <Link href="#">
                    <i className={`fab fa-${icon}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div> */}

        {/* Main Blog Content */}
        <div className="col-xl-10 col-lg-11">
          <motion.div
            className="blog-details-wrap bg-white p-5 rounded shadow-sm"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.ul className="tgbanner__content-meta list-wrap mb-4" variants={itemVariants}>
              <li className="category  text-white py-2 px-3 fs-6">
                <Link href="/blog">{item.category}</Link>
              </li>
            </motion.ul>

            <motion.h2 className="title display-5 fw-bold mb-4" variants={itemVariants}>
              {item.title}
            </motion.h2>

            <motion.div className="blog-details-thumb mb-5" variants={fadeIn}>
              {/* {item.img &&  <img
                src={`/assets/img/${item.group}/${item.img}`}
                alt={item.title}
                className="img-fluid rounded"
              />} */}
             
            </motion.div>

            <motion.div className="blog-details-content" variants={containerVariants}>
              {item.sections.map((section, index) => (
                <motion.div key={index} className="mb-5" variants={itemVariants}>
                  <h3 className="fs-3 fw-semibold mb-3">{section.title}</h3>
                 <p>{renderContent(section.content)}</p> 
                </motion.div>
              ))}
            </motion.div>

            {/* Author Box */}
            <motion.div className="blog-avatar-wrap bg-light p-4 mt-5 rounded d-flex align-items-center" variants={itemVariants}>
              <div>
                <p className="mb-2 text-muted">
                  {item.author.name} is a {item.author.role} with expertise in critical mineral supply chains and battery technologies.
                </p>
                <h5 className="name mb-1">{item.author.name}</h5>
                <span className="designation text-muted">{item.author.role}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.section>

  <style jsx>{`
    .blog-details-social ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .blog-details-social li a {
      color: #333;
      background: #fff;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      transition: all 0.3s;
    }

    .blog-details-social li a:hover {
      color: white;
      background: var(--tg-theme-primary);
    }

    .title {
      line-height: 1.3;
    }

    .blog-details-content ul.list-wrap {
      padding-left: 1.5rem;
    }

    .blog-details-content li {
      margin-bottom: 0.5rem;
    }
  `}</style>
</Layout>

    );
}