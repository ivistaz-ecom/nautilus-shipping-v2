"use client"

import { arrowIcon, arrowLeftIcon } from "@/utils/icon"
import NewsAndInsightsItem from "./NewsAndInsightsItem"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import Button from "@/components/Button/Button"

const NewsAndInsights = () => {
  const sliderRef = useRef(null)
  return (
    <div className="bg-primary h-auto py-14 flex flex-col justify-center gap-16">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col lg:flex-row justify-between gap-10">
        {/* Card 1 */}
        <div className="w-full lg:w-[442px] flex flex-col gap-5 text-center lg:text-left">
          <h2 className="text-white text-6xl lg:text-8xl font-light tracking-wide">
            News & <br /> Insights
          </h2>
          <Link href="/resources/news-and-insights" className="hidden md:block">
            <button className="py-1.5 px-6 bg-white rounded-lg hover:bg-secondary hover:text-white hover:scale-95 transition-all duration-300 ease-in-out">
              Read More
            </button>
          </Link>
        </div>

        {/* Card 2 (Slider) */}
        <div className="w-full self-end">
          <NewsAndInsightsItem sliderRef={sliderRef} />
        </div>
      </div>

      {/* mobile read more button */}
      <Link
        href="/resources/news-and-insights"
        className="block md:hidden text-center -mt-10"
      >
        <button className="py-1.5 px-6 bg-white rounded-lg hover:bg-secondary hover:text-white hover:scale-95 transition-all duration-300 ease-in-out">
          Read More
        </button>
      </Link>
      {/* Navigation Buttons */}
      <div className="w-full flex justify-center lg:justify-end items-center px-4 -mt-10 md:-mt-0 z-10 gap-1">
        <div className="flex items-center gap-2">
          <button
            className="text-3xl text-gray-400 hover:text-white transition"
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
            className="text-3xl text-gray-400 hover:text-white transition"
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
        <hr className="hidden lg:block w-1/2 border-gray-400 " />
      </div>
    </div>
  )
}

export default NewsAndInsights
