import BlogsDetails from "@/components/ResourcesPage/NewsAndInsights/components/Blogs/BlogsDetails"
import NextSeo from "@/components/Seo/Seo"
import React from "react"

export async function generateMetadata({ params }) {
  const { slug } = await params

  const res = await fetch(
    `https://docs.nautilusshipping.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
  )
  const data = await res.json()

  if (!data || data.length === 0) {
    return {
      title: "Blog Not Found | Nautilus Shipping",
      description: "The blog you are looking for is not available.",
      alternates: {
        canonical: `https://www.nautilusshipping.com/news-and-insights/${slug}`,
      },
    }
  }

  const blog = data[0]
  const title = blog.acf?.meta_title || blog.title.rendered
  const description =
    blog.acf?.meta_descriptions || "Read more about this topic."
  const canonicalUrl = `https://www.nautilusshipping.com/news-and-insights/${slug}`
  const imageUrl = blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  }
}

export default async function BlogDetails({ params }) {
  const { slug } = await params

  return (
    <>
      <NextSeo
        title="" // You can optionally leave blank or set static fallback
        description=""
        path={`/news-and-insights/${slug}`}
        metaImage=""
      />
      <BlogsDetails slug={slug} />
    </>
  )
}
