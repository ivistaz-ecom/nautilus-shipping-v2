"use client"

import { useState } from "react"

import axios from "axios"

const Subscribe = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    const formData = new FormData()
    formData.append("email", email)

    try {
      const response = await axios.post(
        "https://docs.nautilusshipping.com/wp-json/contact-form-7/v1/contact-forms/10031/feedback",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )

      if (response.data.status === "mail_sent") {
        setMessage(
          "Thank you for subscribing! Stay tuned for the latest updates, insights, and industry news straight to your inbox."
        )
      } else {
        setMessage("Subscription failed. Please try again.")
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.")
    }

    setLoading(false)
    setEmail("")
  }

  return (
    <div className="py-14 px-4">
      <div className="max-w-screen-lg w-full mx-auto">
        <h3 className="text-3xl text-primary tracking-wide">
          Subscribe to Stay Updated
        </h3>
        <form
          className="flex flex-col items-start gap-6 sm:gap-8 sm:p-4"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            className="border-b border-t-0 border-x-0 border-gray-300 p-2 w-full sm:w-72 text-xl focus:outline-none focus:ring-0 focus:border-gray-500 appearance-none"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <button
            type="submit"
            className="py-1.5 px-4 bg-primary text-white rounded-lg hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
      </div>
    </div>
  )
}

export default Subscribe
