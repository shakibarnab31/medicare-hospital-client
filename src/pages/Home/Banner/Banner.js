import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Container className="py-5" >
                <Row className="py-5" >
                    <Col></Col>
                    <Col lg={6} sm={12} className="my-5 text-start banner-title ">
                        <h1>MEDICARE</h1>
                        <h1>Hospital Ltd</h1>
                        <p>Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue.</p>
                    </Col>
                </Row>
            </Container>

        </div >
    );
};

export default Banner;