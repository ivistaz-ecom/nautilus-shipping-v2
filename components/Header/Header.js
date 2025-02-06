"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import NavMenu from "./components/NavMenu/NavMenu"
import { usePathname } from "next/navigation"

const Header = ({ logo, hamburger, search }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleMenu = () => {
    setOpenMenu((prev) => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const isHomepage = pathname === "/"

  return (
    <>
      <nav
        className={`border-b border-gray-300 fixed top-0 right-0 left-0 transition-colors duration-300 z-50 ${
          scrolled || !isHomepage ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <Link href="/">
            <Image
              src={scrolled ? "/logo.png" : logo}
              width={126}
              height={54}
              alt="Nautilus Shipping"
              priority
            />
          </Link>
          <div className="flex items-center gap-5">
            <button>
              <Image
                src={scrolled ? "/search-dark.svg" : search}
                width={29}
                height={29}
                alt="search"
              />
            </button>
            <button onClick={handleMenu}>
              <Image
                src={scrolled ? "/hamburger-dark.svg" : hamburger}
                width={33}
                height={25}
                alt="hamburger-menu"
              />
            </button>
          </div>
        </div>
      </nav>
      {openMenu && <NavMenu menuRef={menuRef} handleMenu={handleMenu} />}
    </>
  )
}

export default Header
