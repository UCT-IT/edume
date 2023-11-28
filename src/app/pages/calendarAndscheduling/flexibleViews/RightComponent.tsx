import Image from "next/image";
import React from "react";
import calendarImg1 from "../../../../../public/featuresPages/calendarAndschedulingImages/calendar-image-1.png";
import calendarImg2 from "../../../../../public/featuresPages/calendarAndschedulingImages/calendar-image-2.png";
import { strings } from "@/assets/locales/locales";

const RightComponent = () => {
  const altText = strings.calendarAndScheduling.altText;
  return (
    <React.Fragment>
      <div className="w-3/4 mx-auto mt-4 md:mt-0">
        <Image
          src={calendarImg1}
          alt={altText}
          className="relative top-8 w-full rounded-md shadow-customShadow"
        />
        <Image
          src={calendarImg2}
          alt={altText}
          className="relative bottom-2 -left-8 shadow-customShadow w-full rounded-md"
        />
      </div>
    </React.Fragment>
  );
};

export default RightComponent;
