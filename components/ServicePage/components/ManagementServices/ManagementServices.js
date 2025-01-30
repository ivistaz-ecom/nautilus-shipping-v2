import React from "react"
import ServicesAccordion from "./ServicesAccordion"

const ManagementServices = () => {
  return (
    <>
      <div className="py-14 min-h-[60vh]">
        <div className="max-w-screen-xl w-full mx-auto space-y-10 px-4">
          <h2 className="text-6xl font-light leading-tight">
            Our Technical Management <br /> Services Include:
          </h2>
          <div className="px-10">
            <ServicesAccordion />
          </div>
        </div>
      </div>
      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default ManagementServices
