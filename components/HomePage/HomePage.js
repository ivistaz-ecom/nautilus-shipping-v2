"use client"

import { ParallaxProvider } from "react-scroll-parallax"
import React, { useEffect } from "react"
import HeroBanner from "./components/HeroBanner/HeroBanner"
import For17Years from "./components/For17Years/For17Years"
import NautilusPromise from "./components/NautilusPromise/NautilusPromise"
import OurMarineServices from "./components/OurMarineServices/OurMarineServices"
import Careers from "./components/Careers/Careers"
import NewsAndInsights from "./components/NewsAndInsights/NewsAndInsights"
import FAQs from "@/components/FAQs/FAQs"
import AOS from "aos"
import "aos/dist/aos.css"
import Game from "../Game/Game"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("")
}
const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  const metadata = getMetadata("")

  const faqs = [
    {
      ques: "What services do you offer?",
      ans: "We specialize in crew management but also provide complete vessel management and marine services.",
    },
    {
      ques: "What types of vessels do you manage?",
      ans: "We manage bulk carriers, container ships, chemical tankers, oil & LPG/LNG tankers, general cargo vessels, and passenger ships.",
    },
    {
      ques: "How many seafarers are in your database?",
      ans: "We have a database of 100,000+ seafarers.",
    },
  ]

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
      <ParallaxProvider>
        <div className="overflow-hidden">
          <HeroBanner />
          <For17Years />
          <NautilusPromise />
          <OurMarineServices />
          <Game />
          <Careers />
          <NewsAndInsights />
          <FAQs data={faqs} />
        </div>
      </ParallaxProvider>
    </>
  )
}

export default HomePage
