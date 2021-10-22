import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {

    const { id, name, descripton, card_img } = props.service;
    return (
        <div>

            <Col>
                <Card className='border-0 service-card' >
                    <Card.Img variant="top" src={card_img} className="p-2" />
                    <Card.Body className="text-start">
                        <Card.Title> <h3 className="text-success">{name}</h3> </Card.Title>
                        <Card.Text>
                            <p> <small>{descripton.slice(0, 150)}...</small></p>
                        </Card.Text>
                        <Link to={`/serviceDetails/${id}`}><Button className="btn-info">Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default Service;