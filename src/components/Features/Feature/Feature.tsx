"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import React from "react";
import Link from "next/link";
import "./Feature.css";
import { strings } from "@/assets/locales/locales";
import featureImage from "@/assets/images/feature.svg";
import Image from "next/image";

const Feature = () => {
  const featureData = {
    title: strings?.features?.title,
    subTitle: strings?.features?.subTitle,
    featureTitle: strings?.features?.feature?.title,
    featureContent: strings?.features?.feature?.content,
    featureLink: strings?.features?.feature?.link,
    featureBtn: strings?.features?.feature?.btn,
    badge: strings?.features?.feature?.badge,
    text: strings?.features?.text,
    link: strings?.features?.link,
    seeMore: strings?.features?.seeMore,
    desc: strings?.features?.desc,
  };
  return (
    <Container maxW="container.xl" px={["20px", "", ""]}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={7}
        paddingY="50px"
      >
        <GridItem order={[2, 2, 1]}>
          <Text
            fontWeight="bold"
            mb="17px"
            color="tertiary"
            textTransform="uppercase"
          >
            {featureData.title}
          </Text>
          <Heading>{featureData.subTitle}</Heading>
          <Text fontWeight="medium" fontSize="22px" mt="10px">
            {featureData.featureTitle}
          </Text>
          <List
            spacing={6}
            color="textColor"
            fontSize="18px"
            mt="18px"
            fontWeight="normal"
          >
            {featureData?.featureContent?.map((item: string, index: number) => (
              <ListItem key={index} display="flex" gap="16px" mb="10px">
                <ListIcon mt="5px" as={CheckIcon} color="black" />
                <Text>{item}</Text>
              </ListItem>
            ))}
            <ListItem
              color="primary"
              display="flex"
              alignItems="center"
              gap="16px"
            >
              <ListIcon as={CheckIcon} color="black" />
              <Link href="/">
                <span>{featureData.featureLink}</span>
              </Link>
            </ListItem>
          </List>
          <Button
            bg="primary"
            color="secondary"
            p={7}
            textTransform="capitalize"
            _hover={{ bg: "buttonHoverd" }}
            mt={4}
          >
            {featureData.featureBtn}
          </Button>
        </GridItem>
        <GridItem pos="relative" order={[1, 1, 2]}>
          <Box
            fontSize="20px"
            fontWeight="bold"
            borderRadius="10px"
            textAlign="center"
            zIndex={1}
            w="50%"
            p={{ base: "5px", md: "16px", lg: "16px" }}
            pos="absolute"
            left="25%"
            top="-25px"
            bg="#F4D12F"
            color="secondary"
          >
            {featureData.badge}
          </Box>
          <Box
            mb={["", "", "60px"]}
            className="clip-path"
            bg="#FDF7DA"
            p={10}
            py="50px"
            textAlign="center"
            position="relative"
          >
            <Text color="textColor" mb="10px">
              {featureData.text}
              <span>
                <Link href="/">
                  <Text color="primary">{featureData.link}</Text>
                </Link>
              </span>
              {featureData.desc}
            </Text>
            <Link href="/">
              <Text color="primary">{featureData.seeMore}</Text>
            </Link>
          </Box>
          <Image alt="Feature image" src={featureImage}></Image>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Feature;
