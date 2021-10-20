import React from 'react';
import Banner from '../Banner/Banner';
import LabTest from '../LabTest/LabTest';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <LabTest></LabTest>
        </div>
    );
};

export default Home;