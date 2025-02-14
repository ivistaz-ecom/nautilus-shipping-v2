"use client"

import { motion, AnimatePresence } from "framer-motion"
import { nautilusPromiseData } from "@/utils/data"
import { arrowIcon } from "@/utils/icon"
import Image from "next/image"
import { useState } from "react"

const PromiseItem = () => {
  const [selectedPromise, setSelectedPromise] = useState(nautilusPromiseData[0])

  const handleItemClick = (item) => {
    if (selectedPromise?.title === item.title) {
      return // Prevent re-animating the same item
    }
    setSelectedPromise(item)
  }

  return (
    <>
      <div className="bg-[url('/home-page/section-3/image01.png')] h-auto md:py-14 bg-cover bg-center relative">
        <div className="bg-secondary absolute inset-0 mix-blend-multiply block md:hidden"></div>
        <div className="justify-between items-center h-full max-w-screen-xl md:px-20 mx-auto hidden md:flex z-10">
          {/* Left Side: List */}
          <ul className="flex flex-col gap-5">
            {nautilusPromiseData.map((item, index) => {
              const isActive = selectedPromise?.title === item.title
              return (
                <li
                  key={index}
                  onClick={() => handleItemClick(item)}
                  className={`rounded-xl w-[325px] h-[110px] flex items-center px-5 relative cursor-pointer transition-all duration-300 tracking-wide ${
                    isActive
                      ? "bg-white text-black"
                      : "bg-secondary text-white hover:bg-primary group"
                  }`}
                >
                  <p
                    className={`text-2xl font-light transition-all duration-300 transform tracking-wide ${
                      isActive ? "" : "group-hover:-translate-y-2"
                    }`}
                  >
                    {item.title}
                  </p>
                  <span
                    className={`absolute right-5 bottom-6 text-2xl transition-all duration-300 transform ${
                      isActive ? "" : "group-hover:-translate-y-2"
                    }`}
                  >
                    {arrowIcon}
                  </span>
                </li>
              )
            })}
          </ul>

          {/* Right Side: Flipping Card Effect */}
          <AnimatePresence mode="wait">
            {selectedPromise && (
              <motion.div
                key={selectedPromise.title} // Forces re-animation on state change
                initial={{ rotateY: 90 }} // Start with rotation
                animate={{ rotateY: 0 }} // Flip animation
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white z-10 w-1/2 min-h-64 p-5 rounded-lg hidden md:flex flex-col justify-between gap-7"
              >
                <p className="text-3xl font-light relative tracking-wide">
                  {selectedPromise.title}
                  <span className="text-2xl absolute bottom-1 ml-2">
                    {arrowIcon}
                  </span>
                </p>
                <p className="text-lg font-light tracking-wide">
                  {selectedPromise.desc}
                </p>
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

        {/* Mobile Card */}
        <AnimatePresence mode="wait">
          {selectedPromise && (
            <motion.div
              key={selectedPromise.title}
              initial={{ rotateY: 90 }} // Start with rotation
              animate={{ rotateY: 0 }} // Flip animation
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative bg-white rounded-lg m-10 flex md:hidden h-44"
            >
              <div className="flex justify-between p-4 items-center">
                <div className="space-y-2 w-3/4 border-e border-gray-400">
                  <p className="text-lg font-light relative">
                    {selectedPromise.title}
                    <span className="text-lg absolute bottom-1 ml-2">
                      {arrowIcon}
                    </span>
                  </p>
                  <p className="text-xs font-light">{selectedPromise.desc}</p>
                </div>
                <div className="p-4">
                  <Image
                    src={selectedPromise.icon}
                    alt="Icon"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* mobile card */}
      <ul className="flex flex-col gap-5 items-center md:hidden">
        {nautilusPromiseData.map((item, index) => {
          const isActive = selectedPromise?.title === item.title
          return (
            <li
              key={index}
              onClick={() => handleItemClick(item)}
              className={`rounded-xl w-[275px] text-white flex items-center px-3 py-4 relative cursor-pointer transition-all duration-300 ${
                isActive ? "bg-secondary" : "bg-primary hover:bg-primary group"
              }`}
            >
              <p
                className={`text-lg font-light transition-all duration-300 transform ${
                  isActive ? "" : "group-hover:-translate-y-2"
                }`}
              >
                {item.title}
              </p>
              <span
                className={`absolute right-5 bottom-6 text-xl transition-all duration-300 transform ${
                  isActive ? "" : "group-hover:-translate-y-2"
                }`}
              >
                {arrowIcon}
              </span>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default PromiseItem
