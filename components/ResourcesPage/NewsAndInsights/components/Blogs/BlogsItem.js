import Image from "next/image"

const BlogsItem = ({ getFilteredBlogs }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
      {getFilteredBlogs().map((item, index) => (
        <li key={index}>
          <div className="bg-primary flex flex-col rounded-xl">
            <div className="w-full">
              <Image
                src={item.imageUrl}
                width={552}
                height={226}
                alt={`image-${index + 1}`}
                className="w-full"
              />
            </div>
            <div className="p-3 flex flex-col gap-4">
              <ul className="flex items-center gap-3">
                {item.tags.map((tag, i) => (
                  <li
                    key={i}
                    className="px-3 py-1 border rounded text-white text-xs"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <h2 className="text-white text-xl">{item.desc}</h2>
              <span className="text-sm font-light">{item.date}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default BlogsItem
