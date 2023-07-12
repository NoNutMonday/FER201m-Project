import { Link } from "react-router-dom";

import emailjs from '@emailjs/browser';
import { useRef } from "react";
import md5 from "md5";
import { toast } from "react-hot-toast";

export default function Forgot() {
    const form = useRef();

    const code = useRef()
    const name = useRef()
    const email = useRef()

    const renderNewpassword = () => {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 6; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        fetch(`http://localhost:9999/accounts?email=${email.current.value}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                if (data.length !== 0) {
                    console.log(data)
                    const password = renderNewpassword()
                    code.current.value = password
                    name.current.value = data[0].name
                    emailjs.sendForm('service_iv3n4xs', 'template_fvm8lxd', form.current, 'EinHZve03Gsq1jKN0')
                        .then((result) => {
                            const newData = {
                                ...data[0],
                                password: md5(password)
                            }

                            console.log(newData)

                            fetch(`http://localhost:9999/accounts/${newData.id}`, {
                                method: 'PUT',
                                headers: {
                                    'Content-type': 'application/json; charset=UTF-8',
                                },
                                body: JSON.stringify(newData)
                            })
                                .then(() => {
                                    toast.success('Check Your Email To Take New Password')
                                })
                        })
                        .catch(error => {
                            // show the user an error
                            toast.error('Something wrong! try later')
                        })
                } else {
                    toast.error('Your Email No Have In Database')
                }
            })
    };

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
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="row clearfix">
                                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                <input type="email" name="user_email" ref={email} placeholder="Your Email" required />
                                                <input type="email" name="user_name" ref={name} hidden />
                                                <input type="email" name="message" ref={code} placeholder="Your Email" hidden />
                                            </div>
                                            <div className="form-group col-lg-12 col-md-12 col-sm-6">
                                                <button className="theme-btn btn-style-one" type="submit" name="submit-form">
                                                    <span className="txt">Reset</span>
                                                </button>
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