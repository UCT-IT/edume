import Link from "next/link";
import React from "react";

type buttonProps = { text: string; href: string; hover: string; color: string };

const CommonButton = ({ text, href, hover, color }: buttonProps) => {
  return (
    <Link href={href}>
      <button
        className={`btn mt-6 py-5 px-10 rounded-md hover:bg-[${hover}] bg-${color} text-white`}
      >
        {text}
      </button>
    </Link>
  );
};

export default CommonButton;
