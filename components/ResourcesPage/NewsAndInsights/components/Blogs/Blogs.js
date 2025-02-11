"use client"

import { searchIcon } from "@/utils/icon"
import { blogsList } from "@/utils/resources"
import Image from "next/image"

import { useState } from "react"
import BlogsItem from "./BlogsItem"

const Blogs = () => {
  const [activeTab, setActiveTab] = useState("All")

  const getUniqueTabs = () => {
    return ["All", ...new Set(blogsList.map((item) => item.category))]
  }

  const getFilteredBlogs = () => {
    return activeTab === "All"
      ? blogsList
      : blogsList.filter((item) => item.category === activeTab)
  }

  return (
    <>
      <div className="py-14 px-4">
        <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-10">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl font-light">Blogs</h2>
              <p className="text-base sm:text-xl font-light">
                The most recent articles, press releases,{" "}
                <br className="hidden sm:block" />
                reports and case studies
              </p>
            </div>

            {/* Search Section */}
            <div className="border border-gray-400 rounded w-full md:w-[350px] h-10 flex items-center px-3">
              <span className="text-xl">{searchIcon}</span>
              <input
                type="search"
                className="w-full text-lg font-light border-none focus:ring-0 h-full"
                placeholder="Search Here"
              />
            </div>
          </div>

          {/* Tab Section */}
          <div className="space-y-3 mt-10">
            <h3 className="text-2xl sm:text-3xl font-light">Filters</h3>
            <ul className="flex flex-wrap items-center gap-3">
              {getUniqueTabs().map((tab, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveTab(tab)}
                    className={`border border-secondary px-4 py-1 rounded transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-secondary text-white"
                        : "hover:bg-secondary hover:text-white hover:border-secondary"
                    }`}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Blogs Section */}
          <BlogsItem getFilteredBlogs={getFilteredBlogs} />
        </div>
      </div>

      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default Blogs
