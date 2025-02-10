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
    <div className="flex flex-col md:flex-row justify-between border-b border-dotted pb-6 gap-6 md:gap-0">
      {/* card 1 */}
      <div className="space-y-3 p-5 w-full md:w-80 flex flex-col items-center md:items-start">
        <Image
          src="/logo.png"
          width={143}
          height={61}
          alt="Nautilus Shipping"
        />
        <p className="text-primary text-sm text-center md:text-left">
          Stay Updated with <br /> Nautilus Highlights
        </p>
        <div className="flex flex-col items-center md:items-start gap-3 w-full">
          <input
            type="text"
            className="border-b border-t-0 border-x-0 border-gray-300 p-1.5 focus:outline-none focus:ring-0 focus:border-gray-500 appearance-none w-full"
            placeholder="Email"
          />
          <button className="py-1.5 px-4 bg-primary text-white rounded-lg hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
            Subscribe
          </button>
        </div>
      </div>

      {/* card 2 */}
      <div className="flex flex-col sm:flex-row justify-around p-5 w-full border-x border-dotted gap-6 sm:gap-0">
        <ul className="flex flex-col gap-2 text-primary text-center sm:text-left">
          <h3 className="underline mb-3">Information</h3>
          {informationList.map(({ name, path }) => (
            <li key={name}>
              <Link
                href={path}
                className="hover:text-secondary transition-colors duration-300"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 text-primary text-center sm:text-left">
          <h3 className="underline mb-3">Helpful Links</h3>
          {helpfulLinksList.map(({ name, path }) => (
            <li key={name}>
              <Link
                href={path}
                className="hover:text-secondary transition-colors duration-300"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 text-primary text-center sm:text-left">
          <h3 className="underline mb-3">Our Services</h3>
          {servicesList.map(({ name, path }) => (
            <li key={name}>
              <Link
                href={path}
                className="hover:text-secondary transition-colors duration-300"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* card 3 */}
      <div className="flex flex-col items-center p-5 w-full md:w-80">
        <div className="space-y-3 text-center">
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
