const Heading = () => {
  return (
    <div className="pt-24 md:pt-28 pb-8 md:pb-14">
      <div className="flex flex-col">
        <h1 className="text-2xl sm:text-4xl md:text-7xl font-light text-center px-3 tracking-wider">
          Events
        </h1>

        <div className="mt-7">
          <video className="w-full" autoPlay loop playsInline controls>
            <source
              src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/Nautilus-Website/nautilus_company_video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="bg-primary py-7">
          <div className="max-w-screen-lg mx-auto flex flex-col gap-5 text-white">
            <h3 className="text-3xl font-light leading-tight tracking-wide">
              BreakBulk Middle East <br className="hidden md:block" /> 2025
            </h3>
            <p className="text-lg font-light leading-tight tracking-wide">
              Two days of insightful discussions, impactful connections, and a
              shared vision for collaborative growth—Breakbulk Middle East 2025
              !
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heading
