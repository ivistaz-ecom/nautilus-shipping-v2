"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const BlogsItem = ({ getFilteredBlogs }) => {
  const [visibleBlogs, setVisibleBlogs] = useState(4) // Initial blogs to show

  const allBlogs = getFilteredBlogs()
  const visibleBlogItems = allBlogs.slice(0, visibleBlogs)

  const handleViewMore = () => {
    setVisibleBlogs((prev) => prev + 4) // Load 4 more blogs
  }

  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {visibleBlogItems.map((item, index) => (
          <li key={index} className="h-full">
            <Link href={`/resources/news-and-insights/${item.slug}`} passHref>
              <div className="bg-primary flex flex-col rounded-xl h-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                {/* Image Section */}
                <div className="w-full">
                  <Image
                    src={item.imageUrl}
                    width={552}
                    height={226}
                    alt={item.title}
                    className="rounded-t-xl w-full h-[226px] object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-3 flex flex-col gap-4 flex-grow">
                  <h2
                    className="text-white text-base md:text-xl"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></h2>
                  <span className="text-white text-sm font-light">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* View More Button */}
      {visibleBlogs < allBlogs.length && (
        <div className="mt-6 text-center">
          <button
            onClick={handleViewMore}
            className="py-1.5 px-4 rounded-lg text-primary border border-primary hover:bg-secondary hover:text-white hover:border-secondary hover:scale-95 transition-all duration-300 ease-in-out"
          >
            View More
          </button>
        </div>
      )}
    </div>
  )
}

export default BlogsItem
