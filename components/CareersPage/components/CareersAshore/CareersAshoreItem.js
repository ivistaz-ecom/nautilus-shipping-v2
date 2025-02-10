import Image from "next/image"
import Form from "./Form"

const CareersAshoreItem = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-14">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/careers/image01.png"
          width={683}
          height={776}
          alt="Careers At Sea"
          className="w-full h-auto"
        />
      </div>

      {/* Form Section */}
      <div className="bg-primary flex items-center w-full lg:w-1/2 p-5">
        <Form />
      </div>
    </div>
  )
}

export default CareersAshoreItem
