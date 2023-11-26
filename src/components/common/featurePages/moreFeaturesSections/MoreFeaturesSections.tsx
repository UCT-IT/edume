import { strings } from "@/assets/locales/locales";
import React from "react";

type features = {
  featureData: {
    heading: string;
    contents: { title: string; description: string }[];
  };
  column: string;
};

const MoreFeaturesSections = ({ featureData, column }: features) => {
  return (
    <div className="container mx-auto my-5 px-2">
      <h2 className="text-center text-4xl font-medium">
        {featureData.heading}
      </h2>
      <div
        className={`grid grid-cols-1 md:grid-cols-3 lg:${column} text-center md:text-left gap-8 py-10`}
      >
        {featureData.contents.map((item) => (
          <div key={item.title} className="mt-4">
            <h2 className="text-primary font-light text-xl">{item.title}</h2>
            <p className="font-light mt-4 leading-7 ">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreFeaturesSections;
