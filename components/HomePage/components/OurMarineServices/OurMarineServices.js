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
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
  }

  return (
    <div className="h-[90vh] bg-primary py-10 md:py-14 flex flex-col gap-10 md:gap-20 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto w-full px-4">
        <h2 className="text-white text-3xl md:text-8xl text-center font-light">
          Our Marine Services
        </h2>
        <hr className="border-[#707070] mt-5 md:mt-7" />
      </div>

      {/* Slider Wrapper */}
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-10">
        <Slider {...settings}>
          {ourMarineServicesList.map((item, index) => (
            <div key={index} className="relative">
              {/* Text & Image Wrapper */}
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-20 w-full">
                {/* Text Content */}
                <div className="space-y-4 md:space-y-10 w-full md:w-[444px] text-center md:text-left">
                  <p className="text-2xl md:text-3xl text-white flex items-center gap-3 justify-center md:justify-start">
                    {item.title}{" "}
                    <Link href={item.title}>
                      <span className="text-gray-400 text-2xl">
                        {arrowIcon}
                      </span>
                    </Link>
                  </p>
                  <p className="text-lg md:text-xl font-light text-white">
                    {item.desc}
                  </p>
                  <Link href={item.link}>
                    <button className="mt-5 md:mt-5 py-1.5 px-4 rounded-lg border border-gray-400 text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
                      Read More
                    </button>
                  </Link>
                </div>

                {/* Image */}
                <div className="w-full max-w-[300px] md:max-w-[470px] flex items-center">
                  <Image
                    src={item.imageUrl}
                    width={470}
                    height={400}
                    alt={item.title}
                    className="z-30 w-auto h-auto mx-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* HR Behind Image */}
      {/* <hr className="w-[200px] absolute right-0 bottom-[40%] hidden md:block" /> */}
    </div>
  )
}

export default OurMarineServices
