import React from "react"
import HeroBanner from "./components/HeroBanner/HeroBanner"
import For17Years from "./components/For17Years/For17Years"
import NautilusPromise from "./components/NautilusPromise/NautilusPromise"
import OurMarineServices from "./components/OurMarineServices/OurMarineServices"
import Careers from "./components/Careers/Careers"
import NewsAndInsights from "./components/NewsAndInsights/NewsAndInsights"
import FAQs from "../FAQs/FAQs"

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <HeroBanner />
      <For17Years />
      <NautilusPromise />
      <OurMarineServices />
      <Careers />
      <NewsAndInsights />
      <FAQs />
    </div>
  )
}

export default HomePage
