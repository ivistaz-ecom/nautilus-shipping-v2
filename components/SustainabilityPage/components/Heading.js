import Image from "next/image"

const Heading = () => {
  return (
    <>
      <div className="pt-[125px] pb-14 px-4">
        <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-3">
          <h1 className="text-7xl leading-tight">
            <span className="text-[#0C5C2E]">Sustainability</span> <br /> at
            Nautilus Shipping
          </h1>

          <Image
            src="/sustainability/banner.png"
            width={1182}
            height={536}
            alt="fleet"
            className="w-full mt-5"
          />
        </div>
      </div>
      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default Heading
