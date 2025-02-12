import LatestItems from "./LatestItems"

const Latest = () => {
  return (
    <div className="py-8 sm:py-14 px-3 md:px-4 bg-primary rounded-xl sm:rounded-3xl mb-10">
      <div className="max-w-screen-xl w-full mx-auto space-y-5 sm:space-y-10">
        <h2 className="text-2xl sm:text-5xl text-white font-light">
          Keep Up With The Latest
        </h2>
        <LatestItems />
      </div>
    </div>
  )
}

export default Latest
