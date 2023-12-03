import { strings } from "@/assets/locales/locales";
import Link from "next/link";
import React from "react";

type MoreFeaturesSectionProps = {
  data: {
    heading: string;
    features: {
      title: string;
      description: string;
    }[];
  };
  column: string;
};

const MoreFeaturesSection = ({ data, column }: MoreFeaturesSectionProps) => {
  return (
    <div className="container mx-auto my-5 px-2">
      <h2 className="font-semibold text-4xl text-center py-5">
        {data.heading}
      </h2>
      <div
        className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-${column} gap-8 py-10`}
      >
        {data.features.map((feature) => (
          <div key={feature.title} className="text-center md:text-left">
            <h2 className="text-primary">{feature.title}</h2>
            <p className="font-light leading-7 mt-4 md:whitespace-pre-line">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreFeaturesSection;
