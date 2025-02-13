import Image from "next/image"

const MessageFromCeo = () => {
  return (
    <div className="bg-primary py-10 px-4">
      <div className="max-w-screen-lg mx-auto w-full flex flex-col sm:flex-row justify-between gap-5 sm:gap-20 items-center">
        <Image
          src="/about-us/ceo.png"
          width={413}
          height={444}
          alt="ceo"
          className="w-full max-w-[300px] sm:max-w-[413px] h-auto"
        />
        <div className="space-y-3 text-white text-center sm:text-left">
          <h3 className="text-3xl md:text-6xl font-light leading-tight md:leading-tight">
            Message From <br /> The CEO
          </h3>
          <p className="text-sm md:text-lg font-[100] w-full p-3 sm:p-5 tracking-wide">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit”
          </p>
        </div>
      </div>
    </div>
  )
}

export default MessageFromCeo
