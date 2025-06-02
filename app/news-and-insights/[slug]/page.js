import BlogsDetails from "@/components/ResourcesPage/NewsAndInsights/components/Blogs/BlogsDetails"
import config from "@/config"
import axios from "axios"
import React from "react"
import NextSeo from "@/components/Seo/Seo"

async function fetchBlogData(slug) {
  const domainName = "https://www.nautilusshipping.com"

  try {
    const response = await axios.get(
      `https://docs.nautilusshipping.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
    )

    if (Array.isArray(response.data) && response.data.length > 0) {
      const blog = response.data[0]

      return {
        metaTitle: blog.acf?.meta_title || blog.title?.rendered || "Blog",
        metaDescription:
          blog.acf?.meta_descriptions ||
          "Explore the latest insights, updates, and knowledge from Nautilus Shipping.",
        canonical: `${domainName}/news-and-insights/${slug}`,
        metaImage:
          blog?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          `${config.websiteMainUrl}/logo.png`,
      }
    }
    console.warn("No blog found for slug:", slug)
  } catch (error) {
    console.error("Error fetching blog data:", error.message)
  }

  return {
    metaTitle: "Nautilus Blog",
    metaDescription: "Blog description",
    canonical: `${domainName}/news-and-insights/${slug}`,
    metaImage: `${config.websiteMainUrl}/logo.png`,
  }
}

const Page = async ({ params }) => {
  const { slug } = await params
  const { metaTitle, metaDescription, canonical, metaImage } =
    await fetchBlogData(slug)

  return (
    <>
      <NextSeo
        title={metaTitle}
        description={metaDescription}
        path={`/news-and-insights/${slug}`}
        metaImage={metaImage}
      />
      <BlogsDetails slug={slug} />
    </>
  )
}

export default Page