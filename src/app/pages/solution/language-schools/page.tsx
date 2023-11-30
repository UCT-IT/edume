import { strings } from "@/assets/locales/locales";
import HeroBackground from "@/components/common/HeroBackground/HeroBackground";
import CommonButton from "@/components/common/button/CommonButton";
import React from "react";
import ManagementSoftware from "./managementSoftware/ManagementSoftware";
import CommonSection from "@/components/common/featuresPages/commonSection/CommonSection";
import RepetitiveTasksLeftComponent from "./repetitiveTasks/LeftComponent";
import RepetitiveTasksRightComponent from "./repetitiveTasks/RightComponent";
import LastingImpressionLeftComponent from "./lastingImpression/LeftComponent";
import LastingImpressionRightComponent from "./lastingImpression/RightComponent";
import ImproveAttendanceLeftComponent from "./improveAttendance/LeftComponent";
import ImproveAttendanceRightComponent from "./improveAttendance/RightComponent";
import ReduceHeadachesLeftComponent from "./reduceHeadaches/LeftComponent";
import ReduceHeadachesRightComponent from "./reduceHeadaches/RightComponent";
import SpeedUpInvoicingLeftComponent from "./speedUpInvoicing/LeftComponent";
import SpeedUpInvoicingRightComponent from "./speedUpInvoicing/RightComponent";
import TopOfMindLeftComponent from "./topOfMind/LeftComponent";
import TopOfMindRightComponent from "./topOfMind/RightComponent";
import MoreFeaturesSection from "@/components/common/featuresPages/moreFeaturesSection/MoreFeaturesSection";
import carouselData from "@/assets/locales/data/languageSchool.json";
import CommonCarousel from "@/components/common/commonCarousel/commonCarousel";

const page = () => {
  const data = strings.solutionPages.languageSchools.heroContent;
  const moreFeatureData =
    strings.solutionPages.languageSchools.moreFeaturesSection;
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
              hover="bg-[#97CE2C]"
              color="bg-tertiary"
            />
          </div>
        </div>
      </HeroBackground>
      <ManagementSoftware />
      <CommonSection
        leftComponent={<RepetitiveTasksLeftComponent />}
        rightComponent={<RepetitiveTasksRightComponent />}
        orderFirst="first"
        orderLast="last"
      />
      <CommonSection
        leftComponent={<LastingImpressionLeftComponent />}
        rightComponent={<LastingImpressionRightComponent />}
        orderFirst="last"
        orderLast="first"
      />
      <CommonSection
        leftComponent={<ImproveAttendanceLeftComponent />}
        rightComponent={<ImproveAttendanceRightComponent />}
        orderFirst="first"
        orderLast="last"
      />
      <CommonSection
        leftComponent={<ReduceHeadachesLeftComponent />}
        rightComponent={<ReduceHeadachesRightComponent />}
        orderFirst="last"
        orderLast="first"
      />
      <CommonSection
        leftComponent={<SpeedUpInvoicingLeftComponent />}
        rightComponent={<SpeedUpInvoicingRightComponent />}
        orderFirst="first"
        orderLast="last"
      />
      <CommonSection
        leftComponent={<TopOfMindLeftComponent />}
        rightComponent={<TopOfMindRightComponent />}
        orderFirst="last"
        orderLast="first"
      />
      <MoreFeaturesSection data={moreFeatureData} column="3" />
      <CommonCarousel
        headingSize="text-[15px]"
        headingWeight="font-bold"
        carouselData={carouselData}
        headingColor="text-tertiary"
        carouselBg="transparent"
      />
    </React.Fragment>
  );
};

export default page;
