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
import { Link } from "@chakra-ui/next-js";
import NextLink from "next/link";
import { strings } from "@/assets/locales/locales";
import communitionImage from "@/assets/images/communication.svg";
import Image from "next/image";

const Communication = () => {
  const communicationData = {
    communicationTitle: strings?.features?.communication?.title,
    communicationContent: strings?.features?.communication?.content,
    communicationLink: strings?.features?.communication?.link,
    communicationBtn: strings?.features?.communication?.btn,
  };
  return (
    <Container maxW="container.xl " px={["20px", "", ""]}>
      <Grid
        placeItems="center"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={6}
        paddingY="50px"
      >
        <GridItem pos="relative">
          <Image alt="Communication Image" src={communitionImage}></Image>
        </GridItem>
        <GridItem>
          <Text
            fontWeight="medium"
            textTransform="capitalize"
            fontSize="22px"
            mt="10px"
          >
            {communicationData.communicationTitle}
          </Text>
          <List
            spacing={6}
            color="textColor"
            fontSize="18px"
            mt={"18px"}
            fontWeight="normal"
          >
            {communicationData?.communicationContent?.map(
              (item: string, index: number) => (
                <ListItem key={index} mb="10px" display="flex" gap="16px">
                  <ListIcon as={CheckIcon} color="black" mt="5px" />
                  {item}
                </ListItem>
              )
            )}
            <ListItem color="primary" display="flex" gap="16px">
              <ListIcon as={CheckIcon} color="black" mt="5px" />
              <Link as={NextLink} href="/">
                <span>{communicationData.communicationLink}</span>
              </Link>
            </ListItem>
          </List>
          <Button
            bg="primary"
            color="secondary"
            p={7}
            textTransform="capitalize"
            _hover={{ bg: "buttonHoverd" }}
            mt={6}
          >
            {communicationData.communicationBtn}
          </Button>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Communication;
