import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./Testimonial.css"

const Testimonial = (props) => {
    const { name, comment, img } = props.testimonial;
    return (
        <div>
            <Col>
                <Card>
                    <div className="pt-3">
                        <Card.Img variant="top" src={img} className="testimonial w-50" />
                    </div>
                    <Card.Body >
                        <Card.Title> <h4>{name}</h4> </Card.Title>
                        <Card.Text>
                            <p><small> {comment}</small></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Testimonial;