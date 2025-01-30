import Header from "@/components/Header/Header"
import Heading from "./components/Heading"
import MessageFromCeo from "./components/MessageFromCeo"
import ExecutiveCommittee from "./components/ExecutiveCommittee"
import MeetOurCrew from "./components/MeetOurCrew/MeetOurCrew"

const Team = () => {
  return (
    <>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <Heading />
      <MessageFromCeo />
      <ExecutiveCommittee />
      <MeetOurCrew />
    </>
  )
}

export default Team
