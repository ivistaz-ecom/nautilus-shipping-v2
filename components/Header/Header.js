"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import NavMenu from "./NavMenu/NavMenu"

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <nav className="border-b border-gray-300">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <Link href="/">
            <Image
              src="/white-logo.png"
              width={126}
              height={54}
              alt="Nautilus Shipping"
              priority
            />
          </Link>
          <div className="flex items-center gap-5">
            <button>
              <Image src="/search.svg" width={29} height={29} alt="search" />
            </button>
            <button onClick={handleMenu}>
              <Image
                src="/hamburger.svg"
                width={33}
                height={25}
                alt="hamburger-menu"
              />
            </button>
          </div>
        </div>
      </nav>
      {openMenu && <NavMenu handleMenu={handleMenu} />}
    </>
  )
}

export default Header
