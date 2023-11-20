import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

type DropdownMenuPropsType = {
  title: string | undefined;
  dropdownMenus: string[] | undefined;
};

const DropdownMenu = ({ title, dropdownMenus }: DropdownMenuPropsType) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <div className="cursor-pointer md:text-secondary hover:text-[#122634] flex justify-between items-center">
        {title} <ChevronDownIcon />
      </div>
      {isHovered && (
        <ul className="md:absolute md:top-full w-full md:w-64 flex-col items-start space-y-5 px-10 py-5 lg:py-6 bg-secondary text-textColor">
          {dropdownMenus?.map((menu) => (
            <li
              key={menu}
              className="hover:font-semibold hover:text-[#122634] cursor-pointer"
            >
              {menu}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
