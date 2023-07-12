import md5 from "md5";
import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../core/redux/auth";


export default function Login() {

    const userNameRef = useRef()
    const passwordRef = useRef()

    const accounts = useSelector(state => state.auth.accounts)

    const dispatch = useDispatch()

    const handleLogin = () => {
        const userName = userNameRef.current.value
        const password = md5(passwordRef.current.value)

        const index = accounts.findIndex(item => item.userName === userName && item.password === password)

        if (index !== -1) {
            dispatch(setToken({ token: accounts[index] }))
        }else {
            alert('Wrong user name or password !')
        }
    }

    return (
        <Container fluid>
            <Row className="d-flex justify-content-center my-5">
                <Col md="6">
                    <form>
                        {/* Email input */}
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example1">User Name</label>
                            <input type="text" id="form2Example1" className="form-control" ref={userNameRef} />
                        </div>
                        {/* Password input */}
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example2">Password</label>
                            <input type="password" id="form2Example2" className="form-control" ref={passwordRef} />
                        </div>
                        {/* 2 column grid layout for inline styling */}

                        {/* Submit button */}
                        <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleLogin}>Sign in</button>
                        {/* Register buttons */}

                    </form>

                </Col>
            </Row>
        </Container>
    )

}