import Header from "../Header/Header"
import Subscribe from "../Subscribe/Subscribe"
import Blogs from "./components/Blogs/Blogs"
import Heading from "./components/Heading"

const NewsAndInsightsPage = () => {
  return (
    <>
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

export default NewsAndInsightsPage
