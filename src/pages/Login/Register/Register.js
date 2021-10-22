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
            <h3>Please Register</h3>
            <form onSubmit={handleRegistration} >
                <input onBlur={handleName} type="name" name="name" id="" placeholder="enter name" required />
                <br />
                <input onBlur={handleEmail} type="email" name="email" id="" placeholder="enter email" required/>
                <br />
                <input onBlur={handlePassword} type="password" name="password" id="" placeholder="enter password" required/>
                <br />
                <input type="submit" value="Register" />
                <p>{error}</p>
                
            </form>
        </div>
    );
};

export default Register;