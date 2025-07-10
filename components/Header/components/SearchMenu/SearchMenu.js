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
import { useState, useEffect } from "react"

const allLinks = [
  ...informationList,
  ...helpfulLinksList,
  ...servicesList,
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us/company" },
  { name: "Blogs", path: "/resources/news-and-insights" },
]

const SearchMenu = ({ handleSearchMenu, searchMenuRef }) => {
  const router = useRouter()

  const [query, setQuery] = useState("")
  const [filteredResults, setFilteredResults] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  // Debounced search
  useEffect(() => {
    if (!query.trim()) {
      setFilteredResults([])
      return
    }

    const timeout = setTimeout(() => {
      const results = allLinks.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredResults(results)
    }, 200)

    return () => clearTimeout(timeout)
  }, [query])

  const handleSelect = (path) => {
    router.push(path)
    setQuery("")
    setFilteredResults([])
    setSelectedIndex(-1)
  }

  const handleKeyDown = (e) => {
    if (!filteredResults.length) return

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

  const handleSubscribe = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    const formData = new FormData()
    formData.append("email", email)

    try {
      const { data } = await axios.post(
        "https://docs.nautilusshipping.com/wp-json/contact-form-7/v1/contact-forms/10031/feedback",
        formData
      )

      setMessage(
        data.status === "mail_sent"
          ? "Subscription successful!"
          : "Subscription failed. Please try again."
      )
      setEmail("")
    } catch {
      setMessage("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      ref={searchMenuRef}
      className="fixed inset-0 z-50 flex justify-center items-center px-3"
    >
      <div className="relative py-4 md:px-10 px-4 w-full max-w-screen-lg bg-white rounded-lg shadow-xl border border-secondary min-h-[87vh] md:min-h-[70vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-center p-4 md:p-5">
          <div className="w-full flex justify-center">
            <div className="border border-gray-400 rounded flex items-center px-3 w-10/12 sm:w-1/2 max-w-md">
              <span className="text-xl">{searchIcon}</span>
              <input
                type="search"
                className="w-full text-lg font-light border-none bg-transparent px-2 py-1 focus:outline-none focus:ring-0"
                placeholder="Search Here"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setSelectedIndex(-1)
                }}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={handleSearchMenu}
          className="absolute top-3 right-3 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-secondary text-white rounded-full text-xs md:text-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {closeIcon}
          <span className="sr-only">Close modal</span>
        </button>

        {/* Body */}
        <div className="flex-grow p-3 md:p-5 space-y-4 max-h-[calc(100vh-250px)] overflow-y-auto scrollbar-hide">
          {filteredResults.length > 0 && (
            <ul className="bg-white border border-gray-300 rounded shadow-lg z-10 max-h-40 overflow-y-auto">
              {filteredResults.map((item, index) => (
                <li
                  key={index}
                  className={`p-2 cursor-pointer transition-all duration-200 ${
                    selectedIndex === index
                      ? "bg-gray-200"
                      : "hover:bg-gray-100"
                  }`}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => handleSelect(item.path)}
                  tabIndex={0}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="md:p-4 border-t border-dotted border-gray-400 rounded-b">
          <div className="flex flex-col md:flex-row justify-between gap-7">
            {/* Subscribe */}
            <div className="w-full md:w-2/5">
              <form
                onSubmit={handleSubscribe}
                className="space-y-5 md:pe-8 py-3"
              >
                <p className="text-primary text-sm md:text-xl text-left">
                  Stay Updated with Nautilus Highlights
                </p>
                <input
                  type="email"
                  className="border-0 border-b border-gray-300 p-1.5 text-sm md:text-base focus:outline-none mr-3"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <button
                  type="submit"
                  className="py-1.5 px-4 text-sm bg-primary text-white rounded-lg hover:bg-secondary hover:scale-95 transition-all duration-300 disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
                {message && <p className="text-sm text-gray-700">{message}</p>}
              </form>
            </div>

            {/* Links */}
            <div className="flex gap-5 py-3 md:ps-8 md:border-s border-dashed w-full md:w-3/5">
              {[informationList, helpfulLinksList, servicesList].map(
                (list, i) => (
                  <ul
                    key={i}
                    className="flex flex-col gap-1 text-primary text-sm w-full sm:w-auto"
                  >
                    <h3 className="underline mb-2 text-sm">
                      {["Information", "Helpful Links", "Our Services"][i]}
                    </h3>
                    {list.map(({ name, path }) => (
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
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchMenu
