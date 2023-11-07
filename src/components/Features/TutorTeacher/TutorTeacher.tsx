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
import { tutorTeacher } from "@/assets/Data/Data";

const TutorTeacher = () => {
  return (
    <Container maxW="container.xl ">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        paddingY="50px"
      >
        <GridItem order={[2, 1, 1]}>
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
            {tutorTeacher.map((item: { list: string }, index) => (
              <ListItem key={index} mb={"10px"}>
                <ListIcon as={CheckIcon} color="black" />
                {item.list}
              </ListItem>
            ))}
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
        <GridItem pos={"relative"} order={[1, 2, 2]}>
          <Image
            width={{ base: "100%", sm: "75%", lg: "400px" }}
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
