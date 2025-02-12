import { latestList } from "@/utils/data"
import Image from "next/image"
import Link from "next/link"

const LatestItems = () => {
  return (
    <div className="sm:px-10">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-10">
        {latestList.map((item, index) => (
          <li
            key={index}
            className="text-white text-center flex flex-col items-center gap-4"
          >
            <Image
              src={item.imageUrl}
              width={77}
              height={77}
              alt={`icon-${index + 1}`}
            />
            <h3 className="text-xl sm:text-3xl">{item.title}</h3>
            <p className="text-sm md:text-base font-light flex-grow">
              {item.desc}
            </p>
            <Link href={item.path}>
              <button className="mt-auto py-1.5 px-4 text-sm md:text-base rounded-lg bg-secondary text-white hover:bg-white hover:text-primary hover:scale-95 transition-all duration-300 ease-in-out">
                {item.btnText}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LatestItems
