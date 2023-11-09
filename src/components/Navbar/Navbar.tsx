import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  SlideFade,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

// Now you can use NextLink in your code

const Navbar = () => {
  const dropdownFeatures = {
    title: "Features",
    dropdownMenus: [
      "Overview",
      "Calendar & Scheduling",
      "Communication",
      "Billing & Payroll",
      "Records & Analytics",
      "Customize & secondary Label",
      "Automation",
      "Multiple Branches",
      "Integrations & Add-Ons",
      "Website Plugins Demo",
    ],
  };
  const dropdownSolution = {
    title: "Solution",
    dropdownMenus: [
      "Tutoring",
      "Language Schools",
      "Test Preparation",
      "Music Schools",
      "Driving Schools",
    ],
  };
  const dropdownSupport = {
    title: "Support",
    dropdownMenus: [
      "Tutorials",
      "Getting Started Guide",
      "Knowledge Base",
      "Contact Us",
      "FAQs",
      "Blog",
    ],
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* For Md and Lg devices */}
      <Box
        as="nav"
        py="20px"
        pos="fixed"
        w="100%"
        zIndex={2}
        display={{ base: "none", sm: "block" }}
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
            as="a"
            bg="#122634"
            _hover={{ bg: "#193447" }}
            color="secondary"
            px={["null", "10px", "15px", "20px"]}
            py={["null", "10px", "20px", "25px"]}
            borderRadius="3px"
            fontWeight="normal"
            fontSize={["null", "12px", "14px", "16px"]}
          >
            Try It for Free
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
                Testimonials
              </Link>
              <Link as={NextLink} href="#" _hover={{ textDecoration: "none" }}>
                Pricing
              </Link>
              <DropdownMenu {...dropdownSupport} />
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
