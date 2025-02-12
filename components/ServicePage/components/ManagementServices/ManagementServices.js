import React from "react"
import ServicesAccordion from "./ServicesAccordion"

const ManagementServices = ({ data }) => {
  return (
    <>
      <div className="py-7 md:py-14">
        <div className="max-w-screen-xl w-full mx-auto space-y-5 sm:space-y-10 px-3 sm:px-10">
          <h2 className="text-2xl sm:text-6xl font-light leading-tight md:leading-tight">
            {data.title}
          </h2>
          <div className="sm:px-10">
            <ServicesAccordion servicesList={data.services} />
          </div>
        </div>
      </div>

      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default ManagementServices
