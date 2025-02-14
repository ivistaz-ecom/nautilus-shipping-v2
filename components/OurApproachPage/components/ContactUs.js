import Link from "next/link"

const ContactUs = () => {
  return (
    <div className="pb-7 sm:pb-14 px-3 md:px-4">
      <div className="max-w-screen-lg mx-auto w-full flex flex-col gap-5 sm:gap-7">
        <h2 className="text-2xl sm:text-6xl leading-tight md:leading-tight tracking-wide">
          Curious to See the 4P Difference?
        </h2>
        <p className="text-base sm:text-xl font-light tracking-wide">
          Let’s discuss how our approach can be tailored to support your goals
          and maximize your returns.
        </p>
        <Link href="/contact-us">
          <button className="py-1.5 px-6 rounded-lg text-white bg-secondary hover:bg-primary hover:scale-95 transition-all duration-300 ease-in-out">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ContactUs
