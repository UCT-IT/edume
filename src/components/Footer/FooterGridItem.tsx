import { GridItem, Text } from "@chakra-ui/react";
import React from "react";

const FooterGridItem = ({ column }: { column: any }) => {
  return (
    <>
      <GridItem>
        <Text fontWeight="semibold" mb="10px">
          {column.footerTitle}
        </Text>

        {column.footerLinks.map((link: string) => (
          <Text
            key={link}
            textColor="footerLinksColor"
            _hover={{ textColor: "secondary" }}
          >
            {link}
          </Text>
        ))}
      </GridItem>
    </>
  );
};

export default FooterGridItem;
