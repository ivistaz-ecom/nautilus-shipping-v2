import Image from "next/image"

const OurPeople = () => {
  return (
    <>
      <div className="py-7 md:py-14 px-3 md:px-4">
        <div className="max-w-screen-lg w-full mx-auto flex flex-col lg:flex-row items-center lg:justify-between lg:items-start gap-10">
          {/* Text Content */}
          <div className="space-y-4 lg:space-y-10 text-left">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-light tracking-wider">
              Our People
            </h2>
            <p className="text-base md:text-lg font-light sm:w-4/5">
              People are at the heart of Nautilus Shipping. From our experienced
              shore-based teams to the seafarers onboard, we emphasize training,
              welfare, and professional growth. This focus ensures motivated
              teams, high retention rates, and a seamless alignment with your
              operational goals.
            </p>
          </div>

          {/* Image Section */}
          <div className="">
            <Image
              src="/about-us/image01.png"
              width={475}
              height={400}
              alt="Our People"
              className="w-full max-w-[475px] lg:w-auto"
            />
          </div>
        </div>
      </div>

      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default OurPeople
