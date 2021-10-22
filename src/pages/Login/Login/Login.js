import { signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import Register from '../Register/Register';
import './Login.css'




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
        <div className="login" >
            <Container >
                <Row >
                    <Col className="mx-auto my-5 " md={6} lg={6} sm={12}>

                        <div>
                            {toggle ?

                                <div>
                                    <h2 className="text-white mb-5">Please Login</h2>

                                    <Form onSubmit={handleLoginWithEmail}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">

                                            <Form.Control
                                                onBlur={handleEmail}
                                                type="email" placeholder="Enter email" required />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control
                                                onBlur={handlePassword}
                                                type="password" placeholder="Password" required />
                                        </Form.Group>
                                        <Button className="w-100"
                                            variant="danger"
                                            type="submit">Login</Button>

                                    </Form>
                                </div>


                                : <Register></Register>}
                            {toggle && <h4 className="my-3 text-white">or</h4>}

                            {toggle && <Button onClick={handleSignInWithGoogle} className="btn-warning w-100">Signin With Google</Button>}

                            {toggle ? <div className="mt-4"><p className="text-start text-white">New to Medicare? <Button onClick={() => setToggle(false)} className="btn-success ">Please Register</Button></p></div> :
                                <div className="mt-4">  <p className="text-start text-white">Already have an Acount? <Button className="btn-warning " onClick={() => setToggle(true)}>Please login</Button></p></div>}
                        </div>




                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Login;