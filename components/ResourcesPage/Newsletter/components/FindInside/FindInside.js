"use client"

import FindInsideItem from "./FindInsideItem"
import { useRef } from "react"
import Image from "next/image"

const FindInside = () => {
  const sliderRef = useRef(null)

  return (
    <div className="bg-primary py-10 flex flex-col justify-center gap-10">
      <div className="max-w-screen-lg mx-auto w-full flex flex-col gap-10">
        {/* card 1 */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-40 px-4">
          <h2 className="text-white text-3xl sm:text-7xl font-light leading-tight md:leading-tight tracking-wide">
            What You’ll <br /> Find Inside
          </h2>
          <p className="text-base sm:text-lg text-white font-light w-full sm:w-1/3 mt-auto pb-3 tracking-wide">
            Each edition of the Nautilus Newsletter is thoughtfully curated to
            bring you:
          </p>
        </div>

        {/* card 2 */}
        <FindInsideItem sliderRef={sliderRef} />
      </div>

      <div className="w-full">
        <div className="flex justify-end items-center pr-4 sm:pr-0 gap-1">
          <div className="flex gap-2">
            <button
              className="text-3xl text-gray-400"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <Image
                src="/arrow.svg"
                width={25}
                height={25}
                alt="arrow"
                className="w-6 h-6 rotate-180"
              />
            </button>
            <button
              className="text-3xl text-gray-400"
              onClick={() => sliderRef.current.slickNext()}
            >
              <Image
                src="/arrow.svg"
                width={25}
                height={25}
                alt="arrow"
                className="w-6 h-6"
              />
            </button>
          </div>
          <hr className="w-3/5 border-gray-400" />
        </div>
      </div>
    </div>
  )
}

export default FindInside
