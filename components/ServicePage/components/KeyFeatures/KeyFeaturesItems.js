import { keyFeaturesList } from "@/utils/data"
import Image from "next/image"

const KeyFeaturesItems = () => {
  return (
    <div className="max-w-screen-lg mx-auto w-full">
      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-10">
        {keyFeaturesList.map((item, index) => (
          <li
            key={index}
            className="bg-primary text-white text-lg text-center font-light flex flex-col items-center px-5 py-10 gap-10 rounded-lg group cursor-pointer"
          >
            <Image
              src={item.imageUrl}
              width={77}
              height={77}
              alt={`icon-${index + 1}`}
            />
            <p className="transition-transform duration-300 ease-in-out group-hover:-translate-y-3">
              {item.desc}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default KeyFeaturesItems
