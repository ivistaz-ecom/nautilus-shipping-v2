"use client"

import { arrowIcon, arrowLeftIcon } from "@/utils/icon"
import FindInsideItem from "./FindInsideItem"
import { useRef } from "react"

const FindInside = () => {
  const sliderRef = useRef(null)

  return (
    <div className="bg-primary py-14 flex flex-col justify-center gap-10">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-10">
        {/* card 1 */}
        <div className="flex gap-40">
          <h2 className="text-white text-8xl font-light leading-tight">
            What You’ll <br /> Find Inside
          </h2>
          <p className="text-[22px] text-white font-light w-1/4 mt-auto pb-5">
            Each edition of the Nautilus Newsletter is thoughtfully curated to
            bring you:
          </p>
        </div>

        {/* card 2 */}
        <FindInsideItem sliderRef={sliderRef} />
      </div>

      <div className="w-full">
        <div className="flex justify-end items-center">
          <div className="flex">
            <button
              className="text-3xl text-gray-400"
              onClick={() => sliderRef.current.slickPrev()}
            >
              {arrowLeftIcon}
            </button>
            <button
              className="text-3xl text-gray-400"
              onClick={() => sliderRef.current.slickNext()}
            >
              {arrowIcon}
            </button>
          </div>
          <hr className="w-3/5 border-gray-400" />
        </div>
      </div>
    </div>
  )
}

export default FindInside
