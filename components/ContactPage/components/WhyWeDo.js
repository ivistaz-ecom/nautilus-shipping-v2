const WhyWeDo = () => {
  return (
    <>
      <div className="max-w-screen-lg w-full mx-auto px-4 flex flex-col-reverse md:flex-row justify-between items-center py-7 sm:py-14 gap-10">
        <h1 className="order-1 sm:order-none text-3xl sm:text-5xl md:text-6xl font-light leading-tight md:leading-tight text-center md:text-left">
          Why We Do <br /> What We Do <br /> at{" "}
          <span className="font-semibold">Nautilus</span>
        </h1>

        {/* A letter from our founders */}
        <div className="border border-[#707070] rounded-xl p-6 sm:p-10 flex flex-col items-center md:items-start justify-center gap-7">
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-center md:text-left">
            A letter from our founders
          </p>
          <button className="py-1.5 px-4 bg-primary text-white rounded-lg hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
            Read More
          </button>
        </div>
      </div>

      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default WhyWeDo
