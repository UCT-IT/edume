import FAQ from "@/components/home/FAQ/FAQ";
import Features from "@/components/home/Features/Features";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Features />
      <FAQ />
    </React.Fragment>
  );
};

export default HomePage;
