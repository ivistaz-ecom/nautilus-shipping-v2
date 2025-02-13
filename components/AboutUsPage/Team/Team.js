import Header from "@/components/Header/Header"
import Heading from "./components/Heading"
import MessageFromCeo from "./components/MessageFromCeo"
import MeetOurCrew from "./components/MeetOurCrew/MeetOurCrew"

const Team = () => {
  return (
    <div>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <Heading />
      <MessageFromCeo />
      <MeetOurCrew />
    </div>
  )
}

export default Team
