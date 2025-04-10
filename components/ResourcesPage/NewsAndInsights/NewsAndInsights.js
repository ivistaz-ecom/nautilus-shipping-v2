import Header from "@/components/Header/Header"
import Blogs from "./components/Blogs/Blogs"
import Heading from "./components/Heading"
import Subscribe from "@/components/Subscribe/Subscribe"
import LatestNews from "./components/LatestNews/LatestNews"

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
      {/* <Subscribe /> */}
    </>
  )
}

export default NewsAndInsights
