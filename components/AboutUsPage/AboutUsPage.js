import Header from "../Header/Header"
import ExecutiveCommittee from "./components/ExecutiveCommittee"
import Heading from "./components/Heading"
import MeetOurCrew from "./components/MeetOurCrew/MeetOurCrew"
import MessageFromCeo from "./components/MessageFromCeo"

const AboutUsPage = () => {
  return (
    <>
      <Header logo="/logo.png" hamburger="/hamburger-dark.svg" />
      <Heading />
      <MessageFromCeo />
      <ExecutiveCommittee />
      <MeetOurCrew />
    </>
  )
}

export default AboutUsPage
