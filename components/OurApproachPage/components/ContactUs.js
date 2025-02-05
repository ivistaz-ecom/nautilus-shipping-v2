import Link from "next/link"

const ContactUs = () => {
  return (
    <div className="pb-14 px-4">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-7">
        <h2 className="text-5xl font-light leading-tight">
          Curious to See the 4P Difference?
        </h2>
        <p className="text-[22px] font-light">
          Let’s discuss how our approach can be tailored to support your goals
          and maximise your returns.
        </p>
        <Link href="/contact-us">
          <button className="py-1 px-5 rounded-lg text-white bg-secondary hover:bg-primary hover:scale-95 transition-all duration-300 ease-in-out">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ContactUs
