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
import "./Feature.css";
import { strings } from "@/assets/locales/locales";
import featureImage from "@/assets/images/feature.svg";

const Feature = () => {
  const data: string[] = strings.feature?.slice() || [];
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
        <GridItem order={[2, 1, 1]}>
          <Text
            fontWeight="bold"
            mb="17px"
            color="tertiary"
            textTransform="uppercase"
          >
            Our features
          </Text>
          <Heading>How Teachworks can Help Your Teaching Business</Heading>
          <Text fontWeight="medium" fontSize="22px" mt="10px">
            Simplifying Scheduling
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
            mt={4}
          >
            Start your free trial
          </Button>
        </GridItem>
        <GridItem pos="relative" order={[1, 2, 2]}>
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
            Hightlighted Feature
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
            <Text fontWeight="bold" mb="10px" fontSize="20px">
              2-Factor Authentication Add-on
            </Text>
            <Text color="textColor" mb="10px">
              Strengthened Security: The
              <span>
                <Link href="/">
                  <Text color="primary">
                    2-Factor Authentication Add-on Features
                  </Text>
                </Link>
              </span>
              Add-on helps to keep your data and information more secure by
              adding an extra layer of security to your Teachworks account.
            </Text>
            <Link href="/">
              <Text color="primary">See More New Features</Text>
            </Link>
          </Box>
          <Image
            width={{ base: "100%", sm: "75%", lg: "400px" }}
            margin="auto"
            alt="Feature image"
            src={featureImage}
          ></Image>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Feature;
