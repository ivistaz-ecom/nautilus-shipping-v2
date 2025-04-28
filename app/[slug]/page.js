"use client"

import Header from "@/components/Header/Header"
import Image from "next/image"
import React, { use, useEffect, useState } from "react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import NextSeo from "@/components/Seo/Seo"

const Page = ({ params }) => {
  const { slug } = use(params)
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true)

      try {
        const res = await fetch(
          `https://docs.nautilusshipping.com/wp-json/wp/v2/seo-blogs?_embed&slug=${slug}`
        )
        const data = await res.json()
        console.log(data)
        if (data && data.length > 0) {
          setBlog(data[0])
        }
      } catch (error) {
        console.error("Error fetching blog:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [slug])

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

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* <video src="/loading.webm" autoPlay loop muted className="w-40 h-40" /> */}
        <DotLottieReact
          src="https://lottie.host/0863177f-7940-46bc-8ca8-f5340a79be6e/yMs0H818YY.lottie"
          loop
          autoplay
          style={{ width: "250px", height: "250px" }}
        />
      </div>
    )
  }

  if (!blog) {
    return <p className="text-center text-lg">Blog not found.</p>
  }

  const seoField = {
    title: blog.acf?.meta_title || blog.title?.rendered,
    description: blog.acf?.meta_descriptions,
    path: `/${blog.slug}`,
    metaImage: "",
    pageType: "WebSite",
  }

  return (
    <>
      <NextSeo {...seoField} />

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
              dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
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
              __html: blog.content.rendered,
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Page
