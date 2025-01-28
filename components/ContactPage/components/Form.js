import Image from "next/image"

const Form = () => {
  return (
    <div className="flex h-[90vh] my-14">
      <div className="w-2/5 flex flex-col justify-between">
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
      <div className="bg-primary w-3/5 rounded-t-2xl"></div>
    </div>
  )
}

export default Form
