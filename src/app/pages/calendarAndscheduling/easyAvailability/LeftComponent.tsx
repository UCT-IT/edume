import React from "react";
import Link from "next/link";
import { strings } from "@/assets/locales/locales";

const LeftComponent = () => {
  const data = strings.calendarAndScheduling.easyAvailability;
  return (
    <React.Fragment>
      <p className="text-tertiary font-semibold tracking-widest">
        {data.heading}
      </p>
      <h2 className="font-semibold text-4xl md:whitespace-pre-line leading-normal">
        {data.title}
      </h2>
      <p className="leading-8 font-light text-textColor text-center md:text-left lg:whitespace-pre-line">
        {data.description}
      </p>
      <p className="text-primary hover:text-black">
        <Link href={data.link.link}>{data.link.text}</Link>
      </p>
    </React.Fragment>
  );
};

export default LeftComponent;
