"use client"

import { useState } from "react"

const TailorSolutionsForm = () => {
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    vesselType: "",
    operationalChallenge: "",
    message: "",
  })

  const validateForm = () => {
    let newErrors = {}

    if (!formData.vesselType.trim())
      newErrors.vesselType = "Vessel type is required"
    if (!formData.operationalChallenge.trim())
      newErrors.operationalChallenge = "Operational Challenge is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleForm = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    console.log("Form Submitted!", formData)

    setFormData({
      vesselType: "",
      operationalChallenge: "",
      message: "",
    })

    setErrors({})
  }

  const renderVesselTypeField = () => {
    return (
      <div className="w-full">
        <input
          type="text"
          placeholder="Vessel Type"
          className="border-b border-t-0 border-x-0 text-white bg-transparent w-full border-gray-300 ps-0 p-2 text-xl focus:ring-0 focus:border-white"
          value={formData.vesselType}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, vesselType: e.target.value }))
          }
        />

        <div className="h-4">
          {errors.vesselType && (
            <p className="text-red-500 text-xs mt-1">*{errors.vesselType}</p>
          )}
        </div>
      </div>
    )
  }

  const renderOperationalChallengeField = () => {
    return (
      <div className="w-full">
        <input
          type="text"
          placeholder="Operational Challenge"
          className="border-b border-t-0 border-x-0 text-white bg-transparent w-full border-gray-300 ps-0 p-2 text-xl focus:ring-0 focus:border-white"
          value={formData.operationalChallenge}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              operationalChallenge: e.target.value,
            }))
          }
        />

        <div className="h-4">
          {errors.operationalChallenge && (
            <p className="text-red-500 text-xs mt-1">
              *{errors.operationalChallenge}
            </p>
          )}
        </div>
      </div>
    )
  }

  const renderMessageField = () => (
    <div className="flex flex-col gap-2 w-full md:w-3/5">
      <label className="text-white/80 text-base md:text-xl font-light">
        Tell us more about your specific requirements or challenges.
      </label>

      <textarea
        name="message"
        id="tailorSolutionsMessage"
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
    <form onSubmit={handleForm} className="space-y-7">
      <div className="flex flex-col gap-7 w-full md:w-1/2">
        {renderVesselTypeField()}
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
