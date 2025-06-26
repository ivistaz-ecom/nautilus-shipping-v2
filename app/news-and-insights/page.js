import Header from "@/components/Header/Header"
import Blogs from "@/components/ResourcesPage/NewsAndInsights/components/Blogs/Blogs"
import BlogsCopy from "@/components/ResourcesPage/NewsAndInsights/components/Blogs/BlogsCopy"
import Heading from "@/components/ResourcesPage/NewsAndInsights/components/Heading"
import LatestNews from "@/components/ResourcesPage/NewsAndInsights/components/LatestNews/LatestNews"
import NewsAndInsights from "@/components/ResourcesPage/NewsAndInsights/NewsAndInsights"
import NextSeo from "@/components/Seo/Seo"

export default function Page() {
  const seoField = {
    title: "Latest News and Insights | Nautilus Shipping",
    description:
      "Stay informed with the latest news and insights from Nautilus Shipping. Our news page provides timely updates and in-depth analysis of trends and developments in the maritime industry. Discover how Nautilus is contributing to shaping the future of shipping through innovation and leadership.",
    path: "/news-and-insights",
    metaImage: "/our-approach/img01.png",
    pageType: "WebSite",
  }
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
      {/* <Blogs /> */}
      <BlogsCopy />
    </>
  )
}
