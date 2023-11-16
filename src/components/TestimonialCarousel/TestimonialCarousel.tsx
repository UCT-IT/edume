"use client";
import {
  Box,
  Container,
  Heading,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from "../common/PrevArrow";
import NextArrow from "../common/NextArrow";
import NextLink from "next/link";
import data from "@/assets/locales/data/testimonial.json";
import { motion } from "framer-motion";

const TestimonialCarousel = () => {
  const MotionBox = motion(Box);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <Box bg="#F4F9FF" py="60px">
      <Container maxW="container.xl " py="50px" px={["20px", "", ""]}>
        <Heading
          as="h6"
          fontSize="25px"
          color="#111111"
          textAlign="center"
          fontWeight="normal"
          mb="30px"
        >
          {data.title}
        </Heading>
        <Box textAlign="center" py="30px">
          <Slider {...settings}>
            {data.content?.map((item) => (
              <MotionBox
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                key={item.title}
                display="flex"
                justifyItems="center"
                alignItems="center"
                flexDirection="column"
              >
                <Box>
                  <Text
                    color="secondary"
                    fontSize={["18px", "25px", "25px"]}
                    fontWeight="semibold"
                    textColor="black"
                    mb="30px"
                    px={["", "", "150px"]}
                  >
                    {item.title}
                  </Text>
                  <Text
                    color="tertiary"
                    fontWeight="semibold"
                    fontSize={["20px", "20px", "20px"]}
                  >
                    {item.subTitle}
                  </Text>
                  <Text pb="30px" color="">
                    {item.text}
                  </Text>
                </Box>
              </MotionBox>
            ))}
          </Slider>
          <Link
            href="/"
            _hover={{
              textDecoration: "none",
            }}
            as={NextLink}
            textColor="blue.300"
          >
            {data.link}
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialCarousel;
