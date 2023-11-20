import { GridItem, Text } from "@chakra-ui/react";
import React from "react";

const FooterGridItem = ({ column }: { column: any }) => {
  return (
    <React.Fragment>
      <GridItem>
        <Text fontWeight="semibold" mb="10px">
          {column.footerTitle}
        </Text>

        {column.footerLinks.map((link: string) => (
          <Text
            cursor="pointer"
            mb="10px"
            key={link}
            textColor="footerLinksColor"
            _hover={{ textColor: "secondary" }}
          >
            {link}
          </Text>
        ))}
      </GridItem>
    </React.Fragment>
  );
};

export default FooterGridItem;
