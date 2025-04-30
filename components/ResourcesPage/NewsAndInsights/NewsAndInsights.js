import Header from "@/components/Header/Header"
import Blogs from "./components/Blogs/Blogs"
import Heading from "./components/Heading"
import LatestNews from "./components/LatestNews/LatestNews"
import BlogsCopy from "./components/Blogs/BlogsCopy"

const NewsAndInsights = () => {
  return (
    <>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <Heading />
      <LatestNews />
      <Blogs />
      {/* <BlogsCopy /> */}
      {/* <Subscribe /> */}
    </>
  )
}

export default NewsAndInsights
