import Header from "@/components/Header/Header"
import Heading from "./components/Heading"
import EventsItem from "./components/EventsItem"
import EventCarousel from "./components/EventCarousel"

const Events = () => {
  return (
    <>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <Heading />
      <EventCarousel />
      <EventsItem />
      
    </>
  )
}

export default Events
