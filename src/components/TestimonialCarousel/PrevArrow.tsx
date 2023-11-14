import { ArrowBackIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React from "react";

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      icon={<ArrowBackIcon />}
      pos="absolute"
      left={["0px", "20px", "20px"]}
      top="50%"
      bg="secondary"
      rounded="50%"
      h="60px"
      w="60px"
      fontSize="xl"
      color="#000"
      shadow="2xl"
      zIndex="3"
      transform="translateY(-50%)"
      aria-label="Previous"
    ></IconButton>
  );
};

export default PrevArrow;
