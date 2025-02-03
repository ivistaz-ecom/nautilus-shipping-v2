import Image from "next/image"

const Heading = () => {
  return (
    <div className="pt-[125px] pb-14">
      <div className="text-center max-w-screen-xl mx-auto w-full flex flex-col items-center gap-3">
        <h1 className="text-7xl font-light text-center leading-tight">
          Fleet Management
        </h1>
        <p className="text-4xl font-light">Growing Stronger Every Year</p>

        <Image
          src="/fleet/image01.png"
          width={1182}
          height={353}
          alt="fleet"
          className="w-full mt-5"
        />
        <p className="text-left mt-5 px-7">
          At Nautilus Shipping, we have successfully manned 237 vessels to date,
          delivering expert management and operational excellence across a
          diverse range of ships. Our fleet continues to expand as we take on
          new challenges and provide tailored solutions that ensure efficiency,
          safety, and compliance with global maritime standards. Whether
          managing bulk carriers, tankers, or specialized vessels, our expertise
          ensures that every ship operates at its highest potential.
        </p>
      </div>
    </div>
  )
}

export default Heading
