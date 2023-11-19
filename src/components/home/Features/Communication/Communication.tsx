import React from "react";
import { strings } from "@/assets/locales/locales";
import communitionImage from "@/assets/images/communication.svg";
import Image from "next/image";
import CommonButton from "@/components/common/button/CommonButton";
import { IoMdCheckmark } from "react-icons/io";
import Link from "next/link";

const Communication = () => {
  const data = {
    title: strings?.features?.communication?.title,
    content: strings?.features?.communication?.content,
    link: strings?.features?.communication?.link,
    btn: strings?.features?.communication?.btn,
  };
  return (
    <div className="container px-[20px] md:py-16 md:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="p-7 relative">
        <Image
          className="w-full md:w-full lg:w-3/4 h-full"
          alt="Feature image"
          src={communitionImage}
        ></Image>
      </div>
      <div className="">
        <div>
          <h2 className="mb-4 font-medium text-2xl">{data.title}</h2>
          <ul>
            {data.content?.map((data, index) => (
              <li
                className="text-textColor mb-3 flex text-[16px] font-normal gap-3"
                key={index}
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
            text={data.btn as string}
            hover="#5AA8EC"
            color="primary"
          ></CommonButton>
        </div>
      </div>
    </div>
  );
};

export default Communication;
