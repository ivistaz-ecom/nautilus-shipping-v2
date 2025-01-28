import { navMenu } from "@/utils/data"
import Buttons from "./Buttons"
import Link from "next/link"

const NavMenuItems = () => {
  return (
    <div className="flex justify-between max-w-screen-xl mx-auto px-10 py-10">
      {/* menu items */}
      <ul className="space-y-3">
        {navMenu.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.path}>
                <button>
                  {item.menu} {item.subMenu.length > 0 && ">"}
                </button>
              </Link>
            </li>
          )
        })}
      </ul>
      <Buttons />
    </div>
  )
}

export default NavMenuItems
