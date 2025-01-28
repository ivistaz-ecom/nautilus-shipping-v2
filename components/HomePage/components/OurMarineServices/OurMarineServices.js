import { arrowIcon } from "@/utils/icon"
import Image from "next/image"

const OurMarineServices = () => {
  return (
    <div className="h-screen bg-primary py-14 flex flex-col gap-20 relative">
      <div>
        <h2 className="text-white text-8xl text-center font-light">
          Our Marine Services
        </h2>
        <hr className="border-[#707070] mt-7" />
      </div>

      <div className="max-w-screen-xl mx-auto flex justify-between w-full">
        {/* card 1 */}
        <div className="space-y-10 w-[444px]">
          <p className="text-3xl text-white flex items-center gap-3">
            Ship Management{" "}
            <span className="text-gray-400 text-2xl">{arrowIcon}</span>
          </p>
          <p className="text-xl font-light text-white">
            Providing reliable fleet management services to ensure safety,
            efficiency, and compliance across your operations. We tailor
            technical management to address the specific needs of your vessels.
          </p>
          <button className="py-1.5 px-4 w-[146px] rounded-lg border border-gray-400 text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
            Read More
          </button>
        </div>

        {/* card 2 */}

        <Image
          src="/home-page/section-4/image01.png"
          width={470}
          height={400}
          alt="Ship Management"
          className="z-30 mr-20"
        />
      </div>
      <hr className="w-[400px] absolute right-0 bottom-[40%]" />
    </div>
  )
}

export default OurMarineServices
