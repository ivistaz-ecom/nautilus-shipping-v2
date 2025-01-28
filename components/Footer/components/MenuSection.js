import Image from "next/image"
import SocialMediaBtn from "../../SocialMediaBtn/SocialMediaBtn"

const MenuSection = () => {
  return (
    <div className="flex justify-between border-b border-dotted pb-3">
      {/* card 1 */}
      <div className="space-y-3 p-5 w-80">
        <Image
          src="/logo.png"
          width={143}
          height={61}
          alt="Nautilus Shipping"
        />
        <p className="text-primary text-sm">
          Stay Updated with <br /> Nautilus Highlights
        </p>
        <div className="flex flex-col items-start gap-3">
          <input
            type="text"
            className="border-b border-t-0 border-x-0 border-gray-300 p-1.5 focus:outline-none focus:ring-0 focus:border-gray-500 appearance-none"
            placeholder="Email"
          />
          <button className="py-1.5 px-4 bg-primary text-white rounded-lg hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
            Subscribe
          </button>
        </div>
      </div>

      {/* card 2 */}
      <div className="flex justify-around p-5 w-full border-x border-dotted ">
        <ul className="flex flex-col gap-3 text-primary">
          <h3 className="underline mb-3">Information</h3>
          <li>About Us</li>
          <li>Our Approach</li>
          <li>Our Team</li>
          <li>Fleet</li>
          <li>Sustainability</li>
        </ul>
        <ul className="flex flex-col gap-3 text-primary">
          <h3 className="underline mb-3">Helpful Links</h3>
          <li>Contact Us</li>
          <li>Careers</li>
          <li>Events</li>
          <li>News And Insights</li>
        </ul>
        <ul className="flex flex-col gap-3 text-primary">
          <h3 className="underline mb-3">Our Services</h3>
          <li>Ship Management</li>
          <li>Crew Management</li>
          <li>Inspection</li>
          <li>Commercial Services</li>
        </ul>
      </div>

      {/* card 3 */}
      <div className="flex flex-col items-center p-5 w-80">
        <div className="space-y-3">
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
