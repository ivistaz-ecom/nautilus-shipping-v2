import { navMenu } from "@/utils/data"
import Buttons from "./Buttons"

const NavMenuItems = () => {
  return (
    <div className="flex justify-between max-w-screen-xl mx-auto px-10 py-10">
      {/* menu items */}
      <ul className="space-y-3">
        {navMenu.map((item, index) => {
          return (
            <li key={index}>
              <button>
                {item.menu} {item.subMenu.length > 0 && ">"}
              </button>
            </li>
          )
        })}
      </ul>
      <Buttons />
    </div>
  )
}

export default NavMenuItems
