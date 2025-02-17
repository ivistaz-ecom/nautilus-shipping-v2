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
                className="border border-primary rounded-lg p-3 md:p-5 w-full md:w-1/2 space-y-4"
                data-aos={item.animation}
              >
                <h3 className="text-xl sm:text-3xl font-light">{item.title}</h3>
                <p className="text-base sm:text-lg font-[100]">{item.desc}</p>
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
