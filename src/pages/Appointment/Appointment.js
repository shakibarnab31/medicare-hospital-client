import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';



const Appointment = () => {
    return (
        <>

            <Container>
                <Row>
                    <Col lg={7} md={7} sm={12}>
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

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={4} placeholder="Your problem" />
                                    </Form.Group>
                                </Col>
                                <Col lg={12}>
                                    <Button className='p-3 w-100 bg-info fs-3'>Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col lg={5} md={5} sm={12}><img className=" mt-4 pt-5" src='https://i.ibb.co/T1Cmp1g/appt.jpg' alt="" />
                    </Col>

                </Row>
            </Container>

        </>
    );
};

export default Appointment;