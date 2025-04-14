"use client"

import Image from "next/image"
import React, { useEffect } from "react"
import { initFlowbite } from "flowbite"

const pinLocations = [
  { top: 284, left: 650, title: "Dubai", content: "Middle East Office" },
  { top: 291, left: 713, title: "Dubai", content: "Middle East Office" },
  { top: 311, left: 727, title: "Dubai", content: "Middle East Office" },
  { top: 318, left: 745, title: "Dubai", content: "Middle East Office" },
  { top: 331, left: 782, title: "Dubai", content: "Middle East Office" },
  { top: 339, left: 855, title: "Dubai", content: "Middle East Office" },
]

const OurLocationsNew = () => {
  useEffect(() => {
    initFlowbite()
  }, [])

  return (
    <>
      <div className="w-full mx-auto px-4 pt-7 md:pt-14">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-light text-center">
          Our Locations
        </h1>
      </div>
      <hr className="border-gray-400 w-full mt-5" />

      {/* Location Items */}
      <div className="bg-primary mx-auto py-10 px-4 md:px-10">
        <div className="relative w-full max-w-6xl mx-auto">
          <Image
            src="/world-map.svg"
            alt="Map"
            width={1000}
            height={600}
            className="w-full h-[600px]"
          />

          {pinLocations.map((pin, idx) => (
            <div key={idx}>
              <button
                data-popover-target={`popover-${idx}`}
                type="button"
                className="absolute"
                style={{
                  top: pin.top,
                  left: pin.left,
                  transform: "translate(-50%, -100%)",
                }}
              >
                <Image
                  src="/location-pin.svg"
                  alt="Location Pin"
                  width={24}
                  height={24}
                />
              </button>

              <div
                data-popover
                id={`popover-${idx}`}
                role="tooltip"
                className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
              >
                <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {pin.title}
                  </h3>
                </div>
                <div className="px-3 py-2">
                  <p>{pin.content}</p>
                </div>
                <div data-popper-arrow></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default OurLocationsNew
