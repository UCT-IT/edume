import CommonButton from "@/components/common/button/CommonButton";
import HeroBackground from "@/components/home/HeroBackground/HeroBackground";
import React from "react";

const CommunicationPage = () => {
  return (
    <React.Fragment>
      <HeroBackground>
        <div className="container mx-auto px-5 py-10 ">
          <div className="mt-28 mb-10 text-center text-secondary">
            <h2 className="font-bold text-[56px] whitespace-pre-line">
              Enhance & Automate <br /> Communication.
            </h2>
            <p className="text-xl font-light leading-10 my-4 whitespace-pre-line">
              Communication is an important part of any teaching organization.
              Teachworks will help your <br /> business communicate and provide
              teachers, students and parents with the information that <br />
              they need.
            </p>
            <CommonButton
              text="Get Started Today"
              href="/"
              color="tertiary"
              hover="[#97CE2C]"
            />
          </div>
        </div>
      </HeroBackground>
    </React.Fragment>
  );
};

export default CommunicationPage;
