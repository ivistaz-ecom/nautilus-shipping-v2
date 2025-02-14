import Link from "next/link"

const Explore = () => {
  return (
    <div className="py-14 px-4">
      <div className="max-w-screen-lg mx-auto w-full flex flex-col gap-7">
        <h2 className="text-3xl md:text-5xl leading-tight md:leading-tight tracking-wide">
          Looking for sustainable <br /> ship management solutions?
        </h2>
        <Link href="/contact-us">
          <button className="py-1.5 px-6 rounded-lg text-white bg-secondary hover:bg-primary hover:scale-95 transition-all duration-300 ease-in-out">
            Explore
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Explore
