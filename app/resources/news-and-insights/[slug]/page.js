import BlogsDetails from "@/components/ResourcesPage/NewsAndInsights/components/Blogs/BlogsDetails"

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
    }
  }

  const blog = data[0]

  const imageUrl = blog._embedded?.[
    "wp:featuredmedia"
  ]?.[0]?.source_url?.startsWith("http")
    ? blog._embedded["wp:featuredmedia"][0].source_url
    : `https://docs.nautilusshipping.com${blog._embedded["wp:featuredmedia"][0].source_url}`

  return {
    title: blog.acf?.meta_title || blog.title.rendered,
    description: blog.acf?.meta_descriptions || "Read more about this topic.",
    openGraph: {
      title: blog.acf?.meta_title || blog.title.rendered,
      description: blog.acf?.meta_descriptions || "Read more about this topic.",
      url: `https://www.nautilusshipping.com/resources/news-and-insights/${slug}`,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title.rendered,
        },
      ],
    },
  }
}

export default async function BlogDetails({ params }) {
  const { slug } = await params

  return (
    <>
      <BlogsDetails slug={slug} />
    </>
  )
}
