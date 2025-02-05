import { the4PsList } from "@/utils/resources"

const The4PsItem = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
      {the4PsList.map((item, index) => (
        <li key={index} className="flex">
          <div className="flex flex-col border-r border-b border-primary flex-grow">
            {/* Header Section */}
            <div className="bg-primary px-20 py-7 flex-grow">
              <h3 className="text-white text-4xl w-3/4">
                {item.title}
                <span className="text-secondary">{item.subtitle}</span>
              </h3>
            </div>

            {/* Content Section */}
            <div className="px-20 py-10 flex-grow">
              <p className="text-xl font-light">{item.desc}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default The4PsItem
