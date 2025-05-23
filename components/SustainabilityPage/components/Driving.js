const Driving = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 max-w-screen-lg mx-auto border-y border-gray-400">
        <div className="w-full md:w-1/2 px-3 md:px-0">
          <h2 className="text-3xl sm:text-5xl leading-tight md:leading-tight text-center md:text-left pt-5 md:pt-0 tracking-wide">
            Driving a <br className="hidden sm:block" /> Greener Future{" "}
            <br className="hidden sm:block" /> in Maritime{" "}
            <br className="hidden sm:block" /> Operations
          </h2>
        </div>

        <div className="w-full md:w-3/4 bg-[#0C5C2E] p-2 md:p-5">
          <p className="text-white p-3 text-base sm:text-lg font-light leading-tight tracking-wider sm:leading-tight sm:tracking-wider">
            At{" "}
            <span className="">
              Nautilus Shipping, sustainable ship management
            </span>{" "}
            is not just a commitment—it’s embedded in how we operate.{" "}
            <br className="hidden md:block" /> As one of the forward-thinking{" "}
            <span className="">ship management companies in India</span>, we
            continuously implement strategies to reduce emissions, enhance
            energy efficiency, and uphold global environmental compliance. Our
            approach blends advanced technology, operational excellence, and
            industry best practices to lower the ecological footprint of
            maritime operations while ensuring high standards of safety and
            performance.
          </p>
        </div>
      </div>

      {/* <hr className="border-gray-400 w-full" /> */}
    </>
  )
}

export default Driving
