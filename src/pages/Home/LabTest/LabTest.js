import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Lab from '../Lab/Lab';

const LabTest = () => {

    const [labTest, setLabTest] = useState([]);
    useEffect(() => {
        fetch('/labTest.json')
            .then(res => res.json())
            .then(data => setLabTest(data))
    }, [])
    return (
        <>
            <Container>
                <h3 className="my-5">Our Lab Services</h3>
                <Row xs={1} md={4} lg={4} className="g-4 mb-5">
                    {labTest.map(lab => <Lab
                        key={lab.id}
                        lab={lab}></Lab>)}
                </Row>
            </Container>

        </>
    );
};

export default LabTest;