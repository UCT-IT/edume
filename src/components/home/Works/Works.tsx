import React from "react";
import workImage from "@/assets/images/works.svg";
import Image from "next/image";
import { strings } from "@/assets/locales/locales";

const Works = () => {
  const data = {
    title: strings.works?.title,
    contents: strings.works?.contents,
  };
  return (
    <div className="container mx-auto px-[20px] py-16 md:px-0">
      <h2 className="font-bold text-center text-3xl mb-10">{data.title}</h2>
      <Image className="w-full mb-7" alt="work image" src={workImage} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
        {data.contents?.map((d, i) => (
          <div key={d.heading}>
            <h2 className="text-[17px] font-medium mb-4">
              {i + 1} {d.heading}
            </h2>
            <p className="text-textColor text-[15px]">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
