import { Link, useNavigate } from "react-router-dom";
import { getAccounts } from "../../../../container/api/auth-api";
import { checkAddress, checkConfirmPassword, checkEmail, checkEmailExist, checkFullName, checkPassword, checkPhone, checkUserName, checkUserNameExist } from "../commons/validation";
import { useRef } from "react";
import md5 from "md5";
import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";


export default function Register() {

    const queryClient = useQueryClient()

    const accounts = useSelector(state => state.auth.accounts)

    const navigate = useNavigate();

    const fullNameRef = useRef();
    const messageFullNameRef = useRef();

    const usernameRef = useRef();
    const messageUsernameRef = useRef();

    const emailRef = useRef();
    const messageEmailRef = useRef();

    const passwordRef = useRef();
    const messagePasswordRef = useRef();

    const confirmPasswordRef = useRef();
    const messageConfirmPasswordRef = useRef();

    const addressRef = useRef();
    const messageAddressRef = useRef();

    const phoneRef = useRef();
    const messagePhoneRef = useRef();

    const validation = () => {
        const fullName = fullNameRef?.current
        const messageFullName = messageFullNameRef?.current

        const username = usernameRef?.current
        const messageUsername = messageUsernameRef?.current

        const email = emailRef?.current
        const messageEmail = messageEmailRef?.current

        const password = passwordRef?.current
        const messagePassword = messagePasswordRef?.current

        const confirmPassword = confirmPasswordRef?.current
        const messageConfirmPassword = messageConfirmPasswordRef?.current

        const address = addressRef?.current
        const messageAddress = messageAddressRef?.current

        const phone = phoneRef?.current
        const messagePhone = messagePhoneRef?.current

        const flag1 = checkFullName(fullName, messageFullName)
        const flag2 = checkUserName(username, messageUsername) && checkUserNameExist(accounts, username, messageUsername)
        const flag3 = checkEmail(email, messageEmail) && checkEmailExist(accounts, email, messageEmail)
        const flag4 = checkPassword(password, messagePassword)
        const flag5 = checkConfirmPassword(password, confirmPassword, messageConfirmPassword)
        const flag6 = checkAddress(address, messageAddress)
        const flag7 = checkPhone(phone, messagePhone)

        return flag1 && flag2 && flag3 && flag4 && flag5 && flag6 && flag7

    }

    const mutation = useMutation({
        mutationFn: (newAccount) => fetch('http://localhost:9999/accounts', {
            method: 'POST',
            body: JSON.stringify(newAccount),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['accounts'] })
            toast.success('Register Success !')
            setTimeout(() => {
                navigate("/login")
            }, 1500)
        }
    })

    const handelRegister = () => {
        if (validation()) {
            const fullName = fullNameRef?.current?.value
            const username = usernameRef?.current?.value
            const email = emailRef?.current?.value
            const password = md5(passwordRef?.current?.value)
            const address = addressRef?.current?.value
            const phone = phoneRef?.current?.value
            const account = {
                name: fullName,
                userName: username,
                email: email,
                password: password,
                address: address,
                phone: phone,
                role: Number(2),
                status: Number(1),
            }
            mutation.mutate(account)
        }
    }


    return (
        <>
            {/*Page Title*/}
            <section className="page-title" style={{ backgroundImage: 'url(images/background/6.jpg)' }}>
                <div className="auto-container">
                    <h2>Register To Be A Member</h2>
                    <ul className="page-breadcrumb">
                        <li><Link to='/'>Home</Link></li>
                        <li>Register</li>
                    </ul>
                </div>
            </section>
            {/*End Page Title*/}

            <section className="contact-form-section" style={{ backgroundImage: 'url(images/background/contact.png)' }}>
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title">
                        <h2>Register Your Account To Have More Experience</h2>
                        <div className="text">A Member? <Link to='/login'>Click Here</Link></div>
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
                                            <div className="form-group col-sm-12">
                                                <input type="text" name="username" ref={fullNameRef} placeholder="Your Full Name" onBlur={validation} />
                                                <small style={{ color: 'red' }} ref={messageFullNameRef}></small>
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input type="text" name="username" ref={usernameRef} placeholder="Your UserName" onBlur={validation} />
                                                <small style={{ color: 'red' }} ref={messageUsernameRef}></small>
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input type="email" name="username" ref={emailRef} placeholder="Your Email" onBlur={validation} />
                                                <small style={{ color: 'red' }} ref={messageEmailRef}></small>
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input type="password" name="email" ref={passwordRef} placeholder="Your Password" onBlur={validation} />
                                                <small style={{ color: 'red' }} ref={messagePasswordRef}></small>
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input type="password" name="email" ref={confirmPasswordRef} placeholder="Confirm Password" onBlur={validation} />
                                                <small style={{ color: 'red' }} ref={messageConfirmPasswordRef}></small>
                                            </div>
                                            <div className="form-group col-6">
                                                <input type="text" name="username" ref={addressRef} placeholder="Your Address" onBlur={validation} />
                                                <small style={{ color: 'red' }} ref={messageAddressRef}></small>

                                            </div>
                                            <div className="form-group col-6">
                                                <input type="text" name="username" ref={phoneRef} placeholder="Your Phone" onBlur={validation} />
                                                <small style={{ color: 'red' }} ref={messagePhoneRef}></small>
                                            </div>
                                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                <button className="theme-btn btn-style-one" type="button" name="submit-form" onClick={handelRegister}>
                                                    <span className="txt">Register</span>
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