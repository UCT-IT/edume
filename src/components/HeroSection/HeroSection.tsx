"use client";
import { Box, Button, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import heroSectionImg from "../../assets/images/heroSectionImage.svg";
import { useState, useEffect } from "react";
import Image from "next/image";
import { strings } from "@/assets/locales/locales";
import HeroBackground from "../HeroBackground/HeroBackground";

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
  const data = {
    title: strings?.heroSection?.title,
    animatedText: strings?.heroSection?.animatedText,
    description: strings?.heroSection?.description,
    btn: strings?.heroSection?.btn,
    tour: strings?.heroSection?.tour,
  };
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
    <React.Fragment>
      <HeroBackground>
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
                // whiteSpace="pre-wrap"
              >
                {data.title}
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
              <Text>{data.description}</Text>
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
                {data.btn}
              </Button>
              <Text>{data.tour}</Text>
            </Box>
            <Box zIndex={2} w="100%">
              <Image
                src={heroSectionImg}
                alt="Hero Section Banner Image"
              ></Image>
            </Box>
          </Grid>
        </Container>
      </HeroBackground>
    </React.Fragment>
  );
};

export default HeroSection;
