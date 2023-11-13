import { Box, Container, Heading } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Teachworks = () => {
  return (
    <Box bg="#F4F9FF">
      <Container maxW="container.xl " py="50px" px={["20px", "", ""]}>
        <Heading
          as="h6"
          fontSize="25px"
          color="#111111"
          textAlign="center"
          fontWeight="normal"
        >
          More than 70,000 tutors and education companies rely on Teachworks
        </Heading>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
};

export default Teachworks;
