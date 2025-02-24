import { facebookIcon, instagramIcon, linkedInIcon, xIcon } from "@/utils/icon"
import Link from "next/link"

const SocialMediaBtn = () => {
  return (
    <div className="space-x-2 flex justify-between">
      <Link
        href="https://www.linkedin.com/company/nautilusshipping/posts/?feedView=all"
        target="_blank"
      >
        <button
          type="button"
          className="p-1 rounded-lg border border-gray-500 hover:bg-secondary hover:text-white hover:scale-95 transition-all duration-300 ease-in-out"
        >
          {linkedInIcon}
        </button>
      </Link>
      <Link href="https://www.instagram.com/nautilusshipping" target="_blank">
        <button
          type="button"
          className="p-1 rounded-lg border border-gray-500 hover:bg-secondary hover:text-white hover:scale-95 transition-all duration-300 ease-in-out"
        >
          {instagramIcon}
        </button>
      </Link>
      <Link
        href="https://www.facebook.com/NautilusShippingIndia"
        target="_blank"
      >
        <button
          type="button"
          className="p-1 rounded-lg border border-gray-500 hover:bg-secondary hover:text-white hover:scale-95 transition-all duration-300 ease-in-out"
        >
          {facebookIcon}
        </button>
      </Link>
      <Link href="https://x.com/Nautilushipping" target="_blank">
        <button
          type="button"
          className="p-1 rounded-lg border border-gray-500 hover:bg-secondary hover:text-white hover:scale-95 transition-all duration-300 ease-in-out"
        >
          {xIcon}
        </button>
      </Link>
    </div>
  )
}

export default SocialMediaBtn
