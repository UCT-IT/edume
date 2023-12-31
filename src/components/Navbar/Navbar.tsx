import {
  Box,
  Button,
  Container,
  Flex,
  SlideFade,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { strings } from "@/assets/locales/locales";
import { Link } from "@chakra-ui/next-js";

// Now you can use NextLink in your code

const Navbar = () => {
  const dropdownFeatures = {
    title: strings?.dropdownFeatures?.title,
    dropdownMenus: strings?.dropdownFeatures?.dropdownMenus,
  };
  const dropdownSolution = {
    title: strings?.dropdownSolution?.title,
    dropdownMenus: strings?.dropdownSolution?.dropdownMenus,
  };

  const dropdownSupport = {
    title: strings?.dropdownSupport?.title,
    dropdownMenus: strings?.dropdownSupport?.dropdownMenus,
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      {/* For Md and Lg devices */}
      <Box
        as="nav"
        py="20px"
        pos="fixed"
        w="100%"
        zIndex={10}
        display={{ base: "none", sm: "block" }}
        bgColor={isScrolled ? "tertiary" : "transparent"}
      >
        <Container
          maxW="container.xl"
          display="flex"
          alignItems="center"
          justifyContent="between"
        >
          <Text
            color="secondary"
            fontWeight="semibold"
            fontSize={["25px", "15px", "25px"]}
          >
            teachworks.
          </Text>
          <Flex
            alignItems="center"
            gap={["null", "10px", "15px", "25px"]}
            ps={["null", "15px", "25px", "50px"]}
          >
            <DropdownMenu {...dropdownFeatures} />
            <DropdownMenu {...dropdownSolution} />
            <Link
              as={NextLink}
              color="secondary"
              href="#"
              fontSize={["null", "12px", "14px", "16px"]}
              _hover={{ textDecoration: "none" }}
            >
              Testimonials
            </Link>
            <Link
              as={NextLink}
              color="secondary"
              href="#"
              fontSize={["null", "12px", "14px", "16px"]}
              _hover={{ textDecoration: "none" }}
            >
              Pricing
            </Link>
            <DropdownMenu {...dropdownSupport} />
            <Link
              as={NextLink}
              color="secondary"
              href="#"
              fontSize={["null", "12px", "14px", "16px"]}
              _hover={{ textDecoration: "none" }}
            >
              Login
            </Link>
          </Flex>

          <Spacer></Spacer>
          <Button
            bg="#122634"
            _hover={{ bg: "#193447" }}
            color="secondary"
            px={["null", "10px", "15px", "20px"]}
            py={["null", "10px", "20px", "25px"]}
            borderRadius="3px"
            fontWeight="normal"
            fontSize={["null", "12px", "14px", "16px"]}
          >
            {strings?.nav?.btn}
          </Button>
        </Container>
      </Box>

      {/* For base and sm devices */}
      <Box
        as="nav"
        w="100%"
        pos="fixed"
        zIndex={2}
        display={{ base: "block", sm: "none" }}
        bgColor={isScrolled ? "tertiary" : "transparent"}
      >
        <Container
          maxW="container.sm"
          display="flex"
          justifyContent="space-between"
          p="20px"
          color="secondary"
        >
          <Text fontWeight="bold" fontSize="20px">
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
              bg="secondary"
              px="30px"
              py="20px"
              spacing={4}
              alignItems={"left"}
            >
              <DropdownMenu {...dropdownFeatures} />
              <DropdownMenu {...dropdownSolution} />
              <Link as={NextLink} href="#" _hover={{ textDecoration: "none" }}>
                {strings?.nav?.testimonial}
              </Link>
              <Link as={NextLink} href="#" _hover={{ textDecoration: "none" }}>
                {strings?.nav?.pricing}
              </Link>
              <DropdownMenu {...dropdownSupport} />
              <Link as={NextLink} href="#" _hover={{ textDecoration: "none" }}>
                {strings?.nav?.login}
              </Link>
            </VStack>
          </SlideFade>
        )}
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
