"use client";
import { Box, Button, Container, Text } from "@chakra-ui/react";
import React from "react";
import "./HeroSection.css";
import heroBg from "../../assets/images/heroSectionImage.svg";
import Image from "next/image";
import { useState, useEffect } from "react";

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
      <Box pos="relative">
        <Box pos="absolute" right="0px" top="90px" zIndex={1}>
          <Image src={heroBg} alt="Hero Banner Image"></Image>
        </Box>
        <Box
          bgImage="url('https://assets-global.website-files.com/601a133a769fa8f8d45d95ba/61856827909fb72472abfc6c_601da34bc4b63f405a9e97f1_bg-test2.svg')"
          bgSize="cover"
          bgPos="center"
          h="100vh"
          bgRepeat="repeat"
          bgColor="primary"
          className="clip"
        >
          <Container maxW="container.xl" paddingTop="150px" pl="80px" pr="50px">
            <Box>
              <Text
                as="h1"
                textColor="white"
                fontSize="54px"
                fontWeight="bold"
                lineHeight="1.2"
                my="10px"
              >
                Organize & <br /> Automate Your
              </Text>
              <Text
                transition="opacity 0.5s"
                opacity={fadeOut ? 0 : 1}
                fontSize="45px"
              >
                {textArray[currentTextIndex]}
              </Text>
              <Text textColor="white" my="20px">
                Teachworks is the #1 choice for managing your tutoring or <br />
                teaching business. Easily manage scheduling, students, billing
                <br /> and more!
              </Text>
              <Button
                as="a"
                bg="#8BC220"
                _hover={{ bg: "#97CE2C" }}
                color="white"
                px="20px"
                py="25px"
                my="20px"
                borderRadius="3px"
                fontWeight="normal"
              >
                Try It for Free
              </Button>
              <Text textColor="white">or Take a Quick Tour</Text>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
