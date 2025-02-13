import TailorSolutionsForm from "./TailorSolutionsForm"

const TailorSolutions = () => {
  return (
    <div className="py-10 md:py-14 px-3 md:px-10">
      <div className="px-5 py-10 max-w-screen-xl mx-auto bg-primary rounded-xl sm:rounded-3xl w-full flex flex-col gap-6">
        <h3 className="text-xl md:text-6xl font-light text-white">
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
