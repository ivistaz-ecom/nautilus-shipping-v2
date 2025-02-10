import MeetOurCrewItems from "./MeetOurCrewItems"

const MeetOurCrew = () => {
  return (
    <div className="py-14 px-4">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col sm:flex-row justify-between items-start gap-6">
        <h2 className="text-3xl sm:text-6xl font-light w-full sm:w-1/2 text-center sm:text-left">
          Meet Our Crew
        </h2>
        <p className="text-lg sm:text-xl w-full sm:w-3/4 px-5 text-center sm:text-left leading-tight">
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
