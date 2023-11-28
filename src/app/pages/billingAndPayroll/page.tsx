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
import InvoiceFlagsLeftComponent from "./invoiceFlags/LeftComponent";
import InvoiceFlagsRightComponent from "./invoiceFlags/RightComponent";
import OnlinePaymentsLeftComponent from "./onlinePayments/LeftComponent";
import OnlinePaymentsRightComponent from "./onlinePayments/RightComponent";
import ProcessInBulkLeftComponent from "./processInBulk/LeftComponent";
import ProcessInBulkRightComponent from "./processInBulk/RightComponent";
import LimitClericalErrorsLeftComponent from "./limitClericalErrors/LeftComponent";
import LimitClericalErrorsRightComponent from "./limitClericalErrors/RightComponent";
import AutomatedInvoicingLeftComponent from "./automatedInvoicing/LeftComponent";
import AutomatedInvoicingRightComponent from "./automatedInvoicing/RightComponent";
import AddPersonalTouchLeftComponent from "./addPersonalTouch/LeftComponent";
import AddPersonalTouchRightComponent from "./addPersonalTouch/RightComponent";
import CustomizableTemplatesLeftComponent from "./customizableTemplates/LeftComponent";
import CustomizableTemplatesRightComponent from "./customizableTemplates/RightComponent";
import MoreFeaturesSection from "@/components/common/featuresPages/moreFeaturesSection/MoreFeaturesSection";

const page = () => {
  const data = strings.billingAndPayroll.heroContent;
  const moreFeatureData = strings.billingAndPayroll.moreFeaturesSection;

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
              hover="bg-[#97CE2C]"
              color="bg-tertiary"
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
      <CommonSection
        leftComponent={<InvoiceFlagsLeftComponent />}
        rightComponent={<InvoiceFlagsRightComponent />}
        orderFirst="last"
        orderLast="first"
      />
      <CommonSection
        leftComponent={<OnlinePaymentsLeftComponent />}
        rightComponent={<OnlinePaymentsRightComponent />}
        orderFirst="first"
        orderLast="last"
      />
      <CommonSection
        leftComponent={<ProcessInBulkLeftComponent />}
        rightComponent={<ProcessInBulkRightComponent />}
        orderFirst="last"
        orderLast="first"
      />
      <CommonSection
        leftComponent={<LimitClericalErrorsLeftComponent />}
        rightComponent={<LimitClericalErrorsRightComponent />}
        orderFirst="first"
        orderLast="last"
      />
      <CommonSection
        leftComponent={<AutomatedInvoicingLeftComponent />}
        rightComponent={<AutomatedInvoicingRightComponent />}
        orderFirst="last"
        orderLast="first"
      />
      <CommonSection
        leftComponent={<AddPersonalTouchLeftComponent />}
        rightComponent={<AddPersonalTouchRightComponent />}
        orderFirst="first"
        orderLast="last"
      />
      <CommonSection
        leftComponent={<CustomizableTemplatesLeftComponent />}
        rightComponent={<CustomizableTemplatesRightComponent />}
        orderFirst="last"
        orderLast="first"
      />
      <MoreFeaturesSection data={moreFeatureData} column="4" />
    </React.Fragment>
  );
};

export default page;
