import { Box } from "@chakra-ui/react";
import React from "react";
// import herobgImg from "../../assets/images/heroBg.svg";

const HeroBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      bgImage='url("https://assets-global.website-files.com/601a133a769fa8f8d45d95ba/61856827909fb72472abfc6c_601da34bc4b63f405a9e97f1_bg-test2.svg")'
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgColor="primary"
      w="100%"
      h="100%"
      clipPath="polygon(0 0, 100% 0, 100% 95%, 0% 100%)"
      zIndex={1}
      pt={{ base: "15%", sm: "10%" }}
    >
      {children}
    </Box>
  );
};

export default HeroBackground;
