import { the4PsList } from "@/utils/resources"

const The4PsItem = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2">
      {the4PsList.map((item, index) => (
        <li key={index} className="flex">
          <div className="flex flex-col border-b border-primary md:border-r flex-grow">
            {/* Header Section */}
            <div className="bg-primary py-5 flex justify-center">
              <h3 className="text-white text-xl md:text-3xl">
                {item.title}
                <span className="text-secondary">{item.subtitle}</span>
              </h3>
            </div>

            {/* Content Section */}
            <div className="px-3 sm:px-10 lg:px-20 py-6 sm:py-10 flex-grow">
              <p className="text-base sm:text-xl font-light">{item.desc}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default The4PsItem
