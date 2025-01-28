import React from "react"
import FAQAccordion from "./FAQAccordion"

const FAQs = () => {
  return (
    <div className="py-14 min-h-[60vh]">
      <div className="max-w-screen-xl w-full mx-auto space-y-10">
        <h2 className="text-6xl text-[#2F2F2F] font-light">
          Frequently Asked Questions
        </h2>
        <div className="px-10">
          <FAQAccordion />
        </div>
      </div>
    </div>
  )
}

export default FAQs
