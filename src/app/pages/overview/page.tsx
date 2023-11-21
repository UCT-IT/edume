import { strings } from "@/assets/locales/locales";
import HeroBackground from "@/components/common/HeroBackground/HeroBackground";
import React from "react";

const page = () => {
  const data = {
    title: strings.overview.heroContent.title,
    description: strings.overview.heroContent.description,
  };
  return (
    <React.Fragment>
      <HeroBackground>
        <div className="container mx-auto px-5 py-10 ">
          <div className="mt-28 mb-10 text-center text-secondary">
            <h2 className="font-bold text-[56px] whitespace-pre-line">
              {data.title}
            </h2>
            <p className="text-xl font-light leading-10 my-4 whitespace-pre-line">
              {data.description}
            </p>
          </div>
        </div>
      </HeroBackground>
      <div className="w-[90%] md:w-3/4 lg:w-[845px] h-[186px] md:h-[476px] mx-auto my-28">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/NW2LquT5qKs?si=-FlAbUfQNnziI-Hc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </React.Fragment>
  );
};

export default page;
