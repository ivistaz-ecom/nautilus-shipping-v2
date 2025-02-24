"use client"

import { whereWeServeData } from "@/utils/data"
import { useState } from "react"
import Image from "next/image"

const WhereWeServe = () => {
  const [hoverIndex, setHoverIndex] = useState(null)

  return (
    <div className="max-w-screen-lg mx-auto pb-3 flex-col md:flex-row justify-between items-end gap-6 hidden md:flex">
      <h3 className="text-4xl text-primary">
        Where <br /> We Serve
      </h3>

      <ul className="flex flex-wrap gap-3 justify-center md:justify-end">
        {whereWeServeData.map((item, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="flex flex-col justify-end h-[140px] cursor-pointer relative overflow-hidden">
              <Image
                src={item.image}
                width={120}
                height={100}
                alt={item.location}
                className={`w-full absolute bottom-1 transform transition-transform duration-500 ease-in-out ${
                  index === hoverIndex ? "translate-y-0" : "translate-y-full"
                }`}
              />
              <span
                className={`px-4 w-[120px] border rounded text-center z-10 transition-all duration-300 ease-in-out ${
                  index === hoverIndex
                    ? "bg-secondary text-white border-secondary"
                    : "bg-white text-primary border-primary"
                }`}
              >
                {item.location}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WhereWeServe
