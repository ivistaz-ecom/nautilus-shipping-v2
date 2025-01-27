import Link from "next/link"
import Image from "next/image"
import { closeIcon } from "@/utils/icon"
import NavMenuItems from "./NavMenuItems"

const NavMenu = ({ handleMenu }) => {
  return (
    <div className="bg-white rounded-b-xl absolute top-0 right-0 left-0">
      <div className="border-b border-gray-500">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <Link href="/">
            <Image
              src="/logo.png"
              width={126}
              height={54}
              alt="Nautilus Shipping"
              priority
            />
          </Link>
          <button onClick={handleMenu} className="text-4xl">
            {closeIcon}
          </button>
        </div>
      </div>

      <NavMenuItems />
    </div>
  )
}

export default NavMenu
