"use client";
import { Box, Button, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";

import heroSectionImg from "../../assets/images/heroSectionImage.svg";
import herobgImg from "@/assets/images/herobgImg.svg";
import { useState, useEffect } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const textArray = [
    "Driving School",
    "Music school",
    "Language School",
    "Test Prep center",
    "Tutoring Company",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) =>
          prevIndex === textArray.length - 1 ? 0 : prevIndex + 1
        );
        setFadeOut(false);
      }, 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, [textArray.length]);

  return (
    <>
      <Box
        bgImage='url("https://assets-global.website-files.com/601a133a769fa8f8d45d95ba/61856827909fb72472abfc6c_601da34bc4b63f405a9e97f1_bg-test2.svg")'
        bgColor="primary"
        clipPath="polygon(0 0, 100% 0, 100% 95%, 0% 100%)"
        zIndex={1}
        pt={{ base: "15%", sm: "10%" }}
      >
        <Container maxW="container.xl" h="100%">
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 2fr" }}
            alignItems="center"
            justifyContent="center"
            gap={{ base: "null", md: "20px" }}
            h="100%"
            pos="relative"
          >
            <Box
              textColor="secondary"
              textAlign={{ base: "center", md: "left" }}
            >
              <Text
                fontSize={{ base: "27px", sm: "30px", lg: "54px" }}
                fontWeight="bold"
                lineHeight="1.2"
              >
                Organize & <br /> Automate Your
              </Text>
              <Text
                transition="opacity 0.5s"
                opacity={fadeOut ? 0 : 1}
                fontSize={{ base: "24px", sm: "28px", lg: "45px" }}
                textColor="black"
                my="10px"
              >
                {textArray[currentTextIndex]}
              </Text>
              <Text>
                Teachworks is the #1 choice for managing your tutoring or
                teaching business. Easily manage scheduling, students, billing
                and more!
              </Text>
              <Button
                bg="#8BC220"
                _hover={{ bg: "#97CE2C" }}
                color="secondary"
                px="40px"
                py="25px"
                my="20px"
                borderRadius="3px"
                fontWeight="normal"
              >
                Try It for Free
              </Button>
              <Text>or Take a Quick Tour</Text>
            </Box>
            <Box zIndex={2} w="100%">
              <Image
                src={heroSectionImg}
                alt="Hero Section Banner Image"
              ></Image>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
