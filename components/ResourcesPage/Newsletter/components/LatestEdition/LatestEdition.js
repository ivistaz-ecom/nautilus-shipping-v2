import Image from "next/image"

const LatestEdition = () => {
  return (
    <div className="py-14 px-4">
      <div className="max-w-screen-xl w-full mx-auto space-y-5">
        <h2 className="text-7xl font-light">Latest Edition</h2>
        <div className="flex">
          <div className="space-y-3 w-full">
            <p className="text-[28px] font-light">January 2025</p>
            <Image
              src="/resources/image01.png"
              width={327}
              height={447}
              alt="latest edition"
            />
          </div>
          <div className="bg-primary px-5 py-8 space-y-4 self-center">
            <h3 className="text-[28px] text-white font-light">
              Aging Vessels: Balancing Legacy and Innovation
            </h3>
            <p className="text-xl text-white font-light">
              In this inaugural edition, we explore the untapped potential of
              aging vessels. With over 30% of the global fleet comprising older
              ships, this edition highlights their vital role in modern maritime
              trade. Discover case studies, expert insights, and seafarer
              experiences that showcase the advantages and potential of aging
              vessels as Nautilus leverages decades of expertise to unlock
              value, ensure sustainability, and drive progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestEdition
