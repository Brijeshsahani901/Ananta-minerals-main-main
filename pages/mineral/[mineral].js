import BlogSidebar from "@/components/elements/BlogSidebar";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { mineralData } from "@/util/mineralData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

export default function MineralDetails() {
  const router = useRouter();
  const { mineral } = router.query;
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (mineral) {
      const foundItem = mineralData.find((data) => data.mineral === mineral);
      setItem(foundItem);
    }
  }, [mineral]);

  if (!item) {
    return <div>Loading...</div>;
  }

  const renderContent = (content) => {
    return content.map((section, index) => {
      if (typeof section === "string") {
        return (
          <motion.p
            key={index}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-3"
          >
            {section}
          </motion.p>
        );
      }

      switch (section.type) {
        case "list":
          return (
            <motion.ul
              key={index}
              style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {section.items.map((item, i) => (
                <motion.li key={i} variants={itemVariants} className="mb-2">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          );
        case "partnerships":
          return (
            <motion.div
              key={index}
              className="table-responsive"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th>Initiative</th>
                    <th>Partners</th>
                    <th>Scope</th>
                    <th>Estimated Investment</th>
                  </tr>
                </thead>
                <tbody>
                  {section.items.map((row, i) => (
                    <tr key={i}>
                      <td>{row.name}</td>
                      <td>{row.partners}</td>
                      <td>{row.scope}</td>
                      <td>{row.investment || "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          );
        default:
          return null;
      }
    });
  };

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <Layout
      breadcrumbCategory={item.category || "Minerals"}
      breadcrumbPostTitle={item.title}
    >
      <motion.section
        className="blog-details-area"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          backgroundImage: `url("${basePath}/static/media/home-shape.684c9f3deb5fb22fbe2f.png")`,
        }}
      >
        <div style={{ width: "100%", background: "#f5f5f5" }}>
          <img
            src={`${basePath}/assets/minerals_images/min.jpg`}
            alt="Mineral Visual"
            style={{
              width: "100%",
            height : "400px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12">
              <motion.div
                className="bg-white p-5 rounded shadow-sm"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h4 className="title fw-bold mb-4" variants={itemVariants}>
                  {item.title}
                </motion.h4>

                <motion.div
                  className="blog-details-content"
                  variants={containerVariants}
                >
                  {item.sections.map((section, index) => (
                    <motion.div
                      key={index}
                      className="mb-5"
                      variants={itemVariants}
                    >
                      <h3 className="fs-4 fw-semibold mb-3">{section.title}</h3>
                      {renderContent(section.content)}
                    </motion.div>
                  ))}
                </motion.div>

                {item.author && (
                  <motion.div
                    className="blog-avatar-wrap bg-light p-4 mt-5 rounded d-flex align-items-center"
                    variants={itemVariants}
                  >
                    <div>
                      <p className="mb-2 text-muted">
                        {item.author.name} is a {item.author.role} with expertise in critical mineral supply chains and battery technologies.
                      </p>
                      <h5 className="name mb-1">{item.author.name}</h5>
                      <span className="designation text-muted">{item.author.role}</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}
