import Header from "@/components/Header/Header"
import Heading from "./components/Heading"
import EventsItem from "./components/EventsItem"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("/resources/events")
}

const Events = () => {
  const metadata = getMetadata("/resources/events")
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metadata.schema),
          }}
        />
      </head>
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
