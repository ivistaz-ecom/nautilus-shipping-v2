"use client"

import { useState } from "react"

const Subscribe = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmail("")
    console.log(email)
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
            type="text"
            className="border-b border-t-0 border-x-0 border-gray-300 p-2 w-full sm:w-72 text-xl focus:outline-none focus:ring-0 focus:border-gray-500 appearance-none"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <button
            type="submit"
            className="py-1.5 px-4 bg-primary text-white rounded-lg hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe
