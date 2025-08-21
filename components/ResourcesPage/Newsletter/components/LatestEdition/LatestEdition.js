import Image from "next/image"
import Link from "next/link"

const latestEditionData = [
  {
    title: "The Hands That Move the World",
    date: "July 2025",
    description:
      "The July edition of the Nautilus Newsletter is dedicated to the seafarers whose resilience and hard work power global trade. In this issue, we explore the human strength that drives the maritime industry forward, through stories, insights, and expert reflections.",
    image: "/resources/July-Newsletter-updated.webp",
    link: "/emailer/2025/July/july-newsletter-updated.pdf",
  },


  {
    title: "The Changing Tide: A Look at Maritime’s Biggest Shifts",
    date: "March 2025",
    description:
      "The March edition of the Nautilus Newsletter dwells into the waves of growth and change within the maritime industry. We dive deep into how technology will affect the sector in the coming decade and how professional seafarers must adapt to it. Discover expert insights, latest news and opinion articles on how we can gear up for the adventure ahead.",
    image: "/resources/March-Newsletter.jpg",
    link: "/emailer/2025/Mar/Nautilus-March-Newsletter.pdf",
  },
  {
    title: "Aging Vessels: Balancing Legacy and Innovation",
    date: "January 2025",
    description:
      "In this inaugural edition, we explore the untapped potential of aging vessels. With over 30% of the global fleet comprising older ships, this edition highlights their vital role in modern maritime trade. Discover case studies, expert insights, and seafarer experiences that showcase the advantages and potential of aging vessels as Nautilus leverages decades of expertise to unlock value, ensure sustainability, and drive progress.",
    image: "/resources/image01.png",
    link: "/emailer/2025/Jan/January%20Nautilus%20Newsletter%20Compressed.pdf",
  },
]

const LatestEdition = () => {
  return (
    <div className="py-14 md:px-4">
      <div className="max-w-screen-lg w-full mx-auto space-y-5 flex flex-col md:gap-10">
        <h2 className="text-5xl sm:text-7xl font-light text-center md:text-left">
          Latest Edition
        </h2>

        {latestEditionData.map((edition, index) => (
          <div
            key={index}
            className="flex flex-col gap-10 md:gap-0 items-center md:items-start md:flex-row"
          >
            {/* Left Section */}
            <div className="flex flex-col gap-3">
              <p className="text-xl sm:text-[28px] font-light">
                {edition.date}
              </p>
              <Link href={edition.link} target="_blank" className="mt-3">
                <Image
                  src={edition.image}
                  width={327}
                  height={447}
                  alt={edition.title}
                  className="rounded-lg"
                />
              </Link>
            </div>

            {/* Right Section */}
            <div className="bg-primary px-5 sm:px-8 py-8 flex flex-col gap-4 flex-1 self-center md:rounded-tr-lg md:rounded-br-lg">
              <h3 className="text-xl sm:text-[28px] text-white font-light leading-tight tracking-wide">
                {edition.title}
              </h3>
              <p className="text-base sm:text-base text-white font-light leading-tight tracking-wide">
                {edition.description}
              </p>
              <Link href={edition.link} target="_blank">
                <button className="py-1 px-4 rounded-lg bg-transparent border-white border text-white hover:bg-secondary hover:border-secondary hover:scale-95 transition-all duration-300 ease-in-out">
                  View Newsletter
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestEdition
