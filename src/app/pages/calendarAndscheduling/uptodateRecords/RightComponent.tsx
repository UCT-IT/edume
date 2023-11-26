import Image from "next/image";
import React from "react";
import calendarImg10 from "../../../../../public/featuresPages/calendarAndschedulingImages/calendar-image-10.png";

const RightComponent = () => {
  return (
    <React.Fragment>
      <div className="w-3/4 mx-auto mt-4 md:mt-0">
        <Image
          src={calendarImg10}
          alt="Calendar Image"
          className="w-full rounded-md shadow-customShadow"
        />
      </div>
    </React.Fragment>
  );
};

export default RightComponent;
