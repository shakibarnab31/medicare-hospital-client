import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = (props) => {
    const { name, info, office, img } = props.doctor
    return (
        <div>
            <Col>
                <Card >
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="text-start">
                        <Card.Title> <h4>{name}</h4> </Card.Title>
                        <Card.Text>
                            <p>{info}</p>
                            <p>{office}</p>
                        </Card.Text>
                        <Link to="/appointment"><Button>Make Appointment</Button></Link>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Doctor;