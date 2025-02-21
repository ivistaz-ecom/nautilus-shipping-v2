import LatestItems from "./LatestItems"

const Latest = () => {
  return (
    <div className="pt-7 sm:pt-14 px-3 md:px-10">
      <div className="max-w-screen-xl bg-primary px-5 py-7 md:py-14 rounded-xl sm:rounded-3xl w-full mx-auto space-y-5 sm:space-y-10">
        <h2 className="text-2xl sm:text-6xl text-white font-light text-center">
          Keep Up With The Latest
        </h2>
        <LatestItems />
      </div>
    </div>
  )
}

export default Latest
