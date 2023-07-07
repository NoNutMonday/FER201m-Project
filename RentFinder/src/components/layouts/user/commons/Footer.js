import { NavLink } from "react-router-dom";


export default function Footer() {

    return (
        <footer className="main-footer">
            <div className="auto-container">
                {/*Widgets Section*/}
                <div className="widgets-section">
                    <div className="row clearfix">
                        {/*big column*/}
                        <div className="big-column col-lg-6 col-md-12 col-sm-12">
                            <div className="row clearfix">
                                {/*Footer Column*/}
                                <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                                    <div className="footer-widget logo-widget">
                                        <div className="logo">
                                            <a href="index-2.html"><img src="images/footer-logo.png" alt="" /></a>
                                        </div>
                                        <div className="text">Website Create By ReactJS</div>
                                        <ul className="social-icons">
                                            <li><NavLink to=""><span className="fab fa-facebook-f" /></NavLink></li>
                                            <li><NavLink to=""><span className="fab fa-linkedin-in" /></NavLink></li>
                                            <li><NavLink to="" ><span className="fab fa-twitter" /></NavLink></li>
                                            <li><NavLink to="" ><span className="fab fa-google-plus-g" /></NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                {/*Footer Column*/}
                                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h2>Quick links</h2>
                                        <div className="widget-content">
                                            <ul className="list">
                                                <li><NavLink to="">About Gaille</NavLink></li>
                                                <li><NavLink to="">Privacy Policy</NavLink></li>
                                                <li><NavLink to="">Terms &amp; Conditionis</NavLink></li>
                                                <li><NavLink to="">Faq</NavLink></li>
                                            </ul>
                                        </div>
                                    </div >
                                </div >
                            </div >
                        </div >
                        {/*big column*/}
                        <div  className="big-column col-lg-6 col-md-12 col-sm-12" >
                            <div className="row clearfix">
                                {/*Footer Column*/}
                                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                    <div className="footer-widget contact-widget">
                                        <h2>Contact Info</h2>
                                        <div className="widget-content">
                                            <NavLink to="tel:0838456798">+84 0838456798</NavLink>
                                            <ul>
                                                <li>Đất Thổ Cư Hòa Lạc, Km29, ĐCT08, Thạch Hoà, Thạch Thất, Hà Nội</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/*Footer Column*/}
                                <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                                    <div className="footer-widget newsletter-widget">
                                        <h2>Newsletter</h2>
                                        <div className="text">Get Special offers &amp; Discounts</div>
                                        {/* Newsletter Form */}
                                        <div className="newsletter-form">
                                            <form method="post" action="templateshub.net">
                                                <div className="form-group">
                                                    <input type="email" name="email" placeholder="Enter your email address" required />
                                                    <button type="submit" className="theme-btn btn-style-one"><span className="txt">Subscribe</span></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div >

            <div className="scroll-to-top scroll-to-target" data-target="html">
                <span className="fa fa-angle-up"></span>
                </div>
            
        </footer >
    )
}