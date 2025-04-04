"use client"
import { ParallaxProvider } from "react-scroll-parallax"
import Header from "../Header/Header"
import CareersAshore from "./components/CareersAshore/CareersAshore"
import CareersAtSea from "./components/CareersAtSea/CareersAtSea"
import Heading from "./components/Heading"
import VisitBlogs from "./components/VisitBlogs"

const CareersPage = () => {
  return (
    <>
      <ParallaxProvider>
        <Header
          logo="/logo.png"
          hamburger="/hamburger-dark.svg"
          search="/search-dark.svg"
        />
        <Heading />
        <CareersAtSea />
        <CareersAshore />
        <VisitBlogs />
      </ParallaxProvider>
    </>
  )
}

export default CareersPage
