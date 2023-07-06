import { Link } from "react-router-dom";


export default function Forgot() {
    return (
        <>
            {/*Page Title*/}
            <section className="page-title" style={{ backgroundImage: 'url(images/background/4.jpg)' }}>
                <div className="auto-container">
                    <h2>Forgot Your Password</h2>
                    <ul className="page-breadcrumb">
                        <li><Link to='/'>Home</Link></li>
                        <li>Forgot Password</li>
                    </ul>
                </div>
            </section>
            {/*End Page Title*/}

            <section className="contact-form-section" style={{ backgroundImage: 'url(images/background/contact.png)' }}>
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title">
                        <h2>Forgot Your Password</h2>
                        <div className="text">Not a Member? <Link to='/register'>Click Here</Link></div>
                    </div>
                    <div className="row clearfix">
                        {/* Form Column */}
                        <div className="form-column col-lg-7 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* Contact Form */}
                                <div className="contact-form">
                                    {/*Contact Form*/}
                                    <form method="post" action="" id="contact-form">
                                        <div className="row clearfix">
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input type="email" name="email" placeholder="Your Email" required />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input type="text" name="code" placeholder="Code Verify" required />
                                            </div>

                                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="txt">Login</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* Info Column */}
                        <div className="info-column col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* Contact Info List */}
                                <ul className="contact-info-list">
                                    <li><strong>Address :</strong><br />Đất Thổ Cư Hòa Lạc, Km29, ĐCT08, Thạch Hoà, Thạch Thất, Hà Nội</li>
                                </ul>
                                {/* Contact Info List */}
                                <ul className="contact-info-list">
                                    <li><strong>Phone : </strong><Link to='tel:1800-456-7890'>0838456798</Link></li>
                                </ul>
                                {/* Contact Info List */}
                                <ul className="contact-info-list">
                                    <li><strong>Opening Hours :</strong><br />8:00 AM – 10:00 PM <br /> Monday – Sunday</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}