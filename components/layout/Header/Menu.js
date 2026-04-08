import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sectorItems, alternateTechItems } from "@/util/menuItems";
import { getAllSearchItems } from "@/util/searchItems";
import Swal from "sweetalert2";
import { usePathname } from "next/navigation";

import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});


// Get all search items by passing the required menu items
const allSearchItems = getAllSearchItems(alternateTechItems, sectorItems);

export default function Menu({
  handleMobileMenuOpen,
  handleSidebarOpen,
  offCanvasNav,
  logoAlt,
  white,
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const animationKeyRef = useRef(0);
  const [showEnterPopup, setShowEnterPopup] = useState(false);
  const enterPopupTimer = useRef(null);

  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);

  const filteredResults = searchResults.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "authors") return item.type === "author";
    if (activeFilter === "articles") return item.type === "article";
    if (activeFilter === "pages") return item.type === "page";
    return true;
  });

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = allSearchItems.filter((item) => {
      if (item.type === "author") {
        return (
          item.name.toLowerCase().includes(query) ||
          (item.category && item.category.toLowerCase().includes(query))
        );
      } else if (item.type === "article") {
        return (
          item.name.toLowerCase().includes(query) ||
          item.label.toLowerCase().includes(query) ||
          (item.author && item.author.toLowerCase().includes(query)) ||
          (item.category && item.category.toLowerCase().includes(query)) ||
          (item.content && item.content.toLowerCase().includes(query))
        );
      } else {
        return (
          item.label.toLowerCase().includes(query) ||
          (item.category && item.category.toLowerCase().includes(query))
        );
      }
    });

    setSearchResults(results);
  }, [searchQuery]);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    if (searchQuery.trim() === "") {
      return;
    }

    if (searchResults.length > 0) {
      Swal.fire({
        title: `Search Results for "${searchQuery}"`,
        html: `
        <style>
          .swal2-container {
            z-index: 99999 !important;
          }
          .swal2-popup {
            z-index: 100000 !important;
            position: relative;
            font-family: 'Inter', sans-serif !important;
          }
        </style>
        <div style="text-align: left; max-height: 60vh; overflow-y: auto; font-family: 'Inter', sans-serif;">
          ${searchResults
            .map((result) => {
              if (result.type === "author") {
                return `
                <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee; font-family: 'Inter', sans-serif;">
                  <h4 style="margin: 0 0 5px 0; color: #1FA3F3; font-family: 'Inter', sans-serif;">${result.name
                  }</h4>
                  <div style="font-size: 0.9em; color: #777; margin-bottom: 10px; font-family: 'Inter', sans-serif;">Author • ${result.category
                  }</div>
                  <div style="font-size: 0.9em; font-family: 'Inter', sans-serif;">
                    <strong>Articles:</strong>
                    <ul style="padding-left: 20px; margin: 5px 0 0 0; font-family: 'Inter', sans-serif;">
                      ${result.routes
                    .map(
                      (route) => `
                        <li style="margin-bottom: 5px; font-family: 'Inter', sans-serif;">
                          <a href="${basePath + route.path}" 
                             onclick="event.preventDefault(); window.location.href='${basePath + route.path
                        }'"
                             style="color: #4CAF50; text-decoration: none; cursor: pointer; font-family: 'Inter', sans-serif;">
                            ${route.label}
                          </a>
                        </li>
                      `
                    )
                    .join("")}
                    </ul>
                  </div>
                </div>
              `;
              } else if (result.type === "article") {
                const isExternal = result.isExternal;
                const linkTarget = isExternal ? "_blank" : "_self";
                const linkHref = isExternal
                  ? result.path
                  : basePath + result.path;

                return `
                <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee; font-family: 'Inter', sans-serif;">
                  <a href="${linkHref}" 
                     target="${linkTarget}"
                     onclick="${isExternal
                    ? ""
                    : `event.preventDefault(); window.location.href='${linkHref}'`
                  }"
                     style="color: #1FA3F3; text-decoration: none; cursor: pointer; font-family: 'Inter', sans-serif;">
                    ${result.label}
                  </a>
                  <div style="font-size: 0.9em; color: #777; font-family: 'Inter', sans-serif;">
                    ${result.category} • ${result.author} • ${result.date || ""}
                    ${isExternal ? " • External Link" : ""}
                  </div>
                  ${result.content
                    ? `
                  <div style="font-size: 0.85em; color: #555; margin-top: 5px; font-family: 'Inter', sans-serif;">
                    ${result.content.substring(0, 100)}...
                  </div>
                  `
                    : ""
                  }
                </div>
              `;
              } else {
                return `
                <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee; font-family: 'Inter', sans-serif;">
                  <a href="${basePath + result.path}" 
                     onclick="event.preventDefault(); window.location.href='${basePath + result.path
                  }'"
                     style="color: #1FA3F3; text-decoration: none; cursor: pointer; font-family: 'Inter', sans-serif;">
                    ${result.label}
                  </a>
                  <div style="font-size: 0.9em; color: #777; font-family: 'Inter', sans-serif;">${result.type
                  } • ${result.category}</div>
                </div>
              `;
              }
            })
            .join("")}
        </div>
      `,
        width: "700px",
        showConfirmButton: false,
        showCloseButton: true,
        background: "#fff",
        backdrop: `
        rgba(0,0,0,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
      });
    } else {
      Swal.fire({
        icon: "info",
        title: "No Results Found",
        text: `We couldn't find any matches for "${searchQuery}"`,
        confirmButtonText: "OK",
        background: "#fff",
        html: `
        <style>
          .swal2-container {
            z-index: 99999 !important;
          }
          .swal2-popup {
            z-index: 100000 !important;
            position: relative;
            font-family: 'Inter', sans-serif !important;
          }
        </style>
      `,
      });
    }
  };

  const handleResultClick = (result) => {
    if (result.type === "author") {
      router.push(result.routes[0].path);
    } else if (result.isExternal) {
      window.open(result.path, "_blank");
    } else {
      router.push(result.path);
    }
    setSearchQuery("");
    setShowResults(false);
  };

  return (
    <>
      <div className="tgmenu__wrap">
        <nav className="tgmenu__nav" style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  }}
>
<motion.div
  className="d-none d-lg-flex"
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4 }}
  style={{
    marginRight: "20px",
    alignItems: "center",
  }}
>
  <Link className={lato.className} href="/active-projects">
    <button
      className={lato.className}
      style={{
        background: "linear-gradient(135deg, #1FA3F3, #0d6efd)",
        border: "none",
        color: "#fff",
        padding: "8px 18px",
        borderRadius: "999px",
        fontSize: "14px",
        fontWeight: 500,
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 12px rgba(31,163,243,0.4)",
      }}
    >
    Active Exploration Projects
    </button>
  </Link>
</motion.div>

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

              {router.pathname !== "/" && (
                <motion.li
                  key="back-button"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(102, 126, 234, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push("/")}
                  style={{
                    margin: "0.5rem",
                    borderRadius: "999px",
                    cursor: "pointer",
                    color: "#F5EFEB",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.12)",
                    overflow: "hidden",
                    minWidth: "fit-content",
                    transition: "box-shadow 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <i
                    className="fas fa-long-arrow-left"
                    style={{
                      color: "white",
                      fontSize: "1rem",
                    }}
                  />
                </motion.li>
              )}
              {/* Sectors Menu */}



              {/* <motion.li
                onMouseEnter={() => setIsSubMenuOpen(true)}
                onMouseLeave={() => setIsSubMenuOpen(false)}
              >
                <Link href="#">
                  <span
                    style={{
                      color: "white",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Sectors
                  </span>
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
                        left: -100,
                        padding: "1rem",
                        display: "grid",
                        gridTemplateColumns: "repeat(1, 1fr)",
                        gap: "2rem",
                        zIndex: 100,
                        borderRadius: "8px",
                        backgroundColor: "#000",
                        color: "#fff",
                        width: "20vw",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {sectorItems.map((item) => (
                        <motion.li
                          key={item.path}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <Link href={item.path} passHref legacyBehavior>
                            <a
                              style={{
                                color: "white",
                                fontWeight: 300,
                                lineHeight: "1",
                                padding: "0.2rem 0",
                                display: "block",
                                transition: "color 0.2s ease",
                                fontFamily: "'Inter', sans-serif",
                              }}
                              onMouseEnter={(e) =>
                                (e.target.style.color = "#1FA3F3")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.color = "white")
                              }
                            >
                              <span
                                style={{ borderBottom: "0.5px solid white" }}
                              >
                                {item.label}
                              </span>
                            </a>
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li> */}
              {/* Supply Chains */}
              {/* <motion.li
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
                  <span
                    style={{
                      color: "white",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Supply Chains
                  </span>
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
              </motion.li> */}
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
                className={router.pathname === "/whats-new" ? "active" : ""}
              >
                <Link className={lato.className} href="/strategic-dialogues">
                
                  <span
                  className={lato.className}
                    style={{
                      color: "white",
                     
                    }}
                  >
                  Strategic Dialogues
                  </span>
                  {router.pathname === "/whats-new" && (
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

              {/* Alternate Tech */}
              <motion.li

               className={lato.className}
                onMouseEnter={() => setIsSubMenuOpen(true)}
                onMouseLeave={() => setIsSubMenuOpen(false)}
              >
                <Link href="#">
                  <span
                  className={lato.className}
                    style={{
                      color: "white",
                    
                    }}
                  >
                    Alternate Tech
                  </span>
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
                      className="sub-menu mineral-dropdown"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={{
                        hidden: { opacity: 0, y: -10 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { staggerChildren: 0.05 },
                        },
                      }}
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "-150%",
                        transform: "translateX(-50%)",
                        padding: "2rem",
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "1rem",
                        zIndex: 100,
                        borderRadius: "8px",
                        backgroundColor: "#000",
                        color: "#fff",
                        width: "58vw",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {alternateTechItems.map((item) => (
                        <motion.li
                          key={item.path}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <Link href={item.path} passHref legacyBehavior>
                            <a
                              style={{
                                color: "white",
                                fontWeight: 300,
                                lineHeight: "1",
                                padding: "0.2rem 0",
                                display: "block",
                                transition: "color 0.2s ease",
                                fontFamily: "'Inter', sans-serif",
                              }}
                              onMouseEnter={(e) =>
                                (e.target.style.color = "#1FA3F3")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.color = "white")
                              }
                            >
                              <span
                                style={{ borderBottom: "0.5px solid white" }}
                              >
                                {item.label}
                              </span>
                            </a>
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>
              {/* What's New */}
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
                className={router.pathname === "/whats-new" ? "active" : ""}
              >
                <Link className={lato.className} href="/whats-new">
                
                  <span
                  className={lato.className}
                    style={{
                      color: "white",
                     
                    }}
                  >
                    What's New
                  </span>
                  {router.pathname === "/whats-new" && (
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
              {/* About */}
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
                <Link className={lato.className} href="/about">
                  <span
                  className={lato.className}
                    style={{
                      color: "white",
                    
                    }}
                  >
                    About
                  </span>
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
              {/* Search */}
              {/* <motion.li
                className="menu-search"
                 style={{ marginLeft: "auto" }}
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
                ref={searchRef}
              >
                <div
                  className="search-container"
                  style={{
                    position: "relative",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <form onSubmit={handleSearch}>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          setShowResults(true);
                        }}
                        onFocus={() => setShowResults(true)}
                      />
                      <div className="">
                        <button
                          className="btn"
                          style={{
                            backgroundColor: "#F5EFEB",
                            color: "#2F4156",
                            fontFamily: "'Inter', sans-serif",
                          }}
                          type="submit"
                        >
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>

                  <AnimatePresence>
                    {showResults && searchResults.length > 0 && (
                      <motion.div
                        className="search-results"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          right: 0,
                          backgroundColor: "#000",
                          borderRadius: "4px",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                          zIndex: 1000,
                          maxHeight: "400px",
                          overflowY: "auto",
                          border: "1px solid rgba(255,255,255,0.1)",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {filteredResults.map((result) => (
                          <div
                            key={
                              result.type === "author"
                                ? result.name
                                : result.path + result.label
                            }
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {result.type === "author" ? (
                              <div
                                style={{
                                  padding: "10px 15px",
                                  fontFamily: "'Inter', sans-serif",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: "8px",
                                  }}
                                >
                                  <div
                                    style={{
                                      fontWeight: 600,
                                      color: "#fff",
                                      fontFamily: "'Inter', sans-serif",
                                    }}
                                  >
                                    {result.name}
                                  </div>
                                  <div
                                    style={{
                                      fontSize: "0.7rem",
                                      color: "rgba(255,255,255,0.5)",
                                      textTransform: "uppercase",
                                      fontFamily: "'Inter', sans-serif",
                                    }}
                                  >
                                    Author
                                  </div>
                                </div>
                                <div style={{ marginTop: "10px" }}>
                                  <div
                                    style={{
                                      fontSize: "0.8rem",
                                      color: "rgba(255,255,255,0.6)",
                                      marginBottom: "5px",
                                      fontFamily: "'Inter', sans-serif",
                                    }}
                                  >
                                    Articles:
                                  </div>
                                  {result.routes.map((route, i) => (
                                    <motion.div
                                      key={route.path}
                                      whileHover={{
                                        backgroundColor:
                                          "rgba(255,255,255,0.1)",
                                      }}
                                      style={{
                                        padding: "8px 10px",
                                        cursor: "pointer",
                                        borderRadius: "4px",
                                        marginBottom: "4px",
                                        display: "flex",
                                        alignItems: "center",
                                        fontFamily: "'Inter', sans-serif",
                                      }}
                                      onClick={() => {
                                        router.push(route.path);
                                        setSearchQuery("");
                                        setShowResults(false);
                                      }}
                                    >
                                      <i
                                        className="fas fa-file-alt"
                                        style={{
                                          marginRight: "8px",
                                          color: "rgba(255,255,255,0.5)",
                                          fontSize: "0.8rem",
                                        }}
                                      />
                                      <span
                                        style={{
                                          color: "#1FA3F3",
                                          fontFamily: "'Inter', sans-serif",
                                        }}
                                      >
                                        {route.label}
                                      </span>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            ) : result.type === "article" ? (
                              <div key={`article-${result.path}`}>
                                <motion.div
                                  whileHover={{
                                    backgroundColor: "rgba(255,255,255,0.1)",
                                  }}
                                  style={{
                                    padding: "8px 10px",
                                    cursor: "pointer",
                                    marginBottom: "4px",
                                    display: "flex",
                                    alignItems: "center",
                                    color: "white",
                                    fontFamily: "'Inter', sans-serif",
                                  }}
                                  onClick={() => handleResultClick(result)}
                                >
                                  <i
                                    className={`fas ${
                                      result.isExternal
                                        ? "fa-external-link-alt"
                                        : "fa-file-alt"
                                    }`}
                                    style={{
                                      marginRight: "8px",
                                      color: "rgba(255,255,255,0.5)",
                                      fontSize: "0.8rem",
                                    }}
                                  />
                                  <div>
                                    <div
                                      style={{
                                        color: "#1FA3F3",
                                        fontFamily: "'Inter', sans-serif",
                                      }}
                                    >
                                      {result.label}
                                    </div>
                                    <div
                                      style={{
                                        fontSize: "0.7rem",
                                        color: "rgba(255,255,255,0.6)",
                                        fontFamily: "'Inter', sans-serif",
                                      }}
                                    >
                                      {result.author} • {result.category}
                                      {result.isExternal && " • External"}
                                    </div>
                                  </div>
                                </motion.div>
                              </div>
                            ) : (
                              <motion.div
                                whileHover={{
                                  backgroundColor: "rgba(255,255,255,0.1)",
                                }}
                                style={{
                                  padding: "10px 15px",
                                  cursor: "pointer",
                                  borderBottom:
                                    "1px solid rgba(255,255,255,0.05)",
                                  fontFamily: "'Inter', sans-serif",
                                }}
                                onClick={() => handleResultClick(result)}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <div
                                    style={{
                                      fontWeight: 500,
                                      color: "#fff",
                                      fontFamily: "'Inter', sans-serif",
                                    }}
                                  >
                                    {result.label}
                                  </div>
                                  <div
                                    style={{
                                      fontSize: "0.7rem",
                                      color: "rgba(255,255,255,0.5)",
                                      textTransform: "uppercase",
                                      fontFamily: "'Inter', sans-serif",
                                    }}
                                  >
                                    Page
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.li> */}
            </motion.ul>
          </div>
         <div
  className="search-container d-none d-lg-block"
  style={{
    position: "relative",
    fontFamily: "'Inter', sans-serif",
    marginBottom: "10px"
  }}
>

            <form onSubmit={handleSearch}>
              <div className="input-group">
                <>
                  <style>
                    {`
      .search-input::placeholder {
        font-size: 15px;
      }
    `}
                  </style>

                  <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowResults(true);
                    }}
                    onFocus={() => setShowResults(true)}
                  />
                </>

                <div className="">
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#F5EFEB",
                      color: "#2F4156",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    type="submit"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>

            <AnimatePresence>
              {showResults && searchResults.length > 0 && (
                <motion.div
                  className="search-results"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    backgroundColor: "#000",
                    borderRadius: "4px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    zIndex: 1000,
                    maxHeight: "400px",
                    overflowY: "auto",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {filteredResults.map((result) => (
                    <div
                      key={
                        result.type === "author"
                          ? result.name
                          : result.path + result.label
                      }
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {result.type === "author" ? (
                        <div
                          style={{
                            padding: "10px 15px",
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "8px",
                            }}
                          >
                            <div
                              style={{
                                fontWeight: 600,
                                color: "#fff",
                                fontFamily: "'Inter', sans-serif",
                              }}
                            >
                              {result.name}
                            </div>
                            <div
                              style={{
                                fontSize: "0.7rem",
                                color: "rgba(255,255,255,0.5)",
                                textTransform: "uppercase",
                                fontFamily: "'Inter', sans-serif",
                              }}
                            >
                              Author
                            </div>
                          </div>
                          <div style={{ marginTop: "10px" }}>
                            <div
                              style={{
                                fontSize: "0.8rem",
                                color: "rgba(255,255,255,0.6)",
                                marginBottom: "5px",
                                fontFamily: "'Inter', sans-serif",
                              }}
                            >
                              Articles:
                            </div>
                            {result.routes.map((route, i) => (
                              <motion.div
                                key={route.path}
                                whileHover={{
                                  backgroundColor:
                                    "rgba(255,255,255,0.1)",
                                }}
                                style={{
                                  padding: "8px 10px",
                                  cursor: "pointer",
                                  borderRadius: "4px",
                                  marginBottom: "4px",
                                  display: "flex",
                                  alignItems: "center",
                                  fontFamily: "'Inter', sans-serif",
                                }}
                                onClick={() => {
                                  router.push(route.path);
                                  setSearchQuery("");
                                  setShowResults(false);
                                }}
                              >
                                <i
                                  className="fas fa-file-alt"
                                  style={{
                                    marginRight: "8px",
                                    color: "rgba(255,255,255,0.5)",
                                    fontSize: "0.8rem",
                                  }}
                                />
                                <span
                                  style={{
                                    color: "#1FA3F3",
                                    fontFamily: "'Inter', sans-serif",
                                  }}
                                >
                                  {route.label}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ) : result.type === "article" ? (
                        <div key={`article-${result.path}`}>
                          <motion.div
                            whileHover={{
                              backgroundColor: "rgba(255,255,255,0.1)",
                            }}
                            style={{
                              padding: "8px 10px",
                              cursor: "pointer",
                              marginBottom: "4px",
                              display: "flex",
                              alignItems: "center",
                              color: "white",
                              fontFamily: "'Inter', sans-serif",
                            }}
                            onClick={() => handleResultClick(result)}
                          >
                            <i
                              className={`fas ${result.isExternal
                                  ? "fa-external-link-alt"
                                  : "fa-file-alt"
                                }`}
                              style={{
                                marginRight: "8px",
                                color: "rgba(255,255,255,0.5)",
                                fontSize: "0.8rem",
                              }}
                            />
                            <div>
                              <div
                                style={{
                                  color: "#1FA3F3",
                                  fontFamily: "'Inter', sans-serif",
                                }}
                              >
                                {result.label}
                              </div>
                              <div
                                style={{
                                  fontSize: "0.7rem",
                                  color: "rgba(255,255,255,0.6)",
                                  fontFamily: "'Inter', sans-serif",
                                }}
                              >
                                {result.author} • {result.category}
                                {result.isExternal && " • External"}
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      ) : (
                        <motion.div
                          whileHover={{
                            backgroundColor: "rgba(255,255,255,0.1)",
                          }}
                          style={{
                            padding: "10px 15px",
                            cursor: "pointer",
                            borderBottom:
                              "1px solid rgba(255,255,255,0.05)",
                            fontFamily: "'Inter', sans-serif",
                          }}
                          onClick={() => handleResultClick(result)}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                color: "#fff",
                                fontFamily: "'Inter', sans-serif",
                              }}
                            >
                              {result.label}
                            </div>
                            <div
                              style={{
                                fontSize: "0.7rem",
                                color: "rgba(255,255,255,0.5)",
                                textTransform: "uppercase",
                                fontFamily: "'Inter', sans-serif",
                              }}
                            >
                              Page
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile navigation remains the same */}
        <motion.div
          className="mobile-nav-toggler d-xl-none  d-lg-none"
          style={{
            display: "flex",
            justifyContent: pathname == "/" ? "end" : "space-between",
            width: "80%",
            alignItems: "center",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {pathname !== "/" && (
            <motion.li
              key="back-button"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(102, 126, 234, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.back()}
              style={{
                borderRadius: "999px",
                cursor: "pointer",
                color: "#F5EFEB",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.12)",
                overflow: "hidden",
                minWidth: "fit-content",
                transition: "box-shadow 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
              }}
            >
              <i
                className="fas fa-long-arrow-left"
                style={{
                  color: "white",
                  fontSize: "1rem",
                }}
              />
            </motion.li>
          )}

          <i className="fas fa-bars" onClick={handleMobileMenuOpen} />
        </motion.div>
      </div>

      <AnimatePresence>
        {showEnterPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              bottom: "30px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#000",
              color: "#fff",
              padding: "15px 25px",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.1)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              maxWidth: "90%",
              width: "auto",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <div style={{ marginRight: "10px" }}>
              <i className="fas fa-info-circle" style={{ color: "#1FA3F3" }} />
            </div>
            <div>
              <div
                style={{
                  fontWeight: 500,
                  marginBottom: "5px",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Available Search Options
              </div>
              <div
                style={{
                  fontSize: "0.9rem",
                  opacity: 0.8,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Search through articles, authors, pages, and news updates
              </div>
            </div>
            <button
              onClick={() => setShowEnterPopup(false)}
              style={{
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.6)",
                marginLeft: "15px",
                cursor: "pointer",
              }}
            >
              <i className="fas fa-times" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .navigation {
          display: flex;
          gap: 1.5rem;
          position: relative;
          font-family: "Inter", sans-serif !important;
        }

        .navigation li {
          position: relative;
          list-style: none;
          font-family: "Inter", sans-serif !important;
        }

        .navigation li a {
          position: relative;
          padding: 0.5rem 0;
          color: ${white ? "#fff" : "#111"};
          text-decoration: none;
          transition: color 0.3s ease;
          border-bottom: none;
          box-shadow: none;
          font-family: "Inter", sans-serif !important;
        }

        .navigation li.active a {
          color: var(--tg-theme-primary);
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
          boxshadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          z-index: 100;
          font-family: "Inter", sans-serif !important;
        }

        .sub-menu li {
          margin-bottom: 0.5rem;
          font-family: "Inter", sans-serif !important;
        }

        .sub-menu li:last-child {
          margin-bottom: 0;
        }

        .sub-menu li a {
          color: ${white ? "#111" : "#fff"};
          white-space: nowrap;
          font-family: "Inter", sans-serif !important;
        }

        .sub-menu li.active a {
          color: var(--tg-theme-primary);
        }

        .menu-search {
          display: flex;
          align-items: center;
          margin-left: 1rem;
          font-family: "Inter", sans-serif !important;
        }

        .input-group {
          width: 200px;
          margin-top: 10px;
          font-family: "Inter", sans-serif !important;
        }

        .input-group input {
          border-radius: 4px 0 0 4px;
          height: 36px;
          font-family: "Inter", sans-serif !important;
        }

        .input-group .btn {
          border-radius: 0 4px 4px 0;
          padding: 0 0.75rem;
          height: 36px;
          font-family: "Inter", sans-serif !important;
        }

        /* Ensure all text elements use Inter */
        .tgmenu__nav,
        .tgmenu__navbar-wrap,
        .tgmenu__main-menu,
        .sub-menu,
        .search-results,
        .search-container,
        .search-container input,
        .search-container button {
          font-family: "Inter", sans-serif !important;
        }
      `}</style>
    </>
  );
}
