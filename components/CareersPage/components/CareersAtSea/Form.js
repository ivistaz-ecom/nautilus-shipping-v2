"use client"

import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import { useState } from "react"

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
    position: "",
  })

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
      position: "",
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
        <label className="text-gray-500 text-xl">Phone Number</label>
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
    return (
      <div className="flex flex-col gap-2 w-full">
        <label className="text-gray-500 text-xl">Country</label>
        <div className="flex items-center border-b border-gray-300 pb-1">
          <select
            name="country"
            id="country"
            className="bg-transparent text-white/85 text-lg focus:ring-0 border-none focus:outline-none w-full"
            value={formData.country}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, country: e.target.value }))
            }
          >
            <option value="">Select your country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>
        </div>
      </div>
    )
  }

  const renderStateField = () => {
    return (
      <div className="flex flex-col gap-2 w-full">
        <label className="text-gray-500 text-xl">State</label>
        <div className="flex items-center border-b border-gray-300 pb-1">
          <select
            name="state"
            id="state"
            className="bg-transparent text-white/85 text-lg focus:ring-0 border-none focus:outline-none w-full"
            value={formData.state}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, state: e.target.value }))
            }
          >
            <option value="">Select your state</option>
            <option value="India">Karnataka</option>
            <option value="USA">Gujarat</option>
          </select>
        </div>
      </div>
    )
  }

  const renderCityField = () => {
    return (
      <div className="flex flex-col gap-2 w-full">
        <label className="text-gray-500 text-xl">City</label>
        <div className="flex items-center border-b border-gray-300 pb-1">
          <select
            name="city"
            id="city"
            className="bg-transparent text-white/85 text-lg focus:ring-0 border-none focus:outline-none w-full"
            value={formData.city}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, city: e.target.value }))
            }
          >
            <option value="">Select your city</option>
            <option value="India">Bangalore</option>
            <option value="USA">Surat</option>
          </select>
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

  const renderPositionField = () => {
    return (
      <div className="flex flex-col gap-2 w-full">
        <label className="text-gray-500 text-xl">Select Position</label>
        <div className="flex items-center border-b border-gray-300 pb-1">
          <select
            name="position"
            id="position"
            className="bg-transparent text-white/85 text-lg focus:ring-0 border-none focus:outline-none w-full"
            value={formData.city}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, position: e.target.value }))
            }
          >
            <option value="">Select your city</option>
            <option value="India">Bangalore</option>
            <option value="USA">Surat</option>
          </select>
        </div>
      </div>
    )
  }

  const renderChooseAFile = () => {
    return (
      <div className="mt-2">
        {/* <label
          className="block mb-2 text-xl font-medium text-gray-500"
          htmlFor="file_input"
        >
          Upload file
        </label> */}
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          id="file_input"
          type="file"
        />
      </div>
    )
  }

  return (
    <div className="p-10">
      <h4 className="text-sm font-light text-white">
        All fields are mandatory*
      </h4>
      <h3 className="text-[22px] font-light text-white mt-4">
        Submit a CV/Resume{" "}
        <span className="text-base">(Onshore/Shore Job)</span>
      </h3>
      <form className="flex flex-col gap-7 pt-7" onSubmit={handleForm}>
        {renderNameField()}
        <div className="flex justify-between items-end gap-10">
          {renderPhoneField()}
          {renderEmailField()}
        </div>
        <div className="flex justify-between items-end gap-10">
          {renderCountryField()}
          {renderStateField()}
        </div>

        <div className="flex justify-between items-end gap-10">
          {renderCityField()}
          {renderZipCodeField()}
        </div>

        {renderPositionField()}
        {renderChooseAFile()}

        <p className="font-light text-base text-white/80">
          Complete your job application by uploading your resume or CV. Upload
          either DOC, DOCX, PDF, RTF or TXT file types, 4 MB max.
        </p>

        <button
          type="submit"
          className="self-start py-1 px-4 rounded-lg border border-gray-500 text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Form
