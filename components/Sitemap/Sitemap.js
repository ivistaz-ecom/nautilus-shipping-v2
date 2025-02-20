import Link from "next/link"
import Header from "../Header/Header"

const Sitemap = () => {
  return (
    <>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <div className="pt-24 md:pt-28 pb-7 md:pb-14">
        <div className="max-w-screen-lg mx-auto px-3 sm:px-0 flex flex-col gap-3">
          <h2 className="text-2xl sm:text-5xl md:text-5xl leading-tight md:leading-tight tracking-wide text-center">
            Sitemap
          </h2>
        </div>
      </div>
    </>
  )
}

export default Sitemap
