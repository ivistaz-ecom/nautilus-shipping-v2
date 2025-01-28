import { newsAndInsightsData } from "@/utils/data"

const NewsAndInsightsItem = () => {
  return (
    <ul className="flex gap-5">
      {newsAndInsightsData.map((item, index) => {
        return (
          <li
            key={index}
            className="border border-gray-400 rounded-lg w-[208px] h-[241px]"
          >
            <div className="flex flex-col items-start gap-7 p-4 h-full">
              <div className="w-full space-y-2">
                <h3 className="text-white text-[22px] font-light">
                  {item.title}
                </h3>
                <hr className="border-gray-400" />
              </div>
              <p className="text-xs text-white font-light flex-grow">
                {item.desc}
              </p>
              <button className="py-1.5 px-4 border border-gray-400 text-white text-xs rounded-lg hover:bg-white hover:text-primary hover:scale-95 transition-all duration-300 ease-in-out">
                Read More
              </button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default NewsAndInsightsItem
