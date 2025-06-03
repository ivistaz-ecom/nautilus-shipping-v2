"use client"

import Header from "@/components/Header/Header"
import { useEffect, useState } from "react"

const domainName = "https://www.nautilusshipping.com"

const Posts = ({ slug, data }) => {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  if (!data || data.length === 0 || !data[0]) {
    return <div className="text-black">No blog found.</div>
  }

  // Use the first post for SEO (if multiple, you can adjust as needed)
  const post = data[0]
  const metaTitle =
    post.acf?.meta_title ||
    post.title?.rendered?.replace(/<[^>]+>/g, "") ||
    "Blog"
  const metaDescription =
    post.acf?.meta_description_ ||
    "Explore the latest insights, updates, and knowledge from Nautilus Shipping."
  const canonical = `${domainName}/news-and-insights/${slug}`
  const metaImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    `${domainName}/logo.png`

  // SEO meta tags and schema using next/head
  const metaTags = (
    <head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="index,follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="article:modified_time" content={post.modified || ""} />
      <link rel="canonical" href={canonical} />
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "blogs",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": canonical,
            },
            headline: metaTitle,
            description: metaDescription,
            image: [metaImage],
            author: {
              "@type": "Organization",
              name: post.author_name || "Nautilus Shipping",
            },
            publisher: {
              "@type": "Organization",
              name: "Nautilus Shipping",
              logo: {
                "@type": "ImageObject",
                url: `${domainName}/logo.png`,
              },
            },
            datePublished: post.date,
            dateModified: post.modified,
          }),
        }}
      />
    </head>
  )

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = (scrollTop / scrollHeight) * 100
      setScrollPercentage(scrollProgress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {metaTags}

      <div className="fixed top-0 left-0 w-full h-1.5 z-50">
        <div
          className="bg-secondary h-1.5"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>

      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />

      <div className="pt-[87px]">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 bg-primary p-10">
          {/* Title and Date Section */}
          <div className="flex flex-col gap-3 w-full">
            <h1
              className="text-2xl sm:text-3xl font-light text-white text-center"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </div>
        </div>
      </div>

      <hr className="border-gray-400 w-full" />

      <div className="flex flex-col md:flex-row justify-between relative overflow-hidden">
        {/* Blog Content Section */}
        <div className="py-7 max-w-screen-lg mx-auto flex flex-col gap-10 px-4 mt-5">
          {/* Blog Description (rendering raw HTML content) */}
          <div
            className="text-lg text-gray-700 leading-relaxed blog-content"
            dangerouslySetInnerHTML={{
              __html: post.content.rendered,
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Posts
