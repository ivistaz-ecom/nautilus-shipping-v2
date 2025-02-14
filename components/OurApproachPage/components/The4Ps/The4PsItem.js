import { the4PsList } from "@/utils/resources"
import Image from "next/image"

const The4PsItem = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-3 sm:px-0">
      <ul className="flex flex-col gap-7 w-full  border border-gray-500">
        {the4PsList.map((item, index) => (
          <li
            key={index}
            className={`border-b border-gray-500 ${
              index === the4PsList.length - 1 ? "border-b-0" : ""
            }`}
          >
            <div className="flex gap-10 items-center justify-between p-5">
              <div>
                <Image
                  src={item.icon}
                  width={102}
                  height={84}
                  alt={item.title}
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl text-secondary">
                  {item.title}{" "}
                  <span className="text-primary">{item.subtitle}</span>
                </h3>
                <p className="text-lg font-light">{item.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default The4PsItem
