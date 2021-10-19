import React, { useReducer, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

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


            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))

        setUserDisplayName(name)


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
            <h3>Please Register</h3>
            <form onSubmit={handleRegistration} >
                <input onBlur={handleName} type="name" name="name" id="" placeholder="enter name" />
                <br />
                <input onBlur={handleEmail} type="email" name="email" id="" placeholder="enter email" />
                <br />
                <input onBlur={handlePassword} type="password" name="password" id="" placeholder="enter password" />
                <br />
                <input type="submit" value="Register" />
                <p className="text-danger">{error}</p>
            </form>
        </div>
    );
};

export default Register;