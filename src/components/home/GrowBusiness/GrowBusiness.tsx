import React from "react";
// import bgImg from "/home/businessWork.svg";
import { strings } from "@/assets/locales/locales";
import Link from "next/link";

const GrowBusiness = () => {
  const data = {
    title: strings.businessWork.title,
    subTitle: strings.businessWork.subTitle,
    description: strings.businessWork.description,
    link: strings.businessWork.link,
  };
  return (
    <React.Fragment>
      <div className="bg-[url('/home/businessWork.svg')] bg-clip-border bg-contain bg-no-repeat container mx-auto px-[20px] pb-16 md:px-0 bg-center text-center">
        <h2 className="text-tertiary font-bold tracking-wide mb-5 ">
          {data.title}
        </h2>
        <h2 className="mb-7 text-[35px] font-semibold">{data.subTitle}</h2>
        <p className="mb-7 leading-7 text-textColor text-[16px]">
          {data.description}
        </p>
        <Link
          className="hover:no-underline hover:text-black transition-all text-primary"
          href="/"
        >
          {data.link}
        </Link>
      </div>
      <hr className="my-[30px]"></hr>
    </React.Fragment>
  );
};

export default GrowBusiness;
