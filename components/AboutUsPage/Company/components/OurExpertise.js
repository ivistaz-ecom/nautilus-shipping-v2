"use client"

import { arrowRightDarkIcon } from "@/utils/icon"
import { ourExpertiseList } from "@/utils/resources"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const OurExpertise = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleExpertise = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <>
      <div className="py-14 px-4">
        <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-10">
          <h2 className="text-7xl font-light">Our Expertise</h2>
          <p className="text-[22px] font-light">
            We provide a wide range of services designed to <br /> meet the
            diverse needs of the maritime sector:
          </p>

          <ul className="flex flex-col gap-5 w-full relative">
            {ourExpertiseList.map((item, index) => {
              return (
                <li key={index} className="cursor-pointer flex flex-col gap-3">
                  <div className="flex justify-between items-center w-1/3">
                    <span
                      className="text-3xl"
                      onClick={() => toggleExpertise(index)}
                    >
                      {item.title}
                    </span>
                    <Link href={item.link}>
                      <span className="text-xl hover:text-secondary">
                        {arrowRightDarkIcon}
                      </span>
                    </Link>
                  </div>

                  {openIndex === index && (
                    <div className="flex justify-between">
                      <p className="text-lg font-light w-2/5">{item.desc}</p>

                      <Image
                        src={item.imageUrl}
                        width={450}
                        height={600}
                        alt={item.title}
                        className="absolute right-0 -top-1/3"
                      />
                    </div>
                  )}
                </li>
              )
            })}
          </ul>

          <p className="text-[22px] font-light mt-5">
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
