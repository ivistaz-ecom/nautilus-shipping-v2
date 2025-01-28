import { arrowIcon, arrowLeftIcon } from "@/utils/icon"
import NewsAndInsightsItem from "./NewsAndInsightsItem"

const NewsAndInsights = () => {
  return (
    <div className="bg-primary h-[60vh] py-14 flex flex-col justify-center gap-16 mt-36">
      <div className="max-w-screen-xl mx-auto w-full flex justify-between">
        {/* card 1 */}
        <div className="w-[442px] space-y-5">
          <h2 className="text-white text-8xl font-light">
            News & <br /> Insights
          </h2>
          <button className="py-1.5 px-4 bg-white rounded-lg hover:bg-secondary hover:text-white hover:scale-95 transition-all duration-300 ease-in-out">
            Read More
          </button>
        </div>

        {/* card 2 */}
        <NewsAndInsightsItem />
      </div>

      <div className="w-full">
        <div className="flex justify-end items-center">
          <div className="flex">
            <button className="text-3xl text-gray-400">{arrowLeftIcon}</button>
            <button className="text-3xl text-gray-400">{arrowIcon}</button>
          </div>
          <hr className="w-1/2 border-gray-400" />
        </div>
      </div>
    </div>
  )
}

export default NewsAndInsights
