import React from "react";

const FooterGridItem = ({ column }: { column: any }) => {
  return (
    <React.Fragment>
      <div>
        <h2 className="font-semibold mb-3">{column.footerTitle}</h2>

        {column.footerLinks.map((link: string) => (
          <p
            // cursor="pointer"
            // mb="10px"
            // key={link}
            // textColor="footerLinksColor"
            // _hover={{ textColor: "secondary" }}
            className="cursor-pointer mb-3 text-footerLinksColor hover:text-secondary font-extralight"
            key={link}
          >
            {link}
          </p>
        ))}
      </div>
    </React.Fragment>
  );
};

export default FooterGridItem;
