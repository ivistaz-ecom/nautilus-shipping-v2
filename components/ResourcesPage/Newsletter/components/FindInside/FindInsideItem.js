import { findInsideList } from "@/utils/resources"

const FindInsideItem = () => {
  return (
    <ul className="flex gap-5">
      {findInsideList.map((item, index) => {
        return (
          <li
            key={index}
            className="border border-gray-400 rounded-lg w-[300px] h-auto"
          >
            <div className="py-3 border-b border-gray-400">
              <h3 className="text-[22px] font-light text-white text-center">
                {item.title}
              </h3>
            </div>
            <p className="p-5 text-lg font-light text-center text-white">
              {item.desc}
            </p>
          </li>
        )
      })}
    </ul>
  )
}

export default FindInsideItem
