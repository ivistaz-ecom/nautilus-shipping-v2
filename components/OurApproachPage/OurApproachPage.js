import Header from "../Header/Header"
import ContactUs from "./components/ContactUs"
import ExperienceAPartnership from "./components/ExperienceAPartnership"
import Heading from "./components/Heading"
import The4Ps from "./components/The4Ps/The4Ps"
import UncoverNewValue from "./components/UncoverNewValue"

const OurApproachPage = () => {
  return (
    <>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <Heading />
      <UncoverNewValue />
      <The4Ps />
      <ExperienceAPartnership />
      <ContactUs />
    </>
  )
}

export default OurApproachPage
