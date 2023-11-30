import React from "react";

type CommonSectionProps = {
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
  order: boolean;
};

const CommonSection = ({
  leftComponent,
  rightComponent,
  order,
}: CommonSectionProps) => {
  return (
    <React.Fragment>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center lg:gap-16 mb-4 md:mb-0 ">
        <div
          className={`space-y-5 py-10 text-center md:text-left px-2 ${
            order ? "md:order-first" : "md:order-last"
          } `}
        >
          {leftComponent}
        </div>
        <div
          className={`lg:py-10 ${order ? "md:order-last" : "md:order-first"}`}
        >
          {rightComponent}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommonSection;
