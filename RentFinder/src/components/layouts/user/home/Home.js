import { Link } from "react-router-dom";


export default function Home() {

    return (
        <>
        
            <section className="banner-section" style={{ backgroundImage: 'url(images/background/3.jpg)' }}>
                <div className="auto-container">
                    <div className="row clearfix">
                        {/* Form Column */}
                        <div className="form-column col-lg-4 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* Form Box */}
                                <div className="form-box">
                                    <h2>Meet Interior Designer</h2>
                                    {/* Default Form */}
                                    <div className="default-form">
                                        <form method="post" action="templateshub.net">
                                            {/* Form Group */}
                                            <div className="form-group">
                                                <input type="text" name="name" defaultValue placeholder="Name" required />
                                            </div>
                                            {/* Form Group */}
                                            <div className="form-group">
                                                <input type="email" name="email" defaultValue placeholder="E-Mail" required />
                                            </div>
                                            {/* Form Group */}
                                            <div className="form-group">
                                                <input type="text" name="phone" defaultValue placeholder="Mobile Number" required />
                                            </div>
                                            {/* Form Group */}
                                            <div className="form-group">
                                                <select className="custom-select-box">
                                                    <option>Select City</option>
                                                    <option>New Jersey</option>
                                                    <option>Chicago</option>
                                                    <option>Lahore</option>
                                                    <option>Victoria</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="theme-btn submit-btn">Book Free Consultation</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="text">By submitting this form, you agree to the <Link to=''>privacy policy</Link> and <Link to=''>terms of use</Link></div>
                                </div>
                            </div>
                        </div>
                        {/* Content Column */}
                        <div className="content-column col-lg-8 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="content">
                                    <h3>Home Interior Designs</h3>
                                    <div className="text">Find design ideas from our design gallery or book a <br /> meeting with a dedicated design expert</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-section-three">
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title centered">
                        <h2>One stop for home interiors</h2>
                        <div className="text">To give you a home that lasts, we bring you only the best in everything — quality raw materials, state-of-the-art manufacturing, rigorous quality checks, professional installations and transparent prices.</div>
                    </div>
                    <div className="row clearfix">
                        {/* Service Block */}
                        <div className="service-block-three style-two col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <a href="residental-interior.html"><img src="images/resource/service-4.jpg" alt="" /></a>
                                </div>
                                <div className="lower-content">
                                    <h3><a href="residental-interior.html">25 + Interior Designers</a></h3>
                                    <div className="text">Override the digital divide with additional clickthroughs from DevOps. Nanotechnology imme rsion along the information highway will close the loop.</div>
                                    <a href="residental-interior.html" className="read-more">Read more</a>
                                </div>
                            </div>
                        </div>
                        {/* Service Block */}
                        <div className="service-block-three style-two col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-delay="250ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <a href="office-interior.html"><img src="images/resource/service-5.jpg" alt="" /></a>
                                </div>
                                <div className="lower-content">
                                    <h3><a href="office-interior.html">Furtiniture, Decor &amp; More</a></h3>
                                    <div className="text">Override the digital divide with additional clickthroughs from DevOps. Nanotechnology imme rsion along the information ...</div>
                                    <a href="office-interior.html" className="read-more">Read more</a>
                                </div>
                            </div>
                        </div>
                        {/* Service Block */}
                        <div className="service-block-three style-two col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <a href="commercial-interior.html"><img src="images/resource/service-6.jpg" alt="" /></a>
                                </div>
                                <div className="lower-content">
                                    <h3><a href="commercial-interior.html">Modular Solutions</a></h3>
                                    <div className="text">Override the digital divide with additional clickthroughs from DevOps. Nanotechnology imme rsion along the information highway will close the loop.</div>
                                    <a href="commercial-interior.html" className="read-more">Read more</a>
                                </div>
                            </div>
                        </div>
                        {/* Service Block */}
                        <div className="service-block-three style-two col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-delay="750ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <a href="commercial-interior.html"><img src="images/resource/service-7.jpg" alt="" /></a>
                                </div>
                                <div className="lower-content">
                                    <h3><a href="commercial-interior.html">On Site Expertise</a></h3>
                                    <div className="text">Override the digital divide with additional clickthroughs from DevOps. Nanotechnology imme rsion along the information highway will close the loop.</div>
                                    <a href="commercial-interior.html" className="read-more">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fluid-section-one style-two">
                <div className="outer-container clearfix">
                    {/*Content Column*/}
                    <div className="content-column">
                        <div className="content-box">
                            <h2>Home design made easy</h2>
                            <div className="text">To give you a home that lasts, we bring you only the best in everything — quality raw materials, state-of-the-art manufacturing, rigorous quality checks, professional installations and transparent prices.</div>
                            <ul className="list-style-one">
                                <li>Whole Home Interior</li>
                                <li>Modular Kitchen and Wardrobe</li>
                                <li>Furniture, Decore and more</li>
                                <li>Post-surgery, including cosmetic, joint replacement, or heart surgery</li>
                                <li>Chronic conditions, such as diabetes, COPD, or cancer</li>
                                <li>On Site Expertiset</li>
                            </ul>
                            <div className="bold-text">Design your home, right here at Stella Orr'e <br /> <a href="contact.html">Talk to a designer</a></div>
                        </div>
                    </div>
                    {/*Image Column*/}
                    <div className="image-column wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms" style={{ backgroundImage: 'url(images/resource/video-img.jpg)' }}>
                        <div className="inner-column">
                            <div className="image">
                                <img src="images/resource/video-img.jpg" alt="" />
                            </div>
                            <a href="https://www.youtube.com/watch?v=SXZXtD60t2g" className="overlay-link lightbox-image">
                                <div className="icon-box">
                                    <span className="icon flaticon-play-button" />
                                </div>
                            </a>
                        </div>
                    </div>
                    {/*End Image Column*/}
                </div>
            </section>

            <section className="project-section style-two">
                <div className="auto-container">
                    {/* Title Box */}
                    <div className="title-box">
                        <h2>Our Latest Projects</h2>
                    </div>
                </div>
                <div className="outer-container">
                    {/*Isotope Galery*/}
                    <div className="sortable-masonry">
                        {/*Filter*/}
                        <div className="filters clearfix">
                            <ul className="filter-tabs filter-btns text-center clearfix">
                                <li className="active filter" data-role="button" data-filter=".all">All Projects</li>
                                <li className="filter" data-role="button" data-filter=".residential">Residential</li>
                                <li className="filter" data-role="button" data-filter=".commercial">Commercial</li>
                                <li className="filter" data-role="button" data-filter=".hospital">Hospitality</li>
                                <li className="filter" data-role="button" data-filter=".office">Office</li>
                            </ul>
                        </div>
                        <div className="items-container row clearfix">
                            {/* Gallery Item */}
                            <div className="gallery-item large-block masonry-item all hospital commercial">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src="images/gallery/1.jpg" alt="" />
                                        {/*Overlay Box*/}
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <h3><a href="projects-fullwidth.html">Modular Kitchen</a></h3>
                                                    <a href="images/gallery/1.jpg" data-fancybox="gallery-1" data-caption className="link"><span className="icon flaticon-magnifying-glass-1" /></a>
                                                    <a href="projects-fullwidth.html" className="link"><span className="icon flaticon-unlink" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            {/* Gallery Item */}
                            <div className="gallery-item small-block masonry-item all hospital commercial">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src="images/gallery/2.jpg" alt="" />
                                        {/*Overlay Box*/}
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <h3><a href="projects-fullwidth.html">Modular Kitchen</a></h3>
                                                    <a href="images/gallery/2.jpg" data-fancybox="gallery-1" data-caption className="link"><span className="icon flaticon-magnifying-glass-1" /></a>
                                                    <a href="projects-fullwidth.html" className="link"><span className="icon flaticon-unlink" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            {/* Gallery Item */}
                            <div className="gallery-item small-block masonry-item all residential office commercial">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src="images/gallery/3.jpg" alt="" />
                                        {/*Overlay Box*/}
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <h3><a href="projects-fullwidth.html">Modular Kitchen</a></h3>
                                                    <a href="images/gallery/3.jpg" data-fancybox="gallery-1" data-caption className="link"><span className="icon flaticon-magnifying-glass-1" /></a>
                                                    <a href="projects-fullwidth.html" className="link"><span className="icon flaticon-unlink" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            {/* Gallery Item */}
                            <div className="gallery-item small-block masonry-item all commercial">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src="images/gallery/4.jpg" alt="" />
                                        {/*Overlay Box*/}
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <h3><a href="projects-fullwidth.html">Modular Kitchen</a></h3>
                                                    <a href="images/gallery/4.jpg" data-fancybox="gallery-1" data-caption className="link"><span className="icon flaticon-magnifying-glass-1" /></a>
                                                    <a href="projects-fullwidth.html" className="link"><span className="icon flaticon-unlink" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            {/* Gallery Item */}
                            <div className="gallery-item large-block masonry-item all hospital office residential">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src="images/gallery/7.jpg" alt="" />
                                        {/*Overlay Box*/}
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <h3><a href="projects-fullwidth.html">Modular Kitchen</a></h3>
                                                    <a href="images/gallery/7.jpg" data-fancybox="gallery-1" data-caption className="link"><span className="icon flaticon-magnifying-glass-1" /></a>
                                                    <a href="projects-fullwidth.html" className="link"><span className="icon flaticon-unlink" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            {/* Gallery Item */}
                            <div className="gallery-item small-block masonry-item all residential">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src="images/gallery/5.jpg" alt="" />
                                        {/*Overlay Box*/}
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <h3><a href="projects-fullwidth.html">Modular Kitchen</a></h3>
                                                    <a href="images/gallery/5.jpg" data-fancybox="gallery-1" data-caption className="link"><span className="icon flaticon-magnifying-glass-1" /></a>
                                                    <a href="projects-fullwidth.html" className="link"><span className="icon flaticon-unlink" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            {/* Gallery Item */}
                            <div className="gallery-item small-block masonry-item all hospital office">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src="images/gallery/6.jpg" alt="" />
                                        {/*Overlay Box*/}
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <h3><a href="projects-fullwidth.html">Modular Kitchen</a></h3>
                                                    <a href="images/gallery/6.jpg" data-fancybox="gallery-1" data-caption className="link"><span className="icon flaticon-magnifying-glass-1" /></a>
                                                    <a href="projects-fullwidth.html" className="link"><span className="icon flaticon-unlink" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* More Projects */}
                    <div className="more-projects">
                        <a href="projects-classic.html" className="projects">View All Projects</a>
                    </div>
                </div>
            </section>

            <section className="interior-section style-two">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="row clearfix">
                            {/* Image Column */}
                            <div className="image-column col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="image">
                                        <img src="images/resource/interior.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            {/* Content Column */}
                            <div className="content-column col-lg-8 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <h2>Why Choose Us for Interior Work</h2>
                                    <div className="text">To give you a home that lasts, we bring you only the best in everything — quality raw materials, state-of-the-art manufacturing, rigorous quality checks, professional installations and transparent prices.</div>
                                    <div className="row clearfix">
                                        {/* Interior Block */}
                                        <div className="interior-block col-lg-4 col-md-4 col-sm-12">
                                            <div className="block-inner">
                                                <div className="icon-box">
                                                    <span className="icon flaticon-award-1" />
                                                </div>
                                                <h3>Superior Quality</h3>
                                            </div>
                                        </div>
                                        {/* Interior Block */}
                                        <div className="interior-block col-lg-4 col-md-4 col-sm-12">
                                            <div className="block-inner">
                                                <div className="icon-box">
                                                    <span className="icon flaticon-answer" />
                                                </div>
                                                <h3>Professional Team</h3>
                                            </div>
                                        </div>
                                        {/* Interior Block */}
                                        <div className="interior-block col-lg-4 col-md-4 col-sm-12">
                                            <div className="block-inner">
                                                <div className="icon-box">
                                                    <span className="icon flaticon-hand" />
                                                </div>
                                                <h3>Unmatched Warranty</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bold-text">Get in touch with us to design your dream home</div>
                                    <div className="column-text">Talk to our design expert and get your designs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="news-section">
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title">
                        <h2>Need a design fix? Read our magazine</h2>
                        <div className="text">Stay updated with latest trends, inspiration, expert tips, DIYs and more</div>
                    </div>
                    <div className="row clearfix">
                        {/* News Block */}
                        <div className="news-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <a href="blog-detail.html"><img src="images/resource/news-1.jpg" alt="" /></a>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-meta">
                                        <li>By <span>Michale</span></li>
                                        <li>Modular Kitchen</li>
                                    </ul>
                                    <h3><a href="blog-detail.html">15 Vastu ideas for the main door emphasizes on every par ...</a></h3>
                                    <a href="blog-detail.html" className="read-more">Read more <span className="icon flaticon-right-arrow-1" /></a>
                                </div>
                            </div>
                        </div>
                        {/* News Block */}
                        <div className="news-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInRight" data-wow-delay="250ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <a href="blog-detail.html"><img src="images/resource/news-2.jpg" alt="" /></a>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-meta">
                                        <li>By <span>Michale</span></li>
                                        <li>Interior, awesome</li>
                                    </ul>
                                    <h3><a href="blog-detail.html">Storage ideas for the bedroom by interior designers ...</a></h3>
                                    <a href="blog-detail.html" className="read-more">Read more <span className="icon flaticon-right-arrow-1" /></a>
                                </div>
                            </div>
                        </div>
                        {/* News Block */}
                        <div className="news-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInRight" data-wow-delay="500ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <a href="blog-detail.html"><img src="images/resource/news-3.jpg" alt="" /></a>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-meta">
                                        <li>By <span>Michale</span></li>
                                        <li>Interior, awesome</li>
                                    </ul>
                                    <h3><a href="blog-detail.html">Kids bedroom design ideas by interior designers in NY</a></h3>
                                    <a href="blog-detail.html" className="read-more">Read more <span className="icon flaticon-right-arrow-1" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>



    )

}