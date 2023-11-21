import { strings } from "@/assets/locales/locales";
import HeroBackground from "@/components/common/HeroBackground/HeroBackground";
import CommonButton from "@/components/common/button/CommonButton";
import React from "react";

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
    </React.Fragment>
  );
};

export default CalendarAndScheduling;
