"use client"

import { arrowIcon } from "@/utils/icon"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ourMarineServicesList } from "@/utils/resources"
import Link from "next/link"

const OurMarineServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
    swipeToSlide: true,
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full border border-gray-300 flex justify-center items-center mt-5">
        <div className="w-2 h-2 rounded-full bg-white opacity-40" />
      </div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "-10px",
          display: "flex",
          justifyContent: "center",
          //gap: "",
        }}
      >
        {dots}
      </div>
    ),
  }

  return (
    <div className="h-auto bg-primary py-10 md:py-14 flex flex-col gap-7 md:gap-20 relative overflow-hidden mb-7 md:mb-14">
      <div className="max-w-screen-xl mx-auto w-full px-4">
        <h2 className="text-white text-3xl md:text-8xl text-center font-light tracking-wide">
          Our Marine Services
        </h2>
        <hr className="border-[#707070] mt-5 md:mt-7" />
      </div>

      {/* Slider Wrapper */}
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-10">
        <Slider {...settings}>
          {ourMarineServicesList.map((item, index) => (
            <div key={index} className="relative md:px-10">
              {/* Wrapper with Fixed Min Height */}
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-20 w-full min-h-[500px]">
                {/* Text Content */}
                <div className="flex-1 space-y-4 md:space-y-10 w-full md:w-[444px] text-center md:text-left">
                  <p className="text-2xl md:text-3xl text-white tracking-wide flex items-center gap-3 justify-center md:justify-start">
                    {item.title}{" "}
                    <Link href={item.link}>
                      <span className="text-gray-400 text-2xl">
                        <Image
                          src="/arrow.svg"
                          width={25}
                          height={25}
                          alt="arrow"
                          className="w-5 h-5"
                        />
                      </span>
                    </Link>
                  </p>
                  <p className="text-sm md:text-lg font-light text-white tracking-wide">
                    {item.desc}
                  </p>
                  <Link href={item.link}>
                    <button className="mt-5 py-2 px-5 rounded-lg border border-gray-400 text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
                      Read More
                    </button>
                  </Link>
                </div>

                {/* Image Container with Fixed Height */}
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    src={item.imageUrl}
                    width={470}
                    height={400}
                    alt={item.title}
                    className="w-full max-w-[300px] md:max-w-[470px] h-auto object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default OurMarineServices
