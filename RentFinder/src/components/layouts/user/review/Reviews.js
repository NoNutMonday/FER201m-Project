import { useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import { loadMore, nextPage, setReview } from "../../../../core/redux/review";
import { useEffect } from "react";

export default function Reviews() {
    const dispatch = useDispatch()

    const state = useSelector(state => state.reviews)

    useEffect(() => {
        fetch(`http://localhost:9999/reviews`)
            .then(res => res.json())
            .then((data) => {
                console.log(state.page)
                if (state.page === 1) {
                    dispatch(setReview({ reviews: data }))
                } else {
                    dispatch(loadMore({ reviews: data }))
                }
            })
    }, [state.page, dispatch])

    return (
        <>
            <section className="page-title" style={{ backgroundImage: 'url(images/background/5.jpg)' }}>
                <div className="auto-container">
                    <h2>Reviews</h2>
                    <ul className="page-breadcrumb">
                        <li><a href="/">home</a></li>
                        <li>Reviews</li>
                    </ul>
                </div>
            </section>

            <div className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row clearfix">
                        {/*Content Side / Blog Classic */}
                        <div className="content-side col-xl-9 col-lg-8 col-md-12 col-sm-12">
                            <div className="blog-classic padding-right">
                                {/* News Block Three*/}
                                {
                                    state?.reviews?.map(item => (
                                        <div className="news-block-three" key={item.id}>
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image">
                                                        <a href="#!">
                                                            <img src={item.thumbnail_image} alt="" />
                                                        </a>
                                                    </figure>
                                                    <span className="date">{item.createDate}</span>
                                                </div>
                                                <div className="lower-content">
                                                    <div className="post-meta">
                                                        <ul className="post-info clearfix">
                                                            <li><a href="#!">By: user</a></li>
                                                            <li><a href="#!">trọ id</a></li>
                                                        </ul>
                                                    </div>
                                                    <h3><a href="#!">{item.title}</a></h3>
                                                    <div className="text">{item.description}</div>
                                                    <div className="link-box">
                                                        <a href="#!" className="theme-btn read-more">Read more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                {/* News Block Three*/}
                            </div>
                            {/*Styled Pagination*/}
                            <div className="form-group col-lg-12 col-md-12 col-sm-12 d-flex justify-content-end">
                                <button className="theme-btn btn-style-one" type="button" name="submit-form" onClick={() => dispatch(nextPage())}><span className="txt">Load More</span></button>
                            </div>
                            {/*End Styled Pagination*/}
                        </div>
                        {/*Sidebar Side*/}
                        <div className="sidebar-side col-xl-3 col-lg-4 col-md-12 col-sm-12">
                            <aside className="sidebar">
                                {/* Search */}
                                <div className="sidebar-widget search-box">
                                    <form method="post" action="templateshub.net">
                                        <div className="form-group">
                                            <input type="search" name="search-field" placeholder="Enter Search Keywords" required />
                                            <button type="submit"><span className="icon fa fa-search" /></button>
                                        </div>
                                    </form>
                                </div>
                                {/* Popular Posts */}
                                <div className="sidebar-widget popular-posts">
                                    <div className="sidebar-title"><h2>Recent News</h2></div>
                                    <article className="post">
                                        <figure className="post-thumb">
                                            <Link to=''>
                                                <img src="images/resource/post-thumb-1.jpg" alt="" />
                                            </Link>
                                        </figure>
                                        <div className="text"><Link to=''>Hanging fruit to identify a ballpark value added ...</Link></div>
                                        <div className="post-info">12 April. 2019</div>
                                    </article>
                                    <article className="post">
                                        <figure className="post-thumb">
                                            <Link to=''>
                                                <img src="images/resource/post-thumb-2.jpg" alt="" />
                                            </Link>
                                        </figure>
                                        <div className="text"><Link to=''>Organically grow the holistic world view ...</Link></div>
                                        <div className="post-info">12 April. 2019</div>
                                    </article>
                                    <article className="post">
                                        <figure className="post-thumb">
                                            <Link to=''>
                                                <img src="images/resource/post-thumb-3.jpg" alt="" />
                                            </Link>
                                        </figure>
                                        <div className="text"><Link to=''>Bring to the table in the win-win survival ...</Link></div>
                                        <div className="post-info">12 April. 2019</div>
                                    </article>
                                    <article className="post">
                                        <figure className="post-thumb">
                                            <Link to=''>
                                                <img src="images/resource/post-thumb-4.jpg" alt="" />
                                            </Link>
                                        </figure>
                                        <div className="text"><Link to=''>Override the digital divide with additional ...</Link></div>
                                        <div className="post-info">12 April. 2019</div>
                                    </article>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}