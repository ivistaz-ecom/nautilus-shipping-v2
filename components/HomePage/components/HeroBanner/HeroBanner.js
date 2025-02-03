"use client"

import Header from "@/components/Header/Header"
import Image from "next/image"
import Link from "next/link"

const HeroBanner = () => {
  return (
    <div className="bg-[url('/home-page/hero.png')] bg-cover h-screen">
      <Header
        logo="/white-logo.png"
        hamburger="/hamburger.svg"
        search="/search.svg"
      />

      <div className="max-w-screen-xl w-full mx-auto flex flex-col justify-center items-center h-full">
        <h1 className="text-white text-7xl text-center">
          The Standard for Excellence
        </h1>
        <h1 className="text-white text-[40px] text-center mt-3">
          in Ship Management and Marine Services
        </h1>
        <div className="mt-20 space-x-16">
          <Link href="/contact-us">
            <button className="p-2 w-[135px] rounded-lg bg-white text-primary hover:text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
              Contact Us
            </button>
          </Link>

          <button className="p-2 w-[135px] rounded-lg bg-white text-primary hover:text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
            Careers
          </button>
        </div>
      </div>
      <div className="text-center -mt-20">
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
