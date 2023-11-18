import FAQ from "@/components/home/FAQ/FAQ";
import Features from "@/components/home/Features/Features";
import GrowBusiness from "@/components/home/GrowBusiness/GrowBusiness";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import TestimonialCarousel from "@/components/home/TestimonialCarousel/TestimonialCarousel";
import Works from "@/components/home/Works/Works";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <Features />
      {/* <Works></Works>
      <TestimonialCarousel></TestimonialCarousel>
      <GrowBusiness></GrowBusiness>
      <FAQ></FAQ> */}
    </React.Fragment>
  );
};

export default HomePage;
