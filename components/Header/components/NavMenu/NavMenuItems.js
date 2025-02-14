import { navMenu } from "@/utils/data"
import Buttons from "./Buttons"
import Link from "next/link"
import { useState } from "react"
import { shorArrowIcon } from "@/utils/icon"

const NavMenuItems = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [submenuTimeout, setSubmenuTimeout] = useState(null)

  const handleMouseEnter = (index) => {
    if (submenuTimeout) clearTimeout(submenuTimeout)
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredIndex(null)
    }, 300)

    setSubmenuTimeout(timeout)
  }

  return (
    <div className="flex flex-col md:flex-row justify-between h-full max-w-screen-lg mx-auto px-5 md:px-0 pt-10 pb-32">
      {/* menu items */}
      <ul className="space-y-3">
        {navMenu.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-1 w-full relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={item.path}>
              <button
                className={`flex items-center gap-1 ${
                  index === hoveredIndex ? "text-secondary" : ""
                }`}
              >
                {item.menu}{" "}
                {item.subMenu.length > 0 && item.subMenu[0].type === "page" ? (
                  <span className="font-thin">{shorArrowIcon}</span>
                ) : null}
              </button>
            </Link>

            {hoveredIndex === index && item.subMenu.length > 0 && (
              <div
                className="flex items-center gap-3 relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <hr className="w-14 border-black" />
                <ul className="absolute left-[64px] -top-3">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link href={subItem.path}>
                        <button className="w-[200px] flex items-center gap-1 hover:text-secondary">
                          {subItem.menu}
                          {/* {subItem.type === "page" && (
                            <span className="font-thin">{shorArrowIcon}</span>
                          )} */}
                        </button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="self-start">
        <Buttons />
      </div>
    </div>
  )
}

export default NavMenuItems
