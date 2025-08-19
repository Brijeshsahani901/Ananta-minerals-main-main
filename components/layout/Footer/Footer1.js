import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa6";
import Link from "next/link";

export default function Footer1({}) {
  return (
    <>
      <footer className="footer-area black-bg mt-3">
        <div className="container">
          <div className="footer__copyright">
            <div className="row">
              <div className="col-lg-6" >
                  <p style={{color : "gray"}}>
                    Designed by &nbsp;
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://alpinesoftit.com/"
                      style={{ textTransform: "none", color: "#999999" }}
                    >
                      Alpinesoft IT Solutions Pvt Ltd
                    </a>
                    &nbsp; - {new Date().getFullYear()}
                  </p>
              </div>
              <div className="col-lg-6">
                <div className="copyright__menu">
                  <ul
                    className="footer__social"
                    style={{
                      listStyle: "none",
                      display: "flex",
                      gap: "60px",
                      padding: 0,
                      margin: 0,
                      alignItems: "start",
                      marginRight: "30px",
                    }}
                  >
                    <li>
                      <div className="mb-2 text-white">Contact Us</div>

                      <p
                        style={{
                          maxWidth: "20vw",
                          color: "white",
                          fontSize: "14px",
                          fontWeight: "light",
                        }}
                      >
                        The Ravi Shankar Centre 7, R. P, Dr Jose P Rizal Marg,
                        Chanakyapuri, New Delhi, Delhi 110021
                        <div className="copyright__text mt-2">
                          admin@anantacentre.in
                        </div>
                      </p>
                    </li>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "full",
                        flex: 1,
                      }}
                    >
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://x.com/AnantaAspen"
                          aria-label="Twitter"
                        >
                          <FaXTwitter size={20} />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.linkedin.com/company/ananta-aspen-centre"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedinIn size={20} />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/anantaaspencentre/"
                          aria-label="Instagram"
                        >
                          <FaInstagram size={20} />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://anantaaspencentre.in"
                        >
                          <FaGlobe size={16} />
                        </a>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
