import Header from "../Header/Header"
import Driving from "./components/Driving"
import Explore from "./components/Explore"
import Heading from "./components/Heading"
import OurApproach from "./components/OurApproach"
import OurCommitment from "./components/OurCommitment"
import ResponsibleOperations from "./components/ResponsibleOperations"

const SustainabilityPage = () => {
  return (
    <>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <Heading />
      <Driving />
      <OurApproach />
      <ResponsibleOperations />
      <OurCommitment />
      <Explore />
    </>
  )
}

export default SustainabilityPage
