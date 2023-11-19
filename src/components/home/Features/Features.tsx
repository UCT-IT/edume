import React from "react";
import Feature from "./Feature/Feature";
import PaidSection from "./PaidSection/PaidSection";
import Clients from "./Clients/Clients";
import Communication from "./Communication/Communication";
import TutorTeacher from "./TutorTeacher/TutorTeacher";
import Business from "./Business/Business";

const Features = () => {
  return (
    <React.Fragment>
      <Feature />
      <PaidSection />
      <Clients />
      {/* <Communication />
      <TutorTeacher />
      <Business /> */}
    </React.Fragment>
  );
};

export default Features;
