"use client";
import data from "@/assets/locales/data/testimonial.json";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NextArrow from "../../common/NextArrow";
import PrevArrow from "../../common/PrevArrow";
import Link from "next/link";

const TestimonialCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#F4F9FF]">
      <div className="container mx-auto px-5 md:px-0 py-[50px]">
        <h1 className="text-[22px] font-light text-[#111111] text-center mb-7 ">
          {data.title}
        </h1>
        <div className="text-center py-7 ">
          <Slider {...settings}>
            {data.content?.map((item) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                key={item.title}
                className="flex  justify-center font-light items-center italic flex-col"
              >
                <div className="w-[87%] mx-auto">
                  <p className="text-black text-[18px] md:text-[25px] whitespace-pre-wrap font-semibold px-0 md:px-10   lg:px-[150px]  ">
                    {item.title}
                  </p>
                  <p className="text-tertiary font-semibold text-[20px] mt-7">
                    {item.subTitle}
                  </p>
                  <p className="pb-7">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </Slider>
          <Link className="hover:no-underline mt-5 text-blue-400" href="/">
            {data.link}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
