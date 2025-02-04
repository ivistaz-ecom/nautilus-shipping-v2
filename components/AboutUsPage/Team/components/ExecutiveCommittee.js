"use client"

import { executiveCommitteeData } from "@/utils/member"
import Image from "next/image"
import { useEffect, useState } from "react"

const ExecutiveCommittee = () => {
  const [activeModal, setActiveModal] = useState(null)

  const openModal = (index) => {
    setActiveModal(index)
  }

  const closeModal = () => {
    setActiveModal(null)
    setTimeout(() => {
      setActiveModal(null) // Ensures React updates the state
    }, 0)
  }

  useEffect(() => {
    if (activeModal !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [activeModal])

  return (
    <>
      <div className="py-14 px-4">
        <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-14">
          <h2 className="text-6xl font-light">
            The Executive <br /> Committee
          </h2>

          <div className="max-w-screen-xl w-full md:pr-20 flex justify-center">
            <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {executiveCommitteeData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="border border-secondary min-w-[200px] rounded-md group overflow-hidden cursor-pointer shadow-md"
                    onClick={() => openModal(index)}
                  >
                    <div className="overflow-hidden rounded-t-md">
                      <Image
                        src="/about-us/member/Ajay.jpg"
                        width={250}
                        height={270}
                        alt={item.name}
                        className="w-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-300 ease-in-out"
                      />
                    </div>
                    <div className="bg-primary rounded-b-md flex justify-between py-2 px-3 h-full">
                      <div className="space-y-1 text-white">
                        <p>{item.name}</p>
                        <p className="text-xs">{item.post}</p>
                      </div>
                      <Image
                        src="/arrow.svg"
                        width={25}
                        height={25}
                        alt="arrow"
                      />
                    </div>

                    {/* Modal */}
                    {activeModal === index && (
                      <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 px-3">
                        <div className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow-xl border-2">
                          {/* Modal Header */}
                          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <div className="space-y-1">
                              <h3 className="text-xl font-semibold text-primary-text">
                                {item.name}
                              </h3>
                              <p className="text-base">{item.post}</p>
                            </div>
                            <button
                              type="button"
                              onClick={closeModal}
                              className="text-gray-400 bg-transparent hover:bg-secondary hover:text-white rounded-full text-sm w-8 h-8 flex justify-center items-center"
                            >
                              <svg
                                className="w-3 h-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                                aria-hidden="true"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                              </svg>
                              <span className="sr-only">Close modal</span>
                            </button>
                          </div>

                          {/* Modal Body */}
                          <div className="p-4 md:p-5 space-y-4 max-h-60 overflow-auto">
                            <p className="text-xs leading-relaxed overflow-auto">
                              {item.desc}
                            </p>
                          </div>

                          {/* Modal Footer */}
                        </div>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default ExecutiveCommittee
