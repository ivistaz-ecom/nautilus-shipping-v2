import React from "react"
import FAQAccordion from "./FAQAccordion"

const FAQs = () => {
  return (
    <div className="py-14 min-h-[60vh] px-4 sm:px-6">
      <div className="max-w-screen-xl w-full mx-auto space-y-8 sm:space-y-10">
        <h2 className="text-3xl sm:text-5xl md:text-6xl text-[#2F2F2F] font-light text-center sm:text-left">
          Frequently Asked Questions
        </h2>
        <div className="px-4 sm:px-10">
          <FAQAccordion />
        </div>
      </div>
    </div>
  )
}

export default FAQs
