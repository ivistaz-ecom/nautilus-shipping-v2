import Header from "@/components/Header/Header"
import Blogs from "@/components/ResourcesPage/NewsAndInsights/components/Blogs/Blogs"
import Heading from "@/components/ResourcesPage/NewsAndInsights/components/Heading"
import LatestNews from "@/components/ResourcesPage/NewsAndInsights/components/LatestNews/LatestNews"
import NextSeo from "@/components/Seo/Seo"

export const dynamic = "force-dynamic" // optional if you want fresh data always

async function fetchBlogs() {
  const getCategoryName = (categoryIds) => {
    const categoryMap = {
      100: "Business",
      107: "Compliance",
      103: "Crewing",
      108: "Insights",
      102: "Shipping",
      105: "Sustainability",
      101: "Technical",
      106: "Technology",
      104: "Training & Skill Development",
      99: "Wellbeing & Safety",
    }

    return categoryIds
      .map((id) => categoryMap[id] || "Uncategorized")
      .filter((category) => category !== "Uncategorized")
  }

  try {
    const page = 100
    const response = await fetch(
      `https://docs.nautilusshipping.com/wp-json/wp/v2/posts?_embed&per_page=${page}`,
      { cache: "no-store" }
    )
    const data = await response.json()

    const formattedBlogs = data
      .map((post) => {
        const imageUrl =
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          "/news-and-insights/image01.png"
        const formattedDate = new Date(post.date).toISOString()

        return {
          id: post.id,
          title: post.title.rendered,
          slug: post.slug,
          date: formattedDate,
          categories: getCategoryName(post.categories),
          imageUrl,
          longDesc: post.content.rendered,
        }
      })
      .filter((blog) => blog.id !== 10236)

    return { blogs: formattedBlogs }
  } catch (err) {
    return { blogs: [], error: err.message }
  }
}

export default async function Page() {
  const seoField = {
    title: "Latest News and Insights | Nautilus Shipping",
    description:
      "Stay informed with the latest news and insights from Nautilus Shipping. Our news page provides timely updates and in-depth analysis of trends and developments in the maritime industry. Discover how Nautilus is contributing to shaping the future of shipping through innovation and leadership.",
    path: "/news-and-insights",
    metaImage: "/our-approach/img01.png",
    pageType: "WebSite",
  }

  const { blogs, error } = await fetchBlogs()

  return (
    <>
      <NextSeo {...seoField} />
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <Heading />
      <LatestNews />
      <Blogs blogs={blogs} error={error} />
    </>
  )
}
