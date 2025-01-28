import { nautilusPromiseData } from "@/utils/data"
import { arrowIcon } from "@/utils/icon"

const PromiseItem = () => {
  return (
    <div className="bg-[url('/home-page/section-3/image01.png')] h-screen bg-cover">
      <div className="flex justify-between items-center h-full max-w-screen-xl mx-auto">
        <ul className="flex flex-col gap-4">
          {nautilusPromiseData.map((item, index) => {
            return (
              <li
                key={index}
                className="bg-secondary rounded-xl w-[309px] h-[110px] flex items-center px-5 relative"
              >
                <p className="text-2xl text-white font-light">{item}</p>
                <span className="absolute right-5 bottom-5 text-2xl text-white">
                  {arrowIcon}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default PromiseItem
