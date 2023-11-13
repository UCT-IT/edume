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
import { strings } from "@/assets/locales/locales";
import clientImage from "@/assets/images/clients.svg";
import Image from "next/image";
import { Link } from "@chakra-ui/next-js";
import NextLink from "next/link";

const Clients = () => {
  const clientData = {
    clientTitle: strings?.features?.client?.title,
    clientContent: strings?.features?.client?.content,
    clientLink: strings?.features?.client?.link,
    clientBtn: strings?.features?.client?.btn,
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
            mt={"10px"}
          >
            {clientData.clientTitle}
          </Text>
          <List
            spacing={6}
            color="textColor"
            fontSize="18px"
            mt="18px"
            fontWeight="normal"
          >
            {clientData?.clientContent?.map((item: string, index: number) => (
              <ListItem key={index} mb="10px" display="flex" gap="16px">
                <ListIcon as={CheckIcon} color="black" mt="5px" />
                {item}
              </ListItem>
            ))}
            <ListItem color="primary" display="flex" gap="16px">
              <ListIcon as={CheckIcon} color="black" mt="5px" />
              <Link as={NextLink} href="/">
                <span>{clientData.clientLink}</span>
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
            {clientData.clientBtn}
          </Button>
        </GridItem>
        <GridItem pos="relative" order={[1, 1, 2]}>
          <Image alt="client image" src={clientImage}></Image>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Clients;
