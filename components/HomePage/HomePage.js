import React from "react"
import HeroBanner from "./components/HeroBanner/HeroBanner"
import For17Years from "./components/For17Years/For17Years"
import NautilusPromise from "./components/NautilusPromise/NautilusPromise"
import OurMarineServices from "./components/OurMarineServices/OurMarineServices"
import Careers from "./components/Careers/Careers"
import NewsAndInsights from "./components/NewsAndInsights/NewsAndInsights"
import FAQs from "./components/FAQs/FAQs"

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <For17Years />
      <NautilusPromise />
      <OurMarineServices />
      <Careers />
      <NewsAndInsights />
      <FAQs />
    </>
  )
}

export default HomePage
