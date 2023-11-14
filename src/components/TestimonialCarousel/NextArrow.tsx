import { ArrowForwardIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React from "react";

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      icon={<ArrowForwardIcon />}
      pos="absolute"
      right={["0px", "20px", "20px"]}
      bg="secondary"
      rounded="50%"
      h="60px"
      w="60px"
      fontSize="xl"
      color="#000"
      shadow="2xl"
      zIndex="3"
      top="50%"
      transform="translateY(-50%)"
      aria-label="Previous"
    ></IconButton>
  );
};

export default NextArrow;
