import { Box, Button, Container, Text } from "@chakra-ui/react";
import React from "react";
import "./HeroSection.css";
import heroBg from "../../assets/heroSectionImage.svg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <Box pos={"relative"}>
        <Box pos="absolute" right="0px" top="90px" zIndex={2}>
          <Image src={heroBg} alt="Hero Banner Image"></Image>
        </Box>
        <Box
          bgImage="url('https://assets-global.website-files.com/601a133a769fa8f8d45d95ba/61856827909fb72472abfc6c_601da34bc4b63f405a9e97f1_bg-test2.svg')"
          bgSize={"cover"}
          bgPos={"center"}
          h="100vh"
          bgRepeat={"repeat"}
          bgColor={"primary"}
          className="clip"
        >
          <Container
            maxW={"container.xl"}
            paddingTop="150px"
            pl="80px"
            pr="50px"
          >
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
              <Text fontSize="45px">Driving School</Text>
              <Text textColor="white" my="20px">
                Teachworks is the #1 choice for managing your tutoring or <br />{" "}
                teaching business. Easily manage scheduling, students, billing{" "}
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
