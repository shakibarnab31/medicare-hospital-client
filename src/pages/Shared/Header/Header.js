import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';


const Header = () => {
    const { user, logOut,setError } = useAuth();
    const handleLogOut = () => {
        logOut();
        setError('')
        

    }
    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">MediCare</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/lab-service">Lab-Service</Nav.Link>
                        <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={Link} to="/appointment">Appointment</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        {user.email ? <button onClick={handleLogOut}>Logout</button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}

                        {user.email?<Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>:''}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;