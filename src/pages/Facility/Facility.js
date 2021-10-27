import React from 'react';
import { Col, Card } from 'react-bootstrap';

const Facility = (props) => {
    const { name, img, info } = props.facility;
    return (
        <div>
            <Col>
                <Card className='border-0 service-card' >
                    <Card.Img variant="top" src={img} className="p-2" />
                    <Card.Body className="text-start">
                        <Card.Title> <h3 className="text-success">{name}</h3> </Card.Title>
                        <Card.Text>
                            <p> {info}</p>
                        </Card.Text>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Facility;