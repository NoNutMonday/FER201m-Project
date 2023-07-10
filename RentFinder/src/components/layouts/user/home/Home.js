import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLastedReview } from "../../../../core/redux/review";
import { setLatests } from "../../../../core/redux/motel";

export default function Home() {

    const state = useSelector(state => state.reviews)
    const latests = useSelector(state => state.motels).latests

    const dispatch = useDispatch()

    const lastedReview = useQuery(['lastedReview']
        , () => fetch('https://jsonplaceholder.typicode.com/posts?_sort=id&_order=desc&_page=1&_limit=3')
            .then(res => res.json())
            .then(data => {
                dispatch(setLastedReview({ lastedReview: data }))
            })
        , {
            cacheTime: 1000 * 60 * 60, // 1 hou
            staleTime: 1000 * 60 * 60, // 1 hou
            refetchInterval: false
        }
    )

    const latestMotel = useQuery(['lastestsMotel']
        , () => fetch('https://jsonplaceholder.typicode.com/posts?_limit=7')
            .then(res => res.json())
            .then(data => {
                dispatch(setLatests({ latests: data }))
            })
    )

    const Motel = ({ title, id, image }) => {
        return (
            <div className="inner-box">
                <figure className="image-box">
                    <img src={image} alt="" />
                    {/*Overlay Box*/}
                    <div className="overlay-box">
                        <div className="overlay-inner">
                            <div className="content">
                                <h3><a href="projects-fullwidth.html">{title}</a></h3>
                                <Link to={image} className="link" data-fancybox="gallery-1" data-caption><span className="icon flaticon-magnifying-glass-1" /></Link>
                                <Link to={`/motel/${id}`} className="link"><span className="icon flaticon-unlink" /></Link>
                            </div>
                        </div>
                    </div>
                </figure>
            </div>
        )
    }

    return (
        <>
            <section className="banner-section" style={{ backgroundImage: 'url(images/background/3.jpg)', height: '40rem' }}></section>

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
                        <h2>Some Latest Motels</h2>
                    </div>
                </div>
                <div className="outer-container">
                    {/*Isotope Galery*/}
                    <div className="sortable-masonry">
                        {/*Filter*/}
                        <div className="filters clearfix">
                            <ul className="filter-tabs filter-btns text-center clearfix">
                                <li className="active filter" data-role="button" data-filter=".all">All</li>
                                <li className="filter" data-role="button" data-filter=".2">Capacity 2</li>
                                <li className="filter" data-role="button" data-filter=".3">Capacity 3</li>
                                <li className="filter" data-role="button" data-filter=".4">Price Less Than 2.000.000</li>
                            </ul>
                        </div>
                        <div className="items-container row clearfix">
                            {
                                latests?.map((item, index) => {
                                    if (index == 0) {
                                        return (
                                            <div key={item.id} className={`gallery-item large-block masonry-item all ${item.title.length < 50 ? '2' : '3'} ${item.id % 2 ? '4' : ''} `}>
                                                <Motel
                                                    title={item.title}
                                                    id={item.id}
                                                    image={`images/gallery/1.jpg`}
                                                />
                                            </div>
                                        )
                                    } else if (index == 1) {
                                        return (
                                            <div key={item.id} className={`gallery-item small-block masonry-item all ${item.title.length < 50 ? '2' : '3'} ${item.id % 2 ? '4' : ''} `}>
                                                <Motel
                                                    title={item.title}
                                                    id={item.id}
                                                    image={`images/gallery/2.jpg`}
                                                />
                                            </div>
                                        )
                                    } else if (index == 2) {
                                        return (
                                            <div key={item.id} className={`gallery-item small-block masonry-item all ${item.title.length < 50 ? '2' : '3'} ${item.id % 2 ? '4' : ''} `}>
                                                <Motel
                                                    title={item.title}
                                                    id={item.id}
                                                    image={`images/gallery/3.jpg`}
                                                />
                                            </div>
                                        )
                                    } else if (index == 3) {
                                        return (
                                            <div key={item.id} className={`gallery-item small-block masonry-item all ${item.title.length < 50 ? '2' : '3'} ${item.id % 2 ? '4' : ''} `}>
                                                <Motel
                                                    title={item.title}
                                                    id={item.id}
                                                    image={`images/gallery/4.jpg`}
                                                />
                                            </div>
                                        )

                                    } else if (index == 4) {
                                        return (
                                            <div key={item.id} className={`gallery-item large-block masonry-item all ${item.title.length < 50 ? '2' : '3'} ${item.id % 2 ? '4' : ''}`}>
                                                <Motel
                                                    title={item.title}
                                                    id={item.id}
                                                    image={`images/gallery/7.jpg`}
                                                />
                                            </div>
                                        )

                                    } else if (index == 5) {
                                        return (
                                            <div key={item.id} className={`gallery-item small-block masonry-item all ${item.title.length < 50 ? '2' : '3'} ${item.id % 2 ? '4' : ''}`}>
                                                <Motel
                                                    title={item.title}
                                                    id={item.id}
                                                    image={`images/gallery/5.jpg`}
                                                />
                                            </div>
                                        )
                                    } else if (index == 6) {
                                        return (
                                            <div key={item.id} className={`gallery-item small-block masonry-item all ${item.title.length < 50 ? '2' : '3'} ${item.id % 2 ? '4' : ''}`}>
                                                <Motel
                                                    title={item.title}
                                                    id={item.id}
                                                    image={`images/gallery/6.jpg`}
                                                />
                                            </div>
                                        )
                                    }
                                })
                            }

                        </div>
                    </div>
                    {/* More Projects */}
                    <div className="more-projects">
                        <a href="projects-classic.html" className="projects">View All Projects</a>
                    </div>
                </div>
            </section>

            <section className="news-section">
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title">
                        <h2>Review Home</h2>
                    </div>
                    <div className="row clearfix">
                        {/* News Block */}
                        {
                            state.lastedReview ? (
                                <>
                                    {
                                        state?.lastedReview?.map(item => (
                                            <div className="news-block col-lg-4 col-md-6 col-sm-12" key={item.id}>
                                                <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                    <div className="image">
                                                        <a href="blog-detail.html"><img src="images/resource/news-1.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="lower-content">
                                                        <ul className="post-meta">
                                                            <li>By <span>Michale</span></li>
                                                            <li>Modular Kitchen</li>
                                                        </ul>
                                                        <h3><a href="blog-detail.html">{item.title}</a></h3>
                                                        <Link to={`/review/${item.id}`} className="read-more" >
                                                            Read more <span className="icon flaticon-right-arrow-1" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </>
                            ) : null
                        }
                    </div>
                </div>
            </section>
        </>



    )

}