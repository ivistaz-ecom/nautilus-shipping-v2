import KeyFeaturesItems from "./KeyFeaturesItems"

const KeyFeatures = () => {
  return (
    <div className="py-14 px-4">
      <div className="max-w-screen-xl w-full mx-auto space-y-10">
        <h2 className="text-6xl font-light leading-tight">Key Features</h2>
        <KeyFeaturesItems />

        <div className="flex flex-col items-center gap-3 group">
          <button className="py-1 px-6 rounded-lg border border-gray-500 text-primary hover:text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
            Explore
          </button>
          <p className="text-xl text-center font-light opacity-0 invisible transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:visible">
            ship management solutions that keep your fleet running efficiently
          </p>
        </div>
      </div>
    </div>
  )
}

export default KeyFeatures
