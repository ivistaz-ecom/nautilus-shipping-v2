import Link from "next/link"

const VisitBlogs = () => {
  return (
    <div className="pb-10 py-2 md:pb-14 max-w-screen-xl mx-auto px-3 md:px-0">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl sm:text-5xl font-light tracking-wide">
          Keep Up With the Maritime Industry
        </h2>
        <p className="text-base sm:text-lg font-light tracking-wide mt-3">
          The most recent articles, press releases, reports and case studies.
        </p>
        <Link href="/resources/news-and-insights">
          <button className="py-1.5 px-6 mt-3 rounded-lg bg-primary text-white hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
            Explore Our Insights
          </button>
        </Link>
      </div>
    </div>
  )
}

export default VisitBlogs
