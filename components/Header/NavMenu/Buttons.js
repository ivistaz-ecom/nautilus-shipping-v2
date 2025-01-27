import { facebookIcon, instagramIcon, linkedInIcon, xIcon } from "@/utils/icon"

const Buttons = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <button className="py-1.5 px-4 w-[138px] rounded-lg border border-gray-500 text-primary hover:text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
        Contact Us
      </button>

      <button className="py-1.5 px-4 w-[138px] rounded-lg border border-gray-500 text-primary hover:text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
        Careers
      </button>

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
    </div>
  )
}

export default Buttons
