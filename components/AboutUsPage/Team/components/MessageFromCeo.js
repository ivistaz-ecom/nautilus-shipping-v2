import Image from "next/image"

const MessageFromCeo = () => {
  return (
    <div className="bg-primary py-14 px-4">
      <div className="max-w-screen-xl mx-auto w-full flex justify-between gap-20">
        <Image src="/about-us/ceo.png" width={413} height={444} alt="ceo" />
        <div className="space-y-3 text-white">
          <h3 className="text-6xl font-light">
            Message From <br /> The Ceo
          </h3>
          <p className="text-[22px] font-light w-4/5 p-5">
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
