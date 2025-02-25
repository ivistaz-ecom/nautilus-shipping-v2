"use client"

import { plusIcon } from "@/utils/icon"
import { crewMemberList } from "@/utils/member"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

const MeetOurCrewItems = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [activeCardIndex, setActiveCardIndex] = useState(null)
  const [clickedCardIndex, setClickedCardIndex] = useState(null)

  const toggleTeam = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  useEffect(() => {
    if (hoveredIndex !== null) {
      const timer = setTimeout(() => {
        setActiveCardIndex(hoveredIndex)
      }, 1000) // Flip after 1 second

      return () => clearTimeout(timer)
    } else if (clickedCardIndex === null) {
      setActiveCardIndex(null) // Reset only if no card is clicked
    }
  }, [hoveredIndex, clickedCardIndex])

  const toggleFlip = (index) => {
    setClickedCardIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className="max-w-screen-lg mx-auto ps-4 pt-14 w-full">
      <ul className="flex flex-col gap-10">
        {crewMemberList.map((item, index) => {
          return (
            <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div
                className="pr-3 pb-3 border-b border-gray-400 flex justify-between items-center gap-5 cursor-pointer w-full md:w-1/3"
                onClick={() => toggleTeam(index)}
              >
                <span className="text-xl sm:text-2xl font-light">
                  {item.department}
                </span>
                <button
                  className={`text-lg sm:text-xl transform transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  {plusIcon}
                </button>
              </div>

              {/* Smooth Height Transition */}
              <div
                className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="overflow-x-auto scrollbar-hide">
                  <ul className="flex gap-3 w-max">
                    {item.members.map((member, i) => {
                      const isActive =
                        activeCardIndex === i || clickedCardIndex === i

                      return (
                        <li
                          key={i}
                          className="relative border border-secondary min-w-[200px] rounded-md group overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out mt-3"
                          onMouseEnter={() => setHoveredIndex(i)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          onClick={() => toggleFlip(i)}
                        >
                          <motion.div
                            className="w-[250px] h-[270px] overflow-hidden relative"
                            initial={{ rotateY: 0 }}
                            animate={{ rotateY: isActive ? 180 : 0 }}
                            transition={{ duration: 0.6 }}
                          >
                            {/* Front Side */}
                            <motion.div
                              className="w-full h-full absolute top-0 left-0 bg-cover bg-center grayscale 
                                group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 ease-in-out"
                              style={{
                                backgroundImage: `url(${member.imageUrl})`,
                              }}
                              initial={{ opacity: 1 }}
                              animate={{ opacity: isActive ? 0 : 1 }}
                              transition={{ duration: 0.3 }}
                            />

                            {/* Back Side */}
                            <motion.div
                              className="w-full h-full absolute top-0 left-0 bg-black flex items-center justify-center"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: isActive ? 1 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="space-y-1 p-5 text-white text-center scale-x-[-1]">
                                <p className="text-lg sm:text-xl font-light">
                                  {member.name}
                                </p>
                                <p className="text-base sm:text-sm font-light">
                                  {member.post}
                                </p>
                              </div>
                            </motion.div>
                          </motion.div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MeetOurCrewItems
