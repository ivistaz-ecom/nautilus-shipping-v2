"use client"

import { plusIcon } from "@/utils/icon"
import { useState } from "react"

const ServicesAccordion = ({ servicesList }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div id="accordion-flush" className="max-w-screen-lg mx-auto">
      {servicesList.map((faq, index) => (
        <div key={index}>
          <h2>
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full py-5 gap-3"
            >
              <span className="text-3xl">{faq.ques}</span>
              <span
                className={`transform ease-in-out duration-300 text-3xl ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              >
                {plusIcon}
              </span>
            </button>
          </h2>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-[500px] py-5" : "max-h-0"
            } border-b border-gray-400`}
          >
            <p className="text-gray-600">{faq.ans}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ServicesAccordion
