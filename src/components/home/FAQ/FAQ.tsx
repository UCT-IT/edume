import {
  Box,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { strings } from "@/assets/locales/locales";

const FAQ = () => {
  const data = {
    title: strings?.FAQ?.title,
    link: strings?.FAQ?.link,
    content: strings?.FAQ?.content,
  };
  return (
    <Container
      maxW="container.xl "
      pb="60px"
      textAlign="center"
      px={["20px", "", ""]}
    >
      <Heading>{data.title}</Heading>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        mt="60px"
        gap="20px"
      >
        {data?.content?.map((item, index, array) => (
          <GridItem
            key={item.title}
            mb="30px"
            borderRight={
              index === array.length - 1 ? "none" : "1px solid #80808038"
            }
          >
            <Box pr="10px">
              <Text fontSize="22px" mb="10px" fontWeight="semibold">
                {item.title}
              </Text>
              <Text
                mb="10px"
                lineHeight="30px"
                textColor="textColor"
                fontSize="17px"
              >
                {item.desc}
              </Text>
              <Link
                href="/"
                _hover={{
                  textDecoration: "none",
                }}
                as={NextLink}
                textColor="blue.400"
              >
                {item.link}
              </Link>
            </Box>
          </GridItem>
        ))}
      </Grid>
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
    </Container>
  );
};

export default FAQ;
