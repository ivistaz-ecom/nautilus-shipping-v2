import { ourLocationData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const OurLocations = () => {
  return (
    <>
      <div className="max-w-screen-xl w-full mx-auto px-4 pt-10 md:pt-0">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-light text-center sm:text-left">
          Our Locations
        </h1>
      </div>
      <hr className="border-gray-400 w-full mt-5" />

      {/* Location Items */}
      <div className="max-w-screen-xl mx-auto w-full py-10 px-4 md:px-10">
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-5">
          {ourLocationData.map((item, index) => {
            return (
              <li
                key={index}
                className="bg-primary text-white rounded-md p-4 flex flex-col gap-3 cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:bg-secondary"
              >
                <h3 className="text-lg sm:text-xl font-light text-center">
                  {item.city}
                </h3>
                <Image
                  src={item.imageUrl}
                  width={281}
                  height={193}
                  alt={item.city}
                  className="w-full"
                />
                <div className="flex gap-3 items-start">
                  <Image
                    src="/contact-us/location.svg"
                    width={30}
                    height={30}
                    alt="location"
                    className="w-[25px] sm:w-[30px] h-[25px] sm:h-[30px]"
                  />
                  <p className="text-xs sm:text-sm font-light">{item.add}</p>
                </div>
                <div className="flex gap-3 items-center">
                  <Image
                    src="/contact-us/call.svg"
                    width={30}
                    height={30}
                    alt="location"
                    className="w-[25px] sm:w-[30px] h-[25px] sm:h-[30px]"
                  />
                  <p className="text-xs sm:text-sm font-light">{item.tel}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default OurLocations
