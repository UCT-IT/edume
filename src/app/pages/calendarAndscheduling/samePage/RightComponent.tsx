import Image from "next/image";
import React from "react";
import calendarImg11 from "../../../../../public/featuresPages/calendarAndschedulingImages/calendar-image-11.png";

const RightComponent = () => {
  return (
    <React.Fragment>
      <div className="w-3/4 mx-auto mt-4 md:mt-0">
        <Image
          src={calendarImg11}
          alt="Calendar Image"
          className="w-full rounded-md shadow-customShadow"
        />
      </div>
    </React.Fragment>
  );
};

export default RightComponent;