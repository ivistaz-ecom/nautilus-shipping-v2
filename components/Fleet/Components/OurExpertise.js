const OurExpertise = () => {
  return (
    <>
      <div className="pb-7 md:pb-14 px-3">
        <div className="max-w-screen-lg mx-auto w-full flex flex-col gap-5 md:gap-7">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-light leading-tight md:leading-tight tracking-wide">
            <span className="text-secondary text-3xl sm:text-[45px] tracking-wide">
              Expanding Our Fleet,
            </span>{" "}
            <br className="hidden sm:block" />
            Strengthening <br className="hidden sm:block" /> Our Expertise
          </h2>

          <p className="text-lg md:text-xl font-light w-full sm:w-10/12 tracking-wide">
            Nautilus Shipping is continuously adding new vessels to its
            management portfolio. Every vessel benefits from our proactive
            maintenance strategies, operational efficiency models, and dedicated
            support teams, ensuring:
          </p>

          <ul className="list-disc text-base sm:text-lg md:text-xl font-light ps-3 sm:ps-10 md:ps-20 tracking-wide space-y-2">
            <li>Maximum uptime and performance</li>
            <li>Compliance with international safety standards</li>
            <li>Optimized cost and operational efficiency</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default OurExpertise
