"use client"

import { faqsData } from "@/utils/data"
import { useState } from "react"

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div id="accordion-flush">
      {faqsData.map((faq, index) => (
        <div key={index}>
          <h2>
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full py-5 font-medium text-[#2F2F2F] gap-3"
            >
              <span>{faq.ques}</span>
              <svg
                className={`w-3 h-3 transform ease-in-out duration-300 ${
                  openIndex === index ? "" : "rotate-180"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-[500px] py-5" : "max-h-0"
            } border-b border-gray-400`}
          >
            <p className="text-gray-500">{faq.ans}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FAQAccordion
