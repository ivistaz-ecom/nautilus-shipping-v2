import Header from "@/components/Header/Header"
import Heading from "./components/Heading"
import EventsItem from "./components/EventsItem"

const Events = () => {
  return (
    <>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <Heading />
      <EventsItem />
    </>
  )
}

export default Events
