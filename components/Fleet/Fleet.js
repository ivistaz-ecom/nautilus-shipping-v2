import Header from "../Header/Header"
import GetInTouch from "./Components/GetInTouch"
import Heading from "./Components/Heading"
import OurExpertise from "./Components/OurExpertise"
import OurFleet from "./Components/OurFleet"

const Fleet = () => {
  return (
    <>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <Heading />
      <OurFleet />
      <OurExpertise />
      <GetInTouch />
    </>
  )
}

export default Fleet
