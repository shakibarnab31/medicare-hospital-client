import { signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import Register from '../Register/Register';


const Login = () => {

    const { user, error, setError, setIsLoading, setUser, signInwithGoogle, loginUsingEmailAndPassword } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [toggle, setToggle] = useState(true)

    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || "/home"

    const handleSignInWithGoogle = () => {
        signInwithGoogle()
            .then(result => {
                console.log(result.user)
                history.push(redirect_uri)
                setUser(result.user)

            })
            .finally(() => setIsLoading(false))
    }


    const handleLoginWithEmail = (e) => {
        e.preventDefault();
        loginUsingEmailAndPassword(email, password)
            .then(result => {
                console.log(result.user)
                history.push(redirect_uri)
                console.log(result.user)
                setUser(result.user)
                setError('')


            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
        e.target.reset();
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        {toggle ?

                            <div>
                                <h2>Please Login</h2>
                                <form onSubmit={handleLoginWithEmail}>
                                    <input onBlur={handleEmail} type="email" name="email" id="" placeholder="enter email" />
                                    <br />
                                    <input onBlur={handlePassword} type="password" name="" id="" placeholder="enter password" />
                                    <br />
                                    <input type="submit" value="login" />
                                    <p className="text-danger">{error}</p>
                                </form>
                            </div>


                            : <Register></Register>}
                    </Col>
                    <Col>



                        {toggle ? <p>New to Medicare? <button onClick={() => setToggle(false)} className="btn-success">Please Register</button></p> :
                            <p>Already have an Acount? <button className="btn-info" onClick={() => setToggle(true)}>Please login</button></p>}



                        <button onClick={handleSignInWithGoogle} className="btn-warning">Signin With Google</button>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Login;