import Image from "next/image";
import React from "react";
import img from "../../../../../public/featuresPages/communication/stayInTouch.png";
const RightComponent = () => {
  return (
    <React.Fragment>
      <div className="w-3/4 mx-auto mt-4 md:mt-0 ">
        <Image
          src={img}
          alt=""
          className="relative w-full rounded-md shadow-customShadow"
        />
        {/* <Image
          src={calendarImg2}
          alt=""
          className="relative bottom-2 -left-8 shadow-customShadow w-full rounded-md"
        /> */}
      </div>
    </React.Fragment>
  );
};

export default RightComponent;
