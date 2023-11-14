import { Container, Link, Text } from "@chakra-ui/react";
import React from "react";
import bgImg from "@/assets/images/businessWork.svg";

const GrowBusiness = () => {
  return (
    <Container
      bgImage={`url("https://assets-global.website-files.com/601a133a769fa8f8d45d95ba/61854dd04e61c933221fc418_map.svg")`}
      //   bgImage={`url(${bgImg})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      maxW="container.xl "
      py="100px"
      px={["20px", "", ""]}
      textAlign="center"
    >
      <Text
        textColor="tertiary"
        fontWeight="bold"
        size="md"
        letterSpacing="3px"
        mb="20px"
      >
        GROW WITH US
      </Text>
      <Text mb="30px" fontSize="35px" fontWeight="medium">
        Built to Grow With Your Business
      </Text>
      <Text mb="30px" lineHeight="30px" textColor="textColor" fontSize="18px">
        Whether you have 10 students or 10,000, Teachworks is loaded with
        features to make managing large quantities of students, tutors/teachers
        and lessons faster & more efficient. If you have plans to expand to
        multiple locations or build a franchise system, Teachworks provides the
        tools to help you manage and monitor multiple locations from a single
        master account.
      </Text>
      <Link textColor="blue.400">Manage Multiple Branches</Link>
    </Container>
  );
};

export default GrowBusiness;
