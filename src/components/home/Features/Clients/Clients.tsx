import React from "react";
import { strings } from "@/assets/locales/locales";
import clientImage from "@/assets/images/clients.svg";
import Image from "next/image";
import CommonButton from "@/components/common/button/CommonButton";
import { IoMdCheckmark } from "react-icons/io";
import Link from "next/link";

const Clients = () => {
  const data = {
    title: strings?.features?.client?.title,
    content: strings?.features?.client?.content,
    link: strings?.features?.client?.link,
    btn: strings?.features?.client?.btn,
  };
  return (
    <div className="container px-[20px] md:py-16 md:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="order-last md:order-first">
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
      <div className="p-7 relative">
        <Image
          className="w-full md:w-3/4"
          alt="Feature image"
          src={clientImage}
        ></Image>
      </div>
    </div>
  );
};

export default Clients;
