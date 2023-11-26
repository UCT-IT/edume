import { strings } from "@/assets/locales/locales";
import HeroBackground from "@/components/common/HeroBackground/HeroBackground";
import CommonButton from "@/components/common/button/CommonButton";
import React from "react";
import CommonSection from "@/components/common/featuresPages/commonSection/CommonSection";
import BillingMethodsLeftComponent from "./flexibleBillingMethods/LeftComponent";
import BillingMethodsRightComponent from "./flexibleBillingMethods/RightComponent";
import QuickInvoicingLeftComponent from "./quickInvoicing/LeftComponent";
import QuickInvoicingRightComponent from "./quickInvoicing/RightComponent";
import CustomizableInvoicesLeftComponent from "./customizableInvoices/LeftComponent";
import CustomizableInvoicesRightComponent from "./customizableInvoices/RightComponent";

const page = () => {
  const data = strings.billingAndPayroll.heroContent;
  return (
    <React.Fragment>
      <HeroBackground>
        <div className="container mx-auto px-5 py-10">
          <div className="mt-28 mb-10 text-center text-white">
            <h1 className="text-[56px] font-bold">{data.title}</h1>
            <p className="text-xl my-4 leading-10 font-light whitespace-pre-line">
              {data.description}
            </p>
            <CommonButton
              text="Get Started for Free"
              href="#"
              hover="#97CE2C"
              color="tertiary"
            />
          </div>
        </div>
      </HeroBackground>
      <CommonSection
        leftComponent={<BillingMethodsLeftComponent />}
        rightComponent={<BillingMethodsRightComponent />}
        orderFirst="first"
        orderLast="last"
      />
      <CommonSection
        leftComponent={<QuickInvoicingLeftComponent />}
        rightComponent={<QuickInvoicingRightComponent />}
        orderFirst="last"
        orderLast="first"
      />
      <CommonSection
        leftComponent={<CustomizableInvoicesLeftComponent />}
        rightComponent={<CustomizableInvoicesRightComponent />}
        orderFirst="first"
        orderLast="last"
      />
    </React.Fragment>
  );
};

export default page;
