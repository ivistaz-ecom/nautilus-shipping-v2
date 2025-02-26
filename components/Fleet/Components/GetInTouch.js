import Link from "next/link"

const GetInTouch = () => {
  return (
    <div className="py-7 md:py-14 px-3">
      <div className="max-w-screen-lg mx-auto w-full flex flex-col gap-5">
        <h2 className="text-3xl md:text-5xl font-light leading-tight md:leading-tight tracking-wide">
          Looking for expert fleet <br className="hidden md:block" />
          management?
        </h2>
        <Link href="/contact-us">
          <button className="py-1.5 px-4 rounded-lg text-white bg-secondary hover:bg-primary hover:scale-95 transition-all duration-300 ease-in-out">
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
  )
}

export default GetInTouch
