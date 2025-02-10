"use client"

import { arrowLeftDarkIcon, arrowRightDarkIcon } from "@/utils/icon"
import { useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const OtherEdition = () => {
  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  }

  return (
    <>
      <div className="pb-14 px-4 sm:px-6">
        <div className="max-w-screen-xl w-full mx-auto space-y-5 sm:space-y-7">
          {/* Title */}
          <h2 className="text-2xl sm:text-[34px] font-light">Other Editions</h2>

          {/* Description */}
          <p className="text-base sm:text-xl font-light sm:w-3/5">
            While this is our first edition, each month will bring new themes,
            stories, and insights that reflect Nautilus’s journey and
            innovations in maritime trade. Stay tuned for upcoming topics!
          </p>

          {/* Carousel */}
          <div className="space-y-7">
            <Slider ref={sliderRef} {...settings} className="md:space-x-4">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="px-2">
                  <div className="w-full md:w-48 h-40 md:h-48 lg:h-56 rounded-lg border border-[#707070]"></div>
                </div>
              ))}
            </Slider>

            {/* Custom Navigation Buttons */}
            <div className="text-center space-x-2">
              <button
                className="text-2xl"
                onClick={() => sliderRef.current.slickPrev()}
              >
                {arrowLeftDarkIcon}
              </button>
              <button
                className="text-2xl"
                onClick={() => sliderRef.current.slickNext()}
              >
                {arrowRightDarkIcon}
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default OtherEdition
