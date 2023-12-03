import { strings } from "@/assets/locales/locales";
import React from "react";

const StudentScheduling = () => {
  const data = strings.solutionPages.testPreparation.studentScheduling;
  return (
    <div className="container mx-auto  relative -top-4 px-5 pb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="w-full md:w-[90%]">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/NW2LquT5qKs?si=3Fh8_e04qjsQp9AB"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex items-center">
        <div>
          <h2 className="text-4xl font-medium mb-4 whitespace-pre-line">
            {data.title}
          </h2>
          <p className="text-textColor leading-8 whitespace-pre-line">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentScheduling;
