import Image from "next/image";
import React from "react";
import img from "../../../../../../public/solutionPages/testPreparation/headache.png";
import { strings } from "@/assets/locales/locales";

const RightComponent = () => {
  const altText = strings.solutionPages.testPreparation.altImage;
  return (
    <React.Fragment>
      <div className="w-3/4 mx-auto mt-4 md:mt-0 ">
        <Image
          src={img}
          alt={altText}
          className="relative w-full rounded-md shadow-customShadow"
        />
      </div>
    </React.Fragment>
  );
};

export default RightComponent;
