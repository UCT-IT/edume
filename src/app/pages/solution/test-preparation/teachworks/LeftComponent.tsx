import { strings } from "@/assets/locales/locales";
import Link from "next/link";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const LeftComponent = () => {
  const data = strings.solutionPages.testPreparation.teachworks;
  return (
    <React.Fragment>
      <p className="text-tertiary font-semibold tracking-widest">
        {data.heading}
      </p>
      <h2 className="font-semibold text-4xl md:whitespace-pre-line leading-normal">
        {data.title}
      </h2>
      <p className="font-normal text-textColor whitespace-pre-line">
        {data.description}
      </p>
      <p className="text-primary hover:text-black">
        <Link href={data.link.path}>{data.link.text}</Link>
      </p>
    </React.Fragment>
  );
};

export default LeftComponent;
