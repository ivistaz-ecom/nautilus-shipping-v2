import KeyFeaturesItems from "./KeyFeaturesItems"

const KeyFeatures = ({ data }) => {
  return (
    <div className="py-14 px-4">
      <div className="max-w-screen-xl w-full mx-auto space-y-6 sm:space-y-10">
        <h2 className="text-4xl sm:text-6xl font-light leading-tight">
          Key Features
        </h2>

        <KeyFeaturesItems keyFeaturesList={data.keyFeatures} />

        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <button className="peer py-1 px-6 rounded-lg border border-gray-500 text-primary hover:text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
            {data.buttonText}
          </button>
          <p className="text-lg sm:text-xl text-center font-light opacity-0 invisible transition-opacity duration-300 ease-in-out peer-hover:opacity-100 peer-hover:visible peer-focus:opacity-100 peer-focus:visible">
            {data.desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default KeyFeatures
