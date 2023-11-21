import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";
import Link from "next/link";

type DropdownMenuPropsType = {
  title: string;
  dropdownMenus: { menuName: string; menuLink: string }[];
};

const DropdownMenu = ({ title, dropdownMenus }: DropdownMenuPropsType) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <div className="cursor-pointer font-light md:text-secondary md:text-sm lg:text-base hover:text-[#122634] flex justify-between items-center lg:gap-1">
        <span>{title}</span> <IoIosArrowDown />
      </div>
      {isHovered && (
        <ul className="md:absolute md:top-full w-full md:w-64 flex-col items-start space-y-5 px-10 py-5 lg:py-6 bg-secondary text-textColor">
          {dropdownMenus.map((menu) => (
            <li
              key={menu.menuName}
              className="hover:font-semibold hover:text-[#122634] cursor-pointer text-sm"
            >
              <Link href={menu.menuLink}>{menu.menuName}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
