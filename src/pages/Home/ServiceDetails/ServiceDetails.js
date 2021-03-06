import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const ServiceDetails = () => {

    const [serviceDetails, setServiceDetails] = useState([]);
    let { serviceId } = useParams();


    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])



    const found = serviceDetails?.filter(sd => sd.id == serviceId)

    return (
        <>
            <Container >
                <Row className="mx-auto" >
                    <Col md={12} lg={12} sm={12} className="my-5">
                        <img className="w-100" src={found[0]?.details_img} alt="" />
                        <h3 className="my-4">{found[0]?.name}</h3>
                        <p>{found[0]?.descripton}</p>
                        <Link to="/appointment"><Button>Make Appointment</Button></Link>
                        <h3 className="my-4">Speciallist</h3>
                        <CardGroup>
                            <Card>
                                <Card.Img variant="top" src={found[0]?.doctors[0].img} />
                                <Card.Body>
                                    <Card.Title>{found[0]?.doctors[1].info}</Card.Title>
                                    <Card.Text>
                                        {found[0]?.doctors[0].office}
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                            <Card>
                                <Card.Img variant="top" src={found[0]?.doctors[1].img} />
                                <Card.Body>
                                    <Card.Title>{found[0]?.doctors[1].info}</Card.Title>
                                    <Card.Text>
                                        {found[0]?.doctors[1].office}
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                            <Card>
                                <Card.Img variant="top" src={found[0]?.doctors[2].img} />
                                <Card.Body>
                                    <Card.Title>{found[0]?.doctors[2].info}</Card.Title>
                                    <Card.Text>
                                        {found[0]?.doctors[2].office}
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                        </CardGroup>
                    </Col>

                </Row>


            </Container>


        </>
    );
};

export default ServiceDetails;