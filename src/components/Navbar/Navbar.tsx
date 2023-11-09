import {
  Box,
  Button,
  Container,
  Fade,
  Flex,
  Link,
  ListItem,
  SlideFade,
  Spacer,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useState } from "react";

// Now you can use NextLink in your code

const Navbar = () => {
  const [isHoveredFeatures, setIsHoveredFeatures] = useState(false);
  const [isHoveredSolutions, setIsHoveredSolutions] = useState(false);
  const [isHoveredSupport, setIsHoveredSupport] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      {/* For base and sm devices */}
      <Box
        as="nav"
        w="100%"
        pos={"fixed"}
        zIndex={2}
        display={["block", "block", "none", "none"]}
      >
        <Container
          maxW={"container.sm"}
          display={"flex"}
          justifyContent="space-between"
          p="20px"
          color="white"
        >
          <Text fontWeight={"bold"} fontSize={"20px"}>
            teachworks.
          </Text>
          <Box onClick={() => setIsMenuOpen(!isMenuOpen)} cursor={"pointer"}>
            <HamburgerIcon />
          </Box>
        </Container>
        {isMenuOpen && (
          <SlideFade in={isMenuOpen} offsetY="-50px">
            <VStack
              w="100%"
              bg="white"
              px="30px"
              py="20px"
              spacing={4}
              alignItems={"left"}
            >
              <Box
                onMouseEnter={() => setIsHoveredFeatures(true)}
                onMouseLeave={() => setIsHoveredFeatures(false)}
                position="relative"
                w="100%"
              >
                <Text
                  cursor="pointer"
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <p>Features</p> <ChevronDownIcon />
                </Text>
                {isHoveredFeatures && (
                  <VStack
                    zIndex="1"
                    width="100%"
                    alignItems="left"
                    spacing={4}
                    ps="20px"
                  >
                    <Text
                      as="a"
                      href="#"
                      _hover={{ fontWeight: "semibold", color: "122634" }}
                    >
                      Overview
                    </Text>
                    <Text
                      as="a"
                      href="#"
                      _hover={{ fontWeight: "semibold", color: "122634" }}
                    >
                      Calendar & Scheduling
                    </Text>
                    <Text
                      as="a"
                      href="#"
                      _hover={{ fontWeight: "semibold", color: "122634" }}
                    >
                      Communication
                    </Text>
                    <Text
                      as="a"
                      href="#"
                      _hover={{ fontWeight: "semibold", color: "122634" }}
                    >
                      Billing & Payroll
                    </Text>
                    <Text
                      as="a"
                      href="#"
                      _hover={{ fontWeight: "semibold", color: "122634" }}
                    >
                      Records & Analytics
                    </Text>
                    <Text
                      as="a"
                      href="#"
                      _hover={{ fontWeight: "semibold", color: "122634" }}
                    >
                      Customize & White Label
                    </Text>
                    <Text
                      as="a"
                      href="#"
                      _hover={{ fontWeight: "semibold", color: "122634" }}
                    >
                      Automation
                    </Text>
                    <Text
                      as="a"
                      href="#"
                      _hover={{ fontWeight: "semibold", color: "122634" }}
                    >
                      Multiple Branches
                    </Text>
                    <Text
                      as="a"
                      href="#"
                      _hover={{ fontWeight: "semibold", color: "122634" }}
                    >
                      Integrations & Add-Ons
                    </Text>
                    <Text
                      as="a"
                      href="#"
                      _hover={{ fontWeight: "semibold", color: "122634" }}
                    >
                      Website Plugins Demo
                    </Text>
                  </VStack>
                )}
              </Box>
              <Box
                onMouseEnter={() => setIsHoveredSolutions(true)}
                onMouseLeave={() => setIsHoveredSolutions(false)}
                position="relative"
                w="100%"
              >
                <Text
                  cursor="pointer"
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <p>Solutions</p> <ChevronDownIcon />
                </Text>
                {isHoveredSolutions && (
                  <VStack
                    zIndex="1"
                    width="100%"
                    alignItems="left"
                    spacing={4}
                    ps="20px"
                  >
                    <Text
                      as="a"
                      href="#"
                      _hover={{ fontWeight: "semibold", color: "122634" }}
                    >
                      Tutoring
                    </Text>
                    <Text
                      as="a"
                      href="#"
                      _hover={{ fontWeight: "semibold", color: "122634" }}
                    >
                      Language Schools
                    </Text>
                    <Text
                      as="a"
                      href="#"
                      _hover={{ fontWeight: "semibold", color: "122634" }}
                    >
                      Test Preparation
                    </Text>
                    <Text
                      as="a"
                      href="#"
                      _hover={{ fontWeight: "semibold", color: "122634" }}
                    >
                      Music Schools
                    </Text>
                    <Text
                      as="a"
                      href="#"
                      _hover={{ fontWeight: "semibold", color: "122634" }}
                    >
                      Driving Schools
                    </Text>
                  </VStack>
                )}
              </Box>
              <Link as={NextLink} href="#" _hover={{ textDecoration: "none" }}>
                Testimonials
              </Link>
              <Link as={NextLink} href="#" _hover={{ textDecoration: "none" }}>
                Pricing
              </Link>
              <Box
                onMouseEnter={() => setIsHoveredSupport(true)}
                onMouseLeave={() => setIsHoveredSupport(false)}
                position="relative"
                w="100%"
              >
                <Text
                  cursor="pointer"
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <p>Support</p> <ChevronDownIcon />
                </Text>
                {isHoveredSupport && (
                  <VStack
                    zIndex="1"
                    width="100%"
                    alignItems="left"
                    spacing={4}
                    ps="20px"
                  >
                    <Text
                      as="a"
                      href="#"
                      _hover={{ fontWeight: "semibold", color: "122634" }}
                    >
                      Tutorials
                    </Text>
                    <Text
                      as="a"
                      href="#"
                      _hover={{ fontWeight: "semibold", color: "122634" }}
                    >
                      Getting Started Guide
                    </Text>
                    <Text
                      as="a"
                      href="#"
                      _hover={{ fontWeight: "semibold", color: "122634" }}
                    >
                      Knowledge Base
                    </Text>
                    <Text
                      as="a"
                      href="#"
                      _hover={{ fontWeight: "semibold", color: "122634" }}
                    >
                      Contact Us
                    </Text>
                    <Text
                      as="a"
                      href="#"
                      _hover={{ fontWeight: "semibold", color: "122634" }}
                    >
                      FAQs
                    </Text>
                    <Text
                      as="a"
                      href="#"
                      _hover={{ fontWeight: "semibold", color: "122634" }}
                    >
                      Blog
                    </Text>
                  </VStack>
                )}
              </Box>
              <Link as={NextLink} href="#" _hover={{ textDecoration: "none" }}>
                Login
              </Link>
            </VStack>
          </SlideFade>
        )}
      </Box>
    </>
  );
};

export default Navbar;
