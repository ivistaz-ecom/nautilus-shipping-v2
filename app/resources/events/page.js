import Events from "@/components/ResourcesPage/Events/Events"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("/resources/events")
}

export default function Page() {
  // const seoField = {
  //   title: "Past & Upcoming Events | Nautilus Shipping",
  //   description:
  //     "Stay updated with the latest events hosted and attended by Nautilus Shipping. Join us to gain insights into the maritime industry, learn from experts, and network with peers. These events are designed to foster professional growth, share industry best practices, and discuss innovative solutions in ship management.",
  //   path: "/resources/events",
  //   metaImage: "",
  //   pageType: "WebSite",
  // }

  return (
    <>
      <Events />
    </>
  )
}
