import Image from "next/image";
import React from "react";
import img from "../../../../../../public/solutionPages/tutoring/saveTime.png";
import { strings } from "@/assets/locales/locales";

const RightComponent = () => {
  const altText = strings.solutionPages.tutoring.altImage;
  return (
    <React.Fragment>
      <div className="w-full px-5 md:px-0 mt-4 md:mt-0 ">
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
