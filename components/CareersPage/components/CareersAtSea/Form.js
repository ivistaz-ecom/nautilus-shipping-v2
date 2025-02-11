"use client"

import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import { Country, State, City } from "country-state-city"
import Select from "react-select"
import { useState } from "react"
import { ourPositionList } from "@/utils/resources"

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    vessel: "",
    position: "",
    newPosition: "",
    INDoSNo: "",
    fileName: "No file chosen",
  })

  const getSubOptions = () => {
    const selectedPosition = ourPositionList.find(
      (p) => p.option === formData.position
    )
    return selectedPosition ? selectedPosition.subOption : []
  }

  const handleForm = (e) => {
    e.preventDefault()
    console.log("Form Submitted!")
    console.log(formData)
    setFormData({
      name: "",
      email: "",
      company: "",
      jobTitle: "",
      phone: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
      vessel: "",
      position: "",
      newPosition: "",
      INDoSNo: "",
      fileName: "No file chosen",
    })
  }

  const renderNameField = () => (
    <input
      type="text"
      placeholder="Name"
      className="border-b border-t-0 border-x-0 text-white bg-transparent w-full border-gray-300 ps-0 p-2 text-xl focus:ring-0 focus:border-white"
      value={formData.name}
      onChange={(e) =>
        setFormData((prev) => ({ ...prev, name: e.target.value }))
      }
    />
  )

  const renderEmailField = () => (
    <input
      type="email"
      placeholder="Email"
      className="border-b border-t-0 border-x-0 text-white bg-transparent w-full border-gray-300 ps-0 p-2 text-xl focus:ring-0 focus:border-white"
      value={formData.email}
      onChange={(e) =>
        setFormData((prev) => ({ ...prev, email: e.target.value }))
      }
    />
  )

  const renderPhoneField = () => {
    return (
      <div className="flex flex-col gap-2 w-full">
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
      </div>
    )
  }

  const renderCountryField = () => {
    const countryOptions = Country.getAllCountries().map((c) => ({
      value: c.isoCode,
      label: c.name,
    }))

    return (
      <div className="flex flex-col gap-2 w-full">
        {/* <label className="text-gray-500 text-xl">Country</label> */}
        <div className="flex items-center border-b border-gray-300 pb-1">
          <Select
            options={countryOptions}
            className="w-full text-white/85 text-lg border-none"
            classNamePrefix="react-select"
            placeholder="Select Country"
            value={countryOptions.find((c) => c.value === formData.country)}
            onChange={(selectedOption) =>
              setFormData((prev) => ({
                ...prev,
                country: selectedOption.value,
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
      <div className="flex flex-col gap-2 w-full">
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
      <div className="flex flex-col gap-2 w-full">
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
      </div>
    )
  }

  const renderZipCodeField = () => (
    <input
      type="text"
      placeholder="Zip Code"
      className="border-b border-t-0 border-x-0 text-white bg-transparent w-full border-gray-300 ps-0 p-2 text-xl focus:ring-0 focus:border-white"
      value={formData.zipCode}
      onChange={(e) =>
        setFormData((prev) => ({ ...prev, zipCode: e.target.value }))
      }
    />
  )

  const renderVesselField = () => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {/* <label className="text-gray-500 text-xl">Select Vessel</label> */}
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
            <option value="India">Bangalore</option>
            <option value="USA">Surat</option>
          </select>
        </div>
      </div>
    )
  }

  const renderPositionField = () => {
    return (
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center border-b border-gray-300 pb-1">
          <select
            name="position"
            id="position"
            className="bg-transparent text-white/85 text-lg font-light focus:ring-0 border-none focus:outline-none w-full"
            value={formData.position}
            onChange={(e) =>
              setFormData({ position: e.target.value, newPosition: "" })
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
          Please select your current/previous <br /> Rank/Position.
        </p>
      </div>
    )
  }

  const renderNewPositionField = () => {
    return (
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center border-b border-gray-300 pb-1">
          <select
            name="newPosition"
            id="newPosition"
            className="bg-transparent text-white/85 text-lg font-light focus:ring-0 border-none focus:outline-none w-full"
            value={formData.newPosition}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, newPosition: e.target.value }))
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
          Please select the Rank/Position you want to apply <br /> at Nautilus.
        </p>
      </div>
    )
  }

  const renderChooseAFile = () => {
    const handleFileChange = (event) => {
      const file = event.target.files[0]
      setFormData((prevData) => ({
        ...prevData,
        fileName: file ? file.name : "No file chosen",
      }))
    }
    return (
      <div className="mt-2">
        <div className="cursor-pointer flex items-center w-full border border-gray-300 rounded bg-gray-50">
          <label
            htmlFor="file_input_Ashore"
            className="px-4 py-2 text-white bg-secondary cursor-pointer rounded-l hover:bg-secondary/95 w-1/3"
          >
            Choose a File
          </label>

          <input
            id="file_input_Ashore"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />

          <span className="px-4 py-2 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-800 w-full">
            {formData.fileName}
          </span>
        </div>
        <p className="font-light text-xs text-white/80 mt-1">
          Complete your job application by uploading your resume or CV. Upload
          either DOC, DOCX, PDF, RTF or TXT file types, 4 MB max.
        </p>
      </div>
    )
  }

  const renderINDoSNoield = () => (
    <input
      type="text"
      placeholder="INDoS No."
      className="border-b border-t-0 border-x-0 text-white bg-transparent w-full border-gray-300 ps-0 p-2 text-xl focus:ring-0 focus:border-white"
      value={formData.INDoSNo}
      onChange={(e) =>
        setFormData((prev) => ({ ...prev, INDoSNo: e.target.value }))
      }
    />
  )

  return (
    <div className="p-6 sm:p-10">
      <h4 className="text-sm font-light text-white">
        All fields are mandatory*
      </h4>
      <h3 className="text-xl sm:text-xl font-light text-white mt-4">
        Submit a CV/Resume <span className="text-base">(Offshore Job)</span>
      </h3>
      <form className="flex flex-col gap-5 sm:gap-7 pt-5" onSubmit={handleForm}>
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
