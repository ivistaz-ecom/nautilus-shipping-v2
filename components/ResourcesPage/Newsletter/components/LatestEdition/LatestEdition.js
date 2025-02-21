import Image from "next/image"
import Link from "next/link"

const LatestEdition = () => {
  return (
    <div className="py-14 md:px-4">
      <div className="max-w-screen-lg w-full mx-auto space-y-5 sm:space-y-10">
        <h2 className="text-5xl sm:text-7xl font-light text-center md:text-left">
          Latest Edition
        </h2>

        <div className="flex flex-col gap-10 md:gap-0 items-center md:items-start md:flex-row">
          {/* Left Section */}
          <div className="space-y-3">
            <p className="text-xl sm:text-[28px] font-light">January 2025</p>
            <Image
              src="/resources/image01.png"
              width={327}
              height={447}
              alt="latest edition"
            />
          </div>

          {/* Right Section */}
          <div className="bg-primary px-5 sm:px-8 py-8 flex flex-col gap-4 flex-1 self-center">
            <h3 className="text-xl sm:text-[28px] text-white font-light leading-tight tracking-wide">
              Aging Vessels: Balancing Legacy and Innovation
            </h3>
            <p className="text-base sm:text-base text-white font-light leading-tight tracking-wide">
              In this inaugural edition, we explore the untapped potential of
              aging vessels. With over 30% of the global fleet comprising older
              ships, this edition highlights their vital role in modern maritime
              trade. Discover case studies, expert insights, and seafarer
              experiences that showcase the advantages and potential of aging
              vessels as Nautilus leverages decades of expertise to unlock
              value, ensure sustainability, and drive progress.
            </p>
            <Link
              href="https://www.nautilusshipping.com/emailer/2025/Jan/January%20Nautilus%20Newsletter%20Compressed.pdf"
              target="_blank"
            >
              <button className="py-1 px-4 rounded-lg bg-transparent border-white border text-white hover:bg-secondary hover:border-secondary hover:scale-95 transition-all duration-300 ease-in-out">
                View Newsletter
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestEdition
