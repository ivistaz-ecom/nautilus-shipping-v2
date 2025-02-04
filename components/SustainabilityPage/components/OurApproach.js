"use client"

import { ourApproachList } from "@/utils/resources"
import { useState } from "react"

const OurApproach = () => {
  const [points, setPoints] = useState(ourApproachList[0] || {})

  return (
    <>
      <div className="pt-14 px-4">
        <div className="max-w-screen-xl mx-auto w-full space-y-10">
          <h2 className="text-5xl leading-tight">
            Our Approach to <br /> Sustainable Shipping
          </h2>

          <div className="border-t border-gray-400 w-full flex flex-col md:flex-row justify-between">
            {/* List Container */}
            <div className="w-full md:w-[400px]">
              <ul>
                {ourApproachList.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setPoints(item)}
                    className={`cursor-pointer py-5 px-3 border-r border-gray-400 text-3xl flex ${
                      index < ourApproachList.length - 1 ? "border-b" : ""
                    } ${
                      points.title === item.title
                        ? "bg-primary text-white"
                        : "bg-transparent text-black"
                    }`}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Container */}
            <div className="p-5 self-center w-full md:w-3/4 h-[300px] overflow-hidden">
              <h3 className="text-2xl">{points.desc}</h3>
              <ul className="space-y-3 list-disc text-xl font-light p-5">
                {points.points.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default OurApproach
