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
            <Container className="my-5">
                <h6 className="m-2">Testimonials</h6>
                <h2 className="mb-5">What Our Patient Say About Us</h2>
                <Row xs={1} md={3} className=" g-5 mx-5 mt-5 ">
                    {testimonials.map(testimonial => <Testimonial
                        key={testimonial.id}
                        testimonial={testimonial}></Testimonial>)}
                </Row>
            </Container>
        </>
    );
};

export default Testimonials;