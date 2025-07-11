"use client"

import { searchIcon } from "@/utils/icon"
import { useEffect, useRef, useState } from "react"
import BlogsItem from "./BlogsItem"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

const Blogs = () => {
  const [activeTab, setActiveTab] = useState("All")
  const [blogsList, setBlogsList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [hasMore, setHasMore] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const perPage = 4
  const pageRef = useRef(1)

  const categoryMap = {
    100: "Business",
    107: "Compliance",
    103: "Crewing",
    108: "Insights",
    102: "Shipping",
    105: "Sustainability",
    101: "Technical",
    //106: "Technology",
    104: "Training & Skill Development",
    99: "Wellbeing & Safety",
  }

  const reverseCategoryMap = Object.fromEntries(
    Object.entries(categoryMap).map(([k, v]) => [v, +k])
  )

  const getCategoryName = (categoryIds) =>
    categoryIds
      .map((id) => categoryMap[id] || "Uncategorized")
      .filter((c) => c !== "Uncategorized")

  const fetchBlogs = async ({ reset = false, search = "" } = {}) => {
    try {
      if (!reset) setIsSubmitting(true)
      else setLoading(true)

      // Declare currentPage BEFORE using it
      const currentPage = reset ? 1 : pageRef.current

      // Only apply category filter when NOT searching
      const categoryParam =
        activeTab !== "All" && !search
          ? `&categories=${reverseCategoryMap[activeTab]}`
          : ""

      const searchParam = search ? `&search=${encodeURIComponent(search)}` : ""

      const response = await fetch(
        `https://docs.nautilusshipping.com/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${currentPage}${categoryParam}${searchParam}`
      )

      if (!response.ok) {
        if (response.status === 400) {
          setHasMore(false)
          return
        }
        throw new Error("Failed to fetch blogs")
      }

      const data = await response.json()

      const fetchImageUrl = async (mediaId) => {
        const res = await fetch(
          `https://docs.nautilusshipping.com/wp-json/wp/v2/media/${mediaId}`
        )
        const mediaData = await res.json()
        return mediaData.source_url
      }

      const formattedBlogs = await Promise.all(
        data.map(async (post) => {
          const imageUrl = post.featured_media
            ? await fetchImageUrl(post.featured_media)
            : "/news-and-insights/image01.png"

          return {
            id: post.id,
            title: post.title.rendered,
            slug: post.slug,
            date: new Date(post.date).toISOString(),
            categories: getCategoryName(post.categories),
            imageUrl,
            longDesc: post.content.rendered,
          }
        })
      )

      if (reset) {
        setBlogsList(formattedBlogs)
        pageRef.current = 2
      } else {
        setBlogsList((prev) => [...prev, ...formattedBlogs])
        pageRef.current += 1
      }

      setHasMore(formattedBlogs.length === perPage)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    fetchBlogs({ reset: true })
  }, [activeTab])

  const getFilteredBlogs = () => {
    if (selectedBlog) return [selectedBlog]
    return blogsList
  }

  const handleSearch = async (e) => {
    const query = e.target.value
    setSearchQuery(query)
    setSelectedBlog(null)
    setSelectedIndex(-1)

    if (!query.trim()) {
      // Reset to current category's blogs when search is cleared
      await fetchBlogs({ reset: true })
      return
    }

    // Fetch across all categories when searching
    await fetchBlogs({ reset: true, search: query })
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

  const categoryList = [
    "All",
    "Business",
    "Compliance",
    "Crewing",
    "Insights",
    "Shipping",
    "Sustainability",
    "Technical",
    //"Technology",
    "Training & Skill Development",
    "Wellbeing & Safety",
  ]

  return (
    <div className="py-7 md:py-14 px-3 md:px-4">
      <div className="max-w-screen-lg mx-auto w-full flex flex-col gap-5 md:gap-10">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-light tracking-wide">
              Insights
            </h2>
            <p className="text-base sm:text-lg font-light tracking-wide">
              Clear perspectives on News and Tech
            </p>
          </div>
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

        <div className="space-y-3 mt-5 sm:mt-10">
          <h3 className="text-2xl sm:text-3xl font-light">Filters</h3>
          <ul className="flex flex-wrap items-center gap-3">
            {categoryList.map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => {
                    setActiveTab(tab)
                    setBlogsList([])
                    pageRef.current = 1
                    setSelectedBlog(null)
                    setSearchQuery("")
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

        {!loading && !error && (
          <BlogsItem
            getFilteredBlogs={getFilteredBlogs}
            onViewMore={() => fetchBlogs({ reset: false })}
            hasMore={hasMore}
            isSubmitting={isSubmitting}
          />
        )}

        {loading && (
          <div className="flex justify-center items-center py-10">
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
  )
}

export default Blogs
