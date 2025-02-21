"use client"

import Header from "@/components/Header/Header"
import Image from "next/image"
import Link from "next/link"
import { useParallax, ParallaxBanner } from "react-scroll-parallax"

const HeroBanner = () => {
  const parallax1 = useParallax({ speed: -10 })
  return (
    <div className="relative h-screen flex flex-col">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/Nautilus-Website/nautilus_sea.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay for better readability (Optional) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <Header
        logo="/white-logo.png"
        hamburger="/hamburger.svg"
        search="/search.svg"
      />

      <div className="relative max-w-screen-xl w-full mx-auto flex flex-col justify-end items-start md:items-center flex-grow px-4 pb-32">
        <div
          ref={parallax1.ref}
          className="flex flex-col items-start md:items-center"
        >
          <h1
            className="text-white text-3xl sm:text-5xl md:text-7xl text-start md:leading-tight tracking-wide"
            style={{
              transform: `translateY(${
                parallax1.ref.current?.style.getPropertyValue("--progress") * 50
              }px)`,
            }}
          >
            The Standard for Excellence
          </h1>

          <h1 className="text-white text-base sm:text-2xl md:text-[40px] text-center mt-3 font-light tracking-wide">
            in Ship Management and Marine Services
          </h1>

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

      {/* scroll button */}
      {/* <div className="relative text-center mb-6 md:mb-5">
        <button
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
        >
          <Image src="/down.svg" width={22} height={52} alt="down" />
        </button>
      </div> */}
    </div>
  )
}

export default HeroBanner
