import React from "react";

const HeroBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="bg-hero-bg bg-cover bg-center h-fit bg-primary z-0"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)" }}
    >
      {children}
    </div>
  );
};

export default HeroBackground;
