import Button from "@/components/Button/Button"
import Header from "@/components/Header/Header"
import Image from "next/image"

const HeroBanner = () => {
  return (
    <div className="bg-[url('/home-page/hero.png')] h-screen flex flex-col justify-between">
      <Header />

      <div className="self-center text-center">
        <h1 className="text-white text-7xl text-center">
          The Standard for Excellence
        </h1>
        <h1 className="text-white text-[40px] text-center mt-3">
          in Ship Management and Marine Services
        </h1>
        <div className="mt-20 space-x-16">
          <button className="p-1.5 w-[116px] rounded-lg bg-white text-primary hover:text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
            Contact Us
          </button>

          <button className="p-1.5 w-[116px] rounded-lg bg-white text-primary hover:text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
            Careers
          </button>
        </div>
      </div>

      <button className="self-center pb-3">
        <Image src="/down.svg" width={22} height={52} alt="down" />
      </button>
    </div>
  )
}

export default HeroBanner
