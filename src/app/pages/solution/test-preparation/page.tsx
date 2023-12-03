import { strings } from "@/assets/locales/locales";
import HeroBackground from "@/components/common/HeroBackground/HeroBackground";
import CommonButton from "@/components/common/button/CommonButton";
import React from "react";
import StudentScheduling from "./studentScheduling/StudentScheduling";
import CommonSection from "@/components/common/featuresPages/commonSection/CommonSection";
import SaveTimeLeftComponent from "../test-preparation/saveTime/LeftComponent";
import SaveTimeRightComponent from "../test-preparation/saveTime/RightComponent";
import ImpressionLeftComponent from "../test-preparation/impression/LeftComponent";
import ImpressionRightComponent from "../test-preparation/impression/RightComponent";
import NoShowsRightComponent from "../test-preparation/noShows/RightComponent";
import NoShowsLeftComponent from "../test-preparation/noShows/LeftComponent";
import HeadacheLeftComponent from "../test-preparation/headaches/LeftComponent";
import HeadacheRightComponent from "../test-preparation/headaches/RightComponent";
import InvoiceRightComponent from "../test-preparation/invoicing/RightComponent";
import InvoiceLeftComponent from "../test-preparation/invoicing/LeftComponent";
import TeachworkLeftComponent from "../test-preparation/teachworks/LeftComponent";
import TeachworRightComponent from "../test-preparation/teachworks/RightComponent";
import MoreFeaturesSections from "@/components/common/featuresPages/moreFeaturesSection/MoreFeaturesSection";
import CarouselData from "@/assets/locales/data/testPreparation.json";
import CommonCarousel from "@/components/common/commonCarousel/CommonCarousel";

const TestPreparation = () => {
  const data = strings.solutionPages.testPreparation;
  const moreFeatureSectionData =
    strings.solutionPages.testPreparation.moreFeautesSections;
  return (
    <React.Fragment>
      <HeroBackground>
        <div className="container mx-auto px-5 md:px-0 py-10 ">
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
              color="bg-tertiary"
              hover="bg-[#97CE2C]"
            />
          </div>
        </div>
      </HeroBackground>
      <StudentScheduling />
      <CommonSection
        leftComponent={<SaveTimeLeftComponent />}
        rightComponent={<SaveTimeRightComponent />}
        order={true}
      />
      <CommonSection
        leftComponent={<ImpressionLeftComponent />}
        rightComponent={<ImpressionRightComponent />}
        order={false}
      />
      <CommonSection
        leftComponent={<NoShowsLeftComponent />}
        rightComponent={<NoShowsRightComponent />}
        order={true}
      />
      <CommonSection
        leftComponent={<HeadacheLeftComponent />}
        rightComponent={<HeadacheRightComponent />}
        order={false}
      />
      <CommonSection
        leftComponent={<InvoiceLeftComponent />}
        rightComponent={<InvoiceRightComponent />}
        order={true}
      />
      <CommonSection
        leftComponent={<TeachworkLeftComponent />}
        rightComponent={<TeachworRightComponent />}
        order={false}
      />
      <MoreFeaturesSections data={moreFeatureSectionData} column="3" />
      <CommonCarousel
        headingSize="text-[15px]"
        headingWeight="font-bold"
        carouselData={CarouselData}
        headingColor="text-tertiary"
        carouselBg="transparent"
      />
    </React.Fragment>
  );
};

export default TestPreparation;
