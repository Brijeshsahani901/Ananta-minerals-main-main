import Link from 'next/link'
import InstagramSidebarSlider from '../slider/InstagramSidebarSlider'
import SidePostSlider from '../slider/SidePostSlider'

export default function BlogSidebar() {
    return (
        <>
            <aside className="blog-sidebar">
                <div className="widget sidebar-widget">
                    <div className="tgAbout-me">
                        <div className="tgAbout-thumb">
                            <img src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Defense Analyst" />
                        </div>
                        <div className="tgAbout-info">
                            <p className="intro">Hi there, I'm <span>Col. James R.</span></p>
                            <span className="designation">Defense Technology Specialist</span>
                        </div>
                        <div className="tgAbout-social">
                            <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                            <Link href="#"><i className="fab fa-twitter" /></Link>
                            <Link href="#"><i className="fas fa-rss" /></Link>
                        </div>
                    </div>
                </div>
                <div className="widget sidebar-widget widget_categories">
                    <h4 className="widget-title">Defense Categories</h4>
                    <ul className="list-wrap">
                        <li>
                            <div className="thumb"><Link href="#"><img src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Drone Technology" /></Link></div>
                            <Link href="/blog/drones">Drone Technology</Link>
                            <span className="float-right">24</span>
                        </li>
                        <li>
                            <div className="thumb"><Link href="#"><img src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Avionics" /></Link></div>
                            <Link href="/blog/avionics">Avionics Systems</Link>
                            <span className="float-right">18</span>
                        </li>
                        <li>
                            <div className="thumb"><Link href="#"><img src="https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Critical Minerals" /></Link></div>
                            <Link href="/blog/supply-chain">Critical Minerals</Link>
                            <span className="float-right">15</span>
                        </li>
                        <li>
                            <div className="thumb"><Link href="#"><img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Defense Tech" /></Link></div>
                            <Link href="/blog/defense-tech">Defense Technology</Link>
                            <span className="float-right">32</span>
                        </li>
                        <li>
                            <div className="thumb"><Link href="#"><img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Cyber Security" /></Link></div>
                            <Link href="/blog/cyber-security">Drone Cyber Security</Link>
                            <span className="float-right">12</span>
                        </li>
                    </ul>
                </div>
                <div className="widget sidebar-widget">
                    <h4 className="widget-title">Key Minerals for Drones</h4>
                    <div className="minerals-list">
                        <ul>
                            <li><i className="fas fa-caret-right" /> Lithium (Batteries)</li>
                            <li><i className="fas fa-caret-right" /> Rare Earth Elements (Magnets)</li>
                            <li><i className="fas fa-caret-right" /> Cobalt (Electronics)</li>
                            <li><i className="fas fa-caret-right" /> High-purity Silicon (Chips)</li>
                            <li><i className="fas fa-caret-right" /> Tungsten (Structural)</li>
                        </ul>
                    </div>
                </div>
                <div className="widget sidebar-widget">
                    <h4 className="widget-title">Defense News Feeds</h4>
                    <div className="sidebarDefense__wrap">
                        <div className="sidebarDefense__top">
                            <div className="sidebarDefense__logo">
                                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Defense News" />
                            </div>
                            <div className="sidebarDefense__info">
                                <h6 className="name"><Link href="#">defense-updates.mil</Link></h6>
                                <span className="designation">Official Defense Channel</span>
                            </div>
                        </div>
                        <div className="sidebarDefense__slider-wrap">
                            <div className="swiper-container sidebarDefense-active">
                                <SidePostSlider />
                            </div>
                        </div>
                        <div className="sidebarDefense__bottom">
                            <Link href="https://www.defense.gov/" target="_blank" className="btn"><i className="fas fa-shield-alt" /><span className="text">Defense News</span></Link>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}