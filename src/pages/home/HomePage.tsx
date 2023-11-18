import FAQ from "@/components/FAQ/FAQ";
import Features from "@/components/Features/Features";
import GrowBusiness from "@/components/GrowBusiness/GrowBusiness";
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
      <GrowBusiness></GrowBusiness>
      <FAQ></FAQ>
    </React.Fragment>
  );
};

export default HomePage;
