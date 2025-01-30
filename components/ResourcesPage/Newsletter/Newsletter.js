import Header from "@/components/Header/Header"
import Heading from "./components/Heading"
import FindInside from "./components/FindInside/FindInside"

const Newsletter = () => {
  return (
    <>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <Heading />
      <FindInside />
    </>
  )
}

export default Newsletter
