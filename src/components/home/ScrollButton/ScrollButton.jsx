import React, { useEffect, useState } from 'react';
import { SlArrowUp } from "react-icons/sl";
import {
  Button 
} from "@chakra-ui/react";

const ScrollButton = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return (
        <React.Fragment>
        <Button
          pos="fixed"
          top ="auto"
          bottom = "10%"
          left= "auto"
          right = "2%"
          bg="black"
          textColor="secondary"
          _hover={{textColor:"black", bg:"secondary"}}
          rounded="full"
          w="50px"
          h="50px"
          size="xl"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          visibility={isScrolled ? "visible" : "hidden"}
        >
          <SlArrowUp />
        </Button>
        </React.Fragment>
    );
};

export default ScrollButton;