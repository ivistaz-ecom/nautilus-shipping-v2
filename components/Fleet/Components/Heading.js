"use client"

import { ParallaxBanner } from "react-scroll-parallax"

const Heading = () => {
  return (
    <>
      <div className="pt-[100px] sm:pt-[125px] pb-14">
        <div className="text-center max-w-screen-lg mx-auto w-full flex flex-col items-center gap-3">
          <h1 className="text-3xl sm:text-7xl font-light text-center leading-tight md:leading-tight tracking-wide">
            Fleet Management
          </h1>
          <p className="text-2xl sm:text-4xl font-light tracking-wide">
            Growing Stronger Every Year
          </p>

          <ParallaxBanner
            layers={[
              { image: "/fleet/banner.png", speed: -15, expanded: false },
            ]}
            className="w-full mt-5 h-[353px]"
          />
          <p className="text-left mt-5 px-4 sm:px-7 text-base sm:text-lg font-light tracking-wide">
            At Nautilus Shipping, we have successfully manned 237 vessels to
            date, delivering expert management and operational excellence across
            a diverse range of ships. Our fleet continues to expand as we take
            on new challenges and provide tailored solutions that ensure
            efficiency, safety, and compliance with global maritime standards.
            Whether managing bulk carriers, tankers, or specialized vessels, our
            expertise ensures that every ship operates at its highest potential.
          </p>
        </div>
      </div>

      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default Heading
