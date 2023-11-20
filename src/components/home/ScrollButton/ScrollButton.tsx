"use client";
import React, { useEffect, useState } from "react";
import { SlArrowUp } from "react-icons/sl";

const ScrollButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <React.Fragment>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={`fixed top-auto bottom-[10%] left-auto right-[2%] bg-black text-secondary hover:text-black hover:bg-secondary rounded-full p-3 text-xl ${
          isScrolled ? "visible" : "invisible"
        }`}
      >
        <SlArrowUp />
      </button>
    </React.Fragment>
  );
};

export default ScrollButton;
