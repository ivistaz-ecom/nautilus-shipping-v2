import { WhyChooseNSList } from "@/utils/resources"

const WhyChooseNS = () => {
  return (
    <>
      <div className="py-14 px-4">
        <div className="max-w-screen-xl w-full mx-auto space-y-10">
          <h2 className="text-7xl font-light">
            Why Choose <br /> Nautilus Shipping?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {WhyChooseNSList.map((item, index) => {
              return (
                <li
                  key={index}
                  className="bg-primary rounded-lg w-[285px] h-[364px] group cursor-pointer overflow-hidden"
                >
                  <div className="p-3 flex flex-col h-full justify-end text-white gap-4">
                    <h3
                      className="text-[28px]"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></h3>

                    <hr
                      className={`border-white transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:visible ${
                        index === 0
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    />

                    <p
                      className={`text-xl font-light opacity-0 max-h-0 tracking-wide overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-40 group-hover:pb-10 ${
                        index === 0 ? "opacity-100 max-h-40 pb-10" : ""
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default WhyChooseNS
