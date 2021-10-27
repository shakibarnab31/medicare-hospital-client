import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Container className="mx-auto" >
                <Row className="py-5" >
                    <Col></Col>
                    <Col lg={6} sm={12} className="mt-5 text-start banner-title ">
                        <div className="banner-name">
                            <h1>MEDICARE
                                <br />
                                HOSPITAL LTD
                            </h1>
                        </div>
                        <div>
                            <h3 className="text-warning mt-3">Best Medical Services in City.With access to 24 hour emergency assistance, you can continue to help others.</h3>
                        </div>


                    </Col>
                </Row>
            </Container>

        </div >
    );
};

export default Banner;