import { ourLocationData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const OurLocations = () => {
  return (
    <div className="">
      <div className="max-w-screen-xl w-full mx-auto px-4">
        <h1 className="text-8xl font-light">Our Locations</h1>
      </div>
      <hr className="border-gray-400 w-full mt-5" />
      {/* Location Items */}

      <div className="max-w-screen-lg mx-auto w-full py-10">
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ourLocationData.map((item, index) => {
            return (
              <li
                key={index}
                className="bg-primary text-white rounded-md p-4 flex flex-col gap-3 cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:bg-secondary"
              >
                <h3 className="text-[22px] font-light text-center">
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
                    className="w-[30px] h-[30px]"
                  />
                  <p className="text-xs font-light">{item.add}</p>
                </div>
                <div className="flex gap-3 items-center">
                  <Image
                    src="/contact-us/call.svg"
                    width={30}
                    height={30}
                    alt="location"
                    className="w-[30px] h-[30px]"
                  />
                  <p className="text-sm font-light">{item.tel}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <hr className="border-gray-400 w-full" />
    </div>
  )
}

export default OurLocations
