import { strings } from "@/assets/locales/locales";
import Link from "next/link";
import React from "react";

const LeftComponent = () => {
  const data = strings.communication.userAccess;
  return (
    <React.Fragment>
      <p className="text-tertiary font-semibold tracking-widest">
        {data.heading}
      </p>
      <h2 className="font-semibold text-4xl md:whitespace-pre-line leading-normal">
        {data.title}
      </h2>
      <p className="leading-8 font-light text-textColor text-center md:text-left lg:whitespace-pre-line">
        {data.firstDescription}
      </p>
      <p className="font-ligt text-textColor text-center md:text-left">
        {data.secondDescription}
      </p>
      <p className="text-primary hover:text-black">
        <Link href="#">Try it for Free</Link>
      </p>
    </React.Fragment>
  );
};

export default LeftComponent;
