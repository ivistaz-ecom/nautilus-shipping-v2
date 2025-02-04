"use client"

import { plusIcon } from "@/utils/icon"
import { ourFleetList } from "@/utils/resources"
import { useState } from "react"

const OurFleet = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className="py-14 space-y-7">
      <h2 className="text-7xl font-light text-center">Our Fleet at a Glance</h2>
      <div className="bg-primary h-[60vh]">
        <div className="max-w-screen-lg mx-auto w-full">
          <ul className="flex flex-col gap-5 w-full py-14">
            {ourFleetList.map((item, index) => (
              <li key={index} className="border-b border-gray-400 pb-5">
                <div
                  className="flex justify-between items-center text-white cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-3xl">{item.title}</span>
                  <button
                    className={`text-xl transform transition-transform duration-300 ease-in-out ${
                      openIndex === index ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    {plusIcon}
                  </button>
                </div>

                {/* Accordion content */}
                {openIndex === index && (
                  <div className="mt-5 flex justify-between items-center transition-all duration-300 ease-in-out">
                    <span className="text-9xl text-white">{item.number}</span>
                    <ul className="text-xl text-white space-y-2 list-disc">
                      {item.category.map((cat, i) => (
                        <li key={i}>{cat}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OurFleet
