import { whereWeServeData } from "@/utils/data"
import Image from "next/image"

const WhereWeServe = () => {
  return (
    <div className="max-w-screen-lg mx-auto pb-3 flex-col md:flex-row justify-between items-end gap-6 hidden md:flex">
      <h3 className="text-4xl text-primary">
        Where <br /> We Serve
      </h3>

      <ul className="flex flex-wrap gap-3 justify-center md:justify-end">
        {whereWeServeData.map((item, index) => (
          <li key={index} className="relative group">
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
