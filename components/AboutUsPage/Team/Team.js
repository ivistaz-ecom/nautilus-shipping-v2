"use client"

import Header from "@/components/Header/Header"
import Heading from "./components/Heading"
import MessageFromCeo from "./components/MessageFromCeo"
import MeetOurCrew from "./components/MeetOurCrew/MeetOurCrew"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("/about-us/team")
}

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }) // Add duration for smooth effects
  }, [])

  const metadata = getMetadata("/about-us/team")

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
        {/* <MessageFromCeo /> */}
        <MeetOurCrew />
      </div>
    </>
  )
}

export default Team
