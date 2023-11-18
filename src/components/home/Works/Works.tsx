import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import workImage from "@/assets/images/works.svg";
import Image from "next/image";
import { strings } from "@/assets/locales/locales";

const Works = () => {
  const data = {
    title: strings?.works?.title,
    contents: strings?.works?.contents,
  };
  return (
    <Container maxW="container.xl " py="80px" px={["20px", "", ""]}>
      <Heading mb="40px" textAlign="center">
        {data.title}
      </Heading>
      <Image alt="work image" src={workImage} />
      <Grid
        textAlign="center"
        mt="20px"
        gap="20px"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
      >
        {data.contents?.map((item, index) => (
          <GridItem key={item.heading}>
            <Heading as="h4" size="sm">
              {index + 1}. {item.heading}
            </Heading>
            <Text fontSize="18" color="textColor" mt="12px">
              {item.desc}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Works;
