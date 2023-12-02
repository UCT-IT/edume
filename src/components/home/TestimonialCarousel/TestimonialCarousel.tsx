import React from "react";
import data from "@/assets/locales/data/testimonial.json";
import CommonCarousel from "@/components/common/commonCarousel/CommonCarousel";

const TestimonialCarousel = () => {
  return (
    <CommonCarousel
      headingSize="text-[22px]"
      headingWeight="font-light"
      carouselData={data}
      headingColor="text-[#111111]"
      carouselBg="bg-[#F4F9FF]"
    />
  );
};

export default TestimonialCarousel;
