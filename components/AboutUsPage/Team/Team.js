"use client"

import Header from "@/components/Header/Header"
import Heading from "./components/Heading"
import MessageFromCeo from "./components/MessageFromCeo"
import MeetOurCrew from "./components/MeetOurCrew/MeetOurCrew"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }) // Add duration for smooth effects
  }, [])

  return (
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
  )
}

export default Team
