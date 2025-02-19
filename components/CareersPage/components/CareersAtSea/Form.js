"use client"

import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import { Country, State, City } from "country-state-city"
import Select from "react-select"
import { useState } from "react"
import { ourPositionList } from "@/utils/resources"
import { vesselList } from "@/utils/data"

const Form = () => {
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    vessel: "",
    position: "",
    newPosition: "",
    INDoSNo: "",
    file: null,
    fileName: "No file chosen",
  })

  const getSubOptions = () => {
    const selectedPosition = ourPositionList.find(
      (p) => p.option === formData.position
    )
    return selectedPosition ? selectedPosition.subOption : []
  }

  const validateForm = () => {
    let newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required."
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required."
    if (!formData.email.trim()) newErrors.email = "Email is required."
    if (!formData.country) newErrors.country = "Country is required."
    if (!formData.state) newErrors.state = "State is required."
    if (!formData.city.trim()) newErrors.city = "City is required."
    if (!formData.zipCode.trim()) newErrors.zipCode = "Zip code is required."
    if (!formData.vessel) newErrors.vessel = "Vessel is required."
    if (!formData.position) newErrors.position = "Position is required."
    if (!formData.newPosition)
      newErrors.newPosition = "New position is required."
    if (!formData.INDoSNo) newErrors.INDoSNo = "INDoS Number is required."
    if (!formData.file) newErrors.file = "CV/Resume is required."

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleForm = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    console.log("Form Submitted!", formData)

    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
      vessel: "",
      position: "",
      newPosition: "",
      INDoSNo: "",
      file: null,
      fileName: "No file chosen",
    })

    setErrors({})
  }

  const renderNameField = () => (
    <div className="w-full">
      <input
        type="text"
        placeholder="Name"
        className="border-b border-t-0 border-x-0 text-white bg-transparent w-full border-gray-300 ps-0 p-2 text-xl focus:ring-0 focus:border-white"
        value={formData.name}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <div className="h-4">
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">*{errors.name}</p>
        )}
      </div>
    </div>
  )

  const renderEmailField = () => (
    <div className="w-full">
      <input
        type="email"
        placeholder="Email"
        className="border-b border-t-0 border-x-0 text-white bg-transparent w-full border-gray-300 ps-0 p-2 text-xl focus:ring-0 focus:border-white"
        value={formData.email}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <div className="h-4">
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">*{errors.email}</p>
        )}
      </div>
    </div>
  )

  const renderPhoneField = () => {
    return (
      <div className="flex flex-col w-full">
        {/* <label className="text-gray-500 text-xl">Phone Number</label> */}
        <div className="flex items-center border-b border-gray-300 pb-1">
          <PhoneInput
            international
            defaultCountry="IN"
            value={formData.phone}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, phone: value }))
            }
            className="custom-phone-input w-full text-xl text-white"
          />
        </div>
        <div className="h-4">
          {errors.phone && (
            <span className="text-red-500 text-xs">*{errors.phone}</span>
          )}
        </div>
      </div>
    )
  }

  const renderCountryField = () => {
    const countryOptions = Country.getAllCountries().map((c) => ({
      value: c.isoCode,
      label: c.name,
    }))

    return (
      <div className="flex flex-col w-full">
        <div className="flex items-center border-b border-gray-300 pb-1">
          <Select
            options={countryOptions}
            className="w-full text-white/85 text-lg border-none"
            classNamePrefix="react-select"
            placeholder="Select Country"
            value={
              countryOptions.find((c) => c.value === formData.country) || null
            } // Ensure value is reset
            onChange={(selectedOption) =>
              setFormData((prev) => ({
                ...prev,
                country: selectedOption ? selectedOption.value : "", // Handle empty case
              }))
            }
            styles={{
              control: (base) => ({
                ...base,
                background: "transparent",
                border: "none",
                boxShadow: "none",
              }),
              singleValue: (base) => ({
                ...base,
                color: "white",
              }),
              dropdownIndicator: (base) => ({
                ...base,
                color: "white",
                ":hover": {
                  color: "white",
                },
              }),
              menu: (base) => ({
                ...base,
                background: "#333",
              }),
              option: (base, { isFocused }) => ({
                ...base,
                background: isFocused ? "#008E9C" : "#fff",
                color: isFocused ? "#fff" : "#00222F",
              }),
              input: (base) => ({
                ...base,
                color: "white",
              }),
              placeholder: (base) => ({
                ...base,
                color: "white",
                fontWeight: "100",
              }),
            }}
          />
        </div>
        <div className="h-4">
          {errors.country && (
            <span className="text-red-500 text-xs">*{errors.country}</span>
          )}
        </div>
      </div>
    )
  }

  const renderStateField = () => {
    const stateOptions = formData.country
      ? State.getStatesOfCountry(formData.country).map((s) => ({
          value: s.isoCode,
          label: s.name,
        }))
      : []

    return (
      <div className="flex flex-col w-full">
        {/* <label className="text-gray-500 text-xl">State</label> */}
        <div className="flex items-center border-b border-gray-300 pb-1">
          <Select
            options={stateOptions}
            className="w-full text-white/85 text-lg focus:ring-0 border-none focus:outline-none"
            classNamePrefix="react-select"
            placeholder="Select State"
            value={stateOptions.find((s) => s.value === formData.state) || null}
            onChange={(selectedOption) =>
              setFormData((prev) => ({
                ...prev,
                state: selectedOption ? selectedOption.value : "",
              }))
            }
            isDisabled={!formData.country}
            styles={{
              control: (base) => ({
                ...base,
                background: "transparent",
                border: "none",
                boxShadow: "none",
              }),
              singleValue: (base) => ({
                ...base,
                color: "white",
              }),
              dropdownIndicator: (base) => ({
                ...base,
                color: "white",
                ":hover": {
                  color: "white",
                },
              }),
              menu: (base) => ({
                ...base,
                background: "#333",
              }),
              option: (base, { isFocused }) => ({
                ...base,
                background: isFocused ? "#008E9C" : "#fff",
                color: isFocused ? "#fff" : "#00222F",
              }),
              input: (base) => ({
                ...base,
                color: "white",
              }),
              placeholder: (base) => ({
                ...base,
                color: "white",
                fontWeight: "100",
              }),
            }}
          />
        </div>
        <div className="h-4">
          {errors.state && (
            <span className="text-red-500 text-xs">*{errors.state}</span>
          )}
        </div>
      </div>
    )
  }

  const renderCityField = () => {
    const cityOptions =
      formData.state && formData.country
        ? City.getCitiesOfState(formData.country, formData.state).map((c) => ({
            value: c.name,
            label: c.name,
          }))
        : [] // Ensure cityOptions is always an array

    return (
      <div className="flex flex-col w-full">
        {/* <label className="text-gray-500 text-xl">City</label> */}
        <div className="flex items-center border-b border-gray-300 pb-1">
          <Select
            options={cityOptions}
            className="w-full text-white/85 text-lg focus:ring-0 border-none focus:outline-none"
            classNamePrefix="react-select"
            placeholder="Select City"
            value={cityOptions.find((c) => c.value === formData.city) || null} // Ensure .find() is used on an array
            onChange={(selectedOption) =>
              setFormData((prev) => ({
                ...prev,
                city: selectedOption ? selectedOption.value : "",
              }))
            }
            isDisabled={!formData.state} // Disable if no state is selected
            styles={{
              control: (base) => ({
                ...base,
                background: "transparent",
                border: "none",
                boxShadow: "none",
              }),
              singleValue: (base) => ({
                ...base,
                color: "white",
              }),
              dropdownIndicator: (base) => ({
                ...base,
                color: "white",
                ":hover": {
                  color: "white",
                },
              }),
              menu: (base) => ({
                ...base,
                background: "#333",
              }),
              option: (base, { isFocused }) => ({
                ...base,
                background: isFocused ? "#008E9C" : "#fff",
                color: isFocused ? "#fff" : "#00222F",
              }),
              input: (base) => ({
                ...base,
                color: "white",
              }),
              placeholder: (base) => ({
                ...base,
                color: "white",
                fontWeight: "100",
              }),
            }}
          />
        </div>
        <div className="h-4">
          {errors.city && (
            <span className="text-red-500 text-xs">*{errors.city}</span>
          )}
        </div>
      </div>
    )
  }

  const renderZipCodeField = () => (
    <div className="w-full">
      <input
        type="text"
        placeholder="Zip Code"
        className="border-b border-t-0 border-x-0 text-white bg-transparent w-full border-gray-300 ps-0 p-2 text-xl focus:ring-0 focus:border-white"
        value={formData.zipCode}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, zipCode: e.target.value }))
        }
      />
      <div className="h-4">
        {errors.zipCode && (
          <p className="text-red-500 text-xs mt-1">*{errors.zipCode}</p>
        )}
      </div>
    </div>
  )

  const renderVesselField = () => {
    return (
      <div className="flex flex-col w-full">
        <div className="flex items-center border-b border-gray-300 pb-1">
          <select
            name="vessel"
            id="vessel"
            className="bg-transparent text-white/85 text-lg font-light focus:ring-0 border-none focus:outline-none w-full"
            value={formData.vessel}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, vessel: e.target.value }))
            }
          >
            <option value="">Select Vessel</option>
            {vesselList.map((vessel, index) => (
              <option key={index} value={vessel}>
                {vessel}
              </option>
            ))}
          </select>
        </div>
        <div className="h-4">
          {errors.vessel && (
            <p className="text-red-500 text-xs mt-1">*{errors.vessel}</p>
          )}
        </div>
      </div>
    )
  }

  const renderPositionField = () => {
    return (
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center border-b border-gray-300 pb-1">
          <select
            name="position"
            id="position"
            className="bg-transparent text-white/85 text-lg font-light focus:ring-0 border-none focus:outline-none w-full"
            value={formData.position || ""} // Ensure it doesn't become undefined
            onChange={
              (e) =>
                setFormData((prev) => ({
                  ...prev,
                  position: e.target.value,
                  newPosition: "",
                })) // Update only the necessary fields
            }
          >
            <option value="">Select Position</option>
            {ourPositionList.map((pos, index) => (
              <option key={index} value={pos.option}>
                {pos.option}
              </option>
            ))}
          </select>
        </div>
        <p className="font-light text-xs text-white/80 mt-1">
          Please select your current/previous Rank/Position.
        </p>
      </div>
    )
  }

  const renderNewPositionField = () => {
    return (
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center border-b border-gray-300 pb-1">
          <select
            name="newPosition"
            id="newPosition"
            className="bg-transparent text-white/85 text-lg font-light focus:ring-0 border-none focus:outline-none w-full"
            value={formData.newPosition || ""} // Ensure it doesn't become undefined
            onChange={
              (e) =>
                setFormData((prev) => ({
                  ...prev,
                  newPosition: e.target.value,
                })) // Update only the necessary field
            }
            disabled={!formData.position} // Disable if no position selected
          >
            <option value="">Select New Position</option>
            {getSubOptions().map((subPos, index) => (
              <option key={index} value={subPos}>
                {subPos}
              </option>
            ))}
          </select>
        </div>
        <p className="font-light text-xs text-white/80 mt-1">
          Please select the Rank/Position you want to apply at Nautilus.
        </p>
      </div>
    )
  }

  const renderChooseAFile = () => {
    const handleFileChange = (event) => {
      const file = event.target.files[0]

      if (file) {
        const allowedTypes = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "text/plain",
          "application/rtf",
        ]
        const maxSize = 4 * 1024 * 1024 // 4MB

        if (!allowedTypes.includes(file.type)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            file: "Invalid file type. Upload DOC, DOCX, PDF, RTF, or TXT.",
          }))
          setFormData((prevData) => ({
            ...prevData,
            file: null,
            fileName: "No file chosen",
          }))
          return
        }

        if (file.size > maxSize) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            file: "File size exceeds 4MB limit.",
          }))
          setFormData((prevData) => ({
            ...prevData,
            file: null,
            fileName: "No file chosen",
          }))
          return
        }

        setErrors((prevErrors) => ({ ...prevErrors, file: "" }))
        setFormData((prevData) => ({
          ...prevData,
          file, // Store the actual file object
          fileName: file.name,
        }))
      }
    }

    return (
      <div className="mt-2 w-full">
        <div className="cursor-pointer flex items-center w-full border border-gray-300 rounded bg-gray-50">
          <label
            htmlFor="file_input_AtSea"
            className="px-3 py-2 text-white bg-secondary cursor-pointer rounded-l hover:bg-secondary/95 w-1/3 text-sm sm:text-base"
          >
            Choose a File
          </label>

          <input
            id="file_input_AtSea"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />

          <span className="px-4 py-2 text-xs sm:text-sm text-gray-900 dark:text-white bg-transparent dark:bg-gray-800 w-full truncate">
            {formData.fileName}
          </span>
        </div>

        {/* Error message */}
        {errors.file && (
          <span className="text-red-500 text-sm mt-1 block">
            * {errors.file}
          </span>
        )}

        <p className="font-light text-[10px] sm:text-xs text-white/80 mt-1">
          Complete your job application by uploading your resume or CV. Upload
          either DOC, DOCX, PDF, RTF or TXT file types, 4 MB max.
        </p>
      </div>
    )
  }

  const renderINDoSNoield = () => (
    <div className="w-full">
      <input
        type="text"
        placeholder="INDoS No."
        className="border-b border-t-0 border-x-0 text-white bg-transparent w-full border-gray-300 ps-0 p-2 text-xl focus:ring-0 focus:border-white"
        value={formData.INDoSNo}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, INDoSNo: e.target.value }))
        }
      />
      <div className="h-4">
        {errors.INDoSNo && (
          <span className="text-red-500 text-xs">*{errors.INDoSNo}</span>
        )}
      </div>
    </div>
  )

  return (
    <div className="p-3 sm:p-10">
      <h4 className="text-sm font-light text-white">
        All fields are mandatory*
      </h4>
      <h3 className="text-xl sm:text-xl font-light text-white mt-4">
        Submit a CV/Resume <span className="text-base">(Offshore Job)</span>
      </h3>
      <form className="flex flex-col gap-5 pt-5" onSubmit={handleForm}>
        {renderNameField()}

        <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-10">
          {renderPhoneField()}
          {renderEmailField()}
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-10">
          {renderCountryField()}
          {renderStateField()}
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-10">
          {renderCityField()}
          {renderZipCodeField()}
        </div>

        {renderVesselField()}

        <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-10">
          {renderPositionField()}
          {renderNewPositionField()}
        </div>

        {renderINDoSNoield()}
        {renderChooseAFile()}

        <button
          type="submit"
          className="self-start py-1.5 px-6 rounded-lg border border-gray-500 text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
