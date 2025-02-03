import Image from "next/image"

const Careers = () => {
  return (
    <div className="h-auto py-14 flex flex-col gap-14">
      {/* card 1 */}
      <div className="max-w-screen-xl mx-auto w-full">
        <h2 className="text-8xl font-light">Careers</h2>
      </div>

      {/* card 2 */}
      <div className="w-full bg-primary">
        <h3 className="text-white text-6xl font-light max-w-screen-xl mx-auto py-5">
          The Heart of <br /> Our Success
        </h3>
      </div>

      {/* card 3 */}
      <div className="max-w-screen-xl mx-auto w-full relative">
        <div className="space-y-5 w-[536px]">
          <h3 className="text-3xl font-semibold">
            Why Join Nautilus Shipping?
          </h3>
          <p className="text-xl">
            At Nautilus Shipping, we recognize that our seafarers are the value
            to our growth. Your expertise and commitment drive our excellence.
            Set sail with Nautilus Shipping and shape a meaningful career in
            maritime shipping.
          </p>
          <button className="py-1.5 px-4 rounded-lg bg-secondary text-white hover:bg-primary hover:scale-95 transition-all duration-300 ease-in-out">
            Join Our Crew
          </button>
        </div>

        <Image
          src="/home-page/section-5/image01.png"
          width={515}
          height={767}
          alt="Careers"
          className="absolute right-0 -top-80 w-[425px]"
        />
      </div>
    </div>
  )
}

export default Careers
