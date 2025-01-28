import PromiseItem from "./PromiseItem"
import Heading from "./Heading"
import Image from "next/image"

const NautilusPromise = () => {
  return (
    <div className="min-h-screen py-14 flex flex-col gap-14">
      <Heading />
      <PromiseItem />
      <div className="max-w-screen-xl mx-auto flex flex-col items-start gap-5 w-full">
        <h3 className="text-5xl font-light leading-tight">
          Safeguard Your Investment, <br /> Maximize Your Returns
        </h3>
        <p className="text-[#6E6E6E] text-xl font-light">
          Contact us for Ship Management, Crew Management, Ship Agency &
          Logistics, <br /> Inspection and Commercial Ship Services.
        </p>

        <div className="flex items-center gap-3">
          <Image
            src="/home-page/section-3/icon01.svg"
            width={35}
            height={35}
            alt="call"
          />
          <span className="text-primary text-xl font-semibold">
            +91 44 4684 9999
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Image
            src="/home-page/section-3/icon02.svg"
            width={35}
            height={35}
            alt="location"
          />
          <span className="text-primary text-xl font-semibold">
            hello@nautilusshipping.com
          </span>
        </div>

        <button className="py-1.5 px-4 rounded-lg bg-secondary text-white hover:bg-primary hover:scale-95 transition-all duration-300 ease-in-out">
          Let’s Connect
        </button>
      </div>
    </div>
  )
}

export default NautilusPromise
