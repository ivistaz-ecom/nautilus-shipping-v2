import Image from "next/image"

const OurPeople = () => {
  return (
    <>
      <div className="py-14 px-4">
        <div className="max-w-screen-xl w-full mx-auto flex">
          {/* card 1 */}
          <div className="space-y-10">
            <h2 className="text-6xl font-light">Our People</h2>
            <p className="text-[22px] font-light w-3/4">
              People are at the heart of Nautilus Shipping. From our experienced
              shore-based teams to the seafarers onboard, we emphasize training,
              welfare, and professional growth. This focus ensures motivated
              teams, high retention rates, and a seamless alignment with your
              operational goals.
            </p>
          </div>

          {/* card 2 */}
          <div className="w-full">
            <Image
              src="/about-us/image01.png"
              width={475}
              height={400}
              alt="Our People"
            />
          </div>
        </div>
      </div>
      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default OurPeople
