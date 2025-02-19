import { visionMissionList } from "@/utils/resources"

const VisionMission = () => {
  return (
    <>
      <div className="pb-14 px-3 md:px-4">
        <div className="max-w-screen-lg mx-auto w-full flex flex-col md:flex-row justify-between gap-5 md:gap-10">
          {visionMissionList.map((item, index) => {
            return (
              <div
                key={index}
                className="relative border border-primary rounded-lg p-3 md:p-5 w-full md:w-1/2 space-y-4 overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:border-secondary cursor-pointer group"
                data-aos={item.animation}
              >
                {/* Background overlay for left-to-right fill effect */}
                <div className="absolute inset-0 bg-secondary scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>

                {/* Content (text and description) */}
                <h3 className="relative text-xl sm:text-3xl font-light text-primary group-hover:text-white transition duration-300">
                  {item.title}
                </h3>
                <p className="relative text-base sm:text-lg font-[100] text-primary group-hover:text-white transition duration-300">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default VisionMission
