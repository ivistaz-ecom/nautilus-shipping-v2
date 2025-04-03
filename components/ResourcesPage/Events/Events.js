import Header from "@/components/Header/Header"
import Heading from "./components/Heading"
import EventsItem from "./components/EventsItem"

// export async function generateMetadata() {
//   return getMetadata("/resources/events")
// }

const Events = () => {
  // const metadata = getMetadata("/resources/events")
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
