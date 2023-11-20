import React from "react";
// import herobgImg from "../../assets/images/heroBg.svg";

const HeroBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="bg-hero-bg bg-cover bg-center h-fit bg-primary z-0"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)" }}
    >
      {children}
    </div>
  );
};

export default HeroBackground;
