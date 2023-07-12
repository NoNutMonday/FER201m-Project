import { Link, useNavigate } from "react-router-dom";

import { checkPassword, checkPasswordEmpty, checkUserName } from "../commons/validation";

import md5 from "md5";

import { useRef } from "react";
import { useQuery } from "react-query";
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../../core/redux/auth";

export default function Login() {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const state = useSelector(state => state.auth.accounts)

    const usernameRef = useRef();
    const passwordRef = useRef();

    const messageUsernameRef = useRef();
    const messagePasswordRef = useRef();

    const validation = () => {
        const username = usernameRef?.current
        const password = passwordRef?.current
        const messageUsername = messageUsernameRef?.current
        const messagePassword = messagePasswordRef?.current
        const flag1 = checkUserName(username, messageUsername)
        const flag2 = checkPasswordEmpty(password, messagePassword)
        return flag1 && flag2
    }

    const handelLogin = () => {
        if (validation()) {
            const username = usernameRef?.current?.value
            const password = md5(passwordRef?.current?.value)

            const account = state?.find(account => account.userName.toString() === username.toString()
                && account.password.toString() === password.toString())
            console.log(state)

            console.log(account)
            console.log(username)
            console.log(password)

            if (account) {
                dispatch(setToken({ token: account }))
                toast.success('Login Success !')
                setTimeout(() => {
                    navigate("/")
                }, 1500)
            } else {
                toast.error('UserName Or Password Is Wrong !')
            }

        }
    }

    return (
        <>
            {/*Page Title*/}
            <section className="page-title" style={{ backgroundImage: 'url(images/background/5.jpg)' }}>
                <div className="auto-container">
                    <h2>Login Your Account</h2>
                    <ul className="page-breadcrumb">
                        <li><Link to='/'>Home</Link></li>
                        <li>Login</li>
                    </ul>
                </div>
            </section>
            {/*End Page Title*/}

            <section className="contact-form-section" style={{ backgroundImage: 'url(images/background/contact.png)' }}>
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title">
                        <h2>Login Your Account To Have More Experience</h2>
                        <div className="text">Not a Member? <Link to='/register'>Click Here</Link></div>
                    </div>
                    <div className="row clearfix">
                        {/* Form Column */}
                        <div className="form-column col-lg-7 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* Contact Form */}
                                <div className="contact-form">
                                    {/*Contact Form*/}
                                    <form >
                                        <div className="row clearfix">
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input type="text" name="username" ref={usernameRef} placeholder="Your UserName" onChange={validation} />
                                                <small className="d-none" ref={messageUsernameRef}></small>
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input type="password" name="email" ref={passwordRef} placeholder="Your Password" onChange={validation} />
                                                <small className="d-none" ref={messagePasswordRef}></small>

                                            </div>

                                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                <button className="theme-btn btn-style-one" type="button" onClick={handelLogin} name="submit-form"><span className="txt">Login</span></button>
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