"use client";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { strings } from "@/assets/locales/locales";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const dropdownFeatures = {
    title: strings.dropdownFeatures.title,
    dropdownMenus: strings.dropdownFeatures.dropdownMenus,
  };
  const dropdownSolution = {
    title: strings.dropdownSolution.title,
    dropdownMenus: strings.dropdownSolution.dropdownMenus,
  };

  const dropdownSupport = {
    title: strings.dropdownSupport.title,
    dropdownMenus: strings.dropdownSupport.dropdownMenus,
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 20);
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
      <nav
        className={`py-5 fixed w-full z-[999] hidden md:block ${
          isScrolled ? "bg-tertiary" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-2 flex items-center justify-between gap-4 lg:gap-10 text-base">
          <h1 className="text-secondary font-semibold text-2xl md:text-lg lg:text-2xl">
            {strings.nav.logo}
          </h1>
          <div className="flex items-center gap-2 lg:gap-8 flex-grow text-sm lg:text-base">
            <DropdownMenu {...dropdownFeatures} />
            <DropdownMenu {...dropdownSolution} />
            <Link
              href="#"
              className="text-secondary hover:no-underline hover:text-[#122634] font-light"
            >
              {strings.nav.testimonial}
            </Link>
            <Link
              href="#"
              className="text-secondary hover:no-underline hover:text-[#122634] font-light"
            >
              {strings.nav.pricing}
            </Link>
            <DropdownMenu {...dropdownSupport} />
            <Link
              href="#"
              className="text-secondary hover:no-underline hover:text-[#122634] font-light"
            >
              {strings.nav.login}
            </Link>
          </div>
          <button className="bg-[#122634] hover:bg-[#193447] text-secondary px-10 py-4 rounded">
            {strings.nav.btn}
          </button>
        </div>
      </nav>

      {/* For base and sm devices */}
      <nav
        className={`w-full fixed block md:hidden z-[1000] ${
          isScrolled ? "bg-tertiary" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between p-5 text-secondary">
          <h1 className="font-bold text-xl">teachworks.</h1>
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer"
          >
            {isMenuOpen ? <HiOutlineX /> : <HiMenu />}
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0, scaleY: 0.5 }}
            animate={{ y: 0, opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className={`w-full bg-secondary px-[30px] py-5 flex-col space-y-4 items-center justify-center`}
          >
            <DropdownMenu {...dropdownFeatures} />
            <DropdownMenu {...dropdownSolution} />
            <div>
              <Link href="#" className="hover:no-underline font-light">
                {strings.nav.testimonial}
              </Link>
            </div>
            <div>
              <Link href="#" className="hover:no-underline font-light">
                {strings.nav.pricing}
              </Link>
            </div>
            <DropdownMenu {...dropdownSupport} />
            <div>
              <Link href="#" className="hover:no-underline font-light">
                {strings.nav.login}
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
