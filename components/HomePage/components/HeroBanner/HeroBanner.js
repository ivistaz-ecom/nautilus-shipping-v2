"use client"

import Header from "@/components/Header/Header"
import Image from "next/image"
import Link from "next/link"

const HeroBanner = () => {
  return (
    <div className="bg-[url('/home-page/hero.png')] bg-cover bg-center h-screen flex flex-col">
      <Header
        logo="/white-logo.png"
        hamburger="/hamburger.svg"
        search="/search.svg"
      />

      <div className="max-w-screen-xl w-full mx-auto flex flex-col justify-end items-start md:items-center flex-grow px-4 pb-28 md:pb-20">
        <h1 className="text-white text-3xl sm:text-5xl md:text-7xl text-start md:items-center md:leading-tight tracking-wide">
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

      <div className="text-center mb-6 md:mb-5">
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
      </div>
    </div>
  )
}

export default HeroBanner
