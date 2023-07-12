import { useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import { loadMore, nextPage, setReview, setTotalPage } from "../../../../core/redux/review";
import { useEffect, useRef } from "react";
import { formatDistance, subDays } from "date-fns";

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
                dispatch(setTotalPage({ totalPage: Math.ceil(data.length / state.limit) }))
            })
    }, [dispatch, state.limit, state.page])

    const searchRef = useRef()

    function handleSearch() {
        const search = searchRef.current.value
        console.log(search)

        fetch(`http://localhost:9999/reviews?title_like=${search}`)
            .then(res => res.json())
            .then((data) => {
                dispatch(setReview({ reviews: data }))
            })
    }

    const accounts = useSelector(state => state.auth)?.accounts

    const getAccount = (id) => {
        const account = accounts?.find(item => item.id === id)
        return account?.name
    }


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
                                    state?.reviews?.length === 0 ? (
                                        <div>
                                            <h2>Not Found!</h2>
                                        </div>
                                    ) : (
                                        state?.reviews?.map(item => (
                                            <div className="news-block-three" key={item.id}>
                                                <div className="inner-box">
                                                    <div className="image-box">
                                                        <figure className="image">
                                                            <Link to={`${item.id}`}>
                                                                <img src={item.thumbnail_image} alt="" />
                                                            </Link>
                                                        </figure>
                                                        
                                                    </div>
                                                    <div className="lower-content">
                                                        <div className="post-meta">
                                                            <ul className="post-info clearfix">
                                                                <li>By: {getAccount(item.aid)}</li>
                                                                <li>{formatDistance(subDays(new Date(item.createDate), 0), new Date(), { addSuffix: true })}</li>
                                                            </ul>
                                                        </div>
                                                        <h3>
                                                            <Link to={`${item.id}`}>{item.title}</Link>
                                                        </h3>
                                                        <div className="text">{item.description}</div>
                                                        <div className="link-box">
                                                            <Link to={`${item.id}`} className="theme-btn read-more">Read more</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )
                                }
                                {

                                }
                                {/* News Block Three*/}
                            </div>
                            {
                                state.page < state.totalPage &&
                                <div className="form-group col-lg-12 col-md-12 col-sm-12 d-flex justify-content-end">
                                    <button className="theme-btn btn-style-one" type="button" name="submit-form" onClick={() => dispatch(nextPage())}><span className="txt">Load More</span></button>
                                </div>
                            }
                        </div>
                        {/*Sidebar Side*/}
                        <div className="sidebar-side col-xl-3 col-lg-4 col-md-12 col-sm-12">
                            <aside className="sidebar">
                                {/* Search */}
                                <div className="sidebar-widget search-box">
                                    <form method="post" action="templateshub.net">
                                        <div className="form-group">
                                            <input type="search" ref={searchRef} name="search-field" placeholder="Enter Search Keywords" required />
                                            <button type="button" onClick={handleSearch}><span className="icon fa fa-search" /></button>
                                        </div>
                                    </form>
                                </div>
                                {/* Popular Posts */}
                                <div className="sidebar-widget popular-posts">
                                    <div className="sidebar-title">
                                        <h2>Recent News</h2>
                                    </div>
                                    {
                                        /* lấy ra ngẫu nhiên  5 bài review trong redux store reviews */
                                        state?.reviews?.map(item => (
                                            <article className="post" key={item.id}>
                                                <figure className="post-thumb">
                                                    <Link to={`${item.id}`}>
                                                        <img src={item.thumbnail_image} alt="" />
                                                    </Link>
                                                </figure>
                                                <div className="text">
                                                    <Link to={`${item.id}`}>
                                                        {item.title}
                                                    </Link>
                                                </div>
                                                <div className="post-info">{item.createDate}</div>
                                            </article>
                                        ))
                                    }

                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}