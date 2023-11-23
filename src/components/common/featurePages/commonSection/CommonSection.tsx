import React from "react";

type CommonSectionProps = {
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
  orderFirst: string;
  orderLast: string;
};

const CommonSection = ({
  leftComponent,
  rightComponent,
  orderFirst,
  orderLast,
}: CommonSectionProps) => {
  return (
    <React.Fragment>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center lg:gap-16 my-4 md:my-0">
        <div
          className={`space-y-5 md:py-20 lg:py-28 text-center md:text-left px-2 order-${orderFirst}`}
        >
          {leftComponent}
        </div>
        <div className={`lg:py-10 order-${orderLast}`}>{rightComponent}</div>
      </div>
    </React.Fragment>
  );
};

export default CommonSection;
