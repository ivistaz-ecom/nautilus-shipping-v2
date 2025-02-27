import Image from "next/image"
import Header from "@/components/Header/Header"
import { facebookIcon, instagramIcon, linkedInIcon, xIcon } from "@/utils/icon"

// export async function generateMetadata({ params }) {
//   const { slug } = params

//   const res = await fetch(
//     `https://docs.nautilusshipping.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
//   )
//   const data = await res.json()

//   if (!data || data.length === 0) {
//     return {
//       title: "Blog Not Found | Nautilus Shipping",
//       description: "The blog you are looking for is not available.",
//     }
//   }

//   const blog = data[0]

//   return {
//     title: blog.acf?.meta_title || blog.title.rendered,
//     description: blog.acf?.meta_descriptions || "Read more about this topic.",
//     openGraph: {
//       title: blog.acf?.meta_title || blog.title.rendered,
//       description: blog.acf?.meta_descriptions || "Read more about this topic.",
//       images: [
//         {
//           url: blog._embedded["wp:featuredmedia"][0].source_url,
//           width: 1200,
//           height: 630,
//           alt: blog.title.rendered,
//         },
//       ],
//     },
//   }
// }

export default async function BlogDetails({ params }) {
  const { slug } = await params

  const res = await fetch(
    `https://docs.nautilusshipping.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
  )
  const data = await res.json()
  console.log(data[0])

  if (!data || data.length === 0) {
    return <p className="text-center text-lg">Blog not found.</p>
  }

  const blog = data[0]

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />

      <div className="pt-24 md:pt-28 pb-7 px-3 md:px-6 lg:px-4 max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
          {/* Title and Date Section */}
          <div className="flex flex-col gap-3 w-full md:w-2/5">
            {/* Categories */}
            {/* <ul className="flex flex-wrap gap-3">
              {blog.categories.map((category, i) => (
                <li key={i} className="px-3 py-1 border rounded text-xs">
                  {category}
                </li>
              ))}
            </ul> */}

            <h1
              className="text-2xl sm:text-3xl font-light text-primary"
              dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
            />
            <p className="text-xs sm:text-sm">{formattedDate}</p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              src={blog._embedded["wp:featuredmedia"][0].source_url}
              width={570}
              height={348}
              alt={blog.title.rendered}
              className="rounded-lg w-full h-auto md:h-[348px] object-cover"
            />
          </div>
        </div>
      </div>

      <hr className="border-gray-400 w-full" />

      <div className="flex flex-col md:flex-row justify-between relative">
        {/* Social Media Icons */}
        <div className="flex gap-3 absolute md:left-20 md:top-20 left-4 top-4 md:flex-col flex-row">
          <button className="p-1 rounded-lg border border-gray-500 hover:bg-secondary hover:text-white hover:scale-95 transition-all duration-300 ease-in-out">
            {linkedInIcon}
          </button>
          <button className="p-1 rounded-lg border border-gray-500 hover:bg-secondary hover:text-white hover:scale-95 transition-all duration-300 ease-in-out">
            {instagramIcon}
          </button>
          <button className="p-1 rounded-lg border border-gray-500 hover:bg-secondary hover:text-white hover:scale-95 transition-all duration-300 ease-in-out">
            {facebookIcon}
          </button>
          <button className="p-1 rounded-lg border border-gray-500 hover:bg-secondary hover:text-white hover:scale-95 transition-all duration-300 ease-in-out">
            {xIcon}
          </button>
        </div>

        {/* Blog Content Section */}
        <div className="py-7 max-w-screen-lg mx-auto flex flex-col gap-10 px-3 sm:px-10 mt-5">
          {/* Blog Description (rendering raw HTML content) */}
          <div
            className="text-lg text-gray-700 leading-relaxed blog-content"
            dangerouslySetInnerHTML={{
              __html: blog.content.rendered,
            }}
          />
        </div>
      </div>
    </>
  )
}
