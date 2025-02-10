import Link from "next/link"

const Explore = () => {
  return (
    <div className="py-14 px-4">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-7">
        <h2 className="text-3xl md:text-5xl font-light leading-tight md:leading-tight">
          Looking for sustainable <br /> ship management solutions?
        </h2>
        <Link href="/contact-us">
          <button className="py-1 px-5 rounded-lg text-white bg-secondary hover:bg-primary hover:scale-95 transition-all duration-300 ease-in-out">
            Explore
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Explore
