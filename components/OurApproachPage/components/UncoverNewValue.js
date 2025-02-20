import Image from "next/image"

const UncoverNewValue = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row max-w-screen-lg mx-auto border-y border-e border-gray-400">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/our-approach/img01.png"
            width={640}
            height={581}
            alt="Uncover New Value"
            className="w-full"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-evenly w-full lg:w-1/2">
          <h3 className="text-2xl sm:text-3xl font-light p-3 sm:p-7 w-full tracking-wide">
            Uncover New Value with Nautilus Shipping’s 4P Framework
          </h3>
          <hr className="border-gray-400 w-full" />
          <p className="text-base sm:text-lg tracking-wide font-light p-3 sm:p-7 w-full">
            At Nautilus Shipping, we understand that maximizing your fleet’s
            potential goes beyond traditional management. Our 4P framework is a
            strategic, results-driven approach tailored to align with your
            business goals, boost profitability, and deliver long-term value to
            your customers.
          </p>
        </div>
      </div>
    </>
  )
}

export default UncoverNewValue
