"use client"

import BlogsDetails from "@/components/ResourcesPage/NewsAndInsights/components/Blogs/BlogsDetails"
import NextSeo from "@/components/Seo/Seo"
import React, { useEffect, useState } from "react"

// export async function generateMetadata({ params }) {
//   const { slug } = await params // no need to await params

//   const res = await fetch(
//     `https://docs.nautilusshipping.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
//   )
//   const data = await res.json()

//   if (!data || data.length === 0) {
//     return {
//       title: "Blog Not Found | Nautilus Shipping",
//       description: "The blog you are looking for is not available.",
//       alternates: {
//         canonical: `https://www.nautilusshipping.com/resources/news-and-insights/${slug}`,
//       },
//     }
//   }

//   const blog = data[0]

//   const imageUrl = blog._embedded?.[
//     "wp:featuredmedia"
//   ]?.[0]?.source_url?.startsWith("http")
//     ? blog._embedded["wp:featuredmedia"][0].source_url
//     : `https://docs.nautilusshipping.com${blog._embedded["wp:featuredmedia"][0].source_url}`

//   const canonicalUrl = `https://www.nautilusshipping.com/resources/news-and-insights/${slug}`

//   return {
//     title: blog.acf?.meta_title || blog.title.rendered,
//     description: blog.acf?.meta_descriptions || "Read more about this topic.",
//     openGraph: {
//       title: blog.acf?.meta_title || blog.title.rendered,
//       description: blog.acf?.meta_descriptions || "Read more about this topic.",
//       url: canonicalUrl,
//       type: "article",
//       images: [
//         {
//           url: imageUrl,
//           width: 1200,
//           height: 630,
//           alt: blog.title.rendered,
//         },
//       ],
//     },
//     alternates: {
//       canonical: canonicalUrl,
//     },
//   }
// }

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
