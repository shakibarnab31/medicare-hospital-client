import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Lab = (props) => {
    const { name, info, img } = props.lab;
    return (
        <div>
            <Col>
                <Card >
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="text-start">
                        <Card.Title> <h5>{name}</h5> </Card.Title>
                        <Card.Text>
                            <p>{info}</p>

                        </Card.Text>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Lab;