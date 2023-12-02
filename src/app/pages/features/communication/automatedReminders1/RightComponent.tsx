import Image from "next/image";
import React from "react";
import automated1 from "../../../../../../public/featuresPages/communication/automated1.png";
import automated2 from "../../../../../../public/featuresPages/communication/automated2.png";

const RightComponent = () => {
  return (
    <React.Fragment>
      <div className="w-3/4 mx-auto mt-4 md:mt-0 ">
        <Image
          src={automated1}
          alt=""
          className="relative w-full rounded-md shadow-customShadow"
        />
        <Image
          style={{ overflowClipMargin: "content-box", overflow: "clip" }}
          src={automated2}
          alt=""
          className="w-[60%] -top-20 relative left-24 md:left-36 lg:left-36 rounded-t-[40px] shadow-customShadow rounded-md"
        />
      </div>
    </React.Fragment>
  );
};

export default RightComponent;
