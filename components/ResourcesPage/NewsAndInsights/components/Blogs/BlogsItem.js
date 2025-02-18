import Image from "next/image"
import Link from "next/link"

const BlogsItem = ({ getFilteredBlogs }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
      {getFilteredBlogs().map((item, index) => (
        <li key={index}>
          <Link href={`/resources/news-and-insights/${item.slug}`} passHref>
            <div className="bg-primary flex flex-col rounded-xl">
              <div className="w-full">
                <Image
                  src={item.imageUrl}
                  width={552}
                  height={226}
                  alt={item.title}
                  className="rounded-t-xl w-[552px] h-[226px]"
                />
              </div>
              <div className="p-3 flex flex-col gap-4">
                {/* <ul className="flex items-center gap-3">
                  {item.categories.map((tag, i) => (
                    <li
                      key={i}
                      className="px-3 py-1 border rounded text-white text-xs"
                    >
                      {tag}
                    </li>
                  ))}
                </ul> */}
                <h2
                  className="text-white text-xl"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h2>
                <span className="text-white text-sm font-light">
                  {item.date}
                </span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default BlogsItem
