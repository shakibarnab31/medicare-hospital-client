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
            <Container className="mb-5">
                <h2 className="my-5 text-success">Our Lab Services</h2>
                <Row xs={1} md={4} lg={4} className="gy-5">
                    {labTest.map(lab => <Lab
                        key={lab.id}
                        lab={lab}></Lab>)}
                </Row>
            </Container>

        </>
    );
};

export default LabTest;