"use client"

import { closeIcon, searchIcon } from "@/utils/icon"
import {
  helpfulLinksList,
  informationList,
  servicesList,
} from "@/utils/resources"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

const SearchMenu = ({ handleSearchMenu, searchMenuRef }) => {
  const [query, setQuery] = useState("")
  const [filteredResults, setFilteredResults] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const searchData = [
    ...informationList,
    ...helpfulLinksList,
    ...servicesList,
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us/company" },
    { name: "Blogs", path: "/resources/news-and-insights" },
  ]

  const handleSearch = (e) => {
    const value = e.target.value
    setQuery(value)
    setSelectedIndex(-1) // Reset selection when typing

    if (value.trim() === "") {
      setFilteredResults([])
      return
    }

    const results = searchData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredResults(results)
  }

  const handleSubscribe = async (e) => {
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
        setMessage("Subscription successful!")
      } else {
        setMessage("Subscription failed. Please try again.")
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.")
    }

    setLoading(false)
    setEmail("")
  }

  const handleSelect = (path) => {
    router.push(path)
    setQuery("")
    setFilteredResults([])
    setSelectedIndex(-1)
  }

  const handleKeyDown = (e) => {
    if (filteredResults.length > 0) {
      if (e.key === "ArrowDown") {
        setSelectedIndex((prev) =>
          prev < filteredResults.length - 1 ? prev + 1 : 0
        )
      } else if (e.key === "ArrowUp") {
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredResults.length - 1
        )
      } else if (e.key === "Enter" && selectedIndex !== -1) {
        handleSelect(filteredResults[selectedIndex].path)
      }
    }
  }

  return (
    <div
      ref={searchMenuRef}
      className="fixed inset-0 z-50 flex justify-center items-center px-3 transition-all duration-500 transform"
    >
      <div className="relative py-4 md:px-10 px-4 w-full max-w-screen-lg bg-white rounded-lg shadow-xl border border-secondary min-h-[87vh] md:min-h-[70vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-center p-4 md:p-5">
          <div className="w-full flex justify-center">
            {/* Search Section */}
            <div className="border border-gray-400 rounded flex items-center px-3 w-10/12 sm:w-1/2 max-w-md">
              <span className="text-xl">{searchIcon}</span>
              <input
                type="search"
                className="w-full text-lg font-light border-none focus:ring-0 outline-none bg-transparent px-2 py-1"
                placeholder="Search Here"
                value={query}
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSearchMenu}
          className="absolute top-3 right-3 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-secondary text-white rounded-full text-xs md:text-sm transition-all duration-300 ease-in-out hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {closeIcon}
          <span className="sr-only">Close modal</span>
        </button>

        {/* Modal Body */}
        <div className="flex-grow p-3 md:p-5 space-y-4 max-h-[calc(100vh-250px)] overflow-y-auto scrollbar-hide">
          {/* Suggestions Dropdown */}
          {filteredResults.length > 0 && (
            <ul className="bg-white border border-gray-300 rounded shadow-lg z-10 max-h-40 overflow-y-auto">
              {filteredResults.map((item, index) => (
                <li
                  key={index}
                  className={`p-2 cursor-pointer transition-all duration-200 ${
                    selectedIndex === index
                      ? "bg-gray-200"
                      : "hover:bg-gray-100 focus:bg-gray-200"
                  }`}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => handleSelect(item.path)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSelect(item.path)
                  }}
                  tabIndex={0} // 🔥 Enables keyboard navigation
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Modal Footer (Fixed) */}
        <div className="md:p-4 border-t border-dotted border-gray-400 rounded-b">
          <div className="flex flex-col md:flex-row justify-between gap-7">
            {/* Subscribe Card */}
            <div className="w-full md:w-2/5">
              <form
                onSubmit={handleSubscribe}
                className="space-y-5 md:pe-8 py-3"
              >
                <p className="text-primary text-sm md:text-xl text-left">
                  Stay Updated with Nautilus Highlights
                </p>
                <div className="flex flex-col gap-5">
                  <input
                    type="text"
                    className="border-b border-t-0 border-x-0 border-gray-300 p-2 text-sm md:text-base focus:outline-none focus:ring-0 focus:border-gray-500 appearance-none"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                  <button
                    type="submit"
                    className="self-start py-1.5 px-4 text-sm bg-primary text-white rounded-lg hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out disabled:opacity-50"
                    disabled={loading}
                  >
                    {loading ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
              </form>
              {message && (
                <p className="mt-2 text-sm text-gray-700">{message}</p>
              )}
            </div>

            {/* Suggestion Links */}
            <div className="flex justify-between gap-5 py-3 md:ps-8 md:border-s border-dashed w-full md:w-3/5">
              <ul className="flex flex-col gap-1 text-primary text-sm w-full sm:w-auto">
                <h3 className="underline mb-2 md:mb-3 text-sm">Information</h3>
                {informationList.map(({ name, path }) => (
                  <li key={name}>
                    <Link
                      href={path}
                      className="hover:text-secondary transition-colors duration-300"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="flex flex-col gap-1 text-primary text-sm w-full sm:w-auto">
                <h3 className="underline mb-2 md:mb-3 text-sm">
                  Helpful Links
                </h3>
                {helpfulLinksList.map(({ name, path }) => (
                  <li key={name}>
                    <Link
                      href={path}
                      className="hover:text-secondary transition-colors duration-300"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="flex flex-col gap-1 text-primary text-sm w-full sm:w-auto">
                <h3 className="underline mb-2 md:mb-3 text-sm">Our Services</h3>
                {servicesList.map(({ name, path }) => (
                  <li key={name}>
                    <Link
                      href={`${path}`}
                      className="hover:text-secondary transition-colors duration-300"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchMenu
