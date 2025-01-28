import { for17yearsData } from "@/utils/data"
import Image from "next/image"

const For17Years = () => {
  return (
    <div className="min-h-screen bg-primary py-14 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-between h-full gap-14">
        <h2 className="text-white text-8xl text-center font-light">
          For 17 Years
        </h2>

        <div className="border rounded-xl p-10 w-full space-y-5">
          <p className="text-white text-xl">
            Nautilus Shipping has stood as a trusted partner in ship management
            services, driven by our commitment to reliability, performance, and
            sustainable solutions.
          </p>
          <p className="text-white text-xl">
            Using our proven 4Ps approach, we manage vessels and support ship
            owners with tailored strategies to enhance profitability, crew
            welfare, and environmental responsibility. Our focus on technical
            management shipping ensures the highest standards of operational
            efficiency. With established industry relationships and a commitment
            to vessel management, we strive to provide a seamless experience for
            our clients.
          </p>
        </div>

        <ul className="flex justify-between">
          {for17yearsData.map((item, index) => {
            return (
              <li
                key={index}
                className={`${
                  index < for17yearsData.length - 1 ? "border-r" : "border-none"
                } w-full`}
              >
                <div className="flex flex-col gap-8 items-center p-10">
                  <Image
                    src={item.icon}
                    width={70}
                    height={70}
                    alt={item.title}
                  />
                  <div className="space-y-4">
                    <p className="text-white text-5xl text-center font-semibold">
                      {item.number}
                    </p>
                    <p className="text-white text-xl text-center">
                      {item.title}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default For17Years
