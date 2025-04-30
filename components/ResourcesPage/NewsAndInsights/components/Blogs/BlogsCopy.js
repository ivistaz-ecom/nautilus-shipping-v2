"use client"

import { searchIcon } from "@/utils/icon"
import { useEffect, useState } from "react"
import BlogsItem from "./BlogsItem"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

const BlogsCopy = () => {
  const [activeTab, setActiveTab] = useState("All")
  const [blogsList, setBlogsList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [selectedBlog, setSelectedBlog] = useState(null)

  const categoryList = [
    "All",
    "Business",
    "Compliance",
    "Crewing",
    "Insights",
    "Shipping",
    "Sustainability",
    "Technical",
    "Technology",
    "Training & Skill Development",
    "Wellbeing & Safety",
  ]

  const getCategoryName = (categoryIds) => {
    const categoryMap = {
      100: "Business",
      107: "Compliance",
      103: "Crewing",
      108: "Insights",
      102: "Shipping",
      105: "Sustainability",
      101: "Technical",
      106: "Technology",
      104: "Training & Skill Development",
      99: "Wellbeing & Safety",
      //109: "Latest News",
    }

    return categoryIds
      .map((id) => categoryMap[id] || "Uncategorized")
      .filter((category) => category !== "Uncategorized")
  }

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const page = 100
        const response = await fetch(
          `https://docs.nautilusshipping.com/wp-json/wp/v2/posts?_embed&per_page=${page}`
        )
        if (!response.ok) throw new Error("Failed to fetch blogs")

        const data = await response.json()
        //console.log(data)

        const fetchImageUrl = async (mediaId) => {
          const res = await fetch(
            `https://docs.nautilusshipping.com/wp-json/wp/v2/media/${mediaId}`
          )
          const mediaData = await res.json()
          return mediaData.source_url
        }

        const formattedBlogs = (
          await Promise.all(
            data.map(async (post) => {
              const imageUrl = post.featured_media
                ? await fetchImageUrl(post.featured_media)
                : "/news-and-insights/image01.png"

              const formattedDate = new Date(post.date).toISOString()

              return {
                id: post.id,
                title: post.title.rendered,
                slug: post.slug,
                date: formattedDate,
                categories: getCategoryName(post.categories),
                imageUrl,
                longDesc: post.content.rendered,
              }
            })
          )
        ).filter((blog) => blog.id !== 10236)
        //console.log(formattedBlogs)

        setBlogsList(formattedBlogs)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  // const getUniqueTabs = () => {
  //   const allCategories = blogsList.flatMap((item) => item.categories)
  //   return ["All", ...[...new Set(allCategories)]]
  // }

  const handleViewMore = () => {
    setPage((prev) => prev + 1) // Load the next page
  }

  const getFilteredBlogs = () => {
    if (selectedBlog) return [selectedBlog]
    if (activeTab === "All") return blogsList
    return blogsList.filter((item) => item.categories.includes(activeTab))
  }

  const handleSearch = (e) => {
    const query = e.target.value
    setSearchQuery(query)

    if (!query.trim()) {
      setFilteredSuggestions([])
      setSelectedBlog(null)
      return
    }

    const suggestions = blogsList.filter((blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase())
    )

    setFilteredSuggestions(suggestions)
  }

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) =>
        prev < filteredSuggestions.length - 1 ? prev + 1 : prev
      )
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev))
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      handleSelectSuggestion(filteredSuggestions[selectedIndex])
    }
  }

  const handleSelectSuggestion = (blog) => {
    setSearchQuery(blog.title)
    setFilteredSuggestions([])
    setSelectedBlog(blog)
  }

  return (
    <>
      <div className="py-7 md:py-14 px-3 md:px-4">
        <div className="max-w-screen-lg mx-auto w-full flex flex-col gap-5 md:gap-10">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl font-light tracking-wide">
                Insights
              </h2>
              <p className="text-base sm:text-lg font-light tracking-wide">
                Clear perspectives on News and Tech
              </p>
            </div>

            {/* Search Section */}
            <div className="relative w-full md:w-[350px]">
              <div className="border border-gray-400 rounded h-10 flex items-center px-3 relative">
                <span className="text-xl">{searchIcon}</span>
                <input
                  type="search"
                  className="w-full text-lg font-light border-none focus:ring-0 h-full"
                  placeholder="Search Here"
                  value={searchQuery}
                  onChange={handleSearch}
                  onKeyDown={handleKeyDown}
                />
              </div>

              {/* Suggestions Dropdown */}
              {filteredSuggestions.length > 0 && (
                <ul className="absolute mt-1 w-full bg-white border border-gray-300 shadow-lg z-20 rounded-md max-h-60 overflow-y-auto">
                  {filteredSuggestions.map((blog, index) => (
                    <li
                      key={blog.id}
                      className={`p-2 cursor-pointer ${
                        selectedIndex === index ? "bg-gray-200" : ""
                      }`}
                      onClick={() => handleSelectSuggestion(blog)}
                      onMouseEnter={() => setSelectedIndex(index)}
                    >
                      <span dangerouslySetInnerHTML={{ __html: blog.title }} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Tab Section */}

          <div className="space-y-3 mt-5 sm:mt-10">
            <h3 className="text-2xl sm:text-3xl font-light">Filters</h3>
            <ul className="flex flex-wrap items-center gap-3">
              {categoryList.map((tab, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      setActiveTab(tab)
                      setSelectedBlog(null)
                      setSearchQuery("") // Reset search on tab change
                    }}
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
          {!loading && !error && (
            <BlogsItem getFilteredBlogs={getFilteredBlogs} />
          )}

          {/* Loading & Error Handling */}
          {loading && (
            <div className="flex flex-col items-center">
              <DotLottieReact
                src="https://lottie.host/0863177f-7940-46bc-8ca8-f5340a79be6e/yMs0H818YY.lottie"
                loop
                autoplay
                style={{ width: "250px", height: "250px" }}
              />
            </div>
          )}
          {error && <p className="text-center text-red-500">{error}</p>}
        </div>
      </div>

      {/* <hr className="border-gray-400 w-full" /> */}
    </>
  )
}

export default BlogsCopy
