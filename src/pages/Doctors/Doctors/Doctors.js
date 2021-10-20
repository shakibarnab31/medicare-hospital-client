import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import MedicalStuff from '../MedicalStuff/MedicalStuff';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    },
        [])
    return (
        <>
            <Container>
                <h3 className="my-5">Our Specialists</h3>
                <Row xs={1} md={4} lg={4} className="g-4">
                    {doctors.slice(0, 8).map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}></Doctor>)}
                </Row>
            </Container>
            <Container>
                <h3 className="my-5">Our Medical Staffs</h3>
                <Row xs={1} md={4} lg={4} className="g-4 mb-5">
                    {doctors.slice(8, 12).map(medicalStuff => <MedicalStuff
                        key={medicalStuff.id}
                        medicalStuff={medicalStuff}></MedicalStuff>)}
                </Row>
            </Container>
        </>
    );
};

export default Doctors;