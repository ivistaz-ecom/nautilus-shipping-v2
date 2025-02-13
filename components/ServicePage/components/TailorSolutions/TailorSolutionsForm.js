"use client"

import { tailorSolutionsList } from "@/utils/resources"
import { useState } from "react"

const TailorSolutionsForm = () => {
  const [formData, setFormData] = useState({
    vesselType: "",
    vesselAge: "",
    operationalChallenge: "",
    message: "",
  })

  const handleForm = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData({
      vesselType: "",
      vesselAge: "",
      operationalChallenge: "",
    })
  }

  const renderVesselTypeField = () => {
    return (
      <div className="flex items-center border-b border-gray-300 pb-1">
        <select
          name="vesselType"
          id="vesselType"
          className="bg-transparent text-white/85 text-lg font-light focus:ring-0 border-none focus:outline-none w-full"
          value={formData.vesselType}
          onChange={(e) =>
            setFormData({ ...formData, vesselType: e.target.value })
          }
        >
          <option value="">Vessel Type</option>
          {tailorSolutionsList[0].vesselType.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    )
  }

  const renderVesselAgeField = () => {
    return (
      <div className="flex items-center border-b border-gray-300 pb-1">
        <select
          name="vesselAge"
          id="vesselAge"
          className="bg-transparent text-white/85 text-lg font-light focus:ring-0 border-none focus:outline-none w-full"
          value={formData.vesselAge}
          onChange={(e) =>
            setFormData({ ...formData, vesselAge: e.target.value })
          }
        >
          <option value="">Vessel Age</option>
          {tailorSolutionsList[0].vesselAge.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    )
  }

  const renderOperationalChallengeField = () => {
    return (
      <div className="flex items-center border-b border-gray-300 pb-1">
        <select
          name="operationalChallenge"
          id="operationalChallenge"
          className="bg-transparent text-white/85 text-lg font-light focus:ring-0 border-none focus:outline-none w-full"
          value={formData.operationalChallenge}
          onChange={(e) =>
            setFormData({ ...formData, operationalChallenge: e.target.value })
          }
        >
          <option value="">Operational Challenge</option>
          {tailorSolutionsList[0].operationalChallenge.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    )
  }

  const renderMessageField = () => (
    <div className="flex flex-col gap-2 w-full md:w-3/4">
      <label className="text-white/80 text-base md:text-xl font-light">
        Tell us more about your specific requirements or challenges.
      </label>

      <textarea
        name="message"
        id="message"
        cols={50}
        rows={5}
        className="rounded text-primary text-lg focus:ring-0 border border-gray-300 p-2 focus:outline-none"
        value={formData.message}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, message: e.target.value }))
        }
      ></textarea>
    </div>
  )

  return (
    <form onSubmit={handleForm} className="space-y-10">
      <div className="flex flex-col gap-10 w-full md:w-3/5">
        {renderVesselTypeField()}
        {renderVesselAgeField()}
        {renderOperationalChallengeField()}
      </div>
      {renderMessageField()}

      <button
        type="submit"
        className="self-start py-1.5 px-6 rounded-lg border border-gray-500 text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out"
      >
        Submit
      </button>
    </form>
  )
}

export default TailorSolutionsForm
