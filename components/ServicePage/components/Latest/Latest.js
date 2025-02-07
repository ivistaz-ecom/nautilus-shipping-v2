import LatestItems from "./LatestItems"

const Latest = () => {
  return (
    <div className="py-10 px-4 bg-primary rounded-3xl">
      <div className="max-w-screen-xl w-full mx-auto space-y-5">
        <h2 className="text-5xl text-white font-light">
          Keep Up With The Latest
        </h2>
        <LatestItems />
      </div>
    </div>
  )
}

export default Latest
