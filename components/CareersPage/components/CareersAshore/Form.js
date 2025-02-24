"use client"

import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import { Country, State, City } from "country-state-city"
import Select from "react-select"
import { useState } from "react"
import { ashorePositionList, ourPositionList } from "@/utils/resources"
import Image from "next/image"

const Form = () => {
  const [errors, setErrors] = useState({})
  const [showPopup, setShowPopup] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    position: "",
    file: null,
    fileName: "No file chosen",
  })

  const validateForm = () => {
    let newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required."
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required."
    if (!formData.email.trim()) newErrors.email = "Email is required."
    if (!formData.country) newErrors.country = "Country is required."
    if (!formData.state) newErrors.state = "State is required."
    if (!formData.city.trim()) newErrors.city = "City is required."
    if (!formData.zipCode.trim()) newErrors.zipCode = "Zip code is required."
    if (!formData.position) newErrors.position = "Position is required."
    if (!formData.file) newErrors.file = "CV/Resume is required."

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleForm = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setShowPopup(true)
    console.log("Form Submitted!", formData)

    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
      position: "",
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
        className="border-b border-t-0 border-x-0 text-white bg-transparent w-full border-gray-300 ps-0 p-2 text-lg focus:ring-0 focus:border-white"
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
        className="border-b border-t-0 border-x-0 text-white bg-transparent w-full border-gray-300 ps-0 p-2 text-lg focus:ring-0 focus:border-white"
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
        {/* <label className="text-gray-500 text-lg">Phone Number</label> */}
        <div className="flex items-center border-b border-gray-300 pb-1">
          <PhoneInput
            international
            defaultCountry="IN"
            value={formData.phone}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, phone: value }))
            }
            className="custom-phone-input w-full text-lg text-white"
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
        {/* <label className="text-gray-500 text-lg">State</label> */}
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
        {/* <label className="text-gray-500 text-lg">City</label> */}
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
        className="border-b border-t-0 border-x-0 text-white bg-transparent w-full border-gray-300 ps-0 p-2 text-lg focus:ring-0 focus:border-white"
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

  const renderPositionField = () => {
    return (
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center border-b border-gray-300 pb-1">
          <select
            name="position"
            id="position"
            className="bg-transparent text-white/85 text-lg font-light focus:ring-0 border-none focus:outline-none w-full"
            value={formData.position || ""}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                position: e.target.value,
              }))
            }
          >
            <option value="">Select Position</option>
            {ashorePositionList.map((pos, index) => (
              <option key={index} value={pos}>
                {pos}
              </option>
            ))}
          </select>
        </div>
        <div className="h-4">
          {errors.position && (
            <p className="text-red-500 text-xs mt-1">*{errors.position}</p>
          )}
        </div>
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
            htmlFor="file_input_Ashore"
            className="px-3 py-2 text-white bg-secondary cursor-pointer rounded-l hover:bg-secondary/95 w-1/3 text-sm sm:text-base"
          >
            Choose a File
          </label>

          <input
            id="file_input_Ashore"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />

          <span className="px-4 py-2 text-xs sm:text-sm text-gray-900 dark:text-white bg-transparent dark:bg-gray-800 w-full truncate block overflow-hidden whitespace-nowrap text-ellipsis">
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

  return (
    <div className="p-3 sm:p-10 h-full flex flex-col justify-center">
      {/* Mandatory Notice */}
      <h4 className="text-sm font-light text-white">
        All fields are mandatory*
      </h4>

      {/* Form Heading */}
      <h3 className="text-xl sm:text-2xl font-light text-white mt-4">
        Submit a CV/Resume{" "}
        <span className="text-base">(Onshore/Shore Job)</span>
      </h3>

      {/* Form Section */}
      <form className="flex flex-col gap-3 pt-6 sm:pt-7" onSubmit={handleForm}>
        {renderNameField()}

        {/* Responsive Two-Column Layout */}
        <div className="flex flex-col sm:flex-row justify-between items-end gap-4 sm:gap-10">
          {renderPhoneField()}
          {renderEmailField()}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-end gap-4 sm:gap-10">
          {renderCountryField()}
          {renderStateField()}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-end gap-4 sm:gap-10">
          {renderCityField()}
          {renderZipCodeField()}
        </div>

        {renderPositionField()}
        {renderChooseAFile()}

        {/* Submit Button */}
        <button
          type="submit"
          className="self-start py-1.5 px-6 rounded-lg border border-gray-500 text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>

      {/* Thank You Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center relative">
            <Image src="/sent.png" width={200} height={100} alt="sent" />
            <h2 className="text-xl font-semibold text-primary">Thank You!</h2>
            <p className="text-primary mt-2">
              Your message has been submitted successfully.
            </p>
            <button
              type="button"
              onClick={() => setShowPopup(false)}
              className="absolute -top-3 -right-3 text-white bg-secondary hover:bg-primary rounded-full text-sm w-8 h-8 flex justify-center items-center"
            >
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                aria-hidden="true"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Form
