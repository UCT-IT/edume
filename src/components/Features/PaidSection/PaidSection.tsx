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
import { strings } from "@/assets/locales/locales";
import paidImage from "@/assets/images/paid.svg";
import Image from "next/image";

const PaidSection = () => {
  const getPaidData = {
    getPaidTitle: strings?.features?.getPaid?.title,
    getPaidContent: strings?.features?.getPaid?.content,
    getPaidLink: strings?.features?.getPaid?.link,
    getPaidBtn: strings?.features?.getPaid?.btn,
  };
  return (
    <Container maxW="container.xl" px={["20px", "", ""]}>
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
          <Image alt="Paid image" src={paidImage}></Image>
        </GridItem>
        <GridItem>
          <Text
            fontWeight="medium"
            textTransform="capitalize"
            fontSize="22px"
            mt="10px"
          >
            {getPaidData.getPaidTitle}
          </Text>
          <List
            spacing={6}
            color="textColor"
            fontSize="18px"
            mt="18px"
            fontWeight="normal"
          >
            {getPaidData?.getPaidContent?.map((item: string, index: number) => (
              <ListItem key={index} mb="10px" display="flex" gap="16px">
                <ListIcon as={CheckIcon} color="black" mt="5px" />
                {item}
              </ListItem>
            ))}
            <ListItem color="primary">
              <ListIcon as={CheckIcon} color="black" />
              <Link href="/">
                <span>{getPaidData.getPaidLink}</span>
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
            {getPaidData.getPaidBtn}
          </Button>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default PaidSection;
