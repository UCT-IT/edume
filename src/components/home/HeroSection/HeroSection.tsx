"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { strings } from "@/assets/locales/locales";
import HeroBackground from "../../common/HeroBackground/HeroBackground";
import heroSectionImage from "../../../../public/home/heroSectionImage.svg";
import CommonButton from "@/components/common/button/CommonButton";

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const data = {
    title: strings.heroSection.title,
    animatedText: strings.heroSection.animatedText,
    description: strings.heroSection.description,
    btn: strings.heroSection.btn,
    tour: strings.heroSection.tour,
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) =>
          prevIndex === (data.animatedText.length ?? 0) - 1 ? 0 : prevIndex + 1
        );
        setFadeOut(false);
      }, 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, [data.animatedText]);

  return (
    <React.Fragment>
      <HeroBackground>
        <div className="container mx-auto pt-32 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center md:gap-5 h-full relative md:pl-5 lg:pl-10">
            <div className="text-secondary text-center md:text-left">
              <h2 className="text-[27px] md:text-[30px] lg:text-[54px] font-bold whitespace-pre-line">
                {data.title}
              </h2>
              <h2
                className={`transition-opacity duration-1000 ${
                  fadeOut ? "opacity-0" : "opacity-1"
                } text-[24px] md:text-[45px] text-black py-2 font-kalam italic`}
              >
                {data.animatedText[currentTextIndex]}
              </h2>
              <p className="leading-8 py-5 whitespace-pre-line font-light">
                {data.description}
              </p>
              <CommonButton
                text={data.btn}
                href="#"
                hover="bg-[#97CE2C]"
                color="bg-tertiary"
              />
              <p className="font-light">{data.tour}</p>
            </div>
            <div className="w-full">
              <Image
                src={heroSectionImage}
                priority
                alt="Hero Section Banner Image"
                className="w-full h-full lg:w-3/4 lg:absolute right-0 lg:-bottom-12"
              />
            </div>
          </div>
        </div>
      </HeroBackground>
    </React.Fragment>
  );
};

export default HeroSection;
