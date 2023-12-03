import { strings } from "@/assets/locales/locales";
import Link from "next/link";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const LeftComponent = () => {
  const data = strings.solutionPages.drivingSchools.speedUpInvoicing;
  return (
    <React.Fragment>
      <p className="text-tertiary font-semibold tracking-widest">
        {data.heading}
      </p>
      <h2 className="font-semibold text-4xl md:whitespace-pre-line leading-normal">
        {data.title}
      </h2>
      <ul>
        {data.descriptions.map((data) => (
          <li
            className="text-textColor mb-3 flex text-[16px] font-normal gap-3 whitespace-pre-line"
            key={data}
          >
            <span className="font-bold text-black text-[24px]">
              <IoMdCheckmark />
            </span>
            {data}
          </li>
        ))}
      </ul>
      <p className="text-primary hover:text-black">
        <Link href={data.link.link}>{data.link.text}</Link>
      </p>
    </React.Fragment>
  );
};

export default LeftComponent;
