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
  Image,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import React from "react";
import Link from "next/link";
import { strings } from "@/assets/locales/locales";
import communitionImage from "@/assets/images/communication.svg";

const Communication = () => {
  const data: string[] = strings.communication?.slice() || [];
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
          <Image
            width="400px"
            margin="auto"
            alt="Communication Image"
            src={communitionImage}
          ></Image>
        </GridItem>
        <GridItem>
          <Text
            fontWeight="medium"
            textTransform="capitalize"
            fontSize="22px"
            mt="10px"
          >
            More Communication Features
          </Text>
          <List
            spacing={6}
            color="textColor"
            fontSize="18px"
            mt={"18px"}
            fontWeight="normal"
          >
            {data.map((item: string, index: number) => (
              <ListItem key={index} mb="10px">
                <ListIcon as={CheckIcon} color="black" />
                {item}
              </ListItem>
            ))}
            <ListItem color="primary">
              <ListIcon as={CheckIcon} color="black" />
              <Link href="/">
                <span>More Scheduling Feature.</span>
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
            Start your free trial
          </Button>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Communication;
