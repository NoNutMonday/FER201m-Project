import { Link, NavLink } from "react-router-dom";


export default function Reviews() {
    return (
        <>
            <section className="page-title" style={{ backgroundImage: 'url(images/background/5.jpg)' }}>
                <div className="auto-container">
                    <h2>Reviews</h2>
                    <ul className="page-breadcrumb">
                        <li><a href="index-2.html">home</a></li>
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
                                <div className="news-block-three">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><a href="blog-detail.html"><img src="images/resource/news-4.jpg" alt="" /></a></figure>
                                            <span className="date">9 may 2019</span>
                                        </div>
                                        <div className="lower-content">
                                            <div className="post-meta">
                                                <ul className="post-info clearfix">
                                                    <li><a href="blog-detail.html">By : admin</a></li>
                                                    <li><a href="blog-detail.html">interior, furniture</a></li>
                                                    <li><a href="blog-detail.html">Comments: 8</a></li>
                                                </ul>
                                            </div>
                                            <h3><a href="blog-detail.html">How to make best home interior ourself</a></h3>
                                            <div className="text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur velit esse cillum Duis aute irure dolor in reprehenderit in voluptate ...</div>
                                            <div className="link-box"><a href="blog-detail.html" className="theme-btn read-more">Read more</a></div>
                                        </div>
                                    </div>
                                </div>
                                {/* News Block Three*/}
                                <div className="news-block-three">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><a href="blog-detail.html"><img src="images/resource/news-5.jpg" alt="" /></a></figure>
                                            <span className="date">9 may 2019</span>
                                        </div>
                                        <div className="lower-content">
                                            <div className="post-meta">
                                                <ul className="post-info clearfix">
                                                    <li><a href="blog-detail.html">By : admin</a></li>
                                                    <li><a href="blog-detail.html">interior, furniture</a></li>
                                                    <li><a href="blog-detail.html">Comments: 8</a></li>
                                                </ul>
                                            </div>
                                            <h3><a href="blog-detail.html">How to make best home interior ourself</a></h3>
                                            <div className="text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur velit esse cillum Duis aute irure dolor in reprehenderit in voluptate ...</div>
                                            <div className="link-box"><a href="blog-detail.html" className="theme-btn read-more">Read more</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Styled Pagination*/}
                            <ul className="styled-pagination">
                                <li>
                                    <NavLink
                                        to='/review'
                                        className={`${({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""}`}>
                                        1
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/review/2'
                                        className={`${({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""}`}>
                                        2
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/review/3'
                                        className={`${({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""}`}>
                                        <span className="fa fa-angle-right" />
                                    </NavLink>
                                </li>
                            </ul>
                            {/*End Styled Pagination*/}
                        </div>
                        {/*Sidebar Side*/}
                        <div className="sidebar-side col-xl-3 col-lg-4 col-md-12 col-sm-12">
                            <aside className="sidebar">
                                {/* Search */}
                                <div className="sidebar-widget search-box">
                                    <form method="post" action="templateshub.net">
                                        <div className="form-group">
                                            <input type="search" name="search-field" defaultValue placeholder="Enter Search Keywords" required />
                                            <button type="submit"><span className="icon fa fa-search" /></button>
                                        </div>
                                    </form>
                                </div>
                                {/*Blog Category Widget*/}
                                <div className="sidebar-widget sidebar-blog-category">
                                    <div className="sidebar-title">
                                        <h2>Categories</h2>
                                    </div>
                                    <ul className="cat-list">
                                        <li><Link to=''>Modular Kitchen</Link></li>
                                        <li><Link to=''>Lighting Effect</Link></li>
                                        <li><Link to=''>Interior Tips</Link></li>
                                        <li><Link to=''>Modern Wardrobe</Link></li>
                                        <li><Link to=''>Modern Furniture</Link></li>
                                        <li><Link to=''>Wooden Interior</Link></li>
                                    </ul>
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