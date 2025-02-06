import Image from "next/image"
import Form from "./Form"

const FillOutForm = () => {
  return (
    <div className="flex my-14">
      <div className="w-1/2 flex flex-col justify-between">
        <h2 className="text-5xl font-light p-14">
          Fill out the form, <br /> and our team will <br /> get back to you.
        </h2>
        <Image
          src="/contact-us/image01.png"
          width={656}
          height={437}
          alt="Contact Us"
          className="w-full"
        />
      </div>

      {/* form */}
      <div className="bg-primary w-3/5 rounded-t-2xl">
        <Form />
      </div>
    </div>
  )
}

export default FillOutForm
