"use client"

import { arrowRightDarkIcon } from "@/utils/icon"
import { ourExpertiseList } from "@/utils/resources"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const OurExpertise = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const toggleExpertise = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <>
      <div className="py-7 md:py-14 px-3 md:px-4">
        <div className="max-w-screen-lg mx-auto w-full flex flex-col gap-5 md:gap-8">
          <h2 className="text-3xl md:text-7xl font-light tracking-wider">
            Our Expertise
          </h2>

          <p className="text-base md:text-lg font-light">
            We provide a wide range of services designed to{" "}
            <br className="hidden md:block" />
            meet the diverse needs of the maritime sector:
          </p>

          <ul className="flex flex-col gap-5 w-full relative">
            {ourExpertiseList.map((item, index) => {
              return (
                <li key={index} className="cursor-pointer flex flex-col gap-3">
                  <div className="flex justify-between items-center w-10/12 md:w-1/3">
                    <span
                      className="text-xl md:text-3xl"
                      onClick={() => toggleExpertise(index)}
                    >
                      {item.title}
                    </span>
                    <Link href={item.link} passHref>
                      <div
                        className="w-5 h-5 cursor-pointer transition-all duration-300"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <Image
                          src={
                            hoveredIndex === index
                              ? "/secondary-arrow.svg"
                              : "/primary-arrow.svg"
                          }
                          alt="arrow"
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                      </div>
                    </Link>
                  </div>

                  {openIndex === index && (
                    <div className="flex flex-col md:flex-row justify-between mt-3">
                      <p className="text-base md:text-lg font-[100] w-full md:w-1/2">
                        {item.desc}
                      </p>

                      <Image
                        src={item.imageUrl}
                        width={450}
                        height={600}
                        alt={item.title}
                        className="hidden md:block absolute right-0 -top-1/3"
                        data-aos={`${
                          index % 2 === 0 ? "flip-left" : "flip-right"
                        }`}
                      />
                    </div>
                  )}
                </li>
              )
            })}
          </ul>

          <p className="text-base md:text-lg font-light mt-5 w-4/5">
            Each service is built around our core values of excellence,
            reliability, integrity, and growth, ensuring we deliver consistent
            results for our clients.
          </p>
        </div>
      </div>

      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default OurExpertise
