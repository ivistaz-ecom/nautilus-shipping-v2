import Link from "next/link"

const FutureTogether = () => {
  return (
    <div className="py-7 md:py-14 px-3 md:px-4">
      <div className="max-w-screen-xl w-full mx-auto flex flex-col gap-6 text-left">
        <h2 className="text-3xl md:text-5xl font-light leading-tight">
          Let’s Navigate the <br className="hidden sm:block" /> Future Together
        </h2>
        <p className="text-base md:text-xl font-light">
          At Nautilus Shipping, we are redefining ship management through
          innovation, sustainability, and unwavering commitment to excellence.
          Whether you’re looking for expert management, reliable crew, or
          strategic operational support, we’re here to ensure your success at
          sea.
        </p>
        <div>
          <Link href="/contact-us">
            <button className="py-1.5 px-4 rounded-lg bg-primary text-white hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FutureTogether
