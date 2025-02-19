"use client"

import { searchIcon } from "@/utils/icon"
import { useEffect, useState } from "react"
import BlogsItem from "./BlogsItem"

const Blogs = () => {
  const [activeTab, setActiveTab] = useState("All")
  const [blogsList, setBlogsList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Function to map category IDs to names
  const getCategoryName = (categoryIds) => {
    const categoryMap = {
      7: "Sustainability",
      41: "Technical",
      68: "Wellbeing & Safety",
      9: "Technology",
    }

    return categoryIds
      .map((id) => categoryMap[id] || "Uncategorized")
      .filter((category) => category !== "Uncategorized")
  }

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://docs.nautilusshipping.com/wp-json/wp/v2/posts"
        )
        if (!response.ok) throw new Error("Failed to fetch blogs")

        const data = await response.json()
        console.log(data)

        // Fetch featured media URLs for each blog post
        const fetchImageUrl = async (mediaId) => {
          const res = await fetch(
            `https://docs.nautilusshipping.com/wp-json/wp/v2/media/${mediaId}`
          )
          const mediaData = await res.json()
          return mediaData.source_url
        }

        // Transform API response into required format
        const formattedBlogs = await Promise.all(
          data.map(async (post) => {
            const imageUrl = post.featured_media
              ? await fetchImageUrl(post.featured_media)
              : "/news-and-insights/image01.png" // Fallback image if no featured media

            return {
              id: post.id,
              title: post.title.rendered,
              slug: post.slug,
              date: new Date(post.date).toLocaleDateString(),
              categories: getCategoryName(post.categories),
              imageUrl,
              longDesc: post.content.rendered,
            }
          })
        )

        setBlogsList(formattedBlogs)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  const getUniqueTabs = () => {
    const allCategories = blogsList.flatMap((item) => item.categories)
    return ["All", ...new Set(allCategories)]
  }

  const getFilteredBlogs = (category = activeTab) => {
    if (category === "All") return blogsList
    return blogsList.filter((item) => item.categories.includes(category))
  }

  return (
    <>
      <div className="py-14 px-4">
        <div className="max-w-screen-lg mx-auto w-full flex flex-col gap-10">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl font-light tracking-wide">
                Blogs
              </h2>
              <p className="text-base sm:text-lg font-light tracking-wide">
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

          {/* Loading & Error Handling */}
          {loading && <p className="text-center">Loading blogs...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          {/* Tab Section */}
          {!loading && !error && (
            <>
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
            </>
          )}
        </div>
      </div>

      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default Blogs
