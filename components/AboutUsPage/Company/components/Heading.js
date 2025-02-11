const Heading = () => {
  return (
    <div className="pt-[125px] pb-8 md:pb-14">
      <div className="flex flex-col gap-5 md:gap-10">
        <h1 className="text-3xl md:text-6xl font-light text-center leading-tight md:leading-tight px-3">
          Navigating Excellence in Global <br className="hidden sm:block" />{" "}
          Ship Management
        </h1>

        <div
          className="relative h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/about-us/banner01.png')" }}
        >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>
    </div>
  )
}

export default Heading
