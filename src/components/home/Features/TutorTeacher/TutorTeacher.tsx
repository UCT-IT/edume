import React from "react";
import { strings } from "@/assets/locales/locales";
import tutorImage from "@/assets/images/tutor.svg";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import CommonButton from "@/components/common/button/CommonButton";
import Link from "next/link";

const TutorTeacher = () => {
  const data = {
    title: strings.features.tutor.title,
    content: strings.features.tutor.content,
    link: strings.features.tutor.link,
    btn: strings.features.tutor.btn,
  };
  return (
    <div className="container px-[20px] md:pb-16 md:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="order-last md:order-first">
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
      <div className="p-7 relative">
        <Image
          className="w-full md:w-full lg:w-3/4 h-full"
          alt="Feature image"
          src={tutorImage}
        />
      </div>
    </div>
  );
};

export default TutorTeacher;
