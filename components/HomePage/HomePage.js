"use client"

import { ParallaxProvider } from "react-scroll-parallax"
import React, { useEffect } from "react"
import HeroBanner from "./components/HeroBanner/HeroBanner"
import For17Years from "./components/For17Years/For17Years"
import NautilusPromise from "./components/NautilusPromise/NautilusPromise"
import OurMarineServices from "./components/OurMarineServices/OurMarineServices"
import Careers from "./components/Careers/Careers"
import NewsAndInsights from "./components/NewsAndInsights/NewsAndInsights"
import FAQs from "../FAQs/FAQs"
import AOS from "aos"
import "aos/dist/aos.css"

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <ParallaxProvider>
      <div className="overflow-hidden">
        <HeroBanner />
        <For17Years />
        <NautilusPromise />
        <OurMarineServices />
        <Careers />
        <NewsAndInsights />
        <FAQs />
      </div>
    </ParallaxProvider>
  )
}

export default HomePage
