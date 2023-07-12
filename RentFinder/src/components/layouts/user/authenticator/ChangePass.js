import { Link } from "react-router-dom";
import { useRef } from "react";
import { checkConfirmNewPassword, checkNewPassword, checkOldPassword } from "../commons/validation";
import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import md5 from "md5";


export default function ChangePass() {
    const queryClient = useQueryClient()


    const oldPassRef = useRef();
    const newPassRef = useRef();
    const comfirmPassRef = useRef();

    const messageOldPassRef = useRef();
    const messageNewPassRef = useRef();
    const messageComfirmPassRef = useRef();

    const validation = () => {
        // const oldPass = oldPassRef?.current
        // const newPass = newPassRef?.current
        // const comfirmPass = comfirmPassRef?.current
        // const messageOldPass = messageOldPassRef?.current
        // const messageNewPass = messageNewPassRef?.current
        // const messageComfirmPass = messageComfirmPassRef?.current

        // const flag1 = checkOldPassword(token?.password, oldPass, messageOldPass)
        // const flag2 = checkNewPassword(token?.password, newPass, messageNewPass)
        // const flag3 = checkConfirmNewPassword(newPass, comfirmPass, messageComfirmPass)

        // return flag1 && flag2 && flag3
    }

    const mutation = useMutation(account => {
        return fetch(`http://localhost:9999/accounts/${account?.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(account)
        })
    }, {
        onSuccess: () => {
            toast.success('Change Password Success !')
            queryClient.invalidateQueries('accounts')
            setTimeout(() => {
                window.location.reload()
            })
        },
        onError: () => {
            toast.error('Server Error !')
        }
    })

    const handelChangePass = () => {
        // if (validation()) {
        //     const password = md5(newPassRef?.current?.value)
        //     const account = {
        //         ...token,
        //         password: password,
        //     }

        //     mutation.mutate(account)
        // }
    }

    return (
        <>
            {
                true ? (
                    <>
                        <section className="page-title" style={{ backgroundImage: 'url(images/background/2.jpg)' }}>
                            <div className="auto-container">
                                <h2>Change Password</h2>
                                <ul className="page-breadcrumb">
                                    <li><Link to='/'>Home</Link></li>
                                    <li>Forgot Password</li>
                                </ul>
                            </div>
                        </section>

                        <section className="contact-form-section" style={{ backgroundImage: 'url(images/background/contact.png)' }}>
                            <div className="auto-container">
                                <div className="row clearfix">
                                    {/* Form Column */}
                                    <div className="form-column col-lg-7 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            {/* Contact Form */}
                                            <div className="contact-form">
                                                {/*Contact Form*/}
                                                <form method="post" action="" id="contact-form">
                                                    <div className="row clearfix">
                                                        <div className="form-group col-sm-12">
                                                            <input type="password" name="email" ref={oldPassRef} placeholder="Your Old Password" onBlur={validation} />
                                                            <small style={{ color: 'red' }} ref={messageOldPassRef}></small>
                                                        </div>
                                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                            <input type="password" name="code" ref={newPassRef} placeholder="Enter New Password" onBlur={validation} />
                                                            <small style={{ color: 'red' }} ref={messageNewPassRef}></small>
                                                        </div>
                                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                            <input type="password" name="code" ref={comfirmPassRef} placeholder="Enter Comfirm New Password" onBlur={validation} />
                                                            <small style={{ color: 'red' }} ref={messageComfirmPassRef}></small>
                                                        </div>

                                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                            <button className="theme-btn btn-style-one" type="button" onClick={handelChangePass} name="submit-form"><span className="txt">Change Password</span></button>
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
                    : null
            }




        </>
    )
}