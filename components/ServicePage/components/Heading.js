import Image from "next/image"
import Link from "next/link"

const Heading = ({ data }) => {
  return (
    <>
      <div className="pt-36 pb-14 px-4">
        <div className="max-w-screen-xl mx-auto w-full flex flex-col items-start gap-10 pr-16">
          <h1
            className="text-7xl font-light leading-tight"
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h1>
          <Link href="/contact-us">
            <button className="py-1.5 px-4 rounded-lg border border-gray-500 text-primary hover:text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
              Contact Us
            </button>
          </Link>

          <div className="self-end -mt-64">
            <Image
              src={data.imageUrl}
              width={500}
              height={425}
              alt="Ship Management"
            />
          </div>
        </div>

        <div className="max-w-screen-xl w-full mx-auto pt-14 space-y-3">
          <p className="text-xl font-light">{data.desc1}</p>
          <p className="text-[22px] font-light">{data.desc2}</p>
        </div>
      </div>
      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default Heading
