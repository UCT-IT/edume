import Image from "next/image";
import React from "react";
import billingImg10 from "../../../../../public/featuresPages/billingAndPayroll/billing-image-10.png";
import { strings } from "@/assets/locales/locales";

const RightComponent = () => {
  const altText = strings.billingAndPayroll.altText;
  return (
    <React.Fragment>
      <div className="w-3/4 mx-auto mt-4 md:mt-0">
        <Image
          src={billingImg10}
          alt={altText}
          className="relative top-8 w-full rounded-md shadow-customShadow"
        />
      </div>
    </React.Fragment>
  );
};

export default RightComponent;
