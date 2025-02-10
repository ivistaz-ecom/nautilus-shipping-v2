import { whereWeServeData } from "@/utils/data"
import Image from "next/image"

const WhereWeServe = () => {
  return (
    <div className="px-6 md:px-10 pb-3 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 overflow-hidden">
      {/* Title */}
      <h3 className="text-3xl text-primary whitespace-nowrap">
        Where We <br className="hidden md:block" /> Serve
      </h3>

      {/* List Container */}
      <ul className="flex gap-3 md:flex-wrap md:justify-end overflow-x-auto max-md:snap-x max-md:snap-mandatory scrollbar-hide">
        {whereWeServeData.map((item, index) => (
          <li key={index} className="relative group snap-center shrink-0">
            <div className="flex flex-col justify-end h-[140px] cursor-pointer relative overflow-hidden">
              <Image
                src={item.image}
                width={120}
                height={100}
                alt={item.location}
                className="w-full absolute bottom-1 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
              />
              <span className="px-4 w-[120px] border border-[#707070] rounded text-primary text-center z-10 bg-white hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 ease-in-out">
                {item.location}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WhereWeServe
