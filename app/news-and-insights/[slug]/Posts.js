"use client"

import React, { useEffect, useState } from "react"
import Header from "@/components/Header/Header"

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"

import { facebookIcon, linkedInIcon, xIcon, linkIcon } from "@/utils/icon"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import Image from "next/image"

const domainName = "https://www.nautilusshipping.com"

const Posts = ({ slug, data }) => {
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const [copySuccess, setCopySuccess] = useState(false)

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
  const blogUrl = `${domainName}/news-insights/${slug}`

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

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const handleCopyLink = () => {
    navigator.clipboard.writeText(blogUrl)
    setCopySuccess(true)
    setTimeout(() => {
      setCopySuccess(false)
    }, 3000)
  }

  const getReadingTime = (htmlContent, wpm = 200) => {
    if (!htmlContent) return 0

    // Remove HTML tags
    const text = htmlContent.replace(/<[^>]*>/g, " ")
    const wordCount = text.trim().split(/\s+/).length

    // Calculate time and round up to nearest minute
    return Math.ceil(wordCount / wpm)
  }

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

      <div className="pt-24 md:pt-28 pb-7 px-3 md:px-6 lg:px-4 max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
          {/* Title and Date Section */}
          <div className="flex flex-col gap-3 w-full md:w-2/5">
            {/* Categories */}
            {/* <ul className="flex flex-wrap gap-3">
              {blog.categories.map((category, i) => (
                <li key={i} className="px-3 py-1 border rounded text-xs">
                  {category}
                </li>
              ))}
            </ul> */}

            <h1
              className="text-2xl sm:text-3xl font-light text-primary"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            <p className="text-xs sm:text-sm">
              {getReadingTime(post.content.rendered)} min read
            </p>
            <p className="text-xs sm:text-sm">{formattedDate}</p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              src={metaImage}
              width={570}
              height={348}
              alt={post.title.rendered}
              className="rounded-lg w-full h-auto md:h-[348px] object-cover"
            />
          </div>
        </div>
      </div>

      <hr className="border-gray-400 w-full" />

      <div className="flex flex-col md:flex-row justify-between relative overflow-hidden">
        {/* Social Media Icons */}
        <div className="flex gap-3 absolute md:left-20 md:top-20 left-4 top-4 md:flex-col flex-row">
          <LinkedinShareButton url={blogUrl} title={post.title.rendered}>
            <button className="p-1 rounded-lg border border-gray-500 hover:bg-secondary hover:text-white hover:scale-95 transition-all duration-300 ease-in-out">
              {linkedInIcon}
            </button>
          </LinkedinShareButton>
          {/* <button className="p-1 rounded-lg border border-gray-500 hover:bg-secondary hover:text-white hover:scale-95 transition-all duration-300 ease-in-out">
            {instagramIcon}
          </button> */}
          <FacebookShareButton url={blogUrl} title={post.title.rendered}>
            <button className="p-1 rounded-lg border border-gray-500 hover:bg-secondary hover:text-white hover:scale-95 transition-all duration-300 ease-in-out">
              {facebookIcon}
            </button>
          </FacebookShareButton>
          <TwitterShareButton url={blogUrl} title={post.title.rendered}>
            <button className="p-1 rounded-lg border border-gray-500 hover:bg-secondary hover:text-white hover:scale-95 transition-all duration-300 ease-in-out">
              {xIcon}
            </button>
          </TwitterShareButton>
          <button
            onClick={handleCopyLink}
            className="p-1 rounded-lg border border-gray-500 hover:bg-secondary hover:text-white hover:scale-95 transition-all duration-300 ease-in-out"
          >
            {linkIcon}
          </button>

          {copySuccess && (
            <span
              className="ml-2 text-secondary fixed bottom-10 right-10 p-2 bg-white border border-primary rounded-md shadow-lg transition-opacity duration-1000 ease-in-out opacity-100"
              style={{
                animation: "fadeOut 1s forwards",
                animationDelay: "2s",
              }}
            >
              Link copied!
            </span>
          )}
        </div>

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
