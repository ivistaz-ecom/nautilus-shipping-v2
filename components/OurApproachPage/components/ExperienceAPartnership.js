import Image from "next/image"

const ExperienceAPartnership = () => {
  return (
    <div className="pb-14 px-4">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-7">
        <h2 className="text-5xl">
          Experience a Partnership <br /> That Adds Lasting Value
        </h2>
        <p className="text-[22px] font-light">
          Our 4P framework offers more than routine management—it’s a
          comprehensive partnership aimed at boosting operational efficiency,
          enhancing profitability, and aligning with your business vision. We
          believe in creating value that drives your fleet forward.
        </p>
        <Image
          src="/our-approach/image02.png"
          width={1234}
          height={545}
          alt="Experience a Partnership"
          className="w-full"
        />
      </div>
    </div>
  )
}

export default ExperienceAPartnership
