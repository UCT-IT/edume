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
  const data = strings.featuresPages.billingAndPayroll.heroContent;
  const moreFeatureData =
    strings.featuresPages.billingAndPayroll.moreFeaturesSection;

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
        order={true}
      />
      <CommonSection
        leftComponent={<QuickInvoicingLeftComponent />}
        rightComponent={<QuickInvoicingRightComponent />}
        order={false}
      />
      <CommonSection
        leftComponent={<CustomizableInvoicesLeftComponent />}
        rightComponent={<CustomizableInvoicesRightComponent />}
        order={true}
      />
      <CommonSection
        leftComponent={<InvoiceFlagsLeftComponent />}
        rightComponent={<InvoiceFlagsRightComponent />}
        order={false}
      />
      <CommonSection
        leftComponent={<OnlinePaymentsLeftComponent />}
        rightComponent={<OnlinePaymentsRightComponent />}
        order={true}
      />
      <CommonSection
        leftComponent={<ProcessInBulkLeftComponent />}
        rightComponent={<ProcessInBulkRightComponent />}
        order={false}
      />
      <CommonSection
        leftComponent={<LimitClericalErrorsLeftComponent />}
        rightComponent={<LimitClericalErrorsRightComponent />}
        order={true}
      />
      <CommonSection
        leftComponent={<AutomatedInvoicingLeftComponent />}
        rightComponent={<AutomatedInvoicingRightComponent />}
        order={false}
      />
      <CommonSection
        leftComponent={<AddPersonalTouchLeftComponent />}
        rightComponent={<AddPersonalTouchRightComponent />}
        order={true}
      />
      <CommonSection
        leftComponent={<CustomizableTemplatesLeftComponent />}
        rightComponent={<CustomizableTemplatesRightComponent />}
        order={false}
      />
      <MoreFeaturesSection data={moreFeatureData} column="4" />
    </React.Fragment>
  );
};

export default page;
