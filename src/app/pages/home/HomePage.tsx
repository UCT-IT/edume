import Features from "@/components/home/Features/Features";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import TestimonialCarousel from "@/components/home/TestimonialCarousel/TestimonialCarousel";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Features />
      <TestimonialCarousel />
    </React.Fragment>
  );
};

export default HomePage;
