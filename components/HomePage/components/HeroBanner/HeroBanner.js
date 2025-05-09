"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { useParallax } from "react-scroll-parallax"
import { useRef, useEffect, useState } from "react"

// Lazy load Header to improve initial load
const Header = dynamic(() => import("@/components/Header/Header"), {
  ssr: false,
})

const HeroBanner = () => {
  const parallax1 = useParallax({ speed: -10 })
  const [progressY, setProgressY] = useState(0)

  // Optimization: Avoid accessing DOM directly in render
  useEffect(() => {
    const el = parallax1.ref.current
    const updateTransform = () => {
      if (el) {
        const progress = parseFloat(
          el.style.getPropertyValue("--progress") || 0
        )
        setProgressY(progress * 50)
      }
    }

    const observer = new MutationObserver(updateTransform)
    if (el)
      observer.observe(el, { attributes: true, attributeFilter: ["style"] })
    return () => observer.disconnect()
  }, [parallax1.ref])

  return (
    <div className="relative h-screen flex flex-col">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto" // helps prevent loading issues
        poster="/fallback.jpg" // fallback image improves perceived load time
      >
        <source
          src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/Nautilus-Website/nautilus_sea.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Header */}
      <Header
        logo="/white-logo.png"
        hamburger="/hamburger.svg"
        search="/search.svg"
      />

      {/* Main Content */}
      <div className="relative max-w-screen-xl w-full mx-auto flex flex-col justify-end md:justify-center md:pt-14 pb-32 md:pb-0 items-start md:items-center flex-grow px-4">
        <div
          ref={parallax1.ref}
          className="flex flex-col items-start md:items-center"
          style={{ transform: `translateY(${progressY}px)` }}
        >
          <h1 className="text-white text-3xl sm:text-5xl md:text-7xl text-start md:leading-tight tracking-wide">
            The Standard for Excellence
          </h1>

          <h2 className="text-white text-base sm:text-2xl md:text-[40px] mt-3 font-light tracking-wide">
            in Ship Management and Marine Services
          </h2>

          <div className="mt-10 md:mt-20 flex flex-row gap-4 md:gap-16">
            <Link href="/contact-us">
              <button className="p-1.5 w-[115px] md:w-[135px] text-sm md:text-base rounded-lg bg-white text-primary hover:text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
                Contact Us
              </button>
            </Link>
            <Link href="/careers">
              <button className="p-1.5 w-[115px] md:w-[135px] text-sm md:text-base rounded-lg bg-white text-primary hover:text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
                Careers
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
