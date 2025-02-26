import TailorSolutionsForm from "./TailorSolutionsForm"

const TailorSolutions = () => {
  return (
    <div className="pt-3 pb-7 md:pb-14 px-3">
      <div className="px-3 md:px-5 py-7 max-w-screen-lg mx-auto bg-primary rounded-xl sm:rounded-3xl w-full flex flex-col gap-6">
        <h3 className="text-xl md:text-3xl font-light text-white">
          Let’s Tailor Solutions for Your Fleet
        </h3>
        <p className="text-white font-light">
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
