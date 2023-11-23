import { strings } from "@/assets/locales/locales";
import HeroBackground from "@/components/common/HeroBackground/HeroBackground";
import CommonButton from "@/components/common/button/CommonButton";
import CommonSection from "@/components/common/featuresPages/commonSection/CommonSection";
import React from "react";
import FlexibleLeftComponent from "./flexibleViews/LeftComponent";
import FlexibleRightComponent from "./flexibleViews/RightComponent";
import EasyLeftComponent from "./easyAvailability/LeftComponent";
import EasyRightComponent from "./easyAvailability/RightComponent";
import SimplifiedLeftComponent from "./simplifiedScheduling/LeftComponent";
import SimplifiedRightComponent from "./simplifiedScheduling/RightComponent";
import EliminateLeftComponent from "./eliminateClashes/LeftComponent";
import EliminateRightComponent from "./eliminateClashes/RightComponent";
import WebOneLeftComponent from "./websiteBookingOne/LeftComponent";
import WebOneRightComponent from "./websiteBookingOne/RightComponent";
import WebTwoLeftComponent from "./websiteBookingTwo/LeftComponent";
import WebTwoRightComponent from "./websiteBookingTwo/RightComponent";

const CalendarAndScheduling = () => {
  const data = {
    title: strings.calendarAndScheduling.heroContent.title,
    description: strings.calendarAndScheduling.heroContent.description,
  };
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
              text="Start Your Free Trial"
              href="#"
              hover="#97CE2C"
              color="tertiary"
            />
          </div>
        </div>
      </HeroBackground>
      <CommonSection
        leftComponent={<FlexibleLeftComponent />}
        rightComponent={<FlexibleRightComponent />}
        orderFirst="first"
        orderLast="last"
      />
      <CommonSection
        leftComponent={<EasyLeftComponent />}
        rightComponent={<EasyRightComponent />}
        orderFirst="last"
        orderLast="first"
      />
      <CommonSection
        leftComponent={<SimplifiedLeftComponent />}
        rightComponent={<SimplifiedRightComponent />}
        orderFirst="first"
        orderLast="last"
      />
      <CommonSection
        leftComponent={<EliminateLeftComponent />}
        rightComponent={<EliminateRightComponent />}
        orderFirst="last"
        orderLast="first"
      />
      <CommonSection
        leftComponent={<WebOneLeftComponent />}
        rightComponent={<WebOneRightComponent />}
        orderFirst="first"
        orderLast="last"
      />
      <CommonSection
        leftComponent={<WebTwoLeftComponent />}
        rightComponent={<WebTwoRightComponent />}
        orderFirst="last"
        orderLast="first"
      />
    </React.Fragment>
  );
};

export default CalendarAndScheduling;
