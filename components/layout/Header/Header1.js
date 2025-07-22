import Link from "next/link";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import Sidebar from "./Sidebar";
import { useRouter } from 'next/router';

const Header1 = ({
  scroll,
  handleMobileMenuOpen,
  handleMobileMenuClose,
  langToggle,
  handleLangToggle,
  handleSidebarClose,
  handleSidebarOpen,
}) => {
  const router = useRouter();
  return (
    <>
      <header>
        
        <div className="header__top"
>
          <div className="container">
            <div className="row align-items-center">
             
<div className="col-12 d-flex justify-content-center my-2" >

      <div className="header__top-logo logo text-lg-left">
        <img
          src="/site6/assets/ananta-logo-transparent.png"
          onClick={() => router.push('/')} // Wrap in arrow function
          alt="Logo"
          style={{
            height: "50px",
            width: "280px",
            objectFit: "cover",
            objectPosition: "center",
            transition: "transform 0.3s ease",
            scale: "1.6",
            cursor: "pointer" // Add pointer cursor to indicate clickable
          }}
        />
      </div>
    </div>
           
            </div>
          </div>
        </div>
        <div
          id="header-fixed-height"
          className={`${scroll ? "active-height" : ""}`}
        />
        <div
    style={{ background: "radial-gradient(circle, #000033, #000011)" }}


          id="sticky-header"
          className={`tg-header__area ${scroll ? "sticky-menu" : ""}`}
        >
          <div className="container" >
            <div className="row" >
              <div className="col-12" >
                <Menu
                  handleMobileMenuOpen={handleMobileMenuOpen}
                  handleSidebarOpen={handleSidebarOpen}
                  offCanvasNav
                />
                <MobileMenu handleMobileMenuClose={handleMobileMenuClose} />
              </div>
            </div>
          </div>
        </div>
        <Sidebar handleSidebarClose={handleSidebarClose} />
      </header>
    </>
  );
};

export default Header1;
