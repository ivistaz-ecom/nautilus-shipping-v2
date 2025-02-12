import The4PsItem from "./The4PsItem"

const The4Ps = () => {
  return (
    <div className="py-7 md:py-14 space-y-6 sm:space-y-10">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-0">
        <h2 className="text-2xl sm:text-5xl md:text-6xl leading-tight md:leading-tight">
          The 4Ps: Our Commitment to <br className="hidden sm:block" /> Your
          Fleet’s Success
        </h2>
      </div>
      <The4PsItem />
    </div>
  )
}

export default The4Ps
