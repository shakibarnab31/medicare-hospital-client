import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import appointmentImg from '../../images/appointment/happy-doctor-holding-clipboard-with-patients.jpg'

const Appointment = () => {
    return (
        <>

            <Container className="">
                <Row>
                    <Col lg={8}>
                        <h2 className="my-4">Make Appointment</h2>
                        <Form>
                            <Row className="">
                                <Col lg={6}>
                                    <Form.Control className="p-3" type="text" placeholder="Name" />
                                </Col>
                                <Col lg={6} className="mb-3">
                                    <Form.Control type="email" placeholder="email" className="p-3" />
                                </Col>
                                <Col lg={6}>
                                    <Form.Control className="p-3" type="text" placeholder="Phone Number" />
                                </Col>
                                <Col lg={6}>
                                    <Form.Control className="p-3" type="text" placeholder="Subject" />
                                </Col>
                                <Col lg={12} className="my-4">

                                    <Form.Control className="py-5" type="text" placeholder="Your Problem" />
                                </Col>
                                <Col lg={12}>
                                    <Button className='p-3 w-100 bg-info fs-3'>Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col lg={4}><img className="appointment w-100" src={appointmentImg} alt="" /></Col>
                </Row>
            </Container>

        </>
    );
};

export default Appointment;