import Link from "next/link"

const Game = () => {
  return (
    <div
      className="flex flex-col items-center gap-4 max-w-screen-lg bg-gradient-to-r from-primary to-secondary 
        px-3 sm:px-6 py-5 sm:py-12 text-white rounded-2xl shadow-xl 
        transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] mx-3 md:mx-auto"
    >
      <h2 className="text-3xl sm:text-5xl tracking-wide text-center font-light">
        Hidden Costs <br className="block md:hidden" />{" "}
        <span className="text-xl md:text-5xl">– Can You Find Them?</span>
      </h2>
      <p className="text-base sm:text-lg font-light tracking-wide text-center sm:w-3/4">
        There’s more to a ship’s budget than meets the eye. Can you uncover the
        hidden expenses before they take you by surprise?
      </p>
      <div className="flex justify-center">
        <Link href="https://hiddencosts.nautilusshipping.com" target="_blank">
          <button
            className="group relative py-1.5 px-6 rounded-lg border border-white/20 
              bg-secondary text-white font-medium shadow-lg 
              hover:bg-white hover:text-secondary transition-all duration-300 
              ease-in-out hover:scale-105"
          >
            Play Now
            <span
              className="absolute inset-0 rounded-lg bg-white opacity-10 
                group-hover:opacity-20 transition-opacity duration-300"
            ></span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Game
