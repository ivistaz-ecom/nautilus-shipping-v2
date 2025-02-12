import TailorSolutionsForm from "./TailorSolutionsForm"

const TailorSolutions = () => {
  return (
    <div className="bg-primary h-auto mb-14 py-10 md:py-14 px-3 md:px-4 rounded-xl sm:rounded-3xl">
      <div className="max-w-screen-lg mx-auto w-full flex flex-col gap-6">
        <h3 className="text-xl md:text-4xl text-white">
          Let’s Tailor Solutions for Your Fleet
        </h3>
        <p className="text-base text-white font-light">
          Your specific needs can be better understood by us through this
          form—whether it’s fleet type, operational challenges, or performance
          goals—so we can provide precise, tailored solutions.
        </p>

        <TailorSolutionsForm />
      </div>
    </div>
  )
}

export default TailorSolutions
