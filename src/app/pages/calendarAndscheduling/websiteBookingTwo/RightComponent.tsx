import Image from "next/image";
import React from "react";
import calendarImg9 from "../../../../../public/featuresPages/calendarAndschedulingImages/calendar-image-9.png";
import { strings } from "@/assets/locales/locales";

const RightComponent = () => {
  const altText = strings.calendarAndScheduling.altText;
  return (
    <React.Fragment>
      <div className="w-3/4 mx-auto mt-4 md:mt-0">
        <Image
          src={calendarImg9}
          alt={altText}
          className="w-full rounded-md shadow-customShadow"
        />
      </div>
    </React.Fragment>
  );
};

export default RightComponent;
