import Image from "next/image"
import { ParallaxBanner } from "react-scroll-parallax"

const Heading = () => {
  return (
    <>
      <div className="pt-28 pb-14 px-4">
        <div className="max-w-screen-lg mx-auto w-full flex flex-col gap-3">
          <h1 className="text-4xl md:text-7xl leading-tight md:leading-tight">
            <span className="text-[#0C5C2E]">Sustainability</span> <br /> at
            Nautilus Shipping
          </h1>

          <ParallaxBanner
            layers={[
              {
                image: "/sustainability/banner01.png",
                speed: -15,
                expanded: false,
              },
            ]}
            className="w-full mt-5 h-[475px]"
          />
          {/* <Image
            src="/sustainability/banner.png"
            width={1182}
            height={536}
            alt="fleet"
            className="w-full mt-5"
            priority
          /> */}
        </div>
      </div>

      {/* <hr className="border-gray-400 w-full" /> */}
    </>
  )
}

export default Heading
