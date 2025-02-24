import { eventsList } from "@/utils/events"
import Image from "next/image"

const EventsItem = () => {
  return (
    <div className="pt-5 pb-14">
      <ul className="flex flex-col max-w-screen-lg mx-auto gap-16">
        {eventsList.map((item, index) => {
          return (
            <li key={index}>
              <div
                className={`max-w-screen-lg w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 px-3 md:px-0 ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section (Comes first on mobile, alternates on large screens) */}
                <div className="flex justify-center">
                  <Image
                    src={item.imageUrl}
                    width={475}
                    height={400}
                    alt="Our People"
                    className="w-full max-w-[475px] lg:w-auto"
                  />
                </div>

                {/* Text Content */}
                <div className="space-y-4 lg:space-y-10 text-left">
                  <h2 className="text-xl md:text-3xl font-light tracking-wider">
                    {item.title}
                  </h2>
                  <p className="text-sm md:text-lg font-light">{item.desc}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default EventsItem
