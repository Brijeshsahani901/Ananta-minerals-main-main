import Link from "next/link"

export default function Sidebar({handleSidebarClose}) {
    return (
        <>
            <div className="offCanvas__wrap">
                <div className="offCanvas__body">
                    <div className="offCanvas__toggle" onClick={handleSidebarClose}><i className="flaticon-addition" /></div>
                  <div className="offCanvas__content">
  <div className="offCanvas__logo logo">
    <h2>Critical Minerals</h2>
  </div>
  <p>Essential for clean energy technologies, critical minerals power our sustainable future from lithium-ion batteries to rare earth magnets.</p>
  
  <ul className="offCanvas__instagram list-wrap">
    <li>
      <Link href="https://images.unsplash.com/photo-1631729371254-42c2892f0e6e" className="popup-image">
        <img src="https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=200" alt="Lithium crystals" />
      </Link>
    </li>
    <li>
      <Link href="https://images.unsplash.com/photo-1582053433976-25c00369fc93" className="popup-image">
        <img src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?w=200" alt="Cobalt ore" />
      </Link>
    </li>
    {/* <li>
      <Link href="https://images.unsplash.com/photo-1603974372038-9ccd5fbd2a3b" className="popup-image">
        <img src="https://images.unsplash.com/photo-1603974372038-9ccd5fbd2a3b?w=200" alt="Rare earth elements" />
      </Link>
    </li> */}
    <li>
      <Link href="https://images.unsplash.com/photo-1582139329536-e7284fece509" className="popup-image">
        <img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=200" alt="Copper minerals" />
      </Link>
    </li>
    <li>
      <Link href="https://images.unsplash.com/photo-1605100804763-247f67b3557e" className="popup-image">
        <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200" alt="Graphite specimen" />
      </Link>
    </li>
    {/* <li>
      <Link href="https://images.unsplash.com/photo-1579684385127-1ef15d3e1f38" className="popup-image">
        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d3e1f38?w=200" alt="Nickel ore" />
      </Link>
    </li> */}
  </ul>
  
  <div className="offCanvas__info mt-5">
    <p>Critical minerals are economically important and have supply chain vulnerabilities. They're vital for:</p>
    <ul>
      <li>Renewable energy systems</li>
      <li>Electric vehicles</li>
      <li>Advanced electronics</li>
      <li>Defense applications</li>
    </ul>
  </div>
</div>
                    {/* <div className="offCanvas__contact">
                        <h4 className="title">Get In Touch</h4>
                        <ul className="offCanvas__contact-list list-wrap">
                            <li><i className="fas fa-envelope-open" /><Link href="/mailto:info@webmail.com">info@webmail.com</Link></li>
                            <li><i className="fas fa-phone" /><Link href="/tel:88899988877">888 999 888 77</Link></li>
                            <li><i className="fas fa-map-marker-alt" /> 12/A, New Booston, NYC</li>
                        </ul>
                        <ul className="offCanvas__social list-wrap">
                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                            <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                        </ul>
                    </div> */}
                </div>
            </div>
            <div className="offCanvas__overlay"  onClick={handleSidebarClose}/>
        </>
    )
}
