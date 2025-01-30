import MeetOurCrewItems from "./MeetOurCrewItems"

const MeetOurCrew = () => {
  return (
    <div className="py-14 px-4">
      <div className="max-w-screen-xl mx-auto w-full flex justify-between">
        <h2 className="text-6xl font-light w-full">Meet Our Crew</h2>
        <p className="text-xl w-3/4 p-5">
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
