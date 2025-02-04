import Header from "../Header/Header"
import Driving from "./components/Driving"
import Heading from "./components/Heading"
import OurApproach from "./components/OurApproach"
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
    </>
  )
}

export default SustainabilityPage
