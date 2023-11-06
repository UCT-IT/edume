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

const PaidSection = () => {
  return (
    <Container maxW="container.xl ">
      <Grid  placeItems={"center"} templateColumns="repeat(2, 1fr)" gap={6} paddingY="50px">
        <GridItem pos={"relative"}>
          <Image
            width={"400px"}
            margin="auto"
            alt="image"
            src="https://assets-global.website-files.com/601a133a769fa8f8d45d95ba/61a5250a62d6f17bc8a9fd59_pay-online.svg"
          ></Image>
        </GridItem>
        <GridItem>
          <Text fontWeight={"medium"} textTransform="capitalize" fontSize={"22px"} mt={"10px"}>
            get paid faster
          </Text>
          <List
            spacing={6}
            color={"#555"}
            fontSize={"18px"}
            mt={"18px"}
            fontWeight={"normal"}
          >
            <ListItem mb={"10px"}>
              <ListIcon as={CheckIcon} color="black" />
              Allow your tutors & teachers to manage their own schedules and
              complete lessons with eas.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="black" />
              Allow your tutors & teachers to manage their own schedules and
              complete lessons with eas
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="black" />
              Allow your tutors & teachers to manage their own schedules and
              complete lessons with eas
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="black" />
              Allow your tutors & teachers to manage their own schedules and
              complete lessons with eas
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="black" />
              <Link href={"/"}>
                <span style={{ color: "#3898ec" }}>
                  More Scheduling Feature.
                </span>
              </Link>
            </ListItem>
          </List>
          <Button
            bg="primary"
            color="#ffffff"
            p={7}
            textTransform={"capitalize"}
            _hover={{ bg: "#5AA8EC" }}
            mt={6}
          >
            Start your free trial
          </Button>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default PaidSection;
