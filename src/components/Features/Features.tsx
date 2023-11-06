import React from "react";
import Feature from "./Feature/Feature";
import PaidSection from "./PaidSection/PaidSection";
import Clients from "./Clients/Clients";
import Communication from "./Communication/Communication";
import TutorTeacher from "./TutorTeacher/TutorTeacher";

const Features = () => {
  return (
    <>
      <Feature />
      <PaidSection />
      <Clients />
      <Communication />
      <TutorTeacher />
    </>
  );
};

export default Features;
