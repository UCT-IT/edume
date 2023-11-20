import { Container, Divider, Link, Text } from "@chakra-ui/react";
import React from "react";
import bgImg from "@/assets/images/businessWork.svg";
import NextLink from "next/link";
import { strings } from "@/assets/locales/locales";

const GrowBusiness = () => {
  const data = {
    title: strings.businessWork.title,
    subTitle: strings.businessWork.subTitle,
    description: strings.businessWork.description,
    link: strings.businessWork.link,
  };
  return (
    <Container
      bgImage={`url("https://assets-global.website-files.com/601a133a769fa8f8d45d95ba/61854dd04e61c933221fc418_map.svg")`}
      //   bgImage={`url(${bgImg})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      maxW="container.xl "
      py="100px"
      px={["20px", "", ""]}
      textAlign="center"
    >
      <Text
        textColor="tertiary"
        fontWeight="bold"
        size="md"
        letterSpacing="3px"
        mb="20px"
      >
        {data.title}
      </Text>
      <Text mb="30px" fontSize="35px" fontWeight="medium">
        {data.subTitle}
      </Text>
      <Text mb="30px" lineHeight="30px" textColor="textColor" fontSize="18px">
        {data.description}
      </Text>
      <Link
        href="/"
        _hover={{
          textDecoration: "none",
        }}
        as={NextLink}
        textColor="blue.400"
      >
        {data.link}
      </Link>
      <Divider mt="30px"></Divider>
    </Container>
  );
};

export default GrowBusiness;
