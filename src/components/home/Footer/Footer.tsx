import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Icon } from "@chakra-ui/react";
import { ImFacebook } from "react-icons/im";
import { strings } from "@/assets/locales/locales";
import FooterGridItem from "./FooterGridItem";
import { motion } from "framer-motion";
const Footer = () => {
  const MotionText = motion(Text);
  const footerData = strings.footer;
  const footerColumns = footerData?.footerColumns;

  return (
    <Box bgColor="primary" clipPath="polygon(0 5%, 100% 0, 100% 100%, 0 100%)">
      <Container
        maxW="container.xl"
        textColor="secondary"
        pt="80px"
        pos="relative"
      >
        <Box w={{ base: "95%", md: "75%" }} mx="auto">
          <MotionText
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            fontSize="35px"
            textAlign="center"
            whiteSpace="pre-wrap"
          >
            {/* Simplify management, save time, and grow your
            <br /> business. */}
            {footerData?.footerHeader}
          </MotionText>

          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Button
              bg="tertiary"
              _hover={{ bg: "#97CE2C" }}
              color="secondary"
              px="40px"
              py="25px"
              my="20px"
              borderRadius="3px"
              fontWeight="normal"
              mr="20px"
            >
              {/* Start Your Free Trial */}
              {footerData?.footerBtn1}
            </Button>
            <Button
              bg="#2574a3"
              _hover={{ bg: "#4C7DB6" }}
              color="secondary"
              px="40px"
              py="25px"
              my="20px"
              borderRadius="3px"
              fontWeight="normal"
            >
              {/* Take a Quick Tour */}
              {footerData?.footerBtn2}
            </Button>
          </Flex>
        </Box>
        <Divider orientation="horizontal" my="20px"></Divider>
        <Grid
          templateColumns={{ base: "null", md: "repeat(5,1fr)" }}
          rowGap={{ base: "10px", md: "null" }}
        >
          {footerColumns?.map((column, index) => (
            <FooterGridItem key={index} column={column} />
          ))}
        </Grid>
        <Flex
          justifyContent="space-between"
          py="30px"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Text>
            {/* © Teachworks 2021 */}
            {footerData?.footerCopyRight}
          </Text>
          <Box mr="200px">
            <Button
              as="a"
              href="https://www.facebook.com/uttaracomputertraininganditfirm"
              target="_blank"
              rounded="50%"
              color="secondary"
              bg="transparent"
              _hover={{ bg: "secondary", color: "black" }}
            >
              <Icon as={ImFacebook} />
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
export default Footer;
