"use client"

import { motion, AnimatePresence } from "framer-motion"
import { nautilusPromiseData } from "@/utils/data"
import { arrowIcon } from "@/utils/icon"
import Image from "next/image"
import { useState } from "react"

const PromiseItem = () => {
  const [selectedPromise, setSelectedPromise] = useState(null)
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 })

  const handleItemClick = (event, item) => {
    if (selectedPromise?.title === item.title) {
      // Deselect if the same item is clicked again
      setSelectedPromise(null)
    } else {
      // Set new selected item
      const rect = event.currentTarget.getBoundingClientRect()
      setStartPosition({ x: rect.left, y: rect.top })
      setSelectedPromise(item)
    }
  }

  return (
    <div className="bg-[url('/home-page/section-3/image01.png')] h-screen bg-cover">
      <div className="flex justify-between items-center h-full max-w-screen-xl mx-auto">
        {/* Left Side: List */}
        <ul className="flex flex-col gap-4">
          {nautilusPromiseData.map((item, index) => {
            const isActive = selectedPromise?.title === item.title
            return (
              <li
                key={index}
                onClick={(e) => handleItemClick(e, item)}
                className={`rounded-xl w-[309px] h-[110px] flex items-center px-5 relative cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black"
                    : "bg-secondary text-white hover:bg-primary group"
                }`}
              >
                <p
                  className={`text-2xl font-light transition-all duration-300 transform ${
                    isActive ? "" : "group-hover:-translate-y-2"
                  }`}
                >
                  {item.title}
                </p>
                <span
                  className={`absolute right-5 bottom-5 text-2xl transition-all duration-300 transform ${
                    isActive ? "" : "group-hover:-translate-y-2"
                  }`}
                >
                  {arrowIcon}
                </span>
              </li>
            )
          })}
        </ul>

        {/* Right Side: White Box (Hidden Until Clicked) */}
        <AnimatePresence>
          {selectedPromise && (
            <motion.div
              initial={{
                x: "-150%", // Start from off-screen (left)
                rotate: -360, // Full rotation before appearing
                opacity: 0,
              }}
              animate={{
                x: 0, // Move to final position
                rotate: 0, // End rotation
                opacity: 1,
                transition: { duration: 0.6, ease: "easeOut" },
              }}
              exit={{
                x: "-150%", // Exit back to the left
                rotate: -360, // Full rotation before disappearing
                opacity: 0,
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
              className="bg-white w-[373px] p-5 rounded-lg flex flex-col gap-7 transition-all duration-300"
            >
              <p className="text-2xl font-light relative">
                {selectedPromise.title}
                <span className="text-2xl absolute bottom-1 ml-2">
                  {arrowIcon}
                </span>
              </p>
              <p className="text-lg font-light">{selectedPromise.desc}</p>
              <div className="flex justify-center">
                <Image
                  src={selectedPromise.icon}
                  alt="Icon"
                  width={50}
                  height={50}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default PromiseItem
