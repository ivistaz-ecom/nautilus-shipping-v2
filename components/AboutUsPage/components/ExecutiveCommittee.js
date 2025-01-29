import { executiveCommitteeData } from "@/utils/member"
import Image from "next/image"

const ExecutiveCommittee = () => {
  return (
    <>
      <div className="py-14 px-4">
        <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-14">
          <h2 className="text-6xl font-light">
            The Executive <br /> Committee
          </h2>

          <div className="max-w-screen-xl w-full md:pr-20 flex justify-center">
            <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {executiveCommitteeData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="border border-secondary min-w-[200px] rounded-md group overflow-hidden cursor-pointer shadow-md"
                  >
                    <div className="overflow-hidden rounded-t-md">
                      <Image
                        src="/about-us/member/Ajay.jpg"
                        width={250}
                        height={270}
                        alt={item.name}
                        className="w-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-300 ease-in-out"
                      />
                    </div>
                    <div className="bg-primary rounded-b-md flex justify-between py-2 px-3 h-full">
                      <div className="space-y-1 text-white">
                        <p>{item.name}</p>
                        <p className="text-xs">{item.post}</p>
                      </div>
                      <Image
                        src="/arrow.svg"
                        width={25}
                        height={25}
                        alt="arrow"
                      />
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default ExecutiveCommittee
