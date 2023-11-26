import Image from "next/image";
import React from "react";
import billingImg1 from "../../../../../public/featuresPages/billingAndPayroll/billing-image-1.png";

const RightComponent = () => {
  return (
    <React.Fragment>
      <div className="w-3/4 mx-auto mt-4 md:mt-0">
        <Image
          src={billingImg1}
          alt="Billing Image"
          className="relative top-8 w-full rounded-md shadow-customShadow"
        />
      </div>
    </React.Fragment>
  );
};

export default RightComponent;
