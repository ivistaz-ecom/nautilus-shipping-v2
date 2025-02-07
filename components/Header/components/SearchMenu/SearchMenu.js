"use client"

import { closeIcon, searchIcon } from "@/utils/icon"
import {
  helpfulLinksList,
  informationList,
  servicesList,
} from "@/utils/resources"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

const SearchMenu = ({ handleSearchMenu, searchMenuRef }) => {
  const [query, setQuery] = useState("")
  const [filteredResults, setFilteredResults] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const router = useRouter()

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
      <div className="relative py-4 px-10 w-full max-w-screen-lg bg-white rounded-lg shadow-xl border border-secondary h-[70vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-center p-4 md:p-5">
          <div className="space-y-1 w-full flex justify-center">
            {/* Search Section */}
            <div className="border border-gray-400 rounded self-start w-1/2 flex items-center px-3">
              <span className="text-xl">{searchIcon}</span>
              <input
                type="search"
                className="w-full text-lg font-light border-none focus:ring-0 outline-none"
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
          className="absolute top-3 right-3 text-white bg-secondary hover:bg-primary rounded-full text-sm w-8 h-8 flex justify-center items-center"
        >
          {closeIcon}
          <span className="sr-only">Close modal</span>
        </button>

        {/* Modal Body */}
        <div className="flex-grow p-4 md:p-5 space-y-4 max-h-[calc(100vh-250px)] overflow-y-auto scrollbar-hide">
          {/* Suggestions Dropdown */}
          {filteredResults.length > 0 && (
            <ul className="bg-white border border-gray-300 rounded shadow-lg z-10 max-h-40 overflow-y-auto scrollbar-hide">
              {filteredResults.map((item, index) => (
                <li
                  key={item.path}
                  className={`p-2 cursor-pointer ${
                    selectedIndex === index
                      ? "bg-gray-200"
                      : "hover:bg-gray-100"
                  }`}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => handleSelect(item.path)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Modal Footer (Fixed) */}
        <div className="p-4 border-t border-dotted border-gray-400 rounded-b">
          <div className="flex justify-between">
            {/* Subscribe Card */}
            <div className="space-y-5 pe-8 py-3 w-2/5">
              <p className="text-primary text-xl">
                Stay Updated with Nautilus Highlights
              </p>
              <div className="flex flex-col gap-7">
                <input
                  type="text"
                  className="border-b border-t-0 border-x-0 border-gray-300 p-1.5 focus:outline-none focus:ring-0 focus:border-gray-500 appearance-none"
                  placeholder="Email"
                />
                <button className="self-start py-1.5 px-4 bg-primary text-white rounded-lg hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Suggestion Links */}
            <div className="flex justify-between py-3 ps-8 border-s border-dotted w-3/5">
              <ul className="flex flex-col gap-1 text-primary text-sm">
                <h3 className="underline mb-3">Information</h3>
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

              <ul className="flex flex-col gap-1 text-primary text-sm">
                <h3 className="underline mb-3">Helpful Links</h3>
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

              <ul className="flex flex-col gap-1 text-primary text-sm">
                <h3 className="underline mb-3">Our Services</h3>
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
