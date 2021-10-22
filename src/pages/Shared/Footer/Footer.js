import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark">
            <Container>
                <Row className=" mt-5 g-4 text-white">
                    <Col lg={6} sm={12} >
                        <h3 >Meadicare Hospital Ltd</h3>
                        <p>Our first priority is to aid patients with
                            best quality doctors and environment.We are open 24 hours to give services.Visit us and explore.
                        </p>
                    </Col>
                    <Col lg={6} sm={12} >
                        <h3>Information</h3>
                        <h5>Address: </h5>
                        <p><small>
                            Gomedic Building, Sesame Street London, United Kingdom</small></p>
                        <p>Mail: medicare@gmail.com</p>
                        <p>Phone: 012378965,12546878</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;