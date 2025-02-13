import MeetOurCrewItems from "./MeetOurCrewItems"

const MeetOurCrew = () => {
  return (
    <div className="py-10 md:py-14 px-4">
      <div className="max-w-screen-lg mx-auto w-full flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6">
        <h2 className="text-2xl xs:text-3xl sm:text-6xl font-light text-center sm:text-left leading-tight">
          Meet Our Crew
        </h2>
        <p className="text-base xs:text-lg sm:text-lg w-full sm:w-2/5 px-2 sm:px-5 font-[100] text-center sm:text-left">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <MeetOurCrewItems />
    </div>
  )
}

export default MeetOurCrew
