import NewsAndInsights from "@/components/ResourcesPage/NewsAndInsights/NewsAndInsights"
import NextSeo from "@/components/Seo/Seo"

export default function Page() {
  const seoField = {
    title: "Latest News and Insights | Nautilus Shipping",
    description:
      "Stay informed with the latest news and insights from Nautilus Shipping. Our news page provides timely updates and in-depth analysis of trends and developments in the maritime industry. Discover how Nautilus is contributing to shaping the future of shipping through innovation and leadership.",
    path: "/resources/news-and-insights",
    metaImage: "",
    pageType: "WebSite",
  }
  return (
    <>
      <NextSeo {...seoField} />
      <NewsAndInsights />
    </>
  )
}
