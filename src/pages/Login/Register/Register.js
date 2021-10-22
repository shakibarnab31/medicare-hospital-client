import React, { useReducer, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const { newRegistration, error, setUserDisplayName, user, setUser, setError, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || "/home"

    const handleRegistration = (e) => {
        e.preventDefault();

        newRegistration(email, password)
            .then(result => {
                console.log(result.user)
                history.push(redirect_uri)
                setUser(result.user)
                setError('')
                setUserDisplayName(name)
                window.location.reload()


            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))




        e.target.reset()

    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleName = e => {
        setName(e.target.value)
    }
    return (
        <div>
            <h2 className="text-white mb-5">Please Register</h2>

            <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="formBasicName">

                    <Form.Control
                        onBlur={handleName}
                        type="name" placeholder="Enter Name" required />
                </Form.Group>
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
                    type="submit">Register</Button>

            </Form>
        </div>
    );
};

export default Register;