import CommonButton from "@/components/common/button/CommonButton";
import CommonSection from "@/components/common/featurePages/commonSection/CommonSection";
import HeroBackground from "@/components/home/HeroBackground/HeroBackground";
import React from "react";
import UserAccessRightComponent from "./userAccess/RightComponent";
import UserAccessLeftComponent from "./userAccess/LeftComponent";
import EliminateLeftComponent from "./eliminateNoShows/LeftComponent";
import EliminateRightComponent from "./eliminateNoShows/RightComponent";
import StayInTuochRightComponent from "./stayInTouch/RightComponent";
import StayInTuochLefttComponent from "./stayInTouch/LeftComponent";
import { strings } from "@/assets/locales/locales";

const CommunicationPage = () => {
  const data = strings.communication;
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
        orderFirst="first"
        orderLast="last"
      />
      <CommonSection
        rightComponent={<EliminateRightComponent />}
        leftComponent={<EliminateLeftComponent />}
        orderFirst="last"
        orderLast="first"
      />
      <CommonSection
        rightComponent={<StayInTuochRightComponent />}
        leftComponent={<StayInTuochLefttComponent />}
        orderFirst="first"
        orderLast="last"
      />
    </React.Fragment>
  );
};

export default CommunicationPage;
