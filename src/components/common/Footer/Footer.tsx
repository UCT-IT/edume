"use client";
import React from "react";
import { ImFacebook } from "react-icons/im";
import { strings } from "@/assets/locales/locales";
import FooterGridItem from "./FooterGridItem";
import { motion } from "framer-motion";
<<<<<<< HEAD:src/components/home/Footer/Footer.tsx
import CommonButton from "@/components/common/button/CommonButton";
=======
import CommonButton from "../button/CommonButton";

>>>>>>> 6cc2b2570695ec1911029ade7c652b16431daecf:src/components/common/Footer/Footer.tsx
const Footer = () => {
  const footerData = strings.footer;
  const footerColumns = footerData.footerColumns;
  
  
  return (
    <div
      className="bg-primary"
      style={{ clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="container mx-auto text-secondary pt-20 relative">
        <div className="w-[95%] md:w-3/4 mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="text-[35px] text-center whitespace-pre-wrap"
          >

            {footerData.footerHeader}
          </motion.h1>

          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 lg:space-x-6 my-5">
            <CommonButton
              text={footerData.footerBtn1}
              href="#"
              hover="[#97CE2C]"
              color="tertiary"
            />
            <CommonButton
              text={footerData.footerBtn2}
              href="#"
              hover="[#4C7DB6]"
              color="[#2574a3]"
            />
          </div>
        </div>
        <hr className="w-full my-7" />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 px-2">
          {footerColumns.map((column, index) => (
            <FooterGridItem key={index} column={column} />
          ))}
        </div>
        <div className="flex justify-between py-7 flex-col md:flex-row">
          <h1>{footerData.footerCopyRight}</h1>
          <div className="mr-[200px]">
            <button className="rounded-full text-secondary bg-transparent hover:bg-secondary hover:text-black p-3">
              <a
                href="https://www.facebook.com/uttaracomputertraininganditfirm"
                target="_blank"
              >
                <ImFacebook />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
