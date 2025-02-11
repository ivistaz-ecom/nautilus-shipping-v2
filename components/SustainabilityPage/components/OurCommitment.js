const OurCommitment = () => {
  return (
    <div className="pt-14 px-4">
      <div className="max-w-screen-xl mx-auto bg-[url('/our-approach/image02.png')] rounded-lg py-10 bg-cover bg-center relative">
        <div className="absolute inset-0 bg-[#0C5C2E] rounded-lg mix-blend-multiply z-10"></div>
        <div className="flex flex-col justify-center h-full gap-10 px-4 sm:px-10 relative z-20 w-full sm:w-3/5">
          <h1 className="text-2xl sm:text-6xl font-light text-white leading-tight md:leading-tight px-2 sm:px-3">
            Our Commitment <br className="hidden sm:block" /> to a Sustainable{" "}
            <br className="hidden sm:block" /> Maritime Future
          </h1>
          <hr className="border-gray-400 w-full" />
          <p className="text-base sm:text-xl text-white font-light px-2 sm:px-3">
            At Nautilus Shipping, we believe in shaping a future where shipping
            is smarter, cleaner, and more efficient. By integrating
            sustainability into every aspect of our operations, we contribute to
            global efforts in building a more resilient and environmentally
            responsible maritime industry.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurCommitment
