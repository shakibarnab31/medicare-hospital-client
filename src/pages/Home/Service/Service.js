import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {

    const { id, name, descripton, card_img } = props.service;
    return (
        <div>

            <Col>
                <Card >
                    <Card.Img variant="top" src={card_img} />
                    <Card.Body className="text-start">
                        <Card.Title> <h3>{name}</h3> </Card.Title>
                        <Card.Text>
                            <p> {descripton.slice(0, 199)}...</p>
                        </Card.Text>
                        <Link to={`/serviceDetails/${id}`}><button className="btn-info">Details</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default Service;