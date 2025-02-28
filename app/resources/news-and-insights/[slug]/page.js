import BlogsDetails from "@/components/ResourcesPage/NewsAndInsights/components/Blogs/BlogsDetails"

export async function generateMetadata({ params }) {
  const { slug } = params

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

  return {
    title: blog.acf?.meta_title || blog.title.rendered,
    description: blog.acf?.meta_descriptions || "Read more about this topic.",
    openGraph: {
      title: blog.acf?.meta_title || blog.title.rendered,
      description: blog.acf?.meta_descriptions || "Read more about this topic.",
      images: [
        {
          url: blog._embedded["wp:featuredmedia"][0].source_url,
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
