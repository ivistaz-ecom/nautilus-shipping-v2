import CareersAtSeaItem from "./CareersAtSeaItem"

const CareersAtSea = () => {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto w-full space-y-5 px-4 text-center sm:text-left">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-light">
          Careers at Sea
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-light w-full sm:w-10/12 mx-auto sm:mx-0">
          Embark on rewarding voyages as part of a skilled crew, navigating the
          world’s oceans with expertise.
        </p>
      </div>

      <CareersAtSeaItem />
    </div>
  )
}

export default CareersAtSea
