import Header from "@/components/Header/Header"
import Blogs from "./components/Blogs/Blogs"
import Heading from "./components/Heading"
import Subscribe from "@/components/Subscribe/Subscribe"
import { getMetadata } from "@/utils/metadata"

const NewsAndInsights = () => {
  const metadata = getMetadata("/resources/news-and-insights")
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metadata.schema),
          }}
        />
      </head>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <Heading />
      <Blogs />
      <Subscribe />
    </>
  )
}

export default NewsAndInsights
