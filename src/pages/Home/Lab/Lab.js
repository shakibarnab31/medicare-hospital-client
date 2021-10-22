import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Lab.css'

const Lab = (props) => {
    const { name, info, img } = props.lab;
    return (
        <div>
            <Col>
                <Card className="lab-card" >
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="text-start">
                        <Card.Title> <h5 className='text-info mb-3'>{name}</h5> </Card.Title>
                        <Card.Text>
                            <p><small>{info}</small></p>

                        </Card.Text>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Lab;