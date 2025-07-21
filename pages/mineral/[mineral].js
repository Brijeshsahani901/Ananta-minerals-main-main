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
              className="blog-details-area pt-80 pb-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-1">
                            <motion.div 
                              className="blog-details-social"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                                <ul className="list-wrap">
                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-behance" /></Link></li>
                                    <li><Link href="#"><i className="fas fa-share" /></Link></li>
                                </ul>
                            </motion.div>
                        </div>
                        <div className="col-xl-11 col-lg-10">
                            <motion.div 
                              className="blog-details-wrap"
                              variants={containerVariants}
                              initial="hidden"
                              animate="visible"
                            >
                                <motion.ul 
                                  className="tgbanner__content-meta list-wrap"
                                  variants={itemVariants}
                                >
                                    <li className="category"><Link href="/blog">{item.category}</Link></li>
                                    {/* <li><span className="by">By</span> <Link href="/blog">{item.author.name}</Link></li>
                                    <li>{item.date}</li>
                                    <li>{item.comments} comments</li> */}
                                </motion.ul>
                                
                                <motion.h2 
                                  className="title"
                                  variants={itemVariants}
                                >
                                  {item.title}
                                </motion.h2>
                                
                                <motion.div 
                                  className="blog-details-thumb"
                                  variants={fadeIn}
                                >
                                    <img src={`/assets/img/${item.group}/${item.img}`} alt="" style={{ width: "100%" }} />
                                </motion.div>
                                
                                <motion.div 
                                  className="blog-details-content"
                                  variants={containerVariants}
                                >
                                    {item.sections.map((section, index) => (
                                        <motion.div 
                                          key={index}
                                          variants={itemVariants}
                                        >
                                            <h3 className="">{section.title}</h3>
                                            {renderContent(section.content)}
                                        </motion.div>
                                    ))}
                                    
                                
                                </motion.div>
                                
                               
                                
                                <motion.div 
                                  className="blog-avatar-wrap"
                                  variants={itemVariants}
                                >
                                   
                                    <div className="blog-avatar-content">
                                        <p>{item.author.name} is a {item.author.role} with expertise in critical mineral supply chains and battery technologies.</p>
                                        <h5 className="name">{item.author.name}</h5>
                                        <span className="designation">{item.author.role}</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                        {/* <div className="col-xl-3 col-lg-4 col-md-6">
                            <BlogSidebar />
                        </div> */}
                    </div>
                </div>
            </motion.section>

            <style jsx>{`
                .custom-bullet-list {
                    list-style-type: none;
                    padding-left: 1.5rem;
                }
                
                .custom-bullet-item {
                    position: relative;
                    margin-bottom: 0.75rem;
                    padding-left: 1.5rem;
                    line-height: 1.6;
                }
                
                .custom-bullet-item::before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: var(--tg-theme-primary);
                    font-size: 1.5rem;
                    line-height: 1;
                }
                
                .blog-details-content ul.list-wrap {
                    margin-top: 1rem;
                    margin-bottom: 1.5rem;
                }
                
                .blog-details-content li {
                    margin-bottom: 0.5rem;
                }
            `}</style>
        </Layout>
    );
}