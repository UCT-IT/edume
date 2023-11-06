import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

// Now you can use NextLink in your code

const Navbar = () => {
  return (
    <>
      <Box as="nav" py="20px" pos={"fixed"} w="100%" zIndex={1}>
        <Container
          maxW="container.xl"
          display="flex"
          alignItems="center"
          justifyContent="between"
        >
          <Text color="white" fontWeight="semibold" fontSize="25px">
            teachworks.
          </Text>
          <Flex alignItems="center" gap="25px" ps="50px" pos="relative">
            <Text as="div" color="white" cursor="pointer">
              Features <ChevronDownIcon />
            </Text>
            <Box display={"none"}>
              <UnorderedList
                bg="white"
                listStyleType={"none"}
                display={"flex"}
                flexDirection={"column"}
                gap="20px"
                p="20px"
                pos="absolute"
                top="40px"
                left="0"
              >
                <ListItem as="a" href="#">
                  overview
                </ListItem>
                <ListItem as="a" href="#">
                  Calendar & Scheduling
                </ListItem>
                <ListItem as="a" href="#">
                  Communication
                </ListItem>
                <ListItem as="a" href="#">
                  Billing & Payroll
                </ListItem>
                <ListItem as="a" href="#">
                  Records & Analytics
                </ListItem>
                <ListItem as="a" href="#">
                  Customize & White Label
                </ListItem>
                <ListItem as="a" href="#">
                  Automation
                </ListItem>
                <ListItem as="a" href="#">
                  Multiple Branches
                </ListItem>
                <ListItem as="a" href="#">
                  Integrations & Add-Ons
                </ListItem>
                <ListItem as="a" href="#">
                  Website Plugins Demo
                </ListItem>
              </UnorderedList>
            </Box>

            <Link color="white" href="#" _hover={{ textDecoration: "none" }}>
              Solution <ChevronDownIcon />
            </Link>
            <UnorderedList display="none">
              <ListItem as="a">Tutoring</ListItem>
              <ListItem as="a">Language Schools</ListItem>
              <ListItem as="a">Test Preparation</ListItem>
              <ListItem as="a">Music Schools</ListItem>
              <ListItem as="a">Driving Schools</ListItem>
            </UnorderedList>
            <Link
              as={NextLink}
              color="white"
              href="#"
              _hover={{ textDecoration: "none" }}
            >
              Testimonials
            </Link>
            <Link
              as={NextLink}
              color="white"
              href="#"
              _hover={{ textDecoration: "none" }}
            >
              Pricing
            </Link>
            <Link color="white" href="#" _hover={{ textDecoration: "none" }}>
              Support <ChevronDownIcon />
            </Link>
            <UnorderedList display="none">
              <ListItem as="a">Tutorials</ListItem>
              <ListItem as="a">Getting Started Guide</ListItem>
              <ListItem as="a">Knowledge Base</ListItem>
              <ListItem as="a">Contact Us</ListItem>
              <ListItem as="a">FAQs</ListItem>
              <ListItem as="a">Blog</ListItem>
            </UnorderedList>
            <Link
              as={NextLink}
              color="white"
              href="#"
              _hover={{ textDecoration: "none" }}
            >
              Login
            </Link>
          </Flex>
          <Spacer></Spacer>
          <Button
            as="a"
            bg="#122634"
            _hover={{ bg: "#193447" }}
            color="white"
            px="20px"
            py="25px"
            borderRadius="3px"
            fontWeight="normal"
          >
            Try It for Free
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
