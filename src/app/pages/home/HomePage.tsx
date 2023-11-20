import Features from "@/components/home/Features/Features";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import Works from "@/components/home/Works/Works";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Features />
      <Works></Works>
    </React.Fragment>
  );
};

export default HomePage;
