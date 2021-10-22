import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import welcomImg from '../../../images/welcome/dr-image.jpg'


const Welcome = () => {
    return (
        <>
            <Container>
                <Row className="my-5">
                    <Col xs={12} sm={12} md={6}>
                        <img className="img-fluid" src={welcomImg} alt="" />
                    </Col>
                    <Col xs={12} sm={12} md={6} className="mt-5" >
                        <div className="pt-5">
                            <h3 className="text-danger">Welcome to Medicare</h3>
                            <p className="text-success">Short History</p>
                            <p><small>Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue.</small></p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Welcome;