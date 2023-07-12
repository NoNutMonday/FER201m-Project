import { useRef } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { getAccounts } from "../../../../container/api/auth-api";
import { checkAddress, checkEmail, checkEmailExistForUpdate, checkFullName, checkPhone } from "../commons/validation";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../../core/redux/auth";

export default function Profiles() {
    const queryClient = useQueryClient()

    const token = useSelector(state => state.auth.token)

    const query = getAccounts();

    const fullNameRef = useRef();
    const messageFullNameRef = useRef();

    const usernameRef = useRef();
    const messageUsernameRef = useRef();

    const emailRef = useRef();
    const messageEmailRef = useRef();

    const addressRef = useRef();
    const messageAddressRef = useRef();

    const phoneRef = useRef();
    const messagePhoneRef = useRef();

    const validation = () => {
        const fullName = fullNameRef?.current
        const messageFullName = messageFullNameRef?.current

        const email = emailRef?.current
        const messageEmail = messageEmailRef?.current

        const address = addressRef?.current
        const messageAddress = messageAddressRef?.current

        const phone = phoneRef?.current
        const messagePhone = messagePhoneRef?.current

        if (query.isSuccess) {
            const flag1 = checkFullName(fullName, messageFullName)
            const flag3 = checkEmail(email, messageEmail) && checkEmailExistForUpdate(query?.data, email, token?.email, messageEmail)
            const flag6 = checkAddress(address, messageAddress)
            const flag7 = checkPhone(phone, messagePhone)

            return flag1 && flag3 && flag6 && flag7
        } else {
            toast.error('Server Error !')

            return false;
        }
    }

    const dispatch = useDispatch()

    const mutation = useMutation({
        mutationFn: (newAccount) => fetch(`http://localhost:9999/accounts/${newAccount?.id}`, {
            method: 'PUT',
            body: JSON.stringify(newAccount),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }

        })
            .then(res => res.json())
            .then(data => {
                dispatch(setToken({ token: data }))
            }),

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['accounts'] })
            toast.success('Update Success !')
        }
    })

    const handleEditProfiles = () => {
        if (validation()) {
            const fullName = fullNameRef?.current?.value
            const email = emailRef?.current?.value
            const address = addressRef?.current?.value
            const phone = phoneRef?.current?.value
            const account = {
                ...token,
                name: fullName,
                email: email,
                address: address,
                phone: phone
            }

            if (query.isSuccess) {
                mutation.mutate(account)
            } else {
                toast.error('Server Error !')
            }
        }
    }

    console.log(token)

    return (
        token ? (
            <>
                <section
                    className="page-title"
                    style={{ backgroundImage: "url(images/background/5.jpg)" }}
                >
                    <div className="auto-container">
                        <h2>Your Profile</h2>
                        <ul className="page-breadcrumb">
                            <li>
                                <Link to={`/`}>Home</Link>
                            </li>
                            <li>profiles</li>
                        </ul>
                    </div>
                </section>

                <section className="contact-form-section" style={{ backgroundImage: 'url(images/background/contact.png)' }}>
                    <div className="auto-container">
                        {/* Sec Title */}
                        <div className="sec-title">
                            <h2>Update Your Profiles</h2>
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
                                                    <input type="text" name="username" ref={fullNameRef} defaultValue={token?.name} placeholder="Your Full Name" onBlur={validation} />
                                                    <small style={{ color: 'red' }} ref={messageFullNameRef}></small>
                                                </div>
                                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                    <input type="text" name="username" ref={usernameRef} defaultValue={token?.userName} disabled placeholder="Your UserName" onBlur={validation} />
                                                    <small style={{ color: 'red' }} ref={messageUsernameRef}></small>
                                                </div>
                                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                    <input type="email" name="username" ref={emailRef} defaultValue={token?.email} placeholder="Your Email" onBlur={validation} />
                                                    <small style={{ color: 'red' }} ref={messageEmailRef}></small>
                                                </div>
                                                <div className="form-group col-6">
                                                    <input type="text" name="username" ref={addressRef} defaultValue={token?.address} placeholder="Your Address" onBlur={validation} />
                                                    <small style={{ color: 'red' }} ref={messageAddressRef}></small>
                                                </div>
                                                <div className="form-group col-6">
                                                    <input type="text" name="username" ref={phoneRef} defaultValue={token?.phone} placeholder="Your Phone" onBlur={validation} />
                                                    <small style={{ color: 'red' }} ref={messagePhoneRef}></small>
                                                </div>
                                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                    <button className="theme-btn btn-style-one" type="button" name="submit-form" onClick={handleEditProfiles}>
                                                        <span className="txt">Save Change</span>
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
        ) : (
            <div>
                <h3>Login to access This Page</h3>
            </div>
        )


    )
}