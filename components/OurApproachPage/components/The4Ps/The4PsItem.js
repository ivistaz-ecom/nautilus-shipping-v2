import { the4PsList } from "@/utils/resources"
import Image from "next/image"

const The4PsItem = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-3 sm:px-0">
      <ul className="flex flex-col gap-7 w-full ">
        {the4PsList.map((item, index) => (
          <li
            key={index}
            className={`border-b border-gray-500 ${
              index === the4PsList.length - 1 ? "border-b-0" : ""
            }`}
            data-aos="flip-down"
            data-aos-delay={index * 100}
          >
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-center p-5 text-center sm:text-left">
              {/* Icon */}
              <div className="">
                <Image
                  src={item.icon}
                  width={102}
                  height={84}
                  alt={item.title}
                  className="mx-auto sm:mx-0 w-[71px] h-[57px] sm:w-[102px] sm:h-[84px]"
                />
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl text-secondary">
                  {item.title}{" "}
                  <span className="text-primary">{item.subtitle}</span>
                </h3>
                <p className="text-base sm:text-lg font-light">{item.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default The4PsItem
