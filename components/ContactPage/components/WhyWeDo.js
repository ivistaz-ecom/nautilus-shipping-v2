const WhyWeDo = () => {
  return (
    <>
      <div className="max-w-screen-xl w-full mx-auto px-4 flex justify-between items-center py-14">
        <h1 className="text-6xl font-light leading-tight">
          Why We Do <br /> What We Do <br /> at{" "}
          <span className="font-semibold">Nautilus</span>
        </h1>
        {/* A letter from our founders */}
        <div className="border border-[#707070] rounded-xl p-10 flex flex-col items-start justify-center gap-7">
          <p className="text-3xl font-light">A letter from our founders</p>
          <button className="py-1.5 px-4 bg-primary text-white rounded-lg hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
            Read More
          </button>
        </div>
      </div>
      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default WhyWeDo
