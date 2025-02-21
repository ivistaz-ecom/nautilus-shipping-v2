import Link from "next/link"

const Copyright = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center py-3 gap-2 text-center md:text-left">
      {/* Copyright Text */}
      <span className="text-xs whitespace-nowrap">
        © 2025, Nautilus® All rights reserved
      </span>

      {/* Footer Links */}
      <ul className="flex items-center gap-2 md:gap-3 text-xs flex-wrap justify-center">
        {/* <li>
          <Link href="/sitemap">
            <button className="hover:text-secondary transition-colors duration-300">
              Sitemap
            </button>
          </Link>
        </li>
        <li className="hidden md:block">|</li> */}
        <li>
          <Link href="/privacy-policy">
            <button className="hover:text-secondary transition-colors duration-300">
              Privacy Statement
            </button>
          </Link>
        </li>
        <li className="hidden md:block">|</li>
        <li>
          <Link href="/disclaimer">
            <button className="hover:text-secondary transition-colors duration-300">
              Disclaimer
            </button>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Copyright
