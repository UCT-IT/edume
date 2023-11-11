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
import businessImage from "@/assets/images/business.svg";
import Image from "next/image";

const Business = () => {
  const businessData = {
    businessTitle: strings?.features?.business?.title,
    businessContent: strings?.features?.business?.content,
    businessLink: strings?.features?.business?.link,
    businessBtn: strings?.features?.business?.btn,
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
          <Image alt="business image" src={businessImage}></Image>
        </GridItem>
        <GridItem>
          <Text
            fontWeight="medium"
            textTransform="capitalize"
            fontSize="22px"
            mt="10px"
          >
            {businessData.businessTitle}
          </Text>
          <List
            spacing={6}
            color="textColor"
            fontSize="18px"
            mt="18px"
            fontWeight="normal"
          >
            {businessData?.businessContent?.map(
              (item: string, index: number) => (
                <ListItem key={index} mb="10px" display="flex" gap="16px">
                  <ListIcon as={CheckIcon} color="black" mt="5px" />
                  {item}
                </ListItem>
              )
            )}
            <ListItem color="primary" display="flex" gap="16px">
              <ListIcon as={CheckIcon} color="black" mt="5px" />
              <Link href="/">
                <span>{businessData.businessLink}</span>
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
            {businessData.businessBtn}
          </Button>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Business;
