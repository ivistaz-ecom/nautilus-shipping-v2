const MessageFromCeo = () => {
  return (
    <div className="py-10 px-4" data-aos="flip-up">
      <div className="bg-primary max-w-screen-lg mx-auto p-5 rounded-lg">
        <div className="max-w-screen-lg mx-auto w-full flex flex-col gap-5 sm:gap-10 text-white">
          {/* <Image
          src="/about-us/ceo.png"
          width={413}
          height={444}
          alt="ceo"
          className="w-full max-w-[300px] sm:max-w-[413px] h-auto"
        /> */}

          <h3 className="text-3xl md:text-6xl font-light leading-tight md:leading-tight">
            Message From <br /> The CEO
          </h3>
          <p className="text-sm md:text-lg font-[100] w-full tracking-wide">
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
