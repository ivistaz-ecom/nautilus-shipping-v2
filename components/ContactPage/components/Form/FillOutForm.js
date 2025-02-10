import Image from "next/image"
import Form from "./Form"

const FillOutForm = () => {
  return (
    <div className="flex flex-col sm:flex-row md:my-14 gap-10 sm:gap-0">
      {/* Left Section */}
      <div className="sm:w-1/2 flex flex-col justify-between">
        <h2 className="text-2xl sm:text-5xl font-light p-6 sm:p-14">
          Fill out the form, <br className="hidden sm:block" /> and our team
          will <br className="hidden sm:block" /> get back to you.
        </h2>
        <Image
          src="/contact-us/image01.png"
          width={656}
          height={437}
          alt="Contact Us"
          className="w-full"
        />
      </div>

      {/* Form Section */}
      <div className="bg-primary w-full sm:w-3/5 rounded-t-2xl">
        <Form />
      </div>
    </div>
  )
}

export default FillOutForm
