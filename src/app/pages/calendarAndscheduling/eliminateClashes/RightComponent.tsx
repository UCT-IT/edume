import Image from "next/image";
import React from "react";
import calendarImg6 from "../../../../../public/featuresPages/calendarAndschedulingImages/calendar-image-6.png";
import calendarImg7 from "../../../../../public/featuresPages/calendarAndschedulingImages/calendar-image-7.png";

const RightComponent = () => {
  return (
    <React.Fragment>
      <div className="w-3/4 mx-auto mt-4 md:mt-0">
        <Image
          src={calendarImg6}
          alt="Calendar Image"
          className="relative top-8 w-full rounded-md shadow-customShadow"
        />
        <Image
          src={calendarImg7}
          alt="Calendar Image"
          className="relative bottom-2 left-5 shadow-customShadow w-[90%] rounded-md"
        />
      </div>
    </React.Fragment>
  );
};

export default RightComponent;
