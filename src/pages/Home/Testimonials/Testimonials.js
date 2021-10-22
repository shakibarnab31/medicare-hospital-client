import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Testimonial from '../Testimonial/Testimonial';


const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('/testimonials.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <>
            <Container className="my-4">
                <h6 className="my-2 text-danger">Testimonials</h6>
                <h2 className="mb-4 text-success">What Our Patient Say About Us</h2>
                <Row xs={1} md={3} className=" gy-5 mt-5 ">
                    {testimonials.map(testimonial => <Testimonial
                        key={testimonial.id}
                        testimonial={testimonial}></Testimonial>)}
                </Row>
            </Container>
        </>
    );
};

export default Testimonials;