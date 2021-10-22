import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import LabTest from '../LabTest/LabTest';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Welcome from '../Welcome/Welcome';


const Home = () => {
    return (
        <div id="home">
            < Banner ></Banner >
            <Welcome></Welcome>
            <Services></Services>
            <LabTest></LabTest>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div >
    );
};

export default Home;