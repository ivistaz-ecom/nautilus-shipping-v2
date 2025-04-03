"use client"
import Company from "@/components/AboutUsPage/Company/Company"
import NextSeo from "@/components/Seo/Seo"

const page = () => {
  const seoField = {
    title: "Our Incubatees | CMS' Innovations and Entrepreneurial Ventures",
    description:
      "Explore CMS' incubatees and their groundbreaking ventures in technology, entrepreneurship, and social impact.",
    path: "about-us/incubatees",
    metaImage: "/social.png",
    pageType: "WebSite",
  }

  return (
    <>
      <NextSeo {...seoField} />
      <Company />
    </>
  )
}

export default page
