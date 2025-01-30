import { latestList } from "@/utils/data"
import Image from "next/image"

const LatestItems = () => {
  return (
    <div className="px-10">
      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-10">
        {latestList.map((item, index) => (
          <li
            key={index}
            className="bg-primary text-white text-center flex flex-col items-center px-5 py-10 gap-5 rounded-lg"
          >
            <Image
              src={item.imageUrl}
              width={77}
              height={77}
              alt={`icon-${index + 1}`}
            />
            <h3 className="text-[28px] font-semibold">{item.title}</h3>
            <p className="text-lg font-light flex-grow">{item.desc}</p>
            <button className="py-1.5 px-4 rounded-lg bg-secondary text-white hover:bg-white hover:text-primary hover:scale-95 transition-all duration-300 ease-in-out">
              {item.btnText}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LatestItems
