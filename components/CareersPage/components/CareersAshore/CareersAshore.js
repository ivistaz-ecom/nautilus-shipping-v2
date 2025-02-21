import CareersAshoreItem from "./CareersAshoreItem"

const CareersAshore = () => {
  return (
    <div className="pt-7 sm:pt-14">
      <div className="max-w-screen-xl mx-auto w-full space-y-4 sm:space-y-5 px-4">
        <h2 className="text-3xl sm:text-5xl font-light tracking-wide">
          Careers Ashore
        </h2>
        <p className="text-base sm:text-lg font-light tracking-wide w-10/12">
          Drive operations, strategy, and innovation from our onshore offices,
          ensuring seamless maritime excellence.
        </p>
      </div>

      <CareersAshoreItem />
    </div>
  )
}

export default CareersAshore
