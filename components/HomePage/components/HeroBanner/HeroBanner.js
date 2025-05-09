"use client"

import Header from "@/components/Header/Header"
import Image from "next/image"
import Link from "next/link"
import { useParallax, ParallaxBanner } from "react-scroll-parallax"
import { useEffect, useRef } from "react"

const HeroBanner = () => {
  const parallax1 = useParallax({ speed: -10 })
  const videoRef = useRef(null)

  // Preload the video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.setAttribute("preload", "auto")
    }
  }, [])

  const handleScrollDown = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative h-screen flex flex-col">
      {/* Video Background - Added preload and loading="eager" */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        loading="eager"
        preload="auto"
      >
        <source
          src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/Nautilus-Website/nautilus_sea.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay - Reduced opacity for better performance */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <Header
        logo="/white-logo.png"
        hamburger="/hamburger.svg"
        search="/search.svg"
      />

      <div className="relative max-w-screen-xl w-full mx-auto flex flex-col justify-end md:justify-center md:pt-14 pb-32 md:pb-0 items-start md:items-center flex-grow px-4">
        <div
          ref={parallax1.ref}
          className="flex flex-col items-start md:items-center"
        >
          <h1
            className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-start md:leading-tight tracking-wide"
            style={{
              transform: `translateY(${
                parallax1.ref.current?.style.getPropertyValue("--progress") * 50
              }px)`,
            }}
          >
            The Standard for Excellence
          </h1>

          <h2 className="text-white text-base sm:text-2xl md:text-3xl lg:text-[40px] mt-3 font-light tracking-wide">
            in Ship Management and Marine Services
          </h2>

          <div className="mt-8 md:mt-16 flex flex-row gap-4 md:gap-8">
            <Link href="/contact-us" passHref legacyBehavior>
              <a className="p-1.5 w-[115px] md:w-[135px] text-sm md:text-base rounded-lg bg-white text-primary hover:text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out text-center">
                Contact Us
              </a>
            </Link>
            <Link href="/careers" passHref legacyBehavior>
              <a className="p-1.5 w-[115px] md:w-[135px] text-sm md:text-base rounded-lg bg-white text-primary hover:text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out text-center">
                Careers
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll button - optimized with priority loading */}
      {/* <div className="relative text-center mb-6 md:mb-5">
        <button
          onClick={handleScrollDown}
          aria-label="Scroll down"
        >
          <Image 
            src="/down.svg" 
            width={22} 
            height={52} 
            alt="Scroll down"
            priority
            loading="eager"
          />
        </button>
      </div> */}
    </div>
  )
}

export default HeroBanner
