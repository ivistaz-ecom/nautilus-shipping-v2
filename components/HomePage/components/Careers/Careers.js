import Image from "next/image"
import Link from "next/link"

const Careers = () => {
  return (
    <div className="h-auto py-14 flex flex-col gap-8 px-0 sm:px-6 md:gap-14">
      {/* card 1 */}
      <div className="max-w-screen-xl mx-auto w-full px-4">
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-light">Careers</h2>
      </div>

      {/* card 2 */}
      <div className="w-full bg-primary">
        <h3 className="text-white text-2xl sm:text-5xl md:text-6xl font-light max-w-screen-xl mx-auto py-5 px-3 md:px-0 tracking-wide">
          The Heart of Our Success
        </h3>
        <div className="block md:hidden">
          <Image
            src="/home-page/section-5/image0.png"
            width={1000}
            height={500}
            alt="career-mobile"
            className="w-full md:hidden"
          />
        </div>
      </div>

      {/* mobile image */}

      {/* card 3 */}
      <div className="max-w-screen-xl mx-auto w-full relative flex flex-col sm:flex-row gap-10 px-4">
        <div className="flex flex-col gap-5 w-full sm:w-[536px]">
          <h3 className="text-2xl sm:text-3xl tracking-wide">
            Why Join Nautilus Shipping?
          </h3>
          <p className="text-lg sm:text-xl font-light tracking-wide">
            At Nautilus Shipping, we recognize that our seafarers are the value
            to our growth. Your expertise and commitment drive our excellence.
            Set sail with Nautilus Shipping and shape a meaningful career in
            maritime shipping.
          </p>

          <Link href="/careers">
            <button className="py-1.5 px-4 rounded-lg bg-secondary text-white hover:bg-primary hover:scale-95 transition-all duration-300 ease-in-out">
              Join Our Crew
            </button>
          </Link>
        </div>

        <div className="hidden md:flex justify-center sm:justify-end w-full md:-mt-64">
          <Image
            src="/home-page/section-5/image01.png"
            width={425}
            height={767}
            alt="Careers"
            className="w-[280px] sm:w-[375px] md:w-[425px] h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Careers
