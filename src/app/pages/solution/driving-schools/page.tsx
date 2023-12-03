import { strings } from "@/assets/locales/locales";
import HeroBackground from "@/components/common/HeroBackground/HeroBackground";
import CommonButton from "@/components/common/button/CommonButton";
import React from "react";
import BusinessSoftware from "./businessSoftware/BusinessSoftware";
import CommonSection from "@/components/common/featuresPages/commonSection/CommonSection";
import SaveTimeLeftComponent from "./saveTime/LeftComponent";
import SaveTimeRightComponent from "./saveTime/RightComponent";
import LastingImpressionLeftComponent from "./lastingImpression/LeftComponent";
import LastingImpressionRightComponent from "./lastingImpression/RightComponent";
import ReduceNoShowsLeftComponent from "./reduceNoShows/LeftComponent";
import ReduceNoShowsRightComponent from "./reduceNoShows/RightComponent";
import ReduceHeadachesLeftComponent from "./reduceHeadaches/LeftComponent";
import ReduceHeadachesRightComponent from "./reduceHeadaches/RightComponent";
import SpeedUpInvoicingLeftComponent from "./speedUpInvoicing/LeftComponent";
import SpeedUpInvoicingRightComponent from "./speedUpInvoicing/RightComponent";
import TopOfMindLeftComponent from "./topOfMind/LeftComponent";
import TopOfMindRightComponent from "./topOfMind/RightComponent";
import MoreFeaturesSection from "@/components/common/featuresPages/moreFeaturesSection/MoreFeaturesSection";
import CommonCarousel from "@/components/common/commonCarousel/CommonCarousel";
import carouselData from "@/assets/locales/data/drivingSchools.json";

const page = () => {
  const data = strings.solutionPages.drivingSchools.heroContent;
  const moreFeatureData =
    strings.solutionPages.drivingSchools.moreFeaturesSection;

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
      <BusinessSoftware />
      <CommonSection
        leftComponent={<SaveTimeLeftComponent />}
        rightComponent={<SaveTimeRightComponent />}
        order={true}
      />
      <CommonSection
        leftComponent={<LastingImpressionLeftComponent />}
        rightComponent={<LastingImpressionRightComponent />}
        order={false}
      />
      <CommonSection
        leftComponent={<ReduceNoShowsLeftComponent />}
        rightComponent={<ReduceNoShowsRightComponent />}
        order={true}
      />
      <CommonSection
        leftComponent={<ReduceHeadachesLeftComponent />}
        rightComponent={<ReduceHeadachesRightComponent />}
        order={false}
      />
      <CommonSection
        leftComponent={<SpeedUpInvoicingLeftComponent />}
        rightComponent={<SpeedUpInvoicingRightComponent />}
        order={true}
      />
      <CommonSection
        leftComponent={<TopOfMindLeftComponent />}
        rightComponent={<TopOfMindRightComponent />}
        order={false}
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
