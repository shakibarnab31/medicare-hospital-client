import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <Container id="services">
                <h2 className="my-5 text-primary">Medical Services</h2>
                <Row xs={1} md={3} className=" gy-5">
                    {services.map(service => <Service
                        key={service.id}
                        service={service}></Service>)}
                </Row>
            </Container>
        </>
    );
};

export default Services;