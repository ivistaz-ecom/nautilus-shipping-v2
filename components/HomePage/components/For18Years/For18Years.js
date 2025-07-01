"use client"

import { for17yearsData } from "@/utils/data"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import CountUp from "react-countup"
//import { useInView } from "react-intersection-observer"

const For18Years = () => {
  const paraRef = useRef(null)
  const utteranceRef = useRef(null)

  const [isHovered, setIsHovered] = useState(false)
  const [isReading, setIsReading] = useState(false)
  const [femaleVoice, setFemaleVoice] = useState(null)

  // Load voices only once on demand
  const loadVoices = () => {
    if (femaleVoice) return // already loaded
    const voices = window.speechSynthesis.getVoices()
    const preferred = voices.find((v) => v.name === "Google US English")
    const fallbackUS = voices.find((v) => v.lang === "en-US")
    const fallbackEN = voices.find((v) => v.lang.startsWith("en"))
    setFemaleVoice(preferred || fallbackUS || fallbackEN)
  }

  // Handle read aloud
  const handleRead = () => {
    const synth = window.speechSynthesis
    if (isReading) {
      synth.cancel()
      setIsReading(false)
      return
    }

    loadVoices()

    const utterance = new SpeechSynthesisUtterance()
    utterance.text = paraRef.current?.innerText || ""
    utterance.lang = "en-US"
    utterance.rate = 1
    if (femaleVoice) utterance.voice = femaleVoice

    utterance.onend = () => setIsReading(false)

    utteranceRef.current = utterance
    synth.speak(utterance)
    setIsReading(true)
  }

  // Cancel on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel()
    }
  }, [])

  return (
    <div className="h-auto md:h-screen bg-primary py-10 px-2 md:px-0 flex items-center">
      <div className="max-w-screen-lg mx-auto flex flex-col gap-5 md:gap-14">
        <div className="px-2 md:px-4 flex flex-col md:items-center">
          {/* Title */}
          <div className="flex flex-col w-full max-w-screen-xl relative pb-10 md:pb-14">
            <h2 className="text-white text-3xl sm:text-5xl md:text-8xl md:text-center font-light tracking-wide">
              For 18 Years
            </h2>

            {/* Audio Button */}
            <div className="self-end absolute bottom-0">
              <div className="flex flex-col items-center">
                <button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={handleRead}
                  className="cursor-pointer"
                >
                  <Image
                    src={
                      isReading || isHovered
                        ? "/home-page/audio01.svg"
                        : "/home-page/audio.svg"
                    }
                    width={46}
                    height={46}
                    alt="Read Aloud Icon"
                  />
                </button>
                <div className="h-10 border-s" />
              </div>
            </div>
          </div>

          {/* Paragraph Box */}
          <div
            className="border rounded-xl p-3 sm:p-7 w-full max-w-screen-xl space-y-7 font-light"
            ref={paraRef}
          >
            <p className="text-white text-sm sm:text-lg tracking-wide">
              Nautilus Shipping has stood as a trusted partner in ship
              management services, driven by our commitment to reliability,
              performance, and sustainable solutions.
            </p>
            <p className="text-white text-sm sm:text-lg tracking-wide">
              Using our proven 4Ps approach, we manage vessels and support ship
              owners with tailored strategies to enhance profitability, crew
              welfare, and environmental responsibility. Our focus on technical
              management ensures the highest standards of operational
              efficiency. With established industry relationships and a
              commitment to vessel management, we strive to provide a seamless
              experience for our clients.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
          {for17yearsData.map((item, index) => (
            <li
              key={index}
              className={`w-full 
                ${index === 0 || index === 2 ? "border-r" : ""}
                ${
                  index < for17yearsData.length - 1
                    ? "md:border-r"
                    : "md:border-none"
                }
                ${index === 0 || index === 1 ? "border-b" : ""}
                md:border-b-0`}
            >
              <div className="flex flex-col gap-5 items-center py-3 md:p-5">
                <Image
                  src={item.icon}
                  width={70}
                  height={70}
                  alt={item.title}
                />
                <div className="space-y-2 md:space-y-3">
                  <p className="text-white text-2xl md:text-4xl text-center font-semibold tracking-wide">
                    <CountUp
                      start={0}
                      end={item.number}
                      duration={2}
                      separator=","
                    />
                    +
                  </p>
                  <p className="text-white text-base md:text-lg font-light text-center tracking-wide">
                    {item.title}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default For18Years
