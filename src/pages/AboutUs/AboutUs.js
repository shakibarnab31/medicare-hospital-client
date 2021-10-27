import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import Facility from '../Facility/Facility';
import Footer from '../Shared/Footer/Footer';

const AboutUs = () => {
    const [facilities, setFacilities] = useState([]);
    useEffect(() => {
        fetch('/facilities.json')
            .then(res => res.json())
            .then(data => setFacilities(data))
    }, [])
    return (
        <div>
            <h1 className="mt-5 text-success">Personal care for your healthy living</h1>
            <Container className="mb-5">
                <Row>
                    <Col lg={6} md={6} sm={12} className="my-5">
                        <div className="mx-5 mt-5">
                            <h1 className=" text-start text-info mb-4">Medicare History</h1>
                            <p className="text-start">The Hospital established in 2000.First we started our journey with just 3 departments.Now it has extended into more departments.Mr Mark owen is founder of the Medicare Hospital Ltd.Till now we have earned many award and international recognition.</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className="my-5" >
                            <img className="img-fluid" src="https://preview.colorlib.com/theme/medart/images/xabout.jpg.pagespeed.ic.gAzC7yCDMN.webp" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="my-5">
                <Container>
                    <h2 className="my-5 text-primary">Facilities</h2>
                    <Row sm={1} md={4} className=" gy-5">
                        {facilities.map(facility => <Facility
                            key={facility.id}
                            facility={facility}></Facility>)}
                    </Row>
                </Container>
            </Container>
            <Container className="my-5">
                <Row>
                    <Col lg={6} md={6} sm={12}>

                        <img src="https://html.xpeedstudio.com/medizco/images/clients/11.png" alt="" />
                        <img src="https://html.xpeedstudio.com/medizco/images/clients/12.png" alt="" />
                        <img src="https://html.xpeedstudio.com/medizco/images/clients/13.png" alt="" />
                        <img src="https://html.xpeedstudio.com/medizco/images/clients/14.png" alt="" />
                        <img src="https://html.xpeedstudio.com/medizco/images/clients/15.png" alt="" />
                        <img src="https://html.xpeedstudio.com/medizco/images/clients/16.png" alt="" />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className="my-5 py-5 mx-5">
                            <h1 className="text-start text-success">Doctors <br />
                                Achievements</h1>
                            <h5 className="text-start">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts the word.</h5>
                        </div>
                    </Col>

                </Row>
            </Container>
            <Footer></Footer>
        </div>

    );
};

export default AboutUs;