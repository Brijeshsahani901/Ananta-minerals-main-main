import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export default function Footer1({}) {
  return (
    <>
      <footer className="footer-area black-bg mt-3">
        <div className="container">
          {/* <div className="footer__top-wrap">
                        <div className="row">
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <div className="footer__widget">
                                    <h4 className="fw-title">Worldwide</h4>
                                    <ul className="list-wrap">
                                        <li><Link href="#">U.N.</Link></li>
                                        <li><Link href="#">Conflicts</Link></li>
                                        <li><Link href="#">Terrorism</Link></li>
                                        <li><Link href="#">Disasters</Link></li>
                                        <li><Link href="#">Global Economy</Link></li>
                                        <li><Link href="#">Environment</Link></li>
                                        <li><Link href="#">Religion</Link></li>
                                        <li><Link href="#">Scandals</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <div className="footer__widget">
                                    <h4 className="fw-title">Politics</h4>
                                    <ul className="list-wrap">
                                        <li><Link href="#">Executive</Link></li>
                                        <li><Link href="#">Senate</Link></li>
                                        <li><Link href="#">House</Link></li>
                                        <li><Link href="#">Judiciary</Link></li>
                                        <li><Link href="#">Global Economy</Link></li>
                                        <li><Link href="#">Foreign policy</Link></li>
                                        <li><Link href="#">Polls</Link></li>
                                        <li><Link href="#">Elections</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <div className="footer__widget">
                                    <h4 className="fw-title">Entertainment</h4>
                                    <ul className="list-wrap">
                                        <li><Link href="#">Celebrity News</Link></li>
                                        <li><Link href="#">Movies</Link></li>
                                        <li><Link href="#">TV News</Link></li>
                                        <li><Link href="#">Disasters</Link></li>
                                        <li><Link href="#">Music News</Link></li>
                                        <li><Link href="#">Environment</Link></li>
                                        <li><Link href="#">Style News</Link></li>
                                        <li><Link href="#">Entertainment Video</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <div className="footer__widget">
                                    <h4 className="fw-title">Business</h4>
                                    <ul className="list-wrap">
                                        <li><Link href="#">Environment</Link></li>
                                        <li><Link href="#">Conflicts</Link></li>
                                        <li><Link href="#">Terrorism</Link></li>
                                        <li><Link href="#">Disasters</Link></li>
                                        <li><Link href="#">Global Economy</Link></li>
                                        <li><Link href="#">Environment</Link></li>
                                        <li><Link href="#">Religion</Link></li>
                                        <li><Link href="#">Scandals</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <div className="footer__widget">
                                    <h4 className="fw-title">Health</h4>
                                    <ul className="list-wrap">
                                        <li><Link href="#">Movies</Link></li>
                                        <li><Link href="#">Conflicts</Link></li>
                                        <li><Link href="#">Terrorism</Link></li>
                                        <li><Link href="#">Disasters</Link></li>
                                        <li><Link href="#">Global Economy</Link></li>
                                        <li><Link href="#">Scandals</Link></li>
                                        <li><Link href="#">Environment</Link></li>
                                        <li><Link href="#">Religion</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <div className="footer__widget">
                                    <h4 className="fw-title">Trending In</h4>
                                    <ul className="list-wrap">
                                        <li><Link href="#">U.N.</Link></li>
                                        <li><Link href="#">Conflicts</Link></li>
                                        <li><Link href="#">Terrorism</Link></li>
                                        <li><Link href="#">Disasters</Link></li>
                                        <li><Link href="#">Global Economy</Link></li>
                                        <li><Link href="#">Environment</Link></li>
                                        <li><Link href="#">Religion</Link></li>
                                        <li><Link href="#">Scandals</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}

          <div className="footer__copyright">
            <div className="row">
              <div className="col-lg-6">
                <div className="copyright__text">
                  <p>
                    Designed by{" "}
                    <a href="https://alpinesoftit.com/">
                      AlpineSoft It Solutions
                    </a>{" "}
                    - {new Date().getFullYear()}
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="copyright__menu">
                  <ul
                    className="footer__social"
                    style={{
                      listStyle: "none",
                      display: "flex",
                      gap: "50px",
                      padding: 0,
                      margin: 0,
                      alignItems: "center",
                      marginRight: "20px",
                    }}
                  >
                    <li>
                      <Link href="#">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="#" aria-label="Twitter">
                        <FaXTwitter size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" aria-label="LinkedIn">
                        <FaLinkedinIn size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" aria-label="Instagram">
                        <FaInstagram size={20} />
                      </Link>
                    </li>
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
