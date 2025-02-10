import Image from "next/image"
import Link from "next/link"

const Heading = ({ data }) => {
  return (
    <>
      <div className="pt-24 md:pt-36 pb-14 px-4">
        <div className="max-w-screen-xl mx-auto w-full flex justify-between gap-10 md:pr-16">
          <div className="w-full flex flex-col gap-5">
            <h1
              className="text-3xl md:text-5xl font-light leading-tight md:leading-tight md:w-3/4"
              dangerouslySetInnerHTML={{ __html: data.title }}
            ></h1>

            <div className="block md:hidden">
              <Image
                src={data.imageUrl}
                width={500}
                height={425}
                alt="Ship Management"
              />
            </div>

            <Link href="/contact-us">
              <button className="py-1.5 px-4 rounded-lg border border-gray-500 text-primary hover:text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Image (Hidden on Mobile) */}
          <div className="hidden md:block">
            <Image
              src={data.imageUrl}
              width={500}
              height={425}
              alt="Ship Management"
            />
          </div>
        </div>

        {/* Description Section */}
        <div className="max-w-screen-xl w-full mx-auto pt-5 space-y-3">
          <p className="text-base md:text-xl font-light">{data.desc1}</p>
          <p className="text-base md:text-xl font-light">{data.desc2}</p>
        </div>
      </div>

      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default Heading
