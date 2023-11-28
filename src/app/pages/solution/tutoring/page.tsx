import HeroBackground from "@/components/common/HeroBackground/HeroBackground";
import CommonButton from "@/components/common/button/CommonButton";
import React from "react";
import TutorScheduling from "./tutorScheduling/TutorScheduling";
import { strings } from "@/assets/locales/locales";
import CommonSection from "@/components/common/featuresPages/commonSection/CommonSection";
import SaveTimeLeftComponent from "../tutoring/saveTime/LeftComponent";
import SaveTimeRightComponent from "../tutoring/saveTime/RightComponent";
import ImpressionLeftComponent from "../tutoring/impression/LeftComponent";
import ImpressionRightComponent from "../tutoring/impression/RightComponent";
import NoShowsRightComponent from "../tutoring/noShows/RightComponent";
import NoShowsLeftComponent from "../tutoring/noShows/LeftComponent";
import HeadacheLeftComponent from "../tutoring/headaches/LeftComponent";
import HeadacheRightComponent from "../tutoring/headaches/RightComponent";
import InvoiceRightComponent from "../tutoring/invoicing/RightComponent";
import InvoiceLeftComponent from "../tutoring/invoicing/LeftComponent";
import TeachworkLeftComponent from "../tutoring/teachworks/LeftComponent";
import TeachworRightComponent from "../tutoring/teachworks/RightComponent";
import MoreFeaturesSections from "@/components/common/featuresPages/moreFeaturesSection/MoreFeaturesSection";
import CarouselData from "@/assets/locales/data/tutorTestimonial.json";
import CommonCarousel from "@/components/common/commonCarousel/CommonCarousel";
const TutorinPage = () => {
  const data = strings.tutoring;
  const moreFeatureSectionData = strings.tutoring.moreFeautesSections;
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
      <TutorScheduling />
      <CommonSection
        leftComponent={<SaveTimeLeftComponent />}
        rightComponent={<SaveTimeRightComponent />}
        orderFirst="first"
        orderLast="last"
      />
      <CommonSection
        leftComponent={<ImpressionLeftComponent />}
        rightComponent={<ImpressionRightComponent />}
        orderFirst="last"
        orderLast="first"
      />
      <CommonSection
        leftComponent={<NoShowsLeftComponent />}
        rightComponent={<NoShowsRightComponent />}
        orderFirst="first"
        orderLast="last"
      />
      <CommonSection
        leftComponent={<HeadacheLeftComponent />}
        rightComponent={<HeadacheRightComponent />}
        orderFirst="last"
        orderLast="first"
      />
      <CommonSection
        leftComponent={<InvoiceLeftComponent />}
        rightComponent={<InvoiceRightComponent />}
        orderFirst="first"
        orderLast="last"
      />
      <CommonSection
        leftComponent={<TeachworkLeftComponent />}
        rightComponent={<TeachworRightComponent />}
        orderFirst="last"
        orderLast="first"
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

export default TutorinPage;
