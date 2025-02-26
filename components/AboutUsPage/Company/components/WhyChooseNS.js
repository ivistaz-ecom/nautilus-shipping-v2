"use client"

import { WhyChooseNSList } from "@/utils/resources"
import { useState } from "react"

const WhyChooseNS = () => {
  const [activeIndex, setActiveIndex] = useState(0) // First item open by default

  return (
    <>
      <div className="py-7 md:py-14 px-3 md:px-4">
        <div className="max-w-screen-lg w-full mx-auto flex flex-col gap-10">
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-light text-left tracking-wider">
            Why Choose <br className="hidden md:block" /> Nautilus Shipping?
          </h2>

          <ul className="flex flex-wrap justify-center md:justify-start gap-5 lg:grid lg:grid-cols-4">
            {WhyChooseNSList.map((item, index) => (
              <li
                key={index}
                className="bg-primary rounded-lg w-full h-auto md:h-[300px] cursor-pointer overflow-hidden shadow-xl shadow-secondary"
                data-aos="flip-left"
                data-aos-delay={index * 200}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(0)} // Reset to first item when not hovered
              >
                <div className="p-5 flex flex-col h-full justify-end text-white gap-4">
                  <h3
                    className="text-2xl font-light"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></h3>

                  <hr
                    className={`border-white transition-opacity duration-300 ease-in-out ${
                      activeIndex === index
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  />

                  <p
                    className={`text-base font-[100] tracking-wide overflow-hidden transition-all duration-500 ease-in-out ${
                      activeIndex === index
                        ? "opacity-100 max-h-40 pb-5"
                        : "opacity-0 max-h-0"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default WhyChooseNS
