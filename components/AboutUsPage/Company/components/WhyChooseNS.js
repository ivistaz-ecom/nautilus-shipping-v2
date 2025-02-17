import { WhyChooseNSList } from "@/utils/resources"

const WhyChooseNS = () => {
  return (
    <>
      <div className="py-7 md:py-14 px-3 md:px-4">
        <div className="max-w-screen-lg w-full mx-auto flex flex-col gap-10">
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-light text-left tracking-wider">
            Why Choose <br className="hidden md:block" /> Nautilus Shipping?
          </h2>

          <ul className="flex flex-wrap justify-center md:justify-start gap-5 lg:grid lg:grid-cols-4">
            {WhyChooseNSList.map((item, index) => (
              <li
                key={index}
                className="bg-primary rounded-lg w-full h-auto md:h-[300px] group cursor-pointer overflow-hidden"
                data-aos="flip-left"
                data-aos-delay={index * 200}
              >
                <div className="p-5 flex flex-col h-full justify-end text-white gap-4">
                  <h3
                    className="text-2xl font-light"
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
                    className={`text-base font-[100] opacity-0 max-h-0 tracking-wide overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-40 ${
                      index === 0 ? "opacity-100 max-h-40 pb-5" : ""
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default WhyChooseNS
