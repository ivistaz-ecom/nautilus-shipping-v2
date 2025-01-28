import { facebookIcon, instagramIcon, linkedInIcon, xIcon } from "@/utils/icon"

const SocialMediaBtn = () => {
  return (
    <div className="space-x-2">
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
  )
}

export default SocialMediaBtn
