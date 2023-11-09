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
import tutorImage from "@/assets/images/tutor.svg";

const TutorTeacher = () => {
  const data: string[] = strings.tutor?.slice() || [];
  return (
    <Container maxW="container.xl " px={["20px", "", ""]}>
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
            fontWeight="medium"
            textTransform="capitalize"
            fontSize="22px"
            mt="10px"
          >
            Equip Your Tutors & Teachers
          </Text>
          <List
            spacing={6}
            color="textColor"
            fontSize="18px"
            mt="18px"
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
                <span>Explore More Features.</span>
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
        <GridItem pos="relative" order={[1, 2, 2]}>
          <Image
            width={{ base: "100%", sm: "75%", lg: "400px" }}
            margin="auto"
            alt="Tutor image"
            src={tutorImage}
          ></Image>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default TutorTeacher;
