"use client"

import { Boxes } from "@/components/ui/BackgroundBoxes"
import { for17yearsData } from "@/utils/data"
import Image from "next/image"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

const For17Years = () => {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <div className="relative h-auto md:h-screen bg-primary py-10 px-2 md:px-0 flex items-center overflow-hidden shadow-2xl before:absolute before:bottom-0 before:left-0 before:w-full before:h-40 before:bg-gradient-to-t before:from-primary before:to-transparent">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full bg-primary hidden md:block">
        <Boxes className="absolute inset-0 w-full h-full z-0" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-screen-lg mx-auto flex flex-col gap-5 md:gap-14">
        <div className="px-2 md:px-4 flex flex-col md:items-center">
          {/* Title */}
          <h2 className="text-white text-3xl sm:text-5xl md:text-8xl md:text-center font-light tracking-wide">
            For 17 Years
          </h2>

          {/* Info Box */}
          <div className="border rounded-xl p-3 sm:p-7 w-full max-w-screen-xl space-y-7 font-light mt-5 md:mt-10">
            <p className="text-white text-sm sm:text-lg font-light tracking-wide">
              Nautilus Shipping has stood as a trusted partner in ship
              management services, driven by our commitment to reliability,
              performance, and sustainable solutions.
            </p>
            <p className="text-white text-sm sm:text-lg font-light tracking-wide">
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
        <ul
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4"
        >
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
                md:border-b-0
              `}
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
                    {inView ? (
                      <CountUp
                        start={0}
                        end={item.number}
                        duration={2}
                        separator=","
                      />
                    ) : (
                      item.number
                    )}
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

export default For17Years
