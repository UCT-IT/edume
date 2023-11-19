import Link from "next/link";
import React from "react";

const FeatureButton = ({ text, href }: any) => {
  return (
    <Link href={href}>
      <button className="btn mt-6 py-5 px-10 rounded-md hover:bg-[#5AA8EC] bg-primary text-white">
        {text}
      </button>
    </Link>
  );
};

export default FeatureButton;
