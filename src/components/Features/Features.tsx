import React from 'react';
import Feature from './Feature/Feature';
import PaidSection from './PaidSection/PaidSection';
import Clients from './Clients/Clients';

const Features = () => {
    return (
        <>
          <Feature /> 
          <PaidSection />
          <Clients />
        </>
    );
};

export default Features;