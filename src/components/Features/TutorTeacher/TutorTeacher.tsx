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
import tutorImage from "@/assets/images/tutor.svg";
import Image from "next/image";

const TutorTeacher = () => {
  const tutorData = {
    tutorTitle: strings?.features?.tutor?.title,
    tutorContent: strings?.features?.tutor?.content,
    tutorLink: strings?.features?.tutor?.link,
    tutorBtn: strings?.features?.tutor?.btn,
  };
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
        <GridItem order={[2, 2, 1]}>
          <Text
            fontWeight="medium"
            textTransform="capitalize"
            fontSize="22px"
            mt="10px"
          >
            {tutorData.tutorTitle}
          </Text>
          <List
            spacing={6}
            color="textColor"
            fontSize="18px"
            mt="18px"
            fontWeight="normal"
          >
            {tutorData?.tutorContent?.map((item: string, index: number) => (
              <ListItem key={index} mb="10px" display="flex" gap="16px">
                <ListIcon as={CheckIcon} color="black" mt="5px" />
                {item}
              </ListItem>
            ))}
            <ListItem color="primary" display="flex" gap="16px">
              <ListIcon as={CheckIcon} color="black" mt="5px" />
              <Link as={NextLink} href="/">
                <span>{tutorData.tutorLink}</span>
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
            {tutorData.tutorBtn}
          </Button>
        </GridItem>
        <GridItem pos="relative" order={[1, 1, 2]}>
          <Image alt="Tutor image" src={tutorImage}></Image>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default TutorTeacher;
