import React from "react";
import { strings } from "@/assets/locales/locales";
import paidImage from "@/assets/images/paid.svg";
import Image from "next/image";
import CommonButton from "@/components/common/button/CommonButton";
import { IoMdCheckmark } from "react-icons/io";
import Link from "next/link";

const PaidSection = () => {
  const data = {
    title: strings.features.getPaid.title,
    content: strings.features.getPaid.content,
    link: strings.features.getPaid.link,
    btn: strings.features.getPaid.btn,
  };
  return (
    <div className="container px-[20px] md:pb-16 md:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="p-7 relative">
        <Image
          className="w-full md:w-full lg:w-3/4 h-full"
          alt="Feature image"
          src={paidImage}
        />
      </div>
      <div className="">
        <div>
          <h2 className="mb-4 font-medium text-2xl">{data.title}</h2>
          <ul>
            {data.content.map((data) => (
              <li
                className="text-textColor mb-3 flex text-[16px] font-normal gap-3"
                key={data}
              >
                <span className="font-bold text-black text-[24px]">
                  <IoMdCheckmark />
                </span>
                {data}
              </li>
            ))}
            <li className="text-primary mb-3 flex text-[18px] font-normal gap-3 ">
              <span className="font-bold text-black text-[24px]">
                <IoMdCheckmark />
              </span>
              <Link
                className="hover:text-black transition-all text-[18px]"
                href="/"
              >
                {data.link}
              </Link>
            </li>
          </ul>
          <CommonButton
            href="/"
            text={data.btn}
            hover="bg-[#5AA8EC]"
            color="bg-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default PaidSection;
