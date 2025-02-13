const Heading = () => {
  return (
    <div className="pt-24 md:pt-[125px] pb-8 md:pb-14">
      <div className="flex flex-col gap-5 md:gap-10">
        <h1 className="text-2xl sm:text-4xl md:text-7xl font-light text-center px-3 tracking-wider">
          Navigating Excellence <br />{" "}
          <span className="text-secondary text-xl sm:text-3xl md:text-5xl">
            in Global Ship Management
          </span>
        </h1>

        <div
          className="relative h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/about-us/banner.png')" }}
        >
          {/* Overlay for better text visibility */}
          {/* <div className="absolute inset-0 bg-black/30"></div> */}
        </div>
      </div>
    </div>
  )
}

export default Heading
