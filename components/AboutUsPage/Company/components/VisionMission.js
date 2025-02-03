import { visionMissionList } from "@/utils/resources"

const VisionMission = () => {
  return (
    <>
      <div className="pb-14 px-4">
        <div className="max-w-screen-xl mx-auto w-full flex justify-between gap-10">
          {visionMissionList.map((item, index) => {
            return (
              <div
                key={index}
                className="border border-primary rounded-lg p-5 w-full space-y-4"
              >
                <h3 className="text-3xl font-light">{item.title}</h3>
                <p className="text-xl font-light">{item.desc}</p>
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
