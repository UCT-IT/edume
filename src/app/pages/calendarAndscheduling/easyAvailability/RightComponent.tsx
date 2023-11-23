import Image from "next/image";
import React from "react";
import calendarImg3 from "../../../../../public/featuresPages/calendarAndschedulingImages/calendar-image-3.png";
import calendarImg4 from "../../../../../public/featuresPages/calendarAndschedulingImages/calendar-image-4.png";

const RightComponent = () => {
  return (
    <React.Fragment>
      <div className="w-3/4 mx-auto mt-4 md:mt-0">
        <Image
          src={calendarImg3}
          alt=""
          className="relative top-8 w-full rounded-md shadow-customShadow"
        />
        <Image
          src={calendarImg4}
          alt=""
          className="relative bottom-2 left-8 shadow-customShadow w-full rounded-md"
        />
      </div>
    </React.Fragment>
  );
};

export default RightComponent;
