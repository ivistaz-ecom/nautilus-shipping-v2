"use client"

import { findInsideList } from "@/utils/resources"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const FindInsideItem = ({ sliderRef }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
    ],
  }
  return (
    <Slider ref={sliderRef} {...sliderSettings}>
      {findInsideList.map((item, index) => (
        <div key={index} className="px-2">
          <li className="border border-gray-400 rounded-lg h-full min-h-[250px] flex flex-col justify-between">
            <div className="py-3 border-b border-gray-400">
              <h3 className="text-[22px] font-light text-white text-center">
                {item.title}
              </h3>
            </div>

            <p className="p-5 text-lg font-light text-center text-white flex-grow">
              {item.desc}
            </p>
          </li>
        </div>
      ))}
    </Slider>
  )
}

export default FindInsideItem
