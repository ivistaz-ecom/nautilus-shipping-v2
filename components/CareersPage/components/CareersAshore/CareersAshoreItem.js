import Image from "next/image"
import Form from "./Form"

const CareersAshoreItem = () => {
  return (
    <div className="flex mt-14">
      <div className="w-1/2">
        <Image
          src="/careers/image01.png"
          width={683}
          height={776}
          alt="Careers At Sea"
          className="w-full h-full"
        />
      </div>
      <div className="bg-primary w-1/2">
        <Form />
      </div>
    </div>
  )
}

export default CareersAshoreItem
