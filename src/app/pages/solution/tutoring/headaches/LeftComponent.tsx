import { strings } from "@/assets/locales/locales";
import Link from "next/link";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { formatContent } from "@/components/utils/formatContent";

const LeftComponent = () => {
  const data = strings.tutoring.headaches;
  const customHrefs = ["/"];
  return (
    <React.Fragment>
      <p className="text-tertiary font-semibold tracking-widest">
        {data.heading}
      </p>
      <h2 className="font-semibold text-4xl md:whitespace-pre-line leading-normal">
        {data.title}
      </h2>
      <ul>
        {data.contents.map((content, index) => (
          <li
            className="text-textColor flex gap-3 mb-3 text-[16px] font-normal  whitespace-pre-line"
            key={index}
          >
            <span className="font-bold text-black text-[24px]">
              <IoMdCheckmark />
            </span>
            <span>{formatContent({ content, customHrefs })}</span>
          </li>
        ))}
      </ul>
      <p className="text-primary hover:text-black">
        <Link href={data.link.path}>{data.link.text}</Link>
      </p>
    </React.Fragment>
  );
};

export default LeftComponent;
