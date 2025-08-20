import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ handleMobileMenuClose, openClass }) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({ status: false, key: "" });
    } else {
      setIsActive({ status: true, key });
    }
  };

  const alternateTechItems = [
    { path: "/mineral/cobalt", label: "Cobalt" },
    { path: "/mineral/copper", label: "Copper" },
    { path: "/mineral/graphite", label: "Graphite" },
    { path: "/mineral/lithium", label: "Lithium" },
    { path: "/mineral/nickel", label: "Nickel" },
    { path: "/mineral/niobium", label: "Niobium" },
    { path: "/mineral/phosphorus", label: "Phosphorus" },
    { path: "/mineral/pgm", label: "Platinum Group Metals" },
    { path: "/mineral/potash", label: "Potash" },
    { path: "/mineral/ree", label: "Rare Earth Elements" },
    { path: "/mineral/selenium", label: "Selenium" },
    { path: "/mineral/sulphur", label: "Sulphur" },
    { path: "/mineral/tantalum", label: "Tantalum" },
    { path: "/mineral/tellurium", label: "Tellurium" },
    { path: "/mineral/tungsten", label: "Tungsten" },
    { path: "/mineral/vanadium", label: "Vanadium" },
    { path: "/mineral/zinc", label: "Zinc" },
  ];

  const sectorItems = [
    { path: "/agriculture", label: "Agriculture" },
    { path: "/automobile", label: "Automobile" },
    { path: "/defence-and-aerospace", label: "Defence & Aerospace" },
    { path: "/renewable-energy", label: "Renewable Energy" },
  ];

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

          <div className="tgmobile__search">
            <form action="#">
              <input type="text" placeholder="Search here..." />
              <button>
                <i className="far fa-search" />
              </button>
            </form>
          </div>

          <div className="tgmobile__menu-outer">
            <ul className="navigation">


              <li className="menu-item-has-children" onClick={() => handleToggle(2)}>
                <Link href="#">Sectors</Link>
                <ul
                  className="sub-menu"
                  style={{ display: isActive.key === 2 ? "block" : "none" }}
                >
                  {sectorItems.map((item) => (
                    <li key={item.path}>
                      <Link href={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
                <div className={`dropdown-btn ${isActive.key === 2 ? "open" : ""}`}>
                  <span className="plus-line" />
                </div>
              </li>

                <li>
                <Link href="/supply-chain">Supply Chain</Link>
              </li>
           

              <li className="menu-item-has-children" onClick={() => handleToggle(1)}>
                <Link href="#">Alternate Tech</Link>
                <ul
                  className="sub-menu"
                  style={{ display: isActive.key === 1 ? "block" : "none" }}
                >
                  {alternateTechItems.map((item) => (
                    <li key={item.path}>
                      <Link href={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
                <div className={`dropdown-btn ${isActive.key === 1 ? "open" : ""}`}>
                  <span className="plus-line" />
                </div>
              </li>
                <li>
                <Link href="/whats-new">What's New</Link>
              </li>

                


           

            

                 <li>
                <Link href="/about">About</Link>
              </li>

              {/* <li className="menu-item-has-children" onClick={() => handleToggle(3)}>
                <Link href="#">Infographics</Link>
                <ul
                  className="sub-menu"
                  style={{ display: isActive.key === 3 ? "block" : "none" }}
                >
                  <li>
                    <Link href="/droneAssembly">Military Drone Assembly</Link>
                  </li>
                  <li>
                    <Link href="/batteryScene">Alternative Tech Sodium Ion</Link>
                  </li>
                  <li>
                    <Link href="/reerecycling">REE</Link>
                  </li>
                  <li>
                    <Link href="/batteryManufacturing">EV Battery</Link>
                  </li>
                  <li>
                    <Link href="/solar">Solar PV</Link>
                  </li>
                </ul>
                <div className={`dropdown-btn ${isActive.key === 3 ? "open" : ""}`}>
                  <span className="plus-line" />
                </div>
              </li> */}

            </ul>
          </div>
        </nav>
      </div>

      <div className="tgmobile__menu-backdrop" onClick={handleMobileMenuClose} />
    </>
  );
};

export default MobileMenu;
