import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ThemeSwitch = dynamic(() => import("@/components/elements/ThemeSwitch"), {
  ssr: false,
});

export default function Menu({
  handleMobileMenuOpen,
  handleSidebarOpen,
  offCanvasNav,
  logoAlt,
  white,
}) {
  const router = useRouter();
  const [searchToggle, setSearchToggle] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const initialLoadRef = useRef(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const animationKeyRef = useRef(0); // Key to force re-render

const alternateTechItems = [
  {
    path: "/mineral/cobalt",
    label: "Cobalt",
    image: "https://media.istockphoto.com/id/1293782313/photo/cobalt-stone-on-isolated-white-background-industrial-ore-used-in-construction-and-medicine.jpg?s=612x612&w=0&k=20&c=YwD--yQb2JkWLoQ3V_Rc2MbCQU77Dr2IyYYQfh9Lxq0=", // Cobalt ore image
  },
  {
    path: "/mineral/copper",
    label: "Copper",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Copper-21991.jpg", // Copper metal
  },
  {
    path: "/mineral/graphite",
    label: "Graphite",
    image: "https://i0.wp.com/geologyscience.com/wp-content/uploads/2019/06/Graphite2.jpg?resize=800%2C600&ssl=1", // Graphite chunks
  },
  {
    path: "/mineral/lithium",
    label: "Lithium",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5d5NcXj5tmd1gi32yC0om6yV3EGEyHrdHg&s", // Lithium batteries
  },
  {
    path: "/mineral/nickel",
    label: "Nickel",
    image: "https://www.cohenusa.com/wp-content/uploads/2020/09/nickel-ore-resized.jpeg", // Nickel pellets
  },
  {
    path: "/mineral/niobium",
    label: "Niobium",
    image: "https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/arm/uploads/2020/04/Uses_of_Niobium.jpg", // Niobium metal
  },
  {
    path: "/mineral/phosphorus",
    label: "Phosphorus",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEojfFA-8alASBlPispqpRY1mpQfBF6ae7-qaZJX5uWp-tcpLWuwfqRz12KdqwtyRZzS4&usqp=CAU", // Phosphorus sample
  },
  {
    path: "/mineral/pgm",
    label: "Platinum Group Metals",
    image: "https://www.bullionbypost.co.uk/media/uploads/pages/images/2019/06/05/Osmium_cluster.jpg", // Platinum metals
  },
  {
    path: "/mineral/potash",
    label: "Potash",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJL5T2cLwXKlgbDgj0M8KeAAZPhpwMHLK5As6h6l5W12aoXB-eQIFVf1oYE_hP7aLMEn8&usqp=CAU", // Potash crystals
  },
  {
    path: "/mineral/ree",
    label: "Rare Earth Elements",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGIlv_jlsM4cXT7oCewbmGg-WpXg9pn4Fiw&s", // Rare earth ores
  },
  {
    path: "/mineral/selenium",
    label: "Selenium",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp47-ERe-Z123AITp_MzJIPvBzS8EBdzD-6LMDTy6IEipt6Xoj-I2Ksw1YbyKwI4wvzmw&usqp=CAU", // Selenium sample
  },
  {
    path: "/mineral/sulphur",
    label: "Sulphur",
    image: "https://www.mindat.org/imagecache/b5/e7/01341590017271926903882.jpg", // Sulfur crystals
  },
  {
    path: "/mineral/tantalum",
    label: "Tantalum",
    image: "https://investingnews.com/media-library/tantalum-ore-nuggets.jpg?id=52378085&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C0", // Tantalum capacitor
  },
  {
    path: "/mineral/tellurium",
    label: "Tellurium",
    image: "https://www.mindat.org/imagecache/94/dd/09973020017271926994361.jpg", // Tellurium sample
  },
  {
    path: "/mineral/tungsten",
    label: "Tungsten",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNymnxOn7WMYG9rNgbs28aL0g_wwjjMdCHYg&s", // Tungsten metal
  },
  {
    path: "/mineral/vanadium",
    label: "Vanadium",
    image: "https://m.media-amazon.com/images/I/813X-xOUidL.jpg", // Vanadium pentoxide
  },
  {
    path: "/mineral/zinc",
    label: "Zinc",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Sphalerite4.jpg/250px-Sphalerite4.jpg", // Zinc metal sheets
  }
];

const sectorItems = [
 {
    path: "/agriculture",
    label: "Agriculture",
    image: "https://media.istockphoto.com/id/543212762/photo/tractor-cultivating-field-at-spring.jpg?s=612x612&w=0&k=20&c=uJDy7MECNZeHDKfUrLNeQuT7A1IqQe89lmLREhjIJYU=", // Cobalt ore image
  }, {
    path: "/automobile",
    label: "Automobile",
    image: "https://t4.ftcdn.net/jpg/03/05/62/85/360_F_305628557_uL3ekPhLRHrGjSL8KfPFqOX0JQbjL4D6.jpg", // Cobalt ore image
  }, {
    path: "/defense-and-aerospace",
    label: "Defence & Aerospace",
    image: "https://media.istockphoto.com/id/1393877368/photo/jet-fighters-flying-over-the-clouds.jpg?s=612x612&w=0&k=20&c=55sIGBxms9CeOogF2euYJHLK1G8O97Zs614dnHZn2YM=", // Cobalt ore image
  }, {
    path: "/renewable-energy",
    label: "Renewable energy",
    image: "https://drmcet.ac.in/wp-content/uploads/2024/06/Renewable-energy-image.png", // Cobalt ore image
  },
]


  // Check if animation should play (only once per session)
  useEffect(() => {
    if (initialLoadRef.current) {
      initialLoadRef.current = false;

      // Check session storage to see if animation has already played
      const hasAnimated = sessionStorage.getItem("menuAnimationPlayed");

      if (!hasAnimated) {
        setShouldAnimate(true);
        // Mark animation as played for this session
        sessionStorage.setItem("menuAnimationPlayed", "true");

        // Reset after animation completes
        setTimeout(() => {
          setShouldAnimate(false);
          animationKeyRef.current += 1; // Force re-render to remove animation triggers
        }, 1500); // Match the animation duration
      }
    }
  }, []);


  return (
  <>
  <div className="tgmenu__wrap">
    <nav className="tgmenu__nav">
      {logoAlt && (
        <motion.div
          className="d-flex gap-4 align-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="offcanvas-toggle"
            onClick={handleSidebarOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="#">
              <i className="flaticon-menu-bar" />
            </Link>
          </motion.div>
          <motion.div className="logo" whileHover={{ scale: 1.03 }}>
            <Link href="/">
              <img
                src={`assets/img/logo/${white ? "w_logo" : "logo"}.png`}
                alt="Logo"
              />
            </Link>
          </motion.div>
        </motion.div>
      )}

      <div
        className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex"
        style={{ position: "relative", zIndex: 9999 }}
      >
        <motion.ul
          key={animationKeyRef.current}
          className="navigation"
          initial={shouldAnimate ? "hidden" : false}
          animate="false"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
        >
          <motion.li
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 50,
                  damping: 12,
                },
              },
            }}
            whileHover={{ scale: 1.05 }}
            className={router.pathname === "/about" ? "active" : ""}
          >
            <Link href="/about">
              About
              {router.pathname === "/about" && (
                <motion.div
                  className="nav-indicator"
                  layoutId="navIndicator"
                  initial={false}
                  style={{
                    position: "absolute",
                    bottom: "0px",
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "var(--tg-theme-primary)",
                  }}
                />
              )}
            </Link>
          </motion.li>
           <motion.li
            className="menu-item-has-children"
            onMouseEnter={() => setIsSubMenuOpen(true)}
            onMouseLeave={() => setIsSubMenuOpen(false)}
          >
            <Link href="/alternate-tech">
              Alternate tech
              {router.pathname === "/alternate-tech" && (
                <motion.div
                  className="nav-indicator"
                  layoutId="navIndicator"
                  initial={false}
                  style={{
                    position: "absolute",
                    bottom: "0px",
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "var(--tg-theme-primary)",
                  }}
                />
              )}
            </Link>

            <AnimatePresence>
              {isSubMenuOpen && (
                <motion.ul
                  className="sub-menu with-images"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: -200,
                    padding: "1rem",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: "1rem",
                    zIndex: 100,
                    borderRadius: "8px",
                    width: "max-content",
                    minWidth: "800px",
                    maxHeight: "600px",
                    overflowY: "auto",
                  }}
                >
                  {alternateTechItems.map((item) => (
                    <motion.li
                      key={item.path}
                      variants={{
                        hidden: { opacity: 0, y: -10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ scale: 1.03 }}
                      className={router.pathname === item.path ? "active" : ""}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                      }}
                    >
                      <Link href={item.path}>
                        <div style={{ textDecoration: "none" }}>
                          <img
                            src={item.image}
                            alt={item.label}
                            style={{
                              width: "100%",
                              height: "100px",
                              objectFit: "cover",
                              borderRadius: "8px",
                              boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                            }}
                          />
                          <div style={{
                            padding: "0.2rem",
                            fontWeight: 500,
                            fontSize: "0.75rem",
                            textAlign: "center",
                            color: "#333",
                          }}>
                            {item.label}
                          </div>
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.li>

           <motion.li
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 50,
                  damping: 12,
                },
              },
            }}
            whileHover={{ scale: 1.05 }}
            className={router.pathname === "/opinion" ? "active" : ""}
          >
            <Link href="/opinion">
              Opinion (archive)
              {router.pathname === "/opinion" && (
                <motion.div
                  className="nav-indicator"
                  layoutId="navIndicator"
                  initial={false}
                  style={{
                    position: "absolute",
                    bottom: "0px",
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "var(--tg-theme-primary)",
                  }}
                />
              )}
            </Link>
          </motion.li>

          <motion.li
            className="menu-item-has-children"
            onMouseEnter={() => setIsSubMenuOpen(true)}
            onMouseLeave={() => setIsSubMenuOpen(false)}
          >
            <Link href="/sectors">
              Sectors
              {router.pathname === "/sectors" && (
                <motion.div
                  className="nav-indicator"
                  layoutId="navIndicator"
                  initial={false}
                  style={{
                    position: "absolute",
                    bottom: "0px",
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "var(--tg-theme-primary)",
                  }}
                />
              )}
            </Link>

            <AnimatePresence>
              {isSubMenuOpen && (
                <motion.ul
                  className="sub-menu with-images"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: -200,
                    padding: "1rem",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: "1rem",
                    zIndex: 100,
                    borderRadius: "8px",
                    width: "max-content",
                    minWidth: "500px",
                  }}
                >
                  {sectorItems.map((item) => (
                    <motion.li
                      key={item.path}
                      variants={{
                        hidden: { opacity: 0, y: -10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ scale: 1.03 }}
                      className={router.pathname === item.path ? "active" : ""}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                      }}
                    >
                      <Link href={item.path}>
                        <div style={{ textDecoration: "none" }}>
                          <img
                            src={item.image}
                            alt={item.label}
                            style={{
                              width: "100%",
                              height: "100px",
                              objectFit: "cover",
                              borderRadius: "8px",
                              boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                            }}
                          />
                          <div style={{
                            padding: "0.2rem",
                            fontWeight: 500,
                            fontSize: "0.75rem",
                            textAlign: "center",
                            color: "#333",
                          }}>
                            {item.label}
                          </div>
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.li>

          <motion.li
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 50,
                  damping: 12,
                },
              },
            }}
            whileHover={{ scale: 1.05 }}
            className={router.pathname === "/supply-chain" ? "active" : ""}
          >
            <Link href="/supply-chain">
              Supply chain
              {router.pathname === "/supply-chain" && (
                <motion.div
                  className="nav-indicator"
                  layoutId="navIndicator"
                  initial={false}
                  style={{
                    position: "absolute",
                    bottom: "0px",
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "var(--tg-theme-primary)",
                  }}
                />
              )}
            </Link>
          </motion.li>

          <motion.li
            className="menu-search"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 50,
                  damping: 12,
                },
              },
            }}
          >
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                onChange={(e) =>
                  console.log("Searching for:", e.target.value)
                }
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </motion.li>


        </motion.ul>
      </div>
    </nav>

    <motion.div
      className="mobile-nav-toggler"
      onClick={handleMobileMenuOpen}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <i className="fas fa-bars" />
    </motion.div>
  </div>

  <style jsx>{`
    .navigation {
      display: flex;
      gap: 1.5rem;
      position: relative;
    }

    .navigation li {
      position: relative;
      list-style: none;
    }

  .navigation li a {
  position: relative;
  padding: 0.5rem 0;
  color: ${white ? "#fff" : "#111"};
  text-decoration: none; 
  font-weight: 500;
  transition: color 0.3s ease;

  /* Add this line if needed */
  border-bottom: none;
  box-shadow: none;
}


    .navigation li.active a {
      color: var(--tg-theme-primary);
      font-weight: 600;
    }

    .sub-menu {
      position: absolute;
      top: 100%;
      left: 0;
      background: ${white
        ? "rgba(255,255,255,0.95)"
        : "rgba(17,17,17,0.95)"};
      min-width: 200px;
      padding: 0rem;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      z-index: 100;
    }

    .sub-menu li {
      margin-bottom: 0.5rem;
    }

    .sub-menu li:last-child {
      margin-bottom: 0;
    }

    .sub-menu li a {
      color: ${white ? "#111" : "#fff"};
      white-space: nowrap;
    }

    .sub-menu li.active a {
      color: var(--tg-theme-primary);
    }

    .menu-search {
      display: flex;
      align-items: center;
      margin-left: 1rem;
    }

    .input-group {
      width: 200px;
      margin-top: 10px;
    }

    .input-group input {
      border-radius: 4px 0 0 4px;
      height: 36px;
    }

    .input-group .btn {
      border-radius: 0 4px 4px 0;
      padding: 0 0.75rem;
      height: 36px;
    }
  `}</style>
</>
  );
}
