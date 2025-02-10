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
    message: "",
    consent: false,
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
      message: "",
      consent: false,
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

  const renderCompanyField = () => (
    <input
      type="text"
      placeholder="Company"
      className="border-b border-t-0 border-x-0 text-white bg-transparent w-full border-gray-300 ps-0 p-2 text-xl focus:ring-0 focus:border-white"
      value={formData.company}
      onChange={(e) =>
        setFormData((prev) => ({ ...prev, company: e.target.value }))
      }
    />
  )

  const renderJobTitleField = () => (
    <input
      type="text"
      placeholder="Job Title"
      className="border-b border-t-0 border-x-0 text-white bg-transparent w-full border-gray-300 ps-0 p-2 text-xl focus:ring-0 focus:border-white"
      value={formData.jobTitle}
      onChange={(e) =>
        setFormData((prev) => ({ ...prev, jobTitle: e.target.value }))
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

  const renderMessageField = () => (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-gray-500 text-xl">Message</label>

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

  const renderConsentField = () => (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-white/80 text-base md:text-xl">Consent*</label>

      <div className="flex flex-row items-start md:items-center gap-2">
        <input
          type="checkbox"
          name="consent"
          id="consent"
          className="focus:ring-0 accent-secondary w-5 h-5 cursor-pointer"
          checked={formData.consent} // Ensures checkbox state is controlled
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, consent: e.target.checked }))
          }
          aria-checked={formData.consent}
          aria-labelledby="consent-label"
        />
        <label
          htmlFor="consent"
          id="consent-label"
          className="text-sm md:text-lg text-white/80 cursor-pointer leading-tight"
        >
          I can confirm that I have read and accept the{" "}
          <span className="text-secondary">Privacy Policy</span>.
        </label>
      </div>
    </div>
  )

  return (
    <div className="p-10">
      <h3 className="text-lg md:text-xl font-light text-white text-center md:text-left">
        Let’s navigate towards excellence together!
      </h3>
      <form className="flex flex-col gap-7 pt-7" onSubmit={handleForm}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10">
          {renderNameField()}
          {renderEmailField()}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10">
          {renderCompanyField()}
          {renderJobTitleField()}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-5 md:gap-10">
          {renderPhoneField()}
          {renderCountryField()}
        </div>

        {renderMessageField()}
        {renderConsentField()}

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
