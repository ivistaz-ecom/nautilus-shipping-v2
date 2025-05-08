"use client"

import BlogsDetails from "@/components/ResourcesPage/NewsAndInsights/components/Blogs/BlogsDetails"
import NextSeo from "@/components/Seo/Seo"
import React, { useEffect, useState } from "react"

export default function BlogDetails(paramsPromise) {
  const { slug } = React.use(paramsPromise.params)
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `https://docs.nautilusshipping.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
        )
        const data = await res.json()
        if (data && data.length > 0) {
          setBlog(data[0])
        }
      } catch (error) {
        console.error("Error fetching blog:", error)
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchBlog()
    }
  }, [slug])

  const seoField = blog && {
    title: blog.acf?.meta_title || blog.title?.rendered,
    description: blog.acf?.meta_descriptions || "",
    path: `/news-and-insights/${blog.slug}`,
    metaImage: "", // optional
    pageType: "WebSite",
  }

  return (
    <>
      {blog && <NextSeo {...seoField} />}
      <BlogsDetails slug={slug} />
    </>
  )
}
