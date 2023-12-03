import Image from "next/image";
import React from "react";
import drivingImg6 from "../../../../../../public/solutionPages/drivingSchools/drivingSchools-image-6.png";
import { strings } from "@/assets/locales/locales";

const RightComponent = () => {
  const altText = strings.solutionPages.drivingSchools.altText;
  return (
    <React.Fragment>
      <div className="w-3/4 mx-auto mt-4 md:mt-0">
        <Image
          src={drivingImg6}
          alt={altText}
          className="relative top-8 w-full rounded-md shadow-customShadow px-5"
        />
      </div>
    </React.Fragment>
  );
};

export default RightComponent;
