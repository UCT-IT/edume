import Features from "@/components/home/Features/Features";
import GrowBusiness from "@/components/home/GrowBusiness/GrowBusiness";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Features />
      <GrowBusiness></GrowBusiness>
    </React.Fragment>
  );
};

export default HomePage;
