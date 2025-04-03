"use client"

import { ParallaxProvider } from "react-scroll-parallax"
import Header from "../Header/Header"
import GetInTouch from "./Components/GetInTouch"
import Heading from "./Components/Heading"
import OurExpertise from "./Components/OurExpertise"
import OurFleet from "./Components/OurFleet"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("/fleet")
}

const Fleet = () => {
  const metadata = getMetadata("/fleet")
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
        <Header
          logo="/logo.png"
          hamburger="/hamburger-dark.svg"
          search="/search-dark.svg"
        />
        <Heading />
        <OurFleet />
        <OurExpertise />
        <GetInTouch />
      </ParallaxProvider>
    </>
  )
}

export default Fleet
