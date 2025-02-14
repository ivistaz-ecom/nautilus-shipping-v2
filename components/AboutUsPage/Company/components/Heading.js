"use client"

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

        <div className="max-w-screen-lg mx-auto relative mt-5">
          <div className="absolute inset-0 -z-10 bg-primary blur opacity-50 rounded-lg"></div>

          <div className="absolute inset-0 -z-20 bg-secondary blur-2xl opacity-50 rounded-lg"></div>

          <video
            className="w-full h-auto relative rounded-lg"
            autoPlay
            loop
            playsInline
            controls
          >
            <source
              src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/Nautilus-Website/nautilus_company_video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default Heading
