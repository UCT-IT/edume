import { FaArrowLeft } from "react-icons/fa";
import React from "react";

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute grid place-items-center top-[50%] translate-y-[-50%] bg-secondary h-[60px] w-[60px] rounded-full shadow-2xl left-5 z-10 "
    >
      <FaArrowLeft />
    </button>
  );
};

export default PrevArrow;
