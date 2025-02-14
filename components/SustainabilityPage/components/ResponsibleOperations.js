const ResponsibleOperations = () => {
  return (
    <>
      <div className="py-14 max-w-screen-lg mx-auto w-full flex flex-col gap-7 border-b border-gray-400">
        <h2 className="text-3xl sm:text-5xl leading-tight md:leading-tight tracking-wide">
          People, Safety, and <br className="hidden sm:block" /> Responsible
          Operations
        </h2>

        <p className="text-lg sm:text-xl font-light tracking-wide">
          Sustainability extends beyond environmental efforts—it includes the
          well-being of our seafarers and the communities we operate in. Our
          commitment to people-centered sustainability includes:
        </p>

        <ul className="space-y-3 px-5 sm:px-14 text-lg tracking-wide font-light list-disc marker:text-secondary">
          <li>
            <span className="font-semibold">Seafarer welfare initiatives,</span>{" "}
            ensuring mental and physical well-being through structured support
            programs.
          </li>
          <li>
            <span className="font-semibold">Safety-first culture,</span>{" "}
            reinforced through continuous training and stringent compliance
            measures.
          </li>
          <li>
            <span className="font-semibold">
              Transparent and ethical governance,
            </span>{" "}
            promoting accountability at every level of our operations.
          </li>
        </ul>
      </div>
    </>
  )
}

export default ResponsibleOperations
