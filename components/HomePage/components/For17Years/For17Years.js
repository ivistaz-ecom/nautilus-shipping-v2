"use client"

import { for17yearsData } from "@/utils/data"
import Image from "next/image"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

const For17Years = () => {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <div className="h-auto md:min-h-screen bg-primary py-10 md:py-14 px-2 md:px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-between h-full gap-5 md:gap-10">
        <div className="bg-primary md:py-14 px-2 md:px-4 flex flex-col md:items-center">
          {/* Title */}
          <h2 className="text-white text-3xl sm:text-5xl md:text-8xl md:text-center font-light">
            For 17 Years
          </h2>

          {/* Info Box */}
          <div className="border rounded-xl p-3 sm:p-10 md:p-12 w-full max-w-screen-xl space-y-5 font-light mt-5 md:mt-10">
            <p className="text-white text-sm sm:text-xl">
              Nautilus Shipping has stood as a trusted partner in ship
              management services, driven by our commitment to reliability,
              performance, and sustainable solutions.
            </p>
            <p className="text-white text-sm sm:text-xl font-light">
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
              <div className="flex flex-col gap-8 items-center py-3 md:p-10">
                <Image
                  src={item.icon}
                  width={70}
                  height={70}
                  alt={item.title}
                />
                <div className="space-y-2 md:space-y-4">
                  <p className="text-white text-2xl md:text-5xl text-center font-semibold">
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
                  <p className="text-white text-base md:text-xl text-center">
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
