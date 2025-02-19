import CareersAtSeaItem from "./CareersAtSeaItem"

const CareersAtSea = () => {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto w-full space-y-5 px-4 text-center sm:text-left">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-light">
          Careers At Sea
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-light w-full sm:w-10/12 mx-auto sm:mx-0">
          At Nautilus Shipping, we value our seafarers by ensuring on-time
          payments, offering competitive wages among the best in the industry,
          and prioritizing your safety with modern, well-maintained vessels that
          meet stringent safety standards. With a modern and expanding fleet
          equipped with cutting-edge technology, we provide exciting career
          opportunities both at sea and ashore, including pathways for career
          advancement. Join us to embark on a rewarding journey where your
          skills and dedication are truly recognized.
        </p>
      </div>

      <CareersAtSeaItem />
    </div>
  )
}

export default CareersAtSea
