import React from "react"
import FAQAccordion from "./FAQAccordion"

const FAQs = ({ data }) => {
  return (
    <div className="py-7 sm:py-14 px-4 sm:px-0">
      <div className="max-w-screen-lg w-full mx-auto space-y-8 sm:space-y-10">
        <h2 className="text-3xl sm:text-5xl md:text-6xl text-[#2F2F2F] font-light text-center sm:text-left tracking-wide">
          Frequently Asked Questions
        </h2>
        <div className="px-4">
          <FAQAccordion data={data} />
        </div>
      </div>
    </div>
  )
}

export default FAQs
