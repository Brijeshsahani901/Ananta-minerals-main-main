// import Link from "next/link";
// import { useState } from "react";

// const MobileMenu = ({ handleMobileMenuClose, openClass }) => {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

//   const [isActive, setIsActive] = useState({
//     status: false,
//     key: "",
//   });

//   const handleToggle = (key) => {
//     if (isActive.key === key) {
//       setIsActive({ status: false, key: "" });
//     } else {
//       setIsActive({ status: true, key });
//     }
//   };

//   const alternateTechItems = [
//     { path: "/mineral/cobalt", label: "Cobalt" },
//     { path: "/mineral/copper", label: "Copper" },
//     { path: "/mineral/graphite", label: "Graphite" },
//     { path: "/mineral/lithium", label: "Lithium" },
//     { path: "/mineral/nickel", label: "Nickel" },
//     { path: "/mineral/niobium", label: "Niobium" },
//     { path: "/mineral/phosphorus", label: "Phosphorus" },
//     { path: "/mineral/pgm", label: "Platinum Group Metals" },
//     { path: "/mineral/potash", label: "Potash" },
//     { path: "/mineral/ree", label: "Rare Earth Elements" },
//     { path: "/mineral/selenium", label: "Selenium" },
//     { path: "/mineral/sulphur", label: "Sulphur" },
//     { path: "/mineral/tantalum", label: "Tantalum" },
//     { path: "/mineral/tellurium", label: "Tellurium" },
//     { path: "/mineral/tungsten", label: "Tungsten" },
//     { path: "/mineral/vanadium", label: "Vanadium" },
//     { path: "/mineral/zinc", label: "Zinc" },
//   ];

//   const sectorItems = [
//     { path: "/agriculture", label: "Agriculture" },
//     { path: "/automobile", label: "Automobile" },
//     { path: "/defence-and-aerospace", label: "Defence & Aerospace" },
//     { path: "/renewable-energy", label: "Renewable Energy" },
//   ];

//   return (
//     <>
//       <div className="tgmobile__menu">
//         <nav className="tgmobile__menu-box">
//           <div className="close-btn" onClick={handleMobileMenuClose}>
//             <i className="fas fa-times" />
//           </div>

//           <div className="nav-logo">
//             <img
//               src={`${basePath}/assets/ananta.png`}
//               alt="Logo"
//               style={{
//                 height: "60px",
//                 width: "180px",
//                 objectFit: "cover",
//                 objectPosition: "center",
//                 scale: "1.6",
//               }}
//             />
//           </div>

//           <div className="tgmobile__search">
//             <form action="#">
//               <input type="text" placeholder="Search here..." />
//               <button>
//                 <i className="far fa-search" />
//               </button>
//             </form>
//           </div>

//           <div className="tgmobile__menu-outer">
//             <ul className="navigation">
//               <li
//                 className="menu-item-has-children"
//                 onClick={() => handleToggle(2)}
//               >
//                 <Link href="#">Sectors</Link>
//                 <ul
//                   className="sub-menu"
//                   style={{ display: isActive.key === 2 ? "block" : "none" }}
//                 >
//                   {sectorItems.map((item) => (
//                     <li key={item.path}>
//                       <Link href={item.path}>{item.label}</Link>
//                     </li>
//                   ))}
//                 </ul>
//                 <div
//                   className={`dropdown-btn ${isActive.key === 2 ? "open" : ""}`}
//                 >
//                   <span className="plus-line" />
//                 </div>
//               </li>

//               <li>
//                 <Link href="/supply-chain">Supply Chain</Link>
//               </li>

//               <li
//                 className="menu-item-has-children"
//                 onClick={() => handleToggle(1)}
//               >
//                 <Link href="#">Alternate Tech</Link>
//                 <ul
//                   className="sub-menu"
//                   style={{ display: isActive.key === 1 ? "block" : "none" }}
//                 >
//                   {alternateTechItems.map((item) => (
//                     <li key={item.path}>
//                       <Link href={item.path}>{item.label}</Link>
//                     </li>
//                   ))}
//                 </ul>
//                 <div
//                   className={`dropdown-btn ${isActive.key === 1 ? "open" : ""}`}
//                 >
//                   <span className="plus-line" />
//                 </div>
//               </li>
//               <li>
//                 <Link href="/whats-new">What's New</Link>
//               </li>
//               <li>
//                 <Link href="/about">About</Link>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>

//       <div
//         className="tgmobile__menu-backdrop"
//         onClick={handleMobileMenuClose}
//       />
//     </>
//   );
// };

// export default MobileMenu;

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sectorItems, alternateTechItems } from "@/util/menuItems";
import { getAllSearchItems } from "@/util/searchItems";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

// Get all search items by passing the required menu items
const allSearchItems = getAllSearchItems(alternateTechItems, sectorItems);

const MobileMenu = ({ handleMobileMenuClose, openClass }) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const router = useRouter();

  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  // Search functionality states
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const searchRef = useRef(null);

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({ status: false, key: "" });
    } else {
      setIsActive({ status: true, key });
    }
  };

  // Filter results based on active filter
  const filteredResults = searchResults.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "authors") return item.type === "author";
    if (activeFilter === "articles") return item.type === "article";
    if (activeFilter === "pages") return item.type === "page";
    return true;
  });

  // Search logic
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

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();

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
                  <h4 style="margin: 0 0 5px 0; color: #1FA3F3; font-family: 'Inter', sans-serif;">${
                    result.name
                  }</h4>
                  <div style="font-size: 0.9em; color: #777; margin-bottom: 10px; font-family: 'Inter', sans-serif;">Author • ${
                    result.category
                  }</div>
                  <div style="font-size: 0.9em; font-family: 'Inter', sans-serif;">
                    <strong>Articles:</strong>
                    <ul style="padding-left: 20px; margin: 5px 0 0 0; font-family: 'Inter', sans-serif;">
                      ${result.routes
                        .map(
                          (route) => `
                        <li style="margin-bottom: 5px; font-family: 'Inter', sans-serif;">
                          <a href="${basePath + route.path}" 
                             onclick="event.preventDefault(); window.location.href='${
                               basePath + route.path
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
                     onclick="${
                       isExternal
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
                  ${
                    result.content
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
                     onclick="event.preventDefault(); window.location.href='${
                       basePath + result.path
                     }'"
                     style="color: #1FA3F3; text-decoration: none; cursor: pointer; font-family: 'Inter', sans-serif;">
                    ${result.label}
                  </a>
                  <div style="font-size: 0.9em; color: #777; font-family: 'Inter', sans-serif;">${
                    result.type
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
    handleMobileMenuClose(); // Close mobile menu after navigation
  };

  return (
    <>
      <div className="tgmobile__menu">
        <nav className="tgmobile__menu-box">
          <div className="close-btn" onClick={handleMobileMenuClose}>
            <i className="fas fa-times" />
          </div>

          <div className="nav-logo">
            <img
              src={`${basePath}/assets/ananta.png`}
              alt="Logo"
              style={{
                height: "60px",
                width: "180px",
                objectFit: "cover",
                objectPosition: "center",
                scale: "1.6",
              }}
            />
          </div>

          {/* Search Section with Results */}
          <div className="tgmobile__search" ref={searchRef}>
            <form onSubmit={handleSearch}>
              <div className="input-group" style={{ position: "relative" }}>
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
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    border: "1px solid #dee2e6",
                    borderRadius: "4px 0 0 4px",
                  }}
                />
                <button type="submit">
                  <i className="far fa-search" />
                </button>
              </div>
            </form>

            {/* Search Results Dropdown */}
            <AnimatePresence>
              {showResults && searchResults.length > 0 && (
                <motion.div
                  className="mobile-search-results"
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
                    maxHeight: "300px",
                    overflowY: "auto",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontFamily: "'Inter', sans-serif",
                    marginTop: "5px",
                  }}
                >
                  {/* Filter Tabs */}
                  <div
                    style={{
                      display: "flex",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {["all", "articles", "authors", "pages"].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        style={{
                          flex: 1,
                          padding: "8px 4px",
                          background: "none",
                          border: "none",
                          color:
                            activeFilter === filter
                              ? "#1FA3F3"
                              : "rgba(255,255,255,0.7)",
                          fontSize: "0.7rem",
                          textTransform: "capitalize",
                          cursor: "pointer",
                          fontFamily: "'Inter', sans-serif",
                          borderBottom:
                            activeFilter === filter
                              ? "2px solid #1FA3F3"
                              : "none",
                        }}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>

                  {/* Search Results */}
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
                            borderBottom: "1px solid rgba(255,255,255,0.05)",
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
                            {result.routes.slice(0, 2).map((route, i) => (
                              <motion.div
                                key={route.path}
                                whileHover={{
                                  backgroundColor: "rgba(255,255,255,0.1)",
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
                                  handleMobileMenuClose();
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
                                    fontSize: "0.85rem",
                                    fontFamily: "'Inter', sans-serif",
                                  }}
                                >
                                  {route.label}
                                </span>
                              </motion.div>
                            ))}
                            {result.routes.length > 2 && (
                              <div
                                style={{
                                  fontSize: "0.7rem",
                                  color: "rgba(255,255,255,0.5)",
                                  textAlign: "center",
                                  fontFamily: "'Inter', sans-serif",
                                }}
                              >
                                +{result.routes.length - 2} more
                              </div>
                            )}
                          </div>
                        </div>
                      ) : result.type === "article" ? (
                        <div key={`article-${result.path}`}>
                          <motion.div
                            whileHover={{
                              backgroundColor: "rgba(255,255,255,0.1)",
                            }}
                            style={{
                              padding: "12px 15px",
                              cursor: "pointer",
                              borderBottom: "1px solid rgba(255,255,255,0.05)",
                              display: "flex",
                              alignItems: "flex-start",
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
                                marginRight: "10px",
                                color: "rgba(255,255,255,0.5)",
                                fontSize: "0.9rem",
                                marginTop: "2px",
                              }}
                            />
                            <div style={{ flex: 1 }}>
                              <div
                                style={{
                                  color: "#1FA3F3",
                                  fontSize: "0.9rem",
                                  marginBottom: "4px",
                                  fontFamily: "'Inter', sans-serif",
                                }}
                              >
                                {result.label}
                              </div>
                              <div
                                style={{
                                  fontSize: "0.75rem",
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
                            padding: "12px 15px",
                            cursor: "pointer",
                            borderBottom: "1px solid rgba(255,255,255,0.05)",
                            fontFamily: "'Inter', sans-serif",
                          }}
                          onClick={() => handleResultClick(result)}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                fontWeight: 500,
                                color: "#fff",
                                fontSize: "0.9rem",
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

          <div className="tgmobile__menu-outer">
            <ul className="navigation">
              <li
                className="menu-item-has-children"
                onClick={() => handleToggle(2)}
              >
                <Link href="#">Sectors</Link>
                <ul
                  className="sub-menu"
                  style={{ display: isActive.key === 2 ? "block" : "none" }}
                >
                  {sectorItems.map((item) => (
                    <li key={item.path}>
                      <Link href={item.path} onClick={handleMobileMenuClose}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div
                  className={`dropdown-btn ${isActive.key === 2 ? "open" : ""}`}
                >
                  <span className="plus-line" />
                </div>
              </li>

              <li>
                <Link href="/supply-chain" onClick={handleMobileMenuClose}>
                  Supply Chain
                </Link>
              </li>

              <li
                className="menu-item-has-children"
                onClick={() => handleToggle(1)}
              >
                <Link href="#">Alternate Tech</Link>
                <ul
                  className="sub-menu"
                  style={{ display: isActive.key === 1 ? "block" : "none" }}
                >
                  {alternateTechItems.map((item) => (
                    <li key={item.path}>
                      <Link href={item.path} onClick={handleMobileMenuClose}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div
                  className={`dropdown-btn ${isActive.key === 1 ? "open" : ""}`}
                >
                  <span className="plus-line" />
                </div>
              </li>
              <li>
                <Link href="/whats-new" onClick={handleMobileMenuClose}>
                  What's New
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={handleMobileMenuClose}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div
        className="tgmobile__menu-backdrop"
        onClick={handleMobileMenuClose}
      />

      <style jsx>{`
        .tgmobile__search {
          position: relative;
          margin-bottom: 20px;
          font-family: "Inter", sans-serif !important;
        }

        .tgmobile__search .input-group {
          position: relative;
          display: flex;
          font-family: "Inter", sans-serif !important;
        }

        .tgmobile__search input {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-family: "Inter", sans-serif !important;
        }

        .tgmobile__search input::placeholder {
          color: rgba(255, 255, 255, 0.6);
          font-family: "Inter", sans-serif !important;
        }

        .tgmobile__search button {
          position: absolute;
          right: 5px;
          top: 50%;
          transform: translateY(-50%);
          background: #1fa3f3;
          border: none;
          color: white;
          padding: 8px 12px;
          border-radius: 4px;
          cursor: pointer;
          font-family: "Inter", sans-serif !important;
        }

        .mobile-search-results {
          font-family: "Inter", sans-serif !important;
        }

        .mobile-search-results::-webkit-scrollbar {
          width: 6px;
        }

        .mobile-search-results::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }

        .mobile-search-results::-webkit-scrollbar-thumb {
          background: #1fa3f3;
          border-radius: 3px;
        }

        /* Ensure all text elements use Inter */
        .tgmobile__menu,
        .tgmobile__menu-box,
        .tgmobile__menu-outer,
        .navigation,
        .sub-menu,
        .mobile-search-results,
        .tgmobile__search,
        .tgmobile__search input,
        .tgmobile__search button {
          font-family: "Inter", sans-serif !important;
        }
      `}</style>
    </>
  );
};

export default MobileMenu;
