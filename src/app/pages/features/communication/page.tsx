import CommonButton from "@/components/common/button/CommonButton";
import CommonSection from "@/components/common/featuresPages/commonSection/CommonSection";
import React from "react";
import UserAccessRightComponent from "./userAccess/RightComponent";
import UserAccessLeftComponent from "./userAccess/LeftComponent";
import EliminateLeftComponent from "./eliminateNoShows/LeftComponent";
import EliminateRightComponent from "./eliminateNoShows/RightComponent";
import StayInTuochRightComponent from "./stayInTouch/RightComponent";
import StayInTouchLefttComponent from "./stayInTouch/LeftComponent";
import AutomatedRemindersRightComponent from "./automatedReminders1/RightComponent";
import AutomatedReminderLeftComponent from "./automatedReminders1/LeftComponent";
import AutomatedReminderRightComponent2 from "./automatedReminders2/RightComponent";
import AutomatedReminderLeftComponent2 from "./automatedReminders2/LeftComponent";
import { strings } from "@/assets/locales/locales";
import HeroBackground from "@/components/common/HeroBackground/HeroBackground";
import MoreFeaturesSections from "@/components/common/featuresPages/moreFeaturesSection/MoreFeaturesSection";

const CommunicationPage = () => {
  const data = strings.featuresPages.communication;
  const moreFeaturesSectionsData =
    strings.featuresPages.communication.moreFeautesSections;
  return (
    <React.Fragment>
      <HeroBackground>
        <div className="container mx-auto px-5 py-10 ">
          <div className="mt-28 mb-10 text-center text-secondary">
            <h2 className="font-bold text-4xl md:text-[56px] whitespace-pre-line leading-[60px]">
              {data.title}
            </h2>
            <p className="text-xl font-light leading-10 my-4 whitespace-pre-line">
              {data.description}
            </p>
            <CommonButton
              text={data.btn}
              href="/"
              color="tertiary"
              hover="[#97CE2C]"
            />
          </div>
        </div>
      </HeroBackground>
      <CommonSection
        rightComponent={<UserAccessRightComponent />}
        leftComponent={<UserAccessLeftComponent />}
        order={true}
      />
      <CommonSection
        rightComponent={<EliminateRightComponent />}
        leftComponent={<EliminateLeftComponent />}
        order={false}
      />
      <CommonSection
        rightComponent={<StayInTuochRightComponent />}
        leftComponent={<StayInTouchLefttComponent />}
        order={true}
      />
      <CommonSection
        rightComponent={<AutomatedRemindersRightComponent />}
        leftComponent={<AutomatedReminderLeftComponent />}
        order={false}
      />
      <CommonSection
        rightComponent={<AutomatedReminderRightComponent2 />}
        leftComponent={<AutomatedReminderLeftComponent2 />}
        order={true}
      />
      <MoreFeaturesSections data={moreFeaturesSectionsData} column="4" />
    </React.Fragment>
  );
};

export default CommunicationPage;
