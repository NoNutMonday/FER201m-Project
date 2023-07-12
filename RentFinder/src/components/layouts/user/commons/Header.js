import { useRef } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { removeToken } from '../../../../core/redux/auth';

export default function Header() {

    const state = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const searchRef = useRef(null)

    const toggleSearch = () => {
        searchRef.current.classList.add('popup-visible')
    }

    const closeSearch = () => {
        searchRef.current.classList.remove('popup-visible')
    }

    return (
        <>
            <header className="main-header header-style-three">
                {/*Header Top*/}
                <div className="header-top">
                    <div className="auto-container clearfix" style={{ maxWidth: 'unset' }}>
                        <div className="top-right clearfix" >
                            {/* Info List */}
                            <ul className="info-list">
                                {
                                    state.token ? (
                                        <>
                                            <li className='nav-item'>
                                                <NavLink
                                                    to="/profile"
                                                    className={({ isActive, isPending }) =>
                                                        isPending ? "pending" : isActive ? "active" : ""
                                                    }

                                                >
                                                    Hello, {state?.token?.userName}
                                                </NavLink>
                                            </li>
                                            <li className='nav-item'>
                                                <NavLink
                                                    to="/changepass"
                                                    className={({ isActive, isPending }) =>
                                                        isPending ? "pending" : isActive ? "active" : ""
                                                    }

                                                >
                                                    Change Password
                                                </NavLink>
                                            </li>
                                            <li className='nav-item'>
                                                <NavLink
                                                    to="/wishlist"
                                                    className={({ isActive, isPending }) =>
                                                        isPending ? "pending" : isActive ? "active" : ""
                                                    }

                                                >
                                                    Wish List
                                                </NavLink>
                                            </li>
                                            {
                                                state?.token?.role === 1 ? (
                                                    <li className='nav-item'>
                                                        <NavLink
                                                            to="/admin"
                                                            className={({ isActive, isPending }) =>
                                                                isPending ? "pending" : isActive ? "active" : ""
                                                            }

                                                        >
                                                            Dashboard
                                                        </NavLink>
                                                    </li>
                                                ) : null
                                            }
                                            <li className='nav-item'>
                                                <NavLink
                                                    onClick={() => {
                                                        dispatch(removeToken())
                                                    }}
                                                    className={({ isActive, isPending }) =>
                                                        isPending ? "pending" : isActive ? "active" : ""
                                                    }
                                                    to="/"
                                                >
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </>

                                    ) : (
                                        <>
                                            <li>
                                                <NavLink
                                                    to="/login"
                                                    className={({ isActive, isPending }) =>
                                                        isPending ? "pending" : isActive ? "active" : ""
                                                    }
                                                >
                                                    Login
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/register"
                                                    className={({ isActive, isPending }) =>
                                                        isPending ? "pending" : isActive ? "active" : ""
                                                    }
                                                >
                                                    Register
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/forgot"
                                                    className={({ isActive, isPending }) =>
                                                        isPending ? "pending" : isActive ? "active" : ""
                                                    }
                                                >
                                                    Forgot Password
                                                </NavLink>
                                            </li>
                                        </>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                {/* End Header Top */}
                {/* Header Upper */}
                <div className="header-upper">
                    <div className="inner-container">
                        <div className="auto-container clearfix">
                            {/*Info*/}
                            <div className="logo-outer">
                                <div className="logo">
                                    <NavLink
                                        to=""
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                       <h2 className='text-warning'>RentFinder</h2>
                                    </NavLink>
                                </div>
                            </div>
                            {/*Nav Box*/}
                            <div className="nav-outer clearfix">
                                {/*Mobile Navigation Toggler For Mobile*/}
                                <div className="mobile-nav-toggler">
                                    <span className="icon flaticon-menu-1" />
                                </div>
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <div className="navbar-header">
                                        {/* Togg le Button */}
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="icon flaticon-menu-1" />
                                        </button>
                                    </div>
                                    <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                                        <ul className="navigation clearfix">
                                            <li className="nav">
                                                <NavLink
                                                    to=""
                                                    className={({ isActive, isPending }) =>
                                                        isPending ? "pending" : isActive ? "active" : ""
                                                    }
                                                >
                                                    Home
                                                </NavLink>
                                            </li>

                                            <li className="dropdown"><a>Services</a>
                                                <ul>
                                                    <li>
                                                        <Link to={`motel`}>Motel</Link>
                                                    </li>

                                                </ul>
                                            </li>

                                            <li className="">
                                                <NavLink
                                                    to="/review"
                                                    className={({ isActive, isPending }) =>
                                                        isPending ? "pending" : isActive ? "active" : ""
                                                    }
                                                >
                                                    Reviews
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                {/* Main Menu End*/}
                                {/* Outer Box */}
                                <div className="outer-box clearfix">
                                    <div className="search-box-btn" onClick={toggleSearch}>
                                        <span className="icon flaticon-magnifying-glass-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop" />
                    <div className="close-btn"><span className="icon flaticon-cancel" /></div>
                    <nav className="menu-box">
                        <div className="nav-logo">
                            <NavLink
                                to="/blog"
                                className={`${({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""} nav-link`
                                }
                            >
                                <img src="images/logo.png" alt="" />
                            </NavLink>
                        </div>
                        <ul className="navigation clearfix">
                            {/*Keep This Empty / Menu will come through Javascript*/}
                        </ul>
                        {/*Social Links*/}
                        <div className="social-links">
                            <ul className="clearfix">
                                <li>
                                    <NavLink
                                        to=""
                                        className={`${({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""} nav-link`
                                        }
                                    >
                                        <span className="fab fa-twitter" />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to=""
                                        className={`${({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""} nav-link`
                                        }
                                    >
                                        <span className="fab fa-facebook-square" />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to=""
                                        className={`${({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""} nav-link`
                                        }
                                    >
                                        <span className="fab fa-pinterest-p" />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to=""
                                        className={`${({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""} nav-link`
                                        }
                                    >
                                        <span className="fab fa-instagram" />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to=""
                                        className={`${({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""} nav-link`
                                        }
                                    >
                                        <span className="fab fa-youtube" />
                                    </NavLink>
                                </li>
                            </ul >
                        </div >
                    </nav >
                </div > {/* End Mobile Menu */}
                <Toaster position="top-right" />
            </header >

            <div ref={searchRef} id="search-popup" className="search-popup" >
                <div className="close-search theme-btn mt-5" ><span className="flaticon-cancel" onClick={closeSearch} /></div>
                <div className="popup-inner">
                    <div className="overlay-layer" />
                    <div className="search-form">
                        <div className="form-group">
                            <fieldset>
                                <input type="search" className="form-control" name="search-input" placeholder="Search Here..." required />
                                <input type="submit" placeholder="Search Now!" className="theme-btn" />
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>

        </>




    )
}