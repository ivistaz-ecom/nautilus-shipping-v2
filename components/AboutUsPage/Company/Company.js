"use client"

import { useEffect } from "react"
import Header from "../../Header/Header"
import FutureTogether from "./components/FutureTogether"
import Heading from "./components/Heading"
import OurExpertise from "./components/OurExpertise"
import OurPeople from "./components/OurPeople"
import VisionMission from "./components/VisionMission"
import WhoWeAre from "./components/WhoWeAre"
import WhyChooseNS from "./components/WhyChooseNS"
import AOS from "aos"
import "aos/dist/aos.css"
import FAQs from "@/components/FAQs/FAQs"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("/about-us/company")
}

const Company = () => {
  const metadata = getMetadata("/about-us/company")

  const faqs = [
    {
      ques: "How has Nautilus Shipping evolved over the years?",
      ans: "Starting as a dedicated crewing company, we have grown into a full-service ship management provider, offering technical, inspection, and commercial solutions.",
    },
    {
      ques: "What makes Nautilus Shipping a preferred choice for shipowners?",
      ans: "With 18 years of experience, six global offices, and a commitment to excellence, we deliver reliable, customized, and cost-effective ship management solutions.",
    },
    {
      ques: "Where are Nautilus Shipping’s offices located?",
      ans: "Our six offices are strategically positioned in key maritime hubs, ensuring global reach and localized support for shipowners.",
    },
  ]

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

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

      <div className="overflow-hidden">
        <Header
          logo="/logo.png"
          hamburger="/hamburger-dark.svg"
          search="/search-dark.svg"
        />
        <Heading />
        <WhoWeAre />
        <VisionMission />
        <OurExpertise />
        <WhyChooseNS />
        <OurPeople />
        <FutureTogether />
        <FAQs data={faqs} />
      </div>
    </>
  )
}

export default Company
