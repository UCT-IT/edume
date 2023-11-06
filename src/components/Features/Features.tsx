import React from "react";
import Feature from "./Feature/Feature";
import PaidSection from "./PaidSection/PaidSection";
import Clients from "./Clients/Clients";
import Communication from "./Communication/Communication";

const Features = () => {
  return (
    <>
      <Feature />
      <PaidSection />
      <Clients />
      <Communication />
    </>
  );
};

export default Features;
