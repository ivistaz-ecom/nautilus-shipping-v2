const OurExpertise = () => {
  return (
    <>
      <div className="pb-14 px-4">
        <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-7">
          <h2 className="text-6xl font-light leading-tight tracking-wide">
            <span className="text-secondary text-[45px] tracking-normal">
              Expanding Our Fleet,
            </span>{" "}
            <br />
            Strengthening <br /> Our Expertise
          </h2>
          <p className="text-[26px] font-light w-10/12">
            Nautilus Shipping is continuously adding new vessels to its
            management portfolio. Every vessel benefits from our proactive
            maintenance strategies, operational efficiency models, and dedicated
            support teams, ensuring:
          </p>

          {/* <ul className="text-[22px] font-light ps-20">
          <li className="flex items-center  before:content-['•'] before:text-5xl before:mr-2">
            Maximum uptime and performance
          </li>
          <li className="flex items-center before:content-['•'] before:text-5xl before:mr-2">
            Compliance with international safety standards
          </li>
          <li className="flex items-center before:content-['•'] before:text-5xl before:mr-2">
            Optimized cost and operational efficiency
          </li>
        </ul> */}
          <ul className="list-disc text-[22px] font-light ps-20">
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
