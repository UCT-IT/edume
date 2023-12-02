import React from "react";
import { strings } from "@/assets/locales/locales";
import featureImage from "@/assets/images/feature.svg";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import Link from "next/link";
import CommonButton from "@/components/common/button/CommonButton";
const Feature = () => {
  const featureData = {
    title: strings.features.title,
    subTitle: strings.features.subTitle,
    featureTitle: strings.features.feature.title,
    featureContent: strings.features.feature.content,
    featureLink: strings.features.feature.link,
    featureBtn: strings.features.feature.btn,
    badge: strings.features.feature.badge,
    text: strings.features.text,
    link: strings.features.link,
    seeMore: strings.features.seeMore,
    desc: strings.features.desc,
    listLink: strings.features.feature.link,
    btn: strings.features.feature.btn,
  };
  return (
    <div className="container px-[20px] py-16 md:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="order-last md:order-first">
        <h3 className="text-tertiary font-bold mb-4 ">{featureData.title}</h3>
        <h1 className="text-4xl font-medium mb-4">{featureData.subTitle}</h1>
        <div>
          <h2 className="mb-4 font-medium text-2xl">
            {featureData.featureTitle}
          </h2>
          <ul>
            {featureData.featureContent.map((data) => (
              <li
                className="text-textColor mb-3 flex text-[18px] font-normal gap-3"
                key={data}
              >
                <span className="font-bold text-black text-[24px]">
                  <IoMdCheckmark />
                </span>
                {data}
              </li>
            ))}
            <li className="text-primary mb-3 flex text-[16px] font-normal gap-3 ">
              <span className="font-bold text-black text-[24px]">
                <IoMdCheckmark />
              </span>
              <Link className="hover:text-black transition-all" href="/">
                {featureData.listLink}
              </Link>
            </li>
          </ul>
          <CommonButton
            href="/"
            text={featureData.btn}
            hover="bg-[#5AA8EC]"
            color="bg-primary"
          />
        </div>
      </div>
      <div className="p-7 relative">
        <div
          style={{ clipPath: "polygon(0 17%, 100% 0, 100% 100%, 0% 100%)" }}
          className="p-8 md:p-14 mb-14 bg-[#FDF7DA] text-center relative"
        >
          <h2 className="text-black font-medium">Teachworks API</h2>
          <p className="text-[14px] my-4 text-textColor">{featureData.desc}</p>
          <Link className="text-primary hover:text-black text-[15px]" href="/">
            {featureData.link}
          </Link>
        </div>
        <div className="w-1/2 text-center left-[25%] m-auto bg-[#F4D12F] text-secondary text-xl md:text-2xl font-bold p-3 rounded-lg absolute top-0 z-30">
          {featureData.badge}
        </div>
        <Image
          className="w-full md:w-full lg:w-3/4"
          alt="Feature image"
          src={featureImage}
        />
      </div>
    </div>
  );
};

export default Feature;
