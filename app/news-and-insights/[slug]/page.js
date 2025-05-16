import BlogsDetails from "@/components/ResourcesPage/NewsAndInsights/components/Blogs/BlogsDetails"
import config from "@/config"
import axios from "axios"
import React from "react"

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
          `${configData.websiteMainUrl}/logo.png`,
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
    metaImage: `${configData.websiteMainUrl}/logo.png`,
  }
}

const Page = async ({ params }) => {
  const { slug } = await params
  const { metaTitle, metaDescription, canonical, metaImage } =
    await fetchBlogData(slug)

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-150x150.png" />
        <link rel="canonical" href={canonical} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content="Nautilus Shipping" />
        <meta property="og:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={metaImage} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "Nautilus Shipping",
              url: canonical,
              potentialAction: {
                "@type": "SearchAction",
                target: `${config.websiteMainUrl}/news-and-insights/${slug}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <BlogsDetails slug={slug} />
    </>
  )
}

export default Page
