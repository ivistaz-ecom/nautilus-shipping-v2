import CareersAtSeaItem from "./CareersAtSeaItem"

const CareersAtSea = () => {
  return (
    <>
      <div className="pb-10">
        <div className="max-w-screen-xl mx-auto w-full space-y-5 px-4 text-center sm:text-left bg-[#00222F] text-white py-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light">
            Nautilus Transparent Employment Policy
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-light w-full sm:w-11/12 mx-auto sm:mx-0">
            Nautilus does not charge seafarers any fees for recruitment, joining
            our fleet, or for any part of the employment process. The cost of
            visas, the charges for pre-sign-on and post-sign-off medical
            examinations, are borne by the shipowner.
          </p>
          <p className="text-sm sm:text-base md:text-lg font-light w-full sm:w-11/12 mx-auto sm:mx-0">
            If you receive any suspicious communication claiming to be from
            Nautilus, please do not respond or share any personal details.
            Report it to us at <a href="mailto:hello@nautilusshipping.com" className="text-[#038D9C] font-semibold">hello@nautilusshipping.com</a>
          </p>
        </div>
      </div>
      <div className="">
        <div className="max-w-screen-xl mx-auto w-full space-y-5 px-4 text-center sm:text-left">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light">
            Careers at Sea
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-light w-full sm:w-11/12 mx-auto sm:mx-0">
            Embark on rewarding voyages as part of a skilled crew, navigating
            the world’s oceans with expertise. We are an RPSL-certified
            recruitment agency <strong>RPSL No: RPSL/CHN/012</strong>, ensuring
            compliance with DGS regulations.
          </p>
        </div>

        <CareersAtSeaItem />
      </div>
    </>
  )
}

export default CareersAtSea
