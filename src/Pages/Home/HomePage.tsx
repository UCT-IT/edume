import Features from "@/components/Features/Features";
import HeroSection from "@/components/HeroSection/HeroSection";
// import Teachworks from "@/components/Teachworks/Teachworks";
import Works from "@/components/Works/Works";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Features />
      <Works></Works>
      {/* <Teachworks></Teachworks> */}
    </React.Fragment>
  );
};

export default HomePage;
