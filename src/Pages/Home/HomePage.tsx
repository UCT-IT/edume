import Features from "@/components/Features/Features";
import HeroSection from "@/components/HeroSection/HeroSection";
import TestimonialCarousel from "@/components/TestimonialCarousel/TestimonialCarousel";
import Works from "@/components/Works/Works";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Features />
      <Works></Works>
      <TestimonialCarousel></TestimonialCarousel>
    </React.Fragment>
  );
};

export default HomePage;
