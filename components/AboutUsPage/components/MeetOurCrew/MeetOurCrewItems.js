"use client"

import { closeIcon, plusIcon } from "@/utils/icon"
import { crewMemberList } from "@/utils/member"
import Image from "next/image"
import { useState } from "react"

const MeetOurCrewItems = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleTeam = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className="max-w-screen-xl mx-auto ps-4 pt-14 w-full">
      <ul className="flex flex-col gap-10">
        {crewMemberList.map((item, index) => {
          return (
            <li key={index}>
              <div
                className="pr-3 pb-3 border-b border-gray-400 inline-flex items-center gap-5 cursor-pointer"
                onClick={() => toggleTeam(index)}
              >
                <span className="text-2xl font-light">{item.department}</span>
                <button className="text-xl transform transition-transform duration-300 ease-in-out">
                  {openIndex === index ? closeIcon : plusIcon}
                </button>
              </div>

              {/* Add overflow-hidden for smooth height transition */}
              <div
                className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="overflow-x-auto scrollbar-hide">
                  <ul className="flex gap-5 w-max">
                    {item.members.map((member, i) => {
                      return (
                        <li
                          key={i}
                          className="border border-secondary min-w-[200px] rounded-md group overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out mt-3"
                        >
                          <div className="overflow-hidden rounded-t-md">
                            <Image
                              src={member.imageUrl}
                              width={250}
                              height={270}
                              alt={member.name}
                              className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-300 ease-in-out"
                            />
                          </div>
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
