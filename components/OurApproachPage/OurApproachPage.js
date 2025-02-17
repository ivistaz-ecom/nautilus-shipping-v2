"use client"

import { useEffect } from "react"
import Header from "../Header/Header"
import ContactUs from "./components/ContactUs"
import ExperienceAPartnership from "./components/ExperienceAPartnership"
import Heading from "./components/Heading"
import The4Ps from "./components/The4Ps/The4Ps"
import UncoverNewValue from "./components/UncoverNewValue"
import AOS from "aos"
import "aos/dist/aos.css"
import { ParallaxProvider } from "react-scroll-parallax"

const OurApproachPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <ParallaxProvider>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <The4Ps />
      <Heading />
      <UncoverNewValue />
      <ExperienceAPartnership />
      <ContactUs />
    </ParallaxProvider>
  )
}

export default OurApproachPage
