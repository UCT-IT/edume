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

const TutorTeacher = () => {
  return (
    <Container maxW="container.xl ">
      <Grid templateColumns="repeat(2, 1fr)" paddingY="50px">
        <GridItem>
          <Text
            fontWeight={"medium"}
            textTransform="capitalize"
            fontSize={"22px"}
            mt={"10px"}
          >
            Equip Your Tutors & Teachers
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
        <GridItem pos={"relative"}>
          <Image
            width={"400px"}
            margin="auto"
            alt="image"
            src="https://assets-global.website-files.com/601a133a769fa8f8d45d95ba/61a5409d9377f47c5ce18b62_teachers.svg"
          ></Image>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default TutorTeacher;
