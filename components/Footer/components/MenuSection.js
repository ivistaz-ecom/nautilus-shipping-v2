import Image from "next/image"
import SocialMediaBtn from "../../SocialMediaBtn/SocialMediaBtn"
import {
  helpfulLinksList,
  informationList,
  servicesList,
} from "@/utils/resources"
import Link from "next/link"

const MenuSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:border-b border-dashed border-gray-400 py-5 gap-6 md:gap-0">
      {/* card 1 */}
      <div className="pb-7 md:p-4 w-full md:w-80 flex flex-col items-center md:items-start gap-3 border-b border-dotted border-gray-400">
        <Image
          src="/logo.png"
          width={143}
          height={61}
          alt="Nautilus Shipping"
          className="hidden md:block"
        />
        <p className="text-primary text-base self-start">
          Stay Updated with Nautilus Highlights
        </p>
        <div className="flex flex-col items-start gap-3 w-full">
          <input
            type="text"
            className="border-b border-t-0 border-x-0 border-gray-300 p-1.5 focus:outline-none focus:ring-0 focus:border-gray-500 appearance-none w-full"
            placeholder="Email"
          />
          <button className="py-1.5 px-4 text-sm bg-primary text-white rounded-lg hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
            Subscribe
          </button>
        </div>
      </div>

      {/* card 2 */}
      <div className="flex flex-row justify-around md:p-4 w-full md:border-x border-dotted border-gray-400 gap-6 sm:gap-0">
        <ul className="flex flex-col gap-2 text-primary text-left">
          <h3 className="underline mb-3 text-sm md:text-base">Information</h3>
          {informationList.map(({ name, path }) => (
            <li key={name}>
              <Link
                href={path}
                className="hover:text-secondary transition-colors duration-300 text-sm md:text-base"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 text-primary text-left">
          <h3 className="underline mb-3 text-sm md:text-base">Helpful Links</h3>
          {helpfulLinksList.map(({ name, path }) => (
            <li key={name}>
              <Link
                href={path}
                className="hover:text-secondary transition-colors duration-300 text-sm md:text-base"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 text-primary text-left">
          <h3 className="underline mb-3 text-sm md:text-base">Our Services</h3>
          {servicesList.map(({ name, path }) => (
            <li key={name}>
              <Link
                href={path}
                className="hover:text-secondary transition-colors duration-300 text-sm md:text-base"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* card 3 */}
      <div className="flex flex-col items-center p-4 w-full md:w-80">
        <div className="space-y-3 text-center hidden md:block">
          <Image
            src="/footer/image01.png"
            width={105}
            height={105}
            alt="Hiring"
          />
          <p className="text-primary text-sm">Follow us</p>
          <SocialMediaBtn />
        </div>
      </div>
    </div>
  )
}

export default MenuSection
