import Image from "next/image"
import Form from "./Form"

const CareersAtSeaItem = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto pt-7 sm:pt-14">
      <div className="bg-primary flex w-full md:w-1/2">
        <Form />
      </div>
      <div className="w-full md:w-1/2 self-center">
        <Image
          src="/careers/img01.png"
          width={683}
          height={776}
          alt="Careers At Sea"
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}

export default CareersAtSeaItem
