const ResponsibleOperations = () => {
  return (
    <>
      <div className="py-14 px-4">
        <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-7">
          <h2 className="text-5xl leading-tight">
            People, Safety, and <br /> Responsible Operations
          </h2>
          <p className="text-[22px] font-light">
            Sustainability extends beyond environmental efforts—it includes the
            well-being of our seafarers and the communities we operate in. Our
            commitment to people-centered sustainability includes:
          </p>

          <ul className="px-14 text-[22px] font-light list-disc marker:text-secondary">
            <li>
              <span className="font-semibold">
                Seafarer welfare initiatives,
              </span>{" "}
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
      </div>
      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default ResponsibleOperations
