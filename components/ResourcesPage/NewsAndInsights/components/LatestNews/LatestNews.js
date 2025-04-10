import Image from "next/image"
import Link from "next/link"

const LatestNews = () => {
  return (
    <>
      <div className="py-7 md:pt-8 md:pb-14">
        <div className="max-w-screen-lg sm:mx-auto w-full flex flex-col justify-between gap-5 px-3 sm:px-0">
          {/* Title */}
          <h1 className="text-3xl sm:text-6xl font-light leading-tight md:leading-tight tracking-wide">
            Latest News
          </h1>

          {/* Image & Content Block */}
          <div className="bg-primary p-3 flex flex-col sm:flex-row gap-5 rounded-md w-full lg:w-10/12">
            {/* Image */}
            <div className="w-full sm:w-[180px] lg:w-[375px] flex-shrink-0">
              <Image
                src="/latest-news/narayan.png"
                width={375}
                height={407}
                alt="Narayan Rajan"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-3 w-full sm:w-1/2 lg:w-1/2">
              <p className="text-lg text-white">
                Nautilus Shipping Featured on TradeWinds: Seafarer Welfare in
                Focus
              </p>
              <p className="text-white font-light">
                In a feature published on TradeWinds, Nautilus Shipping’s
                Co-founder and Managing Director, Narayan Rajan, shares a
                compelling perspective on the maritime industry’s responsibility
                to its workforce.
              </p>
              <p className="text-white font-light">
                The message is clear: If the industry wants to attract and
                retain seafarers, it must put their well-being first.
              </p>

              {/* Read More Button */}
              <div className="flex justify-between sm:mt-auto pb-3">
                <span className="text-white text-sm font-light mt-auto">
                  April 9, 2025
                </span>
                <Link href={`/resources/latest-news`} passHref>
                  <button className="flex items-center gap-3 mt-2 text-sm text-primary bg-white hover:bg-secondary hover:text-white rounded-md px-4 py-1.5 w-fit">
                    Read More
                    <Image
                      src="/dark-arrow.svg"
                      width={20}
                      height={20}
                      alt="arrow"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default LatestNews
