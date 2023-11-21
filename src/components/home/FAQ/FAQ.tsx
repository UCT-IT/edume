import React from "react";
import NextLink from "next/link";
import { strings } from "@/assets/locales/locales";
import Link from "next/link";

const FAQ = () => {
  const data = {
    title: strings.FAQ.title,
    link: strings.FAQ.link,
    content: strings.FAQ.content,
  };
  return (
    <div className="container px-[20px] py-16 text-center md:px-0 mx-auto">
      <h2 className="mb-8 text-3xl font-semibold">{data.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.content?.map((item, index, array) => (
          <div
            className={`${
              index === array.length - 1
                ? ""
                : "lg:border-r-[1px] border-gray-400"
            } mb-7`}
            key={item.title}
          >
            <div className="pr-2">
              <h2 className="text-[18px] mb-2 font-normal">{item.title}</h2>
              <p className="mb-2 leading-[30px] px-8 text-textColor text-[15px]">
                {item.desc}
              </p>
              <Link
                className="hover:no-underline hover:text-black mt-2 text-primary"
                href="/"
              >
                {item.link}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link
        className="hover:no-underline mt-8 hover:text-black text-primary"
        href="/"
      >
        {data.link}
      </Link>
    </div>
  );
};

export default FAQ;
