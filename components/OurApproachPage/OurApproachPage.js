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
import FAQs from "../FAQs/FAQs"

const OurApproachPage = () => {
  const faqs = [
    {
      ques: "What is the Nautilus 4P framework?",
      ans: "Our 4P framework—Problem-Solving, Performance-Based Remuneration, Profit-Making, and Port State Control Adherence—ensures operational efficiency, regulatory compliance, and financial resilience.",
    },
    {
      ques: "What role does performance-based remuneration play in ship management?",
      ans: "Our compensation model is aligned with fleet performance, ensuring transparency, accountability, and consistent service excellence.",
    },
    {
      ques: "How does Nautilus Shipping ensure adherence to Port State Control regulations?",
      ans: "By maintaining zero deficiencies and a strong safety culture, we minimize detentions and ensure seamless port operations.",
    },
  ]

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
      <FAQs data={faqs} />
    </ParallaxProvider>
  )
}

export default OurApproachPage
