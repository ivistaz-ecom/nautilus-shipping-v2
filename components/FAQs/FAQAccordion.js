"use client"

//import { faqsData } from "@/utils/data"
import { useState } from "react"

const FAQAccordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div id="accordion-flush">
      {data.map((faq, index) => (
        <div key={index}>
          <h2>
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full py-5 font-medium text-primary gap-3"
            >
              <span className="text-left">{faq.ques}</span>
              <svg
                className={`w-3 h-3 flex-shrink-0 transform ease-in-out duration-300 ${
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
            <p className="text-sm text-primary tracking-wide">{faq.ans}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FAQAccordion
