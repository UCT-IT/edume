import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const DropdownMenu = ({
  title,
  dropdownMenus,
}: {
  title: string | undefined;
  dropdownMenus: string[] | undefined;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      position="relative"
      fontSize={["16px", "12px", "14px", "16px"]}
    >
      <Text
        cursor="pointer"
        color={{ base: "null", sm: `${isHovered ? "#122634" : "secondary"}` }}
        display={{ base: "flex", sm: "block" }}
        justifyContent={{ base: "space-between" }}
        alignItems={["center", "null"]}
      >
        {title} <ChevronDownIcon />
      </Text>
      {isHovered && (
        <VStack
          position={{ base: "static", sm: "absolute" }}
          top={{ base: "null", sm: "100%" }}
          left={{ base: "null", sm: "0" }}
          zIndex="1"
          width={["100%", "max-content", "max-content", "250px"]}
          alignItems="left"
          spacing={[4, 2, 2, 4]}
          px={["20px", "10px", "20px", "30px"]}
          py={["null", "10px", "15px", "20px"]}
          backgroundColor="secondary"
        >
          {dropdownMenus?.map((menu, i) => (
            <Text
              key={i}
              as="a"
              href="#"
              _hover={{ fontWeight: "semibold", color: "122634" }}
            >
              {menu}
            </Text>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default DropdownMenu;
