import { whereWeServeData } from "@/utils/data"
import Image from "next/image"

const WhereWeServe = () => {
  return (
    <div className="px-10 pb-3 flex justify-between items-end">
      <h3 className="text-3xl text-primary">
        Where We <br /> Serve
      </h3>

      <ul className="flex gap-3">
        {whereWeServeData.map((item, index) => {
          return (
            <li key={index}>
              <div className="flex flex-col justify-end h-[140px] group cursor-pointer relative overflow-hidden">
                <Image
                  src={item.image}
                  width={120}
                  height={100}
                  alt={item.location}
                  className="w-full absolute bottom-1 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
                />
                <span className="px-4 w-[120px] border border-[#707070] rounded text-primary text-center z-10 bg-white hover:bg-secondary hover:text-white hover:border-secondary">
                  {item.location}
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default WhereWeServe
